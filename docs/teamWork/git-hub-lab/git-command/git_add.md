---
sidebar_position: 4
title: git add
---

使用 `git add` 命令可以将工作区变化的文件添加到暂存区。

## 添加指定文件

添加指定文件到暂存区。

修改 `README.md` 文件后，使用 `git add README.md` 命令将文件添加到暂存区。

```
echo Hello, World! >> README.md
git add README.md
```

## 添加所有文件

添加所有变化的文件到暂存区。

```
touch example.md
echo Hello, World! >> README.md
git add .
```
