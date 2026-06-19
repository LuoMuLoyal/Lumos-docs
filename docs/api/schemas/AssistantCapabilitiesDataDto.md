# AssistantCapabilitiesDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `phase` | `string` | yes | Current backend rollout phase for the assistant. |
| `assistantEnabled` | `boolean` | yes | Whether the user has left the assistant enabled in settings. |
| `assistantMemoryEnabled` | `boolean` | yes | Whether cross-conversation assistant memory reuse is enabled for this user. |
| `assistantContext` | [AssistantContextSettingsDto](./AssistantContextSettingsDto) | yes | Fine-grained assistant context permissions from user settings. |
| `chatModelConfigured` | `boolean` | yes | Whether the configured chat model role exists server-side. |
| `interactiveChatReady` | `boolean` | yes | Whether an actual end-user chat interaction route is ready to be exposed. |
| `langGraphReady` | `boolean` | yes | Whether the LangGraph orchestration foundation is active. |
| `streamingSupported` | `boolean` | yes | Whether the current backend intends to stream responses. |
| `streamingTransport` | `string` | yes | Recommended streaming transport for the current chat contract. |
| `markdownRenderingRecommended` | `boolean` | yes | Whether the frontend should expect Markdown output and render it faithfully. |
| `ragEnabled` | `boolean` | yes | Whether medicine-leaflet retrieval augmentation is currently enabled. |
| `tools` | array<[AssistantToolCapabilityDto](./AssistantToolCapabilityDto)> | yes | Tool-by-tool capability breakdown after combining system state and user permissions. |
| `updatedAt` | `string | null` | yes | ISO-8601 timestamp of the latest related settings update. |
