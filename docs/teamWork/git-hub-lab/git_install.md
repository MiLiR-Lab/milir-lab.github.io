---
sidebar_position: 0
title: 安装环境
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 安装 Git

<Tabs
  defaultValue="Windows"
  values={[
    {label: 'Windows', value: 'Windows'},
    {label: 'Ubuntu', value: 'Ubuntu'},
  ]}>
  <TabItem value="Windows">

 1. 下载 Git

  进入 [Git 官网](https://git-scm.com/downloads) 下载 Windows 平台软件包。

  <div style={{textAlign: 'center'}}>
    ![](/img/git/git-install-00.webp)
  </div>

 2. 安装 Git

  - 软件安装包
 
 以管理员身份运行 Git 的软件安装包。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-01.webp)</div>

  - 阅读协议

  阅读协议内容，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-02.webp)</div>

  - 安装位置

  建议选择软件默认安装位置，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-03.webp)</div>

  - 选择组件

  建议选择软件默认组件选项，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-04.webp)</div>

  - 开始菜单项

  选择是否创建开始菜单项，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-05.webp)</div>

  - Git默认器

  选择 Git 默认编辑器（默认是 Vim ,笔者选择 Visual Studio Code），然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-06.webp)</div>

  - 初始化分支名称

  选择新仓库默认初始化的分支名称（默认是 master，笔者修改成 main ），然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-07.webp)</div>

  - Path 环境变量

  调整 Git 的环境变量，建议选择软件推荐的选项 ( 支持命令行和第三方软件使用 Git )，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-08.webp)</div>

  - SSH 执行文件

  使用 Git 自带的 OpenSSH 客户端，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-09.webp)</div>

  - HTTPS 传输

  选择 Git 默认推荐的选项，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-10.webp)</div>
  
  - 行尾符转换

  选择 Git 默认推荐的选项，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-11.webp)</div>

  - 终端模拟器

  选择 Git 默认推荐的选项，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-12.webp)</div>

  - 默认行为（git pull）

  选择 Git 默认推荐的选项，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-13.webp)</div>

  - Git 凭证助手

  选择 Git 默认推荐的选项，然后点击 Next 进入下一步。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-14.webp)</div>

  - 额外配置

  选择 Git 默认推荐的选项，然后点击 Install 进入正式安装。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-15.webp)</div>

  - 完成安装

  等待安装完成后，点击 Finish 完成安装。

  <div style={{textAlign: 'center'}}>![](/img/git/git-install-16.webp)</div>
  <div style={{textAlign: 'center'}}>![](/img/git/git-install-17.webp)</div>

  </TabItem>

  <TabItem value="Ubuntu">

  - 安装 Git

  ```
  sudo apt update
  sudo apt install git -y
  ```

  </TabItem>
</Tabs>

## 验证 Git

打开系统终端，输入以下命令查看 Git 版本。

```
git --version
```