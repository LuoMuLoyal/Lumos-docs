# Wiki

Lumos 工作区的开发知识库。这里汇集架构设计、开发指南、模块说明和常见问题，帮助团队成员快速上手和深入理解系统。

## 快速导航

| 主题 | 说明 |
| --- | --- |
| [快速开始](./getting-started) | 环境准备、首次启动、验证命令 |
| [架构概览](./architecture) | 系统分层、技术栈、数据流、仓库关系 |
| [开发指南](./development) | 日常开发流程、代码规范、调试技巧 |
| [模块说明](./modules) | Lucent 后端模块与 Luminous 前端模块 |
| [部署](./deployment) | 本地 Docker、Tencent Cloud CI/CD |
| [贡献指南](./contributing) | PR 流程、提交规范、代码审查 |
| [FAQ](./faq) | 常见问题与解决方案 |

## 延伸阅读

这里只放手写的长期知识。自动生成和同步的内容请走对应入口：

| 内容 | 入口 | 生成方式 |
| --- | --- | --- |
| 后端架构（模块依赖图、路由表、类索引） | [架构文档](/compodoc/) | Compodoc 从 Lucent 源码生成 |
| API 接口与 DTO Schema | [API Docs](/api/) | OpenAPI 自动生成 |
| 交互式 API 调试 | 启动后端 → `/api/docs` | Scalar API Reference |
| 运行环境 / 部署 / 契约 | [Current - Lucent](/current/lucent) | 同步自 `Lucent/docs/` |
| 前端产品 / 迁移日志 | [Current - Luminous](/current/luminous) | 同步自 `Luminous/docs/` |

## 文档来源

Wiki 内容由 `Lumos-docs` 手动维护，与各仓库的运营文档（`Lucent/docs`、`Luminous/docs`）互补。API 合同和仓库级运营文档仍由各自仓库维护，通过同步脚本聚合到 [Current](/current/) 和 [API](/api/) 区域。
