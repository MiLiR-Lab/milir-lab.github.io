---
sidebar_position: 4
title: 创建仓库
---

Git 有两种创建仓库的方法：创建本地仓库和克隆远程仓库。

## 创建本地仓库

在本地创建一个空文件夹，然后在该文件夹下初始化仓库。

### 创建文件夹

在用户目录新建 `git_example` 文件夹。

```
mkdir ~/git_example
```

### 初始化仓库

在 `git_example` 文件夹下初始化仓库，初始化仓库会在当前文件夹下创建一个 `.git` 目录，里面包含仓库的元数据和对象数据库。

```
cd ~/git_example
git init
```

<details>
  <summary>终端输出</summary>
  <p>
  ```
  Initialized empty Git repository in /home/milir/git_example/.git/
  ```
  </p>
</details>

## 克隆远程仓库

克隆远程仓库会是指将远程仓库的内容下载到本地，并自动关联到本地仓库。

克隆远程仓库有两种协议：HTTPS 协议和 SSH 协议。

### HTTPS 协议

HTTPS 协议需要先配置 SSH 密钥，然后使用 HTTPS 地址克隆远程仓库。

```
git clone https://github.com/MiLiR-Lab/git_example.git
```

<details>
  <summary>终端输出</summary>
  <p>
```
Cloning into 'git_example'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (3/3), done.
```
  </p>
</details>

### SSH 协议

SSH 协议需要先配置 SSH 密钥，然后使用 SSH 地址克隆远程仓库。

:::tip SSH 密钥

配置 SSH 密钥请参考 [SSH 密钥](./git_ssh_key.md) 教程

:::

```
git clone git@github.com:MiLiR-Lab/git_example.git
```
