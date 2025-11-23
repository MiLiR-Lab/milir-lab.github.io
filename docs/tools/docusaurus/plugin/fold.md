---
sidebar_position: 10
title: 折叠优化
---

优化折叠的显示效果！

## 代码块组件

在 `src\components` 文件夹下新建 `Collapsible` 文件夹，然后在文件夹下新建 `index.tsx` 文件和 `styles.module.css` 文件，内容如下：

<CodeFile title="src\components\SimplePromptBlock\index.tsx" defaultCollapsed={true}>
<p>

```tsx
import React, { useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface CollapsibleProps {
  title?: string;
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  className?: string;
}

export default function Collapsible({
  title = 'Details',
  children,
  defaultCollapsed = false,
  className,
}: CollapsibleProps): JSX.Element {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.controls}>
          <button
            className={styles.controlBtn}
            onClick={() => setCollapsed(true)}
            title="Minimize"
            disabled={collapsed}
            aria-label="Minimize"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect y="10" width="12" height="2" rx="1" />
            </svg>
          </button>
          <button
            className={styles.controlBtn}
            onClick={() => setCollapsed(false)}
            title="Maximize"
            disabled={!collapsed}
            aria-label="Maximize"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="1" width="10" height="10" rx="1" />
            </svg>
          </button>
        </div>
      </div>
      {!collapsed && <div className={styles.content}>{children}</div>}
    </div>
  );
}
```

</p>
</CodeFile>

<CodeFile title="src\components\SimplePromptBlock\styles.module.css" defaultCollapsed={true}>
<p>

```css
.container {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: var(--ifm-global-radius);
  margin-bottom: var(--ifm-leading);
  overflow: hidden;
  background-color: var(--ifm-background-surface-color);
  box-shadow: var(--ifm-global-shadow-lw);
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 3.5rem;
  background-color: var(--ifm-color-emphasis-100);
  border-bottom: 1px solid var(--ifm-color-emphasis-200);
  min-height: 3rem;
}

.title {
  font-weight: bold;
  font-size: 0.75rem;
  color: #f9fafb;
  background-color: #9b9033;
  padding: 0.1rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--ifm-color-emphasis-200);
  box-shadow: 0 1px 2px rgba(255, 255, 255, 0);
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}

.controls {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 0.25rem;
}

.controlBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  color: var(--ifm-color-content);
  opacity: 0.6;
  transition: all 0.2s;
  padding: 0;
}

.controlBtn:hover:not(:disabled) {
  background-color: var(--ifm-color-emphasis-200);
  opacity: 1;
}

.controlBtn:disabled {
  opacity: 0.3;
  cursor: default;
}

.content {
  padding: 1rem;
  background-color: var(--ifm-background-surface-color);
  font-size: 0.85rem;
  line-height: 1.5;
  font-family: var(--ifm-font-family-monospace);
}

.content :global(p),
.content :global(span),
.content :global(div) {
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  margin-bottom: 0;
}
```

</p>
</CodeFile>

## 导入全局组件

修改 `src\theme\MDXComponents.tsx` 文件，内容如下：将 `Collapsible` 组件导入到 `MDXComponents` 中。

<CodeFile title="src\theme\MDXComponents.tsx" defaultCollapsed={true}>
<p>

```tsx {7,15} showLineNumbers
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import SimplePromptBlock from '../components/SimplePromptBlock';
import Collapsible from '../components/Collapsible';

export default {
  ...MDXComponents,
  Tabs,
  TabItem,
  DocCardList,
  Terminal: SimplePromptBlock,
  CodeFile: Collapsible,
};
```

</p>
</CodeFile>

使用 `<CodeFile>` 标签来实现代码块。

<Tabs>
<TabItem value="markdown" label="实现语法">
~~~
<CodeFile title="hello.c" defaultCollapsed={true}>
<p>

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

</p>
</CodeFile>
~~~
</TabItem>
<TabItem value="preview" label="效果预览">

<CodeFile title="hello.c" defaultCollapsed={true}>
<p>

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
</p>
</CodeFile>

</TabItem>
</Tabs>
