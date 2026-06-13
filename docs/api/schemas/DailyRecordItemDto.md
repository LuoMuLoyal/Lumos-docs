# DailyRecordItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Record id. |
| `kind` | [DailyRecordKind](./DailyRecordKind) | yes |  |
| `occurredAt` | `string` | yes | Date in YYYY-MM-DD format. |
| `title` | `object` | no | Short label. |
| `value` | `object` | no | Measured value. |
| `unit` | `object` | no | Unit label. |
| `note` | `object` | no | Free-text note. |
| `source` | `object` | no | Source. |
| `attachments` | array<[DailyRecordAttachmentDto](./DailyRecordAttachmentDto)> | yes |  |
| `createdAt` | `string` | yes | Created at (ISO 8601). |
| `updatedAt` | `string` | yes | Updated at (ISO 8601). |
