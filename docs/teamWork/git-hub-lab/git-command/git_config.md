---
sidebar_position: 1
title: git config
---

`git config` 命令可以用于配置用户信息，默认分支名称和默认编辑器等。

## 配置级别

:::tip 优先级
`--local` ＞ `--global` ＞ `--system`
:::

`git config` 命令有三个配置级别：仓库级别、用户级别、系统级别。

|   级别   |    选项    |   配置文件位置    |          配置生效范围          |
|   ---    |     ---    |   ---           |             ---                |
| 仓库级别 | `--local`  | `.git/config`    | 作用于当前仓库的 Git 配置信息    |
| 用户级别 | `--global` | `~/.gitconfig` 或 `~/.config/git/config`   | 作用于当前用户的所有仓库 Git 配置信息 |
| 系统级别 | `--system` | `/etc/gitconfig` | 作用于当前系统的所有仓库 Git 配置信息 |

## 配置信息

主要以 `--global` 选项演示如何配置当前用户所有仓库的 Git 配置信息。

### 用户信息

#### 设置用户名

使用 `user.name` 配置 `milir` 作为用户名。

```bash
git config --global user.name "milir"
```

#### 设置邮箱

使用 `user.email` 配置 `milir@163.com` 作为用户邮箱。

```
git config --global user.email "milir@163.com"
```

### 命令别名

使用 `alias` 配置 `git st` 为 `git status` 的别名。

```
git config --global alias.st status
```

### 默认编辑器

使用 `core.editor` 配置 Nano 作为默认编辑器。

```
git config --global core.editor "nano"
```

### 默认分支名称

使用 `init.defaultBranch` 配置 `main` 作为默认分支名称。

```
git config --global init.defaultBranch "main"
```

### 配置 HTTP 代理

使用 `http.proxy` 配置 HTTP 代理。

```
git config --global http.proxy "http://proxy.example.com:8080"
```

## 查看配置信息

使用 `--list` 选项可以查看配置信息。

### 查看仓库级别配置

使用 `--local` 选项可以查看仓库级别配置信息。

```
git config --local --list
```

### 查看用户级别配置

使用 `--global` 选项可以查看用户级别配置信息。

```
git config --global --list
```

### 查看系统级别配置

使用 `--system` 选项可以查看系统级别配置信息。

```
git config --system --list
```

### 查看配置来源及信息

使用 `--list --show-origin` 选项可以查看配置来源及信息。

```
git config --list --show-origin
```

## 删除配置信息

使用 `--unset` 选项可以删除配置信息。

### 删除仓库级别配置

使用 `--local` 选项可以删除仓库级别配置信息。

```
git config --local --unset user.name
```

### 删除用户级别配置

使用 `--global` 选项可以删除用户级别配置信息。

```
git config --global --unset user.name
```

### 删除系统级别配置

使用 `--system` 选项可以删除系统级别配置信息。

```
git config --system --unset user.name
```
