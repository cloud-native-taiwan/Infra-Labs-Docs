"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[45],{6572:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var t=s(5893),i=s(1151);const c={},r="\u5efa\u7acb VM (Launch Instances)",l={id:"tutorial-basics/create-vm",title:"\u5efa\u7acb VM (Launch Instances)",description:"\u9996\u5148\uff0c\u9032\u5165\u904b\u7b97 -> \u96f2\u5be6\u4f8b\uff0c\u9ede\u64ca\u53f3\u65b9 \u767c\u52d5\u96f2\u5be6\u4f8b \u76f8\u7e7c\u8f38\u5165\u4ee5\u4e0b\u5167\u5bb9",source:"@site/docs/tutorial-basics/create-vm.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-vm",permalink:"/docs/tutorial-basics/create-vm",draft:!1,unlisted:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/tutorial-basics/create-vm.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5efa\u7acb\u5b89\u5168\u6027\u7fa4\u7d44",permalink:"/docs/tutorial-basics/create-security-group"},next:{title:"Congratulations!",permalink:"/docs/tutorial-basics/congratulations"}},a={},o=[];function d(n){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u5efa\u7acb-vm-launch-instances",children:"\u5efa\u7acb VM (Launch Instances)"}),"\n",(0,t.jsxs)(e.p,{children:["\u9996\u5148\uff0c\u9032\u5165\u904b\u7b97 -> ",(0,t.jsx)(e.a,{href:"https://openstack.cloudnative.tw/project/instances/",children:"\u96f2\u5be6\u4f8b"}),"\uff0c\u9ede\u64ca\u53f3\u65b9 ",(0,t.jsx)(e.strong,{children:"\u767c\u52d5\u96f2\u5be6\u4f8b"})," \u76f8\u7e7c\u8f38\u5165\u4ee5\u4e0b\u5167\u5bb9"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u8a73\u7d30\u8cc7\u8a0a","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u96f2\u5be6\u4f8b\u540d\u7a31\uff08\u865b\u64ec\u6a5f\u540d\u7a31\uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u8a08\u6578\uff08\u865b\u64ec\u6a5f\u6578\u91cf\uff09"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u4f86\u6e90","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9078\u64c7\u4e0b\u65b9\u7684\u53ef\u7528\u93e1\u50cf\u76f4\u63a5\u958b\u6a5f\uff08\u82e5\u60a8\u9700\u8981\u5176\u4ed6\u93e1\u50cf\uff0c\u8acb\u806f\u7e6b\u7ba1\u7406\u54e1\uff09"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u985e\u578b","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u865b\u64ec\u6a5f\u7684\u898f\u683c"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u7db2\u8def","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9078\u64c7\u81ea\u5df1\u5efa\u7acb\u7684\u79c1\u6709\u7db2\u8def"}),"\n",(0,t.jsxs)(e.li,{children:["\u6216\u9078\u64c7 ",(0,t.jsx)(e.code,{children:"publicv4"})," \u76f4\u63a5\u4f7f\u7528 Public IPv4 \u5730\u5740"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5b89\u5168\u6027\u7fa4\u7d44","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9078\u64c7\u81ea\u5df1\u8a2d\u5b9a\u597d\u7684\u5b89\u5168\u7fa4\u7d44\u3002\n\u5728\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0cdefault \u5b89\u5168\u7fa4\u7d44\u7981\u6b62\u6240\u6709\u5916\u90e8\u6d41\u91cf\u9023\u5165"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["Key Pair","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9078\u64c7\u9700\u8981 Access VM \u7684 SSH Key\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5efa\u7acb VM \u5f8c\uff0c\u6703\u81ea\u52d5\u5efa\u7acb ",(0,t.jsx)(e.code,{children:"<VM \u540d\u7a31>.<\u5c08\u6848\u540d\u7a31>.infra.cloudnative.tw"})," \u7684 DNS record \u6307\u81f3\u6b64 VM\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u9810\u8a2d\u767b\u5165\u5e33\u865f\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Ubuntu: ubuntu"}),"\n",(0,t.jsx)(e.li,{children:"Debian: debian"}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>r});var t=s(7294);const i={},c=t.createContext(i);function r(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);