---
sidebar_position: 1
title: 基本介绍
---

Git 是一个强大且广泛使用的分布式版本控制系统 ( Distributed Version Control System, 缩写 DVCS )，由 Linus Benedict Torvalds 在 2005 年开发，最初用于管理 Linux 内核的开发。

:::info 开发者信息

Linus Torvalds（林纳斯·托瓦兹）- Linux 与 Git 之父

- Linux 内核 (1991 年发布)
- Git 版本控制系统 (2005 年开发)

:::

:::tip 参考资料
- 官网 : [Git](https://git-scm.com/)
- 官方文档 : [Pro Git](https://git-scm.com/book/)
:::

## 设计目标

Git 的设计目标包括速度、高效性、分布式协作和强大的分支管理，适用于从小型个人项目到大型企业级代码库。

## 版本控制

Git 的核心功能是版本控制，它通过快照（Snapshot）和差异（Difference）来管理代码库。

Git 采用了独特的混合式设计，在底层存储中使用快照机制，而在展示变更时则呈现差异。

### 基于差异

基于差异的版本控制（delta-based）：每次提交仅记录文件相对于前一个版本的差异（delta），通过叠加差异重建文件历史。

<img 
  src="/img/git/git-intro-deltas.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

### 基于快照

基于快照的版本控制（snapshot-based）：每次提交时记录所有文件的完整状态（类似拍照），未修改的文件通过指针复用之前的内容。

<img 
  src="/img/git/git-intro-snapshots.webp" 
  style={{width: '100%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}} 
/>

## 文件完整

Git 通过内容寻址存储（Content-Addressab le Storage）和校验和（Checksum）机制来保证文件的完整性和版本追踪的可靠性。