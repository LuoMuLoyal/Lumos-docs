# ReportSummaryStreamResultDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `summary` | `result` | `error` | `done` | yes |  |
| `data` | record<string, `unknown`> | yes | SSE payload object. event=summary => { summary }, event=result => ReportSummaryDataDto-like object, event=error => { message, code?, statusCode? }, event=done => {}. |
