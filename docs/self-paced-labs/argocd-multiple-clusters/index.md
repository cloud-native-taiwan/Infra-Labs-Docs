---
description: ""
---

# ArgoCD 整合 Kubernetes 集群

本文章會透過 K3d 和 ArgoCD 理解 ArgoCD 管理 Kubernetes 集群方式。學習目標

1. ArgoCD CLI 連線至 ArgoCD
2. 透過 ArgoCD CLI 變更密碼
3. 透過 ArgoCD CLI 和使用 Secret 資源建立要管理的 Kubernetes 集群

## 建立環境

本實驗環境

- OS: Windows 11 WSL
- Docker Engine: 23.0.5
- k3d version: v5.6.0
- kubectl version: v1.27.1
- Helm version: v3.11.3
- ArgoCD Helm Chart: 7.1.3
- ArgoCD CLI: v2.11.5

使用 K3d 建置 ArgoCD、Dev、Stage 環境。這邊會讓 K3d 建立的集群都共用同一個 docker 建立的網路，是為了能方便的進行連線。

1. 建立網路

```bash
docker network create argo-net
```

2. 建置給 ArgoCD 的環境，使用 K3d 

```bash
k3d cluster create -c argocd-conf.yaml --servers-memory 6G --agents-memory 2G
```

3. Helm 安裝 ArgoCD，版本使用 `7.1.3`

本實驗 ArgoCD 的 Helm 配置可至本實驗 [Repo](https://github.com/CCH0124/argocd-sandbox/blob/v0.0.1/argo-cd/values.yaml) 查閱。

```bash
$ helm repo add argo https://argoproj.github.io/argo-helm
$ helm search repo argo-cd
NAME            CHART VERSION   APP VERSION     DESCRIPTION
argo/argo-cd    7.1.3           v2.11.3         A Helm chart for Argo CD, a declarative, GitOps...
$ helm install argo-cd argo/argo-cd --version 7.1.3 --namespace argo --create-namespace -f values.yaml
NAME: argo-cd
LAST DEPLOYED: Mon Feb 27 14:54:00 2023
NAMESPACE: argo
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
In order to access the server UI you have the following options:
...
```

4. 安裝 ArgoCD CLI 工具

```bash
curl -sSL -o argocd-linux-amd64 https://github.com/argoproj/argo-cd/releases/download/v2.11.5/argocd-linux-amd64
sudo install -m 555 argocd-linux-amd64 /usr/local/bin/argocd
rm argocd-linux-amd64
```

5. 建立 Dev 的 Kubernetes 環境

建置後可藉由 `kubectl config get-contexts` 驗證，是否有建置 `k3d-dev-cluster`。

```bash
k3d cluster create -c dev-conf.yaml --servers-memory 2G --agents-memory 2G
```

6. 建立 Stage 的 Kubernetes 環境

同樣可藉由 `kubectl config get-contexts` 驗證是否有建置。

```bash
k3d cluster create -c stag-conf.yaml --servers-memory 2G --agents-memory 2G
```

上述的 K3d 配置檔案可直接至本實驗 [Repo](https://github.com/CCH0124/argocd-sandbox/tree/v0.0.1/infra/k3d) 查看對應的配置。配置內容可依照自己當下的環境配置。

:::note
本實驗 K3d 環境 Ingress 資源預設是將其關閉，需手動安裝 [Nginx Ingress](https://argo-cd.readthedocs.io/en/stable/operator-manual/ingress/)。
:::

## ArgoCD CLI 使用

透過 K3d 和 Helm 安裝 ArgoCD 後，透過 `Ingress` 資源會提供可連線的端點。首先將會透過此端點進行連線登入 ArgoCD。

```bash
$ argocd login argo.cch.com:8443
WARNING: server certificate had error: x509: certificate is valid for ingress.local, not argo.cch.com. Proceed insecurely (y/n)?
WARNING: server certificate had error: x509: certificate is valid for ingress.local, not argo.cch.com. Proceed insecurely (y/n)? y
WARN[0012] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web.
Username: admin
Password:
'admin:login' logged in successfully
Context 'argo.cch.com:8443' updated
```

透過 `argocd context` 查看當前連接的集群位置，如果不是上述所建置的環境，可使用 `argocd context {NAME}` 進行切換。

```bash
$ argocd context
CURRENT  NAME               SERVER
*        argo.cch.com:8443  argo.cch.com:8443

$ argocd context argo.cch.com:8443 # 切換
```

透過下面指令可以看到有一個 Kubernetes 集群被管理。預設 ArgoCD 建立起來時管理的 Kubernetes 群集是 ArgoCD 被安裝到的 Kubernetes 群集。

```bash
$ argocd cluster list
SERVER                                  NAME             VERSION  STATUS   MESSAGE                                                  PROJECT
https://kubernetes.default.svc          in-cluster                Unknown  Cluster has no applications and is not being monitored.  
```

## ArgoCD 變更密碼

預設安裝 ArgoCD 會提供 admin 帳號和一組密碼。如果要進行密碼變更可以透過 `argocd account update-password` 進行密碼變更。

```bash
$ argocd login argo.cch.com:8443 --grpc-web-root-path argocd --username admin
$ argocd account update-password --account admin --grpc-web-root-path argocd
WARN[0000] Failed to invoke grpc call. Use flag --grpc-web in grpc calls. To avoid this warning message, use flag --grpc-web.
*** Enter password of currently logged in user (admin):
*** Enter new password for user admin:
*** Confirm new password for user admin:
Password updated
Context 'argo.cch.com:8443/argocd' updated
```

## 管理多個 Kubernetes 集群

ArgoCD 要管理多個 Kubernetes 來說，目前已知會有兩種方式，透過 `Secret` 資源和透過 CLI 方式，下面會演示這兩種方式。


### ArgoCD CLI 與 KUBECONFIG

使用 ArgoCD CLI 會需要使用 `KUBECONFIG` 讓 ArgoCD 來對集群進行管理。下面就開始演示。

對於每個 K3d 所建立出來對集群的連線是由一些複雜網路技巧所組成，因此預設下 ArgoCD 無法透過 `KUBECONFIG` 內的連線位置進行存取，需透過容器中 IP。**所以這邊讓 K3d 建立的集群都共用同一個 docker 建立的網路**。

藉由以下方式獲取 `k3d-dev-cluster` 的 IP 位置。下面表示對於 `k3d-dev-cluster` 他的 IP 位置是 172.18.0.6。

```bash
$ docker exec k3d-dev-cluster-server-0 ifconfig eth0
eth0      Link encap:Ethernet  HWaddr 02:42:AC:12:00:06  
          inet addr:172.18.0.6  Bcast:172.18.255.255  Mask:255.255.0.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:15514 errors:0 dropped:0 overruns:0 frame:0
          TX packets:8103 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0 
          RX bytes:37337554 (35.6 MiB)  TX bytes:1535864 (1.4 MiB)
```

獲取到 IP 後，這邊修改 `.kube/config` 中 `k3d-dev-cluster` 的 API Server 連線位置，以讓 ArgoCD 能夠連線。 

```bash
$ vi .kube/config
....
server: https://dev.cch.com:6446 # 替換成 https://172.18.0.6:6443
...
```

替換完成後即可透過 ArgoCD CLI 方式加入集群，先透過 `argocd login` 登入，再來使用 `argocd cluster add` 新增集群，其格式

```bash
argocd cluster add --kubeconfig <path-of-kubeconfig-file> --kube-context string <cluster-context> --name <cluster-name>
```

實際上執行如下，指定 `--kubeconfig` 和 `--kube-context` 並給一個要在 ArgoCD 平台上顯示的名稱(`--name`)。獲取 Kubernetes `context` 名稱可以使用 `kubectl config get-contexts -o name` 指令來獲取。

```bash
$ argocd login argo.cch.com:8443 --grpc-web-root-path argocd --username admin
$ argocd  cluster add --kubeconfig ~/.kube/config --kube-context string k3d-dev-cluster --name k3d-dev-cluster
WARNING: This will create a service account `argocd-manager` on the cluster referenced by context `k3d-dev-cluster` with full cluster level privileges. Do you want to continue [y/N]? y
INFO[0001] ServiceAccount "argocd-manager" created in namespace "kube-system" 
INFO[0001] ClusterRole "argocd-manager-role" created    
INFO[0001] ClusterRoleBinding "argocd-manager-role-binding" created 
INFO[0006] Created bearer token secret for ServiceAccount "argocd-manager" 
Cluster 'https://172.18.0.6:6443' added
```

新增後，藉由 `argocd cluster` 指令驗證。可以看到有一個 `k3d-dev-cluster` 名稱的集群被 ArgoCD 管理。

```bash
$ argocd  cluster list
SERVER                          NAME             VERSION  STATUS   MESSAGE                                                  PROJECT
https://172.18.0.6:6443         k3d-dev-cluster           Unknown  Cluster has no applications and is not being monitored.  
https://kubernetes.default.svc  in-cluster                Unknown  Cluster has no applications and is not being monitored.  
```


### ArgoCD 之 Secret 資源管理 Kubernetes 集群

第二種方式是使用 `Secret` 資源綁定 Kubernetes 集群存取資訊。這用另一種方式讓 ArgoCD 能夠加入要管理的 Kubernetes 集群，這邊會用 `ServiceAccount` 所綁定的 Token 進行綁定，而非來自 `KUBECONFIG` 中資訊，基於安全意識原則上能這樣做最好。

接著要至 `stage` 環境建立要給 ArgoCD 存取的 `ServiceAccount` 的資訊，記住 `ServiceAccount` 需要綁定 Token，要給 ArgoCD 使用。步驟如下：

1. 切換至 stage 環境

```bash
$ kubectl config use-context k3d-stage-cluster
```

2. 建立 `ServiceAccount`、`ClusterRole` 和 `ClusterRoleBinding` 的資源

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: argocd-admin
  namespace: kube-system
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: argocd-admin-role
rules:
- apiGroups:
  - '*'
  resources:
  - '*'
  verbs:
  - '*'
- nonResourceURLs:
  - '*'
  verbs:
  - '*'
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: argocd-admin-role-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: argocd-admin-role
subjects:
- kind: ServiceAccount
  name: argocd-admin
  namespace: kube-system
```

3. `ServiceAccount` 綁定 Token

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: argocd-admin-token
  namespace: kube-system
  annotations:
    kubernetes.io/service-account.name: argocd-admin
type: kubernetes.io/service-account-token
```

4. 從 `service-account-token` 獲取 CA 與 Token

```bash
export CA=$(kubectl get -n kube-system secret/argocd-admin-token -o jsonpath='{.data.ca\.crt}')

export TOKEN=$(kubectl get -n kube-system secret/argocd-admin-token -o jsonpath='{.data.token}' | base64 --decode)
```

5. 至 ArgoCD 的 Server 位置，建置 Secret 資源

在建立 Kubernetes 集群資訊給 ArgoCD 時，每個 Secret 資源，必須要有標籤 `argocd.argoproj.io/secret-type: cluster`，這樣 ArgoCD 才能識別。下面是建立給 ArgoCD 的 Secret 配置。

```bash
cat <<EOF |  kubectl -n argo apply --context k3d-argo-cluster  -f -
apiVersion: v1
kind: Secret
metadata:
  name: stage-secret
  labels:
    argocd.argoproj.io/secret-type: cluster
type: Opaque
stringData:
  name: stage-cluster
  server: https://172.18.0.9:6443
  namespaces: "team-a, ingress"
  clusterResources: "true"
  config: |
    {
      "bearerToken": "$TOKEN",
      "tlsClientConfig": {
        "serverName": "k3d-stage-cluster",
        "caData": "$CA"
      }
    }
EOF
```

關於配置的參數官方描述的很詳細，可查閱官方資源 [ArgoCD | clusters](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#clusters)。

最後透過 `argocd cluster` 指令，可以看到該從 K3d 建立的 k3d-stage-cluster 群集資源被 ArgoCD 管理。

```bash
$ argocd cluster list
SERVER                                  NAME             VERSION  STATUS   MESSAGE                                                  PROJECT
https://172.18.0.6:6443                 k3d-dev-cluster           Unknown  Cluster has no applications and is not being monitored.  
https://172.18.0.9:6443 (2 namespaces)  stage-cluster             Unknown  Cluster has no applications and is not being monitored.  
https://kubernetes.default.svc          in-cluster                Unknown  Cluster has no applications and is not being monitored. 
```

如果要移除管理的 Kubernetes 集群可用 `argocd cluster rm [SERVER_NAME]` 方式行移除。

## 總結

本實驗，可以讓使用者清楚的讓 ArgoCD 整合第三方 Kubernetes 群集和變更密碼以及使用 ArgoCD CLI。ArgoCD 加入集群是重要的一步，否則無法對後續更高階的 ArgoCD Application 進行管理。後續會有一系列的文章來持續探索 ArgoCD。