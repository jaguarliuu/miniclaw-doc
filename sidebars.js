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
        'chapters/chapter-01/paradigm-shift',
        'chapters/chapter-01/real-cases',
        'chapters/chapter-01/multi-agent',
        'chapters/chapter-01/history',
        'chapters/chapter-01/ecosystem',
        'chapters/chapter-01/why-build',
        'chapters/chapter-01/architecture',
      ],
    },
    {
      type: 'category',
      label: '第三章 开发环境与基础底座',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'chapters/chapter-03/index',
      },
      items: [
        'chapters/chapter-03/3.1-env-setup',
        'chapters/chapter-03/3.2-docker-compose',
        'chapters/chapter-03/3.3-flyway',
        'chapters/chapter-03/3.4-project-skeleton',
        'chapters/chapter-03/3.5-config-management',
      ],
    },
    {
      type: 'category',
      label: '第四章 LLM 对接与流式输出',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'chapters/chapter-04/index',
      },
      items: [
        'chapters/chapter-04/4.1-why-not-spring-ai',
        'chapters/chapter-04/4.2-openai-compatible-client',
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
