"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9013],{269:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"Goose like any system may run into occasional issues. This guide provides solutions for those common problems to ensure a smooth experience.","source":"@site/docs/troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/goose/v1/docs/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/troubleshooting.md","tags":[],"version":"current","frontMatter":{"title":"Troubleshooting"},"sidebar":"tutorialSidebar","previous":{"title":"Extensions Design Guide","permalink":"/goose/v1/docs/goose-architecture-overviews/extensions-design"}}');var i=o(4848),r=o(8453);const t={title:"Troubleshooting"},l="Troubleshooting",a={},d=[{value:"Common Issues and How to Handle Them",id:"common-issues-and-how-to-handle-them",level:2},{value:"Goose Edits Files",id:"goose-edits-files",level:3},{value:"Interrupting Goose",id:"interrupting-goose",level:3},{value:"Goose Stuck in a Loop or Unresponsive During Long Sessions",id:"goose-stuck-in-a-loop-or-unresponsive-during-long-sessions",level:3},{value:"Handling Rate Limit Errors",id:"handling-rate-limit-errors",level:3},{value:"API Errors",id:"api-errors",level:3},{value:"Need Further Help?",id:"need-further-help",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,i.jsx)(s.p,{children:"Goose like any system may run into occasional issues. This guide provides solutions for those common problems to ensure a smooth experience."}),"\n",(0,i.jsx)(s.h2,{id:"common-issues-and-how-to-handle-them",children:"Common Issues and How to Handle Them"}),"\n",(0,i.jsx)(s.h3,{id:"goose-edits-files",children:"Goose Edits Files"}),"\n",(0,i.jsx)(s.p,{children:"Goose can and will edit files as part of its workflow. To avoid losing personal changes:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Use Version Control"}),": Stage your personal edits and leave Goose edits unstaged until reviewed."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Consider Separate Commits"}),": Use individual commits for Goose's edits, so you can easily revert them if needed."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"interrupting-goose",children:"Interrupting Goose"}),"\n",(0,i.jsx)(s.p,{children:"If Goose is heading in the wrong direction or gets stuck, you can interrupt it:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Command"}),": Press ",(0,i.jsx)(s.code,{children:"CTRL+C"})," to stop Goose, correct its actions, or provide additional information."]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"goose-stuck-in-a-loop-or-unresponsive-during-long-sessions",children:"Goose Stuck in a Loop or Unresponsive During Long Sessions"}),"\n",(0,i.jsx)(s.p,{children:'In rare cases, Goose may enter a "death loop" or become unresponsive during a long session. This is often resolved by ending the current session, and starting a new session.'}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Hold down ",(0,i.jsx)(s.code,{children:"Ctrl + C"})," to cancel"]}),"\n",(0,i.jsx)(s.li,{children:"Start a new session:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"goose session\n"})}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"For particularly large or complex tasks, consider breaking them into smaller sessions."})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"handling-rate-limit-errors",children:"Handling Rate Limit Errors"}),"\n",(0,i.jsxs)(s.p,{children:["Goose may encounter a ",(0,i.jsx)(s.code,{children:"429 error"})," (rate limit exceeded) when interacting with LLM providers, such as Anthropic's limit of 40,000 input tokens per minute. The recommended solution is to use OpenRouter, OpenRouter automatically manages rate limits and can switch between providers to avoid interruptions. For more help refer to the ",(0,i.jsx)(s.a,{href:"https://block.github.io/goose/v1/docs/guides/handling-llm-rate-limits-with-goose/",children:"Handling LLM Rate Limits with Goose"})," Guide."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"api-errors",children:"API Errors"}),"\n",(0,i.jsx)(s.p,{children:"Users may run into an error like the one below in the CLI when there are issues with their LLM API tokens, such as running out of credits or incorrect configuration:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"Traceback (most recent call last):\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/exchange/providers/utils.py\",\nline 30, in raise_for_status\n    response.raise_for_status()\n    ~~~~~~~~~~~~~~~~~~~~~~~~~^^\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/httpx/_models.py\",\nline 829, in raise_for_status\n    raise HTTPStatusError(message, request=request, response=self)\nhttpx.HTTPStatusError: Client error '404 Not Found' for url\n'https://api.openai.com/v1/chat/completions'\n\n...\n"})}),"\n",(0,i.jsx)(s.p,{children:"This error typically occurs when LLM API credits are expired, or their API key is invalid. To resolve this issue:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Check Your API Credits:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Log into your LLM provider's dashboard"}),"\n",(0,i.jsx)(s.li,{children:"Verify that you have enough credits, if not refill them"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["Verify API Key:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Run the following command to reconfigure your API key:"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"goose configure\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For detailed steps on updating your LLM provider, refer to the ",(0,i.jsx)(s.a,{href:"http://localhost:3000/goose/v1/docs/installation#update-a-provider",children:"Installation"})," Guide."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"need-further-help",children:"Need Further Help?"}),"\n",(0,i.jsxs)(s.p,{children:["If you have questions, run into issues, or just need to brainstorm ideas join the ",(0,i.jsx)(s.a,{href:"https://discord.gg/block-opensource",children:"Discord Community"}),"!"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,o)=>{o.d(s,{R:()=>t,x:()=>l});var n=o(6540);const i={},r=n.createContext(i);function t(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);