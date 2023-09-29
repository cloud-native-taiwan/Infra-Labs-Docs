---
description: ""
---

# Helm Chart 整合以 Quarkus 為例

Helm 是一個管理 Kubernetes 資源的打包工具，其產出單元可以稱為 `charts`，類似於容器映像檔或是 Ubuntu 中的 apt 管理工具，因此它是可以被建立或是刪除。其同時也是 CNCF [Application Definition & Image Build](https://landscape.cncf.io/card-mode?category=application-definition-image-build&grouping=category) 中的一員。常見類似的有 [Kustomize](https://kustomize.io/) 等。

一般規劃一個服務要部署在 Kubernetes 上時也許會定義如下資源。但對於要退回或是修改都會維護這些大量資源，其對於發布的應用程式沒有版本控制的概念。
- Deployment
- Service
- Ingress
- Secret

Helm 可以幫助我們完成這些任務，以方便管理應用程式資源和發布的生命週期，並統一管理、配置和更新這些 Kubernetes 的資源檔案
- 發布和套用一套模板
- 將資源作為一個 charts 來管理
- 倉庫儲存這些 charts

透過本文章會學習到以下：
- 使用 charts 管理部署至 Kubernetes 資源
- charts 整合 Kubeconform 驗證 Kubernetes 部署資源
- charts 整合 kube-score 實現 yaml 檔案靜態掃描
- charts 單元測試
- charts 整合 helm-docs 產生文件
- charts 推送以 Docker Hub 中 Registry 為例
- helm 指令使用

此文章範例來源程式碼可以至此[連結](https://github.com/CCH0124/quarkus-demo/tree/main/helm-demo)

## 實驗環境

- OS: Windows 11 WSL (Ubuntu 22.04)
- Docker Engine: 23.0.5
- k3d version: v5.4.9
- kubectl version: v1.27.1
- Helm version: v3.11.3
- kube-score version: v1.17.0
- kubeconform version: v0.6.3
- helm-docs version: v1.11.0

## 建立 Helm Chart

使用 `helm create <name>` 指令建立一個 `charts`，如下:

```bash
$ helm create web-app
Creating web-app
```

此時會建立一些基礎的資源，更詳細的 `charts` 結構內容可參閱其官方[文件](https://helm.sh/docs/topics/charts/)。

```bash
.
└── web-app
    ├── Chart.yaml # chart 相關資訊(版本號等)
    ├── charts # 依賴其它 chart 的目錄
    ├── templates # 用來產生 Kubernetes 資源，會與定義的值資源整合
    │   ├── NOTES.txt
    │   ├── _helpers.tpl
    │   ├── deployment.yaml
    │   ├── hpa.yaml
    │   ├── ingress.yaml
    │   ├── service.yaml
    │   ├── serviceaccount.yaml
    │   └── tests
    │       └── test-connection.yaml
    └── values.yaml
```

因為範例的應用程式需要 `clusterrole` 等其它資源，因此有多定義一些資源。`charts` 基礎資源只是給了部署至 Kubernetes 資源一些基礎結構，應當依照需求自行設計。

`_helpers.tpl` 這個檔案可以定義共用的模板，以此範例來說定義了一個共用註解區塊的方法，如下。該 `web-app.annotation` 是方法名稱，其用 `define` 關鍵字進行定義。

```yaml
{{/* # 註解區塊
common annotation
*/}}
{{- define "web-app.annotation" -}} # 
org.cch.com/owner: cch
org.cch.com/organize: CCH Tech
{{- end }}
```

`web-app.annotation` 將其使用於 `deployment.yaml` 中的 `metadata.annotations`，結果如下。

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: {{ include "web-app.fullname" . }}
  labels:
    {{- include "web-app.labels" . | nindent 4 }}
  annotations:
    {{- include "web-app.annotation" . | nindent 4 }}
    {{- with .Values.deploymentAnnotations }}
      {{- toYaml . | nindent 4 }}
    {{- end }}
spec:
  {{- if not .Values.autoscaling.enabled }}
  replicas: {{ .Values.replicaCount }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "web-app.selectorLabels" . | nindent 6 }}
  template:
    metadata:
      annotations:
      {{- if .Values.app.properties }}
      checksum/config: {{ include (print $.Template.BasePath "/configmap.yaml") . | sha256sum }}
      {{- end }}
      {{- with .Values.podAnnotations }}
        {{- toYaml . | nindent 8 }}
      {{- end }}
      labels:
        {{- include "web-app.selectorLabels" . | nindent 8 }}
    spec:
      {{- with .Values.imagePullSecrets }}
      imagePullSecrets:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      serviceAccountName: {{ include "web-app.serviceAccountName" . }}
      securityContext:
        {{- toYaml .Values.podSecurityContext | nindent 8 }}
      containers:
        - name: {{ .Chart.Name }}
          securityContext:
            {{- toYaml .Values.securityContext | nindent 12 }}
          image: "{{ .Values.image.repository }}:{{ .Values.image.tag | default .Chart.AppVersion }}"
          imagePullPolicy: {{ .Values.image.pullPolicy }}
          ports:
            - name: http
              containerPort: {{ .Values.service.port }}
              protocol: TCP
          env:
            - name: KUBE_POD_NAME 
              valueFrom: 
                fieldRef: 
                  fieldPath: metadata.name
            - name: KUBE_NAMESPACE
              valueFrom: 
                fieldRef: 
                  fieldPath: metadata.namespace
          {{- with .Values.extraEnv }}
            {{- toYaml . | nindent 12 }}
          {{- end }}
          {{- with .Values.extraEnvFrom }}
          envFrom:
            {{- toYaml . | nindent 12 }}
          {{- end }}
          {{- with .Values.livenessProbe }}
          livenessProbe:
            {{- tpl (toYaml .) $ | nindent 12 }}
          {{- end }}
          {{- with .Values.readinessProbe }}
          readinessProbe:
            {{- tpl (toYaml .) $ | nindent 12 }}
          {{- end }}
          {{- with .Values.lifecycle }}
          lifecycle:
            {{- toYaml . | nindent 12 }}
          {{- end }}
          resources:
            {{- toYaml .Values.resources | nindent 12 }}
      {{- with .Values.nodeSelector }}
      nodeSelector:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.affinity }}
      affinity:
        {{- toYaml . | nindent 8 }}
      {{- end }}
      {{- with .Values.tolerations }}
      tolerations:
        {{- toYaml . | nindent 8 }}
      {{- end }}
```

這邊使用 `include` 函式將其 `web-app.annotation` 模板引入，並使用 `.` 將其作為一個值，最後將結果往 `indent ` 函示傳入。Helm 提供多種的模板函數，有興趣者可以至此官方[文件](https://helm.sh/docs/howto/charts_tips_and_tricks/)進行查看。

當模板定義好之後，必須將其填充資料，否則無法正常被 Kubernetes 執行。在預設上會使用 `values.yaml` 進行填充。

以上面的 `deployment.yaml` 模板為例，執行以下，可以看見值被 `values.yaml` 填充。

```bash
# -s 指定某個要被轉譯的模板
# -f 指定對模板進行填充的 values yaml
$ helm template ./ -s templates/deployment.yaml -f values.yaml 
---
# Source: web-app/templates/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: release-name-web-app
  labels:
    helm.sh/chart: web-app-0.1.0
    app.kubernetes.io/name: web-app
    app.kubernetes.io/instance: release-name
    app.kubernetes.io/version: "1.16.0"
    app.kubernetes.io/managed-by: Helm
  annotations:
    org.cch.com/owner: cch
    org.cch.com/organize: CCH Tech
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: web-app
      app.kubernetes.io/instance: release-name
  template:
    metadata:
      annotations:
      checksum/config: 9370cee06587dc819f556fef23ae74570f025b5f5570ab3188bd3007ff0828f0
      labels:
        app.kubernetes.io/name: web-app
        app.kubernetes.io/instance: release-name
    spec:
      serviceAccountName: web
      securityContext:
        fsGroup: 185
        runAsNonRoot: true
      containers:
        - name: web-app
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop:
              - ALL
            readOnlyRootFilesystem: false
            runAsGroup: 185
            runAsUser: 185
          image: "egistry.hub.docker.com/cch0124/helm-demo:latest"
          imagePullPolicy: IfNotPresent
          ports:
            - name: http
              containerPort: 8080
              protocol: TCP
          env:
            - name: KUBE_POD_NAME 
              valueFrom: 
                fieldRef: 
                  fieldPath: metadata.name
            - name: KUBE_NAMESPACE
              valueFrom: 
                fieldRef: 
                  fieldPath: metadata.namespace
          livenessProbe:
            httpGet:
              path: /q/health/live
              port: http
              scheme: HTTP
            initialDelaySeconds: 60
            periodSeconds: 30
            successThreshold: 1
            timeoutSeconds: 10
          readinessProbe:
            httpGet:
              path: /q/health/ready
              port: http
              scheme: HTTP
            initialDelaySeconds: 60
            periodSeconds: 30
            successThreshold: 1
            timeoutSeconds: 10
          lifecycle:
            preStop:
              exec:
                command:
                - sh
                - -c
                - sleep 10
          resources:
            limits:
              cpu: 100m
              memory: 256Mi
            requests:
              cpu: 10m
              memory: 256Mi
```

Helm 透過這種設計做到了 Kubernetes 原生無法管理 `yaml` 的問題。到這邊可以了解模板如何轉譯，但在轉譯前可以對 `charts` 進行格式上驗證，驗證模板中的格式是否正確，但此階段無法確保轉譯出來的 Kubernetes 資源可被使用。

```bash
$ helm lint ./ -f values.yaml 
==> Linting ./
[INFO] Chart.yaml: icon is recommended

1 chart(s) linted, 0 chart(s) failed
```

## Helm charts 整合 Kubeconform

當一個 `charts` 被定義好之後，應當驗證其模板轉譯出來 `yaml` 的完整性。[Kubeconform](https://github.com/yannh/kubeconform) 是一個驗證工具 Kubernetes `yaml` 資源的工具，可以將其導入 CI 流程。

本實驗是用 ubuntu 環境直接安裝，其它方式可參閱此[連結](https://github.com/yannh/kubeconform#installation)

```bash
$ wget https://github.com/yannh/kubeconform/releases/download/v0.6.3/kubeconform-linux-amd64.tar.gz
$ tar xf kubeconform-linux-amd64.tar.gz
$ sudo mv kubeconform /usr/local/bin
```

驗證方式很簡單的使用，可以透過 `helm template` 產生出期望的部署的 `yaml` 檔案，再透過 `Kubeconform` 驗證。

驗證過程會建議，指定 Kubernetes 版本來進行驗證，Kubernetes 每個版本的 API 會有所不同，這樣可以明確知道 `charts` 可以在哪個環境運行。避免 Kubernetes 升級後帶來的災難。

```bash
$ helm template --skip-tests --kube-version v1.23.0 ./ -f ci/values-analysis.yaml | kubeconform --summary -kubernetes-version 1.23.0
Summary: 8 resources found parsing stdin - Valid: 8, Invalid: 0, Errors: 0, Skipped: 0
```

如果此時，想使用 1.26.0 版本的 Kubernetes 環境驗證會發現錯誤。這是因為 1.23.0 版本支援 `autoscaling/v2beta1`，但 1.26.0 官方認為他已經可以穩定運行所以變更為 `autoscaling/v2`。

```bash
$ helm template --skip-tests --kube-version v1.26.0 ./ -f ci/values-analysis.yaml | kubeconform --summary -kubernetes-version 1.26.0
stdin - HorizontalPodAutoscaler release-name-web-app failed validation: could not find schema for HorizontalPodAutoscaler
Summary: 8 resources found parsing stdin - Valid: 7, Invalid: 0, Errors: 1, Skipped: 0
```

這驗證結果要有更詳細的內容可以加入 `-output` 參數來指定格式，其支援的有 json、junit 與 tap，而 text 為預設 

```bash
$ helm template --skip-tests ./ -f ci/values-analysis.yaml | kubeconform -kubernetes-version 1.23.0  -output junit
<testsuites name="kubeconform" time="1.137183422" tests="8" failures="0" disabled="0" errors="0">
  <testsuite name="stdin" id="1" tests="8" failures="0" errors="0" disabled="0" skipped="0">
    <testcase name="release-name-web-app" classname="ConfigMap@v1" time="0"></testcase>
    <testcase name="default/release-name-web-app" classname="ClusterRole@rbac.authorization.k8s.io/v1" time="0"></testcase>
    <testcase name="release-name-web-app" classname="ClusterRoleBinding@rbac.authorization.k8s.io/v1" time="0"></testcase>
    <testcase name="web" classname="ServiceAccount@v1" time="0"></testcase>
    <testcase name="release-name-web-app" classname="Service@v1" time="0"></testcase>
    <testcase name="release-name-web-app" classname="Ingress@networking.k8s.io/v1" time="0"></testcase>
    <testcase name="release-name-web-app" classname="HorizontalPodAutoscaler@autoscaling/v2beta1" time="0"></testcase>
    <testcase name="release-name-web-app" classname="Deployment@apps/v1" time="0"></testcase>
  </testsuite>
</testsuites>
```

這邊簡易了使用其 `kubeconform` 操作，預設上環境常常可能會有非原始 Kubernetes 資源的 CRD，如果要做驗證的話可以 `-ignore-missing-schemas` 掉或是用 `-schema-location` 方式去做處理這部分可以參閱[連結](https://github.com/yannh/kubeconform#overriding-schemas-location)。

## Helm charts 整合 kube-score

對於驗證 `yaml` 完整性來說可能還不夠，如果想要進階的對物件資源進行驗證可以使用 [kube-score](https://github.com/zegl/kube-score) 來實現，其輸出內容會是推薦可實踐的內容，可能相關於安全部分或是可靠性部分。同樣的可以將其導入 CI 流程來強化 charts 所轉譯物件是否夠強壯。

本實驗是用 ubuntu 環境直接安裝，如下:

```bash
$ wget https://github.com/zegl/kube-score/releases/download/v1.17.0/kube-score_1.17.0_linux_amd64.tar.gz
$ tar xf kube-score_1.17.0_linux_amd64.tar.gz
$ sudo mv kube-score /usr/local/bin
```

有興趣者可以藉由[官方網站](https://kube-score.com/)位置進行體驗。

這邊同樣的用 `helm template` 方式產生 `yaml` 資源，並透過 `kube-score` 進行掃描

```bash
$ helm template --skip-tests --kube-version v1.23.0 ./ -f ci/values-analysis.yaml | kube-score score --kubernetes-version "v1.23" -o ci -
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-ephemeral-storage-request-equals-limit is ignored
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment: Pod Topology Spread Constraints
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-memory-requests-equal-limits is ignored
[CRITICAL] release-name-web-app apps/v1/Deployment: (web-app) Ephemeral Storage limit is not set
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-ports-check is ignored
[CRITICAL] release-name-web-app apps/v1/Deployment: (web-app) The container is running with a low user ID
[CRITICAL] release-name-web-app apps/v1/Deployment: (web-app) The container running with a low group ID
[CRITICAL] release-name-web-app apps/v1/Deployment: (web-app) The pod has a container with a writable root filesystem
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-seccomp-profile is ignored
[CRITICAL] release-name-web-app apps/v1/Deployment: (web-app) ImagePullPolicy is not set to Always
[OK] release-name-web-app apps/v1/Deployment
[CRITICAL] release-name-web-app apps/v1/Deployment: The pod does not have a matching NetworkPolicy
[OK] release-name-web-app apps/v1/Deployment
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-resource-requests-equal-limits is ignored
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-cpu-requests-equal-limits is ignored
[CRITICAL] release-name-web-app apps/v1/Deployment: (web-app) Image with latest tag
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment
[CRITICAL] release-name-web-app apps/v1/Deployment: No matching PodDisruptionBudget was found
[WARNING] release-name-web-app apps/v1/Deployment: Deployment does not have a host podAntiAffinity set
[OK] release-name-web-app autoscaling/v2beta1/HorizontalPodAutoscaler
[OK] release-name-web-app autoscaling/v2beta1/HorizontalPodAutoscaler
[OK] release-name-web-app autoscaling/v2beta1/HorizontalPodAutoscaler
[OK] release-name-web-app networking.k8s.io/v1/Ingress
[OK] release-name-web-app networking.k8s.io/v1/Ingress
[OK] release-name-web-app networking.k8s.io/v1/Ingress
[OK] release-name-web-app v1/Service
[OK] release-name-web-app v1/Service
[OK] release-name-web-app v1/Service
[OK] release-name-web-app v1/Service
```

這邊發現一些 `CRITICAL` 訊息，這表示 `kube-score` 建議你要做像是不使用 latest 映像檔標籤或是希望有 `PodDisruptionBudget` 的物件等。在 CI 中出現了 `CRITICAL` 會是以不通過收場。如果假設在環境上沒有打算實現 `PodDisruptionBudget` 或是 `NetworkPolicy` 資源，我們可以透過 `--disable-ignore-checks-annotations` 或是 Kubernetes 中 `annotations` 欄位使用 `kube-score/ignore` 來實現必驗證的動作，官方提供的[清單](https://github.com/zegl/kube-score/blob/master/README_CHECKS.md)。

這邊在 `ci/values-analysis.yaml` 多新增了以下的定義來決策 `kube-score` 要啟用哪些檢查或是關閉檢查，已關閉來說避開了 `NetworkPolicy`、`securityContext` 的 user 和 group ID 檢查。

```yaml
deploymentAnnotations:
  kube-score/ignore: pod-networkpolicy,container-security-context-user-group-id,container-security-context-readonlyrootfilesystem,container-ephemeral-storage-request-and-limit,deployment-has-poddisruptionbudget
  kube-score/enable: container-ports-check
```

最後，在驗證一次沒有出現 `CRITICAL` 警告，就可以通過檢查。要關閉什麼檢查，這取決於團隊設計的架構，也不應當略過一些基本的檢查像是 `securityContext` 設定。

```bash
$ helm template --skip-tests --kube-version v1.23.0 ./ -f ci/values-analysis.yaml | kube-score score --kubernetes-version "v1.23" -o ci -
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-resource-requests-equal-limits is ignored
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because pod-networkpolicy is ignored
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-security-context-user-group-id is ignored
[OK] release-name-web-app apps/v1/Deployment
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-security-context-readonlyrootfilesystem is ignored
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-seccomp-profile is ignored
[OK] release-name-web-app apps/v1/Deployment
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-memory-requests-equal-limits is ignored
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-ephemeral-storage-request-equals-limit is ignored
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment: Pod Topology Spread Constraints
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-cpu-requests-equal-limits is ignored
[OK] release-name-web-app apps/v1/Deployment
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because container-ephemeral-storage-request-and-limit is ignored
[SKIPPED] release-name-web-app apps/v1/Deployment: Skipped because deployment-has-poddisruptionbudget is ignored
[WARNING] release-name-web-app apps/v1/Deployment: Deployment does not have a host podAntiAffinity set
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app apps/v1/Deployment
[OK] release-name-web-app autoscaling/v2beta1/HorizontalPodAutoscaler
[OK] release-name-web-app autoscaling/v2beta1/HorizontalPodAutoscaler
[OK] release-name-web-app autoscaling/v2beta1/HorizontalPodAutoscaler
[OK] release-name-web-app networking.k8s.io/v1/Ingress
[OK] release-name-web-app networking.k8s.io/v1/Ingress
[OK] release-name-web-app networking.k8s.io/v1/Ingress
[OK] release-name-web-app v1/Service
[OK] release-name-web-app v1/Service
[OK] release-name-web-app v1/Service
[OK] release-name-web-app v1/Service
```

## charts 單元測試

上面驗證了 `charts` 和 `yaml` 資源，如果想更要在貼近一點現實可以透過單元測試方式驗證轉譯的物件內容是不是你期望在 Kubernets 上運行的內容。這邊使用 [helm-unittest](https://github.com/helm-unittest/helm-unittest) 套件來進行單元測試。

他屬於 Helm 的套件，因此可以使用 `helm plugin` 方式安裝

```bash
$ helm plugin install https://github.com/helm-unittest/helm-unittest.git
```

一開始在 `charts` 的目錄下建立 `tests` 目錄，並把該目錄新增自 `.helmignore` 中。要觸發測試可以使用 `helm unittest CHART_NAME`下面是一個測試完成的結果，預設格式是 `XUnit`，這可以使用 `-t` 參數進行替換，可以是 JUnit、NUnit 或 XUnit。

```bash
$ helm unittest web-app/

### Chart [ web-app ] web-app/

 PASS  test cluster role        web-app/tests/clusterrole_test.yaml
 PASS  test clusterrolebinding  web-app/tests/clusterrolebinding_test.yaml
 PASS  test configMap   web-app/tests/configmap_test.yaml
 PASS  test deployment  web-app/tests/deployment_test.yaml
 PASS  test service     web-app/tests/service_test.yaml
 PASS  test serviceAccount      web-app/tests/serviceaccount_test.yaml

Charts:      1 passed, 1 total # 表示一個 charts 被測試
Test Suites: 6 passed, 6 total # 測試的場景有 6 個，通過 6 個
Tests:       6 passed, 6 total
Snapshot:    0 passed, 0 total
Time:        12.111921ms
```

如果要將結果輸出至 `CI` 的產物可以使用 `-o FILE_NAME` 方式，輸出的檔案會取決於在哪個目錄執行 `helm unittest`。

下面是一個測試 `deployment.yaml` 的內容。在 `asserts` 中用了 `equal`、`isNotEmpty`、`contains` 等關鍵字，但重點在於 `path` 其就是用來對應真實部署資源的欄位。

- path: 會是參照 Kubernetes 物件資源上內容，通常會精準指向某個物件中欄位。可以想像是透過 `kubectl get` 某物件然後使用 `jsonpath` 來自定義輸出。
- value: 期望 path 上的值，但這通常用於 Kubernetes 上的欄位指對應一個值使用。
- content: 類似於 path，但應用於多輸出的內容。

```yaml
suite: test deployment
values: # 測試時要使用的 values yaml
  - ../ci/values-test.yaml
templates: # 要被測試的模板
  - templates/deployment.yaml
  - templates/configmap.yaml
release: # 模擬 charts 部署時的內容
  name: test-release
  namespace: test
chart: # 模擬 charts 的版本和 app 版本
  version:  0.1.0+test
  appVersion: 1.16.0
tests:
  - it: should pass all kinds of assertion
    template: templates/deployment.yaml
    documentIndex: 0
    asserts: 
      - equal:
          path: metadata.labels["app.kubernetes.io/managed-by"]
          value: Helm
      - equal:
          path: metadata.labels["app.kubernetes.io/name"]
          value: web-app
      - equal:
          path: metadata.annotations["org.cch.com/owner"]
          value: cch
      - equal:
          path: metadata.annotations["org.cch.com/organize"]
          value: CCH Tech
      - isNotEmpty:
          path: spec.template.metadata.annotations["checksum/config"]
      - equal:
          path: spec.template.spec.containers[?(@.name == "web-app")].image
          value: registry.hub.docker.com/cch0124/helm-demo:v2.2.9
      - equal:
          path: spec.template.spec.serviceAccountName
          value: web
      - matchRegex:
          path: metadata.name
          pattern: ^.*-web-app$
      - contains:
          path: spec.template.spec.containers[?(@.name == "web-app")].ports
          content:
            containerPort: 8080
            protocol: TCP
            name: http
      - notContains:
          path: spec.template.spec.containers[?(@.name == "web-app")].ports
          content:
            containerPort: 80
      - isNotEmpty:
          path: spec.template.spec.containers[?(@.name == "web-app")].livenessProbe
      - isNotEmpty:
          path: spec.template.spec.containers[?(@.name == "web-app")].readinessProbe
      - isNotEmpty:
          path: spec.template.spec.containers[?(@.name == "web-app")].resources
      - isSubset:
          path: spec.template.spec.containers[?(@.name == "web-app")].securityContext
          content:
            capabilities:
              drop:
              - ALL
            readOnlyRootFilesystem: false
            allowPrivilegeEscalation: false
            runAsUser: 185
            runAsGroup: 185
      - isNotEmpty:
          path: spec.template.spec.containers[?(@.name == "web-app")].lifecycle
      - isSubset:
          path: spec.template.spec.securityContext
          content:
            fsGroup: 185
            runAsNonRoot: true
      - isKind:
          of: Deployment
      - isAPIVersion:
          of: apps/v1
```

更多的細節可以參照 helm-unittest 官方[文件](https://github.com/helm-unittest/helm-unittest/blob/main/DOCUMENT.md)。

## charts 整合 helm-docs 產生文件

是一個將 `charts` 中的資訊轉譯成 markdown 檔案的工具。生成的內容包含了 `Chart.yaml` 中的一些資訊或是 `values.yaml` 中定義的值內容，該內容會使用註解來進行解析。

轉譯 markdown 這流程是從 gotemplate 實作，相似於 `charts` 模板。預設上 helm-docs 有基本的樣式來做轉譯，當然也可以透過 `README.md.gotmpl` 檔案進行轉譯內容的定義。

```yaml
# {{ template "chart.name" . }}

![Version: {{ .Version }}](https://img.shields.io/badge/Version-{{ .Version | replace "-" "--" }}-informational?style=for-the-badge)
{{ if .Type }}![Type: {{ .Type }}](https://img.shields.io/badge/Type-{{ .Type }}-informational?style=for-the-badge) {{ end }}
{{ if .AppVersion }}![AppVersion: {{ .AppVersion }}](https://img.shields.io/badge/AppVersion-{{ .AppVersion | replace "-" "--" }}-informational?style=for-the-badge) {{ end }}

## {{ template "chart.name" . }} Chart Information


[Homepage]({{ template "chart.homepage" . }})

{{ template "chart.sourcesSection" . }}

{{ template "chart.maintainersSection" . }}


## Description

{{ template "chart.description" . }}


{{ template "chart.requirementsSection" . }}


{{ template "chart.valuesSection" . }}

```

`helm-docs` 的指令允許用 `-t` 指定模板檔案或是 `-f` 指定到 `charts` 中預設的 `values.yaml` 等，下方為指令所提供的參數。

```bash
$ helm-docs --help
helm-docs automatically generates markdown documentation for helm charts from requirements and values files

Usage:
  helm-docs [flags]

Flags:
  -b, --badge-style string           badge style to use for charts (default "flat-square")
  -c, --chart-search-root string     directory to search recursively within for charts (default ".")
  -g, --chart-to-generate strings    List of charts that will have documentation generated. Comma separated, no space. Empty list - generate for all charts in chart-search-root
  -u, --document-dependency-values   For charts with dependencies, include the dependency values in the chart values documentation
  -d, --dry-run                      don't actually render any markdown files just print to stdout passed
  -h, --help                         help for helm-docs
  -i, --ignore-file string           The filename to use as an ignore file to exclude chart directories (default ".helmdocsignore")
      --ignore-non-descriptions      ignore values without a comment, this values will not be included in the README
  -l, --log-level string             Level of logs that should printed, one of (panic, fatal, error, warning, info, debug, trace) (default "info")
  -o, --output-file string           markdown file path relative to each chart directory to which rendered documentation will be written (default "README.md")  
  -s, --sort-values-order string     order in which to sort the values table ("alphanum" or "file") (default "alphanum")
  -t, --template-files strings       gotemplate file paths relative to each chart directory from which documentation will be generated (default [README.md.gotmpl])
  -f, --values-file string           Path to values file (default "values.yaml")
      --version                      version for helm-docs
```

`helm-docs` 中可定義的轉譯模板可參考此官方[連結](https://github.com/norwoodj/helm-docs#markdown-rendering)，對於轉譯來說比較重要的參數是 `--chart-search-root` 和 `--template-files` 如果其提供的預設值不符合場景設計可以進行靈活上的調整。

下面是定義後的 `READEM.md.gotmpl`，使用上比較麻煩的部分就是 gotemplate 的語法，其它基本上看官方的文檔內容就可以組合出自己想要的格式內容。

```yaml
# {{ template "chart.name" . }}

![Version: {{ .Version }}](https://img.shields.io/badge/Version-{{ .Version | replace "-" "--" }}-informational?style=for-the-badge)
{{ if .Type }}![Type: {{ .Type }}](https://img.shields.io/badge/Type-{{ .Type }}-informational?style=for-the-badge) {{ end }}
{{ if .AppVersion }}![AppVersion: {{ .AppVersion }}](https://img.shields.io/badge/AppVersion-{{ .AppVersion | replace "-" "--" }}-informational?style=for-the-badge) {{ end }}

## {{ template "chart.name" . }} Chart Information


[Homepage]({{ template "chart.homepage" . }})

{{ template "chart.sourcesSection" . }}

{{ template "chart.maintainersSection" . }}


## Description

{{ template "chart.description" . }}


{{ template "chart.requirementsSection" . }}


{{ template "chart.valuesSection" . }}

```

上述的 `READEM.md.gotmpl` 比較重要的內容是 `values.yaml` 中所定義的值，因為這是給使用或是管理 `charts` 的人來做一個依據的參考。雖然透過 `chart.valuesSection` 模板來解析 `values.yaml` 內容，但如過沒針對 `values.yaml` 進行處理，則該模板也是沒意義的。那要如何定義有價值的內容呢，下面就來進行說明吧。

以 `image` 結構來說，在 `values.yaml` 中定義了以下內容

```yaml
image:
  # -- Image registry
  repository: registry.hub.docker.com/cch0124/helm-demo
  # -- Image pull policy
  pullPolicy: IfNotPresent
  # -- Overrides the image tag whose default is the chart appVersion.
  tag: "latest"
```

該內容上如果要讓欄位有描述，則可以在該欄位上以 `# --` 開頭並向後填寫要描述的註解，最後轉譯結果會如下

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| image.pullPolicy | string | `"IfNotPresent"` | Image pull policy |
| image.repository | string | `"registry.hub.docker.com/cch0124/helm-demo"` | Image registry |
| image.tag | string | `"latest"` | Overrides the image tag whose default is the chart appVersion. |

如果在 `values.yaml` 是沒有撰寫註解格式，則最後葉節點會被轉譯出來，但是描述部分就有些許空虛了。

```yaml
rbac:
  create: true
```

轉譯結果：

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| rbac.create | bool | `true` |  |

如果在 `values.yaml` 的根節點欄位撰寫註解，則葉節點不會被轉譯，會以根節點物件呈現。

```yaml
# -- Resource requests and limits for the application. Ref [kubernetes doc manage-resources-containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)
resources:
  limits:
    cpu: 100m
    memory: 256Mi
  requests:
    cpu: 10m
    memory: 256Mi
```

轉譯結果：

| Key | Type | Default | Description |
| --- | ---- | ------- | ----------- |
| resources | object | `{"limits":{"cpu":"100m","memory":"256Mi"},"requests":{"cpu":"10m","memory":"256Mi"}}` | Resource requests and limits for the application. Ref [kubernetes doc manage-resources-containers](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/) |

如果在 `values.yaml` 的根節點和葉節點定義註解如下，則葉節點有被註解會被轉譯，否則不會。

```yaml
# -- Configure the healthcheck for the application
livenessProbe:
  httpGet:
    # -- This is the liveness check endpoint. Can not overrid.
    path: /q/health/live
    port: http
    scheme: HTTP
  # @default -- Number of seconds after the container has started before startup, liveness or readiness probes are initiated. 
  initialDelaySeconds: 60
  # @default -- How often (in seconds) to perform the probe.
  periodSeconds: 30
  # @default -- Minimum consecutive successes for the probe to be considered successful after having failed.
  successThreshold: 1
  # @default -- Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1.
  timeoutSeconds: 10
```

轉譯結果：

| Key | Type | Default | Description |
| --- | ---- | ------- | ----------- |
| livenessProbe | object | `{"httpGet":{"path":"/q/health/live","port":"http","scheme":"HTTP"},"initialDelaySeconds":60,"periodSeconds":30,"successThreshold":1,"timeoutSeconds":10}` | Configure the healthcheck for the application |
| livenessProbe.httpGet.path | string | `"/q/health/live"` | This is the liveness check endpoint. Can not overrid. |

其還提供 `@default`、和 `@ignored` 等選項
- `@default` 如果不想包含在 values.yaml 中的預設值，或是一些計算的值可以使用
- `@ignored` 忽略某些值

整體來說你可以使用 `helm-docs` 產生一個可讀性的文件檔案，在某種程度上可以協助部署或是交接。但具體要如何呈現想要的內容則取決於團隊的共識。本文章範例的結果可以至此[連結](https://github.com/CCH0124/quarkus-demo/blob/main/helm-demo/helm-chart/web-app/README.md)

## 打包 charts 至 DockerHub

### 打包 charts

切換目錄至 `charts` 並使用 `helm package` 對 `charts` 進行打包，執行後當前目錄會有一個 `CHART_NAME-VERSION.tgz`  檔案。
```bash
$ helm package --version 0.0.1 ./
```

### 登入 Docker Hub 並推送

登入部分使用 Docker Hub 的 Personal Access Token (PAT) 進行，也推薦使用此方式。

```bash
$ export PAT=PERSONAL_ACCESS_TOKEN
$ export USERNAME=LOGIN_USERNAME
$ echo $PAT | docker login -u $USERNAME --password-stdin
```

推送 `charts` 至 Docker Hub，使用 `helm push` 並指定要推送的 `charts` 和推送目標。

```bash
$ helm push web-app-0.0.1.tgz oci://registry-1.docker.io/cch0124
Pushed: registry-1.docker.io/cch0124/web-app:0.0.1
Digest: sha256:10b324b17dc620974f715fd44e6743dbd068a6e0487d496a76d2781c81184199
```

## 部署與操作 Helm charts

### 部署

上個章節已經將 `charts` 推送至 Docker Hub 接著將使用它來拉取 `charts` 並部署至模擬的 Kubernetes 環境。

部署之前，可以藉由 `helm show` 來進行一些資訊查看。

```bash
# 查看 charts 所有訊息
$ helm show all oci://registry-1.docker.io/cch0124/web-app --version 0.0.1
```

直接進行部署，透過 `helm install`，預設為 `default` 的 `namespace`，下面資訊為部署後資料。

```bash
$ helm install web-app oci://registry-1.docker.io/cch0124/web-app --version 0.0.1
Pulled: registry-1.docker.io/cch0124/web-app:0.0.1
Digest: sha256:10b324b17dc620974f715fd44e6743dbd068a6e0487d496a76d2781c81184199
NAME: web-app
LAST DEPLOYED: Mon Sep 11 20:57:10 2023
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=web-app,app.kubernetes.io/instance=web-app" -o jsonpath="{.items[0].metadata.name}")
  export CONTAINER_PORT=$(kubectl get pod --namespace default $POD_NAME -o jsonpath="{.spec.containers[0].ports[0].containerPort}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl --namespace default port-forward $POD_NAME 8080:$CONTAINER_PORT
```

驗證部署結果與應用程式測試 API。

1. 驗證部署

對於 Helm 來說它是有 namespace 概念，因此在操作時須帶 `namespace`，從 `STATUS` 欄位可以看到是成功部署的。

```bash
$ helm list 
NAME    NAMESPACE       REVISION        UPDATED                                 STATUS          CHART           APP VERSION
web-app default         1               2023-09-11 20:57:10.735141112 +0800 CST deployed        web-app-0.0.1   1.16.0     
```

使用 `kubectl get` 資源驗證是否有正常運行。

```bash
$ kubectl get pods 
NAME                       READY   STATUS    RESTARTS   AGE
web-app-69d997c6ff-wvbwd   1/1     Running   0          3m18s
```

2. 測試 API

```bash
$ kubectl run mycurlpod --image=curlimages/curl -i --tty -- sh
$ curl -XGET http://web-app.default.svc.cluster.local:8080/hello
Hello from RESTEasy Reactive
```

### 更新 Helm chart

上個步驟在部署時，沒有部署到 `ingress`，這時使用 `helm upgrade` 進行。

下面為一個錯誤的更新，導致最後 `STATUS` 為 `failed`。

```bash
$ helm upgrade web-app oci://registry-1.docker.io/cch0124/web-app --version 0.0.1 --set ingress.enabled=true --set ingress.hosts[0].host=helm-demo.cch.com --set ingress.hosts[0].paths[0].pathType=Prefix
Pulled: registry-1.docker.io/cch0124/web-app:0.0.1
Digest: sha256:10b324b17dc620974f715fd44e6743dbd068a6e0487d496a76d2781c81184199
Error: UPGRADE FAILED: failed to create resource: Ingress.extensions "web-app" is invalid: spec.rules[0].http.paths[0].path: Invalid value: "": must be an absolute path
$ helm list
NAME    NAMESPACE       REVISION        UPDATED                                 STATUS  CHART           APP VERSION
web-app default         2               2023-09-11 21:18:27.328839062 +0800 CST failed  web-app-0.0.1   1.16.0 
```

修正後，已經成功更新一個版本，`REVISION` 變為 3，`ingress` 資源也被更新部署。在做更新時也推薦使用 `--atomic` 參數，這可幫助 `charts` 更新失敗後可以進行退回上一個版本。這邊使用的是 `--set` 方式同時也是可以使用 `-f` 來指定要轉譯模板的值，以優先順序來說 `--set` 為最高。

```bash
$ helm upgrade web-app oci://registry-1.docker.io/cch0124/web-app --version 0.0.1 --set ingress.enabled=true --set ingress.hosts[0].host=helm-demo.cch.com --set ingress.hosts[0].paths[0].pathType=Prefix --set ingress.hosts[0].paths[0].path=/ --atomic
Pulled: registry-1.docker.io/cch0124/web-app:0.0.1
Digest: sha256:10b324b17dc620974f715fd44e6743dbd068a6e0487d496a76d2781c81184199
Release "web-app" has been upgraded. Happy Helming!
NAME: web-app
LAST DEPLOYED: Mon Sep 11 21:21:14 2023
NAMESPACE: default
STATUS: deployed
REVISION: 3
TEST SUITE: None
NOTES:
1. Get the application URL by running these commands:
  http://helm-demo.cch.com/
```

更新後所建立的 `ingress`。同時在外部可以透過 `curl` 存取服務。

```bash
$ kubectl get ingress
NAME      CLASS     HOSTS               ADDRESS                 PORTS   AGE
web-app   traefik   helm-demo.cch.com   172.20.0.2,172.20.0.3   80      84s
$ curl http://helm-demo.cch.com:8080/cluster/namespace 
["default","kube-system","kube-public","kube-node-lease"]
```

### 回滾 charts

上個步驟暴露了 `API` 至 Kubernetes 集群外，如果想要讓其回到第一次無 `ingress` 狀態，可以使用 `helm rollback`

```bash
$ helm rollback web-app 
1  (App: 1.16.0, Chart: web-app-0.0.1)  2  (App: 1.16.0, Chart: web-app-0.0.1)  3  (App: 1.16.0, Chart: web-app-0.0.1)  
```

此時會多一個版本，詳細的資訊使用 `helm history`，且 `ingress` 也回到第一版本狀態。

```bash
$ helm history web-app
REVISION        UPDATED                         STATUS          CHART           APP VERSION     DESCRIPTION                                                                                                                                                                
1               Mon Sep 11 20:57:10 2023        superseded      web-app-0.0.1   1.16.0          Install complete                                                                                                                                                           
2               Mon Sep 11 21:18:27 2023        failed          web-app-0.0.1   1.16.0          Upgrade "web-app" failed: failed to create resource: Ingress.extensions "web-app" is invalid: spec.rules[0].http.paths[0].path: Invalid value: "": must be an absolute path
3               Mon Sep 11 21:21:14 2023        superseded      web-app-0.0.1   1.16.0          Upgrade complete                                                                                                                                                           
4               Mon Sep 11 21:31:32 2023        deployed        web-app-0.0.1   1.16.0          Rollback to 1
```

驗證結果，如下：
```bash
$ kubectl get ingress
No resources found in default namespace.
$ kubectl exec mycurlpod  -it /bin/sh
~ $ curl http://web-app.default.svc.cluster.local:8080/pod/list/name?namespace=default
["web-app-69d997c6ff-wvbwd","mycurlpod"]
~ $ curl http://web-app.default.svc.cluster.local:8080/pod/list/name?namespace=kube-system
["helm-install-traefik-crd-jgf8d","helm-install-traefik-hpt7l","svclb-traefik-c047adea-n9grs","traefik-6468fd4675-v56h5","svclb-traefik-c047adea-8phnq","local-path-provisioner-5f8bbd68f9-wcptd","coredns-5cfbb9f57c-ljsrl","metrics-server-d8ccb79c9-fcvc9"]
```

最後補充 `.helmignore`，將 `charts` 打包時請考慮把敏感資料忽略，避免機密外洩。

到這邊認識了 Helm 的概念：

- `Chart` 一個可以部署在 K8s Cluster 的檔案
- `Template` 組成 Kubernetes 資源
- `Values` Kubernetes 資源參數化
- `Release` Kubernetes Cluster 中部署的包
- `Push` 將 Chart 檔丟置倉庫
- `Install` 安裝一個 charts
- `Upgrade` 更改 Kubernetes 集群中的現有版本
- `Rollback` 回到以前部署的某一版本


## 總結

Helm 是一個可以解決 Kubernetes 部署資源的管理工具，但對於 `charts` 的模板在撰寫時學習曲線會比較高一些，畢竟要了解 gotemplate。而 `charts` 也應該被驗證或是掃描來提高可用性和安全性，來驗證你做了什麼和保護 `charts`。而 `charts` 另一個重要的是文件，有好的文件可以使得管理上更加輕鬆。此文章所提到的工具也不是唯一，每個團隊的使用都有自己選擇，但最後的目的都是要保護 `charts`。

另一方面，`charts` 可以被版控，也可以針對每個環境使用不同的 `values.yaml` 來做轉譯，減少了管理多環境的資源，同時對於現今的 GitOps 概念來說可以做一個很好的整合。