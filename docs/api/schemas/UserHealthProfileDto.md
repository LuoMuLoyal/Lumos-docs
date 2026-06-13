# UserHealthProfileDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `birthDate` | `object | null` | yes | Birth date in YYYY-MM-DD format. |
| `sexAtBirth` | [SexAtBirth](./SexAtBirth) | yes | Sex assigned at birth. |
| `heightCm` | `object | null` | yes | Height in centimeters. |
| `pregnancyState` | [PregnancyState](./PregnancyState) | yes | Pregnancy state for personalized medical guidance. |
| `lactationState` | [LactationState](./LactationState) | yes | Lactation state for personalized medical guidance. |
| `bloodType` | `object | null` | yes | Blood type. |
| `locale` | `object | null` | yes | Preferred locale. |
| `timezone` | `object | null` | yes | Preferred timezone. |
| `unitSystem` | [UnitSystem](./UnitSystem) | yes | Preferred unit system. |
| `onboardingCompletedAt` | `object | null` | yes | When the onboarding flow was completed. |
| `extras` | record<string, `unknown`> | `null` | yes | Sparse profile extensions stored in jsonb. |
