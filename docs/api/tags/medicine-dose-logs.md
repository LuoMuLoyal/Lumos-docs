# Medicine Dose Logs

> Generated from Lucent OpenAPI tag grouping.

- Operations: `4`

## `GET /api/v1/user/medicine-dose-logs`

- Summary: List dose logs for a date
- Operation ID: `MedicineDoseLogsController_list_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `date` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [DoseLogListResponseDto](../schemas/DoseLogListResponseDto) |

## `POST /api/v1/user/medicine-dose-logs`

- Summary: Create a dose log
- Operation ID: `MedicineDoseLogsController_create_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [CreateDoseLogDto](../schemas/CreateDoseLogDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [DoseLogResponseDto](../schemas/DoseLogResponseDto) |

## `PATCH /api/v1/user/medicine-dose-logs/{id}`

- Summary: Update a dose log
- Operation ID: `MedicineDoseLogsController_update_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` |  |

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateDoseLogDto](../schemas/UpdateDoseLogDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [DoseLogResponseDto](../schemas/DoseLogResponseDto) |

## `DELETE /api/v1/user/medicine-dose-logs/{id}`

- Summary: Soft-delete a dose log
- Operation ID: `MedicineDoseLogsController_delete_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | `unknown` |
