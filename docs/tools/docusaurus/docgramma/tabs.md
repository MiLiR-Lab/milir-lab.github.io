---
sidebar_position: 5
title: 文档标签组
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Docusaurus 自带的 `<Tabs>` 组件可以直接在 Markdown 文档中使用。

## 单个标签

使用 `<Tabs>` 和 `<TabItem>` 组件来创建单个标签。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Windows 的内容
  </TabItem>
</Tabs>
```
</TabItem>
<TabItem value="preview" label="效果预览">

<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Windows 的内容
  </TabItem>
</Tabs>

</TabItem>
</Tabs>

## 多个标签

使用 `<Tabs>` 和多个 `<TabItem>` 组件来创建多个标签。

### 两个标签

<Tabs>
<TabItem value="markdown" label="实现语法">
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Windows 的内容
  </TabItem>
  <TabItem value="Linux" label="Linux">
    Linux 的内容
  </TabItem>
</Tabs>
```
</TabItem>
<TabItem value="preview" label="效果预览">

<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Windows 的内容
  </TabItem>
  <TabItem value="Linux" label="Linux">
    Linux 的内容
  </TabItem>
</Tabs>

  </TabItem>
</Tabs>

### 三个标签

<Tabs>
<TabItem value="markdown" label="实现语法">
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Windows 的内容
  </TabItem>
  <TabItem value="Linux" label="Linux">
    Linux 的内容
  </TabItem>
  <TabItem value="MacOS" label="Linux">
    MacOS 的内容
  </TabItem>
</Tabs>
```
</TabItem>

<TabItem value="preview" label="效果预览">
<Tabs>
  <TabItem value="Windows" label="Windows" default>
    Windows 的内容
  </TabItem>
  <TabItem value="Linux" label="Linux">
    Linux 的内容
  </TabItem>
  <TabItem value="MacOS" label="Linux">
    MacOS 的内容
  </TabItem>
</Tabs>
</TabItem>
</Tabs>

## 关联标签

使用 `groupId` 、 `<Tabs>` 和多个 `<TabItem>` 组件来创建关联标签，相同 `groupId` 的标签会自动显示。

<Tabs>
<TabItem value="markdown" label="实现语法">
```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="operating-systems">
  <TabItem value="Windows" label="Windows">Windows 的内容</TabItem>
  <TabItem value="MacOS" label="MacOS">MacOS 的内容</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="Windows" label="Windows">Windows 的内容</TabItem>
  <TabItem value="MacOS" label="MacOS">MacOS 的内容</TabItem>
</Tabs>
```
</TabItem>
<TabItem value="preview" label="效果预览">

<Tabs groupId="operating-systems">
  <TabItem value="Windows" label="Windows">Windows 的内容</TabItem>
  <TabItem value="MacOS" label="MacOS">MacOS 的内容</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="Windows" label="Windows">Windows 的内容</TabItem>
  <TabItem value="MacOS" label="MacOS">MacOS 的内容</TabItem>
</Tabs>

</TabItem>
</Tabs>
