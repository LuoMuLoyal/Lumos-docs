# DailyRecordItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Record id. |
| `kind` | [DailyRecordKind](./DailyRecordKind) | yes |  |
| `occurredAt` | `string` | yes | Date in YYYY-MM-DD format. |
| `occurredTime` | `object | null` | no | Time in HH:mm 24-hour format when available. |
| `title` | `object` | no | Short label. |
| `value` | `object` | no | Measured value. |
| `unit` | `object` | no | Unit label. |
| `note` | `object` | no | Free-text note. |
| `source` | `object` | no | Source. |
| `payload` | `object` | no | Structured payload for kind-specific data. For sleep: { startAt, endAt, durationMinutes, quality?, deepMinutes?, lightMinutes?, remMinutes? }. |
| `attachments` | array<[DailyRecordAttachmentDto](./DailyRecordAttachmentDto)> | yes |  |
| `createdAt` | `string` | yes | Created at (ISO 8601). |
| `updatedAt` | `string` | yes | Updated at (ISO 8601). |
