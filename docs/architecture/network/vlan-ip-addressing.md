---
sidebar_position: 2
---

# VLAN 與 IP 定址

本頁記錄 Arista DCS-7060CX-32S (cr1) 核心交換機、Juniper NFX250 (fw1) 閘道上設定的所有 VLAN，以及依據即時 SSH 資料推導的各主機 IP 分配。

## VLAN 表

所有 VLAN 皆定義於 Arista 上，並透過 trunk 傳送至列出的 port-channel 或介面。

| VLAN | 名稱 | 子網 | 閘道 / SVI | 用途 | Trunk 所在 |
|------|------|------|------------|------|------------|
| 1 (untagged) | default | 192.168.0.0/24 | 192.168.0.254 (NFX250-VM) | 帶內管理 | Po1001 |
| 100 | vm-int | 10.0.0.0/24 | - | 虛擬機內部（租戶 overlay） | Po1-Po5 |
| 101 | libvirt | 10.0.1.0/24 | - | 即時遷移 | Po1-Po5 |
| 1000 | 147035 | 172.16.13.0/30 | 172.16.13.2 (Arista) | 至 AS38008 的 BGP 對等互聯（台灣） | Cpu, Po1001 |
| 1007 | oob-mgmt | 192.168.7.0/24 | 192.168.7.1 (NFX250) | 帶外管理、IPMI | Et27/2, Et27/3 |
| 1113 | api | 192.168.113.0/24 | 192.168.113.5 (Arista) | OpenStack API 端點 | Cpu, Et27/2, Po1-Po5 |
| 1114 | ceph-pub | 192.168.114.0/24 | - | Ceph 公用（客戶端）網路 | Po1-Po5 |
| 1115 | ceph-priv | 192.168.115.0/24 | - | Ceph 叢集（複製）網路 | Po1-Po5 |
| 2116 | tw-pub | 103.122.116.0/23 | 103.122.117.254 (Arista) | 公用網路 -- 台灣 | Cpu, Et27/2, Po1-Po5 |

### 其他 VLAN（NFX250 / fw1）

以下 VLAN 設定於 Juniper NFX250 (fw1) 上，用於內部管理：

| VLAN | 名稱 | 子網 | 閘道 / SVI | 用途 | Trunk 所在 |
|------|------|------|------------|------|------------|
| 3000 | vlan-nat | 192.168.0.0/24 | 192.168.0.254 (NFX250 ge-1/0/0.1) | 內部 NAT / 管理（NFX250 內部） | NFX250 ge-0/0/0-2, sxe-0/0/0 |

### VLAN 設計說明

- **VLAN 1 (default)** 為 untagged 帶內管理網路。閘道位於 NFX250 VM 上，而非 Arista。
- **VLAN 100 及 101** 分別承載東西向虛擬機流量與 libvirt 即時遷移流量。兩者皆無閘道，因為路由在 OpenStack overlay 內部處理。
- **VLAN 1000** 為連接上游 AS38008 (Apernet) 的點對點 BGP 對等互聯鏈路。/30 子網承載一個 eBGP session。
- **VLAN 1007** 為 IPMI/BMC 介面的帶外管理網路，僅可透過 EX3300 管理交換機及 NFX250 到達。
- **VLAN 1113** 承載所有 OpenStack API 流量。Arista SVI 192.168.113.5 提供閘道。Keepalived VIP (192.168.113.252) 在控制平面節點間浮動。
- **VLAN 1114 及 1115** 為專用 Ceph 網路。VLAN 1114（公用/客戶端）為 bond0 上的 native（untagged）VLAN，VLAN 1115（叢集/複製）則為 tagged。分離客戶端與複製流量可防止復原風暴影響虛擬機 I/O。
- **VLAN 2116** 承載台灣位址區塊的公用可路由流量。
- **VLAN 3000** 為 NFX250 內部 VLAN，用於 NAT 及 NFX250 與直連主機之間的管理連線。

## 各主機 IP 分配

IP 位址依據一致的方案分配：最後一個八位元組編碼主機編號。openstack 節點的模式為 `.1X`，其中 `X` 為主機編號的最後一位數字（例如 openstack01 取 .11，openstack02 取 .12）。

| 主機 | VLAN 1 (mgmt) | VLAN 1007 (IPMI) | VLAN 1113 (API) | VLAN 1114 (Ceph pub) | VLAN 1115 (Ceph priv) | Bond / NIC |
|------|---------------|-------------------|-----------------|----------------------|-----------------------|------------|
| openstack01 | 192.168.0.21 (eno1) | 192.168.7.21 | 192.168.113.11 (bond0.1113) | 192.168.114.11 (bond0 native) | 192.168.115.11 (bond0.1115) | bond0 LACP 2x25GbE |
| openstack02 | 192.168.0.22 (eno1) | 192.168.7.22 | 192.168.113.12 | 192.168.114.12 | 192.168.115.12 | bond0 LACP 2x25GbE |
| openstack04 | 192.168.0.24 (eno1) | 192.168.7.24 | 192.168.113.14 | 192.168.114.14 | 192.168.115.14 | bond0 LACP 2x25GbE |
| openstack05 | 192.168.0.25 (eno1) | 192.168.7.25 | 192.168.113.15 | 192.168.114.15 | 192.168.115.15 | bond0 LACP 2x25GbE |
| openstack06 | 192.168.0.26 (eno1) | 192.168.7.26 | - | 192.168.114.16 | 192.168.115.16 | bond0 LACP 2x25GbE |
| NFX250 VM（部署主機） | 192.168.0.1 (ens5) | 192.168.7.3 (ens4) | - | - | - | - |
| Arista (cr1) | - | 192.168.7.15 (Ma1) | 192.168.113.5 (Vlan1113) | - | - | - |
| NFX250 (fw1) | - | 192.168.7.1 (ge-1/0/0.3), 192.168.7.11 (fxp0) | 192.168.113.250 (ge-1/0/0.2) | - | - | - |

### 介面命名

- **eno1** -- 每台伺服器的板載 1GbE 網卡，連接至 EX3300 或帶內管理 VLAN。
- **bond0** -- 兩張 Mellanox ConnectX-4 Lx 25GbE 網卡的 LACP bond，透過 port-channel 連接至 Arista。各主機使用不同的介面命名；bond 透過自訂腳本部署。
- **bond0.XXXX** -- bond0 上指定 VLAN 的 802.1Q tagged 子介面。
- bond0 上的 **native VLAN 為 1114** (Ceph public)。所有其他 VLAN 皆為 tagged 子介面。

### openstack06 備註

- openstack06 沒有 API VLAN 位址，因為其非控制平面節點。

## 虛擬 IP 位址 (VIP)

| VIP | 網路 | 用途 |
|-----|------|------|
| 192.168.113.252 | VLAN 1113 (API) | OpenStack 內部 API VIP，由 Keepalived 管理 |
| openstack.cloudnative.tw | 公用（台灣） | 公用 OpenStack API 端點，TLS 在 HAProxy 終結 |
| s3.cloudnative.tw:6780 | 公用（台灣） | S3/Swift 相容物件儲存端點 |

內部 VIP (192.168.113.252) 透過 VRRP 在控制平面節點間浮動。外部客戶端透過公用 DNS 名稱存取，DNS 解析至 HAProxy 實例，再轉發至內部 VIP。

## NFX250 VM 其他介面

NFX250 管理 VM（部署主機）除上述管理 VLAN 外，尚有以下額外介面：

| 介面 | 位址 | 用途 |
|------|------|------|
| ens3 | 103.122.117.253/24 | 公用 IPv4（台灣區塊） |
| ens3 | 2403:8ec0::d207:caff:fecc:e497/64 | 公用 IPv6（台灣區塊） |
| wg0 | 192.168.118.1/24 | WireGuard VPN 隧道 |

## NFX250 (fw1) 介面

NFX250 硬體平台（主機名稱：fw1）提供閘道及防火牆功能。主要介面位址：

| 介面 | 位址 | 用途 |
|------|------|------|
| ge-1/0/0.0 | 103.122.117.250/23, .241/23, .242/23, .252/23 | 台灣公用 IPv4（多位址） |
| ge-1/0/0.0 | 2403:8ec0::11/48 | 台灣公用 IPv6 |
| ge-1/0/0.2 | 192.168.113.250/24 | API 網路 |
| ge-1/0/0.3 | 192.168.7.1/24 | 管理閘道 (VLAN 1007) |
| fxp0 | 192.168.7.11/24 | 管理 |

## IPv6 位址區塊

| 前綴 | 來源 | 宣告途徑 |
|------|------|----------|
| 2403:8ec0::/48 | 台灣 (TW) | bgp-apernet VRF |

IPv6 前綴透過 eBGP session 宣告至 AS38008 (Apernet)，在 Arista 上使用 bgp-apernet VRF。
