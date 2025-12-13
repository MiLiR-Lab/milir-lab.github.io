import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList';
import SimplePromptBlock, { TerminalOutput } from '../components/SimplePromptBlock';
import Collapsible from '../components/Collapsible';

export default {
  ...MDXComponents,
  Tabs,
  TabItem,
  DocCardList,
  Terminal: SimplePromptBlock,
  TerminalOutput,
  CodeFile: Collapsible,
};
