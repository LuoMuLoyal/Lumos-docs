# UpdateHealthContextProfileDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | `object | null` | no | Preferred locale. Use null or empty string to clear and follow the client default. |
| `timezone` | `object | null` | no | Preferred timezone. Use null or empty string to clear. |
| `unitSystem` | [UnitSystem](./UnitSystem) | no | Preferred unit system. Use null to clear. |
| `birthDate` | `object | null` | no | Birth date in YYYY-MM-DD format. |
| `sexAtBirth` | [SexAtBirth](./SexAtBirth) | no | Sex assigned at birth. Use null to clear. |
| `heightCm` | `object | null` | no | Height in centimeters. Use null to clear. |
| `pregnancyState` | [PregnancyState](./PregnancyState) | no | Pregnancy state for personalized medical guidance. Use null to clear. |
| `lactationState` | [LactationState](./LactationState) | no | Lactation state for personalized medical guidance. Use null to clear. |
| `bloodType` | `object | null` | no | Blood type. Use null to clear. |
| `onboardingCompleted` | `boolean` | no | Set true to complete onboarding (sets completedAt when missing). Set false to clear onboarding completion. |
