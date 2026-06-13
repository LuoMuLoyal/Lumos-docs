# UserConditionItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Condition id. |
| `label` | `string` | yes | Condition label. |
| `status` | [UserConditionStatus](./UserConditionStatus) | yes | Condition status. |
| `diagnosedAt` | `object | null` | yes | Diagnosis date in YYYY-MM-DD format. |
| `resolvedAt` | `object | null` | yes | Resolved date in YYYY-MM-DD format. |
| `note` | `object | null` | yes | User note for the condition. |
| `extras` | record<string, `unknown`> | `null` | yes | Sparse condition extensions stored in jsonb. |
| `createdAt` | `string` | yes | Created time in ISO 8601 format. |
| `updatedAt` | `string` | yes | Updated time in ISO 8601 format. |
