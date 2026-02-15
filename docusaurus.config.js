// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MiniClaw',
  tagline: 'AI Agent 实战课程',
  favicon: 'img/favicon.ico',

  url: 'https://jaguarliuu.github.io',
  baseUrl: '/miniclaw-doc/',

  organizationName: 'jaguarliuu',
  projectName: 'miniclaw-doc',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    navbar: {
      title: 'MiniClaw',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'courseSidebar',
          position: 'left',
          label: '课程内容',
        },
        {
          to: '/outline',
          label: '课程大纲',
          position: 'left',
        },
        {
          href: 'https://github.com/jaguarliuu/miniclaw',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'MiniClaw',
    },
    prism: {
      additionalLanguages: ['java', 'bash', 'json', 'yaml', 'python', 'sql'],
    },
  },
};

module.exports = config;
