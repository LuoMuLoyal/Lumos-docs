# Environment

> Generated from Lucent OpenAPI tag grouping.

- Operations: `1`

## `GET /api/v1/environment/snapshot`

- Summary: Get static environment snapshot reference data
- Operation ID: `EnvironmentController_getSnapshot_v1`
- Auth: none

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `lat` | no | `number` | Approximate latitude. |
| query | `lon` | no | `number` | Approximate longitude. |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [EnvironmentSnapshotResponseDto](../schemas/EnvironmentSnapshotResponseDto) |
