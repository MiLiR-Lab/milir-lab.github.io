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
