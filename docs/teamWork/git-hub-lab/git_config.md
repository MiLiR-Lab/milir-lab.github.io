---
sidebar_position: 3
title: 基本配置
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info git config
Git 自带一个 git config 的工具，用来配置 Git 的用户信息和环境变量
:::

使用 Git 进行版本控制时，需要配置用户信息，以便记录提交者的相关信息（用户名和邮箱）。

## 配置用户信息

设置 Git 用户信息的用户名和邮箱。

:::tip 配置优先级
局部配置 > 全局配置
:::

<Tabs>
  <TabItem value="局部配置" label="局部配置" default>
只在当前仓库生效。

```
git config user.name "WuMinlong"
git config user.email "xxxx@163.com"
```

  - `WuMinlong` ：设置局部用户名
  - `xxxx@163.com` ：设置局部邮箱

  </TabItem>
  <TabItem value="全局配置" label="全局配置">
对所有仓库生效，需要加 `--global` 参数。

```
git config --global user.name "WuMinlong"
git config --global user.email "xxxx@163.com"
```

  - `WuMinlong` ：设置全局用户名
  - `xxxx@163.com` ：设置全局邮箱
  </TabItem>
</Tabs>

## 删除用户信息

如果需要删除配置信息，需要加 `--unset` 参数。

<Tabs>
  <TabItem value="局部配置" label="局部配置" default>
删除局部仓库配置信息。

```
git config --unset user.name "WuMinlong"
git config --unset user.email "xxxx@163.com"
```

  - `WuMinlong` ：删除局部用户名
  - `xxxx@163.com` ：删除局部邮箱

  </TabItem>
  <TabItem value="全局配置" label="全局配置">
删除全局仓库配置信息。

```
git config --global --unset user.name "WuMinlong"
git config --global --unset user.email "xxxx@163.com"
```

  - `WuMinlong` ：删除全局用户名
  - `xxxx@163.com` ：删除全局邮箱
  </TabItem>
</Tabs>

## 配置分支名称

初始化仓库的默认分支名称是 `master` ，Git 在后来的版本推荐使用 `main` 作为初始化仓库名称。

:::tip 更名原因
为了避免 `master` 一词可能关联的历史负面含义，Git 社区改用 `main` 作为默认分支名称，以促进更具包容性的技术环境
:::

<Tabs>
  <TabItem value="局部配置" label="局部配置" default>
只在当前仓库生效。

```
git config init.defaultBranch main
```

  - `main`：设置局部默认分支名称

  </TabItem>
  <TabItem value="全局配置" label="全局配置">

对所有仓库生效，需要加 `--global` 参数。

```
git config --global init.defaultBranch main
```

  - `main`：设置全局默认分支名称

  </TabItem>
</Tabs>

## 查看配置信息

:::tip 说明
如果没有本地仓库或者不在本地仓库目录，`git config` 命令会查看全局配置信息。
:::

进入本地仓库目录，查看当前的配置项，需要加 `--list` 参数。

```
git config --list
```

<details>
  <summary>终端输出</summary>
  <p>
```
user.name=WuMinlong
user.email=xxxx@163.com
init.defaultbranch=main
```
</p>
</details>

查看当前配置项和文件来源，需要加 `--show-origin` 参数。

```
git config --list --show-origin
```

<details>
  <summary>终端输出</summary>
  <p>
```
file:/home/milir/.gitconfig  user.name=WuMinlong
file:/home/milir/.gitconfig  user.email=xxxx@163.com
file:/home/milir/.gitconfig  init.defaultbranch=main
```
</p>
</details>

## 屏蔽版本控制

对于无需版本控制的文件，可以新建 `.gitignore` 文件，将不需要纳入版本控制的文件添加到 `.gitignore` 文件中。

```
touch .gitignore
```

若需要 Git 忽略所有以 `.a` 结尾的文件，可以在 `.gitignore` 文件中添加 `*.a`。

```
*.a
```

## 终端显示分支

使用 [Oh My Zsh](https://ohmyz.sh/) 开源工具来管理和增强 Z Shell 终端显示，内置大量插件，我们可以使用该工具来实时显示当前目录所处的 Git 分支。

:::tip 安装说明
目前主要演示 Linux 下使用 [Oh My Zsh](https://ohmyz.sh/) 的安装和 Git 插件使用方法。
:::

### 使用 ZSH

#### 安装 ZSH

```
sudo apt install zsh
```

#### 验证 ZSH

可以使用 `zsh --version` 命令验证是否安装成功！

```
zsh --version
```

<details>
  <summary>终端输出</summary>
  <p>
  ```
  zsh 5.8.1 (x86_64-ubuntu-linux-gnu)
  ```
  </p>
</details>

### 使用 Oh My Zsh

#### 安装 Oh My Zsh

可以使用 `Curl` 或 `Wget` 工具安装 [Oh My Zsh](https://ohmyz.sh/) 。

<Tabs groupId="tools">
  <TabItem value="Curl" label="Curl">
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
  </TabItem>
  <TabItem value="Wget" label="Wget">
```
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```
  </TabItem>
</Tabs>

完成安装后，终端会自动设置 ZSH 为默认 shell。

<details>
  <summary>终端输出</summary>
  <p>
```
Cloning Oh My Zsh...
remote: Enumerating objects: 1472, done.
remote: Counting objects: 100% (1472/1472), done.
remote: Compressing objects: 100% (1400/1400), done.
remote: Total 1472 (delta 59), reused 1254 (delta 44), pack-reused 0 (from 0)
Receiving objects: 100% (1472/1472), 3.29 MiB | 4.33 MiB/s, done.
Resolving deltas: 100% (59/59), done.
From https://github.com/ohmyzsh/ohmyzsh
 * [new branch]      dependabot/pip/dot-github/workflows/dependencies/certifi-2025.7.14 -> origin/dependabot/pip/dot-github/workflows/dependencies/certifi-2025.7.14
 * [new branch]      master     -> origin/master
Branch 'master' set up to track remote branch 'master' from 'origin'.
Already on 'master'
/home/milir

Looking for an existing zsh config...
Using the Oh My Zsh template file and adding it to /home/milir/.zshrc.

Time to change your default shell to zsh:
Do you want to change your default shell to zsh? [Y/n] y
Changing your shell to /usr/bin/zsh...
[sudo] password for milir:
Shell successfully changed to '/usr/bin/zsh'.

         __                                     __
  ____  / /_     ____ ___  __  __   ____  _____/ /_
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / /
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/
                        /____/                       ....is now installed!


Before you scream Oh My Zsh! look over the `.zshrc` file to select plugins, themes, and options.

• Follow us on X: https://x.com/ohmyzsh
• Join our Discord community: https://discord.gg/ohmyzsh
• Get stickers, t-shirts, coffee mugs and more: https://shop.planetargon.com/collections/oh-my-zsh
```
  </p>
</details>

#### 配置 Oh My Zsh

启用 [Oh My Zsh](https://ohmyz.sh/) 的 Git 插件，对于只需要终端显示仓库分支的用户，可以不启用 Git 插件，Git 插件主要是提供一些 Git 命令别名和有用的函数。

:::info 插件说明
[Oh My Zsh](https://ohmyz.sh/) 自带插件，我们只需要启动对应的插件就可以开启对应功能！
:::

#### 编辑文件

使用 `nano` 编辑器编辑 `~/.bashrc` 文件。

```
nano ~/.bashrc
```
#### 添加插件

将 `git` 添加到 `~/.bashrc` 文件中的 `plugins`数组中。

```
plugins=(git)
```
