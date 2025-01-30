use anyhow::Result;
use async_trait::async_trait;
use reqwest::Client;
use serde_json::Value;
use std::time::Duration;

use super::base::{ConfigKey, Provider, ProviderMetadata, ProviderUsage, Usage};
use super::errors::ProviderError;
use super::formats::openai::{create_request, get_usage, response_to_message};
use super::utils::{emit_debug_trace, get_model, handle_response_openai_compat, ImageFormat};
use crate::message::Message;
use crate::model::ModelConfig;
use mcp_core::tool::Tool;

// Azure OpenAI uses deployments to manage model access, so the model name
// comes from the deployment configuration rather than being hardcoded.
// The actual model (gpt-4, gpt-35-turbo, etc.) is specified in the Azure deployment.
pub const AZURE_DEFAULT_MODEL: &str = "gpt-4o";
pub const AZURE_DOC_URL: &str =
    "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models";

pub const AZURE_OPENAI_KNOWN_MODELS: &[&str] = &[
    "gpt-4o",
    "gpt-4o-mini",
    "o1",
    "o1-mini",
    "o1-preview",
    "gpt-4",
];

#[derive(Debug, serde::Serialize)]
pub struct AzureProvider {
    #[serde(skip)]
    client: Client,
    endpoint: String,
    api_key: String,
    deployment_name: String,
    model: ModelConfig,
}

impl Default for AzureProvider {
    fn default() -> Self {
        let model = ModelConfig::new(AzureProvider::metadata().default_model);
        AzureProvider::from_env(model).expect("Failed to initialize Azure OpenAI provider")
    }
}

impl AzureProvider {
    pub fn from_env(model: ModelConfig) -> Result<Self> {
        let config = crate::config::Config::global();
        let api_key: String = config.get_secret("AZURE_OPENAI_API_KEY")?;
        let endpoint: String = config.get("AZURE_OPENAI_ENDPOINT")?;
        let deployment_name: String = config.get("AZURE_OPENAI_DEPLOYMENT_NAME")?;

        let client = Client::builder()
            .timeout(Duration::from_secs(600))
            .build()?;

        Ok(Self {
            client,
            endpoint,
            api_key,
            deployment_name,
            model,
        })
    }

    async fn post(&self, payload: Value) -> Result<Value, ProviderError> {
        let url = format!(
            "{}/openai/deployments/{}/chat/completions?api-version=2024-02-15-preview",
            self.endpoint.trim_end_matches('/'),
            self.deployment_name
        );

        let response: reqwest::Response = self
            .client
            .post(&url)
            .header("api-key", &self.api_key)
            .json(&payload)
            .send()
            .await?;

        handle_response_openai_compat(response).await
    }
}

#[async_trait]
impl Provider for AzureProvider {
    fn metadata() -> ProviderMetadata {
        ProviderMetadata::new(
            "azure_openai",
            "Azure OpenAI",
            "Models through Azure OpenAI Service",
            "gpt-4o",
            AZURE_OPENAI_KNOWN_MODELS
                .iter()
                .map(|s| s.to_string())
                .collect(),
            AZURE_DOC_URL,
            vec![
                ConfigKey::new("AZURE_OPENAI_API_KEY", true, true, None),
                ConfigKey::new("AZURE_OPENAI_ENDPOINT", true, false, None),
                ConfigKey::new(
                    "AZURE_OPENAI_DEPLOYMENT_NAME",
                    true,
                    false,
                    Some("Name of your Azure OpenAI deployment"),
                ),
            ],
        )
    }

    fn get_model_config(&self) -> ModelConfig {
        self.model.clone()
    }

    #[tracing::instrument(
        skip(self, system, messages, tools),
        fields(model_config, input, output, input_tokens, output_tokens, total_tokens)
    )]
    async fn complete(
        &self,
        system: &str,
        messages: &[Message],
        tools: &[Tool],
    ) -> Result<(Message, ProviderUsage), ProviderError> {
        let payload = create_request(&self.model, system, messages, tools, &ImageFormat::OpenAi)?;

        // Make request
        let response = self.post(payload.clone()).await?;

        // Parse response
        let message = response_to_message(response.clone())?;
        let usage = match get_usage(&response) {
            Ok(usage) => usage,
            Err(ProviderError::UsageError(e)) => {
                tracing::warn!("Failed to get usage data: {}", e);
                Usage::default()
            }
            Err(e) => return Err(e),
        };
        let model = get_model(&response);
        emit_debug_trace(self, &payload, &response, &usage);
        Ok((message, ProviderUsage::new(model, usage)))
    }
}
