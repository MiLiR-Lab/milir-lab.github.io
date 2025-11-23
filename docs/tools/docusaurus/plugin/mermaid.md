---
sidebar_position: 5
title: 图表绘制
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Mermaid 是一个基于 JavaScript 的图表绘制工具，可以方便的实现文档的图表展示。

:::info Docusaurus
Docusaurus 提供了丰富的插件，可以方便的实现文档的部署！
:::

## 安装 Mermaid

打开终端命令行运行 `yarn add @docusaurus/theme-mermaid` 命令安装 Mermaid 插件。

```bash
yarn add @docusaurus/theme-mermaid
```

## 配置 Mermaid

打开 `docusaurus.config.ts` 文件，添加下面的内容到 `presets` 和 `themeConfig` 中间。

```ts
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
```

<File title="docusaurus.config.ts">
<p>

```ts {9-12} showLineNumbers
    ···
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    ···

```

</p>
</File>

## 使用 Mermaid

代码块添加 `mermaid` 字符可以实现图表展示。

:::tip 参考资料
Mermaid 官网：[Mermaid](http://mermaid.js.org)
:::

### 图表方向

Mermaid 支持多种图表方向：

- `LR`：从左到右
- `RL`：从右到左
- `TB`：从上到下
- `BT`：从下到上

<Tabs>
<TabItem value="lr" label="LR">
~~~
```mermaid
graph LR;
    A-->B;
    A-->C;
```
~~~
</TabItem>
<TabItem value="lr_preview" label="LR 预览">
```mermaid
graph LR;
    A-->B;
    A-->C;
```
</TabItem>
<TabItem value="rl" label="RL">
~~~
```mermaid
graph RL;
    A-->B;
    A-->C;
```
~~~
</TabItem>
<TabItem value="rl_preview" label="RL 预览">
```mermaid
graph RL;
    A-->B;
    A-->C;
```
</TabItem>
<TabItem value="tb" label="TB">
~~~
```mermaid
graph TB;
    A-->B;
    A-->C;
```
~~~
</TabItem>
<TabItem value="tb_preview" label="TB 预览">
```mermaid
graph TB;
    A-->B;
    A-->C;
```
</TabItem>
<TabItem value="bt" label="BT">
~~~
```mermaid
graph BT;
    A-->B;
    A-->C;
```
~~~
</TabItem>
<TabItem value="bt_preview" label="BT 预览">
```mermaid
graph BT;
    A-->B;
    A-->C;
```
</TabItem>
</Tabs>

### 图表形状

Mermaid 支持多种图表形状。

<Tabs>
<TabItem value="tb" label="TB">
~~~
```mermaid
flowchart LR
    A@{ shape: rect, label: "Shape A" } --> B@{ shape: rounded, label: "Shape B" }
    C@{ shape: stadium, label: "Shape C" } --> D@{ shape: subproc, label: "Shape D" }
    E@{ shape: cyl, label: "Shape E" } --> F@{ shape: lin-cyl, label: "Shape F" }
```
~~~
</TabItem>
<TabItem value="tb_preview" label="TB 预览">
```mermaid
flowchart LR
    A@{ shape: rect, label: "Shape A" } --> B@{ shape: rounded, label: "Shape B" }
    C@{ shape: stadium, label: "Shape C" } --> D@{ shape: subproc, label: "Shape D" }
    E@{ shape: cyl, label: "Shape E" } --> F@{ shape: lin-cyl, label: "Shape F" }
```
</TabItem>
</Tabs>
