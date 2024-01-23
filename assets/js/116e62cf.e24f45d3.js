"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[9220],{1793:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=a(5893),i=a(1151);const t={},s="Image Build and Tagging",o={id:"admin/image_build",title:"Image Build and Tagging",description:"\u524d\u8a00",source:"@site/docs/admin/image_build.md",sourceDirName:"admin",slug:"/admin/image_build",permalink:"/docs/admin/image_build",draft:!1,unlisted:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/admin/image_build.md",tags:[],version:"current",frontMatter:{},sidebar:"architecture",previous:{title:"Admin \u5c08\u5340",permalink:"/docs/category/admin-\u5c08\u5340"},next:{title:"Infra Labs OpenStack Deployment",permalink:"/docs/admin/openstack_operation"}},c={},l=[{value:"\u524d\u8a00",id:"introduction",level:2},{value:"Building",id:"building",level:2},{value:"Manifest Tagging",id:"manifest-tagging",level:2},{value:"\u9644\u9304",id:"appendix",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"image-build-and-tagging",children:"Image Build and Tagging"}),"\n",(0,r.jsx)(e.h2,{id:"introduction",children:"\u524d\u8a00"}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u7bc7\u5c07\u6703\u4ecb\u7d39 Infra Labs OpenStack Container Image building \u8ddf tagging \u7684\u65b9\u5f0f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"Infra Labs \u4f7f\u7528 OpenStack Kolla \u9032\u884c Image Building\uff0c\u4e26\u4e14\u7531\u65bc\u9700\u8981\u540c\u6642\u652f\u63f4 ARM64 \u548c AMD64 \u67b6\u69cb\u7684\u90e8\u7f72\uff0c\u5fc5\u9808\u9032\u884c Container Registry Manifest \u7684\u8abf\u6574\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"building",children:"Building"}),"\n",(0,r.jsxs)(e.p,{children:["Infra Labs \u76ee\u524d\u4f7f\u7528\u7684 Kolla Image \u4e26\u672a\u9032\u884c\u4efb\u4f55\u4fee\u6539\uff0c\u53ef\u4ee5\u6309\u7167",(0,r.jsx)(e.a,{href:"https://docs.openstack.org/kolla/latest/admin/image-building.html",children:"\u5b98\u65b9\u6587\u4ef6"}),"\u65b9\u5f0f\u9032\u884c Kolla \u7684\u5b89\u88dd\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u76ee\u524d\u4f7f\u7528 Ubuntu \u4f5c\u70ba base image \u9032\u884c\u7de8\u8b6f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7de8\u8b6f\u7684\u6307\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"kolla-build -b ubuntu --registry registry.cloudnative.tw --push --tag <version>-amd64\nkolla-build -b ubuntu --registry registry.cloudnative.tw --push --tag <version>-arm64\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6839\u64da\u4e0d\u540c\u7684\u67b6\u69cb\u4e0a\u4e0d\u540c\u7684 Image Tag"}),"\n",(0,r.jsx)(e.h2,{id:"manifest-tagging",children:"Manifest Tagging"}),"\n",(0,r.jsx)(e.p,{children:"\u70ba\u4e86\u8b93 ARM64/AMD64 \u5c0d\u61c9\u67b6\u69cb\u80fd\u5920\u900f\u904e\u7d71\u4e00\u7684 tag pull image\uff0c\u6211\u5011\u9700\u8981\u91dd\u5c0d Manifest \u505a\u4e00\u4e9b\u8abf\u6574\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5c07\u9644\u9304\u7684 Image \u5217\u8868\u5b58\u6210 ",(0,r.jsx)(e.code,{children:"kolla_list"})," \u6a94\u6848"]}),"\n",(0,r.jsx)(e.p,{children:"\u63a5\u4e0b\u4f86\u767b\u5165\u4f7f\u7528\u7684 Harbor Registry\uff0c\u5df2\u7d93\u767b\u5165\u904e\u5f8c\u53ef\u4ee5\u8df3\u904e\u6b64\u6b65\u9a5f\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"docker login registry.cloudnative.tw\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5c07\u820a\u7684 manifest \u522a\u9664"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"for i in $(cat kolla_list); do sudo docker manifest rm registry.cloudnative.tw/kolla/$i:<version>; done\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5efa\u7acb\u65b0\u7684 manifest \u7136\u5f8c push \u81f3 Harbor"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"for i in $(cat kolla_list); do sudo docker manifest create --insecure registry.cloudnative.tw/kolla/$i:<version> --amend registry.cloudnative.tw/kolla/$i:<version>-arm64 --amend registry.cloudnative.tw/kolla/$i:<version>-amd64; done\nfor i in $(cat kolla_list); do sudo docker manifest push --insecure registry.cloudnative.tw/kolla/$i:<version>; done`\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6210\u529f\u5f8c\uff0cdocker pull \u5c07\u6703\u6839\u64da host \u7684 CPU \u67b6\u69cb pull \u5c0d\u61c9\u67b6\u69cb\u7684 image\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"appendix",children:"\u9644\u9304"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"kolla_list"})," \u5167\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"aodh-api\naodh-base\naodh-evaluator\naodh-expirer\naodh-listener\naodh-notifier\nbarbican-api\nbarbican-base\nbarbican-keystone-listener\nbarbican-worker\nbase\nbifrost-base\nbifrost-deploy\nblazar-api\nblazar-base\nblazar-manager\nceilometer-base\nceilometer-central\nceilometer-compute\nceilometer-ipmi\nceilometer-notification\ncinder-api\ncinder-backup\ncinder-base\ncinder-scheduler\ncinder-volume\ncloudkitty-api\ncloudkitty-base\ncloudkitty-processor\ncollectd\ncron\ncyborg-agent\ncyborg-api\ncyborg-base\ncyborg-conductor\ndesignate-api\ndesignate-backend-bind9\ndesignate-base\ndesignate-central\ndesignate-mdns\ndesignate-producer\ndesignate-sink\ndesignate-worker\ndnsmasq\netcd\nfluentd\nfreezer-api\nfreezer-base\nfreezer-scheduler\nglance-api\nglance-base\ngnocchi-api\ngnocchi-base\ngnocchi-metricd\ngnocchi-statsd\ngrafana\nhacluster-base\nhacluster-corosync\nhacluster-pacemaker\nhacluster-pacemaker-remote\nhacluster-pcs\nhaproxy\nhaproxy-ssh\nheat-api\nheat-api-cfn\nheat-base\nheat-engine\nhorizon\ninfluxdb\nironic-api\nironic-base\nironic-conductor\nironic-inspector\nironic-neutron-agent\nironic-prometheus-exporter\nironic-pxe\niscsid\nkeepalived\nkeystone\nkeystone-base\nkeystone-fernet\nkeystone-ssh\nkolla-toolbox\nkuryr-base\nkuryr-libnetwork\nletsencrypt\nmagnum-api\nmagnum-base\nmagnum-conductor\nmanila-api\nmanila-base\nmanila-data\nmanila-scheduler\nmanila-share\nmariadb-base\nmariadb-clustercheck\nmariadb-server\nmasakari-api\nmasakari-base\nmasakari-engine\nmasakari-monitors\nmemcached\nmistral-api\nmistral-base\nmistral-engine\nmistral-event-engine\nmistral-executor\nmultipathd\nmurano-api\nmurano-base\nmurano-engine\nneutron-base\nneutron-bgp-dragent\nneutron-dhcp-agent\nneutron-infoblox-ipam-agent\nneutron-l3-agent\nneutron-linuxbridge-agent\nneutron-metadata-agent\nneutron-metering-agent\nneutron-mlnx-agent\nneutron-openvswitch-agent\nneutron-ovn-agent\nneutron-server\nneutron-sriov-agent\nnova-api\nnova-base\nnova-compute\nnova-compute-ironic\nnova-conductor\nnova-libvirt\nnova-novncproxy\nnova-scheduler\nnova-serialproxy\nnova-spicehtml5proxy\nnova-ssh\noctavia-api\noctavia-base\noctavia-driver-agent\noctavia-health-manager\noctavia-housekeeping\noctavia-worker\nopensearch\nopensearch-dashboards\nopenstack-base\nopenvswitch-base\nopenvswitch-db-server\nopenvswitch-vswitchd\novn-base\novn-controller\novn-nb-db-server\novn-northd\novn-sb-db-server\novsdpdk\novsdpdk-db\novsdpdk-vswitchd\nplacement-api\nplacement-base\nprometheus-alertmanager\nprometheus-base\nprometheus-blackbox-exporter\nprometheus-cadvisor\nprometheus-elasticsearch-exporter\nprometheus-haproxy-exporter\nprometheus-libvirt-exporter\nprometheus-memcached-exporter\nprometheus-msteams\nprometheus-mtail\nprometheus-mysqld-exporter\nprometheus-node-exporter\nprometheus-openstack-exporter\nprometheus-ovn-exporter\nprometheus-v2-server\nproxysql\nrabbitmq\nredis\nredis-base\nredis-sentinel\nsahara-api\nsahara-base\nsahara-engine\nsenlin-api\nsenlin-base\nsenlin-conductor\nsenlin-engine\nsenlin-health-manager\nskyline-apiserver\nskyline-base\nskyline-console\nsolum-api\nsolum-base\nsolum-conductor\nsolum-deployer\nsolum-worker\nswift-account\nswift-base\nswift-container\nswift-object\nswift-object-expirer\nswift-proxy-server\nswift-rsyncd\ntacker-base\ntacker-conductor\ntacker-server\ntelegraf\ntgtd\ntrove-api\ntrove-base\ntrove-conductor\ntrove-guestagent\ntrove-taskmanager\nvenus-api\nvenus-base\nvenus-manager\nvitrage-api\nvitrage-base\nvitrage-graph\nvitrage-ml\nvitrage-notifier\nvitrage-persistor\nwatcher-api\nwatcher-applier\nwatcher-base\nwatcher-engine\nzun-api\nzun-base\nzun-cni-daemon\nzun-compute\nzun-wsprox\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>o,a:()=>s});var r=a(7294);const i={},t=r.createContext(i);function s(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);