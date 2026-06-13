# User Settings

> Generated from Lucent OpenAPI tag grouping.

- Operations: `2`

## `GET /api/v1/user/settings`

- Summary: Get authenticated user settings
- Operation ID: `UserSettingsController_getSettings_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [UserSettingsResponseDto](../schemas/UserSettingsResponseDto) |

## `PATCH /api/v1/user/settings`

- Summary: Update authenticated user settings
- Operation ID: `UserSettingsController_updateSettings_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateUserSettingsDto](../schemas/UpdateUserSettingsDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [UserSettingsResponseDto](../schemas/UserSettingsResponseDto) |
