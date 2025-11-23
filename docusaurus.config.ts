import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MiLiR Lab',
  tagline: 'Apply what you learn',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://milir-lab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MiLiR-Lab', // Usually your GitHub org/user name.
  projectName: 'milir-lab.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MiLiR-Lab/milir-lab.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MiLiR-Lab/milir-lab.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['zh', 'en'],
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/',
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: ' ',
      logo: {
        alt: ' ',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          sidebarId: 'docusSidebar',
          position: 'left',
          label: '网站开发',
          items: [
            {
              type: 'doc',
              label: '文档开发',
              docId: 'tools/docusaurus/README',
            },
          ],
        },
      ],
    },
  footer: {
    style: 'dark',
    links: [
      {
        title: '联系方式',
        items: [
          {
            label: '联系我们',
            to: '/docs/contact',
          },
        ],
      },
      {
        title: '开源社区',
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/MiLiR-Lab/milir-lab.github.io',
          },
        ],
      },
      {
        title: '更新情报',
        items: [
          {
            label: '网站更新',
            href: '/blog',
          },
        ],
      },
    ],
    // copyright: `Copyright © ${new Date().getFullYear()} MiLiR Lab, Inc. Built with Docusaurus.`,
  },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
