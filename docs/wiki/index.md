# Wiki

这里对应的是派生知识层，当前来源目标是：

```text
../.qoder/repowiki/en/content
```

## 它适合做什么

repowiki 更适合承担这些用途：

- 新人快速理解项目
- 横向浏览模块关系
- 用更浓缩的方式查看架构、数据库、API 和部署说明

## 它不适合做什么

- 覆盖 `Lucent/docs` 和 `Luminous/docs` 的当前规则
- 成为部署、运行、生成契约的最终依据
- 代替 owning repo 中随代码更新的文档

## 当前已观察到的主题

- Project Overview
- Backend Architecture (Lucent)
- Frontend Architecture (Luminous)
- Database Schema & Data Model
- API Documentation
- Deployment & DevOps
- Contributing Guidelines

## 后续导入原则

- 优先导入 `en/content/**`，先不碰 `knowledge/**`，避免重复。
- 页面上应显式标明它是 Wiki，而不是 Current Docs。
- 搜索排序应低于 Current Docs，高于 Archive。
