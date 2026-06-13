# UpdateHealthContextConditionDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | no | Condition label. |
| `status` | [UserConditionStatus](./UserConditionStatus) | no | Condition status. |
| `diagnosedAt` | `object | null` | no | Diagnosis date in YYYY-MM-DD format. Use null to clear. |
| `note` | `object | null` | no | User note for the condition. Use null to clear. |
