import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>MiniClaw</h1>
        <p className={styles.heroTagline}>AI Agent 实战课程</p>
        <p className={styles.heroSubtitle}>从零构建生产级 AI Agent 框架</p>
        <div className={styles.buttons}>
          <Link className={styles.button} to="/intro">
            开始学习
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="首页">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>不依赖框架</h3>
                <p>从零手写，深刻理解 AI Agent 设计原理</p>
              </div>
              <div className="col col--4">
                <h3>工业级架构</h3>
                <p>基于 OpenClaw 实践，五层分层设计</p>
              </div>
              <div className="col col--4">
                <h3>真正能干活</h3>
                <p>不只是问答，能读写文件、执行命令</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
