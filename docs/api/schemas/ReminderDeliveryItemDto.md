# ReminderDeliveryItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Delivery log id. |
| `reminderId` | `object` | no | Linked medicine reminder id. |
| `deviceId` | `object` | no | Target device id. |
| `channel` | `string` | yes | Delivery channel. |
| `status` | `string` | yes | Delivery status. |
| `scheduledFor` | `string` | yes | Scheduled delivery time (ISO 8601). |
| `deliveredAt` | `object` | no | Actual delivery time (ISO 8601). |
| `errorMessage` | `object` | no | Failure reason, if any. |
| `createdAt` | `string` | yes | Created at (ISO 8601). |
