import { Target, TrendingUp, ArrowRight, Play, CheckCircle, Globe, Layers, Package, Landmark, Building2, Handshake, ExternalLink, Zap, FileText, Map, Presentation, LineChart, Users2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// 2026战略规划：创新+ 核心战略
// 四个核心战略方向
const strategicPlans = [
  {
    id: 0,
    title: "组织OPC化",
    subtitle: "【全员全栈】打造AI杠杆型学习组织与超级个体",
    description: "打破传统科层制，通过AI赋能让基层具备中层视野，打造一个个'一人即队伍'的超级个体。同步推进研发本地化，将核心技术架构掌控权收回，构建敏捷、自主、学习型的AI原生组织。",
    badges: ["全员全栈", "超级个体", "架构自主"],
    image: "/plan_1_product.png",
    priority: "核心基础",
    color: "text-primary",
    priorityBg: "bg-primary/10 text-primary",
    content: {
      foundation: {
        title: "组织变革路径",
        items: [
          { name: "全员全栈", desc: "打破职能边界，AI赋能全员具备全栈开发能力", status: "进行中" },
          { name: "能力升维", desc: "没有AI，能力降维；有了AI，能力升维", status: "核心理念" },
          { name: "研发本地化", desc: "收回外包与API依赖，实现核心代码与架构自主可控", status: "关键举措" },
          { name: "学习型组织", desc: "建立AI最佳实践共享机制，全员持续迭代", status: "长期目标" },
        ]
      },
      achievements: "通过AI杠杆效应，极大释放个体潜能，实现组织结构的扁平化与网状化。化解Bing API危机，重构Deep Research底层，证明了本地化研发团队的战斗力。",
      targets: [
        { label: "全员AI率", value: "100%", desc: "全员掌握AI编程" },
        { label: "人效倍增", value: "5x", desc: "单位产出飞跃" },
        { label: "自主可控", value: "100%", desc: "核心架构本地化" },
      ]
    }
  },
  {
    id: 1,
    title: "业务数字化",
    subtitle: "【对内降本增效】吃自己的狗粮，做能卖的产品",
    description: "坚持'吃自己的狗粮'（Dogfooding），从解决内部咨询、研究的高频痛点出发，将工作流固化为AI工具。在实现内部极致降本增效的同时，将成熟工具封装为标准化SaaS产品，探索外部商业价值。",
    badges: ["内用外售", "降本增效", "工具SaaS化"],
    image: "/plan_3_enterprise.png",
    priority: "核心引擎",
    color: "text-primary",
    priorityBg: "bg-primary/10 text-primary",
    content: {
      foundation: {
        title: "数字化工具矩阵",
        items: [
          { name: "SlideAI", desc: "解决汇报材料排版痛点，数小时工作压缩至分钟级", link: "ppt.gwy.life", status: "已应用" },
          { name: "智绘链图", desc: "解决产业梳理繁琐痛点，一键生成全景图谱", link: "diki.gwy.life", status: "已应用" },
          { name: "投研助手", desc: "解决尽调信息碎片痛点，自动化构建验证逻辑", status: "开发中" },
          { name: "思维导图", desc: "解决创意结构化痛点，辅助快速输出方案", status: "内测中" },
        ]
      },
      strategy: "内部痛点 → 敏捷开发 → 内部验证 → 降本增效 → 产品封装 → 外部商业化。只做自己真正需要并验证过的产品。",
      actions: [
        { title: "内部打磨", desc: "在真实高压业务场景中反复迭代" },
        { title: "标准封装", desc: "建立统一的账户、计费与API体系" },
        { title: "价值外溢", desc: "将在内部证明成功的工具推向市场" },
      ],
      metrics: [
        { label: "工具矩阵", value: "6+", unit: "款" },
        { label: "效率提升", value: "80%", desc: "核心环节工时" },
        { label: "产品营收", value: "50+", unit: "万" },
      ]
    }
  },
  {
    id: 2,
    title: "产品AI化",
    subtitle: "【对外产品创新】业务Know-How + AI原生",
    description: "拒绝简单的'套壳'应用，深度融合智库多年的行业Know-How与AI原生能力。重点打造'AI产业信息服务'与'AI决策辅助'两大高壁垒产品线，提供传统服务无法企及的深度洞察与决策支持。",
    badges: ["AI原生", "行业壁垒", "决策智能"],
    image: "/plan_2_gov.png",
    priority: "战略支柱",
    color: "text-gold-dark",
    priorityBg: "bg-gold/10 text-gold-dark",
    content: {
      foundation: {
        title: "两大核心方向",
        items: [
          { name: "AI产业情报(TI)", desc: "深度报告与情报监测，重塑信息获取效率与质量" },
          { name: "AI决策辅助(DILI)", desc: "面向投资与招商的智能尽调引擎，辅助科学决策" },
        ]
      },
      vision: "以'AI原生'重构产品逻辑，以'Know-How'构建竞争壁垒。做懂业务的AI产品，做有深度的智能服务。",
      targets: [
        { label: "核心产品", value: "2+", desc: "TI与DILI" },
        { label: "行业壁垒", value: "High", desc: "Know-How融合" },
        { label: "商业价值", value: "200+", unit: "万" },
      ]
    }
  },
  {
    id: 3,
    title: "运营生态化",
    subtitle: "【借力生态】通过伙伴实现新产品规模化推广",
    description: "卖没有卖过的产品，必然面临渠道与认知的巨大鸿沟。不单打独斗，而是依托联通AI中试基地、国家母基金、神州数码等生态伙伴，构建适应AI新产品的推广渠道与交付生态。",
    badges: ["生态借力", "渠道破局", "资本联动"],
    image: "/plan_4_ecosystem.png",
    priority: "增长引擎",
    color: "text-accent",
    priorityBg: "bg-accent/10 text-accent",
    content: {
      foundation: {
        title: "关键生态布局",
        items: [
          { name: "联通·AI中试基地", desc: "依托运营商网络与算力资源，触达政企边缘" },
          { name: "资本侧联动", desc: "借助国家母基金与深创投，以资本力量撬动业务" },
          { name: "渠道合作伙伴", desc: "神州数码、上奇等，复用成熟B端/G端渠道" },
        ]
      },
      approach: "面对不同画像的客户与全新的交付模式，必须走'生态共建'之路。利用伙伴的渠道优势弥补短板，快速打开市场。",
      targets: [
        { label: "核心伙伴", value: "5+", desc: "深度战略合作" },
        { label: "渠道触达", value: "500+", desc: "精准客户" },
        { label: "生态收入", value: "150+", unit: "万" },
      ]
    }
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
              围绕AI产品研发和运营出发，通过优化底层技术架构、拓展AI工具开发、构建市场产品服务体系，实现传统业务转型升级和创新业务落地商业化。
            </p>
          </div>
        </ScrollReveal>

        {/* 战略卡片 grid - 前4个 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {strategicPlans.map((plan, index) => (
            <ScrollReveal key={plan.title} delay={index * 100}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group h-full p-6 rounded-[2.5rem] bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden text-left w-full hover:-translate-y-2 flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-8 right-8 z-20">
                      <div className="w-10 h-10 rounded-full bg-secondary/80 backdrop-blur-sm text-muted-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-border/50">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="relative mb-6 overflow-hidden rounded-2xl h-56 w-full shadow-lg shrink-0 group-hover:shadow-xl transition-all duration-500 bg-secondary/30">
                      {plan.image && (
                        <img
                          src={plan.image}
                          alt={plan.title}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                      <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-lg ${plan.priorityBg} backdrop-blur-md border border-white/10 shadow-lg text-xs font-bold`}>
                        {plan.priority}
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground mb-4">{plan.subtitle}</p>
                      <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 line-clamp-3">
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

                {/* Dialog内容 */}
                <DialogContent className="max-w-[75rem] w-full bg-card border border-border/50 shadow-2xl p-0 overflow-hidden rounded-3xl flex flex-col h-auto min-h-[600px] max-h-[90vh]">
                  {/* Header */}
                  <div className="relative shrink-0 p-8 pb-6 border-b border-border/40 flex justify-between items-end bg-gradient-to-r from-secondary/30 to-background/80">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 rounded-2xl ${plan.priorityBg} flex items-center justify-center shrink-0 shadow-lg`}>
                        <Target className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${plan.priorityBg} border border-current opacity-70`}>
                            {plan.priority}
                          </span>
                        </div>
                        <DialogTitle className="text-3xl font-bold tracking-tight mb-1">{plan.title}</DialogTitle>
                        <p className="text-base text-muted-foreground/80 font-medium">{plan.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {plan.badges.map((badge, i) => (
                        <span key={i} className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-lg text-xs font-semibold text-foreground/70 border border-border/50 shadow-sm">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 p-8 space-y-6 overflow-y-auto">
                    {/* 基础内容 */}
                    {plan.content.foundation && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                          <CheckCircle className="w-4 h-4 text-green-500" /> {plan.content.foundation.title}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {plan.content.foundation.items.map((item: any, i: number) => (
                            <div key={i} className="p-4 rounded-xl bg-secondary/30 border border-border/60 hover:border-primary/30 transition-all">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="font-bold text-sm">{item.name}</h5>
                                {item.status && (
                                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${item.status === '已上线' || item.status === '已完成' ? 'bg-green-500/10 text-green-600' :
                                    item.status === '内测中' || item.status === '进行中' ? 'bg-yellow-500/10 text-yellow-600' :
                                      'bg-blue-500/10 text-blue-600'
                                    }`}>
                                    {item.status}
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 成果/战略/愿景 */}
                    {(plan.content.achievements || plan.content.strategy || plan.content.vision || plan.content.approach) && (
                      <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {plan.content.achievements || plan.content.strategy || plan.content.vision || plan.content.approach}
                        </p>
                      </div>
                    )}

                    {/* 行动计划 */}
                    {plan.content.actions && (
                      <div>
                        <h4 className="text-sm font-bold mb-3">行动计划</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {plan.content.actions.map((action: any, i: number) => (
                            <div key={i} className="p-4 rounded-xl bg-gradient-card border border-border/30">
                              <h5 className="font-bold text-sm mb-2">{action.title}</h5>
                              <p className="text-xs text-muted-foreground">{action.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 目标指标 */}
                    {(plan.content.metrics || plan.content.targets) && (
                      <div>
                        <h4 className="text-sm font-bold mb-3">目标指标</h4>
                        <div className="grid grid-cols-3 gap-4">
                          {(plan.content.metrics || plan.content.targets).map((metric: any, i: number) => (
                            <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border/30 text-center">
                              <div className="text-2xl font-black text-primary">{metric.value}{metric.unit || ''}</div>
                              <div className="text-sm font-medium">{metric.label}</div>
                              {metric.desc && (
                                <div className="text-xs text-muted-foreground mt-1">{metric.desc}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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
