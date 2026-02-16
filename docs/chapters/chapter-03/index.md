# 第三章：开发环境与基础底座

> 在开始编写代码之前，我们需要搭建坚实的开发环境。这一章将建立整个 MiniClaw 项目的基础架构。

## 📋 本章概览

本章将完成以下工作：

- **3.1 开发环境准备** - 安装 JDK 21、Maven，创建 Spring Boot 项目 ✅
- **3.2 Docker Compose 编排** - 配置 PostgreSQL + pgvector 数据库 ✅
- **3.3 Flyway 数据库迁移** - 设计 Session/Run/Message 数据表 ✅
- **3.4 项目骨架** - 完善分层架构
- **3.4 项目骨架** - 完善分层架构
- **3.5 配置管理** - 多环境配置

## 🎯 学习目标

完成本章后，你将：

1. **掌握 Spring Boot 3.x 项目搭建**
2. **理解 Docker Compose 编排基础设施**
3. **掌握 Flyway 数据库版本控制**
4. **理解分层架构设计**
5. **掌握多环境配置管理**

## 🏗️ 最终成果

本章完成后，项目结构如下：

```
miniclaw-learn/
├── pom.xml
├── docker-compose.yml
├── src/main/
│   ├── java/com/miniclaw/
│   │   ├── MiniClawApplication.java
│   │   ├── config/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   └── dto/
│   └── resources/
│       ├── application.yml
│       ├── application-dev.yml
│       ├── application-prod.yml
│       └── db/migration/
└── src/test/
```

## 🔗 与后续章节的关系

- **第 4 章**：在基础设施上对接 LLM
- **第 5 章**：在 Session/Run/Message 上构建 WebSocket
- **第 10 章**：使用 pgvector 向量检索

---

让我们从 [3.1 开发环境准备](./3.1-env-setup.md) 开始吧！
