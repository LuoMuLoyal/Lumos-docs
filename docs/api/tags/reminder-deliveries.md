# Reminder Deliveries

> Generated from Lucent OpenAPI tag grouping.

- Operations: `1`

## `GET /api/v1/user/reminder-deliveries`

- Summary: List reminder delivery audit logs
- Operation ID: `ReminderDeliveriesController_list_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `date` | no | `string` | Optional scheduled date filter in YYYY-MM-DD format. |
| query | `limit` | no | `string` | Maximum rows to return. Clamped to 1-100. |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [ReminderDeliveryListResponseDto](../schemas/ReminderDeliveryListResponseDto) |
