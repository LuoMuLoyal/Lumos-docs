# Daily Records

> Generated from Lucent OpenAPI tag grouping.

- Operations: `7`

## `GET /api/v1/user/daily-records`

- Summary: List daily records for a given date
- Operation ID: `DailyRecordsController_list_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `date` | yes | `string` |  |
| query | `kind` | no | `string` |  |
| query | `page` | no | `string` |  |
| query | `pageSize` | no | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [DailyRecordListResponseDto](../schemas/DailyRecordListResponseDto) |

## `POST /api/v1/user/daily-records`

- Summary: Create a daily record
- Operation ID: `DailyRecordsController_create_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [CreateDailyRecordDto](../schemas/CreateDailyRecordDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [DailyRecordResponseDto](../schemas/DailyRecordResponseDto) |

## `GET /api/v1/user/daily-records/{id}`

- Summary: Get a daily record by id
- Operation ID: `DailyRecordsController_get_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [DailyRecordResponseDto](../schemas/DailyRecordResponseDto) |

## `PATCH /api/v1/user/daily-records/{id}`

- Summary: Update a daily record
- Operation ID: `DailyRecordsController_update_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` |  |

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateDailyRecordDto](../schemas/UpdateDailyRecordDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [DailyRecordResponseDto](../schemas/DailyRecordResponseDto) |

## `DELETE /api/v1/user/daily-records/{id}`

- Summary: Soft-delete a daily record
- Operation ID: `DailyRecordsController_delete_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | `unknown` |

## `POST /api/v1/user/daily-records/attachments/images/presign-upload`

- Summary: Create a Tencent COS signed URL for daily record image upload
- Operation ID: `DailyRecordsController_createImageUpload_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [CreateDailyRecordImageUploadDto](../schemas/CreateDailyRecordImageUploadDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [DailyRecordImageUploadResponseDto](../schemas/DailyRecordImageUploadResponseDto) |

## `GET /api/v1/user/daily-records/summary`

- Summary: Get daily record summary (counts by kind)
- Operation ID: `DailyRecordsController_summary_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `date` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [DailyRecordSummaryResponseDto](../schemas/DailyRecordSummaryResponseDto) |
