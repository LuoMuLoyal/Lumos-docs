import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = fileURLToPath(new URL('../', import.meta.url))
const workspaceRoot = resolve(repoRoot, '..')
const docsRoot = join(repoRoot, 'docs')
const archiveTargetRoot = join(docsRoot, 'archive')
const normalizedWorkspaceRoot = toPosixPath(workspaceRoot)

const commonExcludedNames = new Set([
  '.git',
  '.gitkeep',
  '.DS_Store',
  'Thumbs.db',
  'node_modules',
  '.vitepress',
])

syncCurrentDocs()
syncArchiveDocs()
removeLegacyRawArchive()

function syncCurrentDocs() {
  const jobs = [
    {
      sourceRoot: resolve(workspaceRoot, 'Lucent', 'docs'),
      targetRoot: join(docsRoot, 'current', 'lucent-docs'),
      excludedRelativeRoots: [],
    },
    {
      sourceRoot: resolve(workspaceRoot, 'Luminous', 'docs'),
      targetRoot: join(docsRoot, 'current', 'luminous-docs'),
      excludedRelativeRoots: ['assets'],
    },
  ]

  for (const job of jobs) {
    ensureSourceExists(job.sourceRoot)
    rmSync(job.targetRoot, { recursive: true, force: true })
    copyDirectory(job.sourceRoot, job.targetRoot, job.excludedRelativeRoots)
  }
}

function syncArchiveDocs() {
  const sourceRoot = resolve(workspaceRoot, 'docs-archive')
  ensureSourceExists(sourceRoot)

  rmSync(archiveTargetRoot, { recursive: true, force: true })
  mkdirSync(archiveTargetRoot, { recursive: true })

  const sourceEntries = readdirSync(sourceRoot, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name, 'zh-CN'),
  )

  const snapshots = []

  for (const entry of sourceEntries) {
    if (commonExcludedNames.has(entry.name)) {
      continue
    }

    const sourcePath = join(sourceRoot, entry.name)
    const targetPath = join(archiveTargetRoot, entry.name)

    if (entry.isDirectory()) {
      syncArchiveSnapshot(sourcePath, targetPath, entry.name)
      snapshots.push({
        name: entry.name,
        hasReadme: existsSync(join(targetPath, 'index.md')),
        markdownCount: countMarkdownFiles(sourcePath),
      })
      continue
    }

    if (entry.isFile()) {
      mkdirSync(dirname(targetPath), { recursive: true })
      copyFileSync(sourcePath, targetPath)
    }
  }

  writeFile(
    join(archiveTargetRoot, 'index.md'),
    buildArchiveIndexMarkdown(snapshots),
  )
}

function syncArchiveSnapshot(sourceRoot, targetRoot, snapshotName) {
  rmSync(targetRoot, { recursive: true, force: true })
  mkdirSync(targetRoot, { recursive: true })

  const lucentDocsSource = join(sourceRoot, 'Lucent', 'docs')
  const luminousDocsSource = join(sourceRoot, 'Luminous', 'docs')
  const readmeSource = join(sourceRoot, 'README.md')

  if (existsSync(readmeSource)) {
    writeMarkdownFile(join(targetRoot, 'index.md'), readFileSync(readmeSource, 'utf8'))
  } else {
    writeFile(
      join(targetRoot, 'index.md'),
      `# ${snapshotName}\n\n历史归档快照。\n`,
    )
  }

  if (existsSync(lucentDocsSource)) {
    copyDirectory(lucentDocsSource, join(targetRoot, 'lucent-docs'), [])
    writeFile(
      join(targetRoot, 'lucent.md'),
      [
        '# Lucent Archive',
        '',
        `这里收录归档快照 \`${snapshotName}\` 中的 Lucent 文档副本。`,
        '',
        `左侧侧边栏会根据 \`archive/${snapshotName}/lucent-docs\` 目录中的 Markdown 文件自动生成。`,
        '',
      ].join('\n'),
    )
  }

  if (existsSync(luminousDocsSource)) {
    copyDirectory(luminousDocsSource, join(targetRoot, 'luminous-docs'), [])
    writeFile(
      join(targetRoot, 'luminous.md'),
      [
        '# Luminous Archive',
        '',
        `这里收录归档快照 \`${snapshotName}\` 中的 Luminous 文档副本。`,
        '',
        `左侧侧边栏会根据 \`archive/${snapshotName}/luminous-docs\` 目录中的 Markdown 文件自动生成。`,
        '',
      ].join('\n'),
    )
  }
}

function removeLegacyRawArchive() {
  rmSync(join(repoRoot, 'public', 'raw', 'archive'), {
    recursive: true,
    force: true,
  })
}

function copyDirectory(sourceRoot, targetRoot, excludedRelativeRoots) {
  mkdirSync(targetRoot, { recursive: true })

  for (const entry of readdirSync(sourceRoot, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name, 'zh-CN'),
  )) {
    if (commonExcludedNames.has(entry.name)) {
      continue
    }

    const sourcePath = join(sourceRoot, entry.name)
    const relativePath = toPosixPath(relative(sourceRoot, sourcePath))

    if (isExcludedRelativePath(relativePath, excludedRelativeRoots)) {
      continue
    }

    const targetPath = join(targetRoot, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath, [])
      continue
    }

    if (!entry.isFile()) {
      continue
    }

    if (entry.name.toLowerCase().endsWith('.md')) {
      writeMarkdownFile(targetPath, readFileSync(sourcePath, 'utf8'))
      continue
    }

    mkdirSync(dirname(targetPath), { recursive: true })
    copyFileSync(sourcePath, targetPath)
  }
}

function isExcludedRelativePath(relativePath, excludedRelativeRoots) {
  return excludedRelativeRoots.some((root) => {
    const normalizedRoot = toPosixPath(root)
    return (
      relativePath === normalizedRoot ||
      relativePath.startsWith(`${normalizedRoot}/`)
    )
  })
}

function buildArchiveIndexMarkdown(snapshots) {
  const lines = [
    '# Archive',
    '',
    '> Synced from the workspace `docs-archive` directory. Read-only historical material.',
    '',
    `- Snapshot count: \`${snapshots.length}\``,
    '',
    '## Usage Rules',
    '',
    '::: warning 历史材料不是当前依据',
    '除非你明确是在做考古、回溯或迁移比对，否则不要优先参考 Archive。',
    ':::',
    '',
    '- 先看 Current Docs 和 API Docs，最后才看 Archive。',
    '- 如果某个归档文件重新变成操作文档，应回到 owning repo 重建，而不是继续在 Archive 副本里维护。',
    '',
    '## Snapshots',
    '',
    '| Snapshot | Markdown Files | Entry |',
    '| --- | ---: | --- |',
  ]

  for (const snapshot of snapshots) {
    const entryLink = snapshot.hasReadme
      ? `[查看](/archive/${snapshot.name}/)`
      : 'No README'
    lines.push(
      `| \`${snapshot.name}\` | ${snapshot.markdownCount} | ${entryLink} |`,
    )
  }

  return `${lines.join('\n')}\n`
}

function countMarkdownFiles(rootPath) {
  let count = 0

  for (const entry of readdirSync(rootPath, { withFileTypes: true })) {
    const fullPath = join(rootPath, entry.name)

    if (commonExcludedNames.has(entry.name)) {
      continue
    }

    if (entry.isDirectory()) {
      count += countMarkdownFiles(fullPath)
      continue
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      count += 1
    }
  }

  return count
}

function ensureSourceExists(sourceRoot) {
  if (!existsSync(sourceRoot) || !statSync(sourceRoot).isDirectory()) {
    throw new Error(`Missing source directory: ${sourceRoot}`)
  }
}

function toPosixPath(value) {
  return value.replace(/\\/g, '/')
}

function sanitizeMarkdown(content) {
  const normalized = toPosixPath(content)
  const workspaceEscaped = escapeRegExp(normalizedWorkspaceRoot)

  return normalized
    .replace(new RegExp(`${workspaceEscaped}/docs-archive`, 'g'), 'docs-archive')
    .replace(new RegExp(`${workspaceEscaped}/DrugDataBase`, 'g'), 'DrugDataBase')
    .replace(new RegExp(`${workspaceEscaped}/Lucent/docs`, 'g'), 'Lucent/docs')
    .replace(new RegExp(`${workspaceEscaped}/Lucent`, 'g'), 'Lucent')
    .replace(new RegExp(`${workspaceEscaped}/Luminous/docs`, 'g'), 'Luminous/docs')
    .replace(new RegExp(`${workspaceEscaped}/Luminous`, 'g'), 'Luminous')
    .replace(new RegExp(`${workspaceEscaped}/?`, 'g'), 'Lumos workspace root/')
    .replaceAll('docs-archive\\', 'docs-archive/')
    .replaceAll('Lucent\\docs', 'Lucent/docs')
    .replaceAll('Luminous\\docs', 'Luminous/docs')
    .replaceAll('Lumos workspace root//', 'Lumos workspace root/')
    .replaceAll('Lumos workspace root/.', 'Lumos workspace root.')
    .replace(/Lumos workspace root\/(?=[`)\]\s]|$)/g, 'Lumos workspace root')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function writeMarkdownFile(filePath, content) {
  writeFile(filePath, sanitizeMarkdown(content))
}

function writeFile(filePath, content) {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, content, 'utf8')
}
