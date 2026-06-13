# 开发指南

## 日常开发流程

### 1. 同步最新代码

```bash
cd Lucent && git pull
cd ../Luminous && git pull
```

### 2. 启动后端

```bash
cd Lucent
pnpm dev:stack:up    # 启动 Docker 依赖
pnpm start:dev       # 启动 NestJS 开发服务器（热重载）
```

### 3. 启动前端

```bash
cd Luminous
flutter pub get
flutter run
```

### 4. 修改代码并验证

后端修改后：

```bash
# 迭代时用窄命令
pnpm lint:check
pnpm typecheck

# 完成后用完整验证
pnpm build
pnpm test:ci
```

前端修改后：

```bash
flutter analyze
flutter test
```

## API 合同变更流程

当后端 API 变更时，需要同步更新 OpenAPI 和客户端：

```bash
# 1. 在 Lucent 修改 controller/DTO
# 2. 导出 OpenAPI
cd Lucent
pnpm export:openapi

# 3. 在 Luminous 重新生成客户端
cd ../Luminous
dart run tool/regenerate_lucent_openapi.dart

# 4. 验证前端仍然正常
flutter analyze
flutter test
```

**重要**: 不要手写端点文档，不要用 ad-hoc 的 `npx` / `build_runner` 命令生成客户端。

## 代码规范

### Lucent 后端

- 全局响应信封保持 `{ code, message, data }`
- 健康检查端点：`GET /api/v1/health`
- 环境变量通过 `.env` 文件配置，不硬编码
- 国际化使用 `I18nService` + `AcceptLanguageResolver`
- 需要显式语言分支时使用 `@I18nLang()` 装饰器
- Prisma 7 的 client provider 是 `prisma-client`（不是 `prisma-client-js`）

### Luminous 前端

- 新代码放在 `lib/features/`、`lib/core/` 或 `lib/shared/`
- 不要往 `lib/pages/`、`lib/stores/`、`lib/viewmodels/`、`lib/components/` 加代码
- 网络代码放在 `lib/core/network/`
- 用户可见文本通过 ARB + `flutter gen-l10n` 管理
- Token 存储优先使用 secure storage，桌面/Web 做降级
- 轻量反馈使用 `lib/core/feedback/app_toast.dart`
- 页面错误状态使用 `AppStateErrorView`
- 加载状态使用 shimmer skeleton，不用 `CircularProgressIndicator`
- 不在普通页面添加解释性、叙事性或营销风格的文案
- 子页面默认使用标准 app header（左返回箭头 + 居中标题）

## 调试技巧

### 后端调试

- AdminJS 管理面板：`http://localhost:3000/admin`
  - 本地默认凭证：`admin@lucent.local` / `admin12345`
- 测试模式启动：`pnpm start:test:dev`（启用测试支持路由）
- E2E 测试路由：`POST /api/v1/testing/fullstack-e2e/record-lane/prepare`

### 前端调试

- 集成测试单个场景：
  ```bash
  flutter test integration_test/settings_preferences_e2e_test.dart
  ```
- API 客户端问题：检查 `packages/lucent_openapi` 是否需要重新生成

## 常见问题

### Prisma 迁移失败

确保 Docker 数据库正在运行：

```bash
pnpm dev:stack:up
pnpm db:migrate:all
```

### Redis 连接问题

NestJS 11 的 cache module 需要 `stores`（不是 `store`），用 Keyv-backed store 包装 Redis。

### OpenAPI 生成失败

确保后端代码编译通过：

```bash
pnpm typecheck
pnpm build
pnpm export:openapi
```

### Flutter API 客户端生成异常

不要用 `npx` 或 `build_runner`，始终使用：

```bash
dart run tool/regenerate_lucent_openapi.dart
```

## 下一步

- [模块说明](./modules) — 深入了解各模块职责
- [部署](./deployment) — 本地和云端部署流程
