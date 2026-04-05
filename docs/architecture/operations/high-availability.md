---
sidebar_position: 1
---

# 高可用性分析

本文件評估 Infra Labs 基礎設施中每個關鍵元件的高可用性狀態，識別單點故障，並提供優先順序建議。

## 元件 HA 矩陣

| 元件 | 實例數 | Quorum | 影響（失去 1 節點） | 影響（失去 2 節點） |
|------|--------|--------|---------------------|---------------------|
| OpenStack API（HAProxy+Keepalived） | 3 active-active | 不適用 | degraded，仍可運作 | degraded，仍可運作 |
| MariaDB Galera + ProxySQL | 3 節點叢集 | 2/3 | 正常運作 | 叢集停止 |
| RabbitMQ | 3 節點叢集 | 2/3 | 正常運作 | 叢集停止 |
| Ceph MON | 3 個 monitor | 2/3 | 正常運作 | 唯讀/停止 |
| Ceph MGR | 2（1 active，1 standby） | 1/2 | 故障轉移至 standby | 無法管理 |
| Ceph OSD（NVMe，size=3） | 跨 3-4 主機 | 不適用 | degraded，復原中 | 資料有風險 |
| Ceph OSD（SATA SSD，size=2） | 跨 3 主機 | 不適用 | 剩餘 1 份副本（min_size=1） | 資料遺失 |
| Ceph OSD（HDD，size=3） | 跨 3 主機 | 不適用 | degraded，無備用主機 | 資料有風險 |
| OVN NB/SB DB | 3 控制節點 | 2/3 | 正常運作 | 網路控制中斷 |
| Arista 核心交換器 | 1 台設備 | 不適用 | 全面網路中斷 | 不適用 |
| NFX250 邊界 | 1 台設備 | 不適用 | NAT/VPN/管理閘道中斷 | 不適用 |
| EX3300 管理交換器 | 1 台設備 | 不適用 | 無法存取 IPMI | 不適用 |

## 單點故障（SPoF）

1. **Arista DCS-7060CX-32S** -- 最關鍵的單點故障。此單一核心交換器承載所有資料平面流量。其故障將導致所有租戶的服務完全中斷。
2. **NFX250（fw1）** -- 單一邊界路由器。其故障將移除 NAT 出站、WireGuard VPN 存取及管理網路預設閘道（192.168.0.254）。管理員將失去遠端存取，管理主機將失去網際網路連線。
3. **EX3300-48T** -- 單一管理交換器。其故障將移除 IPMI 存取，使遠端復原變得不可能。
4. **Ceph SATA SSD 層（volumes-sata-ssd pool）** -- size=2，min_size=1。失去一台主機後資料僅剩單一副本。任何額外的故障將導致資料遺失。

## 依主機的 failure domain 分析

### openstack01 故障

- 失去 1 個控制節點、1 個運算節點。
- Ceph MON quorum 仍完整（剩餘 2/3）。
- Ceph MGR 故障轉移至 standby（若 active 位於 01）。
- 南北向流量轉移至其他 OVN gateway。
- Ceph NVMe pool degraded（剩餘 2 台具有 NVMe 的主機）。

### openstack02 故障

- 與 openstack01 相同，另外失去 active Ceph MGR。
- openstack01 上的 standby 接管。

### openstack04 故障

- 控制節點/運算節點影響與 openstack01 相同。
- 若另一個控制節點已故障，失去最後一個控制節點可能導致 quorum 遺失。

### openstack05 故障

- 失去 1 個運算節點及 Ceph OSD。
- 無控制平面影響。
- SATA SSD pool 減少至 2 台主機。

### openstack06 故障

- 僅失去 Ceph HDD OSD（此主機無運算角色）。
- 對運算的影響極小。
- HDD pool 減少至 2 台主機。

## 已知風險

以下風險已在現有文件中被識別：

1. 核心設備冗餘不足（特別是 Arista 核心交換器）。
2. 有限的網路可觀測性。
3. 缺乏適當的監控與告警，導致 MTTR 偏長。

## 建議（依優先順序）

1. **新增冗餘核心交換器或 MLAG 配對** -- 消除最關鍵的單點故障。
2. **將 volumes-sata-ssd pool 改為 size=3 或新增第 4 台 SSD 主機** -- 保護 SATA SSD 層免於資料遺失。
3. **實作自動化告警**，涵蓋 Ceph 健康狀態、BGP session 及服務狀態。
4. **新增第 4 個 Ceph MON/MGR**，提升超越 2/3 quorum 最低要求的容錯能力。
5. **定期記錄並測試復原程序**，以降低 MTTR。
