# CreateMedicineReminderDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `currentMedicineId` | `string` | no | Linked current medicine id. |
| `label` | `object` | no | Reminder label. |
| `scheduledHour` | `number` | yes | Scheduled local hour, 0-23. |
| `scheduledMinute` | `number` | yes | Scheduled local minute, 0-59. |
| `daysOfWeek` | array<`number`> | `null` | no | Weekday numbers 0-6, where null means every day. |
| `startDate` | `object | null` | no | Date in YYYY-MM-DD format when the reminder starts. |
| `endDate` | `object | null` | no | Date in YYYY-MM-DD format when the reminder ends. |
| `isActive` | `boolean` | no | Whether this reminder is active. |
| `note` | `object` | no | User note. |
