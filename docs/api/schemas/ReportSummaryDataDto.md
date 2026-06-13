# ReportSummaryDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `range` | `last_7_days` | `last_30_days` | yes |  |
| `startDate` | `string` | yes |  |
| `endDate` | `string` | yes |  |
| `generatedAt` | `string` | yes |  |
| `summary` | `string` | yes |  |
| `bullets` | array<[ReportSummaryBulletDto](./ReportSummaryBulletDto)> | yes |  |
| `actionLabel` | `string` | yes |  |
| `confidenceNote` | `string` | yes |  |
