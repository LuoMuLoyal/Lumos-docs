# 架构概览

## 系统分层

```text
┌─────────────────────────────────────────────┐
│              Luminous (Flutter)              │
│  手机端主产品 · 五 Tab Shell · Riverpod     │
├─────────────────────────────────────────────┤
│              API 客户端 (generated)          │
│  packages/lucent_openapi · OpenAPI 生成      │
├─────────────────────────────────────────────┤
│              Lucent (NestJS)                 │
│  业务模块 · Prisma · PostgreSQL · Redis      │
├─────────────────────────────────────────────┤
│              数据层                          │
│  PostgreSQL · Redis/BullMQ · Tencent COS     │
└─────────────────────────────────────────────┘
```

## 仓库关系

| 仓库 | 职责 | 关系 |
| --- | --- | --- |
| **Lucent** | NestJS 后端，API 合同、业务逻辑、数据持久化 | 独立仓库，提供 API 给 Luminous |
| **Luminous** | Flutter 客户端，用户界面、交互、本地状态 | 独立仓库，通过 generated client 调用 Lucent |
| **Luminous-site** | Nuxt 官网，产品展示、竞赛页面 | 独立仓库，静态内容 |
| **Lumos-docs** | VitePress 文档站，聚合和导航 | 聚合仓库，从各仓库同步文档 |

## 跨仓库合同

API 合同是 Lucent 和 Luminous 之间的核心纽带：

1. Lucent 的 controller/DTO 代码是 API 合同的唯一来源
2. 运行 `pnpm export:openapi` 生成 `Lucent/docs/openapi.json`
3. Luminous 通过 `dart run tool/regenerate_lucent_openapi.dart` 生成 API 客户端
4. 不维护手写端点文档

```text
Lucent controller/DTO
        │
        ▼
  pnpm export:openapi
        │
        ▼
  Lucent/docs/openapi.json
        │
        ▼
  dart run tool/regenerate_lucent_openapi.dart
        │
        ▼
  Luminous/packages/lucent_openapi (generated)
```

## Lucent 后端架构

### 技术栈

- **框架**: NestJS 11
- **ORM**: Prisma 7 / PostgreSQL
- **缓存/队列**: Redis / BullMQ
- **认证**: Passport JWT + WeChat OAuth + 邮箱验证码（支持 OAuth-only 设密码/删号）
- **AI**: LangChain-based integration (OpenAI-compatible)
- **管理面板**: AdminJS (`/admin`)

### 模块结构

```text
src/
├── modules/             # 业务功能模块
│   ├── auth/            # 认证与授权（委托给 4 个子服务）
│   ├── account/         # 账户管理
│   ├── user/            # 用户信息
│   ├── user-health-context/ # 健康上下文 + profile 写规范化
│   ├── daily-records/   # 日常记录 + NLP 候选生成
│   ├── medicine-dose-logs/  # 用药剂量记录
│   ├── medicine-reminders/  # 用药提醒
│   ├── medicines/       # 药品管理 + 数据源导入
│   ├── reports/         # 报告（dashboard + AI summary）
│   ├── data-export/     # 数据导出（PDF 生成 + COS 存储）
│   ├── assistant/       # AI 助手（LangGraph agent + 工具）
│   ├── today-analysis/  # 今日 AI 分析
│   ├── support-resources/ # 校园支持资源
│   ├── environment/     # 环境快照
│   ├── user-settings/   # 用户设置
│   ├── llm-runtime/     # LLM 运行时（provider/model 构建）
│   └── testing-support/ # 测试辅助
├── common/              # 公共工具和装饰器
├── config/              # 配置模块（env 验证，无代码级 secret fallback）
├── generated/           # 生成代码
├── i18n/                # 国际化
├── mail/                # 邮件服务
└── prisma/              # Prisma 服务
```

### Auth 委托架构

`AuthService` 不再直接操作 cache/prisma 进行认证操作，而是委托给 4 个 `@Injectable()` 子服务：

```
AuthService（编排层）
  ├── AuthTokenService       # JWT 签发/刷新/撤销/会话列表
  ├── AuthRateLimitService   # 登录限流/失败计数/Cache 读写
  ├── AuthOAuthStateService  # OAuth 状态生命周期
  └── AuthOAuthService       # OAuth 用户查找/创建/身份绑定
```

### 响应格式

全局响应信封：`{ code, message, data }`

健康检查端点：`GET /api/v1/health`

## Luminous 前端架构

### 技术栈

- **框架**: Flutter
- **状态管理**: Riverpod
- **路由**: GoRouter
- **国际化**: Flutter gen-l10n
- **API 客户端**: packages/lucent_openapi (generated)

### 代码结构

```text
lib/
├── core/              # 核心基础设施
│   ├── network/       # 网络层
│   ├── feedback/      # 反馈工具
│   └── widgets/       # 通用组件
├── features/          # 功能模块
├── shared/            # 共享代码
└── main.dart          # 入口
```

### 五 Tab 布局

| Tab | 职责 |
| --- | --- |
| 今日 | 主动提醒、今日任务、AI 日总结 |
| 记录 | 快速记录症状、饮水、饮食、睡眠、用药 |
| 用药 | 药品查询、个人用药盒、用药提醒 |
| 报告 | 每日/每周/月度总结、趋势分析 |
| 我的 | 健康档案、隐私设置、账号设置 |

## 数据流

### 用户记录流程

```text
用户输入 → Luminous UI → API Client → Lucent Controller
    → Prisma → PostgreSQL
    → (可选) BullMQ 异步任务 → AI 总结
```

### AI 总结流程

```text
用户授权 → 收集当日记录 → 发送到 Lucent AI 模块
    → LangChain 处理 → 生成总结
    → 返回 Luminous 展示
```

## 更多资料

- [Lucent 环境配置](/current/lucent-docs/environment)
- [Lucent API 文档](/api/)
- [Luminous 产品愿景](/current/luminous-docs/Product_Vision)
- [OpenAPI 客户端说明](/current/luminous-docs/OpenApi_Client)
