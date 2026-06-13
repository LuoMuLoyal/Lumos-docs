# LoginDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | yes | 邮箱地址 |
| `password` | `string` | no | 密码（与验证码二选一） |
| `code` | `string` | no | 邮箱验证码（与密码二选一） |
