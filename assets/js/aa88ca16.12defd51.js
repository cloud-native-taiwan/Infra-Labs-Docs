"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[3003],{3012:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var l=i(5893),r=i(1151);const s={},c="Infra Labs \u7db2\u8def\u67b6\u69cb",t={id:"architecture/network",title:"Infra Labs \u7db2\u8def\u67b6\u69cb",description:"\u524d\u8a00",source:"@site/docs/architecture/network.md",sourceDirName:"architecture",slug:"/architecture/network",permalink:"/docs/architecture/network",draft:!1,unlisted:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/architecture/network.md",tags:[],version:"current",frontMatter:{},sidebar:"architecture",next:{title:"Infra Labs IaaS \u67b6\u69cb",permalink:"/docs/architecture/iaas"}},a={},d=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u67b6\u69cb\u5716",id:"\u67b6\u69cb\u5716",level:2},{value:"\u8a2d\u5099",id:"\u8a2d\u5099",level:2},{value:"\u8def\u7531\u5668",id:"\u8def\u7531\u5668",level:3},{value:"\u4ea4\u63db\u6a5f",id:"\u4ea4\u63db\u6a5f",level:3},{value:"Arista DCS-7060CX-32S",id:"arista-dcs-7060cx-32s",level:4},{value:"Celestica DX010",id:"celestica-dx010",level:3},{value:"Juniper EX2200-24T",id:"juniper-ex2200-24t",level:4},{value:"LTE \u8a2d\u5099",id:"lte-\u8a2d\u5099",level:3},{value:"\u7db2\u6bb5",id:"\u7db2\u6bb5",level:2}];function h(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"infra-labs-\u7db2\u8def\u67b6\u69cb",children:"Infra Labs \u7db2\u8def\u67b6\u69cb"}),"\n",(0,l.jsx)(e.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,l.jsxs)(e.p,{children:["\u6b64\u7bc7\u6587\u4ef6\u5c07\u4ecb\u7d39\u76ee\u524d Infra Labs \u6240\u4f7f\u7528\u7684\u7db2\u8def\u67b6\u69cb\uff0c\u7531\u65bc\u9810\u7b97\u554f\u984c\u5f88\u591a\u90e8\u5206\u8a2d\u8a08\u90fd\u53ef\u4ee5\u518d\u6539\u9032\uff0c\u5982\u679c\u6709\u76f8\u95dc\u5efa\u8b70\u6b61\u8fce\u8207",(0,l.jsx)(e.a,{href:"mailto:infra@cloudnative.tw",children:"\u7ba1\u7406\u54e1"}),"\u8a0e\u8ad6\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u67b6\u69cb\u5716",children:"\u67b6\u69cb\u5716"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"High Level Network",src:i(6009).Z+"",width:"2101",height:"911"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8a2d\u5099",children:"\u8a2d\u5099"}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u524d Infra Labs \u63a1\u7528\u591a\u5ee0\u724c\u7db2\u8def\u8a2d\u5099\uff0c\u7531\u65bc\u7db2\u8def\u8a2d\u5099\u4f7f\u7528\u958b\u6e90\u8edf\u9ad4\u6975\u5c11\u4ee5\u53ca\u50f9\u683c\u901a\u5e38\u504f\u9ad8\u3002\n\u56e0\u9810\u7b97\u554f\u984c\uff0c\u76ee\u524d\u7db2\u8def\u8a2d\u5099\u5927\u591a\u6578\u4f7f\u7528\u9589\u6e90\u8edf\u9ad4\uff0c\u4e26\u4e14\u6709\u55ae\u9ede\u6545\u969c\u7684\u98a8\u96aa (Single Point of Failure)\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5ee0\u5546\u82e5\u6709\u610f\u9858\u8d0a\u52a9\u7db2\u8def\u8a2d\u5099\uff0c\u6b61\u8fce",(0,l.jsx)(e.a,{href:"mailto:infra@cloudnative.tw",children:"\u806f\u7d61\u7ba1\u7406\u54e1"})]}),"\n",(0,l.jsx)(e.h3,{id:"\u8def\u7531\u5668",children:"\u8def\u7531\u5668"}),"\n",(0,l.jsx)(e.p,{children:"\u8def\u7531\u5668\u76ee\u524d\u4f7f\u7528\u4e00\u53f0 Juniper NFX250\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u8207\u4e0a\u6e38\u9032\u884c BGP \u5ba3\u544a\u548c Infra Labs \u4f7f\u7528 public IP \u7684 gateway\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8def\u7531\u5668\u4e5f\u88ab\u7528\u4f86\u904e\u6ffe\u6389\u4e00\u4e9b\u5bb9\u6613\u88ab\u653b\u64ca\u7684\u9023\u63a5\u57e0\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u53e6\u4e00\u53f0 NFX250 \u4e3b\u8981\u7528\u65bc\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"In band management \u7db2\u8def NAT gateway"}),"\n",(0,l.jsx)(e.li,{children:"Dashboard, DNS server \u7684 NAT"}),"\n",(0,l.jsx)(e.li,{children:"Out of band Mangement \u7db2\u8def VPN access"}),"\n",(0,l.jsx)(e.li,{children:"DNS server \u6d41\u91cf\u9650\u5236"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4ea4\u63db\u6a5f",children:"\u4ea4\u63db\u6a5f"}),"\n",(0,l.jsx)(e.h4,{id:"arista-dcs-7060cx-32s",children:"Arista DCS-7060CX-32S"}),"\n",(0,l.jsx)(e.p,{children:"Arista DCS-7060CX-32S 100G \u4ea4\u63db\u6a5f\u4e3b\u8981\u7528\u65bc VM \u5167/\u5916\u90e8\u7db2\u8def\u3001Libvirt migration \u7db2\u8def\u548c Ceph \u7684 public/private \u7db2\u8def\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"celestica-dx010",children:"Celestica DX010"}),"\n",(0,l.jsx)(e.p,{children:"Celestica DX010 100G \u4f5c\u70ba Rack2 \u7684\u6838\u5fc3\u4ea4\u63db\u6a5f\u3002"}),"\n",(0,l.jsx)(e.h4,{id:"juniper-ex2200-24t",children:"Juniper EX2200-24T"}),"\n",(0,l.jsx)(e.p,{children:"Juniper EX2200-24T \u4e3b\u8981\u7528\u65bc Out of band management \u7db2\u8def\u3002\u4e0b\u63a5\u81f3\u5404\u500b\u4e3b\u6a5f IPMI\u3001\u7db2\u8def\u8a2d\u5099 management port\uff0c\u4e0a\u63a5\u81f3 Fortigate 200D\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"lte-\u8a2d\u5099",children:"LTE \u8a2d\u5099"}),"\n",(0,l.jsx)(e.p,{children:"LTE \u8a2d\u5099\u4e3b\u8981\u63d0\u4f9b\u5099\u63f4\u7db2\u8def\uff0c\u82e5 NFX250 \u8a2d\u5b9a\u51fa\u554f\u984c\u5c0e\u81f4\u4e3b\u8981\u7db2\u8def\u65b7\u7dda\u7121\u6cd5\u5f9e\u5916\u90e8\u9023\u5165\uff0c\u53ef\u4ee5\u900f\u904e LTE \u8a2d\u5099\u9023\u5165 management \u7db2\u8def\u9032\u884c\u7dad\u4fee\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u7db2\u6bb5",children:"\u7db2\u6bb5"}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u524d\u7db2\u6bb5\u4e3b\u8981\u5206\u70ba\u4ee5\u4e0b\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["vlan3000 (untagged access):","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"192.168.0.0/24"}),"\n",(0,l.jsx)(e.li,{children:"PXE/IB"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 100","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"10.0.0.0/24"}),"\n",(0,l.jsx)(e.li,{children:"VM internal"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 101","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"10.0.1.0/24"}),"\n",(0,l.jsx)(e.li,{children:"libvirt internal (for migration)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 1088","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"rack2_mgmt: 192.168.88.0/24"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 1113","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"192.168.113.0/24"}),"\n",(0,l.jsx)(e.li,{children:"API network"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 1114","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"192.168.114.0/24"}),"\n",(0,l.jsx)(e.li,{children:"Ceph Public"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 1115","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"192.168.115.0/24"}),"\n",(0,l.jsx)(e.li,{children:"Ceph Private"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 2116","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"103.122.116.0/23 public"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["vlan 1007","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"mgmt: 192.168.7.0/24"}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},6009:(n,e,i)=>{i.d(e,{Z:()=>l});const l=i.p+"assets/images/high_level_network-4d6642fa6cdc84e627905dbb7b2cf3f2.png"},1151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>c});var l=i(7294);const r={},s=l.createContext(r);function c(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);