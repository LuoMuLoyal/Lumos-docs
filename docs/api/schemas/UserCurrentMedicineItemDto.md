# UserCurrentMedicineItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Current medicine id. |
| `source` | [MedicineSource](./MedicineSource) | yes | Upstream source used to anchor this medicine. |
| `sourceRefId` | `object | null` | yes | Source-specific reference id. |
| `displayName` | `string` | yes | Display name shown to the user. |
| `strengthText` | `object | null` | yes | Strength text. |
| `doseText` | `object | null` | yes | Dose text. |
| `route` | `object | null` | yes | Administration route. |
| `startedAt` | `object | null` | yes | Start date in YYYY-MM-DD format. |
| `endedAt` | `object | null` | yes | End date in YYYY-MM-DD format. |
| `isCurrent` | `boolean` | yes | Whether the medicine is currently active. |
| `note` | `object | null` | yes | User note for the medicine. |
| `sourcePayload` | record<string, `unknown`> | `null` | yes | Original source payload stored in jsonb. |
| `createdAt` | `string` | yes | Created time in ISO 8601 format. |
| `updatedAt` | `string` | yes | Updated time in ISO 8601 format. |
