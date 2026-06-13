# DailyRecordAttachmentDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Attachment id. |
| `kind` | [DailyRecordAttachmentKind](./DailyRecordAttachmentKind) | yes |  |
| `objectKey` | `string` | yes | Object storage key. |
| `bucket` | `object` | no | Object storage bucket. |
| `provider` | `object` | no | Storage provider. |
| `fileName` | `object` | no | Original file name. |
| `contentType` | `object` | no | MIME content type. |
| `sizeBytes` | `object` | no | File size in bytes. |
| `width` | `object` | no | Image width in pixels. |
| `height` | `object` | no | Image height in pixels. |
| `publicUrl` | `object` | no | Public or signed display URL. |
| `createdAt` | `string` | yes | Created at (ISO 8601). |
