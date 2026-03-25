---
sidebar_position: 1
---

# 硬體清單

本頁列出 Infra Labs 機群中每台伺服器的硬體規格。資料來源包括 Kolla-Ansible inventory、SSH 硬體探測結果及 Ceph OSD tree。

---

## 伺服器規格

### openstack01

| 元件 | 規格 |
|------|------|
| CPU | AMD EPYC 7282 x2（16C/32T each） |
| 核心 / 執行緒 | 32C / 64T 合計 |
| 記憶體 | 512 GB DDR4 ECC |
| 開機磁碟 | Intel 730 240 GB SSD |
| 資料網卡 | Mellanox ConnectX-4 Lx 2x25GbE（bond0、LACP） |
| 管理網卡 | 2x1GbE 內建 |
| Ceph 磁碟 | KIOXIA CD6 3.84 TB NVMe x2、Intel S3500 1.6 TB SATA SSD |

Ceph OSD 權重：osd.3（nvme、3.49 TiB）、osd.6（nvme、3.49 TiB）、osd.2（sata_ssd、1.46 TiB）。

---

### openstack02

| 元件 | 規格 |
|------|------|
| CPU | AMD EPYC 7282 x2（16C/32T each） |
| 核心 / 執行緒 | 32C / 64T 合計 |
| 記憶體 | 512 GB DDR4 ECC |
| 開機磁碟 | SanDisk CloudSpeed 480 GB SSD |
| 資料網卡 | Mellanox ConnectX-4 Lx 2x25GbE（bond0、LACP） |
| 管理網卡 | 2x1GbE 內建 |
| Ceph 磁碟 | KIOXIA CD6 1.9 TB NVMe x4、Intel S3500 1.6 TB SATA SSD |

Ceph OSD 權重：osd.0（nvme、1.75 TiB）、osd.1（nvme、1.75 TiB）、osd.5（nvme、1.75 TiB）、osd.10（nvme、1.75 TiB）、osd.17（sata_ssd、1.46 TiB）。

---

### openstack04

| 元件 | 規格 |
|------|------|
| CPU | AMD EPYC 7413（24C/48T） |
| 核心 / 執行緒 | 24C / 48T |
| 記憶體 | 256 GB DDR4 ECC |
| 開機磁碟 | Seagate 15K 900 GB SAS x2 |
| 資料網卡 | Mellanox ConnectX-4 Lx 2x25GbE（bond0、LACP） |
| 管理網卡 | 4x1GbE 內建 |
| Ceph 磁碟 | Samsung PM983 3.84 TB NVMe x2、Seagate X18 16 TB HDD x2 |

Ceph OSD 權重：osd.9（nvme、3.49 TiB）、osd.13（nvme、3.49 TiB）、osd.8（hdd、14.55 TiB）、osd.37（hdd、14.55 TiB）。

---

### openstack05

| 元件 | 規格 |
|------|------|
| CPU | AMD EPYC 7413（24C/48T） |
| 核心 / 執行緒 | 24C / 48T |
| 記憶體 | 256 GB DDR4 ECC |
| 開機磁碟 | Seagate 15K 900 GB SAS x2 |
| 資料網卡 | Mellanox ConnectX-4 Lx 2x25GbE（bond0、LACP） |
| 管理網卡 | 4x1GbE 內建 |
| Ceph 磁碟 | Samsung PM983 3.84 TB NVMe（未納入 Ceph）、Intel S3500 1.6 TB SATA SSD、Seagate X18 16 TB HDD x2 |

Ceph OSD 權重：osd.7（hdd、14.55 TiB）、osd.11（hdd、14.55 TiB）、osd.4（sata_ssd、1.46 TiB）。注意：Samsung PM983 NVMe 已實體安裝但未作為 Ceph OSD 使用。

---

### openstack06

| 元件 | 規格 |
|------|------|
| CPU | Intel Xeon Silver 4110（8C/16T） |
| 核心 / 執行緒 | 8C / 16T |
| 記憶體 | 192 GB DDR4 ECC |
| 開機磁碟 | Intel S3500 120 GB SSD x2 |
| 資料網卡 | Mellanox ConnectX-4 Lx 2x25GbE（bond0、LACP） |
| 管理網卡 | 2x1GbE 內建 |
| Ceph 磁碟 | Seagate X18 16 TB HDD x2 |

Ceph OSD 權重：osd.12（hdd、14.55 TiB）、osd.34（hdd、14.55 TiB）。此節點僅運行 Ceph OSD——不是運算主機或控制節點。

---

## 彙總摘要

### CPU 容量

| 架構 | 節點數 | 核心總數 | 執行緒總數 |
|------|--------|----------|------------|
| x86_64 | 5 | 120 | 240 |

### 記憶體容量

| 主機名稱 | 記憶體 |
|----------|--------|
| openstack01 | 512 GB |
| openstack02 | 512 GB |
| openstack04 | 256 GB |
| openstack05 | 256 GB |
| openstack06 | 192 GB |
| **合計** | **1,728 GB** |

### 儲存容量（僅 Ceph OSD）

| 裝置類別 | 主機 | OSD 數量 | 原始容量（TiB） |
|----------|------|----------|----------------|
| NVMe | openstack01、02、04 | 8 | 20.96 |
| SATA SSD | openstack01、02、05 | 3 | 4.38 |
| HDD | openstack04、05、06 | 6 | 87.30 |
| **合計** | **5 台主機** | **17** | **112.64** |

### 網卡摘要

每台伺服器透過 2x25GbE（LACP bond）連接至 Arista DCS-7060CX-32S 核心交換器，每台主機提供 50 Gbps 的聚合資料平面頻寬。各主機的 bond slave 介面名稱不同，透過自訂部署腳本設定。管理網卡（1GbE 內建）連接至 Juniper EX3300-48T 及 Juniper NFX250，用於 IPMI 及帶外存取。
