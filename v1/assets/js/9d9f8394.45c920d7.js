"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[9013],{269:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"troubleshooting","title":"Troubleshooting","description":"Goose, like any system, may run into occasional issues. This guide provides solutions for common problems.","source":"@site/docs/troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/goose/v1/docs/troubleshooting","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Troubleshooting"},"sidebar":"tutorialSidebar","previous":{"title":"Error Handling","permalink":"/goose/v1/docs/goose-architecture/error-handling"}}');var r=o(4848),i=o(8453);const t={title:"Troubleshooting"},l="Troubleshooting",a={},d=[{value:"Goose Edits Files",id:"goose-edits-files",level:3},{value:"Interrupting Goose",id:"interrupting-goose",level:3},{value:"Stuck in a Loop or Unresponsive",id:"stuck-in-a-loop-or-unresponsive",level:3},{value:"Context Length Exceeded Error",id:"context-length-exceeded-error",level:3},{value:"Handling Rate Limit Errors",id:"handling-rate-limit-errors",level:3},{value:"Hermit Errors",id:"hermit-errors",level:3},{value:"API Errors",id:"api-errors",level:3},{value:"Need Further Help?",id:"need-further-help",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,r.jsx)(n.p,{children:"Goose, like any system, may run into occasional issues. This guide provides solutions for common problems."}),"\n",(0,r.jsx)(n.h3,{id:"goose-edits-files",children:"Goose Edits Files"}),"\n",(0,r.jsx)(n.p,{children:"Goose can and will edit files as part of its workflow. To avoid losing personal changes, use version control to stage your personal edits. Leave Goose edits unstaged until reviewed. Consider separate commits for Goose's edits so you can easily revert them if needed."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"interrupting-goose",children:"Interrupting Goose"}),"\n",(0,r.jsxs)(n.p,{children:["If Goose is heading in the wrong direction or gets stuck, you can interrupt it by pressing ",(0,r.jsx)(n.code,{children:"CTRL+C"}),". This will stop Goose and give you the opportunity to correct its actions or provide additional information."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stuck-in-a-loop-or-unresponsive",children:"Stuck in a Loop or Unresponsive"}),"\n",(0,r.jsx)(n.p,{children:'In rare cases, Goose may enter a "doom spiral" or become unresponsive during a long session. This is often resolved by ending the current session, and starting a new session.'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Hold down ",(0,r.jsx)(n.code,{children:"Ctrl + C"})," to cancel"]}),"\n",(0,r.jsx)(n.li,{children:"Start a new session:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose session\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"For particularly large or complex tasks, consider breaking them into smaller sessions."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"context-length-exceeded-error",children:"Context Length Exceeded Error"}),"\n",(0,r.jsxs)(n.p,{children:["This error occurs when the input provided to Goose exceeds the maximum token limit of the LLM being used. To resolve this try breaking down your input into smaller parts. You can also use ",(0,r.jsx)(n.code,{children:".goosehints"})," as a way to provide goose with detailed context. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/guides/using-goosehints",children:"Using Goosehints Guide"})," for more information."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"handling-rate-limit-errors",children:"Handling Rate Limit Errors"}),"\n",(0,r.jsxs)(n.p,{children:["Goose may encounter a ",(0,r.jsx)(n.code,{children:"429 error"})," (rate limit exceeded) when interacting with LLM providers. The recommended solution is to use OpenRouter. See ",(0,r.jsx)(n.a,{href:"/docs/guides/handling-llm-rate-limits-with-goose",children:"Handling LLM Rate Limits"})," for more info."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hermit-errors",children:"Hermit Errors"}),"\n",(0,r.jsxs)(n.p,{children:['If you see an issue installing an extension in the app that says "hermit',":fatal",'", you may need to reset your hermit cache. We use\na copy of hermit to ensure npx and uvx are consistently available. If you have already used an older version of hermit, you may\nneed to cleanup the cache - on Mac this cache is at']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo rm -rf ~/Library/Caches/hermit\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"api-errors",children:"API Errors"}),"\n",(0,r.jsx)(n.p,{children:"Users may run into an error like the one below when there are issues with their LLM API tokens, such as running out of credits or incorrect configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"Traceback (most recent call last):\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/exchange/providers/utils.py\",\nline 30, in raise_for_status\n    response.raise_for_status()\n    ~~~~~~~~~~~~~~~~~~~~~~~~~^^\n  File \"/Users/admin/.local/pipx/venvs/goose-ai/lib/python3.13/site-packages/httpx/_models.py\",\nline 829, in raise_for_status\n    raise HTTPStatusError(message, request=request, response=self)\nhttpx.HTTPStatusError: Client error '404 Not Found' for url\n'https://api.openai.com/v1/chat/completions'\n\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"This error typically occurs when LLM API credits are exhausted or your API key is invalid. To resolve this issue:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Check Your API Credits:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Log into your LLM provider's dashboard"}),"\n",(0,r.jsx)(n.li,{children:"Verify that you have enough credits. If not, refill them"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Verify API Key:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run the following command to reconfigure your API key:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed steps on updating your LLM provider, refer to the ",(0,r.jsx)(n.a,{href:"/docs/getting-started/installation",children:"Installation"})," Guide."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"need-further-help",children:"Need Further Help?"}),"\n",(0,r.jsxs)(n.p,{children:["If you have questions, run into issues, or just need to brainstorm ideas join the ",(0,r.jsx)(n.a,{href:"https://discord.gg/block-opensource",children:"Discord Community"}),"!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>l});var s=o(6540);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);