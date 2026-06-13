# CreateDailyRecordDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [DailyRecordKind](./DailyRecordKind) | yes |  |
| `occurredAt` | `string` | yes | Date in YYYY-MM-DD format. |
| `title` | `string` | no | Short label. |
| `value` | `string` | no | Measured value. |
| `unit` | `string` | no | Unit label. |
| `note` | `string` | no | Free-text note. |
| `attachments` | array<[DailyRecordAttachmentInputDto](./DailyRecordAttachmentInputDto)> | no | Attachment metadata. File upload itself is handled separately. |
