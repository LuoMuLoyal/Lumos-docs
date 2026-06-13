# ResetPasswordDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | yes | 邮箱地址 |
| `code` | `string` | yes | 验证码 |
| `password` | `string` | yes | 新密码（8-32位，需包含大小写字母和数字） |
