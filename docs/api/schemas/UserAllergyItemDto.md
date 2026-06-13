# UserAllergyItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Allergy id. |
| `kind` | [UserAllergyKind](./UserAllergyKind) | yes | Allergy kind. |
| `label` | `string` | yes | User-visible allergy label. |
| `reaction` | `object | null` | yes | Recorded reaction. |
| `severity` | [UserAllergySeverity](./UserAllergySeverity) | yes | Severity level. |
| `isActive` | `boolean` | yes | Whether the allergy is currently active. |
| `note` | `object | null` | yes | User note for the allergy. |
| `extras` | record<string, `unknown`> | `null` | yes | Sparse allergy extensions stored in jsonb. |
| `recordedAt` | `object | null` | yes | When this allergy was recorded. |
| `createdAt` | `string` | yes | Created time in ISO 8601 format. |
| `updatedAt` | `string` | yes | Updated time in ISO 8601 format. |
