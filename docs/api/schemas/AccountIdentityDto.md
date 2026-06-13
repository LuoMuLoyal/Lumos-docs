# AccountIdentityDto

> Generated from Lucent OpenAPI component schemas.

- Type: `object`

## Properties

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Account identity ID. |
| `provider` | `string` | yes | OAuth provider name. |
| `email` | `object | null` | yes | Provider email when the provider exposes one. |
| `emailVerifiedAt` | `object | null` | yes | Provider email verification time in ISO 8601. |
| `linkedAt` | `string` | yes | Identity linked time in ISO 8601. |
