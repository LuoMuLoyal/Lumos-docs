import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = fileURLToPath(new URL('../', import.meta.url))
const docsRoot = join(repoRoot, 'docs')
const apiRoot = join(docsRoot, 'api')
const localOpenApiPath = join(docsRoot, 'current', 'lucent-docs', 'openapi.json')
const workspaceOpenApiPath = resolve(repoRoot, '..', 'Lucent', 'docs', 'openapi.json')
const sourceOpenApiPath = existsSync(workspaceOpenApiPath)
  ? workspaceOpenApiPath
  : localOpenApiPath

if (!existsSync(sourceOpenApiPath)) {
  throw new Error('OpenAPI source file was not found.')
}

if (sourceOpenApiPath !== localOpenApiPath) {
  copyFileSync(sourceOpenApiPath, localOpenApiPath)
}

const spec = JSON.parse(readFileSync(localOpenApiPath, 'utf8'))
const schemas = spec.components?.schemas ?? {}
const operations = collectOperations(spec.paths ?? {})
const tagMap = buildTagMap(operations)

rmSync(apiRoot, { recursive: true, force: true })
mkdirSync(apiRoot, { recursive: true })

writeFile(
  join(apiRoot, 'index.md'),
  buildApiIndexMarkdown({
    openapiVersion: spec.openapi ?? 'unknown',
    operations,
    schemas,
    tagMap,
  }),
)

writeFile(
  join(apiRoot, 'tags', 'index.md'),
  buildTagsIndexMarkdown(tagMap),
)

for (const [tagName, tagInfo] of tagMap.entries()) {
  writeFile(
    join(apiRoot, 'tags', `${tagInfo.slug}.md`),
    buildTagPageMarkdown(tagName, tagInfo.operations),
  )
}

writeFile(
  join(apiRoot, 'schemas', 'index.md'),
  buildSchemasIndexMarkdown(schemas),
)

for (const [schemaName, schema] of Object.entries(schemas).sort((a, b) =>
  a[0].localeCompare(b[0], 'en'),
)) {
  writeFile(
    join(apiRoot, 'schemas', `${schemaName}.md`),
    buildSchemaPageMarkdown(schemaName, schema),
  )
}

function collectOperations(paths) {
  const methodOrder = ['get', 'post', 'put', 'patch', 'delete']
  const operations = []

  for (const pathName of Object.keys(paths).sort((a, b) =>
    a.localeCompare(b, 'en'),
  )) {
    const pathItem = paths[pathName] ?? {}

    for (const method of methodOrder) {
      const operation = pathItem[method]
      if (!operation) {
        continue
      }

      operations.push({
        method: method.toUpperCase(),
        path: pathName,
        summary: operation.summary ?? operation.operationId ?? `${method.toUpperCase()} ${pathName}`,
        operationId: operation.operationId ?? '',
        tags: operation.tags?.length ? operation.tags : ['Untagged'],
        security: operation.security ?? [],
        parameters: [
          ...(pathItem.parameters ?? []),
          ...(operation.parameters ?? []),
        ],
        requestBody: operation.requestBody ?? null,
        responses: operation.responses ?? {},
      })
    }
  }

  return operations
}

function buildTagMap(operations) {
  const tagEntries = new Map()
  const slugCounts = new Map()

  for (const operation of operations) {
    for (const tagName of operation.tags) {
      if (!tagEntries.has(tagName)) {
        tagEntries.set(tagName, {
          slug: uniqueSlug(tagName, slugCounts),
          operations: [],
        })
      }

      tagEntries.get(tagName).operations.push(operation)
    }
  }

  return new Map(
    Array.from(tagEntries.entries()).sort((a, b) =>
      a[0].localeCompare(b[0], 'en'),
    ),
  )
}

function uniqueSlug(value, counts) {
  const base = slugify(value)
  const seen = counts.get(base) ?? 0
  counts.set(base, seen + 1)
  return seen === 0 ? base : `${base}-${seen + 1}`
}

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'untagged'
}

function buildApiIndexMarkdown({ openapiVersion, operations, schemas, tagMap }) {
  const lines = [
    '# API Docs',
    '',
    '> Generated from Lucent OpenAPI. Do not edit these pages by hand.',
    '',
    `- OpenAPI version: \`${escapeInline(openapiVersion)}\``,
    `- Paths: \`${countDistinctPaths(operations)}\``,
    `- Operations: \`${operations.length}\``,
    `- Tags: \`${tagMap.size}\``,
    `- Schemas: \`${Object.keys(schemas).length}\``,
    '',
    '## Sections',
    '',
    '- [Tag Pages](./tags/)',
    '- [Schema Pages](./schemas/)',
    '',
    '## Tags',
    '',
    '| Tag | Operations | Link |',
    '| --- | ---: | --- |',
  ]

  for (const [tagName, tagInfo] of tagMap.entries()) {
    lines.push(
      `| ${escapeTable(tagName)} | ${tagInfo.operations.length} | [查看](./tags/${tagInfo.slug}) |`,
    )
  }

  lines.push('', '## Endpoint Index', '', '| Method | Path | Tag | Summary |', '| --- | --- | --- | --- |')

  for (const operation of operations) {
    const primaryTag = operation.tags[0] ?? 'Untagged'
    const tagInfo = tagMap.get(primaryTag)
    const tagLink = tagInfo ? `[${escapeTable(primaryTag)}](./tags/${tagInfo.slug})` : escapeTable(primaryTag)
    lines.push(
      `| \`${operation.method}\` | \`${escapeInline(operation.path)}\` | ${tagLink} | ${escapeTable(operation.summary)} |`,
    )
  }

  return `${lines.join('\n')}\n`
}

function buildTagsIndexMarkdown(tagMap) {
  const lines = [
    '# Tag Pages',
    '',
    '> Generated from Lucent OpenAPI tags.',
    '',
    '| Tag | Operations | Link |',
    '| --- | ---: | --- |',
  ]

  for (const [tagName, tagInfo] of tagMap.entries()) {
    lines.push(
      `| ${escapeTable(tagName)} | ${tagInfo.operations.length} | [查看](./${tagInfo.slug}) |`,
    )
  }

  return `${lines.join('\n')}\n`
}

function buildTagPageMarkdown(tagName, operations) {
  const lines = [
    `# ${tagName}`,
    '',
    '> Generated from Lucent OpenAPI tag grouping.',
    '',
    `- Operations: \`${operations.length}\``,
  ]

  for (const operation of operations) {
    lines.push(
      '',
      `## \`${operation.method} ${operation.path}\``,
      '',
      `- Summary: ${operation.summary}`,
      `- Operation ID: \`${operation.operationId || 'unknown'}\``,
      `- Auth: ${formatSecurity(operation.security)}`,
    )

    if (operation.parameters.length > 0) {
      lines.push('', '### Parameters', '', '| In | Name | Required | Type | Description |', '| --- | --- | --- | --- | --- |')

      for (const parameter of operation.parameters) {
        lines.push(
          `| ${escapeTable(parameter.in ?? '')} | \`${escapeInline(parameter.name ?? '')}\` | ${parameter.required ? 'yes' : 'no'} | ${renderType(parameter.schema, '../schemas')} | ${escapeTable(parameter.description ?? '')} |`,
        )
      }
    }

    if (operation.requestBody) {
      lines.push('', '### Request Body', '')
      const contentEntries = Object.entries(operation.requestBody.content ?? {})
      if (contentEntries.length === 0) {
        lines.push('- No request body schema metadata.')
      } else {
        lines.push('| Content-Type | Required | Schema |', '| --- | --- | --- |')
        for (const [contentType, mediaType] of contentEntries) {
          lines.push(
            `| \`${contentType}\` | ${operation.requestBody.required ? 'yes' : 'no'} | ${renderType(mediaType.schema, '../schemas')} |`,
          )
        }
      }
    }

    lines.push('', '### Responses', '', '| Status | Description | Schema |', '| --- | --- | --- |')
    for (const [status, response] of Object.entries(operation.responses)) {
      const responseSchema = firstJsonSchema(response)
      lines.push(
        `| \`${status}\` | ${escapeTable(response.description ?? '')} | ${renderType(responseSchema, '../schemas')} |`,
      )
    }
  }

  return `${lines.join('\n')}\n`
}

function buildSchemasIndexMarkdown(schemas) {
  const lines = [
    '# Schema Pages',
    '',
    '> Generated from Lucent OpenAPI component schemas.',
    '',
    '| Schema | Type | Link |',
    '| --- | --- | --- |',
  ]

  for (const [schemaName, schema] of Object.entries(schemas).sort((a, b) =>
    a[0].localeCompare(b[0], 'en'),
  )) {
    lines.push(
      `| \`${schemaName}\` | ${escapeTable(schema.type ?? inferCompositeKind(schema))} | [查看](./${schemaName}) |`,
    )
  }

  return `${lines.join('\n')}\n`
}

function buildSchemaPageMarkdown(schemaName, schema) {
  const lines = [
    `# ${schemaName}`,
    '',
    '> Generated from Lucent OpenAPI component schemas.',
    '',
    `- Type: \`${escapeInline(schema.type ?? inferCompositeKind(schema))}\``,
  ]

  if (schema.description) {
    lines.push(`- Description: ${schema.description}`)
  }

  if (schema.enum?.length) {
    lines.push(`- Enum: ${schema.enum.map((item) => `\`${escapeInline(String(item))}\``).join(', ')}`)
  }

  const compositionLines = describeComposition(schema)
  if (compositionLines.length > 0) {
    lines.push(...compositionLines)
  }

  const propertyRows = collectPropertyRows(schema)
  if (propertyRows.length > 0) {
    lines.push('', '## Properties', '', '| Name | Type | Required | Description |', '| --- | --- | --- | --- |')
    for (const row of propertyRows) {
      lines.push(
        `| \`${escapeInline(row.name)}\` | ${renderType(row.schema, '.')} | ${row.required ? 'yes' : 'no'} | ${escapeTable(row.description)} |`,
      )
    }
  }

  return `${lines.join('\n')}\n`
}

function collectPropertyRows(schema) {
  if (!schema || schema.type !== 'object' || !schema.properties) {
    return []
  }

  const required = new Set(schema.required ?? [])
  return Object.entries(schema.properties).map(([name, propertySchema]) => ({
    name,
    schema: propertySchema,
    required: required.has(name),
    description: propertySchema.description ?? '',
  }))
}

function describeComposition(schema) {
  const lines = []
  if (schema.allOf?.length) {
    lines.push(`- allOf: ${schema.allOf.map((item) => renderType(item, '.')).join(' + ')}`)
  }
  if (schema.oneOf?.length) {
    lines.push(`- oneOf: ${schema.oneOf.map((item) => renderType(item, '.')).join(' | ')}`)
  }
  if (schema.anyOf?.length) {
    lines.push(`- anyOf: ${schema.anyOf.map((item) => renderType(item, '.')).join(' | ')}`)
  }
  if (schema.additionalProperties) {
    lines.push(`- Additional properties: ${renderType(schema.additionalProperties, '.')}`)
  }
  return lines
}

function renderType(schema, schemaLinkBase) {
  if (!schema) {
    return '`unknown`'
  }

  if (schema.$ref) {
    const schemaName = schema.$ref.split('/').pop()
    return `[${schemaName}](${schemaLinkBase}/${schemaName})`
  }

  if (schema.enum?.length) {
    const enumText = schema.enum.map((value) => `\`${escapeInline(String(value))}\``).join(' | ')
    return schema.nullable ? `${enumText} | \`null\`` : enumText
  }

  if (schema.allOf?.length) {
    return schema.allOf.map((item) => renderType(item, schemaLinkBase)).join(' + ')
  }

  if (schema.oneOf?.length) {
    return schema.oneOf.map((item) => renderType(item, schemaLinkBase)).join(' | ')
  }

  if (schema.anyOf?.length) {
    return schema.anyOf.map((item) => renderType(item, schemaLinkBase)).join(' | ')
  }

  if (schema.type === 'array') {
    return `array<${renderType(schema.items, schemaLinkBase)}>${schema.nullable ? ' | `null`' : ''}`
  }

  if (schema.type === 'object') {
    if (schema.additionalProperties) {
      return `record<string, ${renderType(schema.additionalProperties, schemaLinkBase)}>${schema.nullable ? ' | `null`' : ''}`
    }
    return schema.nullable ? '`object | null`' : '`object`'
  }

  if (schema.type) {
    const typeText = schema.format ? `${schema.type} (${schema.format})` : schema.type
    return schema.nullable ? `\`${escapeInline(typeText)} | null\`` : `\`${escapeInline(typeText)}\``
  }

  return `\`${escapeInline(inferCompositeKind(schema))}\``
}

function firstJsonSchema(response) {
  if (!response?.content) {
    return null
  }

  const jsonContent = response.content['application/json']
  if (jsonContent?.schema) {
    return jsonContent.schema
  }

  const firstContent = Object.values(response.content)[0]
  return firstContent?.schema ?? null
}

function formatSecurity(security) {
  if (!Array.isArray(security) || security.length === 0) {
    return 'none'
  }

  const schemes = security.flatMap((entry) => Object.keys(entry))
  return schemes.length > 0
    ? schemes.map((scheme) => `\`${escapeInline(scheme)}\``).join(', ')
    : 'none'
}

function inferCompositeKind(schema) {
  if (schema.allOf?.length) {
    return 'allOf'
  }
  if (schema.oneOf?.length) {
    return 'oneOf'
  }
  if (schema.anyOf?.length) {
    return 'anyOf'
  }
  return 'unknown'
}

function countDistinctPaths(operations) {
  return new Set(operations.map((operation) => operation.path)).size
}

function writeFile(filePath, content) {
  mkdirSync(dirname(filePath), { recursive: true })
  writeFileSync(filePath, content, 'utf8')
}

function escapeTable(value) {
  return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>')
}

function escapeInline(value) {
  return String(value).replace(/`/g, '\\`')
}
