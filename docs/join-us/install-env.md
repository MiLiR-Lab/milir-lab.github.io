---
sidebar_position: 5
title: 环境搭建
---

## Git

Git 是一个免费的、开源的分布式版本控制系统。

### 安装 Git

访问 [Git 安装页面](https://git-scm.com/install/) ，根据自己的系统平台完成 Git 的安装。

<Tabs>
  <TabItem value="Windows" label="Windows" default>

1. 下载 Git

访问 [Git 的 Windows 平台下载页面](https://git-scm.com/install/windows)，下载 `Git-xxx.exe` 安装包。

2. 安装 Git

以管理员身份运行 `Git-xxx.exe` 安装包，按照安装向导完成安装。

- 许可协议

点击 `Next` 选项，接受许可协议。

<img
  src="/img/join-us/git-license.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 安装位置

选择 Git 的安装位置，建议使用默认位置，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-install-path.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 组件选项

选择需要安装的组件，建议使用默认设置，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-select-components.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 开始菜单文件夹

选择开始菜单文件夹，建议使用默认设置，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-start-menu-folder.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 默认编辑器

选择默认编辑器，可切换成常用的文本编辑器，默认是使用 Vim 作为文本编辑器，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-default-editor.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 默认分支名称

选择默认分支名称，建议修改为 `main` 作为默认分支名称，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-default-branch.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 调整 PATH 环境变量

选择调整 PATH 环境变量的方式，建议选择默认选项，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-adjust-path-environment-variable.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- SSH 执行程序

选择 SSH 执行程序，建议使用默认选项，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-ssh-executable.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- HTTPS 后端

选择 HTTPS 后端，建议使用默认选项，点击 `Next` 选项继续。

<img
  src="/img/join-us/git-https-backend.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 行结束转换

选择行结束转换方式，建议使用默认选项，点击 `Next` 选项继续。

<img
    src="/img/join-us/git-line-ending-conversion.webp"
    style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 终端仿真器

选择终端仿真器，建议使用默认选项，点击 `Next` 选项继续。

<img
    src="/img/join-us/git-terminal-emulator.webp"
    style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 默认 Git 行为

选择默认 Git 行为，建议使用默认选项，点击 `Next` 选项继续。

<img
    src="/img/join-us/git-default-git-behavior.webp"
    style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 凭证管理器

选择凭证管理器，建议使用默认选项，点击 `Next` 选项继续。

<img
    src="/img/join-us/git-credential-manager.webp"
    style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 配置额外选项

选择配置额外选项，建议使用默认选项，点击 `Install` 选项开始正式安装。

<img
    src="/img/join-us/git-extra-options.webp"
    style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

- 完成安装

安装完成后，点击 `Finish` 选项退出安装向导。

<img
    src="/img/join-us/git-complete-installation.webp"
    style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

  </TabItem>
  <TabItem value="Linux" label="Linux">

使用系统自带的软件包管理工具安装 Git。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
sudo apt update
sudo apt install git -y
```

</Terminal>

  </TabItem>
  <TabItem value="macOS" label="macOS">

先安装 [Homebrew](https://brew.sh/) 包管理工具，然后使用 Homebrew 安装 Git。

<Terminal os="macOS@Milir" tip="">

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
```

</Terminal>

  </TabItem>
</Tabs>

### 验证 Git

安装完成后，打开终端（Terminal）或命令提示符（Command Prompt），使用以下命令验证 Git 是否安装成功：

<Terminal os="PC@Milir" tip="Windows / Linux / macOS 通用命令">

```bash
git --version
```

</Terminal>

如果显示 Git 的版本号，说明 Git 安装成功。

## Node.js

Node.js 是一个开源的、跨平台的 JavaScript 运行时环境，允许开发者在服务器端运行 JavaScript 代码。

### 安装 Node.js

访问 [Node.js 下载页面](https://nodejs.org/) ，根据自己的系统平台下载并安装最新的 LTS 版本的 Node.js。

<Tabs>
  <TabItem value="Windows" label="Windows" default>

启用 WSL2（Windows Subsystem for Linux 2） 功能, 安装 Ubuntu 系统, 在 Ubuntu 终端中安装 Node.js。

  </TabItem>
  <TabItem value="Linux" label="Linux">

访问 [Node.js 下载页面](https://nodejs.org/en/download) ，依次选择 Node.js v24.11.1(LTS) -> Linux -> fnm -> Yarn 获取下载和安装 Yarn 命令。

<Terminal os="Linux@Milir" tip="">

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.11.1".

# Download and install Yarn:
corepack enable yarn

# Verify Yarn version:
yarn -v
```

</Terminal>

  </TabItem>
  <TabItem value="macOS" label="macOS">

访问 [Node.js 下载页面](https://nodejs.org/en/download) ，依次选择 Node.js v24.11.1(LTS) -> macOS -> fnm -> Yarn 获取下载和安装 Yarn 命令。

<Terminal os="Linux@Milir" tip="">

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.11.1".

# Download and install Yarn:
corepack enable yarn

# Verify Yarn version:
yarn -v
```

</Terminal>

  </TabItem>
</Tabs>

### 验证 Node.js

安装完成后，打开终端（Terminal）或命令提示符（Command Prompt），使用以下命令验证 Node.js 是否安装成功：
<Terminal os="PC@Milir" tip="Windows / Linux / macOS 通用命令">

```bash
node -v && npm -v && yarn -v
```
</Terminal>

如果显示 Node.js、npm 和 Yarn 的版本号，说明安装 Node.js 成功。
