/**
 * MiniClaw 课程侧边栏配置
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  courseSidebar: [
    'intro',
    'chapters/chapter-00',
    {
      type: 'category',
      label: '第一章 OpenClaw 现象',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'chapters/chapter-01/index',
      },
      items: [
        'chapters/chapter-01/openclaw-phenomenon',
        'chapters/chapter-01/moltbook-experiment',
      ],
    },
    {
      type: 'category',
      label: '附录',
      collapsible: true,
      collapsed: true,
      items: [
        'appendix/ai-coding',
        'appendix/faq',
        'appendix/glossary',
      ],
    },
  ],
};

module.exports = sidebars;
