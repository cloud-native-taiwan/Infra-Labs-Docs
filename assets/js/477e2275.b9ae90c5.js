"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[3780],{9198:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>t,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var n=l(5893),d=l(1151);const c={description:""},s="Image Building Tools Comparison",r={id:"self-paced-labs/tool_compare_lab/index",title:"Image Building Tools Comparison",description:"",source:"@site/docs/self-paced-labs/tool_compare_lab/index.md",sourceDirName:"self-paced-labs/tool_compare_lab",slug:"/self-paced-labs/tool_compare_lab/",permalink:"/docs/self-paced-labs/tool_compare_lab/",draft:!1,unlisted:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/self-paced-labs/tool_compare_lab/index.md",tags:[],version:"current",frontMatter:{description:""},sidebar:"self_paced_labs",previous:{title:"Kaniko \u6559\u5b78",permalink:"/docs/self-paced-labs/kaniko/"},next:{title:"Kubernetes",permalink:"/docs/category/kubernetes"}},a={},o=[{value:"\u7c21\u4ecb",id:"\u7c21\u4ecb",level:2},{value:"\u6e2c\u8a66\u74b0\u5883",id:"\u6e2c\u8a66\u74b0\u5883",level:2},{value:"\u6e2c\u8a66\u7684 Image",id:"\u6e2c\u8a66\u7684-image",level:2},{value:"\u5404\u9805\u5de5\u5177\u7c21\u4ecb",id:"\u5404\u9805\u5de5\u5177\u7c21\u4ecb",level:2},{value:"Docker",id:"docker",level:3},{value:"Buildkit",id:"buildkit",level:3},{value:"DinD",id:"dind",level:3},{value:"Buildah",id:"buildah",level:3},{value:"Kaniko",id:"kaniko",level:3},{value:"Labs",id:"labs",level:2},{value:"\u8cc7\u6e90\u8a08\u7b97",id:"\u8cc7\u6e90\u8a08\u7b97",level:3},{value:"Docker",id:"docker-1",level:3},{value:"DinD",id:"dind-1",level:3},{value:"Buildkit",id:"buildkit-1",level:3},{value:"Buildah",id:"buildah-1",level:3},{value:"Kaniko",id:"kaniko-1",level:3},{value:"\u6e2c\u8a66\u7d50\u679c",id:"\u6e2c\u8a66\u7d50\u679c",level:2},{value:"CPU Usage",id:"cpu-usage",level:3},{value:"Memory",id:"memory",level:3},{value:"Build Time",id:"build-time",level:3},{value:"Docker cache \u6a5f\u5236",id:"docker-cache-\u6a5f\u5236",level:4},{value:"Image Size",id:"image-size",level:3},{value:"\u5404\u9805\u5de5\u5177\u6bd4\u8f03",id:"\u5404\u9805\u5de5\u5177\u6bd4\u8f03",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2},{value:"Reference",id:"reference",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"image-building-tools-comparison",children:"Image Building Tools Comparison"}),"\n",(0,n.jsx)(i.h2,{id:"\u7c21\u4ecb",children:"\u7c21\u4ecb"}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\uff0c\u5c07\u6703\u7c21\u4ecb\u76ee\u524d\u5e38\u898b\u7684\u4e94\u7a2e Image Building Tools\uff0c\u5206\u5225\u662f\u76ee\u524d\u6700\u5e38\u898b\u7684 Docker \u4ee5\u53ca\u65b0\u7248\u672c\u5167\u5efa\u7684 Buildkit\u3001\u4ee5\u53ca\u5e38\u88ab\u7528\u5728 CICD \u904e\u7a0b\u4e2d\u7684\u4e09\u5957 Build tool\uff1aDind(Docker in Docker), Buildah, Kaniko \u4f5c\u6bd4\u8f03\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u6bd4\u8f03\u9019\u4e9b\u4e0a\u8ff0\u4e94\u9805  Image Building Tools \u5728 build image \u6642\u6240\u82b1\u8cbb\u7684\u7cfb\u7d71\u8cc7\u6e90\uff0c\u5982\u4e0b\u8ff0\u4e09\u9805\u6307\u6a19\uff1a"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Memory(\u6709 cache/ \u7121 cache)"}),"\n",(0,n.jsx)(i.li,{children:"Build Time"}),"\n",(0,n.jsx)(i.li,{children:"CPU time"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"\u4e26\u6bd4\u8f03 build \u5b8c\u6210\u5f8c\uff0cImage Size \u662f\u5426\u6709\u6240\u4e0d\u540c\uff0c\u4e26\u63a2\u8a0e\u5176\u4e2d\u7684\u5dee\u7570\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u6e2c\u8a66\u74b0\u5883",children:"\u6e2c\u8a66\u74b0\u5883"}),"\n",(0,n.jsx)(i.p,{children:"\u672c\u6b21 lab \u7d71\u4e00\u4f7f\u7528 CNTUG Infra Labs OpenStack \u4e0a\u7684 VM\uff0c\u898f\u683c\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Linux version: Ubuntu 20.04"}),"\n",(0,n.jsx)(i.li,{children:"vCPU: 4 cores"}),"\n",(0,n.jsx)(i.li,{children:"RAM\uff1a4 G"}),"\n",(0,n.jsx)(i.li,{children:"total Disk\uff1a30 GB"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"\u6e2c\u8a66\u65b9\u6cd5\u6703\u5728\u4e0b\u65b9 Labs \u5340\u584a\u4e2d\u8a73\u8ff0"}),"\n",(0,n.jsx)(i.h2,{id:"\u6e2c\u8a66\u7684-image",children:"\u6e2c\u8a66\u7684 Image"}),"\n",(0,n.jsxs)(i.p,{children:["\u672c\u6b21 lab \u4f7f\u7528 ",(0,n.jsx)(i.a,{href:"https://github.com/docker-library/php/blob/master/8.1/alpine3.15/fpm/Dockerfile",children:"php-fpm"})," \u505a image build tool \u7684\u6578\u64da\u6bd4\u8f03\uff1a"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"image name"}),(0,n.jsx)(i.th,{children:"php-fpm"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"version"}),(0,n.jsx)(i.td,{children:"php 8.1"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"base image"}),(0,n.jsx)(i.td,{children:"alpine 3.16"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"\u5404\u9805\u5de5\u5177\u7c21\u4ecb",children:"\u5404\u9805\u5de5\u5177\u7c21\u4ecb"}),"\n",(0,n.jsx)(i.h3,{id:"docker",children:"Docker"}),"\n",(0,n.jsxs)(i.p,{children:["\u70ba\u76ee\u524d\u5341\u5206\u5e38\u898b\u7684 container solution\uff0c\u69ae\u7372 2022 \u5e74 Stack Overflow \u958b\u767c\u8005\u5927\u8abf\u67e5\u958b\u767c\u8005\u6700\u611b\u5de5\u5177\u7684\u7b2c\u4e00\u540d\uff0c\u529f\u80fd\u9f4a\u5168\uff0c\u5728\u4f7f\u7528\u4e0a\u900f\u904e ",(0,n.jsx)(i.code,{children:"docker"})," \u6307\u4ee4\u9032\u884c container \u76f8\u95dc\u7684\u5404\u7a2e\u64cd\u4f5c\u3002"]}),"\n",(0,n.jsx)(i.h3,{id:"buildkit",children:"Buildkit"}),"\n",(0,n.jsxs)(i.p,{children:["Buildkit \u70ba Docker \u63a8\u51fa\u7684\u5be6\u9a57\u6027\u529f\u80fd\uff0c\u4e3b\u6253\u66f4\u9ad8\u6548\u80fd\u3001\u4e26\u884c\u7684\u904b\u4f5c\u65b9\u5f0f\uff0c\u4e5f\u91dd\u5c0d cache, storage management \u7b49\u529f\u80fd\u505a\u4e86\u8a31\u591a\u512a\u5316\uff0c\u52a0\u901f\u4e86\u4ee5\u5f80\u4f7f\u7528 Docker build image \u7684\u6d41\u7a0b\u4ee5\u53ca\u6700\u4f73\u5316\u4f7f\u7528\u9ad4\u9a57\uff0c\u9810\u8a2d\u5167\u5efa\u5728 ",(0,n.jsx)(i.code,{children:"Docker 18.09"})," \u7248\u672c\u4e4b\u5f8c\u7684 Docker \u5167\uff0c\u555f\u7528\u65b9\u5f0f\u4e5f\u5341\u5206\u7c21\u6613\uff0c",(0,n.jsx)(i.code,{children:"DOCKER_BUILDKIT=1 docker build ."})," \u5373\u53ef\u4f7f\u7528\uff0c\u5728 MacOS/Linux \u74b0\u5883\u4e0b\uff0c\u4e5f\u53ef\u900f\u904e\u5efa\u7acb ",(0,n.jsx)(i.code,{children:"/etc/docker/daemon.json"}),"\uff0c\u4e26\u52a0\u5165\u4ee5\u4e0b\u8a2d\u5b9a\u555f\u7528 Buildkit\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:'{\n  "features": {\n    "buildkit" : true\n  }\n}\n'})}),"\n",(0,n.jsx)(i.h3,{id:"dind",children:"DinD"}),"\n",(0,n.jsxs)(i.p,{children:["\u5168\u540d\u70ba Docker-in-Docker\uff0c\u9867\u540d\u601d\u7fa9\uff0c\u5728 Docker \u4e2d\u518d\u904b\u884c\u4e00\u500b Docker container\uff0c\u56e0\u6b64\u5728\u904b\u884c\u8d77\u4f86\u7684 container \u5167\uff0c\u4e5f\u80fd\u57f7\u884c ",(0,n.jsx)(i.code,{children:"docker"})," \u6307\u4ee4\uff0c\u901a\u5e38\u6703\u5728\u904b\u884c CICD pipeline \u6642\u4f7f\u7528\uff0c\u597d\u8655\u662f\u74b0\u5883\u9694\u96e2\uff0c\u6bcf\u6b21\u6703\u8d77\u65b0\u7684 Docker daemon\uff0c\u4f46 build \u7684\u6642\u5019\u7121\u6cd5\u5171\u4eab cache\uff0c\u4f46\u53ef\u4ee5\u900f\u904e ",(0,n.jsx)(i.code,{children:"cache-from"})," \u53bb\u6307\u5b9a\u7279\u5b9a\u7684 image \u52a0\u5165 build \u6d41\u7a0b\u3002"]}),"\n",(0,n.jsx)(i.h3,{id:"buildah",children:"Buildah"}),"\n",(0,n.jsxs)(i.p,{children:["Buildah \u662f\u7531 Red Hat \u958b\u767c\uff0c\u5e6b\u52a9\u958b\u767c\u8005 build \u76f8\u5bb9 OCI \u6a19\u6e96\u7684 container images \u7684\u4e00\u5957\u5de5\u5177\uff0c\u5728 podman \u4e2d\u9810\u8a2d\u6703\u5b89\u88dd Buildah\uff0c\u4f46\u4e5f\u53ef\u4ee5\u55ae\u7368\u5b89\u88dd\u4f7f\u7528\uff0c\u5728\u4f7f\u7528\u4e0a\u4e0d\u9808\u76f8\u4f9d\u65bc ",(0,n.jsx)(i.code,{children:"Dockerfile"}),"\uff0c\u800c\u662f\u80fd\u6307\u5b9a\u4efb\u610f\u5305\u542b build command \u7684\u6a94\u6848\uff0c\u53ef\u76f4\u63a5\u639b\u8f09 container\uff0c\u4e26\u5c0d\u5176\u5167\u5bb9\u9032\u884c\u64cd\u4f5c\uff0c\u589e\u52a0\u4f7f\u7528\u5f48\u6027\u3001\u5b89\u5168\u6027\u3002"]}),"\n",(0,n.jsxs)(i.p,{children:["\u8a73\u7d30\u529f\u80fd\u4ecb\u7d39\u53ef\u53c3\u8003",(0,n.jsx)(i.a,{href:"https://github.com/containers/buildah",children:"\u5b98\u65b9 Repo"})]}),"\n",(0,n.jsx)(i.h3,{id:"kaniko",children:"Kaniko"}),"\n",(0,n.jsxs)(i.p,{children:["\u53ef\u53c3\u8003\u4e4b\u524d Lab \u64b0\u5beb\u7684 ",(0,n.jsx)(i.a,{href:"https://docs.cloudnative.tw/docs/self-paced-labs/kaniko/",children:"Kaniko \u6559\u5b78"}),"\uff0cKaniko \u9069\u5408\u5728 container \u6216\u662f k8s cluster \u5167 build image\u3002"]}),"\n",(0,n.jsx)(i.h2,{id:"labs",children:"Labs"}),"\n",(0,n.jsx)(i.h3,{id:"\u8cc7\u6e90\u8a08\u7b97",children:"\u8cc7\u6e90\u8a08\u7b97"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["CPU\uff1a\u5728\u8a08\u7b97 CPU \u4f7f\u7528\u7387\u7684\u90e8\u5206\uff0c\u900f\u904e ",(0,n.jsx)(i.code,{children:"Pseudo-files"})," \u7684\u65b9\u5f0f\uff0c\u6bcf\u6b21\u5728 build image \u6642\uff0c\u8b80\u53d6 ",(0,n.jsx)(i.code,{children:"/sys/fs/cgroup/cpuacct/<TOOL_NAME>/$CONTAINER_ID/cpuacct.usage"})," \u53bb\u6bd4\u8f03 CPU \u4f7f\u7528\u7684\u8cc7\u6e90\u91cf\u3002"]}),"\n",(0,n.jsxs)(i.li,{children:["Memory\uff1a\u4f7f\u7528 time \u6307\u4ee4 ",(0,n.jsx)(i.code,{children:"/usr/bin/time -v"})," \u5217\u51fa\u55ae\u4e00\u6307\u4ee4\u6d88\u8017\u7684\u8cc7\u6e90\uff0c\u6bcf\u9805\u5de5\u5177\u4ee5\u540c\u6a23\u7684 build \u6307\u4ee4\u57f7\u884c 15 \u6b21\uff0c\u6bd4\u8f03\u6700\u5927\u503c\u3001\u6700\u5c0f\u503c\u3001\u5e73\u5747\u503c\u3002"]}),"\n",(0,n.jsxs)(i.li,{children:["Image size\uff1a\u5728\u6bd4\u8f03\u904e\u591a\u5957 container image \u5206\u6790\u5de5\u5177\u5f8c\uff0c\u9078\u64c7\u4f7f\u7528 Docker \u5167\u5efa\u7684\u5217\u51fa ",(0,n.jsx)(i.code,{children:"docker image ls"})," \u67e5\u770b image size\u3002"]}),"\n",(0,n.jsxs)(i.li,{children:["build time: \u4f7f\u7528 time \u6307\u4ee4 ",(0,n.jsx)(i.code,{children:"/usr/bin/time -v"})," \u67e5\u770b\u5176\u4e2d\u7684 ",(0,n.jsx)(i.code,{children:"Elapsed (wall clock) time"}),"\uff0c\u540c\u6a23\u6bd4\u8f03\u6700\u5927\u503c\u3001\u6700\u5c0f\u503c\u3001\u5e73\u5747\u503c\u3002"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"docker-1",children:"Docker"}),"\n",(0,n.jsxs)(i.p,{children:["\u5b89\u88dd\u7684\u7248\u672c\u70ba ",(0,n.jsx)(i.code,{children:"20.10.17"}),"\uff0c\u4e3b\u8981\u6bd4\u8f03\u6709\u7121 layer caching \u7684 build process"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\u9810\u8a2d\u6709 cache\n",(0,n.jsx)(i.code,{children:" docker build -t <image-name>:<version> ."})]}),"\n",(0,n.jsxs)(i.li,{children:["\u4e0d\u4f7f\u7528 cache\n",(0,n.jsx)(i.code,{children:" docker build -t <image-name>:<version> . --no-cache"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"dind-1",children:"DinD"}),"\n",(0,n.jsxs)(i.p,{children:["\u9996\u5148\u904b\u884c\u4e00\u500b dind container\uff0c\u4e26\u5c07 Dockerfile \u7b49\u5167\u5bb9 mount \u5230 container \u5167\uff0c\u4e26\u958b shell \u9032\u5230 dind container \u4e2d\uff0c\u518d build image\uff0c\u540c\u6a23\u6bd4\u8f03\u6709\u7121 layer caching\uff0c\u6b64\u8655\u4f7f\u7528 ",(0,n.jsx)(i.code,{children:"--cache-from"})," \u524d\u9762 build \u597d\u7684 image \u4ee5\u52a0\u901f build \u6d41\u7a0b\u3002"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell=",children:"$ docker run -v $PWD:/workspace --privileged -d --name dind-test docker:dind\n$ docker exec -it dind-test /bin/sh\n$ cd workspace\n$ docker build -t <image-name>:<version> .\n\n# build image with cache\n$ docker build -t <pre-existing-image-name>:<version> . --cache-from <image-name>:<version>\n"})}),"\n",(0,n.jsx)(i.h3,{id:"buildkit-1",children:"Buildkit"}),"\n",(0,n.jsxs)(i.p,{children:["\u555f\u7528 Buildkit \u5f8c\uff0c\u518d\u4e0b\u8ddf ",(0,n.jsx)(i.code,{children:"docker build"})," \u4e00\u6a23\u7684\u6307\u4ee4\u5373\u53ef\uff0c\u5982\u679c\u6709\u4e0b\u8f09 Docker Desktop\uff0c\u5247\u9810\u8a2d\u5c31\u6703\u555f\u7528"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell=",children:"$ DOCKER_BUILDKIT=1 docker build .\n"})}),"\n",(0,n.jsx)(i.h3,{id:"buildah-1",children:"Buildah"}),"\n",(0,n.jsxs)(i.p,{children:["\u5148\u55ae\u7368\u5b89\u88dd Buildah\uff0c\u518d\u4e0b ",(0,n.jsx)(i.code,{children:"buildah bud"})," \u5373\u53ef\u958b\u59cb build image"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell=",children:"# \u5b89\u88dd Buildah\n$ sudo apt install buildah\n# build image\n$ buildah bud -t <image-name>:<version> .\n# build image with layers cache\n$ buildah bud -t <image-name>:<version> --layers .\n# \u5217\u51fa build \u597d\u7684 image\n$ buildah images\n"})}),"\n",(0,n.jsx)(i.h3,{id:"kaniko-1",children:"Kaniko"}),"\n",(0,n.jsx)(i.p,{children:"\u4f7f\u7528 Docker \u904b\u884c kaniko v1.8.1 \u7684 container\uff0c\u4e26\u5c07 build \u597d\u7684 image \u63a8\u5230 Dockerhub \u4e0a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell=",children:"$ docker run -v $PWD:/workspace \\\n  -v ~/.docker/config.json:/kaniko/config.json \\\n  --env DOCKER_CONFIG=/kaniko gcr.io/kaniko-project/executor:v1.8.1 \\\n  -d <username>/<image-name>:<version>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"\u6e2c\u8a66\u7d50\u679c",children:"\u6e2c\u8a66\u7d50\u679c"}),"\n",(0,n.jsx)(i.h3,{id:"cpu-usage",children:"CPU Usage"}),"\n",(0,n.jsxs)(i.p,{children:["CPU \u8cc7\u6e90\u4f7f\u7528\u91cf\u7684\u90e8\u5206\uff0c\u5982\u4e0a\u9762 lab \u5340\u584a\u63d0\u5230\uff0c\u770b\u7684\u6a94\u6848\u662f ",(0,n.jsx)(i.code,{children:"cpu usage"}),"\uff0c",(0,n.jsx)(i.code,{children:"cpu usage"})," \u70ba lab \u4f7f\u7528\u7684\u74b0\u5883\uff1a",(0,n.jsx)(i.code,{children:"vCPU*4"})," \u7684\u8cc7\u6e90\u4f7f\u7528\u7e3d\u548c\uff0c\u4e14 build \u904e\u7a0b\u4e2d\u7686\u7121\u4f7f\u7528 cache\uff0c\u6bd4\u8f03\u7d50\u679c\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\u5e73\u5747/\u6700\u5927/\u6700\u5c0f\u4f7f\u7528\u8cc7\u6e90\uff0c\u55ae\u4f4d\u70ba\u6beb\u79d2 (millisecond)\n",(0,n.jsx)(i.img,{alt:"CPU Usage",src:l(9098).Z+"",width:"607",height:"378"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"\u5f9e\u4e0a\u5716\u53ef\u4ee5\u770b\u5230 Kaniko\u3001Buildah \u4f7f\u7528\u7684\u8cc7\u6e90\u4f4e\u65bc Docker\uff0c\u4e14\u7565\u52dd Buildkit\uff0c\u4ee5\u5e73\u5747\u4f7f\u7528\u91cf\u4f86\u6392\u5e8f\uff1a\nDocker>Dind>Buildkit>Kaniko>Buildah"}),"\n",(0,n.jsx)(i.h3,{id:"memory",children:"Memory"}),"\n",(0,n.jsx)(i.p,{children:"\u6bd4\u8f03\u6240\u4f7f\u7528\u7684 memory\uff0c\u4e26\u5206\u70ba build \u904e\u7a0b\u662f\u5426\u6709\u4f7f\u7528 cache\uff0c\u81f3\u65bc kaniko \u7684\u90e8\u5206\u56e0\u76ee\u524d\u5c1a\u672a\u5be6\u4f5c local layer caching\uff0c\u56e0\u6b64\u6b64\u8655\u50c5\u8a08\u7b97\u6c92\u6709 cache \u7684 memory \u4f7f\u7528\u90e8\u5206\u3002"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"\u5e73\u5747/\u6700\u5927/\u6700\u5c0f\u4f7f\u7528\u8cc7\u6e90\uff0c\u55ae\u4f4d\u70ba Mib"}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"\u6709 cache"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"memory Usage",src:l(7475).Z+"",width:"602",height:"374"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u6c92\u6709 cache"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"memory Usage",src:l(2541).Z+"",width:"606",height:"375"})}),"\n",(0,n.jsx)(i.p,{children:"\u5f9e\u4e0a\u9762\u5169\u5f35\u5716\u53ef\u4ee5\u770b\u5230\u5728\u6709 cache \u7684\u60c5\u6cc1\u4e0b\uff0cDind \u7684\u8a18\u61b6\u9ad4\u4f7f\u7528\u7387\u660e\u986f\u9ad8\u65bc\u5176\u4ed6 build tool\uff0c\u6392\u9664 Dind\uff0c\u4f7f\u7528\u7387\u5e73\u5747\u6700\u4f4e\u7684\u5247\u662f Buildah \u63a5\u8457\u662f Kaniko\u3002\u4f46\u5728\u6c92\u6709 cache \u7684\u60c5\u6cc1\u4e0b\uff0cBuildah \u537b\u9060\u9ad8\u65bc\u5176\u4ed6\u7684 build tool\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"build-time",children:"Build Time"}),"\n",(0,n.jsx)(i.p,{children:"Build time \u7684\u90e8\u5206\u540c\u6a23\u6bd4\u8f03\u6709\u7121\u4f7f\u7528 cache \u7684\u60c5\u6cc1\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u6709\u4f7f\u7528\u5230 build cache \u7684\u60c5\u6cc1\u4e0b\uff0cDocker/ BuildKit/ Kaniko \u90fd\u662f\u5728\u4e00\u79d2\u5167 build \u5b8c\uff0cBuildah \u5247\u662f\u5e73\u5747 6 \u79d2\uff0c\u56e0\u6b64\u6b64\u8655\u4e26\u7121\u88fd\u4f5c\u5716\u8868\uff0c\u50c5\u88fd\u4f5c\u6c92\u6709 cache \u7684\u60c5\u6cc1\u4e0b\u82b1\u8cbb\u7684\u6642\u9593\u505a\u6bd4\u8f03\u3002"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u55ae\u4f4d\u70ba\u79d2"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"build time",src:l(5357).Z+"",width:"605",height:"376"})}),"\n",(0,n.jsx)(i.h4,{id:"docker-cache-\u6a5f\u5236",children:"Docker cache \u6a5f\u5236"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"Dockerfile"})," \u4e2d\u7684\u6bcf\u689d\u6307\u4ee4\u53ef\u8996\u70ba\u4e00\u500b layer\uff0c\u5728 build \u7684\u904e\u7a0b\u4e2d\u6703\u6bd4\u8f03 Layer \u8207\u4e4b\u524d\u662f\u5426\u76f8\u540c\uff0c\u82e5\u76f8\u540c\u5728\u4f7f\u7528 ",(0,n.jsx)(i.code,{children:"docker build"})," \u6642\u6703\u986f\u793a ",(0,n.jsx)(i.code,{children:"Using cache"})," \u4ee5\u53ca\u4f7f\u7528\u4e86\u54ea\u500b cache\uff0ccahce \u5247\u6703\u5b58\u5728 ",(0,n.jsx)(i.code,{children:"/var/lib/docker/image/overlay2/imagedb/content/sha256"})," \u5e95\u4e0b\uff0c\u82e5\u662f\u4f7f\u7528 BuildKit\uff0c\u5247\u6703\u986f\u793a ",(0,n.jsx)(i.code,{children:"CACHED"}),"\uff0c\u4e26\u62ff\u4e4b\u524d\u7684 build cache \u4f86\u7528\uff0c\u53ef\u4ee5\u5927\u5e45\u6e1b\u5c11 build image \u7684\u6642\u9593\uff0c\u82e5\u662f ",(0,n.jsx)(i.code,{children:"Dockerfile"})," \u5167\u5bb9\u6709\u66f4\u6539\u6216\u662f\u4f7f\u7528\u5230\u7684\u6a94\u6848\u5167\u5bb9\u6709\u66f4\u6539\u5c31\u4e0d\u7528\u4f7f\u7528\u5230 cache\uff0c\u800c\u662f\u6703\u91cd\u65b0 build layer\uff0c\u4e14\u5f8c\u7e8c\u7684 layer \u4e5f\u6703\u9700\u8981\u91cd\u65b0 build\uff0c\u56e0\u6b64\u5728\u64b0\u5beb ",(0,n.jsx)(i.code,{children:"Dockerfile"})," \u6642\u53ef\u4ee5\u5c07\u6bd4\u8f03\u5e38\u66f4\u6539\u7684\u5167\u5bb9\u653e\u5728 ",(0,n.jsx)(i.code,{children:"Dockerfile"})," \u5c3e\u7aef\u3002"]}),"\n",(0,n.jsx)(i.h3,{id:"image-size",children:"Image Size"}),"\n",(0,n.jsx)(i.p,{children:"\u5728 image size \u7684\u90e8\u5206\u5247\u53ef\u4ee5\u767c\u73fe\u5dee\u5225\u4e26\u4e0d\u5927"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u55ae\u4f4d\u70ba MB"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"image size",src:l(2075).Z+"",width:"606",height:"379"})}),"\n",(0,n.jsx)(i.h2,{id:"\u5404\u9805\u5de5\u5177\u6bd4\u8f03",children:"\u5404\u9805\u5de5\u5177\u6bd4\u8f03"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{style:{textAlign:"left"}}),(0,n.jsx)(i.th,{children:"DinD"}),(0,n.jsx)(i.th,{children:"Kaniko"}),(0,n.jsx)(i.th,{style:{textAlign:"left"},children:"Buildah"}),(0,n.jsx)(i.th,{children:"BuildKit"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Run without privileged mode"}),(0,n.jsx)(i.td,{children:"X"}),(0,n.jsx)(i.td,{children:"O"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"O"}),(0,n.jsx)(i.td,{children:"O"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Local layer caching"}),(0,n.jsx)(i.td,{children:"X"}),(0,n.jsx)(i.td,{children:"X"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"O"}),(0,n.jsx)(i.td,{children:"O"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Remote layer caching"}),(0,n.jsx)(i.td,{children:"O"}),(0,n.jsx)(i.td,{children:"O"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"O"}),(0,n.jsx)(i.td,{children:"O"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"Need dockerfile"}),(0,n.jsx)(i.td,{children:"O"}),(0,n.jsx)(i.td,{children:"O"}),(0,n.jsx)(i.td,{style:{textAlign:"left"},children:"X"}),(0,n.jsx)(i.td,{children:"O"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"\u5c0f\u7d50",children:"\u5c0f\u7d50"}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u6b64\u6b21 lab \u4e2d\uff0c\u6bd4\u8f03\u4e86\u4e0d\u540c build tool \u7684\u8cc7\u6e90\u4f7f\u7528\u91cf\u4ee5\u53ca build \u51fa\u4f86\u7684 image size \u4ee5\u53ca\u82b1\u8cbb\u7684\u6642\u9593\uff0c\u53ef\u4ee5\u767c\u73fe\u6bcf\u500b build tool \u5404\u6709\u512a\u7f3a\uff0c\u4e5f\u6709\u4e00\u4e9b tool \u7684\u8cc7\u6e90\u4f7f\u7528\u91cf\u8207\u60f3\u50cf\u7684\u6709\u6240\u4e0d\u540c\uff0c\u4f46\u7121\u53ef\u5426\u8a8d\u7684\u662f\u9019\u4e9b\u5de5\u5177\u767c\u5c55\u5341\u5206\u8fc5\u901f\uff0c\u5728\u627e\u8cc7\u6599\u6642\u4e5f\u767c\u73fe\u6709\u4e9b\u539f\u672c\u88ab\u958b\u767c\u4eba\u54e1\u8a6c\u75c5\u7684\u7279\u6027\u5df2\u7d93\u88ab\u4fee\u6389\u4e86\uff0c\u5bb9\u5668\u5b89\u5168\u6027\u7684\u7591\u616e\u4e5f\u6709\u4e86\u5176\u4ed6\u89e3\u6cd5\uff0c\u56e0\u6b64\uff0c\u6700\u4f73\u89e3\u4ecd\u7136\u662f\u6839\u64da\u958b\u767c\u53ca\u7dad\u904b\u4eba\u54e1\u7684\u74b0\u5883\u53ca\u9700\u6c42\u53bb\u9078\u64c7\u9069\u5408\u7684\u5de5\u5177\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"reference",children:"Reference"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Docker \u5b98\u65b9\u6587\u4ef6\uff1a",(0,n.jsx)(i.a,{href:"https://docs.docker.com/build/buildkit/",children:"https://docs.docker.com/build/buildkit/"})]}),"\n",(0,n.jsxs)(i.li,{children:["\u95dc\u65bc Dind \u512a\u7f3a\u9ede\u7684\u5206\u6790\uff1a",(0,n.jsx)(i.a,{href:"https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/",children:"https://jpetazzo.github.io/2015/09/03/do-not-use-docker-in-docker-for-ci/"})]}),"\n",(0,n.jsxs)(i.li,{children:["\u5982\u4f55\u8490\u96c6 Docker \u4f7f\u7528\u7684 metric\uff1a",(0,n.jsx)(i.a,{href:"https://www.datadoghq.com/blog/how-to-collect-docker-metrics/",children:"https://www.datadoghq.com/blog/how-to-collect-docker-metrics/"})]}),"\n",(0,n.jsxs)(i.li,{children:["\u6e2c\u8a66\u671f\u9593\u7684\u539f\u59cb\u8cc7\u6599\uff1a",(0,n.jsx)(i.a,{href:"https://docs.google.com/spreadsheets/d/1UVv--XWu7zvdlo2D7EHwB3yapG9JX-Pb-5uQwzEIwrY/edit#gid=1245208475",children:"raw data"})]}),"\n"]})]})}function t(e={}){const{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5357:(e,i,l)=>{l.d(i,{Z:()=>n});const n=l.p+"assets/images/build_time-5fdeea3e2cc4eaacb3df6cabcadf0df4.png"},9098:(e,i,l)=>{l.d(i,{Z:()=>n});const n=l.p+"assets/images/cpu-fce1385b5c3cbe3b4272e3f4e0b9e158.png"},2075:(e,i,l)=>{l.d(i,{Z:()=>n});const n=l.p+"assets/images/image_size-e9a8361ea06b5b141c5fe70e67ac7b79.png"},2541:(e,i,l)=>{l.d(i,{Z:()=>n});const n=l.p+"assets/images/memory-573b00175a690d46ed729b1c268ecd9a.png"},7475:(e,i,l)=>{l.d(i,{Z:()=>n});const n=l.p+"assets/images/memory_cached-5ee35724d7c5d379ab5a4b583cfc27be.png"},1151:(e,i,l)=>{l.d(i,{Z:()=>r,a:()=>s});var n=l(7294);const d={},c=n.createContext(d);function s(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);