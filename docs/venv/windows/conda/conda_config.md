---
sidebar_position: 3
title: 基本配置
---

国内用户使用默认源创建环境和安装库比较慢，我们可以更换成国内清华源。

## 修改配置

使用命令新建或修改 `~/.condarc` 文件。

```
vi ~/.condarc
```

## 添加参数

将清华源配置添加到 `~/.condarc` 文件。

```
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
```

## 清除索引

使用 `clean` 命令清除索引。

```
conda clean -i
```