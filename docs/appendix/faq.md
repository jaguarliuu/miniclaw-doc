# 附录 B - 常见问题 FAQ

## 环境配置问题

### Q: JDK 版本要求？

**A:** JDK 24+。课程使用 Spring Boot 3.4，需要 JDK 24 的新特性（Virtual Threads）。

### Q: PostgreSQL 版本要求？

**A:** PostgreSQL 16+，需要 pgvector 扩展支持向量检索。

### Q: Docker Compose 启动失败？

**A:** 检查：
1. Docker 是否正常运行
2. 端口 5432 是否被占用
3. 内存是否充足（建议 4GB+）

---

## 模型调用问题

### Q: 支持哪些 LLM？

**A:** 任何 OpenAI 兼容的 API：
- DeepSeek
- 通义千问
- Kimi
- Ollama（本地部署）
- OpenAI（需要代理）

### Q: 如何配置本地模型？

**A:** 使用 Ollama：
```bash
ollama pull llama3
ollama serve
```

然后在配置文件中设置：
```yaml
llm:
  endpoint: http://localhost:11434/v1
  model: llama3
```

### Q: API 调用超时怎么办？

**A:**
1. 检查网络连接
2. 增加超时时间配置
3. 使用更小的模型（响应更快）

---

## 开发问题

### Q: 为什么不用 Spring AI？

**A:** 课程目标是理解原理，而不是使用框架。手写 LLM 客户端能让你深刻理解：
- OpenAI API 协议
- 流式输出原理
- 工具调用机制

### Q: ReAct 循环为什么会卡住？

**A:** 可能原因：
1. LLM 一直返回工具调用，不收口
2. max_steps 设置太小
3. 工具执行失败但没有正确返回

### Q: Memory 检索效果不好？

**A:** 检查：
1. Embedding 是否正确生成
2. 向量维度是否匹配
3. 是否有足够的记忆内容

---

## 部署问题

### Q: Docker 镜像构建失败？

**A:** 确保：
1. 有足够的磁盘空间
2. 网络能访问 Maven Central
3. JDK 版本正确

### Q: 前端访问后端 404？

**A:** 检查：
1. 后端是否启动
2. CORS 配置
3. API 路径是否正确

---

## 其他问题

### Q: 课程代码能商用吗？

**A:** 代码采用 MIT 协议，可以自由商用。课程内容版权归作者所有。

### Q: 如何加入社区？

**A:**
- GitHub: https://github.com/jaguarliuu/miniclaw
- Discord: https://discord.gg/clawd
