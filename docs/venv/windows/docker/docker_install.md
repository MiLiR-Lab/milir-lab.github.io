---
sidebar_position: 1
title: 安装环境
---

## 安装 Docker

主要介绍 Linux 平台下安装 Docker 的方法。

### 下载安装脚本

使用 `curl` 命令下载 Docker 官方提供的安装脚本。

```
sudo apt update
sudo apt install curl -y
sudo curl -fsSL https://get.docker.com -o get-docker.sh
```

### 运行安装脚本

使用 `bash` 命令运行安装脚本。

```
sudo bash get-docker.sh
```

<details>
  <summary>终端输出</summary>
  <p>
```
# Executing docker install script, commit: 7040dd2bf115a359317b1de84de611aeabcb7bc2

WSL DETECTED: We recommend using Docker Desktop for Windows.
Please get Docker Desktop from https://www.docker.com/products/docker-desktop/


You may press Ctrl+C now to abort this script.
+ sleep 20
+ sh -c 'apt-get -qq update >/dev/null'
+ sh -c 'DEBIAN_FRONTEND=noninteractive apt-get -y -qq install ca-certificates curl >/dev/null'
+ sh -c 'install -m 0755 -d /etc/apt/keyrings'
+ sh -c 'curl -fsSL "https://download.docker.com/linux/ubuntu/gpg" -o /etc/apt/keyrings/docker.asc'
+ sh -c 'chmod a+r /etc/apt/keyrings/docker.asc'
+ sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu noble stable" > /etc/apt/sources.list.d/docker.list'
+ sh -c 'apt-get -qq update >/dev/null'
+ sh -c 'DEBIAN_FRONTEND=noninteractive apt-get -y -qq install docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-ce-rootless-extras docker-buildx-plugin docker-model-plugin >/dev/null'
+ sh -c 'docker version'
Client: Docker Engine - Community
 Version:           28.3.2
 API version:       1.51
 Go version:        go1.24.5
 Git commit:        578ccf6
 Built:             Wed Jul  9 16:13:45 2025
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          28.3.2
  API version:      1.51 (minimum version 1.24)
  Go version:       go1.24.5
  Git commit:       e77ff99
  Built:            Wed Jul  9 16:13:45 2025
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.7.27
  GitCommit:        05044ec0a9a75232cad458027ca83437aae3f4da
 runc:
  Version:          1.2.5
  GitCommit:        v1.2.5-0-g59923ef
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

================================================================================

To run Docker as a non-privileged user, consider setting up the
Docker daemon in rootless mode for your user:

    dockerd-rootless-setuptool.sh install

Visit https://docs.docker.com/go/rootless/ to learn about rootless mode.


To run the Docker daemon as a fully privileged service, but granting non-root
users access, refer to https://docs.docker.com/go/daemon-access/

WARNING: Access to the remote API on a privileged Docker daemon is equivalent
         to root access on the host. Refer to the 'Docker daemon attack surface'
         documentation for details: https://docs.docker.com/go/attack-surface/

================================================================================
```
  </p>
</details>

## 验证 Docker

完成 Docker 安装，使用 `--version` 参数查看 Docker 版本。

```
docker --version
```

若终端输出 Docker 对应的版本信息，说明 Docker 安装成功！

## 设置 Docker

添加当前系统用户对 Docker 的访问权限：不需要使用 `sudo` 命令就可以使用 Docker 命令。

```
sudo usermod -aG docker $USER
newgrp docker
```