# Reports

> Generated from Lucent OpenAPI tag grouping.

- Operations: `3`

## `GET /api/v1/user/reports/dashboard`

- Summary: Get authenticated user report dashboard
- Operation ID: `ReportsController_getDashboard_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `range` | no | `last_7_days` | `last_30_days` | Supported report aggregation range. |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [ReportDashboardResponseDto](../schemas/ReportDashboardResponseDto) |

## `POST /api/v1/user/reports/summary/generate`

- Summary: Generate authenticated user AI summary for report
- Operation ID: `ReportsController_generateSummary_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [GenerateReportSummaryDto](../schemas/GenerateReportSummaryDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [ReportSummaryResponseDto](../schemas/ReportSummaryResponseDto) |

## `POST /api/v1/user/reports/summary/generate/stream`

- Summary: Stream authenticated user AI summary generation for report
- Operation ID: `ReportsController_generateSummaryStream_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [GenerateReportSummaryDto](../schemas/GenerateReportSummaryDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [ReportSummaryStreamResultDto](../schemas/ReportSummaryStreamResultDto) |
