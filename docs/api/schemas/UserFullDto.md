# UserFullDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | 用户 ID |
| `email` | `object | null` | yes | 邮箱地址，第三方账号可能为空 |
| `nickname` | `object | null` | yes | 昵称 |
| `avatar` | `object | null` | yes | 头像 URL |
| `emailVerified` | `boolean` | yes | 邮箱是否已验证 |
| `emailVerifiedAt` | `object | null` | yes | 邮箱验证时间 (ISO 8601) |
| `createdAt` | `string` | yes | 创建时间 (ISO 8601) |
| `updatedAt` | `string` | yes | 更新时间 (ISO 8601) |
