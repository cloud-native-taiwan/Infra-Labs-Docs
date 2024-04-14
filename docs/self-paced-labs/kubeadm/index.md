---
description: ""
---

# OpenStack 上利用 kubeadm 搭建 K8S Cluster

本次 lab 會示範如何在 OpenStack 中透過 kubeadm 搭建一個 Kubernetes Cluster。版本為 `1.27`。

## kubeadm 介紹

`kubeadm` 是官方開發並維護，用以建立原生 Kubernetes 環境的工具。相較於其他工具，像是 `kops`、`kubespray`，`kubeadm` 需要手動安裝的步驟較多，因為其目的在於建立**原生**的 K8s 叢集，而原生的叢集適合用來學習或測試用。

:::note
**原生** 的意思是相較於像是公有雲提供的 AKS、GKE、EKS 等包裝過的 Kubernetes 引擎，或是地端提供的 Rancher 等，kubeadm 所安裝的 Kubernetes 沒有客製化的功能，絕大多數額外的功能需要自行安裝，也因此適合拿來學習概念或是做 PoC 之類的用途。
:::

## 前置準備
### 開啟 OpenStack 上的虛擬主機

此次 lab 將搭建 1 個 master node、2 個 worker node 的 Kubernetes cluster，因此需要先在 Openstack dashboard 中開啟虛擬主機。這邊可參考 [Infra Labs 基礎教學 > 建立安全性群組](https://docs.cloudnative.tw/docs/tutorial-basics/create-security-group) 以及 [Infra Labs 基礎教學 > 建立 VM](https://docs.cloudnative.tw/docs/tutorial-basics/create-vm) 所做的設定去開啟對應的虛擬主機，並依照 Kubernetes 的網路埠需求設定對應的安全性群組並分配給虛擬主機。本次 lab 會使用下列的設定，安全性群組則參考 [Kubernetes required ports](https://v1-27.docs.kubernetes.io/docs/reference/networking/ports-and-protocols/) 做設定:


|Server Name |Private IP       |CPU |RAM |
|------------|-----------------|----|----|
|bastion-host|192.168.200.100  |2   |2G  |
|k8s-master  |192.168.200.101  |2   |4G  |
|k8s-n0      |192.168.200.102  |2   |4G  |
|k8s-n1      |192.168.200.103  |2   |4G  |

### 安全性群組: Control Plane (Master Node)

|Protocol |Direction |Port Range |Purpose                 |Used By             |
|---------|----------|-----------|------------------------|--------------------|
|TCP      |Inbound   |6443       |K8s API server          |All                 |
|TCP      |Inbound   |2379-2380  |etcd server client API  |kube-apiserver, etcd|
|TCP      |Inbound   |10250      |kubelet API             |Self, Control Plane |
|TCP      |Inbound   |10259      |kube-scheduler          |Self                |
|TCP      |Inbound   |10257      |kube-scontroller-manager|Self                |

### 安全性群組: Worker Node

|Protocol |Direction |Port Range |Purpose                 |Used By             |
|---------|----------|-----------|------------------------|--------------------|
|TCP      |Inbound   |10250      |kubelet API             |Self, Control Plane |
|TCP      |Inbound   |30000-32767|NodePort Services       |All                 |

### 關閉 swap
swap 概念上是 Linux 中為了防止發生記憶體短時間內不夠用的情況，而配置的儲存空間，K8s 預設不支援，因為其會影響 Kubernetes 在容器部署的記憶體分配和管理計算上的精確度。在 `1.27` 中，swap 還處於 alpha 的階段，官方文件也說明必須要關閉 swap 以避免 kubelet 出現錯誤。

```bash
sudo swapoff -a
```

:::note
上述指令可以暫時關閉 swap 功能，但機器重啟後有可能會自動開啟，因此較保險的做法是到 `/etc/fstab` 中修改相關設定。
:::

### 確認各節點上的 MAC address 及 `product_uuid` 皆不相同
這個步驟是為了確保 Kubernetes 在辨認 Node 的時候有唯一值可作參考，如果 Node 間有相同的 MAC address 或 `product_uuid` 可能會造成安裝失敗。

```bash
# Get the MAC address of the network interfaces
ip link

# Get the product_uuid
sudo cat /sys/class/dmi/id/product_uuid
```


### 安裝 Container Runtime

檢查完所需的網路接口之後，由於 `kubeadm` 概念上是將各個基本元件如 API server、etcd 等透過容器的方式運行，因此我們必須先安裝 container runtime。這邊有不同的解決方案可以使用，例如 containerd、CRI-O、Docker Engine 等，這邊會以 CRI-O 作為範例。

因為我們在 OpenStack 上是以 Ubuntu 作為作業系統，並預計安裝 CRI-O `1.24` 版本，在官方文件上有[對應的安裝方式](https://github.com/cri-o/cri-o/blob/main/install-legacy.md#apt-based-operating-systems)。接下來的指令需要以 root 權限執行:

```bash
# 進入 root 權限 shell
sudo su
```

在繼續安裝 container runtime 前，我們需要先指定要安裝的 CRI-O 版本及 OS，這邊因為預計安裝的 CRI-O 版本為 `1.24` ，以及在 Infra Lab 建立的雲實例 OS 是 `Ubuntu 22.04`，因此根據[官方文件](https://github.com/cri-o/cri-o/blob/main/install-legacy.md#apt-based-operating-systems)透過指令設定如下:
```bash
export VERSION=1.24
export OS=xUbuntu_22.04
```

接著繼續執行安裝 container runtime 的相關指令:
```bash
echo "deb [signed-by=/usr/share/keyrings/libcontainers-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
echo "deb [signed-by=/usr/share/keyrings/libcontainers-crio-archive-keyring.gpg] https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list

mkdir -p /usr/share/keyrings
curl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-archive-keyring.gpg
curl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/Release.key | gpg --dearmor -o /usr/share/keyrings/libcontainers-crio-archive-keyring.gpg

apt-get update
apt-get install cri-o cri-o-runc containernetworking-plugins

# 離開 root 權限 shell
exit
```

安裝完 container runtime 相關的套件後，記得將 container runtime interface 的服務啟動，否則後續的 kubeadm 初始化會沒辦法執行。(要有 container runtime 才能跑起 K8s 的各個元件例如 API Server, Scheduler 等)

```bash
sudo systemctl enable crio
```

檢查一下狀態:

```bash
sudo systemctl status crio
```
```plain
● crio.service - Container Runtime Interface for OCI (CRI-O)
     Loaded: loaded (/lib/systemd/system/crio.service; disabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-01-26 07:16:17 UTC; 2s ago
       Docs: https://github.com/cri-o/cri-o
   Main PID: 11019 (crio)
      Tasks: 10
     Memory: 11.3M
        CPU: 207ms
     CGroup: /system.slice/crio.service
             └─11019 /usr/bin/crio
```
確認狀態為 `Active` ，就代表 container runtime 有成功在背景執行。

## 安裝 `kubeadm`, `kubectl`, `kubelet`

接下來就可以安裝最重要的 `kubeadm` 工具，以及操作 Kubernetes 叢集常用到的 `kubectl` 和在各個節點背景作為 agent 運作的 `kubelet`，根據[官方文件](https://v1-27.docs.kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#installing-kubeadm-kubelet-and-kubectl)依下列指令進行安裝:

```bash
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl

curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.27/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.27/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```


## 以 `kubeadm` 初始化 Kubernetes 叢集

安裝完上述工具後，接著就可以在 Master Node 上初始化叢集。

:::note
此步驟只需要在 Master Node 上執行！
:::

```bash
sudo kubeadm init --apiserver-advertise-address=192.168.200.101 --pod-network-cidr=10.244.0.0/16
```
這裡的 `--apiserver-advertise-address` 設定為 `192.168.200.101` 是因為 `kubeadm` 原本會以預設的 IP 作為 API Server 的位址，而在這次基於 OpenStack 的 lab 中，有設定好的 API Server 位址，因此要額外設定此參數為 Control Plane 的 IP。`--pod-network-cidr` 設定為 `10.244.0.0/16` 則是因為後續選用 Flannel 作為 CNI，根據官方建議設定此區段作為 Pod 的 CIDR。

:::note
初始化過程中，可能會遇到下列錯誤:
```plain
[preflight] Running pre-flight checks
error execution phase preflight: [preflight] Some fatal errors occurred:
    [ERROR FileContent--proc-sys-net-bridge-bridge-nf-call-iptables]: /proc/sys/net/bridge/bridge-nf-call-iptables does not exist
    [ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher
```
這是由於 `br_netfilter` 模組以及 IP Forward 的功能沒有啟動，這兩者會用來處理網路封包的轉發，所以需要更改部分檔案設定:
```bash
sudo vim /etc/modules
```
在 `/etc/modules` 中加上 `br_netfilter`:
```plain
# /etc/modules: kernel modules to load at boot time.
#
# This file contains the names of kernel modules that should be loaded
# at boot time, one per line. Lines beginning with "#" are ignored.

br_netfilter  # 加上這行確保開機時即啟動
```
接下來修改 `/etc/sysctl.conf` 的設定:
```bash
sudo vim /etc/sysctl.conf
```
修改關於 ip_forward 的設定 (預設是註解掉的，移除註解即可):
```plain
# Uncomment the next line to enable packet forwarding for IPv4
net.ipv4.ip_forward=1
```
之後，重新開機並再次執行 `kubeadm init` 指令即可。
:::

安裝順利的話，就可以看到下列訊息，代表 Kubernetes 的 Control Plane 各個元件已經順利跑起來。
```plain
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.200.101:6443 --token <your_token> \
  --discovery-token-ca-cert-hash <your_sha256_hash>
```

其中有提到要開始使用叢集的話，需要以一般使用者身份執行下列指令:

```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

另外，訊息中最後一段有提供加入 Worker Node 用的指令 (`kubeadm join`)，可以先將該段指令複製下來，用來在工作節點上執行。

## 將 Worker Node 加入叢集

前面的步驟幫助我們在 Master Node 上成功運行了 Control Plane，但要作為多節點的 Kubernetes Cluster 還缺少了 Worker Node，因此接下來要透過 `kubeadm` 將 Worker Node 加入叢集。

進入 Worker Node 執行下列指令:

```bash
sudo kubeadm join 192.168.200.101:6443 --token <your_token> \
      --discovery-token-ca-cert-hash <your_sha256_hash>
```


:::note
kubeadm 產生用來加入 Worker Node 的 token 預設時效為一天，如果超過時間未加入的話可透過下列指令重新產出一組新的 token 並獲取對應的 CA certificate SHA256 值:
```bash
# Generate a new token
kubeadm token create

# Get the CA certificate
openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2>/dev/null | openssl dgst -sha256 -hex | sed 's/^.* //'
```
接著重新執行 `kubeadm join` 的指令並帶入新的 `token` 和 `sha256` 即可。
:::

將 Worker Node 加入叢集之後，可以回到 Master Node 上，看看 node 是否成功加入到叢集之中:

```bash
kubectl get nodes

NAME         STATUS   ROLES           AGE     VERSION
k8s-master   Ready    control-plane   52m     v1.27.10
k8s-n0       Ready    <none>          8m50s   v1.27.10
k8s-n1       Ready    <none>          6s      v1.27.10
```

確認狀態都為 `Ready`，這樣一來一個單控制平面、兩個工作節點的 Kubernetes 叢集就架設完成。


## 總結

`kubeadm` 安裝過程較為繁瑣，因此在過程中會了解到整個 Kubernetes 從底層開始是如何運作，包含自行安裝 CRI 讓 K8s 可以有執行容器的環境、Control Plane 的 4 個核心元件皆透過容器運行，甚至有需求自行安裝其他 CNI 等，這些細節如果透過自動化工具或者透過雲服務去起叢集可能相對難理解底層是怎麼搭建的，因此 `kubeadm` 用來作為學習目的以了解 K8s 運作模式的話有一定的效益。
