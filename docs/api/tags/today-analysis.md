# Today Analysis

> Generated from Lucent OpenAPI tag grouping.

- Operations: `2`

## `POST /api/v1/user/today-analysis/generate`

- Summary: Generate authenticated user today AI analysis
- Operation ID: `TodayAnalysisController_generate_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [GenerateTodayAnalysisDto](../schemas/GenerateTodayAnalysisDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [TodayAnalysisResponseDto](../schemas/TodayAnalysisResponseDto) |

## `POST /api/v1/user/today-analysis/generate/stream`

- Summary: Stream authenticated user today AI analysis generation
- Operation ID: `TodayAnalysisController_generateStream_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [GenerateTodayAnalysisDto](../schemas/GenerateTodayAnalysisDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [TodayAnalysisStreamResultDto](../schemas/TodayAnalysisStreamResultDto) |
