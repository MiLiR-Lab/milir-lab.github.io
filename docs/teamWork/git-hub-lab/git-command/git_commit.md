---
sidebar_position: 5
title: git commit
---

使用 `git commit` 命令可以将暂存区的文件提交到本地仓库。

## 提交暂存区文件

提交暂存区的文件到本地仓库。

新建 `example.md` 文件并添加内容，使用 `git add` 命令将文件添加到暂存区，使用 `git commit` 命令提交暂存区的文件到本地仓库，最后使用 `-m` 参数指定提交信息。

```
touch example.md
echo Hello, World! >> example.md
git add example.md
git commit -m "Add example.md"
```
