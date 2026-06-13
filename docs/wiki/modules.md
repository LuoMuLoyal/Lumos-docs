# 模块说明

## Lucent 后端模块

### auth

认证与授权模块。处理用户登录、注册、JWT token 管理和 WeChat OAuth。

- JWT access/refresh token 通过环境变量配置密钥
- 支持 WeChat Web 和 Mobile OAuth 登录
- 使用 Passport JWT 策略

### account

账户管理。处理账户级别的信息和设置。

### user

用户信息管理。用户个人资料、偏好设置等。

### health-context

健康上下文模块。管理用户的健康档案、过敏史、当前用药等基础健康信息。

### daily-records

日常记录模块。处理症状、饮水、饮食、睡眠等日常健康记录。

- 支持图片附件（通过 Tencent COS 签名上传）
- 提供 `/api/v1/user/daily-records/attachments/images/presign-upload`

### dose-logs

用药记录模块。记录服药事件、漏服事件、用药提醒确认等。

### medicines

药品管理模块。药品查询、个人用药盒、药品说明书。

- 药品数据来源见 `docs/public/data-sources.md`
- DrugBank XML 数据通过脚本导入，不手动转换

## Luminous 前端模块

### core/

核心基础设施层。

| 路径 | 职责 |
| --- | --- |
| `core/network/` | HTTP 客户端、拦截器、认证 token 管理 |
| `core/feedback/` | Toast 反馈工具 (`app_toast.dart`) |
| `core/widgets/` | 通用组件（`AppStateErrorView`、`AppStateSkeletonView` 等） |

### features/

功能模块层，按业务领域组织。每个 feature 通常包含：

- 页面 (pages/screens)
- 状态管理 (Riverpod providers)
- 业务逻辑

### shared/

跨 feature 共享的代码。

### packages/lucent_openapi

自动生成的 Lucent API 客户端。由 `dart run tool/regenerate_lucent_openapi.dart` 生成和维护。

**重要**: 不要手动编辑生成的代码，不要用 ad-hoc 命令重新生成。

## 五 Tab 职责

### 今日 (Today)

- 主动提醒展示
- 今日任务列表
- AI 日总结
- 规则命中风险提示和建议

### 记录 (Record)

- 快速记录：症状、饮水、饮食、睡眠、用药
- 自然语言候选记录入口（未来）
- 不包含分析结论

### 用药 (Medicine)

- 药品查询
- 个人用药盒管理
- 用药提醒计划
- 来源支撑的安全解释
- 药物风险检查

### 报告 (Report)

- 每日/每周/月度总结
- 趋势分析
- Web 报告预览
- 导出（受合同门控）

### 我的 (Mine)

- 健康档案
- 过敏史管理
- 隐私设置
- 通知设置
- 校园服务资源
- 账号设置

## 数据模型

核心数据表通过 Prisma 管理，定义在 `Lucent/prisma/schema.prisma`。

主要实体：

- User — 用户账户
- HealthContext — 健康上下文（过敏史、当前用药）
- DailyRecord — 日常记录
- DoseLog — 用药记录
- Medicine — 药品信息
- Reminder — 提醒计划

详细 schema 请查看 `Lucent/prisma/schema.prisma`。
