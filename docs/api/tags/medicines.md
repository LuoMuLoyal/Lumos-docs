# Medicines

> Generated from Lucent OpenAPI tag grouping.

- Operations: `2`

## `GET /api/v1/medicines`

- Summary: Search medicines from a selected knowledge source
- Operation ID: `MedicinesController_search_v1`
- Auth: none

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `source` | no | `drugbank` | `cn` | Knowledge source selector. |
| query | `q` | no | `string` | Search keyword. |
| query | `page` | no | `unknown` | Page number, 1-based. |
| query | `pageSize` | no | `unknown` | Page size. |
| header | `x-bypass-cache` | no | `string` | Set to true/1/no-cache to bypass medicines read cache for this request only. |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [MedicineSearchResponseDto](../schemas/MedicineSearchResponseDto) |

## `GET /api/v1/medicines/{id}`

- Summary: Get medicine detail from a selected knowledge source
- Operation ID: `MedicinesController_getDetail_v1`
- Auth: none

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` | Medicine id in the selected source |
| query | `source` | no | `drugbank` | `cn` | Knowledge source selector. |
| header | `x-bypass-cache` | no | `string` | Set to true/1/no-cache to bypass medicines read cache for this request only. |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [MedicineDetailResponseDto](../schemas/MedicineDetailResponseDto) |
