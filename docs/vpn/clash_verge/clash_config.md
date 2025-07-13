---
sidebar_position: 3
title: 局域网配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

配置局域网代理，可以让同局域网下的设备访问外网。

:::tip
教程是同局域网下的 Windows 设备开启局域网代理，Linux 平台来配置代理访问外网。
:::

## 开启代理

进入 `Clash Verge` 的 `Settings / 设置` 选项，将 `System Proxy / 系统代理` 功能开启。

<img 
  src="/img/vpn/clash_use-04.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

## 设置局域网

进入 `Settings / 设置` 选项，将 `Allow Lan / 局域网连接` 功能开启。

<img 
  src="/img/vpn/clash_config-01.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

## 查看代理 IP

使用命令查看开启代理设备的 IP 地址。

```
ipconfig # Windows
ifconfig # Ubuntu
```

## 配置代理

<Tabs>
  <TabItem value="gra" label="图形化" default>

进入 `Settings -> Network` 选项，点击 `Network Proxy` 设置局域网代理。

<img 
  src="/img/vpn/clash_config-02.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

填写开启代理的设备 IP 地址和端口。

<img 
  src="/img/vpn/clash_config-03.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

  </TabItem>
  <TabItem value="ter" label="命令行">

打开终端，编辑 `/etc/profile` 文件。

```
sudo nano /etc/profile
```

添加下面内容到配置文件中。

```
export HTTP_PROXY=http://192.168.66.234:8899
export HTTPS_PROXY=http://192.168.66.234:8899
export NO_PROXY=localhost,127.0.0.1
```

重新加载配置文件。

```
source /etc/profile
```

若未生效，可以重启系统。
  </TabItem>
</Tabs>

## 测试代理

访问 [YouTube](https://www.youtube.com/) 进行外网测试。

<img 
  src="/img/vpn/clash_use-05.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>