# Infra Labs IaaS 架構

TODO:

- [ ] 加上一些比較特殊設定的介紹

## 前言

目前 Infra Labs 透過 OpenStack 和 Ceph 來提供 Infrastructure as a Service (IaaS) 服務。本篇會介紹使用的 OpenStack 專案以及 Ceph 的架構。

## 硬體

Infra Labs 使用了 3 台伺服器用於提供 IaaS 服務，規格如下：

- CPU: 2\*Intel Xeon Gold 6230R
- RAM: 8\*32GB DDR4 3200Mhz ECC RDIMM
- NIC: 
    - on board 4*1G
    - Mellanox ConnectX-4 Lx 25G*2
- Disk
    -  Boot Disk: 2\*Intel 730 240GB or 2\* Sandisk CloudSpeed Eco Gen II 480GB
    -  Ceph SSD: Samsung NGSFF PM983 3.84TB
    -  Ceph HDD: Toshiba MQ04AB 5400rpm 4TB

此三台主機上運行了所有 OpenStack 和 Ceph 服務。

## 軟體

### Ansible

Ansible 被用來做一些 OS 安裝後的設定，如安裝一些必要軟體、網卡的設定等等。

後續此 Ansible Script 將會公開至 Cloud Native Taiwan 內的 Repo。

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

詳細設定檔在皆會公開至此 Repo。

### Ceph

Ceph 使用 [Cephadm](https://docs.ceph.com/en/latest/cephadm/index.html) 部屬，後端網路使用 25G 網卡做 bonding。

提供的服務有：

- RBD
    - 提供給 Nova, Cinder, Glance 作為儲存後端。
- RGW
    - 提供給 Swift 作為儲存後端，並且透過 Keystone 認證提供 S3 Compatible API。 

目前 Crush Rule 分為兩種：

- replicated_nvme
    - 使用 NVMe SSD 作為儲存媒介
- replicated_hdd
    - 使用 HDD 作為儲存媒介
