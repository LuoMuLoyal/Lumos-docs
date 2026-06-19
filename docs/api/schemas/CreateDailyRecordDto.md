# CreateDailyRecordDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [DailyRecordKind](./DailyRecordKind) | yes |  |
| `occurredAt` | `string` | yes | Date in YYYY-MM-DD format. For sleep records this is the wake date (the morning the user wakes up from that sleep). |
| `title` | `string` | no | Short label. |
| `value` | `string` | no | Measured value. |
| `unit` | `string` | no | Unit label. |
| `note` | `string` | no | Free-text note. |
| `payload` | `object` | no | Structured payload for kind-specific data. For sleep: { startAt, endAt, durationMinutes, quality?, deepMinutes?, lightMinutes?, remMinutes? }. endAt is an ISO 8601 timestamp whose date component matches occurredAt (wake date). startAt is the bedtime ISO 8601 timestamp and may fall on the day before occurredAt for cross-midnight sleep. |
| `attachments` | array<[DailyRecordAttachmentInputDto](./DailyRecordAttachmentInputDto)> | no | Attachment metadata. File upload itself is handled separately. |
