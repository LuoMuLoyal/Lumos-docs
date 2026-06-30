---
layout: home

hero:
  name: "Lumos Docs"
  text: "Lumos 工作区文档中枢"
  tagline: Wiki · Current · API · 架构 · Archive — 一个入口，全部文档。
  actions:
    - theme: brand
      text: Wiki
      link: /wiki/
    - theme: alt
      text: Current Docs
      link: /current/
    - theme: alt
      text: API Docs
      link: /api/
    - theme: alt
      text: 架构
      link: /compodoc/

features:
  - title: Wiki
    details: 开发知识库：架构设计、开发指南、模块说明、部署流程和常见问题。手动维护，长期沉淀。
    icon: 📖
  - title: Current Docs
    details: 由 Lucent 和 Luminous 仓库同步的当前生效文档，包括运行环境、部署流程、契约说明和迁移日志。
    icon: 📄
  - title: API Docs
    details: 从 Lucent OpenAPI 自动生成的接口文档，62 条路径、171 个 Schema，支持按 Tag 和端点浏览。
    icon: 🔌
  - title: 架构文档
    details: Compodoc 从 NestJS 源码生成的架构参考：模块依赖图、路由表、控制器/服务/接口索引、依赖关系图谱。
    icon: 🏗️
  - title: Scalar API Reference
    details: Lucent 启动后访问 <code>/api/docs</code> 可交互式调试所有接口，支持 Bearer Auth、请求历史和代码生成。
    icon: 🛠️
  - title: Archive
    details: 历史快照归档，用于回溯旧计划、审计记录和被移出的历史材料。非当前依据，优先参考前面区域。
    icon: 📦
---

## 这不是唯一真相源

这个站点把 Lumos 工作区里分散的文档入口集中到一起，降低查找成本。各文档的权威来源仍然是各自仓库内的文件：

| 内容 | 权威来源 | 本站角色 |
| --- | --- | --- |
| 后端运行 / 部署 / 契约 | `Lucent/docs/` | 同步副本 |
| 前端产品 / 当前状态 | `Luminous/docs/` | 同步副本 |
| API 接口与 DTO | Lucent controller/DTO 代码 | 自动生成页面 + Scalar 交互式文档 |
| 架构与模块依赖 | Lucent 源码 → Compodoc | 自动生成 HTML |
| 开发知识库 | `Lumos-docs/docs/wiki/` | **本站即来源** |

## 先看哪里

- 🧭 **刚开始？** → [Wiki - 快速开始](/wiki/getting-started)
- 🏗️ **了解架构？** → [Wiki - 架构概览](/wiki/architecture) 或 [架构文档](/compodoc/)
- 📋 **查运行配置？** → [Current - Lucent](/current/lucent)
- 🔌 **查接口？** → [API Docs](/api/) 或启动后端访问 `/api/docs`
- 📦 **历史追溯？** → [Archive](/archive/)
