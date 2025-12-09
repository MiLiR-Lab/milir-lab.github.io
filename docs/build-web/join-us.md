---
sidebar_position: 10
title: 参与贡献
---

## 本地修改

在本地对源码进行修改后，使用 `git add` 和 `git commit` 命令将修改提交到本地仓库。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
git add .
git commit -m "你的提交信息"
```

</Terminal>

## 推送修改

使用 `git push` 命令将本地仓库的修改推送到远程仓库。

<Terminal os="Linux@Milir" tip="Ubuntu / Debian 安装命令">

```bash
git push
```

</Terminal>

## 拉取请求

在 GitHub 上打开你的分支，点击 `Pull requests` -> `New pull request` 选项，填写拉取请求的信息，然后点击 `Create pull request` 按钮提交拉取请求。

<img
  src="/img/git-create-pull-request.webp"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>  

GitHub 会自动通知 MiLiR Lab 仓库的维护者审核你的拉取请求，审核通过后你的修改将被合并到主分支中。