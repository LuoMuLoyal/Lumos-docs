# ReportMetricDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | `medication` | `water` | `sleep` | yes |  |
| `value` | `string` | yes |  |
| `unit` | `string` | yes |  |
| `status` | `good` | `stable` | `needs_attention` | `insufficient_data` | yes |  |
| `delta` | `string` | yes |  |
| `direction` | `up` | `down` | `flat` | yes |  |
| `sparkline` | array<`number`> | yes |  |
