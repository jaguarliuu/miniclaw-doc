import React from 'react';
import Layout from '@theme/Layout';
import styles from './outline.module.css';

const chapters = [
  { num: 0, title: '课程导学', time: '10分钟' },
  { num: 1, title: 'AI Agent 全景', time: '180分钟' },
  { num: 2, title: '实操体验', time: '180分钟' },
  { num: 3, title: '开发环境', time: '100分钟' },
  { num: 4, title: 'LLM 对接与流式输出', time: '180分钟', highlight: true },
  { num: 5, title: 'WebSocket 网关', time: '200分钟', highlight: true },
  { num: 6, title: '前端界面', time: '160分钟' },
  { num: 7, title: '工具系统', time: '220分钟', highlight: true },
  { num: 8, title: 'ReAct 循环', time: '180分钟', highlight: true },
  { num: 9, title: 'Skills 系统', time: '220分钟', highlight: true },
  { num: 10, title: 'Memory 系统', time: '200分钟', highlight: true },
  { num: 11, title: 'SubAgent', time: '120分钟' },
  { num: 12, title: 'Cron 自动化', time: '120分钟' },
  { num: 13, title: 'MCP 协议', time: '160分钟' },
  { num: 14, title: 'Datasource', time: '100分钟' },
  { num: 15, title: 'CLI 与部署', time: '140分钟' },
  { num: 16, title: '实战场景', time: '150分钟' },
  { num: 17, title: '进阶', time: '120分钟' },
  { num: 18, title: '课程总结', time: '15分钟' },
];

export default function Outline() {
  return (
    <Layout title="课程大纲">
      <div className={styles.container}>
        <h1>课程大纲</h1>
        <p className={styles.desc}>18 章 | 预估 36-42 小时</p>

        <div className={styles.list}>
          {chapters.map((chapter) => (
            <div key={chapter.num} className={styles.item}>
              <span className={styles.num}>第{chapter.num}章</span>
              <span className={`${styles.title} ${chapter.highlight ? styles.highlight : ''}`}>
                {chapter.title}
              </span>
              <span className={styles.time}>{chapter.time}</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="/intro" className={styles.button}>开始学习</a>
        </div>
      </div>
    </Layout>
  );
}
