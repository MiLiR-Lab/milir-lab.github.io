---
sidebar_position: 2
title: 文档使用
---

## 创建 website 网站
打开终端命令行，运行以下命令创建一个新的 website 网站。

```bash
npx create-docusaurus@latest website classic --typescript
```

## 运行 website 网站
打开终端命令行，进入新创建的网站目录，运行以下命令启动 website 网站。
```bash
cd website
yarn start
```
启动成功后，浏览器会自动访问 `http://localhost:3000/` 网址。

## 构建 website 网站
打开终端命令行，进入新创建的网站目录，运行以下命令构建 website 网站。
```bash
yarn build
```

## 查看 website 网站
构建完成后，Docusaurus 会在 `website/build` 目录下生成静态文件。

打开终端命令行，运行以下命令查看 website 网站。

```bash
yarn serve
```
