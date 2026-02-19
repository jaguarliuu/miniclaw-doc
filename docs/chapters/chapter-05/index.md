---
sidebar_label: 第五章
title: 第五章 WebSocket 实时通信与 RPC 架构
---

# 第五章 WebSocket 实时通信与 RPC 架构

本章我们将实现 MiniClaw 的实时通信系统，包括 WebSocket 连接管理、自定义 RPC 协议、EventBus 事件总线、状态机设计和并发控制。

## 📚 章节目录

- [5.0 本章介绍](./5.0-introduction) - 为什么用 WebSocket？RPC vs REST
- 5.1 WebSocket 实时通信 - 连接管理与生命周期（待完成）
- 5.2 自定义 RPC 协议 - Request/Response/Event 三元模型（待完成）
- 5.3 RPC Router 实现 - 消息路由与 Handler 注册（待完成）
- 5.4 EventBus 事件总线 - 发布-订阅模式（待完成）
- 5.5 Session 管理 - 状态机设计（待完成）
- 5.6 Run 状态机 - 生命周期控制（待完成）
- 5.7 SessionLane 串行队列 - 并发控制（待完成）
- 5.8 主链路串联 - 完整数据流（待完成）
- 5.9 Messages 持久化 - 多轮对话存储（待完成）

## 🎯 学习目标

完成本章后，你将能够：

- ✅ 实现 WebSocket 实时通信系统
- ✅ 设计自定义 RPC 协议
- ✅ 实现事件驱动架构
- ✅ 掌握状态机和并发控制
- ✅ 构建完整的 AI Agent 通信系统

## 📊 核心架构

```
Client (WebSocket)
    ↓
WebSocketHandler (连接管理)
    ↓
RpcRouter (路由分发)
    ↓
RpcHandler (业务处理)
    ↓
EventBus (事件推送)
    ↓
Client (实时通知)
```

## 🚀 快速开始

从 [5.0 本章介绍](./5.0-introduction) 开始学习。
