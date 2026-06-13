# CreateCurrentMedicineDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `source` | [MedicineSource](./MedicineSource) | yes | Upstream source used to anchor this medicine. |
| `sourceRefId` | `string` | no | Source-specific reference id. Required for drugbank and cn sources. |
| `displayName` | `string` | yes | Display name shown to the user. |
| `strengthText` | `string` | no | Strength text. |
| `doseText` | `string` | no | Dose text. |
| `route` | `string` | no | Administration route. |
| `startedAt` | `object | null` | no | Start date in YYYY-MM-DD format. |
| `endedAt` | `object | null` | no | End date in YYYY-MM-DD format. |
| `note` | `string` | no | User note for the medicine. |
