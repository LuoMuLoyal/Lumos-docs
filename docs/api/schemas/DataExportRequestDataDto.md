# DataExportRequestDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Unique request identifier. |
| `status` | [DataExportStatus](./DataExportStatus) | yes |  |
| `requestedAt` | `string` | yes | ISO-8601 timestamp when the request was created. |
| `completedAt` | `string | null` | no |  |
| `downloadUrl` | `string | null` | no |  |
| `errorMessage` | `string | null` | no |  |
