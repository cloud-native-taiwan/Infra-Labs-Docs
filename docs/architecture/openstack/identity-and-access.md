---
sidebar_position: 4
---

# 身分與存取管理

Keystone 為 Infra Labs 部署中的所有 OpenStack 服務提供身分識別、驗證與授權。

## Keystone 設定

- **Token 格式**：Fernet token（對稱金鑰加密，無需持久化儲存）
- **Region**：RegionOne
- **公開端點**：`https://openstack.cloudnative.tw:5000`
- **內部端點**：`http://192.168.113.252:5000`

### Fernet 金鑰分發

Kolla-Ansible 部署了兩個容器用於 Fernet 金鑰管理：

- **keystone_fernet**：處理 Fernet token 的建立與驗證。金鑰會定期輪換以限制 token 的有效時間窗口。
- **keystone_ssh**：提供基於 SSH 的金鑰同步，跨三個控制節點（openstack01、openstack02、openstack04），使任一控制節點皆可驗證由其他控制節點簽發的 token。

## 服務帳號

每個 OpenStack 服務使用 `service` 專案中的專屬服務帳號向 Keystone 進行驗證。這些帳號由 Kolla-Ansible 自動建立：

- Nova（compute）
- Neutron（network）
- Glance（image）
- Cinder（block-storage）
- Swift / RGW（object-store）
- Heat（orchestration）
- Designate（dns）
- Octavia（load-balancer）
- Placement
- Skyline（dashboard）

## 使用者上線流程

1. 使用者透過社群表單提交申請。
2. 管理員審核並核准申請。
3. 在 Keystone 中建立使用者帳號並分配至專案。
4. 對該專案套用預設配額。

## 預設配額

<!-- TODO: Document full default quota set (vCPUs, RAM, instances, volumes, etc.) -->

配額增加可透過社群管道提出申請，管理員將根據可用容量進行審核。

> **注意：** 使用者直接連線至 provider network 以取得公開連線。此部署不使用 floating IP。

## 機密管理

敏感設定值（資料庫密碼、RabbitMQ 憑證、Keystone 管理員密碼、服務帳號密碼）儲存於 Kolla-Ansible 部署儲存庫中的 **Ansible Vault**。執行任何部署或重新設定指令時皆需提供 vault 密碼。

- Vault 加密檔案位於 [infra-labs-kolla-ansible](https://github.com/cloud-native-taiwan/infra-labs-kolla-ansible) 儲存庫中。
- Vault 密碼由授權管理員持有，絕不以明文形式儲存於磁碟上。

## 驗證流程

```
User/Service --> Keystone (Fernet token issued)
                    |
                    v
              Token validated locally by each service
              (no DB lookup required for Fernet)
```

Fernet token 透過共享的 Fernet 金鑰解密進行驗證。這避免了對集中式 token 資料庫的需求，並降低了 token 驗證時對 Keystone 的負載。
