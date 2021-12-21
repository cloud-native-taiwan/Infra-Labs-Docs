# CNTUG Infra Labs OpenStack 使用教學

[Dashboard 連結](https://openstack.cloudnative.tw/)

TODO:
- [ ] Change Image Link to GitHub

## 登入並且更改密碼

取得帳號及密碼後，登入 OpenStack

![](https://i.imgur.com/xuSSzPr.png)

點擊右上方的 Settings

![](https://i.imgur.com/uPro5ta.png)

接著選擇左邊的 Change Password，即可修改密碼。

![](https://i.imgur.com/9Qd2cJm.png)

## 上傳 SSH 金鑰

OpenStack 上所有 VM 預設都是使用 SSH Public Key 進行 SSH 認證，因此必須建立或上傳自己的 SSH Public Key 以便在 VM 建立的過程中注入。

首先，點選左邊選單欄 運算 -> [密鑰對](https://openstack.cloudnative.tw/project/key_pairs)。

右上角將有
  - 新增密鑰對
  - 輸入公鑰

等選項

如果自己在本地已經有 SSH Public Key 要上傳，點選輸入公鑰並填入

- 密鑰對名稱
- 金鑰類型
- 金鑰或上傳檔案

點擊輸入公鑰後及成功上傳

如果要建立新的 SSH Public Key 點選新增密鑰對輸入名稱並選擇類型，按下新增密鑰對後及會下載新增的密鑰對

## 建立安全性群組 (Security Groups)

OpenStack VM 可以透過安全性群組對 VM 做簡單的防火牆管理。在預設狀態下，每個專案會有一個 default 安全性群組，並且會阻擋所有流入流量。

首先，進入網路 -> [安全性群組](https://openstack.cloudnative.tw/project/security_groups/)，點擊右方新增安全性群組，填入名稱和描述。

建立後可以點選右方管理規則，更改規則。

加入規則時，需填入以下資訊：

- 規則
    - TCP/UDP/ICMP 等，或是已經登入好的如 SSH, HTTP, HTTPS
    - 方向
        - 預設由 VM 流出的網路是全開的，所以通常方向都選擇入口即可
    - 開放埠口 (port)
        - 可以選擇開放單一埠口，一個範圍的埠口，或是全開 (1-65536)
    - CIDR
        - 此規則適用的 CIDR
            - 如果要所有 IPv4 都能使用此規則，可選擇 0.0.0.0/0
            - 或是可以根據需求更改，如只允許 140.113.0.0/16 的 IP 連入 SSH 埠口等

填寫完畢後點選加入，即成功將此規則加入安全性群組。


## 建立私有網路

OpenStack 允許各個用戶在自己專案建立自己的私有網路，私有網路中的 VM 可以透過路由器 SNAT 連線至外部網路。
我們會建議使用者建立一個自己的私有網路並且透過一個 bastion host 作為一個跳板連入。

首先，進入網路 -> [網路](https://openstack.cloudnative.tw/project/networks/)，點擊建立網路。

相繼輸入以下資訊

- 網路
    - 網路名稱
    - 勾選建立子網路
- 子網路
    - 子網路名稱
    - 網路地址 (Eg: 10.219.0.0/24)
    - IP Version （選擇 IPv4 或是 IPv6）
    - 閘道 IP（非必要，用於路由器 IP 地址）
- 子網路詳細資訊
    - DHCP 地址池
    - DNS 位置

![](https://i.imgur.com/L1CJyiV.png)


## 建立路由器

路由器是用來做外部網路和私有網路中的 SNAT/DNAT，要透過路由器才能在 VM 上聯結浮動 IP

首先，進入網路 -> [路由器](https://openstack.cloudnative.tw/project/routers/)，點擊新增路由器，填寫：

- 路由器名稱
- 對外網路選擇 `publicv4` 或 `publicv6`

點選新增路由器。

當路由器建立完畢後，點選路由器名稱進入路由器資訊，並且選擇`網路卡`選單，點擊右方加入網路卡，填寫：
- 子網域
    - 選擇你建立的私有網路
- IP 位址
    - 填寫當初子網域所填寫的閘道 IP

點選提交後將會建立一個新的網路卡連接路由器和私有網路，提供給私有網路 SNAT 和上面 VM 浮動 IP DNAT


## 建立 VM (Launch Instances)

首先，進入運算 -> [雲實例](https://openstack.cloudnative.tw/project/instances/)，點擊右方 **發動雲實例** 相繼輸入以下內容

- 詳細資訊
    - 雲實例名稱（虛擬機名稱）
    - 計數（虛擬機數量）
- 來源
    - 選擇下方的可用鏡像直接開機（若您需要其他鏡像，請聯繫管理員）
- 類型
    - 虛擬機的規格
- 網路
    - 選擇自己建立的私有網路
    - 或選擇 `publicv4` 直接使用 Public IPv4 地址
- 安全性群組
    - 選擇自己設定好的安全群組。
    在預設情況下，default 安全群組禁止所有外部流量連入
- Key Pair
    - 選擇需要 Access VM 的 SSH Key。

建立 VM 後，會自動建立 <VM 名稱>.<專案名稱>.infra.cloudnative.tw 的 DNS record 指至此 VM。

預設登入帳號：

- Ubuntu: ubuntu
- Debian: debian

### 綁定浮動 IP

如果使用私有網路，可以將 VM 綁上一個浮動的 Public IP，透過路由器 DNAT 進行連線。

在 VM 頁面右邊 Actions 下拉選單中點選聯結浮動 IP，選擇或建立新的浮動 IP 地址和欲聯結的接口，點選聯結後即可聯結浮動 IP。

## 建立 Volume

首先，進入雲硬碟 -> [雲硬碟](https://openstack.cloudnative.tw/project/volumes/)，點擊新增雲硬碟，填入：

- 名稱
- 雲硬碟來源
    - 如果要使用此雲硬碟開機，可以在此選擇映像檔，便會將此映像檔內容複製到此雲硬碟中
- 類型
    - 預設是使用 HDD 儲存池，如果需要高效能的狀況下可以選擇 NVMe
- 容量

點選新增雲硬碟後即會開始建立。

建立完成後在最右方 Actions 點選選單欄，可以將雲硬碟掛載至 VM 上。

## 進階使用

Cloud Native Infra Labs 還提供了服務如 Object Storage with S3 compatiable API 和 Load Balancer。關於這些服務如何使用或是需要使用 API，請參考 OpenStack 官方文件，或是詢問管理員。

- [OpenStack 官方文件](https://docs.openstack.org/xena/)
