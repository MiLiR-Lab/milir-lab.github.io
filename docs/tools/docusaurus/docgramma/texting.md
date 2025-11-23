---
sidebar_position: 2
title: 文档正文
---

## 正文换行

### 方法一
行末使用两个空格加回车来实现换行。
<Tabs>
<TabItem value="markdown" label="实现语法">
```
第一行
第二行
```
</TabItem>
<TabItem value="preview" label="效果预览">

第一行
第二行
</TabItem>
</Tabs>

### 方法二

使用 `<br />` 标签来实现换行。
<Tabs>
<TabItem value="markdown" label="实现语法">

```
第一行<br />第二行
```
</TabItem>
<TabItem value="preview" label="效果预览">
第一行<br />第二行
</TabItem>
</Tabs>

## 正文加粗

### 方法一

使用 `**` 包裹文本来实现加粗。
<Tabs>
<TabItem value="markdown" label="实现语法">

```
**第一行**
```
</TabItem>
<TabItem value="preview" label="效果预览">
**第一行**
</TabItem>
</Tabs>

### 方法二

使用 `__` 包裹文本来实现加粗。
<Tabs>
<TabItem value="markdown" label="实现语法">

```
__第一行__
```
</TabItem>
<TabItem value="preview" label="效果预览">
__第一行__
</TabItem>
</Tabs>

## 正文斜体

### 方法一
使用 `*` 包裹文本来实现斜体。
<Tabs>
<TabItem value="markdown" label="实现语法">

```
*第一行*
```
</TabItem>
<TabItem value="preview" label="效果预览">
*第一行*
</TabItem>
</Tabs>

### 方法二
使用 `_` 包裹文本来实现斜体。
<Tabs>
<TabItem value="markdown" label="实现语法">

```
_第一行_
```
</TabItem>
<TabItem value="preview" label="效果预览">
_第一行_
</TabItem>
</Tabs>

## 正文删除线

### 方法一
使用 `~~` 包裹文本来实现删除线。
<Tabs>
<TabItem value="markdown" label="实现语法">

```
~~第一行~~
```
</TabItem>
<TabItem value="preview" label="效果预览">
~~第一行~~
</TabItem>
</Tabs>
### 方法二
使用 `<del>` 标签来实现删除线。
<Tabs>
<TabItem value="markdown" label="实现语法">

```
<del>第一行</del>
```
</TabItem>
<TabItem value="preview" label="效果预览">
<del>第一行</del>
</TabItem>
</Tabs>

## 正文对齐

Markdown 本身不支持居中，但可以使用 React/JSX 语法来实现。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
<div style={{ textAlign: 'left' }}> 左对齐 </div>
<div style={{ textAlign: 'center' }}> 居中对齐 </div>
<div style={{ textAlign: 'right' }}> 右对齐 </div>
```
</TabItem>
<TabItem value="preview" label="效果预览">

<div style={{ textAlign: 'left' }}> 左对齐 </div>
<div style={{ textAlign: 'center' }}> 居中对齐 </div>
<div style={{ textAlign: 'right' }}> 右对齐 </div>

</TabItem>
</Tabs>

## 正文颜色

Markdown 本身不支持颜色，但可以使用 React/JSX 语法来实现。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
<div style={{ color: 'red' }}>红色文本</div>
<div style={{ color: 'green' }}>绿色文本</div>
<div style={{ color: 'blue' }}>蓝色文本</div>
<div style={{ color: 'orange' }}>橙色文本</div>
<div style={{ color: 'purple' }}>紫色文本</div>
<div style={{ color: 'pink' }}>粉色文本</div>
<div style={{ color: 'brown' }}>棕色文本</div>
<div style={{ color: 'gray' }}>灰色文本</div>
<div style={{ color: 'black' }}>黑色文本</div>
```
</TabItem>
<TabItem value="preview" label="效果预览">
<div style={{ color: 'red' }}>红色文本</div>
<div style={{ color: 'green' }}>绿色文本</div>
<div style={{ color: 'blue' }}>蓝色文本</div>
<div style={{ color: 'orange' }}>橙色文本</div>
<div style={{ color: 'purple' }}>紫色文本</div>
<div style={{ color: 'pink' }}>粉色文本</div>
<div style={{ color: 'brown' }}>棕色文本</div>
<div style={{ color: 'gray' }}>灰色文本</div>
<div style={{ color: 'black' }}>黑色文本</div>
</TabItem>
</Tabs>

## 正文大小

Markdown 本身不支持大小，但可以使用 React/JSX 语法来实现。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
<div style={{ fontSize: '10px' }}>10号文本</div>
<div style={{ fontSize: '12px' }}>12号文本</div>
<div style={{ fontSize: '14px' }}>14号文本</div>
<div style={{ fontSize: '16px' }}>16号文本</div>
<div style={{ fontSize: '18px' }}>18号文本</div>
<div style={{ fontSize: '20px' }}>20号文本</div>
<div style={{ fontSize: '22px' }}>22号文本</div>
<div style={{ fontSize: '24px' }}>24号文本</div>
```
</TabItem>
<TabItem value="preview" label="效果预览">
<div style={{ fontSize: '10px' }}>10号文本</div>
<div style={{ fontSize: '12px' }}>12号文本</div>
<div style={{ fontSize: '14px' }}>14号文本</div>
<div style={{ fontSize: '16px' }}>16号文本</div>
<div style={{ fontSize: '18px' }}>18号文本</div>
<div style={{ fontSize: '20px' }}>20号文本</div>
<div style={{ fontSize: '22px' }}>22号文本</div>
<div style={{ fontSize: '24px' }}>24号文本</div>
</TabItem>
</Tabs>

## 正文字体

Markdown 本身不支持字体，但可以使用 React/JSX 语法来实现。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
<div style={{ fontFamily: 'Arial' }}>Arial 字体</div>
<div style={{ fontFamily: 'Courier New' }}>Courier New 字体</div>
<div style={{ fontFamily: 'Georgia' }}>Georgia 字体</div>
<div style={{ fontFamily: 'Times New Roman' }}>Times New Roman 字体</div
<div style={{ fontFamily: 'Verdana' }}>Verdana 字体</div>
<div style={{ fontFamily: 'fangsong' }}>仿宋字体</div>
<div style={{ fontFamily: 'cursive' }}>草书字体</div>
```
</TabItem>
<TabItem value="preview" label="效果预览">
<div style={{ fontFamily: 'Arial' }}>Arial 字体</div>
<div style={{ fontFamily: 'Courier New' }}>Courier New 字体</div>
<div style={{ fontFamily: 'Georgia' }}>Georgia 字体</div>
<div style={{ fontFamily: 'Times New Roman' }}>Times New Roman 字体</div>
<div style={{ fontFamily: 'Verdana' }}>Verdana 字体</div>
<div style={{ fontFamily: 'fangsong' }}>仿宋字体</div>
<div style={{ fontFamily: 'cursive' }}>草书字体</div>
</TabItem>
</Tabs>

## 正文分割

使用三个 `-` 来实现分割。

---
<Tabs>
<TabItem value="markdown" label="实现语法">
```
---
```
</TabItem>
<TabItem value="preview" label="效果预览">

---

</TabItem>
</Tabs>
