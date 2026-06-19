# HealthProbeDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `probe` | [HealthProbeType](./HealthProbeType) | yes |  |
| `status` | [HealthOverallStatus](./HealthOverallStatus) | yes |  |
| `checkedAt` | `string` | yes |  |
| `app` | [HealthAppInfoDto](./HealthAppInfoDto) | yes |  |
| `summary` | [HealthSummaryDto](./HealthSummaryDto) | yes |  |
| `components` | array<[HealthComponentDto](./HealthComponentDto)> | yes |  |
