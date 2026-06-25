# UpdateDailyRecordDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [DailyRecordKind](./DailyRecordKind) | no |  |
| `occurredAt` | `string` | no | Date in YYYY-MM-DD format. |
| `occurredTime` | `object | null` | no | Time in HH:mm 24-hour format. Use null to clear. |
| `title` | `object | null` | no | Short label. Use null to clear. |
| `value` | `object | null` | no | Measured value. Use null to clear. |
| `unit` | `object | null` | no | Unit label. Use null to clear. |
| `note` | `object | null` | no | Free-text note. Use null to clear. |
| `payload` | `object | null` | no | Structured payload for kind-specific data. Use null to clear. |
| `attachments` | array<[DailyRecordAttachmentInputDto](./DailyRecordAttachmentInputDto)> | no | Replacement attachment metadata list. Omit to keep existing attachments; send [] to clear. |
