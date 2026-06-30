# Current Docs

`Lumos-docs` 是一个展示性文档站，用于把 `Lucent/docs/` 和 `Luminous/docs/` 的内容以可浏览的形式发布出来。它**不是权威参考**，更新速度也慢于各自仓库内的文档。

## 权威来源

查找信息时请优先查看项目仓库内的文档：

- 后端运行、部署、契约、数据源 → `Lucent/docs/`
- 前端产品、当前状态、迁移日志、OpenAPI 客户端流程 → `Luminous/docs/`
- 接口与 DTO → [API Docs](/api/) 或启动后端后访问 Scalar 交互式文档 `/api/docs`
- 后端架构、模块依赖、路由表 → [架构文档](/compodoc/)（Compodoc 从源码生成）

## 为什么这里可能落后

本站通过构建流程拉取上述仓库文档。如果发现 `Lumos-docs` 与仓库文档不一致：

- **以仓库内文档为准**。
- 不要在本站手工修改副本去"同步"。
- 应在文档站构建流程或对应仓库文档中处理差异。

## 入口

- [Lucent 后端文档](/current/lucent)
- [Luminous 前端文档](/current/luminous)
- [API 接口文档](/api/)
- [架构文档 (Compodoc)](/compodoc/)
