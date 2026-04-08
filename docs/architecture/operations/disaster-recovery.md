---
sidebar_position: 2
---

# 災難復原

本文件描述 Infra Labs 基礎設施的備份清單、復原情境及 RTO/RPO 考量。

## 備份清單

| 資產 | 保護方式 | 備註 |
|------|----------|------|
| 設定檔 | Git 儲存庫（Infra-Labs-Config、infra-labs-kolla-ansible） | 權威的事實來源 |
| 機密資料 | 設定檔儲存庫中的 Ansible Vault 加密 | Vault 密碼必須安全地儲存於儲存庫之外 |
| Ceph 資料 | 透過複寫保護（依 pool 不同，size 為 2 或 3） | 不能替代備份 |
| MariaDB | Galera SST 用於叢集復原 | <!-- TODO: Confirm backup schedule and method --> |
| OpenStack 映像檔（Glance） | 位於 Ceph「images」pool（HDD，size=3） | |
| Cinder 磁碟區 | 位於 Ceph「volumes」pool（NVMe，size=3）或「volumes-sata-ssd」（size=2） | SATA SSD 層保護不足 |
| Cinder 備份 | 位於 Ceph「backups」pool（HDD，size=3） | |

## 復原情境

### 1. 單一運算節點故障

- Nova 將 VM 疏散至剩餘的 hypervisor。
- Ceph 在存活的主機間重新平衡 OSD。
- 復原：更換硬體、重新安裝作業系統、將節點重新加入叢集。

### 2. 單一控制節點故障

- Galera、RabbitMQ、Ceph MON 和 OVN 維持 quorum。
- 服務在 degraded 模式下持續運作。
- 復原：更換硬體並透過 kolla-ansible 重建控制節點。

### 3. 兩個控制節點故障

- Galera、RabbitMQ、Ceph MON 和 OVN 失去 quorum。
- 服務無法接受寫入；讀取可能短暫維持。
- 復原：需要手動 Galera bootstrap、RabbitMQ 叢集重設及 Ceph MON 復原。預期會有顯著的停機時間。

### 4. Arista 核心交換器故障

- 全面網路中斷。所有資料平面流量停止。
- 復原：更換硬體並還原設定。交換器設定應進行版本控制。

### 5. 整個站點毀損

- 實體站點完全損毀。
- 復原：使用 Git 儲存庫從零開始重新部署。運算和網路服務可以重建；資料遺失取決於 Ceph pool 和 MariaDB 是否存在異地備份。

## RTO/RPO 分析

<!-- TODO: Define target RTO/RPO based on community SLA expectations -->

以下因素影響復原時間：

- **硬體採購**：前置時間最長。現場備用硬體可顯著降低 RTO。
- **自動化部署**：Kolla-ansible 能夠相對快速地重新安裝服務。
- **Ceph 重新平衡**：取決於資料量和叢集健康狀態。大型 pool 可能需要數小時才能完成重新平衡。
- **手動介入**：兩個控制節點故障和整個站點毀損需要大量的手動作業。

在正式 RTO/RPO 目標定義之前，實際的復原預期如下：

| 情境 | 預估 RTO | 資料遺失風險 |
|------|----------|-------------|
| 單一運算節點 | 數小時（有備用硬體） | 無（Ceph 複寫） |
| 單一控制節點 | 數小時 | 無 |
| 兩個控制節點 | 數小時至一天 | 可能（若有進行中的寫入） |
| 核心交換器 | 數小時（有備用硬體） | 無（資料完好存於主機上） |
| 整個站點毀損 | 數天至數週 | 高（除非存在異地備份） |
