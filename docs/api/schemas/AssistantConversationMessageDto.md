# AssistantConversationMessageDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | `user` | `assistant` | yes | Persisted conversation role visible to the client. |
| `content` | `string` | yes | Persisted Markdown-ready message content. |
| `usedTools` | array<`string`> | yes | Tool names recorded for this message. Non-empty for assistant messages that used tools. |
| `createdAt` | `string` | yes | ISO-8601 timestamp when the message was created. |
