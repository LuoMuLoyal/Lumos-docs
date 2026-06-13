# DailyRecordImageUploadDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `provider` | `string` | yes |  |
| `bucket` | `string` | yes |  |
| `objectKey` | `string` | yes |  |
| `uploadUrl` | `string` | yes | Signed PUT URL for direct COS upload. |
| `headers` | `object` | yes | Headers that must be sent with the PUT upload. |
| `publicUrl` | `object` | yes | Optional public/CDN URL when TENCENT_COS_PUBLIC_BASE_URL is configured. |
| `expiresAt` | `string` | yes | Signed URL expiry timestamp (ISO 8601). |
| `maxSizeBytes` | `number` | yes | Maximum accepted upload size in bytes. |
