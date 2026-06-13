# Medicine Reminders

> Generated from Lucent OpenAPI tag grouping.

- Operations: `4`

## `GET /api/v1/user/medicine-reminders`

- Summary: List medicine reminder schedules
- Operation ID: `MedicineRemindersController_list_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `activeOnly` | no | `string` | Set to true to return active reminders only. |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [MedicineReminderListResponseDto](../schemas/MedicineReminderListResponseDto) |

## `POST /api/v1/user/medicine-reminders`

- Summary: Create a medicine reminder schedule
- Operation ID: `MedicineRemindersController_create_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [CreateMedicineReminderDto](../schemas/CreateMedicineReminderDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [MedicineReminderResponseDto](../schemas/MedicineReminderResponseDto) |

## `PATCH /api/v1/user/medicine-reminders/{id}`

- Summary: Update a medicine reminder schedule
- Operation ID: `MedicineRemindersController_update_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` |  |

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateMedicineReminderDto](../schemas/UpdateMedicineReminderDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [MedicineReminderResponseDto](../schemas/MedicineReminderResponseDto) |

## `DELETE /api/v1/user/medicine-reminders/{id}`

- Summary: Soft-delete a medicine reminder schedule
- Operation ID: `MedicineRemindersController_delete_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | `unknown` |
