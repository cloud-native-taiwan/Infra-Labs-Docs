# Infra Labs OpenStack Deployment

:::note
Infra Labs 使用 Ansible Vault 加密含有機敏資訊的文件，新進管理員如需操作請詢問 Vault 密碼。
:::

## 前言  {#introduction}

本篇將會介紹如何部署 Infra Labs 提供 IaaS 的 OpenStack 部分。

Infra Labs 使用 OpenStack Kolla-Ansible 進行 OpenStack 部署，並且對其中的程式碼有做些許的改動。

## 安裝 Kolla-Ansible {#install}

Infra Labs 目前使用的 Kolla-Ansible 有進行些許更動，本段將介紹如何套用更動並且安裝 Kolla-Ansible。

更動與 Kolla-Ansible 設定檔接放置於 [infra-labs-kolla-ansible repository](https://github.com/cloud-native-taiwan/infra-labs-kolla-ansible)

更動為 git diff 檔案，要套用非常簡單，以下為下載 Kolla-Ansible、Infra Labs 更動，以及套用更動所需要的指令。

```bash
git clone https://github.com/openstack/kolla-ansible.git
git clone git@github.com:cloud-native-taiwan/infra-labs-kolla-ansible.git

cd kolla-ansible
git apply ../infra-labs-kolla-ansible/changes.diff
```

接下來需要安裝 Kolla-Ansible，可以稍微參考[官方文件](https://docs.openstack.org/kolla-ansible/latest/user/quickstart.html) 進行一些前置作業。

推薦將其安裝至 Python virtualenv 而非系統環境，以下指令須於 kolla-ansible 資料夾下執行。

```bash
pip install -r requirenments.txt
pip install 'ansible>=6,<8'

pip install .

kolla-ansible install-deps
```

## 升級 OpenStack 版本 {#upgrade}

升級 OpenStack 版本前，請查看 [Kolla-Ansible Release Notes](https://docs.openstack.org/releasenotes/kolla-ansible/unreleased.html)。在 Upgrade Notes 的部分通常有升級相關的重要資訊。

接下來檢查 Kolla-Ansible repo 中 `etc/kolla/globals.yml` 對比上一個版本是否有增加重要設定，如有，將新的設定加入至 `/etc/kolla/globals.yml`

下一步更新 `/etc/kolla/globals.yml` 中的版本資訊，對應至 Kolla image 的 tag

```yaml
openstack_release: "<image_tag>"
```

有時更新的時候有新的密碼產生，此時需要產生建立的密碼，以下為指令：

```bash
ansible-vault decrypt /etc/kolla/passwords.yml

cp /etc/kolla/passwords.yml passwords.yml.old
cp kolla-ansible/etc/kolla/passwords.yml passwords.yml.new
kolla-genpwd -p passwords.yml.new
kolla-mergepwd --old passwords.yml.old --new passwords.yml.new --final /etc/kolla/passwords.yml

ansible-vault encrypt /etc/kolla/passwords.yml
```

在更新之前建議先把新版本的 image 先 pull 下來以減少實際跑 Ansible 更新的時間。

```bash
kolla-ansible -i /etc/kolla/multinode pull --ask-vault-pass -v
```

最後跑檢查設定和更新的指令：

```bash
kolla-ansible -i /etc/kolla/multinode prechecks --ask-vault-pass -v
kolla-ansible -i /etc/kolla/multinode upgrade --ask-vault-pass -v
```

## 新增/移除節點 {#adding-and-removing-hosts}

新增移除節點請參考[官方文件](https://docs.openstack.org/kolla-ansible/latest/user/adding-and-removing-hosts.html)
