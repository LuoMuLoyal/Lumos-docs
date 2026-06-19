# AssistantConversationListResponseDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | yes | Result code. |
| `message` | `string` | yes | Message. |
| `data` | array<[AssistantConversationSummaryDto](./AssistantConversationSummaryDto)> | yes | Recent persisted conversations for the authenticated user, newest first. |
