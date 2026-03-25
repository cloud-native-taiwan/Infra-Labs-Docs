---
sidebar_position: 4
sidebar_label: "運算架構"
---

# 運算架構

Infra Labs 在五台實體伺服器上運行 OpenStack Nova，全部部署於單一機櫃中，透過 25GbE LACP 上行鏈路連接至 Arista 核心交換器。

## 機群摘要

| 指標 | 數值 |
|------|------|
| 伺服器總數 | 5（全部為 x86_64） |
| CPU 核心總數 | 120 實體核心 |
| 記憶體總量 | 1,728 GB |
| 啟用的 Hypervisor | 4（openstack01、02、04、05） |
| 控制節點 | 3（openstack01、02、04） |
| 純儲存節點 | 1（openstack06） |

此機群刻意採用異質組態。兩個世代的 AMD EPYC 處理器提供主要的運算能力，而一台較舊的 Xeon Silver 伺服器貢獻儲存容量。並非所有節點都承擔每種角色——詳細的配置矩陣請參閱節點角色頁面。

## 設計原則

- **運算與儲存融合**——大多數伺服器同時運行 Nova compute 和 Ceph OSD daemon，最大化硬體使用率。
- **三節點控制平面**——OpenStack 控制節點分佈於 openstack01、openstack02 和 openstack04，為 MariaDB Galera、RabbitMQ 及 OVN 資料庫提供 quorum。
- **25GbE 資料平面**——每個節點透過 2x25GbE LACP bond 連接，確保 VM 流量和 Ceph 複製皆有充足頻寬。

## 子頁面

- [硬體清單](hardware-inventory.md)——各節點的 CPU、RAM、磁碟及 NIC 規格
- [節點角色與服務配置](node-roles.md)——各主機上運行的 OpenStack 和 Ceph 服務
- [多架構支援](multi-arch.md)——ARM 運算節點狀態
