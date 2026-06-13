# Support Resources

> Generated from Lucent OpenAPI tag grouping.

- Operations: `2`

## `GET /api/v1/public/app-info`

- Summary: Get application metadata
- Operation ID: `SupportResourcesController_getAppInfo_v1`
- Auth: none

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AppInfoResponseDto](../schemas/AppInfoResponseDto) |

## `GET /api/v1/public/support-resources`

- Summary: Get static support resource entries
- Operation ID: `SupportResourcesController_getResources_v1`
- Auth: none

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `scope` | no | `campus` | `help` | `about` | Filter by scope: 'campus', 'help', 'about'. Default: all. |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [SupportResourceListResponseDto](../schemas/SupportResourceListResponseDto) |
