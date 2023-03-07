"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,d=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:1},i="\u5efa\u7acb\u79c1\u6709\u7db2\u8def",o={unversionedId:"tutorial-extra/create-private-network",id:"tutorial-extra/create-private-network",title:"\u5efa\u7acb\u79c1\u6709\u7db2\u8def",description:"OpenStack \u5141\u8a31\u5404\u500b\u7528\u6236\u5728\u81ea\u5df1\u5c08\u6848\u5efa\u7acb\u81ea\u5df1\u7684\u79c1\u6709\u7db2\u8def\uff0c\u79c1\u6709\u7db2\u8def\u4e2d\u7684 VM \u53ef\u4ee5\u900f\u904e\u8def\u7531\u5668 SNAT \u9023\u7dda\u81f3\u5916\u90e8\u7db2\u8def\u3002",source:"@site/docs/tutorial-extra/create-private-network.md",sourceDirName:"tutorial-extra",slug:"/tutorial-extra/create-private-network",permalink:"/docs/tutorial-extra/create-private-network",draft:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/tutorial-extra/create-private-network.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"\u9032\u968e\u6559\u5b78",permalink:"/docs/category/\u9032\u968e\u6559\u5b78"},next:{title:"\u7d81\u5b9a\u6d6e\u52d5 IP",permalink:"/docs/tutorial-extra/floating-ip"}},p={},u=[{value:"\u5efa\u7acb\u8def\u7531\u5668",id:"\u5efa\u7acb\u8def\u7531\u5668",level:2}],c={toc:u};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5efa\u7acb\u79c1\u6709\u7db2\u8def"},"\u5efa\u7acb\u79c1\u6709\u7db2\u8def"),(0,a.kt)("p",null,"OpenStack \u5141\u8a31\u5404\u500b\u7528\u6236\u5728\u81ea\u5df1\u5c08\u6848\u5efa\u7acb\u81ea\u5df1\u7684\u79c1\u6709\u7db2\u8def\uff0c\u79c1\u6709\u7db2\u8def\u4e2d\u7684 VM \u53ef\u4ee5\u900f\u904e\u8def\u7531\u5668 SNAT \u9023\u7dda\u81f3\u5916\u90e8\u7db2\u8def\u3002\n\u6211\u5011\u6703\u5efa\u8b70\u4f7f\u7528\u8005\u5efa\u7acb\u4e00\u500b\u81ea\u5df1\u7684\u79c1\u6709\u7db2\u8def\u4e26\u4e14\u900f\u904e\u4e00\u500b bastion host \u4f5c\u70ba\u4e00\u500b\u8df3\u677f\u9023\u5165\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u9032\u5165\u7db2\u8def -> ",(0,a.kt)("a",{parentName:"p",href:"https://openstack.cloudnative.tw/project/networks/"},"\u7db2\u8def"),"\uff0c\u9ede\u64ca\u5efa\u7acb\u7db2\u8def\u3002"),(0,a.kt)("p",null,"\u76f8\u7e7c\u8f38\u5165\u4ee5\u4e0b\u8cc7\u8a0a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7db2\u8def",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7db2\u8def\u540d\u7a31"),(0,a.kt)("li",{parentName:"ul"},"\u52fe\u9078\u5efa\u7acb\u5b50\u7db2\u8def"))),(0,a.kt)("li",{parentName:"ul"},"\u5b50\u7db2\u8def",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b50\u7db2\u8def\u540d\u7a31"),(0,a.kt)("li",{parentName:"ul"},"\u7db2\u8def\u5730\u5740",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8acb\u9078\u64c7\u6163\u7528\u7684\u79c1\u6709\u7db2\u8def\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"Eg. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16"))),(0,a.kt)("li",{parentName:"ul"},"IP Version \uff08\u9078\u64c7 IPv4 \u6216\u662f IPv6\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u9598\u9053 IP\uff08\u975e\u5fc5\u8981\uff0c\u7528\u65bc\u8def\u7531\u5668 IP \u5730\u5740\uff09"))),(0,a.kt)("li",{parentName:"ul"},"\u5b50\u7db2\u8def\u8a73\u7d30\u8cc7\u8a0a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DHCP \u5730\u5740\u6c60"),(0,a.kt)("li",{parentName:"ul"},"DNS \u4f4d\u7f6e")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3333).Z,width:"1514",height:"1092"})),(0,a.kt)("h2",{id:"\u5efa\u7acb\u8def\u7531\u5668"},"\u5efa\u7acb\u8def\u7531\u5668"),(0,a.kt)("p",null,"\u8def\u7531\u5668\u662f\u7528\u4f86\u505a\u5916\u90e8\u7db2\u8def\u548c\u79c1\u6709\u7db2\u8def\u4e2d\u7684 SNAT/DNAT\uff0c\u8981\u900f\u904e\u8def\u7531\u5668\u624d\u80fd\u5728 VM \u4e0a\u806f\u7d50\u6d6e\u52d5 IP"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u9032\u5165\u7db2\u8def -> ",(0,a.kt)("a",{parentName:"p",href:"https://openstack.cloudnative.tw/project/routers/"},"\u8def\u7531\u5668"),"\uff0c\u9ede\u64ca\u65b0\u589e\u8def\u7531\u5668\uff0c\u586b\u5beb\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8def\u7531\u5668\u540d\u7a31"),(0,a.kt)("li",{parentName:"ul"},"\u5c0d\u5916\u7db2\u8def\u9078\u64c7 ",(0,a.kt)("inlineCode",{parentName:"li"},"publicv4")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"publicv6"))),(0,a.kt)("p",null,"\u9ede\u9078\u65b0\u589e\u8def\u7531\u5668\u3002"),(0,a.kt)("p",null,"\u7576\u8def\u7531\u5668\u5efa\u7acb\u5b8c\u7562\u5f8c\uff0c\u9ede\u9078\u8def\u7531\u5668\u540d\u7a31\u9032\u5165\u8def\u7531\u5668\u8cc7\u8a0a\uff0c\u4e26\u4e14\u9078\u64c7",(0,a.kt)("inlineCode",{parentName:"p"},"\u7db2\u8def\u5361"),"\u9078\u55ae\uff0c\u9ede\u64ca\u53f3\u65b9\u52a0\u5165\u7db2\u8def\u5361\uff0c\u586b\u5beb\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b50\u7db2\u57df",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9078\u64c7\u4f60\u5efa\u7acb\u7684\u79c1\u6709\u7db2\u8def"))),(0,a.kt)("li",{parentName:"ul"},"IP \u4f4d\u5740",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u586b\u5beb\u7576\u521d\u5b50\u7db2\u57df\u6240\u586b\u5beb\u7684\u9598\u9053 IP")))),(0,a.kt)("p",null,"\u9ede\u9078\u63d0\u4ea4\u5f8c\u5c07\u6703\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u7db2\u8def\u5361\u9023\u63a5\u8def\u7531\u5668\u548c\u79c1\u6709\u7db2\u8def\uff0c\u63d0\u4f9b\u7d66\u79c1\u6709\u7db2\u8def SNAT \u548c\u4e0a\u9762 VM \u6d6e\u52d5 IP DNAT"))}s.isMDXComponent=!0},3333:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_network-2baed39f4215176b3b622c6516ddc314.png"}}]);