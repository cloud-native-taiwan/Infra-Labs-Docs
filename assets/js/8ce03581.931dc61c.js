"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[7296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),k=c(n),u=l,m=k["".concat(p,".").concat(u)]||k[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},i),{},{components:n})):a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[k]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const o={description:""},r="KWOK in Docker - \u9ad4\u9a57\u4e0a\u5343\u7bc0\u9ede\u7684 K8s \u5de5\u5177",s={unversionedId:"self-paced-labs/kwok-in-docker/index",id:"self-paced-labs/kwok-in-docker/index",title:"KWOK in Docker - \u9ad4\u9a57\u4e0a\u5343\u7bc0\u9ede\u7684 K8s \u5de5\u5177",description:"",source:"@site/docs/self-paced-labs/kwok-in-docker/index.md",sourceDirName:"self-paced-labs/kwok-in-docker",slug:"/self-paced-labs/kwok-in-docker/",permalink:"/docs/self-paced-labs/kwok-in-docker/",draft:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/self-paced-labs/kwok-in-docker/index.md",tags:[],version:"current",frontMatter:{description:""},sidebar:"self_paced_labs",previous:{title:"OpenStack \u4e0a\u5229\u7528 kops \u642d\u5efa K8S Cluster",permalink:"/docs/self-paced-labs/kops/"},next:{title:"Quarkus \u6574\u5408 Vault KV \u5f15\u64ce",permalink:"/docs/self-paced-labs/vault/"}},p={},c=[{value:"Demo \u74b0\u5883",id:"demo-\u74b0\u5883",level:2},{value:"\u524d\u7f6e\u4f5c\u696d",id:"\u524d\u7f6e\u4f5c\u696d",level:2},{value:"\u5b89\u88dd Docker",id:"\u5b89\u88dd-docker",level:3},{value:"\u5b89\u88dd kubectl",id:"\u5b89\u88dd-kubectl",level:3},{value:"\u555f\u52d5 KWOK",id:"\u555f\u52d5-kwok",level:2},{value:"\u5be6\u9a57\u6a21\u64ec",id:"\u5be6\u9a57\u6a21\u64ec",level:2},{value:"KWOK \u65b0\u589e\u7bc0\u9ede",id:"kwok-\u65b0\u589e\u7bc0\u9ede",level:3},{value:"\u65b0\u589e Deployment",id:"\u65b0\u589e-deployment",level:3},{value:"\u7de8\u8f2f Deployment",id:"\u7de8\u8f2f-deployment",level:3},{value:"\u522a\u9664 Deployment",id:"\u522a\u9664-deployment",level:3},{value:"\u505c\u6b62 KWOK",id:"\u505c\u6b62-kwok",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}],i={toc:c};function k(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kwok-in-docker---\u9ad4\u9a57\u4e0a\u5343\u7bc0\u9ede\u7684-k8s-\u5de5\u5177"},"KWOK in Docker - \u9ad4\u9a57\u4e0a\u5343\u7bc0\u9ede\u7684 K8s \u5de5\u5177"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u672c\u7bc7\u6587\u7ae0\u540c\u6b65\u767c\u4f48\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://blog.yangjerry.tw/2023/03/11/kwok-in-docker/"},"Jerry Yang's Blog: KWOK in Docker - \u9ad4\u9a57\u4e0a\u5343\u7bc0\u9ede\u7684 K8s \u5de5\u5177"))),(0,l.kt)("p",null,"Kubernetes SIGs\uff08Special Interest Group \u7279\u5225\u8208\u8da3\u5c0f\u7d44\uff09\u524d\u9663\u5b50\u767c\u5e03\u4e86\u5f88\u6709\u8da3\u7684 K8s \u6a21\u64ec\u5668 \u2014\u2014 KWOK\uff1aKubernetes WithOut Kubelet\u3002"),(0,l.kt)("p",null,"KWOK \u7684\u61c9\u7528\u60c5\u5883\uff0c\u958b\u767c\u8005\u60f3\u8981\u5728\u5e7e\u79d2\u9418\u5167\u5efa\u7acb\u4e00\u500b\u7531\u6578\u5343\u500b\u7bc0\u9ede\u7d44\u6210\u7684 Kubernetes\uff0c\u4e14\u6a21\u64ec\u5177\u6709\u4f4e\u8cc7\u6e90\u4f54\u7528\u7684\u771f\u5be6\u7bc0\u9ede\uff0c\u4e26\u4e14\u5728\u4e0d\u82b1\u8cbb\u592a\u591a\u57fa\u790e\u8a2d\u65bd\u7684\u60c5\u6cc1\u4e0b\u5927\u898f\u6a21\u6e2c\u8a66\u7684 Kubernetes \u63a7\u5236\u5668\u3002"),(0,l.kt)("p",null,"\u8b93\u6211\u5011\u73fe\u5728\u4f86\u9ad4\u9a57 KWOK \u5de5\u5177\u7684\u5b89\u88dd & \u6a21\u64ec\u5427\uff01"),(0,l.kt)("h2",{id:"demo-\u74b0\u5883"},"Demo \u74b0\u5883"),(0,l.kt)("p",null,"\u672c\u6b21\u5be6\u9a57\u4f7f\u7528 CNTUG Infra Labs \u7684\u4e3b\u6a5f\uff0c\u6709\u8208\u8da3\u7684\u670b\u53cb\u53ef\u4ee5\u76f4\u63a5\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cloudnative.tw/"},"CNTUG Infra Labs \u8aaa\u660e\u6587\u4ef6")," \u9996\u9801\u9ede\u64ca\u300c\u7533\u8acb Infra Labs\u300d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OS: Ubuntu 22.04"),(0,l.kt)("li",{parentName:"ul"},"Docker Engine: 23.0.1"),(0,l.kt)("li",{parentName:"ul"},"KWOK: Docker - All in one image - cluster:v1.26.0"),(0,l.kt)("li",{parentName:"ul"},"K8s simulate version: v1.26.0"),(0,l.kt)("li",{parentName:"ul"},"kubectl version: v1.26.0")),(0,l.kt)("h2",{id:"\u524d\u7f6e\u4f5c\u696d"},"\u524d\u7f6e\u4f5c\u696d"),(0,l.kt)("h3",{id:"\u5b89\u88dd-docker"},"\u5b89\u88dd Docker"),(0,l.kt)("p",null,"\u6839\u64da Docker \u5b98\u65b9\u5b89\u88dd\u6559\u5b78\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://get.docker.com -o get-docker.sh\nsudo sh get-docker.sh\n")),(0,l.kt)("p",null,"\u5b89\u88dd\u5b8c\u5f8c\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4e86\uff0c\u4f46\u5982\u679c\u4e0d\u60f3\u524d\u9762\u4e00\u76f4\u6253 ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo"),"\uff0c\u5c31\u52a0\u5165\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\n")),(0,l.kt)("p",null,"\u6700\u5f8c\u518d logout \u91cd\u65b0\u767b\u5165\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,l.kt)("h3",{id:"\u5b89\u88dd-kubectl"},"\u5b89\u88dd kubectl"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u662f\u4e00\u500b\u547d\u4ee4\u5217\u5de5\u5177\uff0c\u7528\u65bc\u64cd\u4f5c Kubernetes \u96c6\u7fa4\uff0c\u4f7f\u7528\u4e0b\u5217\u6b65\u9a5f\u5b89\u88dd ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -LO https://dl.k8s.io/release/v1.26.0/bin/linux/amd64/kubectl\ncurl -LO https://dl.k8s.io/v1.26.0/bin/linux/amd64/kubectl.sha256\necho "$(cat kubectl.sha256) kubectl" | sha256sum --check\n# If check success, install it. \nsudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n# Remove install files.\nrm kubectl*\n')),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7258).Z,width:"1024",height:"287"})),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6307\u4ee4\u6e2c\u8a66\u7248\u672c\uff0c\u78ba\u8a8d ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5b89\u88dd\u6210\u529f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl version\n")),(0,l.kt)("h2",{id:"\u555f\u52d5-kwok"},"\u555f\u52d5 KWOK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -d -p 8080:8080 registry.k8s.io/kwok/cluster:v1.26.0\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8781).Z,width:"808",height:"241"})),(0,l.kt)("p",null,"\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker ps -a")," \u78ba\u8a8d\u670d\u52d9\u662f\u4e0d\u662f\u6709\u555f\u52d5\u6210\u529f"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6172).Z,width:"1099",height:"133"})),(0,l.kt)("p",null,"\u78ba\u8a8d\u6c92\u554f\u984c\u5f8c\u5c31\u53ef\u4ee5\u4f9d\u7167\u5b98\u65b9\u6559\u5b78\u958b\u59cb\u5be6\u9a57\u6a21\u64ec\u3002"),(0,l.kt)("h2",{id:"\u5be6\u9a57\u6a21\u64ec"},"\u5be6\u9a57\u6a21\u64ec"),(0,l.kt)("p",null,"\u5efa\u7acb\u5b8c\u6210\u5f8c\uff0c\u5c31\u53ef\u4ee5\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u67e5\u770b\u8cc7\u6e90\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get node -o wide\nkubectl get pod -A\nkubectl get svc -A\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3816).Z,width:"710",height:"167"})),(0,l.kt)("p",null,"\u4f46\u76ee\u524d\u88e1\u9762\u662f\u6c92\u6709\u4efb\u4f55\u5167\u5bb9\uff0c\u70ba\u4e86\u8981\u6a21\u64ec K8s \u72c0\u6cc1\uff0c\u8981\u5148\u52a0\u5165\u65b0\u7bc0\u9ede\u3002"),(0,l.kt)("h3",{id:"kwok-\u65b0\u589e\u7bc0\u9ede"},"KWOK \u65b0\u589e\u7bc0\u9ede"),(0,l.kt)("p",null,"\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u5c31\u53ef\u4ee5\u65b0\u589e\u7bc0\u9ede\u3002\uff08",(0,l.kt)("strong",{parentName:"p"},"\u8a3b\uff1a\u9019\u88e1\u662f\u6839\u64da KWOK \u5b98\u7db2\u52a0\u5165\u7bc0\u9ede\u7684\u6559\u5b78\uff0c\u5be6\u969b\u4e0a K8s \u4e0d\u6703\u9019\u6a23\u65b0\u589e\u7bc0\u9ede\uff0c\u7279\u6b64\u6ce8\u610f\u3002"),"\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: v1\nkind: Node\nmetadata:\n  annotations:\n    node.alpha.kubernetes.io/ttl: "0"\n    kwok.x-k8s.io/node: fake\n  labels:\n    beta.kubernetes.io/arch: amd64\n    beta.kubernetes.io/os: linux\n    kubernetes.io/arch: amd64\n    kubernetes.io/hostname: kwok-node-0\n    kubernetes.io/os: linux\n    kubernetes.io/role: agent\n    node-role.kubernetes.io/agent: ""\n    type: kwok\n  name: kwok-node-0\nspec:\n  taints: # Avoid scheduling actual running pods to fake Node\n    - effect: NoSchedule\n      key: kwok.x-k8s.io/node\n      value: fake\nstatus:\n  allocatable:\n    cpu: 32\n    memory: 256Gi\n    pods: 110\n  capacity:\n    cpu: 32\n    memory: 256Gi\n    pods: 110\n  nodeInfo:\n    architecture: amd64\n    bootID: ""\n    containerRuntimeVersion: ""\n    kernelVersion: ""\n    kubeProxyVersion: fake\n    kubeletVersion: fake\n    machineID: ""\n    operatingSystem: linux\n    osImage: ""\n    systemUUID: ""\n  phase: Running\nEOF\n')),(0,l.kt)("p",null,"\u65b0\u589e\u5f8c\u6703\u986f\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"node/kwok-node-0 created"),"\u3002"),(0,l.kt)("p",null,"\u78ba\u8a8d Node \u6709\u9032\u5165 Ready\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get node -o wide\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8406).Z,width:"1112",height:"101"})),(0,l.kt)("h3",{id:"\u65b0\u589e-deployment"},"\u65b0\u589e Deployment"),(0,l.kt)("p",null,"\u9019\u88e1\u6211\u5011\u4f86\u5617\u8a66\u52a0\u5165\u4e00\u4e9b Pod \u5230 KWOK \u88e1\u9762\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f - <<EOF\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: fake-pod\n  namespace: default\nspec:\n  replicas: 10\n  selector:\n    matchLabels:\n      app: fake-pod\n  template:\n    metadata:\n      labels:\n        app: fake-pod\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n              - matchExpressions:\n                  - key: type\n                    operator: In\n                    values:\n                      - kwok\n      # A taints was added to an automatically created Node.\n      # You can remove taints of Node or add this tolerations.\n      tolerations:\n        - key: "kwok.x-k8s.io/node"\n          operator: "Exists"\n          effect: "NoSchedule"\n      containers:\n        - name: fake-container\n          image: fake-image\nEOF\n')),(0,l.kt)("p",null,"Deployment \u5efa\u7acb\u6210\u529f\u5f8c\uff0c\u6703\u986f\u793a\u4e0b\u5217\u8f38\u51fa: ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment.apps/fake-pod created")),(0,l.kt)("p",null,"\u5efa\u7acb\u5b8c\u6210\u5f8c\uff0c\u5217\u51fa Deployment\u3001ReplicaSet \u548c\u6240\u6709 Pod\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployment\nkubectl get replicaset\nkubectl get pod\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8828).Z,width:"1104",height:"377"})),(0,l.kt)("p",null,"\u770b\u8d77\u4f86\u6c92\u554f\u984c\uff0c\u9023 ReplicaSet \u90fd\u53ef\u4ee5\u6a21\u64ec\u5462\uff01"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u8a66\u8457 describe deployment\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe deploy fake-pod\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4675).Z,width:"965",height:"633"})),(0,l.kt)("p",null,"describe \u51fa\u4f86\u7684\u5167\u5bb9\u5f88\u5be6\u969b\u5462\uff0c\u4e0b\u4e00\u6bb5\u4f86\u7de8\u8f2f\u770b\u770b Deployment\u3002"),(0,l.kt)("h3",{id:"\u7de8\u8f2f-deployment"},"\u7de8\u8f2f Deployment"),(0,l.kt)("p",null,"\u6a21\u64ec\u5de5\u5177\u53ef\u4ee5\u6a21\u4eff\u591a\u500b Pod \u505a scale up \u60c5\u6cc1\uff0c\u90a3\u6211\u5011\u5c31\u4f86\u5617\u8a66\u770b\u770b\uff01"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit deploy fake-pod\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5377).Z,width:"1127",height:"634"})),(0,l.kt)("p",null,"\u5c31\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},".spec.replicas")," \u8abf\u5230 120 \u500b\u770b\u770b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7875).Z,width:"419",height:"139"})),(0,l.kt)("p",null,"\u7de8\u8f2f\u5b8c\u6210\u5f8c\u9000\u51fa\uff0c\u6210\u529f\u5c31\u6703\u986f\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment.apps/fake-pod edited"),"\uff0c\u4f86\u770b\u770b\u6709\u6c92\u6709\u7522\u751f\u6210\u529f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployment\nkubectl get replicaset\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6057).Z,width:"494",height:"141"})),(0,l.kt)("p",null,"\u9019\u88e1\u986f\u793a\u70ba 110 \u500b READY\uff0c\u5c31\u4ee3\u8868\u662f\u6c92\u6709\u554f\u984c\u7684\uff0c\u56e0\u70ba\u55ae\u7bc0\u9ede Pod \u6578\u91cf\u5efa\u8b70\u4e0a\u9650\u70ba 110 \u500b\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u56de\u53bb\u770b\u524d\u9762\u5efa\u7acb\u7bc0\u9ede\u7684\u6b65\u9a5f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".status.allocatable.pods")," \u4e5f\u662f\u5beb\u4e0a 110\u3002"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u642d\u914d ",(0,l.kt)("inlineCode",{parentName:"p"},"grep")," \u770b\u4e00\u4e0b Pending \u7684 Pod\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod | grep Pending\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6620).Z,width:"580",height:"234"})),(0,l.kt)("h3",{id:"\u522a\u9664-deployment"},"\u522a\u9664 Deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete deployment fake-pod\nkubectl get pod -A\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(8724).Z,width:"458",height:"110"})),(0,l.kt)("h2",{id:"\u505c\u6b62-kwok"},"\u505c\u6b62 KWOK"),(0,l.kt)("p",null,"\u6700\u5f8c\u5c31\u628a KWOK \u7684 container \u505c\u6b62\u5c31\u597d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps -a\ndocker stop <CONTAINER ID>\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7685).Z,width:"995",height:"176"})),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("p",null,"\u76ee\u524d\u9019\u6a23\u521d\u6b65\u73a9\u4e0b\u4f86\u89ba\u5f97 KWOK \u662f\u9084\u883b\u4e0d\u932f\u7684\u6a21\u64ec\u5668\uff0c\u9019\u6a23\u6e2c\u4e0b\u4f86\u7d50\u679c\u8a72\u6709\u7684\u90fd\u6709\uff0c\u9019\u5de5\u5177\u500b\u4eba\u89ba\u5f97\u883b\u9069\u5408\u525b\u5165\u9580 K8s \u7684\u4eba\uff0c\u6216\u8005\u60f3\u6e2c\u8a66\u4e00\u4e9b\u591a\u7bc0\u9ede\u7684\u7279\u6b8a\u73a9\u6cd5\uff0c\u4e0d\u7528\u6015\u6e2c\u5931\u6557\u628a\u6574\u500b\u74b0\u5883\u641e\u721b\u82b1\u6642\u9593\u91cd\u5efa\uff0c\u5982\u679c\u60f3\u8981\u6a21\u64ec\u4e0a\u5343\u7bc0\u9ede\u60c5\u6cc1\u4e5f\u4e0d\u9700\u8981\u6602\u8cb4\u7684\u786c\u9ad4\u8a2d\u5099\u3002"),(0,l.kt)("p",null,"\u771f\u8981\u8aaa\u552f\u4e00\u7f3a\u9ede\u7684\u8a71\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," \u662f\u4e0d\u6703\u51fa\u73fe\u7684\uff0c",(0,l.kt)("del",{parentName:"p"},"\u6c92\u8fa6\u6cd5\u8b93\u65b0\u624b\u9ad4\u9a57\u5730\u7344\uff0c\u771f\u7684\u6709\u9ede\u53ef\u60dc"),"\uff0c\u4f46\u7562\u7adf\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"K8s WithOut Kubelet"),"\uff0c\u80cc\u5f8c\u662f\u4e0d\u6703\u8dd1\u771f\u6b63\u7684 container\uff0c\u6c92\u6709\u8fa6\u6cd5\u6a21\u64ec\u51fa\u4e5f\u662f\u5f88\u6b63\u5e38\u7684\u3002"))}k.isMDXComponent=!0},6172:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-ps-fd0e7891809d181dd36afca5edbbf02c.png"},3816:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubectl-all-0dac8fc07f1f97730e13c6f277c11290.png"},8724:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubectl-delete-36be7dab41e53ba0466402d4103e4384.png"},8828:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubectl-deploy-25258f2e97206c2575784cb462d50c02.png"},4675:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubectl-describe-44f7a42f29cb3e9f72e3bac4b1525026.png"},5377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubectl-edit-9707a45e6bc430ea2ea9d19955e7f167.png"},7258:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubectl-install-334a26525d6a258bbe9c02044eda8a24.png"},8406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kubectl-node-9fc1254948e68c8decf91dcf1d29cc8c.png"},6620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pending-97d7e7990a54181a6c30e16141fff6fc.png"},7875:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/replicas-0540e4a35152a926de7165ec1cdb7e9f.png"},6057:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scale-up-c9947c5037c370268febdd0c3685ef86.png"},8781:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/start-kwok-14c0f68da6f4af84c4b7f0e83eeab816.png"},7685:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stop-kwok-bcafa8f3c4a1836c5fd90778ce4b35cb.png"}}]);