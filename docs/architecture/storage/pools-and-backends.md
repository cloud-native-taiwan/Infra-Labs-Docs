---
sidebar_position: 3
---

# Pool 與 OpenStack 整合

本頁記錄叢集中的每個 Ceph pool，並將各 pool 對映至其 OpenStack 使用者。Pool 設定資料來源為 `ceph osd pool ls detail`。

---

## Pool 清單

| Pool ID | Pool 名稱 | CRUSH 規則 | Size | Min Size | PG 數量 | 應用 | OpenStack 服務 |
|---------|-----------|-----------|------|----------|---------|------|----------------|
| 1 | .mgr | replicated_nvme | 3 | 2 | 1 | mgr | Ceph 內部（MGR 模組資料） |
| 2 | volumes | replicated_nvme | 3 | 2 | 128 | rbd | Cinder——NVMe volume 層級 |
| 3 | vms | replicated_nvme | 3 | 2 | 32 | rbd | Nova——ephemeral disks |
| 6 | backups | replicated_hdd | 3 | 2 | 32 | rbd | Cinder Backup |
| 7 | .rgw.root | replicated_nvme | 3 | 2 | 32 | rgw | RGW 內部（realm/zone 設定） |
| 8 | default.rgw.log | replicated_nvme | 3 | 2 | 32 | rgw | RGW 操作日誌 |
| 9 | default.rgw.control | replicated_nvme | 3 | 2 | 32 | rgw | RGW control/watch-notify |
| 10 | default.rgw.meta | replicated_nvme | 3 | 2 | 8 | rgw | RGW 使用者及 bucket metadata |
| 11 | default.rgw.buckets.index | replicated_nvme | 3 | 2 | 8 | rgw | RGW bucket listing index |
| 19 | default.rgw.buckets.non-ec | replicated_nvme | 3 | 2 | 32 | rgw | RGW non-EC multipart/versioned 資料 |
| 20 | volumes-sata-ssd | replicated_sata_ssd | 2 | 1 | 128 | rbd | Cinder——SATA SSD volume 層級 |
| 24 | testbench | replicated_nvme | 3 | 2 | 32 | rbd | 測試/效能評估 |
| 26 | images | replicated_hdd | 3 | 2 | 32 | rbd | Glance——作業系統映像 |
| 28 | default.rgw.buckets.data | replicated_hdd | 3 | 2 | 32 | rgw | RGW bucket 資料（S3/Swift 物件） |

**合計**：14 個 pool、561 個 placement group。

---

## 依層級分組的 Pool

### NVMe 層級（replicated_nvme、size=3）

| Pool | PG 數 | 用途 |
|------|-------|------|
| volumes | 128 | 主要 Cinder volume pool——最高效能 |
| vms | 32 | 運行中 instance 的 Nova ephemeral disks |
| testbench | 32 | 維運人員測試及效能評估 |
| .mgr | 1 | Ceph MGR 內部資料 |
| .rgw.root | 32 | RGW realm 與 zone 設定 |
| default.rgw.log | 32 | RGW 操作日誌 |
| default.rgw.control | 32 | RGW watch-notify |
| default.rgw.meta | 8 | RGW 使用者及 bucket metadata |
| default.rgw.buckets.index | 8 | RGW bucket listing index |
| default.rgw.buckets.non-ec | 32 | RGW non-EC multipart/versioned 資料 |

RGW metadata 和 index pool 放置於 NVMe 上，以確保低延遲的 bucket listing 和 metadata 操作，即使大量物件資料位於 HDD 上亦然。

### SATA SSD 層級（replicated_sata_ssd、size=2）

| Pool | PG 數 | 用途 |
|------|-------|------|
| volumes-sata-ssd | 128 | 適用於成本敏感工作負載的 Cinder volumes |

此 pool 設定為 **size=2、min_size=1**，意即僅維持兩份副本，且在僅剩單一存活副本時仍可繼續 I/O。這是刻意的權衡：以降低的耐久性換取有限 SATA SSD 資源的更多可用容量。

### HDD 層級（replicated_hdd、size=3）

| Pool | PG 數 | 用途 |
|------|-------|------|
| backups | 32 | Cinder Backup 目標 |
| images | 32 | Glance 映像儲存 |
| default.rgw.buckets.data | 32 | RGW S3/Swift 物件資料 |

HDD pool 儲存通常為一次寫入、偶爾讀取的資料（映像、備份），或受惠於以較低成本獲得大容量的資料（物件儲存）。

---

## OpenStack 整合細節

### Nova（運算）

- **驅動程式**：librbd
- **Pool**：`vms`
- **行為**：Instance 的 ephemeral disks 以 RBD image 形式建立於 `vms` pool 中。當 instance 刪除時，ephemeral disk 隨之移除。當映像來源同為 RBD 時，支援從 Glance 映像進行 copy-on-write cloning。
- **層級**：NVMe（運行中工作負載的低延遲 I/O）

### Cinder（區塊儲存）

Cinder 配置了多個 RBD 後端，每個對映至一個 Ceph pool 並以 volume type 呈現：

| Volume Type | Pool | CRUSH 規則 | Size | 層級 |
|------------|------|-----------|------|------|
| NVMe（預設） | volumes | replicated_nvme | 3 | NVMe |
| SATA SSD | volumes-sata-ssd | replicated_sata_ssd | 2 | SATA SSD |

使用者在建立 volume 時選擇適當的 volume type。預設 type 將資料放置於 NVMe 以獲得最高效能。

### Cinder Backup

- **驅動程式**：RBD
- **Pool**：`backups`
- **層級**：HDD（備份保留的大容量儲存）

### Glance（映像服務）

- **後端**：RBD store
- **Pool**：`images`
- **層級**：HDD
- **壓縮**：無（compression_mode=none）
- **行為**：映像以 RBD image 形式儲存。Nova 可在同一 Ceph 叢集中直接從 Glance 映像進行 copy-on-write clone，避免啟動 instance 時完整複製資料。

### RGW（物件儲存——S3/Swift）

- **Daemon**：3 個 RGW instance 分別運行於 openstack01、openstack02、openstack04（single zone）
- **S3 端點**：`s3.cloudnative.tw:6780`
- **Keystone 整合**：RGW 透過 Keystone 進行身分驗證，使 OpenStack 使用者可用既有憑證存取 S3 相容的物件儲存。
- **Data pool**：`default.rgw.buckets.data`，位於 HDD 層級
- **Index pool**：`default.rgw.buckets.index`，位於 NVMe 層級（用於快速 bucket listing）
- **Metadata pool**：`default.rgw.meta`，位於 NVMe 層級

---

## Placement Group 分佈

| CRUSH 規則 | PG 數量 | 百分比 |
|-----------|---------|--------|
| replicated_nvme | 337 | 60% |
| replicated_hdd | 96 | 17% |
| replicated_sata_ssd | 128 | 23% |
| **合計** | **561** | **100%** |

NVMe 層級承載最多的 placement group，因為它同時託管主要的 Cinder volume pool（128 PG）及所有 RGW metadata/index pool。儘管 PG 數量較少，HDD 層級因備份、映像及物件儲存工作負載的規模而持有最大比例的原始資料。

---

## 容量規劃注意事項

- `volumes` pool（NVMe）為效能最敏感的部分。其 128 個 PG 分佈於 3 台主機上的 8 個 NVMe OSD。應密切監控使用率——NVMe 原始容量僅 20.96 TiB（未計複製額外負擔）。
- `volumes-sata-ssd` pool 以降低的冗餘度運作（size=2）。若一台具有 SATA SSD OSD 的主機遺失，部分物件可能暫時僅存在單一副本。此 pool 不應用於無法重新建立的資料。
- `images` pool 將 Glance 映像儲存於 HDD 上。由於映像為一次寫入且 Nova 透過 RBD cloning 進行快取，HDD 延遲對首次從特定映像開機後的 instance 啟動時間影響甚微。
- HDD 上的 RGW bucket 資料適合預期的工作負載（歸檔、artifact 儲存）。若需要低延遲的 S3 存取，可另行設定以 NVMe 為後端的 data pool。
