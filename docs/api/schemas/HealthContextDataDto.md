# HealthContextDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `summary` | [UserHealthSummaryDto](./UserHealthSummaryDto) | yes |  |
| `profile` | [UserHealthProfileDto](./UserHealthProfileDto) | yes |  |
| `allergies` | array<[UserAllergyItemDto](./UserAllergyItemDto)> | yes |  |
| `conditions` | array<[UserConditionItemDto](./UserConditionItemDto)> | yes |  |
| `currentMedicines` | array<[UserCurrentMedicineItemDto](./UserCurrentMedicineItemDto)> | yes |  |
