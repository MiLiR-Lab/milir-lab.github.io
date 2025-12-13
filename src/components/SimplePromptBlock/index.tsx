import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface SimplePromptBlockProps {
  os?: string;
  platformBg?: string;
  languageBg?: string;
  className?: string;
  tip?: string;
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}

export interface TerminalOutputProps {
  children: React.ReactNode;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({ children }) => <>{children}</>;

const extractText = (node: React.ReactNode): string => {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node)) {
    const props = (node as React.ReactElement<{ children?: React.ReactNode }>).props;
    return extractText(props?.children);
  }
  return "";
};

const DEFAULT_PLATFORM_BG = "#22c55e";
const DEFAULT_LANGUAGE_BG = "#ef4444";

const SimplePromptBlock: React.FC<SimplePromptBlockProps> = ({
  os,
  platformBg = DEFAULT_PLATFORM_BG,
  languageBg = DEFAULT_LANGUAGE_BG,
  className,
  tip,
  defaultCollapsed = false,
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const childNodes = React.Children.toArray(children);
  let outputChildren: React.ReactNode = null;
  const mainChildren = childNodes.filter((child) => {
    if (React.isValidElement(child) && child.type === TerminalOutput) {
      const el = child as React.ReactElement<TerminalOutputProps>;
      outputChildren = el.props.children;
      return false;
    }
    return true;
  });

  const hasOutput = outputChildren != null && extractText(outputChildren).trim().length > 0;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={clsx(styles.textBox, className)}>
      <div
        className={styles.headerRow}
        onClick={toggleCollapse}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleCollapse()}
        aria-expanded={!isCollapsed}
      >
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
      {!isCollapsed && (
        <>
          <div className={styles.body}>{mainChildren}</div>
          {tip && (
            <div className={styles.footer}>
              <span className={styles.footerLabel}>{tip}</span>
            </div>
          )}
          {hasOutput && <div className={styles.output}>{outputChildren}</div>}
        </>
      )}
    </div>
  );
};

export default SimplePromptBlock;
