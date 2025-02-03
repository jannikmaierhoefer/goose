---
sidebar_position: 7
title: Observability
---

# Observability with Langfuse

This guide shows you how to integrate Goose with Langfuse to monitor your Goose requests and understand how the agent is performing.

## What is Langfuse?

[Langfuse](https://langfuse.com/) ([GitHub](https://github.com/langfuse/langfuse)) is the open-source LLM engineering platform. It allows teams to collaboratively monitor, evaluate, and debug their LLM applications.

## Get Started

This guide will walk you through the steps to integrate Goose with Langfuse.

### 1. Set up Langfuse

Sign up for Langfuse Cloud [here](https://cloud.langfuse.com) or self-host Langfuse [Docker Compose](https://langfuse.com/self-hosting/local) to get your Langfuse API keys.

### 2. Configure Goose to Connect to Langfuse

Set the environment variables so that Goose (written in Rust) can connect to the Langfuse server.

```bash
export LANGFUSE_INIT_PROJECT_PUBLIC_KEY=pk-lf-...
export LANGFUSE_INIT_PROJECT_SECRET_KEY=sk-lf-...
export LANGFUSE_HOST=https://cloud.langfuse.com # EU data region 🇪🇺

# https://us.cloud.langfuse.com if you're using the US region 🇺🇸
# https://localhost:3000 if you're self-hosting
```

### 3. Run Goose with Langfuse Integration

Now, you can run Goose and monitor your AI requests and actions through Langfuse.

With Goose running and the environment variables set, Langfuse will start capturing traces of your Goose activities.

_[Example trace (public) in Langfuse](https://cloud.langfuse.com/project/cloramnkj0002jz088vzn1ja4/traces/cea4ed38-0c44-4b0a-8c20-4b0b6b9e8d73?timestamp=2025-01-31T15%3A52%3A30.362Z&observation=7c8e5807-3c29-4c28-9c6f-7d7427be401f)_

![Goose trace in Langfuse](https://langfuse.com//images/docs/goose-integration/goose-example-trace.png)

