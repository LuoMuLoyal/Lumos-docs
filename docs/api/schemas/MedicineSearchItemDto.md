# MedicineSearchItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Stable medicine id. |
| `source` | `drugbank` | `cn` | yes | Knowledge source. |
| `name` | `string` | yes | Display name. |
| `subtitle` | `object | null` | yes | Short supporting subtitle. |
| `summary` | `object | null` | yes | Short preview summary. |
| `tags` | array<`string`> | yes | Compact tags for search cards. |
| `imageUrl` | `object | null` | yes | Optional image URL. |
| `matchedBy` | array<`string`> | yes | Which fields matched the current query. |
