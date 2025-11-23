---
sidebar_position: 6
title: 文档代码块
---

## 代码块

将代码放到两个 ` ``` ` 符号中间来实现代码块。

<Tabs>
<TabItem value="markdown" label="实现语法">
~~~
```
Hello World
```
~~~
</TabItem>
<TabItem value="preview" label="效果预览">
```
Hello World
```
</TabItem>
</Tabs>

## 代码块:标题

添加 `title` 键到第一个 ` ``` ` 符号后面来实现代码块标题添加。

<Tabs>
<TabItem value="markdown" label="实现语法">
~~~
```jsx title="Heading"
Hello World
```
~~~
</TabItem>
<TabItem value="preview" label="效果预览">
```jsx title="Heading"
Hello World
```
</TabItem>
</Tabs>

## 代码块:行号
添加 `title` 键到第一个 ` ``` ` 符号后面来实现代码块标题添加。

<Tabs>
<TabItem value="markdown" label="实现语法">
~~~
```jsx showLineNumbers
Hello World
```
~~~
</TabItem>
<TabItem value="preview" label="效果预览">
```jsx showLineNumbers
Hello World
```
</TabItem>
</Tabs>

## 代码块：高亮

添加 `title` 键到第一个 ` ``` ` 符号后面来实现代码块标题添加。

<Tabs>
<TabItem value="markdown" label="实现语法">
~~~
```c {4-5} showLineNumbers
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
~~~
</TabItem>
<TabItem value="preview" label="效果预览">
```c {4-5} showLineNumbers
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
</TabItem>
</Tabs>
