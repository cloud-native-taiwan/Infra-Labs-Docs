# Infra Labs IaaS 架構

## 前言

Infra Labs 透過 OpenStack 和 Ceph 來提供 Infrastructure as a Service (IaaS) 服務。IaaS 允許使用者透過網路以程式化的方式佈建運算、網路和儲存資源，而無需購買、管理和維護實體伺服器和基礎設施。

OpenStack 是一個開源的雲端運算管理平台，提供了一套工具來管理運算、網路和儲存資源。Ceph 是一個開源的分散式儲存系統，可提供高可靠性和可擴展性的物件、區塊和檔案儲存。

本文將介紹 Infra Labs 的 OpenStack 和 Ceph 架構，包括使用的元件、硬體規格、網路拓撲和自訂設定。詳細設定檔公開於 [Infra-Labs-Config repository](https://github.com/cloud-native-taiwan/Infra-Labs-Config)。

## 架構概覽

上圖展示了 Infra Labs IaaS 的高層架構。使用者透過 Horizon 網頁介面或 OpenStack API 與服務互動。API 請求被發送到對應的 OpenStack 服務，這些服務協調運算節點 (透過 Nova)、網路資源 (透過 Neutron) 和儲存 (透過 Cinder、Glance、Swift)。

Ceph 提供了高可靠性的區塊儲存 (透過 RBD) 給 Nova、Cinder 和 Glance 使用，以及物件儲存 (透過 RGW) 給 Swift 使用。

MariaDB 儲存了 OpenStack 服務的狀態和元資料，而 RabbitMQ 則負責服務間的訊息傳遞。Keepalived 和 HAProxy 提供了高可用性的 API 端點。

## 硬體

Infra Labs 使用了 6 台伺服器來提供 IaaS 服務：

| Hostname      | CPU                                              | RAM                             | NIC                                                                 | Boot Disk                                                    | Ceph Disk                                                                        |
|---------------|--------------------------------------------------|--------------------------------|--------------------------------------------------------------------|------------------------------------------------------------|---------------------------------------------------------------------------------|
| openstack01-02 | AMD Epyc Rome 7282 * 2                         | 32GB DDR4 2933MHz ECC RDIMM * 16 | On-board dual port 1GbE, Mellanox ConnectX-4 Lx dual port 25GbE | Intel 730 240GB or Sandisk CloudSpeed Eco Gen II 480GB   | KIOXIA CD6 3.84TB, Intel DC S3500 1.6TB                                       |
| openstack04-05 | AMD Epyc Milan 7413                            | 32GB DDR4 3200MHz ECC RDIMM * 8  | On-board quad port 1GbE, Mellanox ConnectX-4 Lx dual port 25GbE | Seagate Enterprise Performance 15K 900GB * 2              | Samsung NGSFF PM983 3.84TB, Intel DC S3500 1.6TB (openstack05 only), Seagate X18 16TB |
| openstack06    | Xeon Silver 4110                               | 32GB DDR4 2666MHz ECC RDIMM * 6  | On-board dual port 1GbE, Mellanox ConnectX-4 Lx dual port 25GbE | Intel S3500 120GB * 2                                     | Seagate X18 16TB                                                                 |
| arm01-03       | Ampere Altra Q80-30 * 2                        | 32GB DDR4 3200MHz ECC RDIMM * 4  | On-board dual port 1GbE, Mellanox ConnectX-4 Lx dual port 25GbE | Samsung PM9A3 512GB                                       | N/A                                                                              |

## 軟體

### 主機角色分配

- OpenStack 控制節點：```openstack01,02,04``` 
- OpenStack 運算節點：```openstack01,02,04,05,arm01```
- Ceph 控制節點：```openstack01,02,04```
- Ceph OSD 節點：```openstack01,02,03,04```

### OpenStack 服務

Infra Labs 使用以下 OpenStack 服務：

部署工具：
- [Bifrost](https://docs.openstack.org/bifrost/latest/)：裸機部署
- [Kolla](https://docs.openstack.org/kolla/latest/)：容器化 OpenStack 服務
- [Kolla-Ansible](https://docs.openstack.org/kolla-ansible/latest/)：使用 Ansible 部署 Kolla
- [Diskimage-builder](https://docs.openstack.org/diskimage-builder/latest/)：建立客製化的 OS 映像檔

核心服務：
- [Nova](https://docs.openstack.org/nova/latest/)：運算（虛擬機、裸機）
- [Neutron](https://docs.openstack.org/neutron/latest/)：網路
- [Keystone](https://docs.openstack.org/keystone/latest/)：身份驗證
- [Glance](https://docs.openstack.org/glance/latest/)：映像檔
- [Cinder](https://docs.openstack.org/cinder/latest/)：區塊儲存
- [Swift](https://docs.openstack.org/swift/latest/)：物件儲存
- [Placement](https://docs.openstack.org/placement/latest/)：資源庫存和使用量追蹤

其他服務：
- [Heat](https://docs.openstack.org/heat/latest/)：協調多個 OpenStack 服務來部署應用程式
- [Designate](https://docs.openstack.org/designate/latest/)：DNS 即服務
- [Octavia](https://docs.openstack.org/octavia/latest/)：負載平衡即服務  
- [Horizon](https://docs.openstack.org/horizon/latest/)：Web UI

### Ceph 服務

Ceph 使用 [Cephadm](https://docs.ceph.com/en/latest/cephadm/index.html) 部署，後端網路使用 25GbE 網卡。

提供的服務：
- RBD：為 Nova、Cinder、Glance 提供區塊儲存
- RGW：為 Swift 提供物件儲存，並透過 Keystone 認證提供 S3 相容 API

目前 Crush Rule 包括：
- ```replicated_nvme```：使用 NVMe SSD
- ```replicated_sata_ssd```：使用 SATA SSD  
- ```replicated_hdd```：使用 HDD
