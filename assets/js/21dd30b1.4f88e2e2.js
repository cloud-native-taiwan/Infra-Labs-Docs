"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[6700],{4009:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var a=l(5893),s=l(1151);const t={},i="Infra Labs OpenStack Deployment",o={id:"admin/openstack_operation",title:"Infra Labs OpenStack Deployment",description:"Infra Labs \u4f7f\u7528 Ansible Vault \u52a0\u5bc6\u542b\u6709\u6a5f\u654f\u8cc7\u8a0a\u7684\u6587\u4ef6\uff0c\u65b0\u9032\u7ba1\u7406\u54e1\u5982\u9700\u64cd\u4f5c\u8acb\u8a62\u554f Vault \u5bc6\u78bc\u3002",source:"@site/docs/admin/openstack_operation.md",sourceDirName:"admin",slug:"/admin/openstack_operation",permalink:"/docs/admin/openstack_operation",draft:!1,unlisted:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/admin/openstack_operation.md",tags:[],version:"current",frontMatter:{},sidebar:"architecture",previous:{title:"Image Build and Tagging",permalink:"/docs/admin/image_build"}},c={},r=[{value:"\u524d\u8a00",id:"introduction",level:2},{value:"\u5b89\u88dd Kolla-Ansible",id:"install",level:2},{value:"\u5347\u7d1a OpenStack \u7248\u672c",id:"upgrade",level:2},{value:"\u65b0\u589e/\u79fb\u9664\u7bc0\u9ede",id:"adding-and-removing-hosts",level:2},{value:"\u66f4\u65b0\u6191\u8b49",id:"update-certificate",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"infra-labs-openstack-deployment",children:"Infra Labs OpenStack Deployment"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Infra Labs \u4f7f\u7528 Ansible Vault \u52a0\u5bc6\u542b\u6709\u6a5f\u654f\u8cc7\u8a0a\u7684\u6587\u4ef6\uff0c\u65b0\u9032\u7ba1\u7406\u54e1\u5982\u9700\u64cd\u4f5c\u8acb\u8a62\u554f Vault \u5bc6\u78bc\u3002"})}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"\u524d\u8a00"}),"\n",(0,a.jsx)(n.p,{children:"\u672c\u7bc7\u5c07\u6703\u4ecb\u7d39\u5982\u4f55\u90e8\u7f72 Infra Labs \u63d0\u4f9b IaaS \u7684 OpenStack \u90e8\u5206\u3002"}),"\n",(0,a.jsx)(n.p,{children:"Infra Labs \u4f7f\u7528 OpenStack Kolla-Ansible \u9032\u884c OpenStack \u90e8\u7f72\uff0c\u4e26\u4e14\u5c0d\u5176\u4e2d\u7684\u7a0b\u5f0f\u78bc\u6709\u505a\u4e9b\u8a31\u7684\u6539\u52d5\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"\u5b89\u88dd Kolla-Ansible"}),"\n",(0,a.jsx)(n.p,{children:"Infra Labs \u76ee\u524d\u4f7f\u7528\u7684 Kolla-Ansible \u6709\u9032\u884c\u4e9b\u8a31\u66f4\u52d5\uff0c\u672c\u6bb5\u5c07\u4ecb\u7d39\u5982\u4f55\u5957\u7528\u66f4\u52d5\u4e26\u4e14\u5b89\u88dd Kolla-Ansible\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u66f4\u52d5\u8207 Kolla-Ansible \u8a2d\u5b9a\u6a94\u63a5\u653e\u7f6e\u65bc ",(0,a.jsx)(n.a,{href:"https://github.com/cloud-native-taiwan/infra-labs-kolla-ansible",children:"infra-labs-kolla-ansible repository"})]}),"\n",(0,a.jsx)(n.p,{children:"\u66f4\u52d5\u70ba git diff \u6a94\u6848\uff0c\u8981\u5957\u7528\u975e\u5e38\u7c21\u55ae\uff0c\u4ee5\u4e0b\u70ba\u4e0b\u8f09 Kolla-Ansible\u3001Infra Labs \u66f4\u52d5\uff0c\u4ee5\u53ca\u5957\u7528\u66f4\u52d5\u6240\u9700\u8981\u7684\u6307\u4ee4\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/openstack/kolla-ansible.git\ngit clone git@github.com:cloud-native-taiwan/infra-labs-kolla-ansible.git\n\ncd kolla-ansible\ngit apply ../infra-labs-kolla-ansible/changes.diff\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u63a5\u4e0b\u4f86\u9700\u8981\u5b89\u88dd Kolla-Ansible\uff0c\u53ef\u4ee5\u7a0d\u5fae\u53c3\u8003",(0,a.jsx)(n.a,{href:"https://docs.openstack.org/kolla-ansible/latest/user/quickstart.html",children:"\u5b98\u65b9\u6587\u4ef6"})," \u9032\u884c\u4e00\u4e9b\u524d\u7f6e\u4f5c\u696d\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u63a8\u85a6\u5c07\u5176\u5b89\u88dd\u81f3 Python virtualenv \u800c\u975e\u7cfb\u7d71\u74b0\u5883\uff0c\u4ee5\u4e0b\u6307\u4ee4\u9808\u65bc kolla-ansible \u8cc7\u6599\u593e\u4e0b\u57f7\u884c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install -r requirenments.txt\npip install 'ansible>=6,<8'\n\npip install .\n\nkolla-ansible install-deps\n"})}),"\n",(0,a.jsx)(n.h2,{id:"upgrade",children:"\u5347\u7d1a OpenStack \u7248\u672c"}),"\n",(0,a.jsxs)(n.p,{children:["\u5347\u7d1a OpenStack \u7248\u672c\u524d\uff0c\u8acb\u67e5\u770b ",(0,a.jsx)(n.a,{href:"https://docs.openstack.org/releasenotes/kolla-ansible/unreleased.html",children:"Kolla-Ansible Release Notes"}),"\u3002\u5728 Upgrade Notes \u7684\u90e8\u5206\u901a\u5e38\u6709\u5347\u7d1a\u76f8\u95dc\u7684\u91cd\u8981\u8cc7\u8a0a\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u63a5\u4e0b\u4f86\u6aa2\u67e5 Kolla-Ansible repo \u4e2d ",(0,a.jsx)(n.code,{children:"etc/kolla/globals.yml"})," \u5c0d\u6bd4\u4e0a\u4e00\u500b\u7248\u672c\u662f\u5426\u6709\u589e\u52a0\u91cd\u8981\u8a2d\u5b9a\uff0c\u5982\u6709\uff0c\u5c07\u65b0\u7684\u8a2d\u5b9a\u52a0\u5165\u81f3 ",(0,a.jsx)(n.code,{children:"/etc/kolla/globals.yml"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0b\u4e00\u6b65\u66f4\u65b0 ",(0,a.jsx)(n.code,{children:"/etc/kolla/globals.yml"})," \u4e2d\u7684\u7248\u672c\u8cc7\u8a0a\uff0c\u5c0d\u61c9\u81f3 Kolla image \u7684 tag"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'openstack_release: "<image_tag>"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6709\u6642\u66f4\u65b0\u7684\u6642\u5019\u6709\u65b0\u7684\u5bc6\u78bc\u7522\u751f\uff0c\u6b64\u6642\u9700\u8981\u7522\u751f\u5efa\u7acb\u7684\u5bc6\u78bc\uff0c\u4ee5\u4e0b\u70ba\u6307\u4ee4\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ansible-vault decrypt /etc/kolla/passwords.yml\n\ncp /etc/kolla/passwords.yml passwords.yml.old\ncp kolla-ansible/etc/kolla/passwords.yml passwords.yml.new\nkolla-genpwd -p passwords.yml.new\nkolla-mergepwd --old passwords.yml.old --new passwords.yml.new --final /etc/kolla/passwords.yml\n\nansible-vault encrypt /etc/kolla/passwords.yml\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u66f4\u65b0\u4e4b\u524d\u5efa\u8b70\u5148\u628a\u65b0\u7248\u672c\u7684 image \u5148 pull \u4e0b\u4f86\u4ee5\u6e1b\u5c11\u5be6\u969b\u8dd1 Ansible \u66f4\u65b0\u7684\u6642\u9593\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kolla-ansible -i /etc/kolla/multinode pull --ask-vault-pass -v\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u5f8c\u8dd1\u6aa2\u67e5\u8a2d\u5b9a\u548c\u66f4\u65b0\u7684\u6307\u4ee4\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kolla-ansible -i /etc/kolla/multinode prechecks --ask-vault-pass -v\nkolla-ansible -i /etc/kolla/multinode upgrade --ask-vault-pass -v\n"})}),"\n",(0,a.jsx)(n.h2,{id:"adding-and-removing-hosts",children:"\u65b0\u589e/\u79fb\u9664\u7bc0\u9ede"}),"\n",(0,a.jsxs)(n.p,{children:["\u65b0\u589e\u79fb\u9664\u7bc0\u9ede\u8acb\u53c3\u8003",(0,a.jsx)(n.a,{href:"https://docs.openstack.org/kolla-ansible/latest/user/adding-and-removing-hosts.html",children:"\u5b98\u65b9\u6587\u4ef6"})]}),"\n",(0,a.jsx)(n.h2,{id:"update-certificate",children:"\u66f4\u65b0\u6191\u8b49"}),"\n",(0,a.jsxs)(n.p,{children:["Infra Labs \u7684\u6191\u8b49\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})," \u751f\u6210\uff0c\u9810\u8a2d\u6709\u6548\u671f\u9593\u70ba\u4e09\u500b\u6708\uff0c\u56e0\u6b64\u6bcf\u4e09\u500b\u6708\u9700\u8981\u66f4\u65b0\u4e00\u6b21\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5b89\u88dd\u6240\u9700\u8981\u7684\u5143\u4ef6\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install certbot\npip install certbot-dns-cloudflare\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7522\u751f\u65b0\u6191\u8b49\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"certbot certonly --dns-cloudflare --dns-cloudflare-credentials /home/igene/.certbot/cloudflare.ini -d '*.cloudnative.tw' --preferred-challenges dns-0\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5c07\u7522\u751f\u7684\u65b0\u6191\u8b49\u66f4\u65b0\u81f3 ",(0,a.jsx)(n.code,{children:"haproxy"}),"\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo cat /etc/letsencrypt/live/cloudnative.tw/fullchain.pem /etc/letsencrypt/live/cloudnative.tw/privkey.pem > /etc/kolla/certificates/haproxy.pem\nkolla-ansible -i /etc/kolla/multinode reconfigure --ask-vault-pass -v -t haproxy\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>i});var a=l(7294);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);