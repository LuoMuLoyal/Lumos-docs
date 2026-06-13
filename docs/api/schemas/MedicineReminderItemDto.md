# MedicineReminderItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Reminder id. |
| `currentMedicineId` | `object` | no | Linked current medicine id. |
| `label` | `object` | no | Reminder label. |
| `scheduledHour` | `number` | yes | Scheduled local hour, 0-23. |
| `scheduledMinute` | `number` | yes | Scheduled local minute, 0-59. |
| `daysOfWeek` | array<`number`> | `null` | no | Weekday numbers 0-6. Null means every day. |
| `startDate` | `object | null` | no | Date in YYYY-MM-DD format when the reminder starts. |
| `endDate` | `object | null` | no | Date in YYYY-MM-DD format when the reminder ends. |
| `isActive` | `boolean` | yes | Whether this reminder is active. |
| `note` | `object` | no | User note. |
| `createdAt` | `string` | yes | Created at (ISO 8601). |
| `updatedAt` | `string` | yes | Updated at (ISO 8601). |
