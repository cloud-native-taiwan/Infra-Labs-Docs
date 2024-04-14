"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[9300],{5425:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var r=s(5893),d=s(1151);const t={description:""},c="OpenStack \u4e0a\u5229\u7528 kubeadm \u642d\u5efa K8S Cluster",i={id:"self-paced-labs/kubeadm/index",title:"OpenStack \u4e0a\u5229\u7528 kubeadm \u642d\u5efa K8S Cluster",description:"",source:"@site/docs/self-paced-labs/kubeadm/index.md",sourceDirName:"self-paced-labs/kubeadm",slug:"/self-paced-labs/kubeadm/",permalink:"/docs/self-paced-labs/kubeadm/",draft:!1,unlisted:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/self-paced-labs/kubeadm/index.md",tags:[],version:"current",frontMatter:{description:""},sidebar:"self_paced_labs",previous:{title:"OpenStack \u4e0a\u5229\u7528 kops \u642d\u5efa K8S Cluster",permalink:"/docs/self-paced-labs/kops/"},next:{title:"KWOK in Docker - \u9ad4\u9a57\u4e0a\u5343\u7bc0\u9ede\u7684 K8s \u5de5\u5177",permalink:"/docs/self-paced-labs/kwok-in-docker/"}},l={},o=[{value:"kubeadm \u4ecb\u7d39",id:"kubeadm-\u4ecb\u7d39",level:2},{value:"\u524d\u7f6e\u6e96\u5099",id:"\u524d\u7f6e\u6e96\u5099",level:2},{value:"\u958b\u555f OpenStack \u4e0a\u7684\u865b\u64ec\u4e3b\u6a5f",id:"\u958b\u555f-openstack-\u4e0a\u7684\u865b\u64ec\u4e3b\u6a5f",level:3},{value:"\u5b89\u5168\u6027\u7fa4\u7d44: Control Plane (Master Node)",id:"\u5b89\u5168\u6027\u7fa4\u7d44-control-plane-master-node",level:3},{value:"\u5b89\u5168\u6027\u7fa4\u7d44: Worker Node",id:"\u5b89\u5168\u6027\u7fa4\u7d44-worker-node",level:3},{value:"\u95dc\u9589 swap",id:"\u95dc\u9589-swap",level:3},{value:"\u78ba\u8a8d\u5404\u7bc0\u9ede\u4e0a\u7684 MAC address \u53ca <code>product_uuid</code> \u7686\u4e0d\u76f8\u540c",id:"\u78ba\u8a8d\u5404\u7bc0\u9ede\u4e0a\u7684-mac-address-\u53ca-product_uuid-\u7686\u4e0d\u76f8\u540c",level:3},{value:"\u5b89\u88dd Container Runtime",id:"\u5b89\u88dd-container-runtime",level:3},{value:"\u5b89\u88dd <code>kubeadm</code>, <code>kubectl</code>, <code>kubelet</code>",id:"\u5b89\u88dd-kubeadm-kubectl-kubelet",level:2},{value:"\u4ee5 <code>kubeadm</code> \u521d\u59cb\u5316 Kubernetes \u53e2\u96c6",id:"\u4ee5-kubeadm-\u521d\u59cb\u5316-kubernetes-\u53e2\u96c6",level:2},{value:"\u5c07 Worker Node \u52a0\u5165\u53e2\u96c6",id:"\u5c07-worker-node-\u52a0\u5165\u53e2\u96c6",level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"openstack-\u4e0a\u5229\u7528-kubeadm-\u642d\u5efa-k8s-cluster",children:"OpenStack \u4e0a\u5229\u7528 kubeadm \u642d\u5efa K8S Cluster"}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u6b21 lab \u6703\u793a\u7bc4\u5982\u4f55\u5728 OpenStack \u4e2d\u900f\u904e kubeadm \u642d\u5efa\u4e00\u500b Kubernetes Cluster\u3002\u7248\u672c\u70ba ",(0,r.jsx)(n.code,{children:"1.27"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"kubeadm-\u4ecb\u7d39",children:"kubeadm \u4ecb\u7d39"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"kubeadm"})," \u662f\u5b98\u65b9\u958b\u767c\u4e26\u7dad\u8b77\uff0c\u7528\u4ee5\u5efa\u7acb\u539f\u751f Kubernetes \u74b0\u5883\u7684\u5de5\u5177\u3002\u76f8\u8f03\u65bc\u5176\u4ed6\u5de5\u5177\uff0c\u50cf\u662f ",(0,r.jsx)(n.code,{children:"kops"}),"\u3001",(0,r.jsx)(n.code,{children:"kubespray"}),"\uff0c",(0,r.jsx)(n.code,{children:"kubeadm"})," \u9700\u8981\u624b\u52d5\u5b89\u88dd\u7684\u6b65\u9a5f\u8f03\u591a\uff0c\u56e0\u70ba\u5176\u76ee\u7684\u5728\u65bc\u5efa\u7acb",(0,r.jsx)(n.strong,{children:"\u539f\u751f"}),"\u7684 K8s \u53e2\u96c6\uff0c\u800c\u539f\u751f\u7684\u53e2\u96c6\u9069\u5408\u7528\u4f86\u5b78\u7fd2\u6216\u6e2c\u8a66\u7528\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u539f\u751f"})," \u7684\u610f\u601d\u662f\u76f8\u8f03\u65bc\u50cf\u662f\u516c\u6709\u96f2\u63d0\u4f9b\u7684 AKS\u3001GKE\u3001EKS \u7b49\u5305\u88dd\u904e\u7684 Kubernetes \u5f15\u64ce\uff0c\u6216\u662f\u5730\u7aef\u63d0\u4f9b\u7684 Rancher \u7b49\uff0ckubeadm \u6240\u5b89\u88dd\u7684 Kubernetes \u6c92\u6709\u5ba2\u88fd\u5316\u7684\u529f\u80fd\uff0c\u7d55\u5927\u591a\u6578\u984d\u5916\u7684\u529f\u80fd\u9700\u8981\u81ea\u884c\u5b89\u88dd\uff0c\u4e5f\u56e0\u6b64\u9069\u5408\u62ff\u4f86\u5b78\u7fd2\u6982\u5ff5\u6216\u662f\u505a PoC \u4e4b\u985e\u7684\u7528\u9014\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u524d\u7f6e\u6e96\u5099",children:"\u524d\u7f6e\u6e96\u5099"}),"\n",(0,r.jsx)(n.h3,{id:"\u958b\u555f-openstack-\u4e0a\u7684\u865b\u64ec\u4e3b\u6a5f",children:"\u958b\u555f OpenStack \u4e0a\u7684\u865b\u64ec\u4e3b\u6a5f"}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u6b21 lab \u5c07\u642d\u5efa 1 \u500b master node\u30012 \u500b worker node \u7684 Kubernetes cluster\uff0c\u56e0\u6b64\u9700\u8981\u5148\u5728 Openstack dashboard \u4e2d\u958b\u555f\u865b\u64ec\u4e3b\u6a5f\u3002\u9019\u908a\u53ef\u53c3\u8003 ",(0,r.jsx)(n.a,{href:"https://docs.cloudnative.tw/docs/tutorial-basics/create-security-group",children:"Infra Labs \u57fa\u790e\u6559\u5b78 > \u5efa\u7acb\u5b89\u5168\u6027\u7fa4\u7d44"})," \u4ee5\u53ca ",(0,r.jsx)(n.a,{href:"https://docs.cloudnative.tw/docs/tutorial-basics/create-vm",children:"Infra Labs \u57fa\u790e\u6559\u5b78 > \u5efa\u7acb VM"})," \u6240\u505a\u7684\u8a2d\u5b9a\u53bb\u958b\u555f\u5c0d\u61c9\u7684\u865b\u64ec\u4e3b\u6a5f\uff0c\u4e26\u4f9d\u7167 Kubernetes \u7684\u7db2\u8def\u57e0\u9700\u6c42\u8a2d\u5b9a\u5c0d\u61c9\u7684\u5b89\u5168\u6027\u7fa4\u7d44\u4e26\u5206\u914d\u7d66\u865b\u64ec\u4e3b\u6a5f\u3002\u672c\u6b21 lab \u6703\u4f7f\u7528\u4e0b\u5217\u7684\u8a2d\u5b9a\uff0c\u5b89\u5168\u6027\u7fa4\u7d44\u5247\u53c3\u8003 ",(0,r.jsx)(n.a,{href:"https://v1-27.docs.kubernetes.io/docs/reference/networking/ports-and-protocols/",children:"Kubernetes required ports"})," \u505a\u8a2d\u5b9a:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Server Name"}),(0,r.jsx)(n.th,{children:"Private IP"}),(0,r.jsx)(n.th,{children:"CPU"}),(0,r.jsx)(n.th,{children:"RAM"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bastion-host"}),(0,r.jsx)(n.td,{children:"192.168.200.100"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"2G"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"k8s-master"}),(0,r.jsx)(n.td,{children:"192.168.200.101"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"4G"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"k8s-n0"}),(0,r.jsx)(n.td,{children:"192.168.200.102"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"4G"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"k8s-n1"}),(0,r.jsx)(n.td,{children:"192.168.200.103"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"4G"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u5168\u6027\u7fa4\u7d44-control-plane-master-node",children:"\u5b89\u5168\u6027\u7fa4\u7d44: Control Plane (Master Node)"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Protocol"}),(0,r.jsx)(n.th,{children:"Direction"}),(0,r.jsx)(n.th,{children:"Port Range"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Used By"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TCP"}),(0,r.jsx)(n.td,{children:"Inbound"}),(0,r.jsx)(n.td,{children:"6443"}),(0,r.jsx)(n.td,{children:"K8s API server"}),(0,r.jsx)(n.td,{children:"All"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TCP"}),(0,r.jsx)(n.td,{children:"Inbound"}),(0,r.jsx)(n.td,{children:"2379-2380"}),(0,r.jsx)(n.td,{children:"etcd server client API"}),(0,r.jsx)(n.td,{children:"kube-apiserver, etcd"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TCP"}),(0,r.jsx)(n.td,{children:"Inbound"}),(0,r.jsx)(n.td,{children:"10250"}),(0,r.jsx)(n.td,{children:"kubelet API"}),(0,r.jsx)(n.td,{children:"Self, Control Plane"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TCP"}),(0,r.jsx)(n.td,{children:"Inbound"}),(0,r.jsx)(n.td,{children:"10259"}),(0,r.jsx)(n.td,{children:"kube-scheduler"}),(0,r.jsx)(n.td,{children:"Self"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TCP"}),(0,r.jsx)(n.td,{children:"Inbound"}),(0,r.jsx)(n.td,{children:"10257"}),(0,r.jsx)(n.td,{children:"kube-scontroller-manager"}),(0,r.jsx)(n.td,{children:"Self"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u5168\u6027\u7fa4\u7d44-worker-node",children:"\u5b89\u5168\u6027\u7fa4\u7d44: Worker Node"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Protocol"}),(0,r.jsx)(n.th,{children:"Direction"}),(0,r.jsx)(n.th,{children:"Port Range"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Used By"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TCP"}),(0,r.jsx)(n.td,{children:"Inbound"}),(0,r.jsx)(n.td,{children:"10250"}),(0,r.jsx)(n.td,{children:"kubelet API"}),(0,r.jsx)(n.td,{children:"Self, Control Plane"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TCP"}),(0,r.jsx)(n.td,{children:"Inbound"}),(0,r.jsx)(n.td,{children:"30000-32767"}),(0,r.jsx)(n.td,{children:"NodePort Services"}),(0,r.jsx)(n.td,{children:"All"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u95dc\u9589-swap",children:"\u95dc\u9589 swap"}),"\n",(0,r.jsxs)(n.p,{children:["swap \u6982\u5ff5\u4e0a\u662f Linux \u4e2d\u70ba\u4e86\u9632\u6b62\u767c\u751f\u8a18\u61b6\u9ad4\u77ed\u6642\u9593\u5167\u4e0d\u5920\u7528\u7684\u60c5\u6cc1\uff0c\u800c\u914d\u7f6e\u7684\u5132\u5b58\u7a7a\u9593\uff0cK8s \u9810\u8a2d\u4e0d\u652f\u63f4\uff0c\u56e0\u70ba\u5176\u6703\u5f71\u97ff Kubernetes \u5728\u5bb9\u5668\u90e8\u7f72\u7684\u8a18\u61b6\u9ad4\u5206\u914d\u548c\u7ba1\u7406\u8a08\u7b97\u4e0a\u7684\u7cbe\u78ba\u5ea6\u3002\u5728 ",(0,r.jsx)(n.code,{children:"1.27"})," \u4e2d\uff0cswap \u9084\u8655\u65bc alpha \u7684\u968e\u6bb5\uff0c\u5b98\u65b9\u6587\u4ef6\u4e5f\u8aaa\u660e\u5fc5\u9808\u8981\u95dc\u9589 swap \u4ee5\u907f\u514d kubelet \u51fa\u73fe\u932f\u8aa4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo swapoff -a\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u4e0a\u8ff0\u6307\u4ee4\u53ef\u4ee5\u66ab\u6642\u95dc\u9589 swap \u529f\u80fd\uff0c\u4f46\u6a5f\u5668\u91cd\u555f\u5f8c\u6709\u53ef\u80fd\u6703\u81ea\u52d5\u958b\u555f\uff0c\u56e0\u6b64\u8f03\u4fdd\u96aa\u7684\u505a\u6cd5\u662f\u5230 ",(0,r.jsx)(n.code,{children:"/etc/fstab"})," \u4e2d\u4fee\u6539\u76f8\u95dc\u8a2d\u5b9a\u3002"]})}),"\n",(0,r.jsxs)(n.h3,{id:"\u78ba\u8a8d\u5404\u7bc0\u9ede\u4e0a\u7684-mac-address-\u53ca-product_uuid-\u7686\u4e0d\u76f8\u540c",children:["\u78ba\u8a8d\u5404\u7bc0\u9ede\u4e0a\u7684 MAC address \u53ca ",(0,r.jsx)(n.code,{children:"product_uuid"})," \u7686\u4e0d\u76f8\u540c"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9019\u500b\u6b65\u9a5f\u662f\u70ba\u4e86\u78ba\u4fdd Kubernetes \u5728\u8fa8\u8a8d Node \u7684\u6642\u5019\u6709\u552f\u4e00\u503c\u53ef\u4f5c\u53c3\u8003\uff0c\u5982\u679c Node \u9593\u6709\u76f8\u540c\u7684 MAC address \u6216 ",(0,r.jsx)(n.code,{children:"product_uuid"})," \u53ef\u80fd\u6703\u9020\u6210\u5b89\u88dd\u5931\u6557\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Get the MAC address of the network interfaces\nip link\n\n# Get the product_uuid\nsudo cat /sys/class/dmi/id/product_uuid\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u88dd-container-runtime",children:"\u5b89\u88dd Container Runtime"}),"\n",(0,r.jsxs)(n.p,{children:["\u6aa2\u67e5\u5b8c\u6240\u9700\u7684\u7db2\u8def\u63a5\u53e3\u4e4b\u5f8c\uff0c\u7531\u65bc ",(0,r.jsx)(n.code,{children:"kubeadm"})," \u6982\u5ff5\u4e0a\u662f\u5c07\u5404\u500b\u57fa\u672c\u5143\u4ef6\u5982 API server\u3001etcd \u7b49\u900f\u904e\u5bb9\u5668\u7684\u65b9\u5f0f\u904b\u884c\uff0c\u56e0\u6b64\u6211\u5011\u5fc5\u9808\u5148\u5b89\u88dd container runtime\u3002\u9019\u908a\u6709\u4e0d\u540c\u7684\u89e3\u6c7a\u65b9\u6848\u53ef\u4ee5\u4f7f\u7528\uff0c\u4f8b\u5982 containerd\u3001CRI-O\u3001Docker Engine \u7b49\uff0c\u9019\u908a\u6703\u4ee5 CRI-O \u4f5c\u70ba\u7bc4\u4f8b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u70ba\u6211\u5011\u5728 OpenStack \u4e0a\u662f\u4ee5 Ubuntu \u4f5c\u70ba\u4f5c\u696d\u7cfb\u7d71\uff0c\u4e26\u9810\u8a08\u5b89\u88dd CRI-O ",(0,r.jsx)(n.code,{children:"1.24"})," \u7248\u672c\uff0c\u5728\u5b98\u65b9\u6587\u4ef6\u4e0a\u6709",(0,r.jsx)(n.a,{href:"https://github.com/cri-o/cri-o/blob/main/install-legacy.md#apt-based-operating-systems",children:"\u5c0d\u61c9\u7684\u5b89\u88dd\u65b9\u5f0f"}),"\u3002\u63a5\u4e0b\u4f86\u7684\u6307\u4ee4\u9700\u8981\u4ee5 root \u6b0a\u9650\u57f7\u884c:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u9032\u5165 root \u6b0a\u9650 shell\nsudo su\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u7e7c\u7e8c\u5b89\u88dd container runtime \u524d\uff0c\u6211\u5011\u9700\u8981\u5148\u6307\u5b9a\u8981\u5b89\u88dd\u7684 CRI-O \u7248\u672c\u53ca OS\uff0c\u9019\u908a\u56e0\u70ba\u9810\u8a08\u5b89\u88dd\u7684 CRI-O \u7248\u672c\u70ba ",(0,r.jsx)(n.code,{children:"1.24"})," \uff0c\u4ee5\u53ca\u5728 Infra Lab \u5efa\u7acb\u7684\u96f2\u5be6\u4f8b OS \u662f ",(0,r.jsx)(n.code,{children:"Ubuntu 22.04"}),"\uff0c\u56e0\u6b64\u6839\u64da",(0,r.jsx)(n.a,{href:"https://github.com/cri-o/cri-o/blob/main/install-legacy.md#apt-based-operating-systems",children:"\u5b98\u65b9\u6587\u4ef6"}),"\u900f\u904e\u6307\u4ee4\u8a2d\u5b9a\u5982\u4e0b:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export VERSION=1.24\nexport OS=xUbuntu_22.04\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u8457\u7e7c\u7e8c\u57f7\u884c\u5b89\u88dd container runtime \u7684\u76f8\u95dc\u6307\u4ee4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo "deb [signed-by=/usr/share/keyrings/libcontainers-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\necho "deb [signed-by=/usr/share/keyrings/libcontainers-crio-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list\n\nmkdir -p /usr/share/keyrings\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-archive-keyring.gpg\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-crio-archive-keyring.gpg\n\napt-get update\napt-get install cri-o cri-o-runc containernetworking-plugins\n\n# \u96e2\u958b root \u6b0a\u9650 shell\nexit\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5b89\u88dd\u5b8c container runtime \u76f8\u95dc\u7684\u5957\u4ef6\u5f8c\uff0c\u8a18\u5f97\u5c07 container runtime interface \u7684\u670d\u52d9\u555f\u52d5\uff0c\u5426\u5247\u5f8c\u7e8c\u7684 kubeadm \u521d\u59cb\u5316\u6703\u6c92\u8fa6\u6cd5\u57f7\u884c\u3002(\u8981\u6709 container runtime \u624d\u80fd\u8dd1\u8d77 K8s \u7684\u5404\u500b\u5143\u4ef6\u4f8b\u5982 API Server, Scheduler \u7b49)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable crio\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6aa2\u67e5\u4e00\u4e0b\u72c0\u614b:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status crio\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",children:"\u25cf crio.service - Container Runtime Interface for OCI (CRI-O)\n     Loaded: loaded (/lib/systemd/system/crio.service; disabled; vendor preset: enabled)\n     Active: active (running) since Fri 2024-01-26 07:16:17 UTC; 2s ago\n       Docs: https://github.com/cri-o/cri-o\n   Main PID: 11019 (crio)\n      Tasks: 10\n     Memory: 11.3M\n        CPU: 207ms\n     CGroup: /system.slice/crio.service\n             \u2514\u250011019 /usr/bin/crio\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u78ba\u8a8d\u72c0\u614b\u70ba ",(0,r.jsx)(n.code,{children:"Active"})," \uff0c\u5c31\u4ee3\u8868 container runtime \u6709\u6210\u529f\u5728\u80cc\u666f\u57f7\u884c\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u5b89\u88dd-kubeadm-kubectl-kubelet",children:["\u5b89\u88dd ",(0,r.jsx)(n.code,{children:"kubeadm"}),", ",(0,r.jsx)(n.code,{children:"kubectl"}),", ",(0,r.jsx)(n.code,{children:"kubelet"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u4f86\u5c31\u53ef\u4ee5\u5b89\u88dd\u6700\u91cd\u8981\u7684 ",(0,r.jsx)(n.code,{children:"kubeadm"})," \u5de5\u5177\uff0c\u4ee5\u53ca\u64cd\u4f5c Kubernetes \u53e2\u96c6\u5e38\u7528\u5230\u7684 ",(0,r.jsx)(n.code,{children:"kubectl"})," \u548c\u5728\u5404\u500b\u7bc0\u9ede\u80cc\u666f\u4f5c\u70ba agent \u904b\u4f5c\u7684 ",(0,r.jsx)(n.code,{children:"kubelet"}),"\uff0c\u6839\u64da",(0,r.jsx)(n.a,{href:"https://v1-27.docs.kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl",children:"\u5b98\u65b9\u6587\u4ef6"}),"\u4f9d\u4e0b\u5217\u6307\u4ee4\u9032\u884c\u5b89\u88dd:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl\n\ncurl -fsSL https://pkgs.k8s.io/core:/stable:/v1.27/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg\n\necho 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.27/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list\n\nsudo apt-get update\nsudo apt-get install -y kubelet kubeadm kubectl\nsudo apt-mark hold kubelet kubeadm kubectl\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"\u4ee5-kubeadm-\u521d\u59cb\u5316-kubernetes-\u53e2\u96c6",children:["\u4ee5 ",(0,r.jsx)(n.code,{children:"kubeadm"})," \u521d\u59cb\u5316 Kubernetes \u53e2\u96c6"]}),"\n",(0,r.jsx)(n.p,{children:"\u5b89\u88dd\u5b8c\u4e0a\u8ff0\u5de5\u5177\u5f8c\uff0c\u63a5\u8457\u5c31\u53ef\u4ee5\u5728 Master Node \u4e0a\u521d\u59cb\u5316\u53e2\u96c6\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u6b64\u6b65\u9a5f\u53ea\u9700\u8981\u5728 Master Node \u4e0a\u57f7\u884c\uff01"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubeadm init --apiserver-advertise-address=192.168.200.101 --pod-network-cidr=10.244.0.0/16\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9019\u88e1\u7684 ",(0,r.jsx)(n.code,{children:"--apiserver-advertise-address"})," \u8a2d\u5b9a\u70ba ",(0,r.jsx)(n.code,{children:"192.168.200.101"})," \u662f\u56e0\u70ba ",(0,r.jsx)(n.code,{children:"kubeadm"})," \u539f\u672c\u6703\u4ee5\u9810\u8a2d\u7684 IP \u4f5c\u70ba API Server \u7684\u4f4d\u5740\uff0c\u800c\u5728\u9019\u6b21\u57fa\u65bc OpenStack \u7684 lab \u4e2d\uff0c\u6709\u8a2d\u5b9a\u597d\u7684 API Server \u4f4d\u5740\uff0c\u56e0\u6b64\u8981\u984d\u5916\u8a2d\u5b9a\u6b64\u53c3\u6578\u70ba Control Plane \u7684 IP\u3002",(0,r.jsx)(n.code,{children:"--pod-network-cidr"})," \u8a2d\u5b9a\u70ba ",(0,r.jsx)(n.code,{children:"10.244.0.0/16"})," \u5247\u662f\u56e0\u70ba\u5f8c\u7e8c\u9078\u7528 Flannel \u4f5c\u70ba CNI\uff0c\u6839\u64da\u5b98\u65b9\u5efa\u8b70\u8a2d\u5b9a\u6b64\u5340\u6bb5\u4f5c\u70ba Pod \u7684 CIDR\u3002"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"\u521d\u59cb\u5316\u904e\u7a0b\u4e2d\uff0c\u53ef\u80fd\u6703\u9047\u5230\u4e0b\u5217\u932f\u8aa4:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",children:"[preflight] Running pre-flight checks\nerror execution phase preflight: [preflight] Some fatal errors occurred:\n    [ERROR FileContent--proc-sys-net-bridge-bridge-nf-call-iptables]: /proc/sys/net/bridge/bridge-nf-call-iptables does not exist\n    [ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1\n[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`\nTo see the stack trace of this error execute with --v=5 or higher\n"})}),(0,r.jsxs)(n.p,{children:["\u9019\u662f\u7531\u65bc ",(0,r.jsx)(n.code,{children:"br_netfilter"})," \u6a21\u7d44\u4ee5\u53ca IP Forward \u7684\u529f\u80fd\u6c92\u6709\u555f\u52d5\uff0c\u9019\u5169\u8005\u6703\u7528\u4f86\u8655\u7406\u7db2\u8def\u5c01\u5305\u7684\u8f49\u767c\uff0c\u6240\u4ee5\u9700\u8981\u66f4\u6539\u90e8\u5206\u6a94\u6848\u8a2d\u5b9a:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/modules\n"})}),(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"/etc/modules"})," \u4e2d\u52a0\u4e0a ",(0,r.jsx)(n.code,{children:"br_netfilter"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",children:'# /etc/modules: kernel modules to load at boot time.\n#\n# This file contains the names of kernel modules that should be loaded\n# at boot time, one per line. Lines beginning with "#" are ignored.\n\nbr_netfilter  # \u52a0\u4e0a\u9019\u884c\u78ba\u4fdd\u958b\u6a5f\u6642\u5373\u555f\u52d5\n'})}),(0,r.jsxs)(n.p,{children:["\u63a5\u4e0b\u4f86\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"/etc/sysctl.conf"})," \u7684\u8a2d\u5b9a:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/sysctl.conf\n"})}),(0,r.jsx)(n.p,{children:"\u4fee\u6539\u95dc\u65bc ip_forward \u7684\u8a2d\u5b9a (\u9810\u8a2d\u662f\u8a3b\u89e3\u6389\u7684\uff0c\u79fb\u9664\u8a3b\u89e3\u5373\u53ef):"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",children:"# Uncomment the next line to enable packet forwarding for IPv4\nnet.ipv4.ip_forward=1\n"})}),(0,r.jsxs)(n.p,{children:["\u4e4b\u5f8c\uff0c\u91cd\u65b0\u958b\u6a5f\u4e26\u518d\u6b21\u57f7\u884c ",(0,r.jsx)(n.code,{children:"kubeadm init"})," \u6307\u4ee4\u5373\u53ef\u3002"]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5b89\u88dd\u9806\u5229\u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u4e0b\u5217\u8a0a\u606f\uff0c\u4ee3\u8868 Kubernetes \u7684 Control Plane \u5404\u500b\u5143\u4ef6\u5df2\u7d93\u9806\u5229\u8dd1\u8d77\u4f86\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plain",children:'Your Kubernetes control-plane has initialized successfully!\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n\nAlternatively, if you are the root user, you can run:\n\n  export KUBECONFIG=/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "kubectl apply -f [podnetwork].yaml" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can join any number of worker nodes by running the following on each as root:\n\nkubeadm join 192.168.200.101:6443 --token <your_token> \\\n  --discovery-token-ca-cert-hash <your_sha256_hash>\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\u6709\u63d0\u5230\u8981\u958b\u59cb\u4f7f\u7528\u53e2\u96c6\u7684\u8a71\uff0c\u9700\u8981\u4ee5\u4e00\u822c\u4f7f\u7528\u8005\u8eab\u4efd\u57f7\u884c\u4e0b\u5217\u6307\u4ee4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u8a0a\u606f\u4e2d\u6700\u5f8c\u4e00\u6bb5\u6709\u63d0\u4f9b\u52a0\u5165 Worker Node \u7528\u7684\u6307\u4ee4 (",(0,r.jsx)(n.code,{children:"kubeadm join"}),")\uff0c\u53ef\u4ee5\u5148\u5c07\u8a72\u6bb5\u6307\u4ee4\u8907\u88fd\u4e0b\u4f86\uff0c\u7528\u4f86\u5728\u5de5\u4f5c\u7bc0\u9ede\u4e0a\u57f7\u884c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5c07-worker-node-\u52a0\u5165\u53e2\u96c6",children:"\u5c07 Worker Node \u52a0\u5165\u53e2\u96c6"}),"\n",(0,r.jsxs)(n.p,{children:["\u524d\u9762\u7684\u6b65\u9a5f\u5e6b\u52a9\u6211\u5011\u5728 Master Node \u4e0a\u6210\u529f\u904b\u884c\u4e86 Control Plane\uff0c\u4f46\u8981\u4f5c\u70ba\u591a\u7bc0\u9ede\u7684 Kubernetes Cluster \u9084\u7f3a\u5c11\u4e86 Worker Node\uff0c\u56e0\u6b64\u63a5\u4e0b\u4f86\u8981\u900f\u904e ",(0,r.jsx)(n.code,{children:"kubeadm"})," \u5c07 Worker Node \u52a0\u5165\u53e2\u96c6\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u9032\u5165 Worker Node \u57f7\u884c\u4e0b\u5217\u6307\u4ee4:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubeadm join 192.168.200.101:6443 --token <your_token> \\\n      --discovery-token-ca-cert-hash <your_sha256_hash>\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"kubeadm \u7522\u751f\u7528\u4f86\u52a0\u5165 Worker Node \u7684 token \u9810\u8a2d\u6642\u6548\u70ba\u4e00\u5929\uff0c\u5982\u679c\u8d85\u904e\u6642\u9593\u672a\u52a0\u5165\u7684\u8a71\u53ef\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u91cd\u65b0\u7522\u51fa\u4e00\u7d44\u65b0\u7684 token \u4e26\u7372\u53d6\u5c0d\u61c9\u7684 CA certificate SHA256 \u503c:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Generate a new token\nkubeadm token create\n\n# Get the CA certificate\nopenssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'\n"})}),(0,r.jsxs)(n.p,{children:["\u63a5\u8457\u91cd\u65b0\u57f7\u884c ",(0,r.jsx)(n.code,{children:"kubeadm join"})," \u7684\u6307\u4ee4\u4e26\u5e36\u5165\u65b0\u7684 ",(0,r.jsx)(n.code,{children:"token"})," \u548c ",(0,r.jsx)(n.code,{children:"sha256"})," \u5373\u53ef\u3002"]})]}),"\n",(0,r.jsx)(n.p,{children:"\u5c07 Worker Node \u52a0\u5165\u53e2\u96c6\u4e4b\u5f8c\uff0c\u53ef\u4ee5\u56de\u5230 Master Node \u4e0a\uff0c\u770b\u770b node \u662f\u5426\u6210\u529f\u52a0\u5165\u5230\u53e2\u96c6\u4e4b\u4e2d:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get nodes\n\nNAME         STATUS   ROLES           AGE     VERSION\nk8s-master   Ready    control-plane   52m     v1.27.10\nk8s-n0       Ready    <none>          8m50s   v1.27.10\nk8s-n1       Ready    <none>          6s      v1.27.10\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u78ba\u8a8d\u72c0\u614b\u90fd\u70ba ",(0,r.jsx)(n.code,{children:"Ready"}),"\uff0c\u9019\u6a23\u4e00\u4f86\u4e00\u500b\u55ae\u63a7\u5236\u5e73\u9762\u3001\u5169\u500b\u5de5\u4f5c\u7bc0\u9ede\u7684 Kubernetes \u53e2\u96c6\u5c31\u67b6\u8a2d\u5b8c\u6210\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7e3d\u7d50",children:"\u7e3d\u7d50"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"kubeadm"})," \u5b89\u88dd\u904e\u7a0b\u8f03\u70ba\u7e41\u7463\uff0c\u56e0\u6b64\u5728\u904e\u7a0b\u4e2d\u6703\u4e86\u89e3\u5230\u6574\u500b Kubernetes \u5f9e\u5e95\u5c64\u958b\u59cb\u662f\u5982\u4f55\u904b\u4f5c\uff0c\u5305\u542b\u81ea\u884c\u5b89\u88dd CRI \u8b93 K8s \u53ef\u4ee5\u6709\u57f7\u884c\u5bb9\u5668\u7684\u74b0\u5883\u3001Control Plane \u7684 4 \u500b\u6838\u5fc3\u5143\u4ef6\u7686\u900f\u904e\u5bb9\u5668\u904b\u884c\uff0c\u751a\u81f3\u6709\u9700\u6c42\u81ea\u884c\u5b89\u88dd\u5176\u4ed6 CNI \u7b49\uff0c\u9019\u4e9b\u7d30\u7bc0\u5982\u679c\u900f\u904e\u81ea\u52d5\u5316\u5de5\u5177\u6216\u8005\u900f\u904e\u96f2\u670d\u52d9\u53bb\u8d77\u53e2\u96c6\u53ef\u80fd\u76f8\u5c0d\u96e3\u7406\u89e3\u5e95\u5c64\u662f\u600e\u9ebc\u642d\u5efa\u7684\uff0c\u56e0\u6b64 ",(0,r.jsx)(n.code,{children:"kubeadm"})," \u7528\u4f86\u4f5c\u70ba\u5b78\u7fd2\u76ee\u7684\u4ee5\u4e86\u89e3 K8s \u904b\u4f5c\u6a21\u5f0f\u7684\u8a71\u6709\u4e00\u5b9a\u7684\u6548\u76ca\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var r=s(7294);const d={},t=r.createContext(d);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);