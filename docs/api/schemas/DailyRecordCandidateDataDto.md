# DailyRecordCandidateDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `locale` | `string` | yes | Normalized parse locale. |
| `generatedAt` | `string` | yes | ISO-8601 timestamp when candidates were generated. |
| `confirmationHint` | `string` | yes | Short UI hint telling the client that these are candidates, not saved records. |
| `items` | array<[DailyRecordCandidateItemDto](./DailyRecordCandidateItemDto)> | yes |  |
