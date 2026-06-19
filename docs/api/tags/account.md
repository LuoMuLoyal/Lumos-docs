# Account

> Generated from Lucent OpenAPI tag grouping.

- Operations: `10`

## `GET /api/v1/account`

- Summary: Get authenticated account profile
- Operation ID: `AccountController_getAccount_v1`
- Auth: `access-token`

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AccountResponseDto](../schemas/AccountResponseDto) |

## `PATCH /api/v1/account`

- Summary: Update authenticated account profile
- Operation ID: `AccountController_updateAccount_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [UpdateAccountDto](../schemas/UpdateAccountDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AccountResponseDto](../schemas/AccountResponseDto) |

## `DELETE /api/v1/account`

- Summary: Delete authenticated account
- Operation ID: `AccountController_deleteAccount_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [DeleteAccountDto](../schemas/DeleteAccountDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [SuccessResponseDto](../schemas/SuccessResponseDto) |

## `POST /api/v1/account/email`

- Summary: Change authenticated account email
- Operation ID: `AccountController_changeEmail_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [ChangeEmailDto](../schemas/ChangeEmailDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AccountEmailResponseDto](../schemas/AccountEmailResponseDto) |

## `DELETE /api/v1/account/identities/{identityId}`

- Summary: Unlink authenticated account OAuth identity
- Operation ID: `AccountController_unlinkIdentity_v1`
- Auth: `access-token`

### Parameters

| In | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| path | `identityId` | yes | `string` |  |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AccountResponseDto](../schemas/AccountResponseDto) |

## `POST /api/v1/account/identities/wechat-mobile/callback`

- Summary: Link WeChat mobile identity to authenticated account
- Operation ID: `AccountController_linkWechatMobileIdentity_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [OAuthCodeCallbackDto](../schemas/OAuthCodeCallbackDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AccountResponseDto](../schemas/AccountResponseDto) |

## `POST /api/v1/account/identities/wechat-web/authorize`

- Summary: Create WeChat web OAuth authorize URL for linking
- Operation ID: `AccountController_createWechatWebIdentityLinkAuthorizeUrl_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | no | [OAuthAuthorizeDto](../schemas/OAuthAuthorizeDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [OAuthAuthorizeResponseDto](../schemas/OAuthAuthorizeResponseDto) |

## `POST /api/v1/account/identities/wechat-web/callback`

- Summary: Link WeChat web identity to authenticated account
- Operation ID: `AccountController_linkWechatWebIdentity_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [OAuthCallbackDto](../schemas/OAuthCallbackDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [AccountResponseDto](../schemas/AccountResponseDto) |

## `POST /api/v1/account/password`

- Summary: Change authenticated account password
- Operation ID: `AccountController_changePassword_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [ChangePasswordDto](../schemas/ChangePasswordDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [SuccessResponseDto](../schemas/SuccessResponseDto) |

## `POST /api/v1/account/set-password`

- Summary: Set initial password for OAuth-only account using email verification
- Operation ID: `AccountController_setPassword_v1`
- Auth: `access-token`

### Request Body

| Content-Type | Required | Schema |
| --- | --- | --- |
| `application/json` | yes | [SetPasswordDto](../schemas/SetPasswordDto) |

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [SuccessResponseDto](../schemas/SuccessResponseDto) |
