import { Target, TrendingUp, ArrowRight, Play, CheckCircle, Globe, Layers, Package, Landmark, Building2, Handshake, ExternalLink, Zap, FileText, Map, Presentation, LineChart, Users2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// 2026战略规划：创新+ 核心战略
// 基于2025年AI产品实践，规划4个战略方向
const plans = [
  {
    icon: Package,
    title: "AI产品矩阵扩展",
    subtitle: "从单点工具到产品化体系",
    description: "基于SlideAI、智绘链图等已验证产品，构建标准化AI工具产品线，形成可复制、可销售的产品矩阵。",
    badges: ["产品化", "可复制"],
    image: "/plan_1_product.png",
    content: {
      foundation: {
        title: "2025已验证",
        items: [
          { name: "SlideAI 智能PPT", desc: "一键生成专业演示文稿", link: "ppt.gwy.life", status: "已上线" },
          { name: "智绘链图", desc: "AI驱动产业链可视化分析", link: "diki.gwy.life", status: "已上线" },
          { name: "AI思维导图", desc: "智能结构化思维工具", status: "内测中" },
          { name: "金融投研助手", desc: "面向机构的智能分析", status: "开发中" },
        ]
      },
      strategy: "将内部验证成熟的AI工具进行产品化改造，建立统一的产品架构和用户体系，形成\"创新+AI工具箱\"品牌。",
      actions: [
        { title: "产品标准化", desc: "统一产品架构、用户体系、付费模式" },
        { title: "功能深化", desc: "SlideAI增加模板市场，智绘链图增加数据订阅" },
        { title: "新品研发", desc: "AI尽调报告、AI招商方案等垂直工具" },
      ],
      metrics: [
        { label: "产品矩阵", value: "6+", unit: "款" },
        { label: "注册用户", value: "1000+", unit: "人" },
        { label: "产品收入", value: "50+", unit: "万" },
      ]
    },
    priority: "核心引擎",
    color: "text-primary",
    priorityBg: "bg-primary/10 text-primary",
  },
  {
    icon: Landmark,
    title: "政务AI解决方案",
    subtitle: "服务政府数字化转型",
    description: "依托发改委体系资源优势，面向政府部门提供产业分析、招商引资、政策研究等场景的AI应用定制服务。",
    badges: ["政务场景", "资源优势"],
    image: "/plan_2_gov.png",
    content: {
      foundation: {
        title: "天然优势",
        items: [
          { name: "体制背景", desc: "发改委下属事业单位，天然政务入口" },
          { name: "智库积累", desc: "多年产业研究方法论与数据沉淀" },
          { name: "产品验证", desc: "智绘链图已服务产业招商场景" },
        ]
      },
      scenarios: [
        { icon: Map, name: "产业招商", desc: "AI精准识别目标企业，智能生成招商方案" },
        { icon: FileText, name: "政策研究", desc: "政策文本智能分析，自动生成研究报告" },
        { icon: LineChart, name: "产业监测", desc: "区域产业实时监测，预警分析与决策支持" },
        { icon: Presentation, name: "汇报材料", desc: "SlideAI赋能政务汇报，提升材料质量效率" },
      ],
      approach: "不做大而全的平台，聚焦2-3个高价值场景打透，形成标杆案例后再复制推广。",
      targets: [
        { label: "标杆客户", value: "3+", desc: "区级以上政府部门" },
        { label: "场景落地", value: "2+", desc: "形成可复制解决方案" },
        { label: "合同金额", value: "200+", unit: "万" },
      ]
    },
    priority: "战略支柱",
    color: "text-gold-dark",
    priorityBg: "bg-gold/10 text-gold-dark",
  },
  {
    icon: Building2,
    title: "企业AI转型咨询",
    subtitle: "对标国际顶尖咨询实践",
    description: "学习麦肯锡、BCG等国际咨询机构的AI业务模式，帮助企业识别AI落地机会、制定转型规划并交付落地。",
    badges: ["高端咨询", "国际对标"],
    image: "/plan_3_enterprise.png",
    content: {
      benchmark: {
        title: "对标学习",
        items: [
          { firm: "McKinsey", focus: "QuantumBlack AI咨询", insight: "AI战略+落地一体化" },
          { firm: "BCG", focus: "BCG X数字化", insight: "行业Know-how+技术交付" },
          { firm: "Accenture", focus: "AI规模化落地", insight: "从POC到生产级部署" },
        ]
      },
      ourEdge: "我们的差异化：既有智库的行业洞察，又有AI产品的实操经验。不是纸上谈兵，而是能真正交付可用的AI应用。",
      serviceModel: [
        { phase: "诊断", title: "AI机会识别", desc: "深入业务流程，识别AI可优化环节", duration: "2-4周" },
        { phase: "规划", title: "转型路线图", desc: "制定分阶段AI落地计划与投资预算", duration: "4-6周" },
        { phase: "交付", title: "场景落地", desc: "选取1-2个场景快速验证，交付可用产品", duration: "8-12周" },
        { phase: "陪跑", title: "持续优化", desc: "效果评估、迭代优化、能力转移", duration: "持续" },
      ],
      targets: [
        { label: "服务企业", value: "5+", desc: "中大型企业客户" },
        { label: "咨询收入", value: "150+", unit: "万" },
        { label: "落地场景", value: "10+", desc: "AI应用场景" },
      ]
    },
    priority: "增长引擎",
    color: "text-accent",
    priorityBg: "bg-accent/10 text-accent",
  },
  {
    icon: Handshake,
    title: "生态合作与能力开放",
    subtitle: "轻资产模式规模化",
    description: "与AI技术厂商、产业园区、行业协会建立合作生态，以能力输出和联合运营模式实现业务规模化。",
    badges: ["生态共建", "轻资产"],
    image: "/plan_4_ecosystem.png",
    content: {
      partners: {
        title: "合作方向",
        categories: [
          { type: "技术厂商", examples: "大模型厂商、云服务商", mode: "技术合作、联合解决方案" },
          { type: "产业园区", examples: "高新区、产业园、孵化器", mode: "招商工具输出、联合运营" },
          { type: "行业协会", examples: "产业联盟、商会", mode: "行业报告、会员服务" },
          { type: "金融机构", examples: "券商、投资机构", mode: "投研工具、数据服务" },
        ]
      },
      models: [
        { name: "工具授权", desc: "将SlideAI、智绘链图等授权给合作伙伴使用", revenue: "订阅费/授权费" },
        { name: "联合运营", desc: "与园区共建招商服务平台，分成模式", revenue: "运营分成" },
        { name: "白标输出", desc: "AI能力白标输出，贴牌合作", revenue: "定制开发+分成" },
      ],
      vision: "从\"什么都自己干\"转向\"核心能力自建+生态合作放大\"，用轻资产模式实现业务规模化。",
      targets: [
        { label: "合作伙伴", value: "10+", desc: "建立稳定合作关系" },
        { label: "生态收入", value: "100+", unit: "万" },
        { label: "覆盖园区", value: "5+", desc: "产业园区合作" },
      ]
    },
    priority: "未来布局",
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
                    className="group h-full p-6 rounded-[2.5rem] bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden text-left w-full hover:-translate-y-2 flex flex-col"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-8 right-8 z-20">
                      <div className="w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm text-muted-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-border/50">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Check if image exists, use fallback if not - simpler check in JSX since we added property to all */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl h-56 w-full shadow-lg shrink-0 group-hover:shadow-xl transition-all duration-500 bg-secondary/30">
                      {plan.image ? (
                        <img
                          src={plan.image}
                          alt={plan.title}
                          onError={(e) => {
                            // Fallback to stylized placeholder on error
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : null}

                      {/* Fallback container (hidden if image loads) */}
                      <div className={`absolute inset-0 flex items-center justify-center ${plan.image ? 'hidden' : ''}`}>
                        <plan.icon className="w-16 h-16 opacity-10 text-foreground" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />

                      <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${plan.priorityBg} backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg`}>
                        <plan.icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <div className="mb-3">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-0 tracking-wide uppercase ${plan.priorityBg} bg-opacity-20`}>
                          {plan.priority}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground mb-4">{plan.subtitle}</p>

                      <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 line-clamp-2">
                        {plan.description}
                      </p>

                      <div className="flex gap-2 mt-auto">
                        {plan.badges.map((badge, i) => (
                          <span key={i} className="px-3 py-1 bg-secondary rounded-lg text-xs font-medium text-secondary-foreground border border-border/50">
                            {badge}
                          </span>
                        ))}
                      </div>
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

                  {/* 模态框1: AI产品矩阵扩展 */}
                  {index === 0 && (
                    <div className="flex-1 grid grid-cols-12 overflow-hidden bg-background/50">
                      {/* 左侧：2025已验证产品 */}
                      <div className="col-span-12 lg:col-span-5 border-r border-border/40 p-8 flex flex-col gap-6 bg-secondary/5">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <CheckCircle className="w-4 h-4 text-green-500" /> {plan.content.foundation.title}
                          </h4>
                          <div className="space-y-3">
                            {plan.content.foundation.items.map((item: any, i: number) => (
                              <div key={i} className="p-4 rounded-xl bg-card border border-border/60 hover:border-primary/30 transition-all group">
                                <div className="flex items-start justify-between mb-2">
                                  <h5 className="font-bold text-sm">{item.name}</h5>
                                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.status === '已上线' ? 'bg-green-500/10 text-green-600' : item.status === '内测中' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-blue-500/10 text-blue-600'}`}>
                                    {item.status}
                                  </span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                                {item.link && (
                                  <a href={`https://${item.link}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                                    {item.link} <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 右侧：2026规划 */}
                      <div className="col-span-12 lg:col-span-7 p-8 flex flex-col gap-6 bg-gradient-to-br from-transparent to-primary/5">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                            <Zap className="w-4 h-4" /> 2026 核心策略
                          </h4>
                          <p className="text-sm text-foreground/90 leading-relaxed p-4 rounded-xl bg-primary/5 border border-primary/10">
                            {plan.content.strategy}
                          </p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <TrendingUp className="w-4 h-4 text-gold" /> 关键行动
                          </h4>
                          <div className="grid grid-cols-3 gap-3">
                            {plan.content.actions.map((action: any, i: number) => (
                              <div key={i} className="p-4 rounded-xl bg-card border border-border/50 hover:shadow-md hover:border-gold/30 transition-all text-center">
                                <div className="w-8 h-8 mx-auto mb-3 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">{i + 1}</div>
                                <h5 className="font-bold text-sm mb-1">{action.title}</h5>
                                <p className="text-xs text-muted-foreground">{action.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 目标指标 */}
                        <div className="mt-auto p-6 rounded-2xl bg-gradient-to-r from-card to-secondary/30 border border-primary/10">
                          <h4 className="text-xs font-bold text-muted-foreground uppercase mb-4">2026 目标</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {plan.content.metrics.map((metric: any, i: number) => (
                              <div key={i} className="text-center">
                                <div className="text-3xl font-black text-primary">{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 模态框2: 政务AI解决方案 */}
                  {index === 1 && (
                    <div className="flex-1 grid grid-cols-12 bg-background/50 overflow-hidden">
                      {/* 左侧：优势与策略 */}
                      <div className="col-span-12 lg:col-span-4 border-r border-border/40 p-8 flex flex-col gap-6 bg-secondary/5">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <Landmark className="w-4 h-4 text-gold" /> {plan.content.foundation.title}
                          </h4>
                          <div className="space-y-3">
                            {plan.content.foundation.items.map((item: any, i: number) => (
                              <div key={i} className="p-3 rounded-xl bg-card border border-border/50">
                                <h5 className="font-bold text-sm text-gold-dark mb-1">{item.name}</h5>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 p-5 rounded-2xl bg-gold/5 border border-gold/20">
                          <h4 className="text-xs font-bold text-gold-dark uppercase tracking-wider mb-3">策略聚焦</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{plan.content.approach}</p>
                        </div>
                      </div>

                      {/* 右侧：场景与目标 */}
                      <div className="col-span-12 lg:col-span-8 p-8 flex flex-col gap-6">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <Target className="w-4 h-4 text-primary" /> 核心应用场景
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {plan.content.scenarios.map((scenario: any, i: number) => (
                              <div key={i} className="p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <scenario.icon className="w-5 h-5 text-primary" />
                                  </div>
                                  <h5 className="font-bold">{scenario.name}</h5>
                                </div>
                                <p className="text-sm text-muted-foreground">{scenario.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 目标指标 */}
                        <div className="mt-auto p-6 rounded-2xl bg-gradient-to-r from-gold/5 to-gold/10 border border-gold/20">
                          <h4 className="text-xs font-bold text-gold-dark uppercase mb-4">2026 目标</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {plan.content.targets.map((target: any, i: number) => (
                              <div key={i} className="text-center">
                                <div className="text-3xl font-black text-gold-dark">{target.value}</div>
                                <div className="text-xs text-muted-foreground">{target.label}</div>
                                {target.desc && <div className="text-[10px] text-muted-foreground/70 mt-1">{target.desc}</div>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 模态框3: 企业AI转型咨询 */}
                  {index === 2 && (
                    <div className="flex-1 grid grid-cols-12 bg-background/50 overflow-hidden relative">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

                      {/* 左侧：对标与差异化 */}
                      <div className="col-span-12 lg:col-span-4 border-r border-border/40 p-8 flex flex-col gap-6 relative z-10 bg-secondary/5">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <Globe className="w-4 h-4 text-accent" /> {plan.content.benchmark.title}
                          </h4>
                          <div className="space-y-3">
                            {plan.content.benchmark.items.map((item: any, i: number) => (
                              <div key={i} className="p-3 rounded-xl bg-card border border-border/50">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-bold text-sm text-accent">{item.firm}</span>
                                  <span className="text-[10px] text-muted-foreground">· {item.focus}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{item.insight}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1 p-5 rounded-2xl bg-accent/5 border border-accent/20">
                          <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">我们的差异化</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{plan.content.ourEdge}</p>
                        </div>
                      </div>

                      {/* 右侧：服务模式 */}
                      <div className="col-span-12 lg:col-span-8 p-8 flex flex-col gap-6 relative z-10">
                        <div className="flex-1">
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
                            <Play className="w-4 h-4 text-accent" /> 服务交付模式
                          </h4>
                          <div className="relative">
                            <div className="absolute left-[60px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-accent/50" />
                            <div className="space-y-4">
                              {plan.content.serviceModel.map((step: any, i: number) => (
                                <div key={i} className="flex gap-6 relative group">
                                  <div className="w-[120px] shrink-0 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-sm font-bold text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                      {step.phase}
                                    </div>
                                    <div className="w-3 h-3 rounded-full bg-background border-2 border-accent relative z-10" />
                                  </div>
                                  <div className="flex-1 p-4 rounded-xl bg-card border border-border/50 group-hover:border-accent/30 group-hover:shadow-md transition-all">
                                    <div className="flex items-center justify-between mb-1">
                                      <h5 className="font-bold text-sm">{step.title}</h5>
                                      <span className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded">{step.duration}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* 目标指标 */}
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20">
                          <h4 className="text-xs font-bold text-accent uppercase mb-4">2026 目标</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {plan.content.targets.map((target: any, i: number) => (
                              <div key={i} className="text-center">
                                <div className="text-3xl font-black text-accent">{target.value}</div>
                                <div className="text-xs text-muted-foreground">{target.label}</div>
                                {target.desc && <div className="text-[10px] text-muted-foreground/70 mt-1">{target.desc}</div>}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 模态框4: 生态合作与能力开放 */}
                  {index === 3 && (
                    <div className="flex-1 grid grid-cols-12 bg-background/50 overflow-hidden relative">
                      <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                      {/* 左侧：合作方向 */}
                      <div className="col-span-12 lg:col-span-5 p-8 flex flex-col gap-6 border-r border-border/40 bg-secondary/5 relative z-10">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <Users2 className="w-4 h-4 text-primary" /> {plan.content.partners.title}
                          </h4>
                          <div className="space-y-3">
                            {plan.content.partners.categories.map((cat: any, i: number) => (
                              <div key={i} className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-bold text-sm text-primary">{cat.type}</h5>
                                  <span className="text-[10px] text-muted-foreground">{cat.examples}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{cat.mode}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                          <p className="text-sm text-foreground/80 leading-relaxed italic">"{plan.content.vision}"</p>
                        </div>
                      </div>

                      {/* 右侧：商业模式与目标 */}
                      <div className="col-span-12 lg:col-span-7 p-8 flex flex-col gap-6 relative z-10">
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                            <Layers className="w-4 h-4 text-gold" /> 合作模式
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                            {plan.content.models.map((model: any, i: number) => (
                              <div key={i} className="p-4 rounded-xl bg-card border border-border/50 hover:shadow-md hover:border-gold/30 transition-all">
                                <h5 className="font-bold text-sm mb-2">{model.name}</h5>
                                <p className="text-xs text-muted-foreground mb-3">{model.desc}</p>
                                <div className="text-[10px] text-gold-dark bg-gold/10 px-2 py-1 rounded inline-block">{model.revenue}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 目标指标 */}
                        <div className="mt-auto p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-gold/5 to-transparent border border-border/60">
                          <h4 className="text-xs font-bold text-muted-foreground uppercase mb-4">2026 目标</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {plan.content.targets.map((target: any, i: number) => (
                              <div key={i} className="text-center">
                                <div className="text-3xl font-black text-primary">{target.value}</div>
                                <div className="text-xs text-muted-foreground">{target.label}</div>
                                {target.desc && <div className="text-[10px] text-muted-foreground/70 mt-1">{target.desc}</div>}
                              </div>
                            ))}
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
