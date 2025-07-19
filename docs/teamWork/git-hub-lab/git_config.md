---
sidebar_position: 2
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
为了避免 `master` 一词可能关联的历史负面含义（如主从压迫关系），Git 社区改用 main 作为默认分支名称，以促进更具包容性的技术环境。
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