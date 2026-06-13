# DoseLogItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Dose log id. |
| `currentMedicineId` | `object` | no | Linked current medicine id. |
| `status` | [DoseLogStatus](./DoseLogStatus) | yes |  |
| `scheduledFor` | `string` | yes | Scheduled date in YYYY-MM-DD format. |
| `doseText` | `object` | no | Dose text. |
| `note` | `object` | no | Free-text note. |
| `source` | `object` | no | Source. |
| `createdAt` | `string` | yes | Created at (ISO 8601). |
| `updatedAt` | `string` | yes | Updated at (ISO 8601). |
