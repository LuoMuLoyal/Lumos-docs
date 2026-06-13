import { readdirSync, statSync } from 'node:fs'
import { basename, extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'

const docsRoot = fileURLToPath(new URL('../', import.meta.url))

function toPosixPath(value: string): string {
  return value.replace(/\\/g, '/')
}

function toRoute(filePath: string): string {
  const relativePath = toPosixPath(relative(docsRoot, filePath))
  const withoutExt = relativePath.replace(/\.md$/i, '')

  if (withoutExt.endsWith('/README')) {
    return `/${withoutExt.slice(0, -'/README'.length)}/`
  }

  return `/${withoutExt}`
}

function toText(name: string): string {
  if (name === 'index.md') {
    return '概览'
  }

  if (name === 'README.md') {
    return 'README'
  }

  return name.replace(/\.md$/i, '')
}

function buildSidebarItems(dirPath: string): Array<Record<string, unknown>> {
  const entries = readdirSync(dirPath, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name, 'zh-CN'),
  )

  const items: Array<Record<string, unknown>> = []

  for (const entry of entries) {
    const fullPath = `${dirPath}/${entry.name}`

    if (entry.isDirectory()) {
      const childItems = buildSidebarItems(fullPath)

      if (childItems.length > 0) {
        items.push({
          text: entry.name,
          collapsed: true,
          items: childItems,
        })
      }

      continue
    }

    if (!entry.isFile() || extname(entry.name).toLowerCase() !== '.md') {
      continue
    }

    items.push({
      text: toText(entry.name),
      link: toRoute(fullPath),
    })
  }

  return items
}

const lucentDocsSidebar = buildSidebarItems(
  fileURLToPath(new URL('../current/lucent-docs', import.meta.url)),
)
const luminousDocsSidebar = buildSidebarItems(
  fileURLToPath(new URL('../current/luminous-docs', import.meta.url)),
)
const apiDocsSidebar = buildSidebarItems(
  fileURLToPath(new URL('../api', import.meta.url)),
)

export default defineConfig({
  lang: 'zh-CN',
  title: 'Lumos Docs',
  description: 'Lumos 工作区文档中枢',
  ignoreDeadLinks: [/^\/raw\//],
  themeConfig: {
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Current', link: '/current/' },
      { text: 'API', link: '/api/' },
      { text: 'Archive', link: '/archive/' },
    ],
    sidebar: [
      {
        text: '概览',
        items: [
          { text: 'Current Docs', link: '/current/' },
          { text: 'API Docs', link: '/api/' },
          { text: 'Lucent', link: '/current/lucent' },
          { text: 'Luminous', link: '/current/luminous' },
          { text: 'Archive 总览', link: '/archive/' },
        ],
      },
      {
        text: 'API Docs',
        collapsed: false,
        items: apiDocsSidebar,
      },
      {
        text: 'Lucent Docs',
        collapsed: false,
        items: lucentDocsSidebar,
      },
      {
        text: 'Luminous Docs',
        collapsed: false,
        items: luminousDocsSidebar,
      },
    ],
    footer: {
      message: 'Current docs remain owned by the Lucent and Luminous repositories.',
      copyright: 'Lumos workspace documentation hub',
    },
  },
})
