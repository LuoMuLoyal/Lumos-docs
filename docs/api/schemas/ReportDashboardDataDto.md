# ReportDashboardDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `range` | `last_7_days` | `last_30_days` | yes |  |
| `startDate` | `string` | yes |  |
| `endDate` | `string` | yes |  |
| `generatedAt` | `string` | yes |  |
| `score` | [ReportDashboardScoreDto](./ReportDashboardScoreDto) | yes |  |
| `metrics` | array<[ReportMetricDto](./ReportMetricDto)> | yes |  |
| `trends` | array<[ReportTrendDto](./ReportTrendDto)> | yes |  |
| `findings` | array<[ReportFindingDto](./ReportFindingDto)> | yes |  |
| `patterns` | array<[ReportPatternDto](./ReportPatternDto)> | yes |  |
| `aiSummaryEnabled` | `boolean` | yes |  |
