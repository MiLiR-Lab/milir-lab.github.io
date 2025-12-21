---
sidebar_position: 15
title: 参与贡献
---

## 本地修改

以修改 `README.md` 文件为例，展示如何提交修改。

### 查看修改状态

在本地对 `README.md` 文件进行修改后，使用 `git status` 命令查看修改状态

<Terminal os="Linux@Milir" tip="终端输出示例">

```bash
git status
```

<TerminalOutput>

```bash
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

</TerminalOutput>

</Terminal>

### 添加修改文件

使用 `git add` 命令将修改添加到暂存区。

<Terminal os="Linux@Milir" tip="">

```bash
git add README.md
```

</Terminal>

### 提交修改文件

使用 `git commit` 命令提交修改的文件。

<Terminal os="Linux@Milir" tip="终端输出示例">

```bash
git commit -m "docs: modify README.md"
```

<TerminalOutput>

```bash
milir@PC:~/milir-lab.github.io$ git commit -m "docs: modify README.md"
[INFO] Stashing unstaged files to /home/milir/.cache/pre-commit/patch1766322928-7886.
trim trailing whitespace.................................................Passed
fix end of files.........................................................Passed
check yaml...........................................(no files to check)Skipped
check json...........................................(no files to check)Skipped
check for added large files..............................................Passed
yarn typecheck...........................................................Passed
[INFO] Restored changes from /home/milir/.cache/pre-commit/patch1766322928-7886.
[main e354da1] docs: modify README.md
 1 file changed, 1 insertion(+), 41 deletions(-)
```

</TerminalOutput>

</Terminal>

## 推送仓库

使用 `git push` 命令将修改推送到远程仓库。

<Terminal os="Linux@Milir" tip="终端输出示例">

```bash
git push origin main
```

<TerminalOutput>

```bash
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 16 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 368 bytes | 368.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:WuMinlong/milir-lab.github.io.git
   e466be1..e354da1  main -> main
```

</TerminalOutput>

</Terminal>

## 拉取请求

访问 [MiLiR Lab](https://github.com/MiLiR-Lab/milir-lab.github.io) 仓库页面，点击 `Pull requests` -> `New pull request` 选项。

<img
  src="/img/join-us/github-pull-requests.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

点击 `Compare across forks` 按钮，填写拉取请求的仓库和分支。

<img
  src="/img/join-us/github-pull-requests-param.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

填写拉取请求的标题和描述，然后点击 `Create pull request` 按钮提交拉取请求。

<img
  src="/img/join-us/github-pull-requests-create.webp"
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

GitHub 会自动通知 MiLiR Lab 仓库的维护者审核你的拉取请求，审核通过后你的修改将被合并到主分支中。
