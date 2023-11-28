# Image Build and Tagging

## 前言  {#introduction}

本篇將會介紹 Infra Labs OpenStack Container Image building 跟 tagging 的方式。

Infra Labs 使用 OpenStack Kolla 進行 Image Building，並且由於需要同時支援 ARM64 和 AMD64 架構的部署，必須進行 Container Registry Manifest 的調整。

## Building

Infra Labs 目前使用的 Kolla Image 並未進行任何修改，可以按照[官方文件](https://docs.openstack.org/kolla/latest/admin/image-building.html)方式進行 Kolla 的安裝。

目前使用 Ubuntu 作為 base image 進行編譯。

編譯的指令如下：

```bash
kolla-build -b ubuntu --registry 192.168.0.1:80 --push --tag 2023.1-amd64
kolla-build -b ubuntu --registry 192.168.0.1:80 --push --tag 2023.1-arm64
```

根據不同的架構上不同的 Image Tag

## Manifest Tagging

為了讓 ARM64/AMD64 對應架構能夠透過統一的 tag pull image，我們需要針對 Manifest 做一些調整。

將附錄的 Image 列表存成 `kolla_list` 檔案


接下來登入使用的 Harbor Registry，已經登入過後可以跳過此步驟：

```bash
docker login 192.168.0.1:80
```

將舊的 manifest 刪除

```bash
for i in $(cat kolla_list); do sudo docker manifest rm 192.168.0.1:80/kolla/$i:2023.1; done
```

建立新的 manifest 然後 push 至 Harbor

```bash
for i in $(cat kolla_list); do sudo docker manifest create --insecure 192.168.0.1:5000/kolla/$i:2023.1 --amend 192.168.0.1:5000/kolla/$i:2023.1-arm64 --amend 192.168.0.1:5000/kolla/$i:2023.1-amd64; done
for i in $(cat kolla_list); do sudo docker manifest push --insecure 192.168.0.1:5000/kolla/$i:2023.1; done`
```

成功後，docker pull 將會根據 host 的 CPU 架構 pull 對應架構的 image。

## 附錄 {#appendix}

`kolla_list` 內容如下：

```
aodh-api
aodh-base
aodh-evaluator
aodh-expirer
aodh-listener
aodh-notifier
barbican-api
barbican-base
barbican-keystone-listener
barbican-worker
base
bifrost-base
bifrost-deploy
blazar-api
blazar-base
blazar-manager
ceilometer-base
ceilometer-central
ceilometer-compute
ceilometer-ipmi
ceilometer-notification
cinder-api
cinder-backup
cinder-base
cinder-scheduler
cinder-volume
cloudkitty-api
cloudkitty-base
cloudkitty-processor
collectd
cron
cyborg-agent
cyborg-api
cyborg-base
cyborg-conductor
designate-api
designate-backend-bind9
designate-base
designate-central
designate-mdns
designate-producer
designate-sink
designate-worker
dnsmasq
etcd
fluentd
freezer-api
freezer-base
freezer-scheduler
glance-api
glance-base
gnocchi-api
gnocchi-base
gnocchi-metricd
gnocchi-statsd
grafana
hacluster-base
hacluster-corosync
hacluster-pacemaker
hacluster-pacemaker-remote
hacluster-pcs
haproxy
haproxy-ssh
heat-api
heat-api-cfn
heat-base
heat-engine
horizon
influxdb
ironic-api
ironic-base
ironic-conductor
ironic-inspector
ironic-neutron-agent
ironic-prometheus-exporter
ironic-pxe
iscsid
keepalived
keystone
keystone-base
keystone-fernet
keystone-ssh
kolla-toolbox
kuryr-base
kuryr-libnetwork
letsencrypt
magnum-api
magnum-base
magnum-conductor
manila-api
manila-base
manila-data
manila-scheduler
manila-share
mariadb-base
mariadb-clustercheck
mariadb-server
masakari-api
masakari-base
masakari-engine
masakari-monitors
memcached
mistral-api
mistral-base
mistral-engine
mistral-event-engine
mistral-executor
multipathd
murano-api
murano-base
murano-engine
neutron-base
neutron-bgp-dragent
neutron-dhcp-agent
neutron-infoblox-ipam-agent
neutron-l3-agent
neutron-linuxbridge-agent
neutron-metadata-agent
neutron-metering-agent
neutron-mlnx-agent
neutron-openvswitch-agent
neutron-ovn-agent
neutron-server
neutron-sriov-agent
nova-api
nova-base
nova-compute
nova-compute-ironic
nova-conductor
nova-libvirt
nova-novncproxy
nova-scheduler
nova-serialproxy
nova-spicehtml5proxy
nova-ssh
octavia-api
octavia-base
octavia-driver-agent
octavia-health-manager
octavia-housekeeping
octavia-worker
opensearch
opensearch-dashboards
openstack-base
openvswitch-base
openvswitch-db-server
openvswitch-vswitchd
ovn-base
ovn-controller
ovn-nb-db-server
ovn-northd
ovn-sb-db-server
ovsdpdk
ovsdpdk-db
ovsdpdk-vswitchd
placement-api
placement-base
prometheus-alertmanager
prometheus-base
prometheus-blackbox-exporter
prometheus-cadvisor
prometheus-elasticsearch-exporter
prometheus-haproxy-exporter
prometheus-libvirt-exporter
prometheus-memcached-exporter
prometheus-msteams
prometheus-mtail
prometheus-mysqld-exporter
prometheus-node-exporter
prometheus-openstack-exporter
prometheus-ovn-exporter
prometheus-v2-server
proxysql
rabbitmq
redis
redis-base
redis-sentinel
sahara-api
sahara-base
sahara-engine
senlin-api
senlin-base
senlin-conductor
senlin-engine
senlin-health-manager
skyline-apiserver
skyline-base
skyline-console
solum-api
solum-base
solum-conductor
solum-deployer
solum-worker
swift-account
swift-base
swift-container
swift-object
swift-object-expirer
swift-proxy-server
swift-rsyncd
tacker-base
tacker-conductor
tacker-server
telegraf
tgtd
trove-api
trove-base
trove-conductor
trove-guestagent
trove-taskmanager
venus-api
venus-base
venus-manager
vitrage-api
vitrage-base
vitrage-graph
vitrage-ml
vitrage-notifier
vitrage-persistor
watcher-api
watcher-applier
watcher-base
watcher-engine
zun-api
zun-base
zun-cni-daemon
zun-compute
zun-wsprox
```
