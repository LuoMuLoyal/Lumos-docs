# Data Export

> Generated from Lucent OpenAPI tag grouping.

- Operations: `2`

## `POST /api/v1/user/data-export-requests`

- Summary: Create a new data export request
- Operation ID: `DataExportController_createRequest_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [DataExportRequestResponseDto](../schemas/DataExportRequestResponseDto) |

## `GET /api/v1/user/data-export-requests/latest`

- Summary: Get the latest data export request
- Operation ID: `DataExportController_getLatestRequest_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [DataExportLatestResponseDto](../schemas/DataExportLatestResponseDto) |
