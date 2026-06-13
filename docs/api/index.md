# API Docs

> Generated from Lucent OpenAPI. Do not edit these pages by hand.

- OpenAPI version: `3.0.0`
- Generated at: `2026-06-13T04:39:43.599Z`
- Paths: `47`
- Operations: `61`
- Tags: `15`
- Schemas: `138`

## Sections

- [Tag Pages](./tags/)
- [Schema Pages](./schemas/)

## Tags

| Tag | Operations | Link |
| --- | ---: | --- |
| Account | 9 | [查看](./tags/account) |
| App | 1 | [查看](./tags/app) |
| Auth | 12 | [查看](./tags/auth) |
| Daily Records | 7 | [查看](./tags/daily-records) |
| Data Export | 2 | [查看](./tags/data-export) |
| Environment | 1 | [查看](./tags/environment) |
| Medicine Dose Logs | 4 | [查看](./tags/medicine-dose-logs) |
| Medicine Reminders | 4 | [查看](./tags/medicine-reminders) |
| Medicines | 2 | [查看](./tags/medicines) |
| Reminder Deliveries | 1 | [查看](./tags/reminder-deliveries) |
| Reports | 2 | [查看](./tags/reports) |
| Support Resources | 2 | [查看](./tags/support-resources) |
| Today Analysis | 1 | [查看](./tags/today-analysis) |
| User Health Context | 11 | [查看](./tags/user-health-context) |
| User Settings | 2 | [查看](./tags/user-settings) |

## Endpoint Index

| Method | Path | Tag | Summary |
| --- | --- | --- | --- |
| `GET` | `/api/v1/account` | [Account](./tags/account) | Get authenticated account profile |
| `PATCH` | `/api/v1/account` | [Account](./tags/account) | Update authenticated account profile |
| `DELETE` | `/api/v1/account` | [Account](./tags/account) | Delete authenticated account |
| `POST` | `/api/v1/account/email` | [Account](./tags/account) | Change authenticated account email |
| `DELETE` | `/api/v1/account/identities/{identityId}` | [Account](./tags/account) | Unlink authenticated account OAuth identity |
| `POST` | `/api/v1/account/identities/wechat-mobile/callback` | [Account](./tags/account) | Link WeChat mobile identity to authenticated account |
| `POST` | `/api/v1/account/identities/wechat-web/authorize` | [Account](./tags/account) | Create WeChat web OAuth authorize URL for linking |
| `POST` | `/api/v1/account/identities/wechat-web/callback` | [Account](./tags/account) | Link WeChat web identity to authenticated account |
| `POST` | `/api/v1/account/password` | [Account](./tags/account) | Change authenticated account password |
| `POST` | `/api/v1/auth/forgot-password` | [Auth](./tags/auth) | 忘记密码 |
| `POST` | `/api/v1/auth/login` | [Auth](./tags/auth) | 用户登录 |
| `POST` | `/api/v1/auth/logout` | [Auth](./tags/auth) | 用户登出 |
| `POST` | `/api/v1/auth/oauth/wechat-mobile/callback` | [Auth](./tags/auth) | 微信移动端登录回调 |
| `POST` | `/api/v1/auth/oauth/wechat-web/authorize` | [Auth](./tags/auth) | 创建微信网页登录授权地址 |
| `GET` | `/api/v1/auth/oauth/wechat-web/callback` | [Auth](./tags/auth) | 微信网页登录浏览器回跳 |
| `POST` | `/api/v1/auth/oauth/wechat-web/callback` | [Auth](./tags/auth) | 微信网页登录回调登录 |
| `POST` | `/api/v1/auth/refresh` | [Auth](./tags/auth) | 刷新令牌 |
| `POST` | `/api/v1/auth/register` | [Auth](./tags/auth) | 用户注册 |
| `POST` | `/api/v1/auth/reset-password` | [Auth](./tags/auth) | 重置密码 |
| `POST` | `/api/v1/auth/send-verification-code` | [Auth](./tags/auth) | 发送邮箱验证码 |
| `POST` | `/api/v1/auth/verify-email` | [Auth](./tags/auth) | 验证邮箱 |
| `GET` | `/api/v1/environment/snapshot` | [Environment](./tags/environment) | Get static environment snapshot reference data |
| `GET` | `/api/v1/health` | [App](./tags/app) | AppController_getHealth_v1 |
| `GET` | `/api/v1/medicines` | [Medicines](./tags/medicines) | Search medicines from a selected knowledge source |
| `GET` | `/api/v1/medicines/{id}` | [Medicines](./tags/medicines) | Get medicine detail from a selected knowledge source |
| `GET` | `/api/v1/public/app-info` | [Support Resources](./tags/support-resources) | Get application metadata |
| `GET` | `/api/v1/public/support-resources` | [Support Resources](./tags/support-resources) | Get static support resource entries |
| `GET` | `/api/v1/user/daily-records` | [Daily Records](./tags/daily-records) | List daily records for a given date |
| `POST` | `/api/v1/user/daily-records` | [Daily Records](./tags/daily-records) | Create a daily record |
| `GET` | `/api/v1/user/daily-records/{id}` | [Daily Records](./tags/daily-records) | Get a daily record by id |
| `PATCH` | `/api/v1/user/daily-records/{id}` | [Daily Records](./tags/daily-records) | Update a daily record |
| `DELETE` | `/api/v1/user/daily-records/{id}` | [Daily Records](./tags/daily-records) | Soft-delete a daily record |
| `POST` | `/api/v1/user/daily-records/attachments/images/presign-upload` | [Daily Records](./tags/daily-records) | Create a Tencent COS signed URL for daily record image upload |
| `GET` | `/api/v1/user/daily-records/summary` | [Daily Records](./tags/daily-records) | Get daily record summary (counts by kind) |
| `POST` | `/api/v1/user/data-export-requests` | [Data Export](./tags/data-export) | Create a new data export request |
| `GET` | `/api/v1/user/data-export-requests/latest` | [Data Export](./tags/data-export) | Get the latest data export request |
| `GET` | `/api/v1/user/health-context` | [User Health Context](./tags/user-health-context) | Get the current user health context aggregate |
| `POST` | `/api/v1/user/health-context/allergies` | [User Health Context](./tags/user-health-context) | Create an allergy record |
| `PATCH` | `/api/v1/user/health-context/allergies/{id}` | [User Health Context](./tags/user-health-context) | Update an allergy record |
| `DELETE` | `/api/v1/user/health-context/allergies/{id}` | [User Health Context](./tags/user-health-context) | Deactivate an allergy record (soft delete) |
| `POST` | `/api/v1/user/health-context/conditions` | [User Health Context](./tags/user-health-context) | Create a condition record |
| `PATCH` | `/api/v1/user/health-context/conditions/{id}` | [User Health Context](./tags/user-health-context) | Update a condition record |
| `DELETE` | `/api/v1/user/health-context/conditions/{id}` | [User Health Context](./tags/user-health-context) | Resolve a condition record (soft delete) |
| `POST` | `/api/v1/user/health-context/current-medicines` | [User Health Context](./tags/user-health-context) | Add a current medicine record |
| `PATCH` | `/api/v1/user/health-context/current-medicines/{id}` | [User Health Context](./tags/user-health-context) | Update a current medicine record |
| `DELETE` | `/api/v1/user/health-context/current-medicines/{id}` | [User Health Context](./tags/user-health-context) | Deactivate a current medicine record (soft delete) |
| `PATCH` | `/api/v1/user/health-context/profile` | [User Health Context](./tags/user-health-context) | Update the current user health-context profile |
| `GET` | `/api/v1/user/medicine-dose-logs` | [Medicine Dose Logs](./tags/medicine-dose-logs) | List dose logs for a date |
| `POST` | `/api/v1/user/medicine-dose-logs` | [Medicine Dose Logs](./tags/medicine-dose-logs) | Create a dose log |
| `PATCH` | `/api/v1/user/medicine-dose-logs/{id}` | [Medicine Dose Logs](./tags/medicine-dose-logs) | Update a dose log |
| `DELETE` | `/api/v1/user/medicine-dose-logs/{id}` | [Medicine Dose Logs](./tags/medicine-dose-logs) | Soft-delete a dose log |
| `GET` | `/api/v1/user/medicine-reminders` | [Medicine Reminders](./tags/medicine-reminders) | List medicine reminder schedules |
| `POST` | `/api/v1/user/medicine-reminders` | [Medicine Reminders](./tags/medicine-reminders) | Create a medicine reminder schedule |
| `PATCH` | `/api/v1/user/medicine-reminders/{id}` | [Medicine Reminders](./tags/medicine-reminders) | Update a medicine reminder schedule |
| `DELETE` | `/api/v1/user/medicine-reminders/{id}` | [Medicine Reminders](./tags/medicine-reminders) | Soft-delete a medicine reminder schedule |
| `GET` | `/api/v1/user/reminder-deliveries` | [Reminder Deliveries](./tags/reminder-deliveries) | List reminder delivery audit logs |
| `GET` | `/api/v1/user/reports/dashboard` | [Reports](./tags/reports) | Get authenticated user report dashboard |
| `POST` | `/api/v1/user/reports/summary/generate` | [Reports](./tags/reports) | Generate authenticated user AI summary for report |
| `GET` | `/api/v1/user/settings` | [User Settings](./tags/user-settings) | Get authenticated user settings |
| `PATCH` | `/api/v1/user/settings` | [User Settings](./tags/user-settings) | Update authenticated user settings |
| `POST` | `/api/v1/user/today-analysis/generate` | [Today Analysis](./tags/today-analysis) | Generate authenticated user today AI analysis |
