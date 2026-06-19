# DailyRecordCandidateItemDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [DailyRecordCandidateKind](./DailyRecordCandidateKind) | yes |  |
| `occurredAt` | `string` | yes | Candidate occurred date in YYYY-MM-DD format. |
| `title` | `object | null` | no | Short candidate title. |
| `value` | `object | null` | no | Candidate measured value. |
| `unit` | `object | null` | no | Candidate unit. |
| `note` | `object | null` | no | Candidate free-text note. |
| `payload` | record<string, `unknown`> | `null` | no | Structured candidate payload. For sleep, this may include durationMinutes and optional timing hints. |
| `rationale` | `string` | yes | Human-readable reason showing which phrase or fact led to this candidate. |
