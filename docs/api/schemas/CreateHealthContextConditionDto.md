# CreateHealthContextConditionDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | yes | Condition label. |
| `status` | [UserConditionStatus](./UserConditionStatus) | no | Condition status. Defaults to active. |
| `diagnosedAt` | `object | null` | no | Diagnosis date in YYYY-MM-DD format. |
| `note` | `string` | no | User note for the condition. |
