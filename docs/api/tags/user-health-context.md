# User Health Context

> Generated from Lucent OpenAPI tag grouping.

- Operations: `11`

## `GET /api/v1/user/health-context`

- Summary: Get the current user health context aggregate
- Operation ID: `UserHealthContextController_getUserHealthContext_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `POST /api/v1/user/health-context/allergies`

- Summary: Create an allergy record
- Operation ID: `UserHealthContextController_createAllergy_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [CreateHealthContextAllergyDto](../schemas/CreateHealthContextAllergyDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `PATCH /api/v1/user/health-context/allergies/{id}`

- Summary: Update an allergy record
- Operation ID: `UserHealthContextController_updateAllergy_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` | Allergy id |

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateHealthContextAllergyDto](../schemas/UpdateHealthContextAllergyDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `DELETE /api/v1/user/health-context/allergies/{id}`

- Summary: Deactivate an allergy record (soft delete)
- Operation ID: `UserHealthContextController_deleteAllergy_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` | Allergy id |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `POST /api/v1/user/health-context/conditions`

- Summary: Create a condition record
- Operation ID: `UserHealthContextController_createCondition_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [CreateHealthContextConditionDto](../schemas/CreateHealthContextConditionDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `PATCH /api/v1/user/health-context/conditions/{id}`

- Summary: Update a condition record
- Operation ID: `UserHealthContextController_updateCondition_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` | Condition id |

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateHealthContextConditionDto](../schemas/UpdateHealthContextConditionDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `DELETE /api/v1/user/health-context/conditions/{id}`

- Summary: Resolve a condition record (soft delete)
- Operation ID: `UserHealthContextController_deleteCondition_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` | Condition id |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `POST /api/v1/user/health-context/current-medicines`

- Summary: Add a current medicine record
- Operation ID: `UserHealthContextController_createCurrentMedicine_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [CreateCurrentMedicineDto](../schemas/CreateCurrentMedicineDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `PATCH /api/v1/user/health-context/current-medicines/{id}`

- Summary: Update a current medicine record
- Operation ID: `UserHealthContextController_updateCurrentMedicine_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` | Current medicine id |

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateCurrentMedicineDto](../schemas/UpdateCurrentMedicineDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `DELETE /api/v1/user/health-context/current-medicines/{id}`

- Summary: Deactivate a current medicine record (soft delete)
- Operation ID: `UserHealthContextController_deleteCurrentMedicine_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `id` | yes | `string` | Current medicine id |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |

## `PATCH /api/v1/user/health-context/profile`

- Summary: Update the current user health-context profile
- Operation ID: `UserHealthContextController_updateUserHealthContextProfile_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateHealthContextProfileDto](../schemas/UpdateHealthContextProfileDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthContextResponseDto](../schemas/HealthContextResponseDto) |
