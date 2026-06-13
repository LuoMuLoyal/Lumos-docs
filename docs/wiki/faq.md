# FAQ

## 开发环境

### Q: `pnpm dev:stack:up` 启动失败

确保 Docker Desktop 正在运行。Windows 上检查 Docker Desktop 是否已启动且 WSL2 后端正常。

### Q: Prisma 迁移报错

```bash
# 确保数据库已启动
pnpm dev:stack:up
# 重新执行迁移
pnpm db:migrate:all
```

如果 schema 有破坏性变更，可能需要重置数据库：

```bash
pnpm db:reset
```

### Q: NestJS cache module 行为异常

NestJS 11 的 cache module 使用 `stores`（不是 `store`）。如果配置了 Redis，需要用 Keyv-backed store 包装，否则会静默回退到内存缓存。

### Q: Flutter 依赖冲突

```bash
flutter clean
flutter pub get
```

如果仍然冲突，检查 `pubspec.yaml` 中的版本约束。

## API 相关

### Q: 如何查看当前 API 文档？

两种方式：

1. 生成的 OpenAPI 页面：访问 [API Docs](/api/)
2. 源头代码：查看 `Lucent/src/modules/` 下的 controller 和 DTO

### Q: 修改了后端 API，前端怎么同步？

```bash
# 1. 导出 OpenAPI
cd Lucent
pnpm export:openapi

# 2. 重新生成 Flutter 客户端
cd ../Luminous
dart run tool/regenerate_lucent_openapi.dart

# 3. 验证
flutter analyze
```

### Q: 能不能手写 API 端点文档？

不能。API 合同的唯一来源是 Lucent 的 controller/DTO 代码。通过 `pnpm export:openapi` 自动生成文档。

## 前端开发

### Q: 新功能代码放在哪里？

- 功能模块：`lib/features/`
- 核心基础设施：`lib/core/`
- 共享代码：`lib/shared/`

不要往 `lib/pages/`、`lib/stores/`、`lib/viewmodels/`、`lib/components/` 加代码（这些是遗留目录）。

### Q: 错误和加载状态怎么处理？

- 错误状态：使用 `AppStateErrorView`（来自 `lib/core/widgets/app_state_views.dart`）
- 加载状态：使用 shimmer skeleton（`Shimmer.fromColors`），或 `AppStateSkeletonView`

不要手写错误视图或使用 `CircularProgressIndicator`。

### Q: 用户可见文本怎么管理？

所有用户可见文本通过 ARB 文件 + `flutter gen-l10n` 管理。不要在代码中硬编码中文或英文字符串。

### Q: API 客户端生成命令报错

始终使用：

```bash
dart run tool/regenerate_lucent_openapi.dart
```

不要用 `npx` 或 `build_runner` 的 ad-hoc 命令。专用脚本会处理 pubspec 约束和 nullable 生成问题。

## 文档站

### Q: 如何在本地预览文档站？

```bash
cd Lumos-docs
pnpm install
pnpm docs:dev
```

默认地址：`http://localhost:5173`

### Q: 如何同步各仓库的文档？

```bash
pnpm docs:sync
```

这会执行两个脚本：

1. `sync-source-docs.mjs` — 从 Lucent/docs 和 Luminous/docs 同步 Markdown
2. `generate-openapi-docs.mjs` — 从 openapi.json 生成 API 浏览页面

### Q: 侧边栏是怎么生成的？

VitePress 配置中使用 `buildSidebarItems()` 函数自动扫描目录生成侧边栏。新增的 `.md` 文件会自动出现在侧边栏中。

### Q: 文档应该编辑在哪里？

- Wiki 内容：直接编辑 `Lumos-docs/docs/wiki/`
- 后端运营文档：编辑 `Lucent/docs/`，然后运行 `pnpm docs:sync`
- 前端运营文档：编辑 `Luminous/docs/`，然后运行 `pnpm docs:sync`
- API 文档：自动生成，不要手动编辑

## 部署

### Q: AdminJS 管理面板本地凭证是什么？

- 邮箱：`admin@lucent.local`
- 密码：`admin12345`

生产环境务必通过环境变量覆盖：`ADMIN_EMAIL`、`ADMIN_PASSWORD`、`ADMIN_COOKIE_SECRET`。

### Q: WeChat OAuth 移动端构建需要什么配置？

需要：

1. Dart define `WECHAT_MOBILE_APP_ID`
2. iOS 额外：`WECHAT_IOS_UNIVERSAL_LINK` + URL Scheme 配置
3. 微信开放平台的签名/包名配置
4. iOS Associated Domains 配置
