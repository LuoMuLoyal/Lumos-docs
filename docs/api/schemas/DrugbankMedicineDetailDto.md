# DrugbankMedicineDetailDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | `string` | yes |  |
| `drugType` | `object | null` | no |  |
| `state` | `object | null` | no |  |
| `description` | `object | null` | no |  |
| `indication` | `object | null` | no |  |
| `mechanismOfAction` | `object | null` | no |  |
| `pharmacodynamics` | `object | null` | no |  |
| `toxicity` | `object | null` | no |  |
| `metabolism` | `object | null` | no |  |
| `absorption` | `object | null` | no |  |
| `halfLife` | `object | null` | no |  |
| `proteinBinding` | `object | null` | no |  |
| `routeOfElimination` | `object | null` | no |  |
| `volumeOfDistribution` | `object | null` | no |  |
| `clearance` | `object | null` | no |  |
| `groups` | array<`string`> | yes |  |
| `categories` | array<`string`> | yes |  |
| `atcCodes` | array<`string`> | yes |  |
| `synonyms` | array<`string`> | yes |  |
| `foodInteractions` | array<`string`> | yes |  |
| `drugInteractions` | record<string, `unknown`> | `null` | no | Raw source interaction payload. |
| `externalIdentifiers` | record<string, `unknown`> | `null` | no | Raw source external identifier payload. |
| `externalLinks` | record<string, `unknown`> | `null` | no | Raw source external link payload. |
