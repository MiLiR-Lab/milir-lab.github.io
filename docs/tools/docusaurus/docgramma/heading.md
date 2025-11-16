---
sidebar_position: 1
title: 文档标题
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 一级标题

标题前面添加 `#` 符号来创建一级标题。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
# 一级标题
```
</TabItem>
<TabItem value="preview" label="效果预览">

<h1 className="no-counter">一级标题</h1>

</TabItem>
</Tabs>

## 二级标题

标题前面添加 `##` 符号来创建二级标题。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
## 二级标题
```
</TabItem>
<TabItem value="preview" label="效果预览">

<h2 className="no-counter">二级标题</h2>

</TabItem>
</Tabs>

## 三级标题

标题前面添加 `###` 符号来创建三级标题。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
### 三级标题
```
</TabItem>
<TabItem value="preview" label="效果预览">

<h3 className="no-counter">三级标题</h3>

</TabItem>
</Tabs>

## 四级标题

标题前面添加 `####` 符号来创建四级标题。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
#### 四级标题
```
</TabItem>
<TabItem value="preview" label="效果预览">

<h4 className="no-counter">四级标题</h4>

</TabItem>
</Tabs>

## 五级标题

标题前面添加 `#####` 符号来创建五级标题。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
##### 五级标题
```
</TabItem>
<TabItem value="preview" label="效果预览">

<h5 className="no-counter">五级标题</h5>

</TabItem>
</Tabs>

## 六级标题

标题前面添加 `######` 符号来创建六级标题。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
###### 六级标题
```
</TabItem>
<TabItem value="preview" label="效果预览">

<h6 className="no-counter">六级标题</h6>

</TabItem>
</Tabs>

## 标题跳转

标题链接的格式为 `[跳转的标题文本](#标题文本)`，其中 `#` 接标题文本。
:::tip
Markdown 支持页面内标题跳转，常用于目录或快速定位。
:::

<Tabs>
<TabItem value="markdown" label="实现语法">
```
[跳转三级标题](#三级标题)
```
</TabItem>
<TabItem value="preview" label="效果预览">
[跳转三级标题](#三级标题)
</TabItem>
</Tabs>
