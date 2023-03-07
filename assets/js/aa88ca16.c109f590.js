"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(a),k=n,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[m]="string"==typeof e?e:n,i[1]=u;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={},i="Infra Labs \u7db2\u8def\u67b6\u69cb",u={unversionedId:"architecture/network",id:"architecture/network",title:"Infra Labs \u7db2\u8def\u67b6\u69cb",description:"\u524d\u8a00",source:"@site/docs/architecture/network.md",sourceDirName:"architecture",slug:"/architecture/network",permalink:"/docs/architecture/network",draft:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/architecture/network.md",tags:[],version:"current",frontMatter:{},sidebar:"architecture",next:{title:"Infra Labs IaaS \u67b6\u69cb",permalink:"/docs/architecture/iaas"}},p={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u67b6\u69cb\u5716",id:"\u67b6\u69cb\u5716",level:2},{value:"\u8a2d\u5099",id:"\u8a2d\u5099",level:2},{value:"\u8def\u7531\u5668",id:"\u8def\u7531\u5668",level:3},{value:"\u4ea4\u63db\u6a5f",id:"\u4ea4\u63db\u6a5f",level:3},{value:"Arista DCS-7060CX-32S",id:"arista-dcs-7060cx-32s",level:4},{value:"Juniper EX2200-24T",id:"juniper-ex2200-24t",level:4},{value:"LTE \u8a2d\u5099",id:"lte-\u8a2d\u5099",level:3},{value:"\u7db2\u6bb5",id:"\u7db2\u6bb5",level:2}],c={toc:o};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"infra-labs-\u7db2\u8def\u67b6\u69cb"},"Infra Labs \u7db2\u8def\u67b6\u69cb"),(0,n.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,n.kt)("p",null,"\u6b64\u7bc7\u6587\u4ef6\u5c07\u4ecb\u7d39\u76ee\u524d Infra Labs \u6240\u4f7f\u7528\u7684\u7db2\u8def\u67b6\u69cb\uff0c\u7531\u65bc\u9810\u7b97\u554f\u984c\u5f88\u591a\u90e8\u5206\u8a2d\u8a08\u90fd\u53ef\u4ee5\u518d\u6539\u9032\uff0c\u5982\u679c\u6709\u76f8\u95dc\u5efa\u8b70\u6b61\u8fce\u8207",(0,n.kt)("a",{parentName:"p",href:"mailto:infra@cloudnative.tw"},"\u7ba1\u7406\u54e1"),"\u8a0e\u8ad6\u3002"),(0,n.kt)("h2",{id:"\u67b6\u69cb\u5716"},"\u67b6\u69cb\u5716"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"High Level Network",src:a(6009).Z,width:"2101",height:"911"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Rack 2 \u76ee\u524d\u4ecd\u5728\u5efa\u7f6e\u4e2d\u3002")),(0,n.kt)("h2",{id:"\u8a2d\u5099"},"\u8a2d\u5099"),(0,n.kt)("p",null,"\u76ee\u524d Infra Labs \u63a1\u7528\u591a\u5ee0\u724c\u7db2\u8def\u8a2d\u5099\uff0c\u7531\u65bc\u7db2\u8def\u8a2d\u5099\u4f7f\u7528\u958b\u6e90\u8edf\u9ad4\u6975\u5c11\u4ee5\u53ca\u50f9\u683c\u901a\u5e38\u504f\u9ad8\u3002\n\u56e0\u9810\u7b97\u554f\u984c\uff0c\u76ee\u524d\u7db2\u8def\u8a2d\u5099\u5927\u591a\u6578\u4f7f\u7528\u9589\u6e90\u8edf\u9ad4\uff0c\u4e26\u4e14\u6709\u55ae\u9ede\u6545\u969c\u7684\u98a8\u96aa (Single Point of Failure)\u3002"),(0,n.kt)("p",null,"\u5ee0\u5546\u82e5\u6709\u610f\u9858\u8d0a\u52a9\u7db2\u8def\u8a2d\u5099\uff0c\u6b61\u8fce",(0,n.kt)("a",{parentName:"p",href:"mailto:infra@cloudnative.tw"},"\u806f\u7d61\u7ba1\u7406\u54e1")),(0,n.kt)("h3",{id:"\u8def\u7531\u5668"},"\u8def\u7531\u5668"),(0,n.kt)("p",null,"\u8def\u7531\u5668\u76ee\u524d\u4f7f\u7528\u4e00\u53f0 Juniper NFX250\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u8207\u4e0a\u6e38\u9032\u884c BGP \u5ba3\u544a\u548c Infra Labs \u4f7f\u7528 public IP \u7684 gateway\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u8def\u7531\u5668\u4e5f\u88ab\u7528\u4f86\u904e\u6ffe\u6389\u4e00\u4e9b\u5bb9\u6613\u88ab\u653b\u64ca\u7684\u9023\u63a5\u57e0\u3002"),(0,n.kt)("p",null,"\u53e6\u4e00\u53f0 NFX250 \u4e3b\u8981\u7528\u65bc\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In band management \u7db2\u8def NAT gateway"),(0,n.kt)("li",{parentName:"ul"},"Dashboard, DNS server \u7684 NAT"),(0,n.kt)("li",{parentName:"ul"},"Out of band Mangement \u7db2\u8def VPN access"),(0,n.kt)("li",{parentName:"ul"},"DNS server \u6d41\u91cf\u9650\u5236")),(0,n.kt)("h3",{id:"\u4ea4\u63db\u6a5f"},"\u4ea4\u63db\u6a5f"),(0,n.kt)("h4",{id:"arista-dcs-7060cx-32s"},"Arista DCS-7060CX-32S"),(0,n.kt)("p",null,"Arista DCS-7060CX-32S 100G \u4ea4\u63db\u6a5f\u4e3b\u8981\u7528\u65bc VM \u5167/\u5916\u90e8\u7db2\u8def\u3001Libvirt migration \u7db2\u8def\u548c Ceph \u7684 public/private \u7db2\u8def\u3002"),(0,n.kt)("h4",{id:"juniper-ex2200-24t"},"Juniper EX2200-24T"),(0,n.kt)("p",null,"Juniper EX2200-24T \u4e3b\u8981\u7528\u65bc Out of band management \u7db2\u8def\u3002\u4e0b\u63a5\u81f3\u5404\u500b\u4e3b\u6a5f IPMI\u3001\u7db2\u8def\u8a2d\u5099 management port\uff0c\u4e0a\u63a5\u81f3 Fortigate 200D\u3002"),(0,n.kt)("h3",{id:"lte-\u8a2d\u5099"},"LTE \u8a2d\u5099"),(0,n.kt)("p",null,"LTE \u8a2d\u5099\u4e3b\u8981\u63d0\u4f9b\u5099\u63f4\u7db2\u8def\uff0c\u82e5 NFX250 \u8a2d\u5b9a\u51fa\u554f\u984c\u5c0e\u81f4\u4e3b\u8981\u7db2\u8def\u65b7\u7dda\u7121\u6cd5\u5f9e\u5916\u90e8\u9023\u5165\uff0c\u53ef\u4ee5\u900f\u904e LTE \u8a2d\u5099\u9023\u5165 management \u7db2\u8def\u9032\u884c\u7dad\u4fee\u3002"),(0,n.kt)("h2",{id:"\u7db2\u6bb5"},"\u7db2\u6bb5"),(0,n.kt)("p",null,"\u76ee\u524d\u7db2\u6bb5\u4e3b\u8981\u5206\u70ba\u4ee5\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"vlan3000 (untagged access): ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"192.168.0.0/24 "),(0,n.kt)("li",{parentName:"ul"},"PXE/IB"))),(0,n.kt)("li",{parentName:"ul"},"vlan 100 ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"10.0.0.0/24 "),(0,n.kt)("li",{parentName:"ul"},"VM internal"))),(0,n.kt)("li",{parentName:"ul"},"vlan 101",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"10.0.1.0/24"),(0,n.kt)("li",{parentName:"ul"},"libvirt internal (for migration)"))),(0,n.kt)("li",{parentName:"ul"},"vlan 1113",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"192.168.113.0/24"),(0,n.kt)("li",{parentName:"ul"},"API network"))),(0,n.kt)("li",{parentName:"ul"},"vlan 1114",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"192.168.114.0/24"),(0,n.kt)("li",{parentName:"ul"},"Ceph Public"))),(0,n.kt)("li",{parentName:"ul"},"vlan 1115",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"192.168.115.0/24"),(0,n.kt)("li",{parentName:"ul"},"Ceph Private"))),(0,n.kt)("li",{parentName:"ul"},"vlan 2116",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"103.122.116.0/23 public"))),(0,n.kt)("li",{parentName:"ul"},"vlan 1007",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"mgmt: 192.168.7.0/24")))))}m.isMDXComponent=!0},6009:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/high_level_network-4d6642fa6cdc84e627905dbb7b2cf3f2.png"}}]);