import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MiLiR-Lab',
  tagline: 'Author: Wu MinLong',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://milir-lab.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MiLiR-Lab', // Usually your GitHub org/user name.
  projectName: 'milir-lab.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Usually your repo branch.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
            'https://github.com/MiLiR-Lab/milir-lab.github.io',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/MiLiR-Lab/milir-lab.github.io',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '',
      logo: {
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'dropdown',
          sidebarId: 'devToolsSidebar',
          position: 'left',
          label: '通用工具',
          items: [
            // {
            //   type: 'doc',
            //   label: 'Docusaurus',
            //   docId: 'docusaurus/README',
            // },
            // {
            //   type: 'doc',
            //   label: 'Git GitHub GitLab',
            //   docId: 'git/README',
            // },
            // {
            //   type: 'doc',
            //   label: 'Windows Subsystem for Linux',
            //   docId: 'wsl/README',
            // },
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'progLangsSidebar',
          position: 'left',
          label: '编程语言',
          items: [
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'embeddedDevSidebar',
          position: 'left',
          label: '嵌入式开发',
          items: [
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'robotOsSidebar',
          position: 'left',
          label: '机器人开发',
          items: [
          ]
        },
        {
          href: 'https://github.com/MiLiR-Lab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} [ MiLiR - Lab ], Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
