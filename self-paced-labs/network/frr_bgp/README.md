# FRR 教學

## 路由是什麼

路由表就像很多扇門，你可以選擇對應的門，而去走對應的路線。

> 舉例來說：
> Cloudflare 的 DNS IP 為 1.1.1.1
> 
> 那我們要去 Cloudflare 的 DNS 伺服器時
> 
> 封包會先透過 ISP 的路由器轉送到 Cloudflare 的骨幹路由器，而 Cloudflare 的骨幹路由器則會尋找「往 1.1.1.1 路由的最佳路徑」，並將封包轉發過去。
> 
> ![](https://i.imgur.com/YH0TNlM.jpg)

而路由也有兩種協議，分別為動態路由及靜態路由

> 常見的像是 BGP, OSPF, IS-IS, MPLS 等屬於動態路由。
> 而 Static Route 則是靜態路由

## 什麼是 BGP

BGP (Border Gateway Protocol) 是一種外部路由協議，在 1989 年由 RFC 1105 所定義。因其具有 AS-Path 等路由特性，常用於 ISP 之間的路由交換。

每個網路業者會擁有由 RIR 分配的獨立 AS Number。

AS Number 也可以視為網路世界的身分證，當與其他人建立 BGP Session 時，可透過 WHOIS 來查詢並確認是否為擁有權限的人（驗證 Email 或是 Phone Number）。

在建立 Session 時，會透過 TCP 179 來連接。通常會有以下 6 種 State：
- Idle
- Connect
- Active
- OpenSent
- OpenConfirm
- Established

一旦 Session 狀態為 Established 時，及可開始收發路由了。

![](https://i.imgur.com/JmX8CxG.jpg)

![](https://i.imgur.com/5eXMBvO.png)

而在 BGP 也分了兩種型態。分別為：
- iBGP (Interior Border Gateway Protocol)
    - 兩端 Session 的 ASN 相同
    - 將 eBGP 學習到的路由發給自己網路內的網路設備
- eBGP (External Border Gateway Protocol)
    - 兩端 Session 的 ASN 不同
    - 向外部宣告自己的網段

## 我什麼時候需要用到 BGP？

當你是個大型網路，而有許多設備需要進行維護，或是需要將網段宣告給網際網路。就會用到動態路由啦～

> 總不可能所有路由都是靜態路由指過去吧 ಠ_ಠ

舉例來說：

> 學校與 ISP 之間的大型網路。
> ISP 需要知道 140.113.0.0/16 該往哪一條路由前進。
> 
> 而現有狀態是交大使用 AS9916 (NCTU) 透過 AS18185 (NYCU) 宣告路由 (140.113.0.0/16) 至 AS2914 (NTT)
> AS2914 則再將路由 Transit 給其他網路業者
> 
> 從 ISP 的路由器上查看，我們可以看到 AS Path 為 1299 (該 ISP 的互聯) > 2914 (NTT) > 18185 (NYCU) > 9916 (NCTU)
> 
> 而在現實層面的部分，封包進入 ISP 的路由器後，會將其轉發至 AS1299 > AS2914 > AS18185 最後到 NCTU 的網路內。
> 
> ```
> route-server> show ip bgp 140.113.0.0/16
> BGP routing table entry for 140.113.0.0/16
> Paths: (20 available, best #17, table Default-IP-Routing-Table)
>   Not advertised to any peer
>   1299 2914 18185 9916
>     62.115.175.189 from 216.218.252.211 (216.218.253.11)
>       Origin IGP, metric 48, localpref 70, valid, internal
>       Originator: 216.218.253.11, Cluster list: 216.218.252.211 
>       Last update: Wed May 11 19:55:10 2022
> ```
> 
> BGP 的路由原理
> 
> ![](https://www.cloudflare.com/img/learning/security/glossary/what-is-bgp/bgp-simplified.svg)
> 
> Ref: https://www.cloudflare.com/learning/security/glossary/what-is-bgp/
> 


## Lab

我們現在有三台 Linux 路由器，分別為 RS, R1 及 R2。其中他們使用 BGP 協議來互相交換路由，使 instance 1 與 instance 2 可以互相 ping 通。

![](https://i.imgur.com/vOvJDGC.png)

### router

- ens3: 192.168.1.10/24
- ens4: 192.168.2.10/24
- BGP Details
    - AS65535
    - 與 instance 1 & 2 建立 Sessions
    - 不宣告

### instance 1

- ens3: 192.168.1.20/24
- BGP Details
    - AS65531
    - 與 router 建立 session
    - 宣告 192.168.1.0/24

### instance 2

- ens3: 192.168.2.20
- BGP Details
    - AS65532
    - 與 router 建立 session
    - 宣告 192.168.2.0/24

## FRRouting 安裝指令

```shell=
# 更新
sudo apt update -y
sudo apt upgrade -y
# 安裝網路套件及 GPG 套件
sudo apt install -y curl gnupg2 traceroute

# 導入 GPG
curl -s https://deb.frrouting.org/frr/keys.asc | sudo apt-key add -
FRRVER="frr-stable"
# 寫入軟體源
echo deb https://deb.frrouting.org/frr $(lsb_release -s -c) $FRRVER | sudo tee -a /etc/apt/sources.list.d/frr.list
# 安裝 FRRouting
sudo apt update -y && sudo apt install -y frr frr-pythontools

# 在 Kernel 中開啟 IP Forwarding
echo "
net.ipv4.conf.all.forwarding = 1
net.ipv6.conf.all.disable_ipv6 = 0
net.ipv6.conf.default.disable_ipv6 = 0
net.ipv6.conf.lo.disable_ipv6 = 0
net.ipv6.conf.default.forwarding = 1
net.ipv6.conf.all.forwarding = 1
net.ipv6.conf.all.proxy_ndp = 1
net.ipv6.conf.all.accept_ra = 2
" | sudo tee -a /etc/sysctl.conf

sudo sysctl -p

# 啟動 FRRouting 所有功能
sudo sed -i "s/=no/=yes/g" /etc/frr/daemons
service frr restart
```

## FRRouting 設定文件

> 我們需要在 Linux Shell 上輸入 `sudo vtysh` 才能進入 FRR CLI 模式。
> 設定文件會存放在 `/etc/frr/frr.conf`。在 `vtysh` 中輸入 `show run` 可以看到設定文件的內容、輸入 `write` 則會將設定文件寫入。

```conf=
# Router
!
frr version 8.2.2
frr defaults traditional
hostname router-1
log syslog informational
service integrated-vtysh-config
!
# BGP 設定檔
router bgp 65533

 # 設定 Neighbor session 的 AS Number
 neighbor 192.168.1.20 remote-as 65531
 neighbor 192.168.2.20 remote-as 65532
 !

 # IPv4 Sessions 及要宣告的路由
 address-family ipv4 unicast

  # network 10.0.0.0/24 <- 這個例子是指宣告 10.0.0.0/24 的路由
  # Neighbor - 要建立的 session，後面的 route-map 則是套用下方的規則。(in = 導入的路由，out = 導出的路由)
  neighbor 192.168.1.20 route-map R1-Import in
  neighbor 192.168.1.20 route-map Internal-Export out
  neighbor 192.168.2.20 route-map R2-Import in
  neighbor 192.168.2.20 route-map Internal-Export out
 exit-address-family
exit
!

# IP Prefix Lists - 通常用於網段過濾 (permit 允許、deny 拒絕，seq 則為優先級)
# 通常輸入 `ip prefix-list r1 permit 192.168.0.0/24` 就會自動排序優先級了
ip prefix-list r1 seq 5 permit 192.168.1.0/24
ip prefix-list r2 seq 5 permit 192.168.2.0/24
ip prefix-list anyv4 seq 5 permit any
!

# route-map 用於規則。可以根據優先級套用 prefix filter, community 等
route-map R1-Import permit 5
 match ip address prefix-list r1
exit
!
route-map R2-Import permit 5
 match ip address prefix-list r2
exit
exit
!
route-map Internal-Export permit 5
 match ip address prefix-list anyv4
exit
!

# SR 設定檔。預設值為空
# http://docs.frrouting.org/en/latest/pathd.html
segment-routing
 traffic-eng
 exit
exit
!
end
```

```conf=
# r1
!
frr version 8.2.2
frr defaults traditional
hostname instance-1
log syslog informational
service integrated-vtysh-config
!
ip route 192.168.1.0/24 blackhole
!
router bgp 65531
 neighbor 192.168.1.10 remote-as 65533
 !
 address-family ipv4 unicast
  network 192.168.1.0/24
  neighbor 192.168.1.10 route-map accept-all in
  neighbor 192.168.1.10 route-map r1-announce-export out
 exit-address-family
exit
!
ip prefix-list any seq 5 permit any
!
route-map accept-all permit 5
 match ip address prefix-list any
exit
!
route-map r2-announce-export permit 5
 match ip address prefix-list any
exit
!
route-map accept-all permit 5
 match ip address prefix-list any
exit
!
segment-routing
 traffic-eng
 exit
exit
!
end
```

```conf=
# r2
!
frr version 8.2.2
frr defaults traditional
hostname instance-2
log syslog informational
service integrated-vtysh-config
!
router bgp 65532
 neighbor 192.168.2.10 remote-as 65533
 !
 address-family ipv4 unicast
  network 192.168.2.0/24
  neighbor 192.168.2.10 route-map accept-all in
  neighbor 192.168.2.10 route-map r2-announce-export out
 exit-address-family
exit
!
ip prefix-list any seq 5 permit any
!
route-map accept-all permit 5
 match ip address prefix-list any
exit
!
route-map r2-announce-export permit 5
 match ip address prefix-list any
exit
!
segment-routing
 traffic-eng
 exit
exit
!
end
```

## 其他指令

- 顯示 BGP 狀態
show bgp summary
```
router-1# show bgp summary 

IPv4 Unicast Summary (VRF default):
BGP router identifier 192.168.2.10, local AS number 65533 vrf-id 0
BGP table version 2
RIB entries 3, using 552 bytes of memory
Peers 2, using 1447 KiB of memory

Neighbor        V         AS   MsgRcvd   MsgSent   TblVer  InQ OutQ  Up/Down State/PfxRcd   PfxSnt Desc
192.168.1.20    4      65531        18        18        0    0    0 00:10:01            1        2 N/A
192.168.2.20    4      65532        11        13        0    0    0 00:05:37            1        2 N/A

Total number of neighbors 2
```

- 顯示所有來自 BGP 協議的路由
show ip bgp
```
instance-2# show ip bgp
BGP table version is 2, local router ID is 192.168.2.20, vrf id 0
Default local pref 100, local AS 65532
Status codes:  s suppressed, d damped, h history, * valid, > best, = multipath,
               i internal, r RIB-failure, S Stale, R Removed
Nexthop codes: @NNN nexthop's vrf id, < announce-nh-self
Origin codes:  i - IGP, e - EGP, ? - incomplete
RPKI validation codes: V valid, I invalid, N Not found

   Network          Next Hop            Metric LocPrf Weight Path
*> 192.168.1.0/24   192.168.2.10                           0 65533 65531 i
*> 192.168.2.0/24   0.0.0.0                  0         32768 i

Displayed  2 routes and 2 total paths
```

- 查看 BGP 路由
show ip bgp 192.168.1.0/24
```
instance-2# show ip bgp 192.168.1.0/24
BGP routing table entry for 192.168.1.0/24, version 1
Paths: (1 available, best #1, table default)
  Advertised to non peer-group peers:
  192.168.2.10
  65533 65531
    192.168.2.10 from 192.168.2.10 (192.168.2.10)
      Origin IGP, valid, external, best (First path received)
      Community: 65533:100
      Last update: Sat May 14 20:58:07 2022
```

## 補充資訊

### RIR

RIR 全名 Regional Internet Registries，負責管理全球的網路資源 (ASN, IPv4, IPv6)。

目前全球一共五個 RIR，分別是北美的 ARIN、歐洲 RIPE、亞洲 APNIC、非洲 AFRINIC 及拉丁美洲的 LACNIC。

而某些區域的 RIR 也會允許 NIR (National Internet registry) 負責管理該國家的網路資源。(Eg: TWNIC 管理台灣地區的 ASN, IPv4 及 IPv6 資源)

### AS-SET

AS-SET 是一種 Objetc，可以將自己的下游寫入，並提供給上游作為 route filter 使用。通常會從 `members` 的值來進行巡迴，並產生要過濾的 prefixes。

```shell=
steveyiyo@SteveYis-MacBook-Pro-2 ~ % whois -r AS-STEVEYI
as-set:         AS-STEVEYI
descr:          SteveYi Network Service
members:        AS7480
members:        AS13586
members:        AS60614
members:        AS141173
members:        AS209557
remarks:        --- Customer ---
members:        AS-YI
remarks:        --- DownStream ---
members:        AS-STEVEYI-C
remarks:        ----------
tech-c:         YT1698-RIPE
admin-c:        YT1698-RIPE
mnt-by:         STEVEYI-MNT
created:        2020-09-10T18:57:46Z
last-modified:  2022-04-26T18:15:21Z
source:         RIPE
```

### 類實際案例

今天小易 ([AS7480](https://www.peeringdb.com/asn/7480)) 跟 Gene ([AS147035](https://www.peeringdb.com/asn/147035)) 建立了 BGP Session，Gene 為了確認小易是不是有權限使用 AS7480，而透過 WHOIS 查詢到了 Email 並進行確認。

```shell=
steveyiyo@SteveYis-MacBook-Pro-2 ~ % whois -r as7480 | grep mail 
abuse-mailbox:  abuse@steveyi.net
```

而建立 BGP Session 後，Gene 想要根據小易的 ASN / AS-SET 來過濾路由，於是使用了開源的 [bgpq4](https://github.com/bgp/bgpq4) 工具來進行。

```shell=
steveyiyo@dev:~$ bgpq4 -4l AS7480_v4 AS7480 -J
policy-options {
replace:
 prefix-list AS7480_v4 {
    44.31.73.0/24;
    103.156.184.0/23;
    103.156.185.0/24;
    103.172.124.0/24;
 }
}
```

# Terraform 教學

由於本教學是基於 [Terraform](https://www.terraform.io/) 的，所以會使用 [Terraform](https://www.terraform.io/) 的環境來進行教學。

## 安裝 Terraform

至 Terraform 官網的 [Downloads](https://www.terraform.io/downloads.html) 下載最新版本。  
不同的版本有不同的下載方式 / 指令。

## How to run Terraform script

一旦安裝好 Terraform 後，我們就可以來進行部署了。

首先執行以下指令：

```shell
# 先初始化環境
`terraform init`
```

接著，我們要設定 OpenStack 的環境資訊。

進入 OpenStack 面板 -> Identity / Application Credentials，在右上方選擇建立新的 Application Credential。
> 以 CNTUG Infra Lab 為例，該連結在 https://openstack.cloudnative.tw/identity/application_credentials/

建立完成後，點擊 Download openrc file，將會下載一個 Shell Script 檔案。

最後則是部署環境，先執行剛剛的 Shell Script 再執行以下指令：

```shell
# 部署環境
`terraform apply`

# 會跳出確認視窗，請輸入 `yes` 來確認。

# ref: https://www.terraform.io/cli/commands/apply
```


## How to destroy the environment

當實驗結束後，我們可以使用以下指令來銷毀環境：

```shell
# 銷毀環境
terraform destroy

# 會跳出確認視窗，請輸入 `yes` 來確認。

# ref: https://www.terraform.io/cli/commands/destroy
```