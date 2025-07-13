---
sidebar_position: 0
title: 安装环境
---

## 安装 WSL

以管理员身份运行 `PowerShell` 或 `cmd`，然后运行下面命令：该命令会自动启用 WSL 功能并安装最新的 Ubuntu 发行版。

```
wsl --install
```

<img 
  src="/img/wsl/wsl_install.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>  

:::warning 错误提示
若在安装最新的 Ubuntu 发行版出现 `由于未安装所需的特性，无法启动操作···` 错误提示！

<img 
  src="/img/wsl/wsl_install_error.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

解决办法：需要重启系统再运行 `wsl --install` 命令！
:::

## 首次使用

### 欢迎界面

安装 Ubuntu 完成后，会自动启动 WSL Settings 的欢迎界面！

<img 
  src="/img/wsl/wsl_welcomel.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

### 用户信息

终端需要您设置 Ubuntu 的用户名和密码。

<img 
  src="/img/wsl/wsl_set_user.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>