---
sidebar_position: 3
title: 基本配置
---

## 配置镜像源

国内无法访问 Docker Hub 或者访问速度较慢，可以尝试配置镜像源。

:::tip
镜像源可能会失效，教程只介绍 Linux 平台的配置方法！
:::

### 配置文件

新建或编辑 `~/.docker/daemon.json` 文件。

```
sudo mkdir -p /etc/docker
sudo nano /etc/docker/daemon.json
```

### 配置内容

添加下面内容到配置文件中。

```
{
  "registry-mirrors": [
    "https://docker.1panel.live",
    "https://docker.1ms.run",
    "https://dytt.online",
    "https://docker-0.unsee.tech",
    "https://lispy.org",
    "https://docker.xiaogenban1993.com",
    "https://666860.xyz",
    "https://hub.rat.dev",
    "https://docker.m.daocloud.io",
    "https://demo.52013120.xyz",
    "https://proxy.vvvv.ee",
    "https://registry.cyou"
  ]
}
```

### 重启 Docker 服务

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 配置代理

配置代理可以加快下载速度。

### 配置文件

新建或编辑 `/etc/systemd/system/docker.service.d/http-proxy.conf` 文件。

```
sudo mkdir -p /etc/systemd/system/docker.service.d
sudo nano /etc/systemd/system/docker.service.d/http-proxy.conf
```

### 配置内容

添加下面内容到配置文件中。

```
[Service]
Environment="HTTP_PROXY=http://127.0.0.1:7890/"
Environment="HTTPS_PROXY=http://127.0.0.1:7890/"
Environment="NO_PROXY=localhost,127.0.0.1"
```

:::tip
需要开启局域网代理，然后修改其中的代理 IP 和端口号！
:::

### 重启 Docker 服务

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```
