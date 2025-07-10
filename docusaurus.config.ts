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
  deploymentBranch: 'pages', // Usually your repo branch.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/MiLiR-Lab/milir-lab.github.io',
        },
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
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          sidebarId: 'devToolsSidebar',
          position: 'left',
          label: '通用工具',
          items: [
            {
              type: 'doc',
              label: '文档语法',
              docId: 'docTools/docusaurus/README',
            },
            {
              type: 'doc',
              label: '虚拟环境',
              docId: 'venv/README',
            },
            {
              type: 'doc',
              label: '团队合作',
              docId: 'teamWork/README',
            },
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'progLangsSidebar',
          position: 'left',
          label: '编程语言',
          items: [
          {
            type: 'doc',
            label: 'C 语言',
            docId: 'c/README',
          },
          {
              type: 'doc',
              label: 'C++ 语言',
              docId: 'cpp/README',
          },
          {
              type: 'doc',
              label: 'Python 语言',
              docId: 'python/README',
          },
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'embeddedDevSidebar',
          position: 'left',
          label: '嵌入式开发',
          items: [
          {
            type: 'doc',
            label: 'ESP32 开发',
            docId: 'esp/README',
          },
          {
            type: 'doc',
            label: 'STM32 开发',
            docId: 'stm/README',
          },
          ]
        },
        {
          type: 'dropdown',
          sidebarId: 'robotOsSidebar',
          position: 'left',
          label: '机器人开发',
          items: [
          {
            type: 'doc',
            label: 'ROS1 开发',
            docId: 'ros1/README',
          },
          {
            type: 'doc',
            label: 'ROS2 开发',
            docId: 'ros2/ros2_base/README',
          },
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
