# Infra Labs IaaS 架構

TODO:

- [ ] 加上一些比較特殊設定的介紹

## 前言

目前 Infra Labs 透過 OpenStack 和 Ceph 來提供 Infrastructure as a Service (IaaS) 服務。本篇會介紹使用的 OpenStack 專案以及 Ceph 的架構。

設定檔以及一些 Ansible Script 將公開於 [Infra-Labs-Config repository](https://github.com/cloud-native-taiwan/Infra-Labs-Config)。

## 硬體

Infra Labs 使用了 9 台伺服器用於提供 IaaS 服務，規格如下：

Hostname: `openstack01-03`

- CPU: Intel Xeon Gold 6230R \* 2
- RAM: 32GB DDR4 2933Mhz ECC RDIMM \* 12
- NIC: 
    - on board quad port 1G
    - Mellanox ConnectX-4 100GbE
- Disk
    -  Boot Disk: Intel 730 240GB \* 2 or Sandisk CloudSpeed Eco Gen II 480GB \* 2
    -  Ceph SSD: Samsung NGSFF PM983 3.84TB

Hostname: `openstack04-05`

- CPU: AMD Epyc 7413
- RAM: 32GB DDR4 3200Mhz ECC RDIMM \* 8
- NIC:
    - on board quad port 1G
    - Mellanox ConnectX-4 Lx Dual Port 25GbE
- Disk
    - Boot Disk: Seagate Enterprise Performance 15K 900GB \* 2
    - Ceph SSD: Samsung 980 1TB \* 4
    - Ceph HDD: Seagate X18 16TB

Hostname: `openstack06`

- CPU: Xeon Silver 4110
- RAM: 32GB DDR4 2666Mhz ECC RDIMM \* 6
- NIC:
    - on board dual port 1GbE
    - Mellanox ConnectX-4 Lx Dual Port 25GbE
- Disk
    - Boot Disk: Intel S3500 120GB \* 2
    - Ceph HDD: Seagate X18 16TB

Hostname: `arm01-03`

- CPU: Ampere eMAG 8180
- RAM: 32GB DDR4 2400Mhz ECC RDIMM \* 2(arm03 \* 4)
- NIC:
    - on board dual port 1GbE
    - Mellanox ConnectX-4 Lx Dual Port 25GbE
- Disk
    - Boot Disk: Intel S3500 120GB
    - Ceph HDD: Seagate X16 16TB

## 軟體

### 主機任務分配

- OpenStack Controller: `openstack01-03`
- OpenStack Compute: `openstack01-05`
- Ceph Controller: `openstack01-03`
- Ceph OSDs: All nodes
- Monitoring: `openstack06`

### Ansible

Ansible 被用來做一些 OS 安裝後的設定，如安裝一些必要軟體、網卡的設定等等。

### OpenStack

Infra Labs 所使用的 OpenStack 服務有：

用於部屬主機：

- [Bifrost](https://docs.openstack.org/bifrost/latest/)
- [Kolla](https://docs.openstack.org/kolla/latest/)
- [Kolla-Ansible](https://docs.openstack.org/kolla-ansible/latest/)
- [Diskimage-builder](https://docs.openstack.org/diskimage-builder/latest/)

用於提供服務：

- [Nova](https://docs.openstack.org/nova/latest/)
- [Neutron](https://docs.openstack.org/neutron/latest/)
- [Keystone](https://docs.openstack.org/keystone/latest/)
- [Glance](https://docs.openstack.org/glance/latest/)
- [Heat](https://docs.openstack.org/heat/latest/)
- [Cinder](https://docs.openstack.org/cinder/latest/)
- [Swift](https://docs.openstack.org/swift/latest/)
- [Designate](https://docs.openstack.org/designate/latest/)
- [Octavia](https://docs.openstack.org/octavia/latest/)
- [Placement](https://docs.openstack.org/placement/latest/)
- [Horizon](https://docs.openstack.org/horizon/latest/)

其他 OpenStack 所需元件：

- [MariaDB](https://mariadb.org/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Keepalived](https://github.com/acassen/keepalived)
- [HAProxy](http://www.haproxy.org/)

詳細設定檔皆公開至[此 Repo](https://github.com/cloud-native-taiwan/Infra-Labs-Config)。

### Ceph

Ceph 使用 [Cephadm](https://docs.ceph.com/en/latest/cephadm/index.html) 部屬，後端網路使用 100G/25G 網卡。

提供的服務有：

- RBD
    - 提供給 Nova, Cinder, Glance 作為儲存後端。
- RGW
    - 提供給 Swift 作為儲存後端，並且透過 Keystone 認證提供 S3 Compatible API。 

目前 Crush Rule 分為兩種：

- replicated_nvme
    - 使用 NVMe SSD 作為儲存媒介
- replicated_sata_ssd
    - 使用 SATA SSD 作為儲存媒介
- erasure profile main
    - 4+2 Erasure Coding 作為 S3 儲存池
