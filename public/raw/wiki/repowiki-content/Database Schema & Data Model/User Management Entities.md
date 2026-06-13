# User Management Entities

<cite>
**Referenced Files in This Document**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [20260605153000_add_user_identities/migration.sql](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql)
- [20260605160000_make_user_email_nullable/migration.sql](file://Lucent/prisma/migrations/20260605160000_make_user_email_nullable/migration.sql)
- [20260605161000_add_user_identity_union_id/migration.sql](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql)
- [openapi.json](file://Lucent/docs/openapi.json)
- [UserHealthContextApi.md](file://Luminous/packages/lucent_openapi/doc/UserHealthContextApi.md)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)
10. [Appendices](#appendices)

## Introduction
This document describes the user management database entities in the Lumos platform. It focuses on the core user domain models and their relationships, including identity, profile, session, device, allergies, and conditions. It explains attributes, validation rules, indexing strategies, and privacy considerations derived from the Prisma schema and supporting migration files. Where applicable, API documentation references are included to clarify field semantics exposed to clients.

## Project Structure
The user domain is defined centrally in the Prisma schema and extended via PostgreSQL migrations. The schema enumerates domain-specific enums and defines models with relations and indexes. Migrations reflect incremental evolution of the user domain, including nullable email support and OAuth identity enhancements.

```mermaid
graph TB
subgraph "Prisma Schema"
A["schema.prisma<br/>Defines models and enums"]
end
subgraph "Migrations"
M1["20260605153000_add_user_identities"]
M2["20260605160000_make_user_email_nullable"]
M3["20260605161000_add_user_identity_union_id"]
end
A --> M1
A --> M2
A --> M3
```

**Diagram sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [20260605153000_add_user_identities/migration.sql](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql)
- [20260605160000_make_user_email_nullable/migration.sql](file://Lucent/prisma/migrations/20260605160000_make_user_email_nullable/migration.sql)
- [20260605161000_add_user_identity_union_id/migration.sql](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql)

**Section sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)

## Core Components
This section documents the primary user-related entities and their attributes, constraints, and indexes.

- User
  - Purpose: Core account holder with authentication credentials and lifecycle metadata.
  - Key attributes:
    - id: UUID primary key
    - email: String? (nullable per migration)
    - passwordHash: String? (argon2 hashed for local accounts)
    - nickname: String?
    - avatar: String?
    - status: UserStatus enum (@default active)
    - emailVerifiedAt: DateTime?
    - lastLoginAt: DateTime?
    - deletedAt: DateTime?
    - createdAt/updatedAt: DateTime with timestamptz(3)
  - Relations: One-to-one UserProfile, one-to-many UserIdentity, UserSession, UserDevice, UserAllergy, UserCondition, and several others.
  - Indexes: email, status.
  - Notes: Email is nullable; passwordHash is nullable to support OAuth-only accounts.

- UserIdentity
  - Purpose: OAuth integration records linking external providers to a User.
  - Key attributes:
    - id: UUID primary key
    - userId: foreign key to User
    - provider: String
    - providerUserId: String
    - providerUnionId: String? (added via migration)
    - email: String?
    - emailVerifiedAt: DateTime?
    - rawProfile: Json?
    - createdAt/updatedAt: DateTime with timestamptz(3)
  - Constraints: Unique(provider, providerUserId); unique providerUnionId; indexes on userId, providerUnionId, email.
  - Notes: Supports federated sign-in and optional union identifiers.

- UserProfile
  - Purpose: Demographic and health preference data.
  - Key attributes:
    - userId: UUID primary key (foreign key to User)
    - birthDate: Date
    - sexAtBirth: SexAtBirth enum
    - heightCm: Int?
    - pregnancyState: PregnancyState enum
    - lactationState: LactationState enum
    - bloodType: String?
    - locale/timezone/unitSystem: String?
    - onboardingCompletedAt: DateTime?
    - extras: Json?
    - createdAt/updatedAt: DateTime with timestamptz(3)
  - Notes: One-to-one with User via userId.

- UserSession
  - Purpose: JWT refresh token management and device tracking.
  - Key attributes:
    - id: UUID primary key
    - userId: foreign key to User
    - refreshTokenHash: String (unique)
    - deviceType: UserSessionDeviceType enum?
    - deviceName: String?
    - platform: UserDevicePlatform enum?
    - appVersion: String?
    - ipAddress: String?
    - userAgent: String?
    - context: Json?
    - lastUsedAt/ExpiresAt/RevokedAt: DateTime?
    - createdAt/updatedAt: DateTime with timestamptz(3)
  - Indexes: (userId, revokedAt), (userId, expiresAt).
  - Notes: Cascading delete on user removal.

- UserDevice
  - Purpose: Push notification tokens and platform detection.
  - Key attributes:
    - id: UUID primary key
    - userId: foreign key to User
    - platform: UserDevicePlatform enum
    - deviceName: String?
    - pushToken: String? (unique)
    - locale/timezone: String?
    - notificationsEnabled: Boolean (@default false)
    - capabilities: Json?
    - lastSeenAt: DateTime?
    - createdAt/updatedAt: DateTime with timestamptz(3)
  - Indexes: (userId, platform).
  - Notes: Cascading delete on user removal.

- UserAllergy
  - Purpose: Allergy management with severity and reaction tracking.
  - Key attributes:
    - id: UUID primary key
    - userId: foreign key to User
    - kind: UserAllergyKind enum
    - label: String
    - reaction: String?
    - severity: UserAllergySeverity enum (@default unknown)
    - isActive: Boolean (@default true)
    - note: String?
    - extras: Json?
    - recordedAt: DateTime?
    - createdAt/updatedAt: DateTime with timestamptz(3)
  - Indexes: (userId, isActive).
  - Notes: Cascading delete on user removal.

- UserCondition
  - Purpose: Chronic condition tracking with status management.
  - Key attributes:
    - id: UUID primary key
    - userId: foreign key to User
    - label: String
    - status: UserConditionStatus enum (@default active)
    - diagnosedAt/resolvedAt: Date?
    - note: String?
    - extras: Json?
    - createdAt/updatedAt: DateTime with timestamptz(3)
  - Indexes: (userId, status).
  - Notes: Cascading delete on user removal.

**Section sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [20260605153000_add_user_identities/migration.sql](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql)
- [20260605160000_make_user_email_nullable/migration.sql](file://Lucent/prisma/migrations/20260605160000_make_user_email_nullable/migration.sql)
- [20260605161000_add_user_identity_union_id/migration.sql](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql)

## Architecture Overview
The user domain follows a normalized relational design with explicit foreign keys and cascading deletes. Enumerations encapsulate controlled vocabularies for statuses and categories. JSON fields accommodate flexible metadata while maintaining referential integrity.

```mermaid
erDiagram
USER {
uuid id PK
string email
string password_hash
string nickname
string avatar
enum status
timestamptz email_verified_at
timestamptz last_login_at
timestamptz deleted_at
timestamptz created_at
timestamptz updated_at
}
USER_PROFILE {
uuid user_id PK,FK
date birth_date
enum sex_at_birth
int height_cm
enum pregnancy_state
enum lactation_state
string blood_type
string locale
string timezone
enum unit_system
timestamptz onboarding_completed_at
jsonb extras
timestamptz created_at
timestamptz updated_at
}
USER_IDENTITY {
uuid id PK
uuid user_id FK
string provider
string provider_user_id
string provider_union_id
string email
timestamptz email_verified_at
jsonb raw_profile
timestamptz created_at
timestamptz updated_at
}
USER_SESSION {
uuid id PK
uuid user_id FK
string refresh_token_hash UK
enum device_type
string device_name
enum platform
string app_version
string ip_address
string user_agent
jsonb context
timestamptz last_used_at
timestamptz expires_at
timestamptz revoked_at
timestamptz created_at
timestamptz updated_at
}
USER_DEVICE {
uuid id PK
uuid user_id FK
enum platform
string device_name
string push_token UK
string locale
string timezone
boolean notifications_enabled
jsonb capabilities
timestamptz last_seen_at
timestamptz created_at
timestamptz updated_at
}
USER_ALLERGY {
uuid id PK
uuid user_id FK
enum kind
string label
string reaction
enum severity
boolean is_active
string note
jsonb extras
timestamptz recorded_at
timestamptz created_at
timestamptz updated_at
}
USER_CONDITION {
uuid id PK
uuid user_id FK
string label
enum status
date diagnosed_at
date resolved_at
string note
jsonb extras
timestamptz created_at
timestamptz updated_at
}
USER ||--|| USER_PROFILE : "has one"
USER ||--o{ USER_IDENTITY : "has many"
USER ||--o{ USER_SESSION : "has many"
USER ||--o{ USER_DEVICE : "has many"
USER ||--o{ USER_ALLERGY : "has many"
USER ||--o{ USER_CONDITION : "has many"
```

**Diagram sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)

## Detailed Component Analysis

### User Identity OAuth Integration
OAuth integration is modeled via UserIdentity, enabling multiple provider logins per user. The schema supports:
- provider and providerUserId to uniquely identify an external account
- providerUnionId for platform-specific union identifiers
- email and emailVerifiedAt for federated email handling
- rawProfile for storing provider-specific user data

```mermaid
sequenceDiagram
participant Client as "Client"
participant Auth as "Auth Service"
participant IdP as "OAuth Provider"
participant DB as "UserIdentity"
Client->>IdP : "Initiate OAuth flow"
IdP-->>Client : "Authorization code"
Client->>Auth : "Exchange code for tokens"
Auth->>IdP : "Fetch user profile"
IdP-->>Auth : "Profile data"
Auth->>DB : "Upsert UserIdentity(provider, providerUserId, providerUnionId, email, rawProfile)"
DB-->>Auth : "Identity persisted"
Auth-->>Client : "Access/Refresh tokens"
```

**Diagram sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [20260605153000_add_user_identities/migration.sql](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql)
- [20260605161000_add_user_identity_union_id/migration.sql](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql)

**Section sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [20260605153000_add_user_identities/migration.sql](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql)
- [20260605161000_add_user_identity_union_id/migration.sql](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql)

### Allergy and Condition Management Workflows
Allergy and condition records are managed through dedicated DTOs and APIs. The backend enforces defaults and nullable semantics for optional fields.

```mermaid
flowchart TD
Start(["Create/Update Allergy"]) --> Validate["Validate fields:<br/>kind, label, severity, isActive"]
Validate --> IsActive{"isActive?"}
IsActive --> |true| PersistActive["Persist with isActive=true"]
IsActive --> |false| PersistInactive["Persist with isActive=false"]
PersistActive --> End(["Done"])
PersistInactive --> End
Start2(["Create/Update Condition"]) --> Status["Set status:<br/>active/resolved/suspected"]
Status --> Save["Save record"]
Save --> End
```

**Diagram sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [openapi.json](file://Lucent/docs/openapi.json)
- [UserHealthContextApi.md](file://Luminous/packages/lucent_openapi/doc/UserHealthContextApi.md)

**Section sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [openapi.json](file://Lucent/docs/openapi.json)
- [UserHealthContextApi.md](file://Luminous/packages/lucent_openapi/doc/UserHealthContextApi.md)

## Dependency Analysis
The user domain exhibits clear parent-child relationships with cascading deletes. Enumerations centralize domain semantics. Indexes optimize frequent queries by email, status, and composite keys.

```mermaid
graph LR
User["User"] --> Profile["UserProfile"]
User --> Identities["UserIdentity"]
User --> Sessions["UserSession"]
User --> Devices["UserDevice"]
User --> Allergies["UserAllergy"]
User --> Conditions["UserCondition"]
UserIdentity --> User
UserProfile --> User
UserSession --> User
UserDevice --> User
UserAllergy --> User
UserCondition --> User
```

**Diagram sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)

**Section sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)

## Performance Considerations
- Index selection
  - User.email and User.status: Support filtering by email and account state.
  - UserIdentity(provider, providerUserId): Uniqueness constraint; ensure fast lookup by provider+external ID.
  - UserIdentity(providerUnionId), UserIdentity(email): Efficient federation and email-based lookups.
  - UserSession(userId, revokedAt), UserSession(userId, expiresAt): Optimize token revocation and expiration checks.
  - UserDevice(userId, platform): Efficient device targeting.
  - UserAllergy(userId, isActive), UserCondition(userId, status): Filter active allergies and conditions efficiently.
- JSON fields
  - raw_profile, extras, context, capabilities: Flexible but may increase storage; consider pruning unused keys.
- Cascading deletes
  - Ensures referential integrity but may trigger cascade operations on user deletion; plan maintenance windows accordingly.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
- OAuth identity conflicts
  - Symptom: Duplicate provider+providerUserId.
  - Resolution: Ensure uniqueness constraint is respected; merge or deduplicate identities.
- Nullable email handling
  - Symptom: Authentication attempts without email.
  - Resolution: Email is nullable; ensure downstream logic handles null emails for OAuth-only accounts.
- Union ID updates
  - Symptom: Missing providerUnionId after initial sync.
  - Resolution: Use migration-provided column; update identity records as needed.
- Session cleanup
  - Symptom: Stale sessions accumulating.
  - Resolution: Exploit indexes on (userId, revokedAt) and (userId, expiresAt) to purge expired/revoked sessions.

**Section sources**
- [20260605153000_add_user_identities/migration.sql](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql)
- [20260605160000_make_user_email_nullable/migration.sql](file://Lucent/prisma/migrations/20260605160000_make_user_email_nullable/migration.sql)
- [20260605161000_add_user_identity_union_id/migration.sql](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql)

## Conclusion
The user management entities in Lumos provide a robust foundation for identity, profile, session/device, and health context data. Enums and indexes enforce data integrity and performance, while JSON fields enable flexibility. OAuth integration is first-class, and allergy/condition management aligns with API contracts. Adhering to the documented constraints and indexes ensures reliable operation and maintainability.

[No sources needed since this section summarizes without analyzing specific files]

## Appendices

### Field Validation Rules and Semantics
- User
  - email: nullable; unique at provider level via UserIdentity
  - passwordHash: nullable; present only for local accounts
  - status: enum with default active
- UserIdentity
  - provider+providerUserId: unique
  - providerUnionId: unique
  - rawProfile: JSON blob; provider-specific
- UserProfile
  - Optional demographic fields; units and enums constrained
- UserSession
  - refreshTokenHash: unique; used for refresh token rotation
  - deviceType/platform/appVersion/ipAddress/userAgent/context: optional telemetry
- UserDevice
  - pushToken: unique; enables targeted push delivery
  - notificationsEnabled: default false; opt-in by user
- UserAllergy
  - kind/label/severity: required fields; defaults applied where applicable
  - isActive: toggles visibility in active lists
- UserCondition
  - status: enum with default active

**Section sources**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [openapi.json](file://Lucent/docs/openapi.json)

### Audit Trail and Privacy Considerations
- Audit trail
  - createdAt/updatedAt present on most entities; leverage for change tracking.
  - UserSession includes context and timestamps for usage insights.
- Privacy
  - Email is nullable to support privacy-conscious OAuth-only profiles.
  - sensitive health data stored in JSON fields; apply encryption at rest and restrict access via RBAC.
  - Consider anonymization or pseudonymization for analytics pipelines.

[No sources needed since this section provides general guidance]