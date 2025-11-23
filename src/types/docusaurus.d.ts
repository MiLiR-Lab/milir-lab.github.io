declare module '@docusaurus/Link' {
  import type { ComponentProps } from 'react';
  import type { Props as LinkProps } from '@docusaurus/Link';
  const Link: (props: LinkProps) => JSX.Element;
  export default Link;
}

declare module '@docusaurus/useDocusaurusContext' {
  const useDocusaurusContext: () => {
    siteConfig: any;
    siteMetadata: any;
  };
  export default useDocusaurusContext;
}

declare module '@theme/Layout' {
  import type { ComponentProps } from 'react';
  type LayoutProps = ComponentProps<'div'> & {
    title?: string;
    description?: string;
    noFooter?: boolean;
    wrapperClassName?: string;
    // Add other props as needed
  };
  const Layout: (props: LayoutProps) => JSX.Element;
  export default Layout;
}

declare module '@theme/Heading' {
  import type { ComponentProps } from 'react';
  type HeadingProps = ComponentProps<'h1'> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
  const Heading: (props: HeadingProps) => JSX.Element;
  export default Heading;
}

declare module '@theme/Tabs' {
  import type { ComponentProps } from 'react';
  type TabsProps = ComponentProps<'div'> & {
    children: React.ReactNode;
    defaultValue?: string;
    values?: { value: string; label: string }[];
    groupId?: string;
  };
  const Tabs: (props: TabsProps) => JSX.Element;
  export default Tabs;
}

declare module '@theme/TabItem' {
  import type { ComponentProps } from 'react';
  type TabItemProps = ComponentProps<'div'> & {
    children: React.ReactNode;
    value: string;
    label?: string;
    default?: boolean;
    attributes?: Record<string, unknown>;
  };
  const TabItem: (props: TabItemProps) => JSX.Element;
  export default TabItem;
}

declare module '@theme/DocCardList' {
  import type { ComponentProps } from 'react';
  type DocCardListProps = ComponentProps<'div'> & {
    items: any[];
    className?: string;
  };
  const DocCardList: (props: DocCardListProps) => JSX.Element;
  export default DocCardList;
}

declare module '@theme-original/MDXComponents' {
  import type { ComponentType } from 'react';
  const MDXComponents: Record<string, ComponentType<any>>;
  export default MDXComponents;
}
