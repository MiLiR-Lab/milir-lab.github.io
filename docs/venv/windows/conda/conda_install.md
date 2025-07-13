---
sidebar_position: 1
title: 安装环境
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 安装 Conda

主要介绍 Linux 平台下安装 Anaconda 和 Miniconda 的方法。

### 下载 Conda

进入 [Conda 官网](https://anaconda.org/)下载 Anaconda 或者 Miniconda 的安装包。

:::tip 下载方法
- 直接下载  
浏览器访问 [Conda 官网](https://anaconda.org/) 下载 Anaconda 或者 Miniconda 的安装包。

- wget 下载  
使用 `wget` 下载 Anaconda 或者 Miniconda 的安装包。

```
sudo apt install wget -y
wget <download_url>
```  
参数说明： `<download_url>` 替换成实际的下载地址。
:::

<Tabs>
  <TabItem value="Anaconda" label="Anaconda" default>
根据自己系统平台选择对应的安装包下载。
```
# Arm64
wget https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-aarch64.sh

# x86_64
wget https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-x86_64.sh
```  
  </TabItem>
  <TabItem value="Miniconda" label="Miniconda">
根据自己系统平台选择对应的安装包下载。
```
# Arm64
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh

# x86_64
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```  
  </TabItem>
</Tabs>

### 安装 Conda

在安装脚本所在目录打开终端，使用 `bash` 命令运行安装脚本。

```
bash <install_script>
```
参数说明： `<install_script>` 替换成实际的安装脚本。

安装过程需要按 `Enter` 继续安装步骤，按 `yes` 同意协议，最后建议输入 `yes` 同意打开 `shell` 终端自动初始化 Conda。

:::tip 关闭自动初始化
使用命令关闭打开 `shell` 终端自动初始化 Conda 操作。
```
conda config --set auto_activate_base false
``` 
:::

## 验证 Conda

完成 Conda 安装，重新打开终端，系统用户名前出现 `(base)` 表示 Conda 安装成功且处于 Conda 环境。

此外，可以使用 `conda --version` 命令查看 Conda 版本。

```
conda --version
```

若终端输出 Conda 对应的版本信息，说明 Conda 安装成功！