# 贡献指南

## 仓库结构

Lucent 和 Luminous 是**独立的 Git 仓库**。在 Lumos 工作区根目录下操作时，使用：

```bash
git -C Lucent status
git -C Luminous status
```

不要假设一个子项目的变更会和另一个子项目一起提交。

## 分支策略

- `main` — 稳定分支
- 功能分支从 `main` 创建
- 完成后通过 PR 合并回 `main`

## 提交规范

使用约定式提交：

```
type(scope): 中文摘要
```

类型：

| 类型 | 说明 |
| --- | --- |
| `feat` | 新功能 |
| `fix` | 修复 |
| `docs` | 文档变更 |
| `style` | 代码格式（不影响逻辑） |
| `refactor` | 重构 |
| `test` | 测试 |
| `chore` | 构建/工具变更 |

示例：

```
feat(auth): 添加微信 OAuth 移动端登录
fix(records): 修复日期筛选时区偏移
docs(wiki): 补充部署文档
```

## PR 流程

1. 从 `main` 创建功能分支
2. 完成开发后运行验证命令
3. 创建 PR，填写变更说明
4. 代码审查通过后合并

### 后端 PR 验证

```bash
cd Lucent
pnpm typecheck
pnpm lint:check
pnpm build
pnpm test:ci
```

### 前端 PR 验证

```bash
cd Luminous
flutter analyze
flutter test
```

## 文档更新规则

| 变更类型 | 更新位置 |
| --- | --- |
| 后端 API 变更 | 运行 `pnpm export:openapi` |
| 环境变量变更 | `Lucent/docs/environment.md` |
| 部署流程变更 | `Lucent/docs/tencent-cloud-cicd.md` |
| 药品数据源变更 | `Lucent/docs/public/data-sources.md` |
| 前端 UI/状态变更 | `Luminous/docs/Current_State.md` |
| 前端可见变更 | `Luminous/docs/migration-log/YYYY-MM-DD.md` |
| 国际化变更 | `Luminous/docs/Localization.md` |
| API 客户端变更 | `Luminous/docs/OpenApi_Client.md` |
| 项目规则变更 | `Luminous/docs/Project_Guardrails.md` |
| Wiki 内容 | `Lumos-docs/docs/wiki/` |

## 安全注意事项

- 不要硬编码 API key、OAuth secret、数据库密码、云服务凭证
- 不要将 `.env` 文件提交到仓库
- 不要提交包含真实凭证的配置文件
- 使用环境变量或 secret manager 管理敏感信息

## 代码审查要点

- 后端：响应格式是否符合 `{ code, message, data }` 信封
- 后端：是否需要运行 `pnpm export:openapi`
- 前端：新代码是否在 `lib/features/`、`lib/core/` 或 `lib/shared/` 下
- 前端：用户可见文本是否通过 ARB 管理
- 前端：错误/加载状态是否使用标准组件
- 通用：是否引入了不必要的依赖或抽象
