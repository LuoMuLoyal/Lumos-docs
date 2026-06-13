# DailyRecordSummaryDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | [DailyRecordKind](./DailyRecordKind) | yes |  |
| `count` | `number` | yes | Count of records for this kind on the given date. |
| `latest` | [DailyRecordItemDto](./DailyRecordItemDto) | no | Most recent record of this kind. |
