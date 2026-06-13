import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Lumos Docs',
  description: 'Lumos 工作区文档中枢',
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Current', link: '/current/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: 'Archive', link: '/archive/' },
    ],
    sidebar: [
      {
        text: '概览',
        items: [
          { text: 'Current Docs', link: '/current/' },
          { text: 'Lucent', link: '/current/lucent' },
          { text: 'Luminous', link: '/current/luminous' },
          { text: 'Wiki 总览', link: '/wiki/' },
          { text: 'Archive 总览', link: '/archive/' },
        ],
      },
    ],
    footer: {
      message: 'Current docs remain owned by the Lucent and Luminous repositories.',
      copyright: 'Lumos workspace documentation hub',
    },
  },
})
