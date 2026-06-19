# Health

> Generated from Lucent OpenAPI tag grouping.

- Operations: `4`

## `GET /api/v1/health`

- Summary: Readiness probe alias used by existing scripts
- Operation ID: `AppController_getHealth_v1`
- Auth: none

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthResponseDto](../schemas/HealthResponseDto) |
| `503` |  | [HealthResponseDto](../schemas/HealthResponseDto) |

## `GET /api/v1/health/deep`

- Summary: Detailed health probe with per-component diagnostics
- Operation ID: `AppController_getDeepHealth_v1`
- Auth: none

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthResponseDto](../schemas/HealthResponseDto) |
| `503` |  | [HealthResponseDto](../schemas/HealthResponseDto) |

## `GET /api/v1/health/live`

- Summary: Liveness probe for process health
- Operation ID: `AppController_getLiveHealth_v1`
- Auth: none

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthResponseDto](../schemas/HealthResponseDto) |

## `GET /api/v1/health/ready`

- Summary: Readiness probe for critical runtime dependencies
- Operation ID: `AppController_getReadyHealth_v1`
- Auth: none

### Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` |  | [HealthResponseDto](../schemas/HealthResponseDto) |
| `503` |  | [HealthResponseDto](../schemas/HealthResponseDto) |
