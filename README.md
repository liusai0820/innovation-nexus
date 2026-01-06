# 🚀 深国创 · 创新发展部 | 2025年度工作总结

> **创新驱动 · 智领未来**
>
> 聚焦数据驱动决策与AI技术赋能，打造高质量发展新引擎。

---

## 📖 项目简介

本项目是**深国创-创新发展部**的2025年度工作总结数字化展示平台。区别于传统的PPT汇报，我们采用现代前端技术打造了一个**沉浸式、交互式、响应式**的在线汇报系统。

通过流畅的视觉动效与精细的模块化设计，全方位展示了部门在**智库咨询、信息平台交付、AI创新应用**三大核心领域的突破性成果，并深度演绎了2026年的战略规划。

## ✨ 核心亮点

### 1. 沉浸式视觉美学 (Immersive Aesthetics)
- **动态光影序章**: 结合深圳城市天际线与动态粒子光效，营造科技与未来感并存的开篇氛围。
- **高级定制主题**: 采用「流光金/极夜黑」高级配色体系，细节处通过“磨砂玻璃”与“流光边框”彰显品质感。
- **电影级交互体验**: 全局集成 ScrollReveal 滚动揭示动画，让每一屏信息的呈现都如电影运镜般丝滑自然。

### 2. 核心业务全景 (Core Business Landscape)
我们重新定义了三大核心业务板块，并通过视觉化语言精准传达：
- **🧠 智库咨询 (Think Tank)**: 数字化转型的顶层设计与策略大脑。
- **💻 平台交付 (Platform Delivery)**: 高标准、高可用的企业级数字化底座建设。
- **🤖 AI创新应用 (AI Innovation)**: 探索 RAG、Agent 等大模型技术落地，引领业务智能化变革。

### 3. 交互式战略推演 (Interactive Strategy)
摒弃枯燥的文字列表，我们设计了**四套差异化模态框 (Modal)** 来展示2026战略：
- **AI+ 知识管理**: 神经网络风格的知识重构图谱。
- **AI+ 咨询升级**: 仪表盘风格的数字化咨询监控。
- **平台交付提速**: 管道流水线风格的 DevOps 自动化展示。
- **商业模式探索**: 生态系统风格的 SaaS/MaaS 增长模型。

## 🛠 技术栈

本项目基于现代前端工程化标准构建，追求极致的性能与开发体验：

- **核心框架**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **UI 引擎**: [Tailwind CSS](https://tailwindcss.com/) (深度定制 Design Token)
- **图标系统**: [Lucide React](https://lucide.dev/)
- **交互组件**: Radix UI (Dialog) + Custom Hooks
- **运行环境**: [Bun](https://bun.sh/) (推荐) / Node.js

## 🚀 快速开始

### 1.获取代码
```bash
git clone https://github.com/liusai0820/innovation-nexus.git
cd innovation-nexus
```

### 2. 安装依赖
推荐使用 Bun 获得极速体验，也完全支持 npm/pnpm。

```bash
bun install
# 或者
npm install
```

### 3. 启动本地开发
```bash
bun run dev
# 或者
npm run dev
```

启动后访问 `http://localhost:5173` 即可查看开发环境。

## 📂 目录结构

```
src/
├── assets/          # 静态资源 (图片、图标)
├── components/      # 组件库
│   ├── sections/    # 核心章节组件 (Hero, Business, Plan...)
│   └── ui/          # 通用UI原子组件 (Dialog, Card...)
├── index.css        # 全局样式 (Tailwind Directives & Custom Layers)
└── main.tsx         # 应用入口
```

## 🤝 团队协作与部署

### 协作流程 (GitHub Flow)
为了保证代码质量与多人协作的顺畅，请遵循以下流程：
1. **New Branch**: 从 `main` 分支切出新功能分支 (`feature/xxx`)。
2. **Commit**: 本地开发并完成提交。
3. **Pull Request**: 推送到远程仓库并发起 PR。
4. **Code Review**: 团队成员进行代码审查。
5. **Merge**: 通过审查后合并入主分支。

### 部署 (Vercel)
本项目针对 [Vercel](https://vercel.com/) 进行了优化：
- 支持 **Preview Deployment**: 每个 PR 都会自动生成独立的预览链接，方便非技术人员验收。
- 支持 **Main Branch Auto-Deploy**: 代码合并后自动更新生产环境。

---

<p align="center">
  <strong>深国创 · 创新发展部</strong><br/>
  <i>以技术致敬创新，以实干定义未来</i>
</p>
