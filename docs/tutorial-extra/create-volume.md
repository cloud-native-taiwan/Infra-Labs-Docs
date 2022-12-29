---
sidebar_position: 3
---

# 建立 Volume

首先，進入雲硬碟 -> [雲硬碟](https://openstack.cloudnative.tw/project/volumes/)，點擊新增雲硬碟，填入：

- 名稱
- 雲硬碟來源
    - 如果要使用此雲硬碟開機，可以在此選擇映像檔，便會將此映像檔內容複製到此雲硬碟中
- 類型
    - 預設是使用 HDD 儲存池，如果需要高效能的狀況下可以選擇 NVMe
- 容量

點選新增雲硬碟後即會開始建立。

建立完成後在最右方 Actions 點選選單欄，可以將雲硬碟掛載至 VM 上。