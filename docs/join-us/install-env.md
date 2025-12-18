---
sidebar_position: 5
title: 环境搭建
---

## Git

Git 是一个免费的、开源的分布式版本控制系统。

### 安装 Git

参与网站文档的编辑开发，建议在 Ubuntu 或 macOS 上搭建环境，请根据自己的系统平台完成 Git 的安装。

:::tip Windows 平台

Windows 上可以启用 [WSL2(Windows Subsystem for Linux 2）](https://learn.microsoft.com/zh-cn/windows/wsl/) 功能，在 WSL2 内安装 Ubuntu 搭建网站环境！

:::

<Tabs>
  <TabItem value="Linux" label="Linux">

使用系统自带的软件包管理工具安装 Git。

<Terminal os="Linux@Milir" tip="">

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

安装完成后，打开系统终端，使用以下命令验证 Git 是否安装成功：

<Terminal os="PC@Milir" tip="终端输出示例">

```bash
git --version
```

<TerminalOutput>

```bash
git version 2.34.1
```

</TerminalOutput>

</Terminal>

如果显示 Git 的版本号，说明 Git 安装成功。

## Node.js

Node.js 是一个开源的、跨平台的 JavaScript 运行时环境，允许开发者在服务器端运行 JavaScript 代码。

### 安装 Node.js

访问 [Node.js 下载页面](https://nodejs.org/) ，根据自己的系统平台下载并安装最新的 LTS 版本的 Node.js。

<Tabs>
  <TabItem value="Windows" label="Windows" default>

启用 [WSL2（Windows Subsystem for Linux 2）](https://learn.microsoft.com/zh-cn/windows/wsl/) 功能, 安装 Ubuntu 系统, 在 Ubuntu 中安装 Node.js。

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

<Terminal os="PC@Milir" tip="终端输出示例">

```bash
node -v && npm -v && yarn -v
```
<TerminalOutput>

```bash
v24.12.0
11.6.2
1.22.22
```

</TerminalOutput>

</Terminal>

如果显示 Node.js、npm 和 Yarn 的版本号，说明安装 Node.js 成功。
