# GenerateDailyRecordCandidatesDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `text` | `string` | yes | Natural-language note to be parsed into candidate daily records. |
| `occurredAt` | `string` | yes | Wake date in YYYY-MM-DD format used as the candidate record date baseline. |
| `timezone` | `string` | no | Optional user timezone hint used only for interpretation wording. No server timezone conversion is persisted. |
