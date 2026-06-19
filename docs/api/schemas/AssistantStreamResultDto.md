# AssistantStreamResultDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `chunk` | `result` | `error` | `done` | yes |  |
| `data` | record<string, `unknown`> | yes | SSE payload object. event=chunk => { content }, event=result => AssistantMessageDataDto-like object, event=error => { message, code?, statusCode? }, event=done => {}. |
