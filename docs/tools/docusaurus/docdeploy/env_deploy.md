---
sidebar_position: 3
title: 文档部署
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

我们需要修改 `docusaurus.config.ts` 文件中的参数再部署。

## 修改参数

我们需要将 `docusaurus.config.ts` 文件中 `organizationName` 和 `projectName` 修改成自己的 GitHub 用户名和仓库。

:::tip
你需要提前创建一个 GitHub 仓库，然后把源码推送到 GitHub 上。
:::

<Tabs>
<TabItem value="para1" label="参数未修改">
```
url: 'https://your-docusaurus-site.example.com',
baseUrl: '/',

organizationName: 'facebook',
projectName: 'docusaurus',
```
</TabItem>
<TabItem value="para2" label="参数已修改">
```
url: 'https://wuminlong.github.io',
baseUrl: '/website/',

organizationName: 'WuMinLong',
projectName: 'website',
```
</TabItem>
</Tabs>

- 若仓库名称是 `<user_name>.github.io`

你不需要修改 `baseUrl`，只需要修改 `url` 为 `https://<user_name>.github.io`

- 若仓库名称不是 `<user_name>.github.io`

你需要修改 `url` 为 `https://<user_name>.github.io`，修改 `baseUrl` 为 `/<project_name>/`

## 添加参数

我们需要将部署的 GitHub 分支参数添加到 `docusaurus.config.ts` 文件中。

<Tabs>
<TabItem value="para1" label="参数未添加">
```
organizationName: 'WuMinLong',
projectName: 'website',
```
</TabItem>
<TabItem value="para2" label="参数已添加">
```
organizationName: 'WuMinLong',
projectName: 'website',
deploymentBranch: 'pages', // Usually your repo branch.
trailingSlash: false,
```
</TabItem>
</Tabs>

## 部署网站

打开终端命令行，进入新创建的网站目录，并运行以下命令部署 website 网站。

```bash
GIT_USER=<github_username> yarn deploy
# 示例
GIT_USER=WuMinLong yarn deploy
```
