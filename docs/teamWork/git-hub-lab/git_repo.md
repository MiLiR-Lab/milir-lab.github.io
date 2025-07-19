---
sidebar_position: 3
title: 创建仓库
---

Git 有两种创建仓库的方法：创建本地仓库和克隆远程仓库。

## 创建本地仓库

在本地创建一个空文件夹，然后在该文件夹下初始化仓库。

### 创建文件夹

在用户目录新建 `DemoRepo` 文件夹。

```
mkdir ~/DemoRepo
```

### 初始化仓库

在 `DemoRepo` 文件夹下初始化仓库，初始化仓库会在当前文件夹下创建一个 `.git` 目录，里面包含仓库的元数据和对象数据库。

```
cd ~/DemoRepo
git init
```

<details>
  <summary>终端输出</summary>
  <p>Initialized empty Git repository in /home/milir/DemoRepo/.git/</p>
</details>

## 克隆远程仓库

克隆远程仓库会是指将远程仓库的内容下载到本地，并自动关联到本地仓库。

克隆远程仓库有两种协议：SSH 协议和 HTTPS 协议。

### SSH 协议

SSH 协议需要先配置 SSH 密钥，然后使用 SSH 地址克隆远程仓库。

```
git clone git@github.com:MiLiR-Lab/milir-lab.github.io.git
```
