# 第四章：LLM 对接与流式输出

> 本章我们将实现 MiniClaw 的 LLM 客户端，掌握 AI 对话的核心技术。

## 📋 本章概览

本章将完成以下工作：

- **4.1 为什么不用 Spring AI** - 技术选型分析 ✅
- **4.2 OpenAI 兼容客户端设计** - 定义接口和协议
- **4.3 同步调用实现** - 基础的 LLM 调用
- **4.4 SSE 协议与流式输出** - 流式对话（重点）
- **4.5 Reactor Flux 流式管道** - 响应式编程（重点）
- **4.6 流式输出的内存管理** - 避免 OOM
- **4.7 错误处理与降级策略** - 可靠性保障
- **4.8 多模型适配** - 统一接口

## 🎯 学习目标

完成本章后，你将：

1. **掌握 LLM API 协议**
2. **理解 SSE 流式输出原理**
3. **掌握 Reactor 响应式编程**
4. **实现完整的 LLM 客户端**
5. **具备错误处理和降级能力**

## 🏗️ 最终成果

本章完成后，项目结构如下：

```
miniclaw-learn/
└── src/main/java/com/miniclaw/
    └── llm/
        ├── LlmClient.java                # 接口定义
        ├── OpenAiCompatibleLlmClient.java # 实现类
        ├── model/
        │   ├── LlmRequest.java
        │   ├── LlmResponse.java
        │   ├── LlmChunk.java
        │   └── Message.java
        └── exception/
            ├── LlmException.java
            ├── RateLimitException.java
            └── TokenLimitException.java
```

## 🔗 与后续章节的关系

- **第 5 章**：在 LLM 客户端基础上构建 WebSocket 网关
- **第 8 章**：在 LLM 客户端基础上实现 ReAct 循环
- **第 10 章**：在 LLM 调用中使用 Memory

## 🎯 本章重点

### ⭐ 核心技术点

1. **SSE（Server-Sent Events）协议**
   - 流式传输的基础
   - delta 累积机制
   - 与 WebSocket 的区别

2. **Reactor Flux**
   - 响应式流编程
   - 背压处理
   - 错误处理

3. **OpenAI API 协议**
   - Chat Completion API
   - Function Calling
   - Token 统计

### 🔥 难点突破

- **流式输出到前端**：LLM → 后端 → 前端完整链路
- **内存管理**：避免大文本导致 OOM
- **错误处理**：精确识别和处理各种异常

---

让我们从 [4.1 为什么不用 Spring AI](./4.1-why-not-spring-ai.md) 开始吧！
