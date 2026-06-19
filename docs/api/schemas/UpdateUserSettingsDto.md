# UpdateUserSettingsDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `aiSummariesEnabled` | `boolean` | no | Allow AI-generated summaries and advice. |
| `dataSharingConsent` | `boolean` | no | Consent to share anonymized data for research. |
| `assistantEnabled` | `boolean` | no | Allow the authenticated user to use the assistant feature. |
| `assistantMemoryEnabled` | `boolean` | no | Allow the assistant to reuse persisted conversation history as cross-conversation memory. |
| `assistantContext` | [UpdateAssistantContextSettingsDto](./UpdateAssistantContextSettingsDto) | no | Fine-grained permissions for what the assistant may read. |
