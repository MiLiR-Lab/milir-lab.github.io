---
sidebar_position: 1
title: 环境搭建
---

ROS 2(Robot Operating System 2) 是一个开源的机器人操作系统，提供了丰富的工具和库来支持机器人应用的开发。

教程主要介绍如何在 Ubuntu 24.04 上安装 ROS2 Jazzy 版本。

## 更新系统

建议系统在最新状态下安装 ROS2 Jazzy 版本。

终端输入命令更新软件源列表和升级已安装的软件包：

```bash
sudo apt update && sudo apt upgrade -y
```

:::tip
若系统有环境依赖问题，可以只更新软件源列表。

```bash
sudo apt update
```
:::

## 设置语言环境

确保系统的环境支持 UTF-8 编码；使用 `locale` 命令可以检查当前语言环境。

```bash
locale
```
若系统支持 UTF-8 编码，终端会输出类似下面信息：
```
LANG=C.UTF-8
LANGUAGE=
LC_CTYPE="C.UTF-8"
LC_NUMERIC="C.UTF-8"
LC_TIME="C.UTF-8"
LC_COLLATE="C.UTF-8"
LC_MONETARY="C.UTF-8"
LC_MESSAGES="C.UTF-8"
LC_PAPER="C.UTF-8"
LC_NAME="C.UTF-8"
LC_ADDRESS="C.UTF-8"
LC_TELEPHONE="C.UTF-8"
LC_MEASUREMENT="C.UTF-8"
LC_IDENTIFICATION="C.UTF-8"
LC_ALL=
```

:::tip
若系统语言环境不支持 UTF-8 编码，终端输入以下命令设置。
```bash
sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
sudo echo "export LANG=en_US.UTF-8" >> ~/.bashrc
source ~/.bashrc
```
:::

## 设置软件源

启用 `universe` 软件源，确保可以安装 ROS2 依赖包。

```bash
sudo apt install software-properties-common
sudo add-apt-repository universe
```

## 设置 ROS2 软件源

设置 ROS2 官方软件源。

```bash
sudo apt update && sudo apt install curl -y
export ROS_APT_SOURCE_VERSION=$(curl -s https://api.github.com/repos/ros-infrastructure/ros-apt-source/releases/latest | grep -F "tag_name" | awk -F\" '{print $4}')
curl -L -o /tmp/ros2-apt-source.deb "https://github.com/ros-infrastructure/ros-apt-source/releases/download/${ROS_APT_SOURCE_VERSION}/ros2-apt-source_${ROS_APT_SOURCE_VERSION}.$(. /etc/os-release && echo $VERSION_CODENAME)_all.deb"
sudo dpkg -i /tmp/ros2-apt-source.deb
```

## 安装 ROS2 开发工具

安装 ROS2 编译等工具。

```bash
sudo apt update && sudo apt install ros-dev-tools -y
```

## 安装 ROS2 Jazzy

建议安装 ROS2 Jazzy 桌面版，包含 ROS2 、Rviz2 等环境。

```bash
sudo apt install ros-jazzy-desktop -y
```

## 设置环境变量

### 临时生效

添加 ROS2 环境到当前终端，重开终端就需要运行该命令。

```bash
source /opt/ros/jazzy/setup.bash
```

### 永久生效（推荐）

自动添加 ROS2 环境到新终端，只需要在系统运行一次即可。

```bash
echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 验证 ROS2 环境

打开两个终端分别运行以下两条命令：若没有设置环境变量永久生效，你需要在每个终端输入临时生效的命令。

```bash
source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_cpp talker
```

```bash
source /opt/ros/jazzy/setup.bash
ros2 run demo_nodes_py listener
```