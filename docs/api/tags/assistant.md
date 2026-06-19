# Assistant

> Generated from Lucent OpenAPI tag grouping.

- Operations: `6`

## `GET /api/v1/user/assistant/capabilities`

- Summary: Get authenticated user assistant capabilities and permissions
- Operation ID: `AssistantController_getCapabilities_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AssistantCapabilitiesResponseDto](../schemas/AssistantCapabilitiesResponseDto) |

## `GET /api/v1/user/assistant/conversations`

- Summary: List recent persisted assistant conversations for the user
- Operation ID: `AssistantController_listRecentConversations_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AssistantConversationListResponseDto](../schemas/AssistantConversationListResponseDto) |

## `POST /api/v1/user/assistant/conversations/{conversationId}/open`

- Summary: Activate one persisted assistant conversation and return its full history
- Operation ID: `AssistantController_openConversation_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `conversationId` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AssistantConversationResponseDto](../schemas/AssistantConversationResponseDto) |

## `GET /api/v1/user/assistant/latest`

- Summary: Get the authenticated user latest persisted assistant conversation
- Operation ID: `AssistantController_getLatestConversation_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AssistantConversationResponseDto](../schemas/AssistantConversationResponseDto) |

## `POST /api/v1/user/assistant/latest/clear`

- Summary: Archive the authenticated user latest active assistant conversation
- Operation ID: `AssistantController_clearLatestConversation_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | `unknown` |

## `POST /api/v1/user/assistant/messages/stream`

- Summary: Stream authenticated user assistant response
- Operation ID: `AssistantController_streamMessages_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [StreamAssistantMessagesDto](../schemas/StreamAssistantMessagesDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AssistantStreamResultDto](../schemas/AssistantStreamResultDto) |
