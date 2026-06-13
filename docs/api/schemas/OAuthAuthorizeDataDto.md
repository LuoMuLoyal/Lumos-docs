# OAuthAuthorizeDataDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `authorizeUrl` | `string` | yes | 第三方授权地址 |
| `state` | `string` | yes | 本次授权 state |
| `expiresIn` | `number` | yes | state 过期时间（秒） |
| `callbackUri` | `string` | no | 客户端回跳地址。桌面端 loopback 或可信 Web 回调登录时返回。 |
