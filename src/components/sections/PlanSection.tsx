import { Rocket, Target, TrendingUp, Users, Lightbulb, Building, ArrowRight, Sparkles, Brain, Cpu, Network, AlertTriangle, Code, Play, CheckCircle, Smartphone, Globe, BarChart3, PieChart, Layers } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// 2026战略规划：创新+ 核心战略
// 精简为4个深度方向
const plans = [
  {
    icon: Brain,
    title: "AI+ 知识管理重构",
    subtitle: "从传统智库向AI原生智库转型",
    description: "利用大模型技术重构知识管理流程，实现知识的自动沉淀、智能检索与生成式应用，打造公司级'第二大脑'。",
    badges: ["AI Native", "提效50%"],
    content: {
      painPoints: "传统知识库检索困难，大量沉淀文档无法被激活，专家经验难以复用。",
      strategy: "构建基于RAG（检索增强生成）的企业级知识中台。将历年项目文档、研究报告向量化，训练垂类大模型。",
      roadmap: [
        "Q1：完成知识库数据清洗与向量化",
        "Q2：上线'智能问答助手'内部版",
        "Q3：推出'自动研报生成'工具",
        "Q4：对外输出标准化AI知识管理解决方案"
      ],
      outcome: "实现知识检索秒级响应，研报撰写效率提升50%，形成公司独有的数据资产壁垒。"
    },
    priority: "战略转型",
    color: "text-primary",
    priorityBg: "bg-primary/10 text-primary",
  },
  {
    icon: Network,
    title: "AI+ 咨询服务升级",
    subtitle: "数据驱动的高端咨询新范式",
    description: "将AI深度融入咨询全流程，从市场调研、数据分析到方案撰写，提供基于全量数据的精准决策支持。",
    badges: ["高客单价", "差异化竞争"],
    content: {
      painPoints: "传统咨询依赖人工经验，数据支撑不足，难以应对客户对实时性、精准度的高要求。",
      strategy: "打造'人机协同'咨询模式。利用AI Agent自动采集全网行业数据，实时生成产业链图谱，咨询师专注于高价值的洞察与策略制定。",
      roadmap: [
        "建立10+个重点行业的实时数据监控看板",
        "开发'一键生成尽调报告'工具",
        "与头部金融机构建立AI咨询联合实验室"
      ],
      outcome: "咨询交付周期缩短30%，客户满意度提升至99%，咨询业务毛利率提升10个百分点。"
    },
    priority: "业务增长",
    color: "text-gold-dark",
    priorityBg: "bg-gold/10 text-gold-dark",
  },
  {
    icon: Cpu,
    title: "AI+ 平台交付提速",
    subtitle: "智能化开发运维一体化",
    description: "在软件交付业务中全面引入Copilot等各类AI编码与测试工具，实现代码自动生成、Bug自动修复，大幅降低交付成本。",
    badges: ["降本增效", "质量保障"],
    content: {
      painPoints: "定制化开发成本高，重复造轮子现象普遍，后期运维压力大。",
      strategy: "推广AI辅助编程（Copilot），建立内部通用代码组件库。引入AI自动化测试，实现7*24小时智能巡检。",
      roadmap: [
        "全员普及AI编程工具，代码采纳率>40%",
        "构建自动化运维AIOps平台",
        "实现存量项目100%自动化巡检覆盖"
      ],
      outcome: "项目交付成本降低20%，代码Bug率下降40%，实现从'人力密集型'向'技术密集型'转变。"
    },
    priority: "核心底座",
    color: "text-accent",
    priorityBg: "bg-accent/10 text-accent",
  },
  {
    icon: Target,
    title: "创新商业模式探索",
    subtitle: "从卖人天向卖SaaS/MaaS转变",
    description: "探索基于模型即服务（MaaS）的新商业模式，将核心能力封装为API或标准化产品，实现边际成本递减的规模化收入。",
    badges: ["第二曲线", "规模化"],
    content: {
      painPoints: "现有业务多为项目制，收入线性增长，难以爆发。",
      strategy: "将内部验证成熟的'产业链图谱'、'招商大脑'等工具SaaS化。探索按调用量计费、订阅制等灵活的收费模式。",
      roadmap: [
        "Q2发布'产业链招商'SaaS产品公测版",
        "Q3拓展至不少于5个外部园区/政府客户",
        "Q4验证订阅制收入模型跑通"
      ],
      outcome: "SaaS/MaaS类产品收入占比突破15%，打造公司新的增长飞轮。"
    },
    priority: "未来展望",
    color: "text-primary",
    priorityBg: "bg-primary/10 text-primary",
  }
];

const PlanSection = () => {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-particles opacity-60" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              <span className="text-gold-dark text-sm font-bold tracking-wider">2026 STRATEGY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              战略规划：<span className="text-gradient-gold">创新+</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
              不仅仅是技术的叠加，更是业务模式的重构。
              <br />
              以AI为核心驱动力，赋能知识、咨询、交付三大业务场景，探索第二增长曲线。
            </p>
          </div>
        </ScrollReveal>

        {/* 计划卡片 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.title} delay={index * 100}>
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="group h-full p-8 rounded-[2.5rem] bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden text-left w-full hover:-translate-y-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-8 right-8">
                      <div className="w-10 h-10 rounded-full bg-secondary text-muted-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-2xl ${plan.priorityBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <plan.icon className="w-8 h-8" />
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-wide uppercase ${plan.priorityBg} bg-opacity-20`}>
                        {plan.priority}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground mb-4">{plan.subtitle}</p>
                    </div>

                    <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 line-clamp-2">
                      {plan.description}
                    </p>

                    <div className="flex gap-2">
                      {plan.badges.map((badge, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary rounded-lg text-xs font-medium text-secondary-foreground border border-border/50">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-[75rem] w-full bg-card border border-border/50 shadow-2xl p-0 overflow-hidden rounded-3xl flex flex-col h-auto min-h-[600px] max-h-[90vh]">
                  {/* Common Header */}
                  <div className="relative shrink-0 p-8 pb-6 border-b border-border/40 flex justify-between items-end bg-gradient-to-r from-secondary/30 to-background/80">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-2xl ${plan.priorityBg} flex items-center justify-center shrink-0 shadow-lg`}>
                        <plan.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${plan.priorityBg} border border-current opacity-70`}>
                            {plan.priority}
                          </span>
                          <span className="h-px flex-1 bg-border/50 w-20"></span>
                        </div>
                        <DialogTitle className="text-3xl font-bold tracking-tight mb-1">{plan.title}</DialogTitle>
                        <p className="text-base text-muted-foreground/80 font-medium">{plan.subtitle}</p>
                      </div>
                    </div>
                    {/* Top Right Tags */}
                    <div className="flex gap-2">
                      {plan.badges.map((badge, i) => (
                        <span key={i} className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-lg text-xs font-semibold text-foreground/70 border border-border/50 shadow-sm">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Conditional Logic for 4 Unique Layouts */}
                  {index === 0 && (
                    // Design 0: Knowledge (Standard Timeline) - "The Neural Graph"
                    <div className="flex-1 grid grid-cols-12 overflow-hidden bg-background/50">
                      <div className="col-span-12 lg:col-span-4 border-r border-border/40 p-6 flex flex-col gap-4 bg-secondary/5">
                        <div className="flex-1 rounded-2xl bg-card border border-border/60 p-5 shadow-sm relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-1 bg-red-500/10 rounded-bl-xl"><AlertTriangle className="w-4 h-4 text-red-500" /></div>
                          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> 当前痛点</h4>
                          <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10 text-sm text-foreground/80 leading-relaxed h-[calc(100%-2rem)] flex items-center">
                            {plan.content.painPoints}
                          </div>
                        </div>
                        <div className="flex-[1.5] rounded-2xl bg-card border border-primary/20 p-5 shadow-sm relative overflow-hidden">
                          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2"><Cpu className="w-4 h-4" /> 核心策略 (AI Core)</h4>
                          <div className="flex flex-col h-full gap-3">
                            <p className="text-sm text-foreground/90 font-medium leading-relaxed">{plan.content.strategy}</p>
                            <div className="mt-auto pt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono opacity-70">
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-8 h-8 rounded border border-dashed border-foreground/30 flex items-center justify-center bg-card">Data</div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gold/50" />
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-8 h-8 rounded bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">Model</div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gold/50" />
                              <div className="flex flex-col items-center gap-1">
                                <div className="w-8 h-8 rounded border border-foreground/20 flex items-center justify-center bg-gold/5">Value</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-8 p-8 flex flex-col gap-6 bg-gradient-to-br from-transparent to-primary/5">
                        <div className="flex-[2] flex flex-col justify-center min-h-0">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 shrink-0"><TrendingUp className="w-4 h-4 text-gold" /> 推进路线图 (Roadmap 2026)</h4>
                          <div className="relative w-full py-4 flex-1 flex flex-col justify-center">
                            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-border/50 via-primary/30 to-border/50 -translate-y-1/2 rounded-full z-0" />
                            <div className="grid grid-cols-4 gap-4 relative z-10 w-full h-full items-center">
                              {plan.content.roadmap.map((step, idx) => {
                                const isTop = idx % 2 === 0;
                                return (
                                  <div key={idx} className="flex flex-col items-center h-full justify-center relative group">
                                    <div className={`transition-all duration-500 transform ${isTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none absolute'}`}>
                                      {isTop && (<div className="mb-4 p-4 w-full rounded-xl border border-border/50 bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-gold/30 transition-all text-center"><div className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1">Step {idx + 1}</div><p className="text-xs text-foreground/90 font-medium leading-snug line-clamp-2">{step}</p></div>)}
                                    </div>
                                    <div className={`w-3 h-3 rounded-full bg-background border-2 group-hover:scale-125 transition-transform duration-300 relative z-20 shrink-0 ${isTop ? 'border-primary' : 'border-gold'} shadow-[0_0_0_3px_rgba(255,255,255,0.1)]`} />
                                    <div className={`transition-all duration-500 transform ${!isTop ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none absolute'}`}>
                                      {!isTop && (<div className="mt-4 p-4 w-full rounded-xl border border-border/50 bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-gold/30 transition-all text-center"><div className="text-[10px] font-bold text-gold uppercase tracking-wider mb-1">Step {idx + 1}</div><p className="text-xs text-foreground/90 font-medium leading-snug line-clamp-2">{step}</p></div>)}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="h-32 shrink-0 rounded-2xl bg-gradient-to-r from-card to-secondary/30 border border-primary/10 p-1 shadow-sm overflow-hidden">
                          <div className="w-full h-full rounded-xl bg-background/40 backdrop-blur-md flex items-center px-8 justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-gold/5 to-transparent skew-x-12" />
                            <div className="flex items-center gap-4 relative z-10 max-w-[60%]"><div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0"><Sparkles className="w-6 h-6 text-gold" /></div><div><h4 className="text-xs font-bold text-muted-foreground uppercase mb-1">预期核心价值</h4><p className="text-lg font-medium text-foreground leading-snug">{plan.content.outcome}</p></div></div>
                            <div className="flex flex-col items-end relative z-10"><div className="text-4xl font-bold text-primary font-mono tracking-tighter tabular-nums">ROI+</div><div className="text-xs text-primary/60 font-medium">Business Impact</div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="flex-1 grid grid-cols-12 bg-background/50 overflow-hidden">
                      <div className="col-span-3 border-r border-border/40 p-6 flex flex-col gap-4 bg-secondary/5">
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">核心痛点</h4>
                        <div className="p-4 rounded-xl bg-card border border-border/50 text-sm text-foreground/80 leading-relaxed shadow-sm">
                          {plan.content.painPoints}
                        </div>
                        <div className="mt-auto p-4 rounded-xl bg-primary/5 border border-primary/10">
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">预期收益</h4>
                          <p className="text-sm font-medium leading-relaxed">{plan.content.outcome}</p>
                        </div>
                      </div>
                      <div className="col-span-9 p-8 flex gap-8">
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="flex items-center justify-between pb-4 border-b border-border/40">
                            <h4 className="text-lg font-bold flex items-center gap-2"><Target className="w-5 h-5 text-gold" /> Solution Strategy</h4>
                            <span className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full">AI-Driven</span>
                          </div>
                          <div className="flex-1 rounded-2xl bg-card border border-border/60 p-6 shadow-sm relative overflow-hidden flex flex-col justify-center items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-secondary mb-6 flex items-center justify-center relative">
                              <Brain className="w-12 h-12 text-primary absolute z-10" />
                              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping-slow" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Intelligent Consultant Agent</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-md">{plan.content.strategy}</p>
                          </div>
                        </div>
                        <div className="w-64 shrink-0 flex flex-col">
                          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Execution Steps</h4>
                          <div className="space-y-3">
                            {plan.content.roadmap.map((step, i) => (
                              <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50 group">
                                <div className="w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center shrink-0 text-[10px] font-bold text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">{i + 1}</div>
                                <p className="text-xs font-medium leading-snug pt-0.5">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="flex-1 grid grid-cols-12 bg-background/50 overflow-hidden relative">
                      {/* Background Grid Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                      <div className="col-span-12 lg:col-span-5 border-r border-border/40 p-8 flex flex-col gap-6 relative z-10 bg-secondary/5">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <AlertTriangle className="w-4 h-4 text-red-500" /> 当前瓶颈
                          </h4>
                          <div className="p-4 rounded-xl bg-card border border-border/60 text-sm text-foreground/80 leading-relaxed shadow-sm">
                            {plan.content.painPoints}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                            <Code className="w-4 h-4" /> 自动化策略
                          </h4>
                          <div className="flex-1 rounded-xl bg-primary/5 border border-primary/10 p-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                            <p className="text-sm font-medium leading-relaxed relative z-10">{plan.content.strategy}</p>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                              <div className="p-2 rounded bg-background/60 border border-primary/20 text-center text-xs font-bold text-primary">Copilot</div>
                              <div className="p-2 rounded bg-background/60 border border-primary/20 text-center text-xs font-bold text-primary">Auto-Test</div>
                              <div className="p-2 rounded bg-background/60 border border-primary/20 text-center text-xs font-bold text-primary">CI/CD</div>
                              <div className="p-2 rounded bg-background/60 border border-primary/20 text-center text-xs font-bold text-primary">AIOps</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 lg:col-span-7 p-8 flex flex-col gap-6 relative z-10">
                        <div className="flex-1 flex flex-col justify-center">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
                            <Play className="w-4 h-4 text-gold" /> 交付流水线 (Pipeline)
                          </h4>
                          <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-border via-gold/30 to-border" />

                            <div className="space-y-6">
                              {plan.content.roadmap.map((step, i) => (
                                <div key={i} className="flex gap-6 relative group">
                                  <div className="w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center shrink-0 relative z-10 group-hover:border-gold/50 group-hover:shadow-md transition-all">
                                    <div className="text-xs font-bold text-muted-foreground group-hover:text-gold transition-colors">0{i + 1}</div>
                                  </div>
                                  <div className="flex-1 pt-1">
                                    <div className="text-xs font-bold text-primary/70 mb-1 uppercase tracking-wider">Phase {i + 1}</div>
                                    <div className="text-sm font-medium text-foreground">{step}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="h-24 rounded-2xl bg-gradient-to-r from-card to-accent/5 border border-accent/20 p-6 flex items-center justify-between shadow-sm">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                              <BarChart3 className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-muted-foreground uppercase mb-0.5">Efficiency Gain</div>
                              <div className="text-sm font-bold text-foreground">{plan.content.outcome}</div>
                            </div>
                          </div>
                          <div className="text-2xl font-black text-accent tracking-tighter">-40% <span className="text-xs font-medium text-muted-foreground">Bug Rate</span></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="flex-1 grid grid-cols-12 bg-background/50 overflow-hidden relative">
                      {/* Subtle Background Graphic */}
                      <div className="absolute -right-32 -top-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                      <div className="col-span-12 lg:col-span-4 p-8 flex flex-col gap-6 border-r border-border/40 bg-secondary/5">
                        <div className="p-5 rounded-2xl bg-white/60 border border-white/80 shadow-sm backdrop-blur-sm">
                          <div className="flex items-center gap-3 mb-3">
                            <Layers className="w-4 h-4 text-primary" />
                            <h3 className="text-sm font-bold text-foreground">当前局限</h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{plan.content.painPoints}</p>
                        </div>

                        <div className="flex-1 p-5 rounded-2xl bg-gradient-to-br from-white/60 to-gold/5 border border-white/80 shadow-sm backdrop-blur-sm flex flex-col">
                          <div className="flex items-center gap-3 mb-3">
                            <PieChart className="w-4 h-4 text-gold" />
                            <h3 className="text-sm font-bold text-foreground">SaaS/MaaS 转型</h3>
                          </div>
                          <p className="text-sm text-foreground/80 leading-relaxed mb-4">{plan.content.strategy}</p>
                          <div className="mt-auto flex gap-2">
                            <span className="px-2 py-1 bg-gold/10 border border-gold/20 rounded text-[10px] font-bold text-gold-dark">API Economy</span>
                            <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-bold text-primary">Subscription</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 lg:col-span-8 p-8 flex flex-col justify-between relative z-10">
                        <div className="mb-8">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
                            <Globe className="w-4 h-4 text-primary" /> 商业化增长路径
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            {plan.content.roadmap.map((step, i) => (
                              <div key={i} className="flex flex-col relative group">
                                <div className="mb-3 flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">Q{i + 2}</span>
                                  <div className="h-px flex-1 bg-border group-hover:bg-primary/30 transition-colors" />
                                </div>
                                <div className="p-4 rounded-xl bg-card border border-border shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all h-full">
                                  <div className="text-xs font-bold text-foreground/70 mb-2">Milestone {i + 1}</div>
                                  <p className="text-xs text-muted-foreground leading-relaxed">{step}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-gold/5 to-transparent border border-border/60">
                          <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-bold text-muted-foreground uppercase mb-1">Target Revenue Mix</div>
                            <div className="text-base font-bold text-foreground">{plan.content.outcome}</div>
                          </div>
                          <div className="px-4 py-2 rounded-lg bg-gold/10 text-gold-dark text-xs font-bold border border-gold/20">
                            New Growth Engine
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </DialogContent>
              </Dialog>
            </ScrollReveal>
          ))}
        </div>

        {/* 底部Slogan */}
        <ScrollReveal delay={500}>
          <div className="mt-20 text-center">
            <p className="text-2xl font-light tracking-widest text-muted-foreground/60 uppercase">
              Innovate via Intelligence
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlanSection;
