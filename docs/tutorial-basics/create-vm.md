# 建立 VM (Launch Instances)

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