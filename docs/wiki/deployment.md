# 部署

## 本地开发环境

### Docker 依赖

Lucent 提供 Docker Compose 启动 PostgreSQL 和 Redis：

```bash
cd Lucent
pnpm dev:stack:up
```

这会启动：

- PostgreSQL: `127.0.0.1:15432`
- Redis: `127.0.0.1:6379`

### 数据库迁移

```bash
pnpm db:migrate:all
```

### 环境变量

复制环境变量模板并配置：

```bash
cp .env.example .env
```

关键变量：

| 变量 | 说明 |
| --- | --- |
| `DATABASE_URL` | PostgreSQL 连接字符串 |
| `REDIS_URL` | Redis 连接字符串 |
| `JWT_ACCESS_SECRET` | JWT access token 密钥 |
| `JWT_REFRESH_SECRET` | JWT refresh token 密钥 |
| `ADMIN_EMAIL` | AdminJS 管理员邮箱 |
| `ADMIN_PASSWORD` | AdminJS 管理员密码 |
| `ADMIN_COOKIE_SECRET` | AdminJS cookie 密钥 |
| `TENCENT_COS_*` | 腾讯云 COS 配置（图片上传） |
| `AI_PROVIDER` | AI 提供商（`openai-compatible`） |
| `AI_*_BASE_URL` | 各 AI 角色的 API 地址 |
| `AI_*_API_KEY` | 各 AI 角色的 API 密钥 |
| `AI_*_MODEL` | 各 AI 角色的模型名称 |

详细配置见 [Lucent 环境文档](/current/lucent-docs/environment)。

## Tencent Cloud CI/CD

后端部署到腾讯云的流程见 [Tencent Cloud CI/CD 文档](/current/lucent-docs/tencent-cloud-cicd)。

## Flutter 构建

### Android

```bash
cd Luminous
flutter build apk
# 或
flutter build appbundle
```

### iOS

```bash
cd Luminous
flutter build ipa
```

### WeChat SDK 构建注意

移动端 WeChat SDK 构建需要：

```bash
# Dart define
--dart-define=WECHAT_MOBILE_APP_ID=<wx_app_id>

# iOS 额外需要
--dart-define=WECHAT_IOS_UNIVERSAL_LINK=<universal_link>
```

iOS 还需要：

1. 复制 `ios/Flutter/Wechat.example.xcconfig` 为 `ios/Flutter/Wechat.xcconfig`
2. 设置 `WECHAT_MOBILE_APP_ID`
3. 在微信开放平台配置 URL Scheme 和 Universal Link

## 文档站部署

```bash
cd Lumos-docs
pnpm install
pnpm docs:sync      # 同步各仓库文档
pnpm docs:build     # 构建静态站点
pnpm docs:preview   # 本地预览构建产物
```

构建产物在 `docs/.vitepress/dist/`，可部署到任何静态托管服务。
