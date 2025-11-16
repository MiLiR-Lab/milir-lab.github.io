---
sidebar_position: 4
title: 文档引用
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

使用 `>` 符号来实现引用的效果。

## 文字引用

<Tabs>
<TabItem value="markdown" label="实现语法">
```
> Hello World
```
</TabItem>
<TabItem value="preview" label="效果预览">

> Hello World

</TabItem>
</Tabs>

## 网址跳转

<Tabs>
<TabItem value="markdown" label="实现语法">
```
[MiLiR-Lab](https://milir-lab.github.io/)
```
</TabItem>
<TabItem value="preview" label="效果预览">

[MiLiR-Lab](https://milir-lab.github.io/)

</TabItem>
</Tabs>

## 图片引用

### 方法一

<Tabs>
<TabItem value="markdown" label="实现语法">
```
![MiLiR-Lab](/static/img/logo.svg)
```
</TabItem>
<TabItem value="preview" label="效果预览">

![MiLiR-Lab](/img/logo.svg)

</TabItem>
</Tabs>

### 方法二

<Tabs>
<TabItem value="markdown" label="实现语法">
```
<img src="/img/logo.svg" style={{width: '50%', maxWidth: '1200px'}} />
```
</TabItem>
<TabItem value="preview" label="效果预览">

<img src="/img/logo.svg" style={{width: '50%', maxWidth: '1200px'}} />

</TabItem>
</Tabs>

### 方法三

<Tabs>
<TabItem value="markdown" label="实现语法">
```
<img
  src="/img/logo.svg"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>
```
</TabItem>
<TabItem value="preview" label="效果预览">

<img
  src="/img/logo.svg"
  style={{width: '50%', maxWidth: '1200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
/>

</TabItem>
</Tabs>

## 文档引用

<Tabs>
<TabItem value="markdown" label="实现语法">
```
[MiLiR-Lab](../../../intro.md)
```
</TabItem>
<TabItem value="preview" label="效果预览">

[MiLiR-Lab](../../../intro.md)

</TabItem>
</Tabs>
