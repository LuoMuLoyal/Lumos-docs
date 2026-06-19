# SendVerificationCodeDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | yes | 邮箱地址 |
| `scene` | `register` | `login` | `reset-password` | `change-email` | `set-password` | `delete-account` | yes | 验证码场景 |
