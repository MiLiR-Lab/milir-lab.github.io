---
sidebar_position: 7
title: git mv
---

使用 `git mv` 命令可以移动或者重命名文件。

## 重命名文件

重命名 `README.md` 文件为 `example.md`。

```
touch README.md
echo Hello, World! >> README.md
git add README.md
git mv README.md example.md
git commit -m "rename README.md to example.md"
```
