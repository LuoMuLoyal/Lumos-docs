# UpdateHealthContextAllergyDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [UserAllergyKind](./UserAllergyKind) | no | Allergy kind. |
| `label` | `string` | no | User-visible allergy label. |
| `reaction` | `object | null` | no | Recorded reaction. Use null to clear. |
| `severity` | [UserAllergySeverity](./UserAllergySeverity) | no | Severity level. |
| `note` | `object | null` | no | User note for the allergy. Use null to clear. |
| `recordedAt` | `object | null` | no | When this allergy was recorded in ISO 8601 format. |
| `isActive` | `boolean` | no | Whether the allergy is currently active. |
