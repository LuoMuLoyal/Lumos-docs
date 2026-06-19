# DeleteAccountDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `password` | `string` | no | 当前密码（有密码的用户使用此方式确认注销） |
| `code` | `string` | no | 邮箱验证码（OAuth-only 用户使用此方式确认注销） |
