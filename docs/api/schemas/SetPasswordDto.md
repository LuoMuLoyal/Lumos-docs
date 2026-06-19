# SetPasswordDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | no | 邮箱（OAuth-only 用户尚无邮箱时必须提供，用于同时绑定邮箱） |
| `code` | `string` | yes | 发往邮箱的验证码 |
| `password` | `string` | yes | 新密码（8-32位，需包含大小写字母和数字） |
