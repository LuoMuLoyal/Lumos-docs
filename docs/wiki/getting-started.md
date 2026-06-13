# 快速开始

## 前置条件

| 工具 | 版本要求 | 说明 |
| --- | --- | --- |
| Node.js | >= 18 | Lucent 后端运行时 |
| pnpm | >= 9 | 包管理器 |
| Flutter | >= 3.x | Luminous 前端 SDK |
| Dart | 随 Flutter | Flutter 自带 |
| PostgreSQL | >= 15 | 数据库 |
| Redis | >= 7 | 缓存和队列 |
| Docker | 可选 | 用于本地 PostgreSQL + Redis |

## 克隆仓库

```bash
git clone https://github.com/LuoMuLoyal/Lucent.git
git clone https://github.com/LuoMuLoyal/Luminous.git
```

推荐的工作区目录结构：

```text
Lumos/
├── Lucent/          # NestJS 后端
├── Luminous/        # Flutter 客户端
├── Luminous-site/   # Nuxt 官网
└── Lumos-docs/      # 文档站（本仓库）
```

## Lucent 后端启动

```bash
cd Lucent
pnpm install
pnpm dev:stack:up        # 启动 PostgreSQL + Redis Docker 容器
pnpm db:migrate:all      # 执行数据库迁移
pnpm start:dev           # 启动开发服务器
```

本地数据库默认配置：

- 开发库：`postgres/postgres@127.0.0.1:15432/lucent`
- 测试库：`lucent/lucent_dev@127.0.0.1:5432/lucent`
- Redis：`redis://127.0.0.1:6379`

详细环境变量配置见 [Lucent 环境文档](/current/lucent-docs/environment)。

## Luminous 前端启动

```bash
cd Luminous
flutter pub get
flutter run
```

常用命令：

```bash
flutter analyze           # 静态分析
flutter test              # 单元测试
flutter test integration_test  # 集成测试
dart run tool/regenerate_lucent_openapi.dart  # 重新生成 API 客户端
```

## 验证

### 后端验证

```bash
cd Lucent
pnpm typecheck
pnpm lint:check
pnpm build
pnpm test:ci
pnpm export:openapi
```

### 前端验证

```bash
cd Luminous
flutter analyze
flutter test
```

### 文档站验证

```bash
cd Lumos-docs
pnpm install
pnpm docs:sync
pnpm docs:build
```

## 下一步

- [架构概览](./architecture) — 了解系统整体设计
- [开发指南](./development) — 日常开发流程和规范
