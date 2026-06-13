# Database Schema & Data Model

<cite>
**Referenced Files in This Document**
- [schema.prisma](file://Lucent/prisma/schema.prisma)
- [20260527131112_init/migration.sql](file://Lucent/prisma/migrations/20260527131112_init/migration.sql)
- [20260530183000_expand_user_domain/migration.sql](file://Lucent/prisma/migrations/20260530183000_expand_user_domain/migration.sql)
- [20260530233000_add_medicine_knowledge/migration.sql](file://Lucent/prisma/migrations/20260530233000_add_medicine_knowledge/migration.sql)
- [20260604000000_add_user_daily_records/migration.sql](file://Lucent/prisma/migrations/20260604000000_add_user_daily_records/migration.sql)
- [20260604010000_add_user_medicine_dose_logs/migration.sql](file://Lucent/prisma/migrations/20260604010000_add_user_medicine_dose_logs/migration.sql)
- [20260605153000_add_user_identities/migration.sql](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql)
- [20260605160000_make_user_email_nullable/migration.sql](file://Lucent/prisma/migrations/20260605160000_make_user_email_nullable/migration.sql)
- [20260605161000_add_user_identity_union_id/migration.sql](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql)
- [20260606133000_add_daily_record_attachments/migration.sql](file://Lucent/prisma/migrations/20260606133000_add_daily_record_attachments/migration.sql)
- [20260608193000_add_user_medicine_reminders/migration.sql](file://Lucent/prisma/migrations/20260608193000_add_user_medicine_reminders/migration.sql)
- [20260610093000_extend_medicine_reminders/migration.sql](file://Lucent/prisma/migrations/20260610093000_extend_medicine_reminders/migration.sql)
- [medicines-cache.constants.ts](file://Lucent/src/modules/medicines/cache/medicines-cache.constants.ts)
- [medicines-cache.service.ts](file://Lucent/src/modules/medicines/cache/medicines-cache.service.ts)
- [medicines.controller.ts](file://Lucent/src/modules/medicines/medicines.controller.ts)
- [medicine-reminders.service.ts](file://Lucent/src/modules/medicine-reminders/medicine-reminders.service.ts)
- [create-condition.dto.ts](file://Lucent/src/modules/user-health-context/dto/create-condition.dto.ts)
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
This document provides comprehensive data model documentation for the Lumos database schema. It covers entity definitions, relationships, indexes, constraints, referential integrity, validation rules, and lifecycle management. It also documents caching strategies, performance optimization techniques, migration history, and operational considerations such as data retention and backup procedures. The schema is defined via Prisma and implemented through PostgreSQL migrations.

## Project Structure
The database schema is defined in Prisma and materialized by PostgreSQL migrations. The Prisma schema enumerates all domain models and their relations, while migrations capture the evolving physical structure of the database over time.

```mermaid
graph TB
subgraph "Prisma Layer"
PRISMA["schema.prisma"]
end
subgraph "PostgreSQL"
MIGRATIONS["Migrations"]
TABLES["Tables"]
end
PRISMA --> MIGRATIONS
MIGRATIONS --> TABLES
```

**Diagram sources**
- [schema.prisma:1-599](file://Lucent/prisma/schema.prisma#L1-L599)
- [20260527131112_init/migration.sql:1-35](file://Lucent/prisma/migrations/20260527131112_init/migration.sql#L1-L35)

**Section sources**
- [schema.prisma:1-599](file://Lucent/prisma/schema.prisma#L1-L599)

## Core Components
This section outlines the principal entities and their roles in the health and medication domain.

- Users
  - Purpose: Core identity and account holder.
  - Key attributes: identifiers, credentials, status, timestamps.
  - Relationships: profiles, identities, sessions, devices, allergies, conditions, current medicines, reminders, reminder deliveries, daily records, attachments, dose logs.
  - Indexes: email, status.
  - Constraints: unique email per active status window; cascading deletes on related entities.

- User Profiles
  - Purpose: Demographics, physiology, preferences.
  - Key attributes: birth date, sex at birth, height, pregnancy/lactation state, blood type, locale/timezone, units, onboarding completion, extras.
  - Constraints: height positive check.

- User Identities
  - Purpose: Multi-provider authentication linkage (e.g., OAuth).
  - Key attributes: provider, provider user id, union id, email, verified timestamp, raw profile.
  - Constraints: unique provider/provider user id; optional provider union id.

- User Sessions and Devices
  - Purpose: Device and session metadata for secure sessions.
  - Key attributes: refresh token hash, device type/platform, app version, IP/user agent, context, expiry/revocation, last used.
  - Constraints: unique refresh token hash; unique push token; indexed by user/device.

- Health Context (Allergies and Conditions)
  - Allergies: kind, label, reaction, severity, active flag, recorded timestamp.
  - Conditions: label, status, diagnosed/resolved dates, note/extras.
  - Constraints: condition date validity checks.

- Medications (Current Medicines, Dose Logs, Reminders)
  - Current Medicines: source, source ref id, display name, strength/dose text, route, start/end dates, current flag, note, source payload.
  - Dose Logs: status, scheduled date, taken timestamp, source, note.
  - Reminders: label, scheduled hour/minute, days of week (JSON array), start/end dates, active flag, note.
  - Delivery Tracking: reminder deliveries with channel/status/scheduling/timestamps.

- Daily Records and Attachments
  - Daily Records: kind, occurred date, title/value/unit/note/payload/source, deletion marker.
  - Attachments: image metadata and cloud object reference.

- Medicine Knowledge Base
  - Import metadata: source key/name/version/file info, status, counts, rejection summary.
  - CN Medicine Products: product catalog with approvals, ingredients, warnings, etc.
  - DrugBank Drugs: drug metadata, interactions, targets, identifiers.
  - Targets and Links: external identifiers and links.
  - Bridge table: drug-target relations.

**Section sources**
- [schema.prisma:106-599](file://Lucent/prisma/schema.prisma#L106-L599)

## Architecture Overview
The schema follows a relational model with JSONB for semi-structured fields and enums for controlled vocabularies. Entities are organized around the user-centric domain with explicit referential integrity and indexing for common queries.

```mermaid
erDiagram
USERS {
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
USER_IDENTITIES {
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
USER_PROFILES {
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
USER_SESSIONS {
uuid id PK
uuid user_id FK
string refresh_token_hash
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
USER_DEVICES {
uuid id PK
uuid user_id FK
enum platform
string device_name
string push_token
string locale
string timezone
bool notifications_enabled
jsonb capabilities
timestamptz last_seen_at
timestamptz created_at
timestamptz updated_at
}
USER_ALLERGIES {
uuid id PK
uuid user_id FK
enum kind
string label
string reaction
enum severity
bool is_active
string note
jsonb extras
timestamptz recorded_at
timestamptz created_at
timestamptz updated_at
}
USER_CONDITIONS {
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
USER_CURRENT_MEDICINES {
uuid id PK
uuid user_id FK
enum source
string source_ref_id
string display_name
string strength_text
string dose_text
string route
date started_at
date ended_at
bool is_current
string note
jsonb source_payload
timestamptz created_at
timestamptz updated_at
}
USER_MEDICINE_DOSE_LOGS {
uuid id PK
uuid user_id FK
uuid current_medicine_id FK
enum status
date scheduled_for
timestamptz taken_at
string dose_text
string note
string source
timestamptz deleted_at
timestamptz created_at
timestamptz updated_at
}
USER_MEDICINE_REMINDERS {
uuid id PK
uuid user_id FK
uuid current_medicine_id FK
string label
int scheduled_hour
int scheduled_minute
jsonb days_of_week
date start_date
date end_date
bool is_active
string note
timestamptz deleted_at
timestamptz created_at
timestamptz updated_at
}
USER_REMINDER_DELIVERIES {
uuid id PK
uuid user_id FK
uuid reminder_id FK
uuid device_id FK
string channel
string status
timestamptz scheduled_for
timestamptz delivered_at
string error_message
timestamptz created_at
}
USER_DAILY_RECORDS {
uuid id PK
uuid user_id FK
enum kind
date occurred_at
string title
string value
string unit
string note
jsonb payload
string source
timestamptz deleted_at
timestamptz created_at
timestamptz updated_at
}
USER_DAILY_RECORD_ATTACHMENTS {
uuid id PK
uuid user_id FK
uuid record_id FK
enum kind
string object_key
string bucket
string provider
string file_name
string content_type
int size_bytes
int width
int height
string public_url
timestamptz created_at
}
DRUG_SOURCE_IMPORTS {
uuid id PK
string source_key
string source_name
string source_version
string source_file_name
string source_file_hash
timestamptz source_exported_at
string status
int raw_row_count
int imported_row_count
int rejected_row_count
jsonb rejection_summary
string note
timestamptz created_at
timestamptz updated_at
}
CN_MEDICINE_PRODUCTS {
uuid id PK
uuid import_run_id FK
string source_name
int source_row_number
string name
string image_url
string price_text
string package_spec
string approval_number
string manufacturer
string drug_type
string main_category
string subcategory
string source_url
string brand_name
string ingredients
string properties
string indications
string dosage
string adverse_reactions
string contraindications
string precautions
string pediatric_use
string geriatric_use
string pregnancy_lactation
string pharmacology_toxicology
string drug_interactions
string pharmacokinetics
string overdose
string storage
string validity_period
string barcode
string national_drug_code
string search_text
jsonb extras
timestamptz created_at
timestamptz updated_at
}
DRUGBANK_DRUGS {
string drugbank_id PK
uuid import_run_id FK
jsonb secondary_drugbank_ids
string drug_type
timestamptz source_created_at
timestamptz source_updated_at
string name
string description
string cas_number
string unii
string state
jsonb groups
string indication
string pharmacodynamics
string mechanism_of_action
string toxicity
string metabolism
string absorption
string half_life
string protein_binding
string route_of_elimination
string volume_of_distribution
string clearance
jsonb classification
jsonb synonyms
jsonb products
jsonb international_brands
jsonb categories
jsonb atc_codes
jsonb food_interactions
jsonb drug_interactions
jsonb external_identifiers
jsonb external_links
string search_text
timestamptz created_at
timestamptz updated_at
}
DRUGBANK_EXTERNAL_LINKS {
uuid id PK
uuid import_run_id FK
string drugbank_id FK
string drug_name
string cas_number
string drug_type
string kegg_compound_id
string kegg_drug_id
string pubchem_compound_id
string pubchem_substance_id
string chebi_id
string pharmgkb_id
string het_id
string uniprot_id
string uniprot_title
string genbank_id
string dpd_id
string rxlist_link
string pdrhealth_link
string wikipedia_id
string drugs_com_link
string ndc_id
timestamptz created_at
timestamptz updated_at
}
DRUGBANK_TARGETS {
uuid id PK
uuid import_run_id FK
string source_dataset
string source_target_id
string name
string gene_name
string genbank_protein_id
string genbank_gene_id
string uniprot_id
string uniprot_title
jsonb pdb_ids
string gene_card_id
string gen_atlas_id
string hgnc_id
string species
timestamptz created_at
timestamptz updated_at
}
DRUGBANK_DRUG_TARGETS {
uuid id PK
string drugbank_id FK
uuid target_id FK
string relation_kind
jsonb actions
string known_action
timestamptz created_at
timestamptz updated_at
}
USERS ||--o{ USER_IDENTITIES : "has"
USERS ||--o{ USER_PROFILES : "has"
USERS ||--o{ USER_SESSIONS : "has"
USERS ||--o{ USER_DEVICES : "has"
USERS ||--o{ USER_ALLERGIES : "has"
USERS ||--o{ USER_CONDITIONS : "has"
USERS ||--o{ USER_CURRENT_MEDICINES : "has"
USERS ||--o{ USER_MEDICINE_REMINDERS : "has"
USERS ||--o{ USER_REMINDER_DELIVERIES : "has"
USERS ||--o{ USER_DAILY_RECORDS : "has"
USERS ||--o{ USER_DAILY_RECORD_ATTACHMENTS : "has"
USER_CURRENT_MEDICINES ||--o{ USER_MEDICINE_DOSE_LOGS : "logs"
USER_CURRENT_MEDICINES ||--o{ USER_MEDICINE_REMINDERS : "triggers"
USER_DAILY_RECORDS ||--o{ USER_DAILY_RECORD_ATTACHMENTS : "has"
DRUG_SOURCE_IMPORTS ||--o{ CN_MEDICINE_PRODUCTS : "produces"
DRUG_SOURCE_IMPORTS ||--o{ DRUGBANK_DRUGS : "produces"
DRUG_SOURCE_IMPORTS ||--o{ DRUGBANK_EXTERNAL_LINKS : "produces"
DRUG_SOURCE_IMPORTS ||--o{ DRUGBANK_TARGETS : "produces"
DRUGBANK_DRUGS ||--o{ DRUGBANK_DRUG_TARGETS : "targets"
DRUGBANK_EXTERNAL_LINKS ||--|| DRUGBANK_DRUGS : "links_to"
DRUGBANK_TARGETS ||--o{ DRUGBANK_DRUG_TARGETS : "related_to"
```

**Diagram sources**
- [schema.prisma:106-599](file://Lucent/prisma/schema.prisma#L106-L599)

## Detailed Component Analysis

### Users and Authentication Domains
- Users
  - Primary key: id (UUID).
  - Notable indexes: email, status.
  - Cascading relations: identities, profiles, sessions, devices, allergies, conditions, current medicines, reminders, reminder deliveries, daily records, attachments, dose logs.
  - Business constraints: email uniqueness enforced with a partial unique index on active records; password hash may be null for non-local providers.

- User Identities
  - Composite unique constraint: provider + provider_user_id.
  - Optional provider_union_id for federated linking.
  - Indexed: user_id, provider_union_id, email.

- User Profiles
  - One-to-one with users via foreign key.
  - Validation: height_cm must be positive if provided.

- User Sessions and Devices
  - Unique constraints: refresh_token_hash, push_token.
  - Indexed: user-session by revocation/expiry; user-device by platform.

```mermaid
classDiagram
class User {
+id : uuid
+email : string?
+passwordHash : string?
+nickname : string?
+avatar : string?
+status : UserStatus
+emailVerifiedAt : timestamptz?
+lastLoginAt : timestamptz?
+deletedAt : timestamptz?
+createdAt : timestamptz
+updatedAt : timestamptz
}
class UserIdentity {
+id : uuid
+userId : uuid
+provider : string
+providerUserId : string
+providerUnionId : string?
+email : string?
+emailVerifiedAt : timestamptz?
+rawProfile : jsonb?
+createdAt : timestamptz
+updatedAt : timestamptz
}
class UserProfile {
+userId : uuid
+birthDate : date?
+sexAtBirth : SexAtBirth?
+heightCm : int?
+pregnancyState : PregnancyState?
+lactationState : LactationState?
+bloodType : string?
+locale : string?
+timezone : string?
+unitSystem : UnitSystem?
+onboardingCompletedAt : timestamptz?
+extras : jsonb?
+createdAt : timestamptz
+updatedAt : timestamptz
}
class UserSession {
+id : uuid
+userId : uuid
+refreshTokenHash : string
+deviceType : UserSessionDeviceType?
+deviceName : string?
+platform : UserDevicePlatform?
+appVersion : string?
+ipAddress : string?
+userAgent : string?
+context : jsonb?
+lastUsedAt : timestamptz?
+expiresAt : timestamptz
+revokedAt : timestamptz?
+createdAt : timestamptz
+updatedAt : timestamptz
}
class UserDevice {
+id : uuid
+userId : uuid
+platform : UserDevicePlatform
+deviceName : string?
+pushToken : string?
+locale : string?
+timezone : string?
+notificationsEnabled : bool
+capabilities : jsonb?
+lastSeenAt : timestamptz?
+createdAt : timestamptz
+updatedAt : timestamptz
}
User "1" <-- "0..*" UserIdentity : "has"
User "1" <-- "0..*" UserProfile : "has"
User "1" <-- "0..*" UserSession : "has"
User "1" <-- "0..*" UserDevice : "has"
```

**Diagram sources**
- [schema.prisma:106-216](file://Lucent/prisma/schema.prisma#L106-L216)

**Section sources**
- [schema.prisma:106-216](file://Lucent/prisma/schema.prisma#L106-L216)
- [20260527131112_init/migration.sql:1-35](file://Lucent/prisma/migrations/20260527131112_init/migration.sql#L1-L35)
- [20260530183000_expand_user_domain/migration.sql:48-182](file://Lucent/prisma/migrations/20260530183000_expand_user_domain/migration.sql#L48-L182)
- [20260605153000_add_user_identities/migration.sql:1-22](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql#L1-L22)
- [20260605160000_make_user_email_nullable/migration.sql:1-2](file://Lucent/prisma/migrations/20260605160000_make_user_email_nullable/migration.sql#L1-L2)
- [20260605161000_add_user_identity_union_id/migration.sql:1-4](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql#L1-L4)

### Health Context: Allergies and Conditions
- User Allergies
  - Kind and severity enums; active flag; recorded timestamp.
  - Indexes: user+active.

- User Conditions
  - Status enum; diagnosed/resolved date range validation.
  - Indexes: user+status.

```mermaid
flowchart TD
Start(["Condition Creation"]) --> ValidateDates["Validate dates<br/>resolved >= diagnosed (when both provided)"]
ValidateDates --> Valid{"Valid?"}
Valid --> |Yes| Persist["Persist condition record"]
Valid --> |No| Error["Throw validation error"]
Persist --> End(["Done"])
Error --> End
```

**Diagram sources**
- [20260530183000_expand_user_domain/migration.sql:132-148](file://Lucent/prisma/migrations/20260530183000_expand_user_domain/migration.sql#L132-L148)
- [create-condition.dto.ts:1-52](file://Lucent/src/modules/user-health-context/dto/create-condition.dto.ts#L1-L52)

**Section sources**
- [schema.prisma:218-252](file://Lucent/prisma/schema.prisma#L218-L252)
- [20260530183000_expand_user_domain/migration.sql:113-148](file://Lucent/prisma/migrations/20260530183000_expand_user_domain/migration.sql#L113-L148)
- [create-condition.dto.ts:1-52](file://Lucent/src/modules/user-health-context/dto/create-condition.dto.ts#L1-L52)

### Medications Domain
- User Current Medicines
  - Source enum supports multiple knowledge bases; source_ref_id links to external systems.
  - Date range validation: ended >= started (when both provided).
  - Indexes: user+current, user+source.

- User Medicine Dose Logs
  - Status enum; scheduled date; optional taken timestamp; source defaults to manual; deletion marker.
  - Indexes: user+scheduled, user+medicine, user+deleted.

- User Medicine Reminders
  - Scheduled time and days-of-week (JSON array); optional start/end dates; active flag; deletion marker.
  - Indexes: user+active, user+medicine, user+deleted, user+date window.

- Reminder Deliveries
  - Tracks delivery attempts by channel/status; scheduled and delivered timestamps; error messages.

```mermaid
sequenceDiagram
participant Client as "Client"
participant Controller as "MedicinesController"
participant Cache as "MedicinesCacheService"
participant Service as "MedicinesService"
Client->>Controller : GET /medicines/search?q=...
Controller->>Controller : read bypass header
Controller->>Cache : getOrSetSearch(...)
alt cache hit
Cache-->>Controller : cached results
else cache miss
Controller->>Service : searchWithCache(...)
Service-->>Controller : results
Controller->>Cache : set(key, results, TTL)
end
Controller-->>Client : success envelope with items/meta
```

**Diagram sources**
- [medicines.controller.ts:41-96](file://Lucent/src/modules/medicines/medicines.controller.ts#L41-L96)
- [medicines-cache.service.ts:45-83](file://Lucent/src/modules/medicines/cache/medicines-cache.service.ts#L45-L83)
- [medicines-cache.constants.ts:1-4](file://Lucent/src/modules/medicines/cache/medicines-cache.constants.ts#L1-L4)

**Section sources**
- [schema.prisma:254-352](file://Lucent/prisma/schema.prisma#L254-L352)
- [20260604010000_add_user_medicine_dose_logs/migration.sql:1-36](file://Lucent/prisma/migrations/20260604010000_add_user_medicine_dose_logs/migration.sql#L1-L36)
- [20260608193000_add_user_medicine_reminders/migration.sql:1-27](file://Lucent/prisma/migrations/20260608193000_add_user_medicine_reminders/migration.sql#L1-L27)
- [20260610093000_extend_medicine_reminders/migration.sql:1-31](file://Lucent/prisma/migrations/20260610093000_extend_medicine_reminders/migration.sql#L1-L31)
- [medicines.controller.ts:41-96](file://Lucent/src/modules/medicines/medicines.controller.ts#L41-L96)
- [medicines-cache.service.ts:45-83](file://Lucent/src/modules/medicines/cache/medicines-cache.service.ts#L45-L83)
- [medicines-cache.constants.ts:1-4](file://Lucent/src/modules/medicines/cache/medicines-cache.constants.ts#L1-L4)

### Daily Records and Attachments
- User Daily Records
  - Kind enum supports water, meal, vital signs, mood, symptoms, activity, notes.
  - Indexes: user+occurrence date, user+kind, user+deleted.

- User Daily Record Attachments
  - Image attachment metadata; cloud object key; optional provider/bucket; dimensions and content type; public URL.

```mermaid
classDiagram
class UserDailyRecord {
+id : uuid
+userId : uuid
+kind : DailyRecordKind
+occurredAt : date
+title : string?
+value : string?
+unit : string?
+note : string?
+payload : jsonb?
+source : string
+deletedAt : timestamptz?
+createdAt : timestamptz
+updatedAt : timestamptz
}
class UserDailyRecordAttachment {
+id : uuid
+userId : uuid
+recordId : uuid
+kind : DailyRecordAttachmentKind
+objectKey : string
+bucket : string?
+provider : string?
+fileName : string?
+contentType : string?
+sizeBytes : int?
+width : int?
+height : int?
+publicUrl : string?
+createdAt : timestamptz
}
UserDailyRecord "1" <-- "0..*" UserDailyRecordAttachment : "has"
```

**Diagram sources**
- [schema.prisma:354-397](file://Lucent/prisma/schema.prisma#L354-L397)
- [20260604000000_add_user_daily_records/migration.sql:1-34](file://Lucent/prisma/migrations/20260604000000_add_user_daily_records/migration.sql#L1-L34)
- [20260606133000_add_daily_record_attachments/migration.sql:1-32](file://Lucent/prisma/migrations/20260606133000_add_daily_record_attachments/migration.sql#L1-L32)

**Section sources**
- [schema.prisma:354-397](file://Lucent/prisma/schema.prisma#L354-L397)
- [20260604000000_add_user_daily_records/migration.sql:1-34](file://Lucent/prisma/migrations/20260604000000_add_user_daily_records/migration.sql#L1-L34)
- [20260606133000_add_daily_record_attachments/migration.sql:1-32](file://Lucent/prisma/migrations/20260606133000_add_daily_record_attachments/migration.sql#L1-L32)

### Medicine Knowledge Base
- Import Metadata
  - Tracks source key/name/version, file info, export timestamp, status, counts, rejection summary, note.
  - Index: source key + creation time.

- CN Medicine Products
  - Product catalog with approvals, ingredients, warnings, dosages, storage, validity, identifiers, search text.
  - Indexes: name, approval number, manufacturer, barcode, national drug code, search text.

- DrugBank Drugs
  - Comprehensive drug metadata, interactions, identifiers, categories, ATC codes, external links, search text.
  - Indexes: name, CAS number, UNII, search text.

- External Links and Targets
  - External identifiers and links; targets with gene/protein ids, PDB ids, species.
  - Unique constraints on target dataset+id pairs; unique bridge key on drug/target/relation.

- Drug-Target Relations
  - Bridge table linking drugs to targets with relation kind and actions.

```mermaid
erDiagram
DRUG_SOURCE_IMPORTS ||--o{ CN_MEDICINE_PRODUCTS : "produces"
DRUG_SOURCE_IMPORTS ||--o{ DRUGBANK_DRUGS : "produces"
DRUG_SOURCE_IMPORTS ||--o{ DRUGBANK_EXTERNAL_LINKS : "produces"
DRUG_SOURCE_IMPORTS ||--o{ DRUGBANK_TARGETS : "produces"
DRUGBANK_DRUGS ||--o{ DRUGBANK_DRUG_TARGETS : "targets"
DRUGBANK_EXTERNAL_LINKS ||--|| DRUGBANK_DRUGS : "links_to"
DRUGBANK_TARGETS ||--o{ DRUGBANK_DRUG_TARGETS : "related_to"
```

**Diagram sources**
- [schema.prisma:399-599](file://Lucent/prisma/schema.prisma#L399-L599)
- [20260530233000_add_medicine_knowledge/migration.sql:1-273](file://Lucent/prisma/migrations/20260530233000_add_medicine_knowledge/migration.sql#L1-L273)

**Section sources**
- [schema.prisma:399-599](file://Lucent/prisma/schema.prisma#L399-L599)
- [20260530233000_add_medicine_knowledge/migration.sql:1-273](file://Lucent/prisma/migrations/20260530233000_add_medicine_knowledge/migration.sql#L1-L273)

## Dependency Analysis
- Referential Integrity
  - All relations define cascade deletes from user to child entities.
  - Some foreign keys use SET NULL to decouple when parent records are removed (e.g., reminder’s current medicine, dose log’s current medicine, attachment’s record).

- Indexes and Cardinality
  - High-selectivity fields (e.g., email, refresh token hash, push token) are unique-indexed.
  - Composite indexes optimize frequent queries (user+status, user+active, user+occurrence date, user+kind, user+deleted, user+medicine, user+date window).

- Enumerations
  - Centralized enums reduce data inconsistency and simplify validation.

```mermaid
graph LR
Users["Users"] --> Identities["UserIdentities"]
Users --> Profiles["UserProfiles"]
Users --> Sessions["UserSessions"]
Users --> Devices["UserDevices"]
Users --> Allergies["UserAllergies"]
Users --> Conditions["UserConditions"]
Users --> CurrentMeds["UserCurrentMedicines"]
Users --> Reminders["UserMedicineReminders"]
Users --> ReminderDeliveries["UserReminderDeliveries"]
Users --> DailyRecords["UserDailyRecords"]
Users --> Attachments["UserDailyRecordAttachments"]
CurrentMeds --> DoseLogs["UserMedicineDoseLogs"]
Reminders --> ReminderDeliveries
DailyRecords --> Attachments
```

**Diagram sources**
- [schema.prisma:106-599](file://Lucent/prisma/schema.prisma#L106-L599)

**Section sources**
- [schema.prisma:106-599](file://Lucent/prisma/schema.prisma#L106-L599)

## Performance Considerations
- Caching Strategy
  - Medicines search and detail results are cached with distinct TTLs.
  - Cache keys are hierarchical and include source, query, pagination, and encoded terms.
  - An admin service can enumerate and invalidate caches for the medicines domain.

- Cache Control
  - Controllers expose a bypass header to skip cache for specific requests.

- Index Utilization
  - Queries commonly filter by user id combined with time-based or categorical fields; composite indexes align with these patterns.

- Data Types
  - JSONB fields support flexible payloads without schema rigidity; however, avoid overusing for frequently joined or filtered columns.

**Section sources**
- [medicines-cache.constants.ts:1-4](file://Lucent/src/modules/medicines/cache/medicines-cache.constants.ts#L1-L4)
- [medicines-cache.service.ts:45-83](file://Lucent/src/modules/medicines/cache/medicines-cache.service.ts#L45-L83)
- [medicines.controller.ts:41-96](file://Lucent/src/modules/medicines/medicines.controller.ts#L41-L96)

## Troubleshooting Guide
- Validation Failures
  - Condition date window validation prevents invalid resolved-before-diagnosed scenarios.
  - Reminder days-of-week normalization rejects empty arrays and ensures numeric integrity.

- Common Issues
  - Email uniqueness conflicts: ensure unique constraints are respected for active users.
  - Reminder scheduling: confirm start/end dates and days-of-week are valid.

**Section sources**
- [20260530183000_expand_user_domain/migration.sql:132-148](file://Lucent/prisma/migrations/20260530183000_expand_user_domain/migration.sql#L132-L148)
- [medicine-reminders.service.ts:177-217](file://Lucent/src/modules/medicine-reminders/medicine-reminders.service.ts#L177-L217)

## Conclusion
The Lumos schema is designed around a user-centric health and medication domain with strong referential integrity, controlled vocabularies via enums, and strategic indexing. The addition of a robust caching layer for medicine knowledge improves read performance. Migrations document a clear evolution path, enabling safe schema changes over time.

## Appendices

### Migration History and Evolution
- Initial users and refresh tokens.
- Expanded user domain with profiles, sessions, devices, allergies, conditions, current medicines.
- Introduced medicine knowledge base (imports, CN products, DrugBank drugs, targets, links).
- Added daily records and attachments.
- Added dose logs and reminders; extended reminders with date windows and delivery tracking.

**Section sources**
- [20260527131112_init/migration.sql:1-35](file://Lucent/prisma/migrations/20260527131112_init/migration.sql#L1-L35)
- [20260530183000_expand_user_domain/migration.sql:1-182](file://Lucent/prisma/migrations/20260530183000_expand_user_domain/migration.sql#L1-L182)
- [20260530233000_add_medicine_knowledge/migration.sql:1-273](file://Lucent/prisma/migrations/20260530233000_add_medicine_knowledge/migration.sql#L1-L273)
- [20260604000000_add_user_daily_records/migration.sql:1-34](file://Lucent/prisma/migrations/20260604000000_add_user_daily_records/migration.sql#L1-L34)
- [20260604010000_add_user_medicine_dose_logs/migration.sql:1-36](file://Lucent/prisma/migrations/20260604010000_add_user_medicine_dose_logs/migration.sql#L1-L36)
- [20260605153000_add_user_identities/migration.sql:1-22](file://Lucent/prisma/migrations/20260605153000_add_user_identities/migration.sql#L1-L22)
- [20260605160000_make_user_email_nullable/migration.sql:1-2](file://Lucent/prisma/migrations/20260605160000_make_user_email_nullable/migration.sql#L1-L2)
- [20260605161000_add_user_identity_union_id/migration.sql:1-4](file://Lucent/prisma/migrations/20260605161000_add_user_identity_union_id/migration.sql#L1-L4)
- [20260606133000_add_daily_record_attachments/migration.sql:1-32](file://Lucent/prisma/migrations/20260606133000_add_daily_record_attachments/migration.sql#L1-L32)
- [20260608193000_add_user_medicine_reminders/migration.sql:1-27](file://Lucent/prisma/migrations/20260608193000_add_user_medicine_reminders/migration.sql#L1-L27)
- [20260610093000_extend_medicine_reminders/migration.sql:1-31](file://Lucent/prisma/migrations/20260610093000_extend_medicine_reminders/migration.sql#L1-L31)

### Data Lifecycle Management
- Deletion markers: deleted_at on daily records, dose logs, reminders enable soft-deletion semantics.
- Cascading deletes preserve referential integrity when user records are removed.
- Partial unique index on email ensures uniqueness among active users.

**Section sources**
- [schema.prisma:354-352](file://Lucent/prisma/schema.prisma#L354-L352)
- [20260527131112_init/migration.sql:43-46](file://Lucent/prisma/migrations/20260527131112_init/migration.sql#L43-L46)

### Data Access Patterns
- Frequent queries include user-scoped lists by date/kind/status; composite indexes support these.
- Medicine search/detail reads are cached to reduce database load.

**Section sources**
- [schema.prisma:354-397](file://Lucent/prisma/schema.prisma#L354-L397)
- [medicines-cache.service.ts:45-83](file://Lucent/src/modules/medicines/cache/medicines-cache.service.ts#L45-L83)

### Security and Privacy
- Password hashes stored for local accounts; non-local providers may not require password hashes.
- Session refresh token hash is unique and indexed; sessions track device/platform/context and expiry/revocation.
- Sensitive health data is scoped under user ownership with cascading deletes upon user removal.

**Section sources**
- [schema.prisma:106-216](file://Lucent/prisma/schema.prisma#L106-L216)