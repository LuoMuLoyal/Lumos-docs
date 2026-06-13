# EnvironmentSnapshotDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `dataSource` | [EnvironmentDataSource](./EnvironmentDataSource) | yes |  |
| `updatedAt` | `string` | yes | ISO-8601 timestamp for the static reference data refresh. |
| `regionHint` | `string | null` | yes |  |
| `pollen` | [PollenIndicatorDto](./PollenIndicatorDto) | yes |  |
| `uv` | [UvIndicatorDto](./UvIndicatorDto) | yes |  |
| `airQuality` | [AirQualityIndicatorDto](./AirQualityIndicatorDto) | yes |  |
| `temperature` | [TemperatureIndicatorDto](./TemperatureIndicatorDto) | yes |  |
| `humidity` | [HumidityIndicatorDto](./HumidityIndicatorDto) | yes |  |
