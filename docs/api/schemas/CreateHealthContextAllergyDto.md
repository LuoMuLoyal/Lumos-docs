# CreateHealthContextAllergyDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [UserAllergyKind](./UserAllergyKind) | yes | Allergy kind. |
| `label` | `string` | yes | User-visible allergy label. |
| `reaction` | `string` | no | Recorded reaction. |
| `severity` | [UserAllergySeverity](./UserAllergySeverity) | no | Severity level. Defaults to unknown. |
| `note` | `string` | no | User note for the allergy. |
| `recordedAt` | `string` | no | When this allergy was recorded in ISO 8601 format. |
