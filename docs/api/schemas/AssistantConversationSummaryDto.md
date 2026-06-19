# AssistantConversationSummaryDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Stable persisted conversation identifier. |
| `title` | `object | null` | yes | Optional server-derived conversation title. |
| `status` | `active` | `archived` | yes | Current conversation status. |
| `lastMessageAt` | `object | null` | yes | ISO-8601 timestamp of the latest conversation activity. |
| `createdAt` | `string` | yes | ISO-8601 creation timestamp. |
| `updatedAt` | `string` | yes | ISO-8601 update timestamp. |
