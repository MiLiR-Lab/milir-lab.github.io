---
sidebar_position: 3
title: git status
---

使用 `git status` 命令可以查看当前仓库的文件状态。

```
git status
```

<details>
  <summary>终端输出</summary>
  <p>
```
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
  </p>
</details>

## 文件状态

Git 仓库中的文件可以分为两种状态：未跟踪文件、已跟踪文件。

已跟踪文件可以细分为未修改文件、已修改文件和已暂存文件。

### 未跟踪文件

未跟踪文件指的是在未被 Git 管理的文件，我们可以新建 `README.md` 文件来演示。

```
touch README.md
git status
```

<details>
  <summary>终端输出</summary>
  <p>
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)
```
  </p>
</details>

### 已跟踪文件

已跟踪文件指的是已经被 Git 跟踪的文件。

已跟踪文件可以分为已修改文件、未修改文件和已暂存文件。

#### 已暂存文件

已暂存文件指的是已经被 Git 跟踪，但是准备提交到版本库的文件。

我们可以将 `README.md` 文件添加到暂存区来演示已暂存文件。

```
git add README.md
git status
```

<details>
  <summary>终端输出</summary>
  <p>
```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md
```
  </p>
</details>

#### 已修改文件

已修改文件指的是已经被 Git 跟踪，但是有修改的文件。

我们可以修改 `README.md` 文件来演示已修改文件。

```
echo Hello, World! >> README.md
git status
```

<details>
  <summary>终端输出</summary>
  <p>
```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
```
  </p>
</details>

#### 未修改文件

未修改文件指的是已经被 Git 跟踪，且内容与最新提交完全一致的文件。

我们可以将之前 `README.md` 文件的修改提交到本地仓库来演示未修改文件。

```
git add README.md
git commit -m "Add README.md"
git status
```

<details>
  <summary>终端输出</summary>
  <p>
```
On branch main
nothing to commit, working tree clean
```
  </p>
</details>
