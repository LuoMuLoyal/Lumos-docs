# UpdateCurrentMedicineDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `source` | [MedicineSource](./MedicineSource) | no | Upstream source. |
| `sourceRefId` | `object | null` | no | Source-specific reference id. |
| `displayName` | `string` | no | Display name shown to the user. |
| `strengthText` | `object | null` | no | Strength text. Use null to clear. |
| `doseText` | `object | null` | no | Dose text. Use null to clear. |
| `route` | `object | null` | no | Administration route. Use null to clear. |
| `startedAt` | `object | null` | no | Start date in YYYY-MM-DD format. Use null to clear. |
| `endedAt` | `object | null` | no | End date in YYYY-MM-DD format. Use null to clear. |
| `note` | `object | null` | no | User note. Use null to clear. |
| `isCurrent` | `boolean` | no | Whether the medicine is currently active. |
