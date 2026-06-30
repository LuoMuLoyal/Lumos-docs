# AGENTS.md - Lumos Docs

## Read First

- `README.md`

## Stack

- VitePress
- pnpm

## Purpose

`Lumos-docs/` 是文档聚合展示站点，**不是文档的源头**。它通过 `pnpm docs:sync` 从 `Lucent/docs/` 和 `Luminous/docs/` 拉取内容并渲染。

## Core Rule

**不要直接编辑 `docs/current/` 和 `docs/api/` 下的文件。** 这些是镜像副本，下次 `pnpm docs:sync` 会覆盖。

- Lucent 文档的源头：`../Lucent/docs/`
- Luminous 文档的源头：`../Luminous/docs/`
- API Schema 页面：从 `../Lucent/docs/openapi.json` 生成

如果发现内容有误，去对应的源头 repo 修改，然后重新同步，而不是在这里打补丁。

## Commands

```powershell
pnpm install
pnpm docs:sync           # 从 Lucent/Luminous 同步最新文档
pnpm docs:sync:openapi   # 从 Lucent OpenAPI 生成 API Schema 页面
pnpm typecheck           # TypeScript 类型检查
pnpm docs:dev            # 本地开发服务器
pnpm docs:build          # 构建静态站点
pnpm docs:preview        # 预览构建产物
```

## Structure

```
docs/
  .vitepress/      # VitePress 配置
  api/             # 生成的 API Schema 页面（不要手动编辑）
  archive/         # 历史归档文档
  current/         # 从 Lucent/Luminous 同步的当前文档（不要手动编辑）
  index.md         # 站点首页
scripts/           # 同步和生成脚本
```

## Working Rules

- 只编辑站点配置（`docs/.vitepress/`）、首页（`docs/index.md`）和导航结构。
- 不要在此目录中创建新的技术文档——它们属于 Lucent 或 Luminous repo。
- 同步后检查构建是否通过：`pnpm docs:build`。
- 不要提交 `node_modules/`、`docs/.vitepress/cache/`、`docs/.vitepress/dist/`。
