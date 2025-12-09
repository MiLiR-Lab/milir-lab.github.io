---
sidebar_position: 10
title: 网站搭建
---

## 配置 Git

### 设置用户信息

使用 `git config` 命令设置 Git 的用户名和邮箱地址。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
# git config --global user.name "你的用户名"
# git config --global user.email "你的邮箱地址"

git config --global user.name "Milir"
git config --global user.email "18179208773@163.com"
```

</Terminal>

### 生成 SSH 密钥

使用 `ssh-keygen` 命令生成 SSH 密钥对。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
# ssh-keygen -t ed25519 -C "你的邮箱地址"

ssh-keygen -t ed25519 -C "18179208773@163.com"
```

</Terminal>

出现提示后一直按回车，使用默认选项完成密钥生成。

### 添加 SSH 密钥到 GitHub

使用 `cat` 命令查看生成的公钥内容。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
cat ~/.ssh/id_ed25519.pub
```

</Terminal>

复制输出的公钥内容，登录 GitHub 账号，进入 `Settings` -> `SSH and GPG keys` 页面，点击 `New SSH key` 按钮。

<img
  src="/img/join-us/github-ssh-keys.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

在 `Title` 输入框中填写密钥名称，在 `Key` 输入框中粘贴公钥内容，点击 `Add SSH key` 按钮完成添加。

<img
  src="/img/join-us/github-add-ssh-key.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

## Fork 仓库

访问 [MiLiR Lab](https://github.com/MiLiR-Lab/milir-lab.github.io) 仓库页面，点击右上角的 `Fork` 按钮，将该仓库 Fork 到自己的 GitHub 账号下。

<img
  src="/img/join-us/git-fork.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

建议使用默认的仓库名称 `milir-lab.github.io`，然后点击 `Create fork` 按钮完成 Fork 操作。

<img
  src="/img/join-us/git-create-fork.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

## 拉取源码

复制 Fork 后的仓库地址，使用 `git clone` 命令将源码拉取到本地。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
git clone git@github.com:WuMinlong/milir-lab.github.io.git
```

</Terminal>

<img
  src="/img/join-us/git-clone-repo.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

## 运行网站

### 安装依赖

进入拉取下来的源码目录，使用 `yarn install` 命令安装项目依赖。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
cd milir-lab.github.io
yarn install
```

</Terminal>

### 启动网站

使用 `yarn start` 命令在本地运行 MiLiR Lab 网站。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
yarn start
```

</Terminal>

启动成功后，浏览器会自动访问 `http://localhost:3000/` 网址。

### 编译网站

运行 `yarn build` 命令编译网站，编译会在 `build` 目录下生成静态文件。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
yarn build
```

</Terminal>

### 预览网站

使用 `yarn serve` 命令预览编译后的网站。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
yarn serve
```

</Terminal>

:::tip 访问提示

同一局域网下设备可以访问 `IP:3000` 预览网站。

:::