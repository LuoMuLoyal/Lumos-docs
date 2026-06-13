# Auth

> Generated from Lucent OpenAPI tag grouping.

- Operations: `12`

## `POST /api/v1/auth/forgot-password`

- Summary: 忘记密码
- Operation ID: `AuthController_forgotPassword_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [ForgotPasswordDto](../schemas/ForgotPasswordDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [ForgotPasswordResponseDto](../schemas/ForgotPasswordResponseDto) |
| `429` | 验证码接口请求过多 | `unknown` |

## `POST /api/v1/auth/login`

- Summary: 用户登录
- Operation ID: `AuthController_login_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [LoginDto](../schemas/LoginDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [LoginResponseDto](../schemas/LoginResponseDto) |

## `POST /api/v1/auth/logout`

- Summary: 用户登出
- Operation ID: `AuthController_logout_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [LogoutDto](../schemas/LogoutDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [SuccessResponseDto](../schemas/SuccessResponseDto) |

## `POST /api/v1/auth/oauth/wechat-mobile/callback`

- Summary: 微信移动端登录回调
- Operation ID: `AuthController_loginWithWechatMobile_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [OAuthCodeCallbackDto](../schemas/OAuthCodeCallbackDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [LoginResponseDto](../schemas/LoginResponseDto) |

## `POST /api/v1/auth/oauth/wechat-web/authorize`

- Summary: 创建微信网页登录授权地址
- Operation ID: `AuthController_createWechatWebAuthorizeUrl_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | no | [OAuthAuthorizeDto](../schemas/OAuthAuthorizeDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [OAuthAuthorizeResponseDto](../schemas/OAuthAuthorizeResponseDto) |

## `GET /api/v1/auth/oauth/wechat-web/callback`

- Summary: 微信网页登录浏览器回跳
- Operation ID: `AuthController_redirectWechatWebCallback_v1`
- Auth: none

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| query | `code` | yes | `string` | OAuth 授权码 |
| query | `state` | yes | `string` | 授权时生成的 state |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `302` | Redirect to desktop callback URI | `unknown` |

## `POST /api/v1/auth/oauth/wechat-web/callback`

- Summary: 微信网页登录回调登录
- Operation ID: `AuthController_loginWithWechatWeb_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [OAuthCallbackDto](../schemas/OAuthCallbackDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [LoginResponseDto](../schemas/LoginResponseDto) |

## `POST /api/v1/auth/refresh`

- Summary: 刷新令牌
- Operation ID: `AuthController_refresh_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [RefreshDto](../schemas/RefreshDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [RefreshResponseDto](../schemas/RefreshResponseDto) |

## `POST /api/v1/auth/register`

- Summary: 用户注册
- Operation ID: `AuthController_register_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [RegisterDto](../schemas/RegisterDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `201` |  | [RegisterResponseDto](../schemas/RegisterResponseDto) |

## `POST /api/v1/auth/reset-password`

- Summary: 重置密码
- Operation ID: `AuthController_resetPassword_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [ResetPasswordDto](../schemas/ResetPasswordDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [SuccessResponseDto](../schemas/SuccessResponseDto) |

## `POST /api/v1/auth/send-verification-code`

- Summary: 发送邮箱验证码
- Operation ID: `AuthController_sendVerificationCode_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [SendVerificationCodeDto](../schemas/SendVerificationCodeDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [SendVerificationCodeResponseDto](../schemas/SendVerificationCodeResponseDto) |
| `429` | 验证码接口请求过多 | `unknown` |

## `POST /api/v1/auth/verify-email`

- Summary: 验证邮箱
- Operation ID: `AuthController_verifyEmail_v1`
- Auth: none

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [VerifyEmailDto](../schemas/VerifyEmailDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [VerifyEmailResponseDto](../schemas/VerifyEmailResponseDto) |
