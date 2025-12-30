import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'LvyJS',
  tagline: '为 nodejs 应用而设计的打包构建工具',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lvyjs.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lvyjs.dev/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lvyjs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lemonade-lab/lvyjs-docs/blob/main'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'LvyJS',
      // logo: {
      //   alt: 'Miao-Yunzai Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          position: 'left',
          label: '文档',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar'
        },
        { to: 'blog', label: '动态', position: 'left' }, // or position: 'right'
        {
          position: 'right',
          label: '编辑',
          href: 'https://github.com/lemonade-lab/lvyjs-docs/blob/main/docs/1-intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab/lvyjs/tree/main/packages/create-lvyjs/template',
          label: '模板'
        },
        {
          position: 'right',
          href: 'https://github.com/lemonade-lab/lvyjs',
          label: '源码'
        }
      ]
    },
    /**
     * 页脚
     */
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: '简介',
              to: '/docs/intro'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: '问题反馈',
              href: 'https://qm.qq.com/q/tpMYpkLXJ8'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'alemonjs',
              href: 'https://github.com/lemonade-lab/alemonjs'
            }
          ]
        }
      ],
      copyright: `Released under the MIT License. (dev) <br/> Copyright © 2024-present LvyJS Contributors`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,

  // themes: ['@docusaurus/theme-live-codeblock'],
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }
    ]
  ]
}

export default config
