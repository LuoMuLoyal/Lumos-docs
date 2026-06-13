# DailyRecordAttachmentInputDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [DailyRecordAttachmentKind](./DailyRecordAttachmentKind) | no |  |
| `objectKey` | `string` | yes | Object storage key, stable across signed URL rotations. |
| `bucket` | `object` | no | Object storage bucket. |
| `provider` | `object` | no | Storage provider, currently tencent-cos. |
| `fileName` | `object` | no | Original file name. |
| `contentType` | `object` | no | MIME content type. |
| `sizeBytes` | `object` | no | File size in bytes. |
| `width` | `object` | no | Image width in pixels. |
| `height` | `object` | no | Image height in pixels. |
| `publicUrl` | `object` | no | Optional public or already-signed display URL. |
