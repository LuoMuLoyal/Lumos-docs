# AssistantToolCapabilityDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `get_today_records` | `get_records_by_date` | `get_records_by_range` | `get_today_summary_by_date` | `get_report_summary_by_range` | `get_recent_today_summaries` | `get_recent_report_summaries` | `get_user_profile` | `get_user_settings` | `get_current_medicines` | `get_sleep_summary_by_range` | `propose_create_daily_record` | `propose_update_daily_record` | `propose_delete_daily_record` | `propose_update_user_settings` | yes | Stable tool identifier exposed to the client. |
| `requiredContextSources` | array<`string`> | yes | Context sources this tool requires before it may run. Allowed values: health_profile, daily_records, sleep_records, current_medicines. |
| `permittedByUser` | `boolean` | yes | Whether the current user settings permit this tool in principle. |
| `enabled` | `boolean` | yes | Whether this tool is currently executable for this user. |
| `implemented` | `boolean` | yes | Whether the server has already implemented this tool beyond planning/foundation wiring. |
| `disabledReason` | `chat_disabled` | `context_disabled` | `model_not_configured` | `not_implemented` | `null` | yes | Why the tool is currently disabled, or null when enabled. |
