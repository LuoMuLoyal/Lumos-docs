# AccountDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | User ID. |
| `email` | `object | null` | yes | Account email. OAuth-only accounts may not have one. |
| `nickname` | `object | null` | yes | Display nickname. |
| `avatar` | `object | null` | yes | Avatar URL. |
| `emailVerifiedAt` | `object | null` | yes | Account email verification time in ISO 8601. |
| `hasPassword` | `boolean` | yes | Whether the account has a local password. |
| `lastLoginAt` | `object | null` | yes | Last login time in ISO 8601. |
| `linkedIdentities` | array<[AccountIdentityDto](./AccountIdentityDto)> | yes | Linked third-party identities without provider user ids. |
| `createdAt` | `string` | yes | Created time in ISO 8601. |
| `updatedAt` | `string` | yes | Updated time in ISO 8601. |
