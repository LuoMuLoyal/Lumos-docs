# AssistantConversationResponseDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `number` | yes | Result code. |
| `message` | `string` | yes | Message. |
| `data` | [AssistantConversationDataDto](./AssistantConversationDataDto) | yes | Persisted conversation payload, or null when none exists. |
