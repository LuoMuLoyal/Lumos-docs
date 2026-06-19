# UserSettingsDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `aiSummariesEnabled` | `boolean` | yes | Allow AI-generated summaries and advice. |
| `dataSharingConsent` | `boolean` | yes | Consent to share anonymized data for research. |
| `assistantEnabled` | `boolean` | yes | Allow the authenticated user to use the assistant feature. |
| `assistantMemoryEnabled` | `boolean` | yes | Allow the assistant to reuse persisted conversation history as cross-conversation memory. |
| `assistantContext` | [AssistantContextSettingsDto](./AssistantContextSettingsDto) | yes | Fine-grained assistant context permissions. |
| `updatedAt` | `string | null` | yes | ISO-8601 timestamp of last update. |
