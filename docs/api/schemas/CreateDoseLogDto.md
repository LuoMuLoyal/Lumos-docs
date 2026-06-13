# CreateDoseLogDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `currentMedicineId` | `string` | no | Linked current medicine id. |
| `status` | [DoseLogStatus](./DoseLogStatus) | yes |  |
| `scheduledFor` | `string` | yes | Scheduled date YYYY-MM-DD. |
| `doseText` | `string` | no | Dose text. |
| `note` | `string` | no | Free-text note. |
