---
sidebar_position: 15
title: 代码块优化
---

优化代码块的显示效果！

## 代码块组件

在 `src\components` 文件夹下新建 `SimplePromptBlock` 文件夹，然后在文件夹下新建 `index.tsx` 文件和 `styles.module.css` 文件，内容如下：

<CodeFile title="src\components\SimplePromptBlock\index.tsx" defaultCollapsed={true}>
<p>

```tsx
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface SimplePromptBlockProps {
  /** Optional OS label shown in the top-left, e.g. Linux / Ubuntu / Mac. */
  os?: string;
  /** Optional background color for the left header section. */
  platformBg?: string;
  /** Optional background color for the right header section. */
  languageBg?: string;
  /** Optional extra class name for the outer container. */
  className?: string;
  /** Optional tip displayed centered below the code block. */
  tip?: string;
  /** Content area, usually a fenced code block. */
  children: React.ReactNode;
}

const DEFAULT_PLATFORM_BG = "#22c55e"; // Similar to Tailwind emerald-500.
const DEFAULT_LANGUAGE_BG = "#ef4444"; // Similar to Tailwind red-500.

const SimplePromptBlock: React.FC<SimplePromptBlockProps> = ({
  os,
  platformBg = DEFAULT_PLATFORM_BG,
  languageBg = DEFAULT_LANGUAGE_BG,
  className,
  tip,
  children,
}) => {
  return (
    <div className={clsx(styles.textBox, className)}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft} style={{ backgroundColor: platformBg }}>
          {os && <span className={styles.headerText}>{os}</span>}
        </div>
        <div
          className={styles.headerRight}
          style={{ backgroundColor: languageBg }}
          aria-label="terminal controls"
        >
          <div className={styles.windowControls} aria-hidden="true">
            <span className={clsx(styles.windowDot, styles.dotMinimize)} />
            <span className={clsx(styles.windowDot, styles.dotMaximize)} />
            <span className={clsx(styles.windowDot, styles.dotClose)} />
          </div>
        </div>
      </div>
      <div className={styles.body}>{children}</div>
      {tip && (
        <div className={styles.footer}>
          <span className={styles.footerLabel}>{tip}</span>
        </div>
      )}
    </div>
  );
};

export default SimplePromptBlock;

```

</p>
</CodeFile>

<CodeFile title="src\components\SimplePromptBlock\styles.module.css" defaultCollapsed={true}>
<p>

```css
.textBox {
  position: relative;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--ifm-code-background, #111827);
  border: 1px solid rgba(148, 163, 184, 0.4);
}

.headerRow {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

.headerLeft,
.headerRight {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.75rem;
}

.headerLeft {
  flex: 0 0 auto;
  justify-content: flex-start;
  border-bottom-right-radius: 0.5rem;
}

.headerRight {
  justify-content: flex-end;
  border-bottom-left-radius: 0.5rem;
}

.headerText {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #f9fafb;
  white-space: nowrap;
}

.body {
  padding: 0.6rem 0.75rem 0rem 0.75rem;
}

.body pre {
  margin: 0;
  background: transparent;
}

.body code {
  font-size: 0.85rem;
}

.windowControls {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}

.windowDot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 9999px;
  background-color: rgba(15, 23, 42, 0.7);
  box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.6);
}

.dotMinimize {
  background-color: #facc15;
}

.dotMaximize {
  background-color: #22c55e;
}

.dotClose {
  background-color: #ef4444;
}

.footer {
  display: flex;
  justify-content: center;
  margin-top: -0.15rem;
  padding: 0 0 0.65rem;
}

.footerLabel {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  background-color: rgba(64, 92, 156, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.7);
}

@media screen and (max-width: 750px) {
  .textBox {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .headerLeft,
  .headerRight {
    padding: 0.25rem 0.5rem;
  }

  .body {
    padding: 0.5rem 0.6rem 0rem 0.6rem;
  }
}
```

</p>
</CodeFile>

## 导入全局组件

修改 `src\theme\MDXComponents.tsx` 文件，内容如下：将 `SimplePromptBlock` 组件导入到 `MDXComponents` 中。

<CodeFile title="src\theme\MDXComponents.tsx" defaultCollapsed={true}>
<p>

```tsx {6,13} showLineNumbers
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import SimplePromptBlock from '../components/SimplePromptBlock';

export default {
  ...MDXComponents,
  Tabs,
  TabItem,
  DocCardList,
  Terminal: SimplePromptBlock,
};
```

</p>
</CodeFile>

使用 `<Terminal>` 标签来实现代码块。

<Tabs>
<TabItem value="markdown" label="实现语法">
~~~
<Terminal os="Ubuntu@Milir" tip="This is a tip">

```python
print("Hello World")
```

</Terminal>
~~~
</TabItem>
<TabItem value="preview" label="效果预览">

<Terminal os="Ubuntu@Milir" tip="This is a tip">

```python
print("Hello World")
```

</Terminal>

</TabItem>
</Tabs>
