# UserHealthSummaryDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `age` | `object | null` | yes | Age derived from birth date. Null when birth date is missing. |
| `onboardingCompleted` | `boolean` | yes | Whether the onboarding flow has been completed. |
| `activeAllergyCount` | `number` | yes | Number of active allergy records returned in this payload. |
| `conditionCount` | `number` | yes | Number of condition records returned in this payload. |
| `currentMedicineCount` | `number` | yes | Number of current medicine records returned in this payload. |
| `missingCoreProfileFields` | array<`string`> | yes | Missing core profile fields that the frontend can use for onboarding nudges. |
