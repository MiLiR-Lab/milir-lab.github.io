---
sidebar_position: 0
title: 安装环境
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

主要介绍 Windows 和 Linux 平台的安装方法。

## 下载 Clash Verge

进入 GitHub 的 [Clash Verge](https://github.com/clashdownload/Clash_Verge/releases) 发布页面，下载对应平台的安装包。

| 平台     | 文件格式 |
| :------ | :------ |
| Windows | .exe    |
| Linux   | .deb    |

## 安装 Clash Verge

<Tabs>
  <TabItem value="Windows" label="Windows" default>
进入 Clash Verge 的下载目录，以管理员身份打开 Clash.Verge_xxx_x64-setup.exe 进行安装。

- 安装界面

<img 
  src="/img/vpn/clash_install-01.webp" 
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>
- 安装位置

<img 
  src="/img/vpn/clash_install-02.webp" 
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>
- 开始安装

<img 
  src="/img/vpn/clash_install-03.webp" 
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>
- 等待安装

<img 
  src="/img/vpn/clash_install-04.webp" 
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>
- 完成安装

<img 
  src="/img/vpn/clash_install-05.webp" 
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

  </TabItem>
  <TabItem value="Linux" label="Linux">

进入 Clash Verge 的下载目录，使用命令安装 Clash Verge。

```
sudo apt install ./clash-verge_x.x.x_amd64.deb
```

  </TabItem>
</Tabs>

## 使用 Clash Verge

<Tabs>
  <TabItem value="Windows" label="Windows" default>
双击桌面的 `Clash Verge` 图标即可打开 Clash Verge。
  </TabItem>
  <TabItem value="Linux" label="Linux">
使用 `clash-verge` 命令打开 Clash Verge。

:::warning 注意事项
启动 Clash Verge 界面白屏（独显电脑），可以终端使用下面命令启动或者修改桌面应用文件。

- 修改启动命令

```
WEBKIT_DISABLE_COMPOSITING_MODE=1 clash-verge
```

- 修改桌面应用

修改桌面图标文件 `clash_verge.desktop`

```
sudo nano /usr/share/applications/clash-verge.desktop
```

修改文件内容，添加 `WEBKIT_DISABLE_COMPOSITING_MODE=1`

```
Exec=WEBKIT_DISABLE_COMPOSITING_MODE=1 clash-verge
```
:::
  </TabItem>
</Tabs>

<img 
  src="/img/vpn/clash_install-06.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>