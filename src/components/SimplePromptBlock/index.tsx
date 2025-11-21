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
