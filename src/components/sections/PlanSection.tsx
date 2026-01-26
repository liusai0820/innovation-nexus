import { Target, TrendingUp, ArrowRight, Play, CheckCircle, Globe, Layers, Package, Landmark, Building2, Handshake, ExternalLink, Zap, FileText, Map, Presentation, LineChart, Users2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// 2026战略规划：创新+ 核心战略
// 四个核心战略方向 + 战略路径对比
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

// 保留原有的详细plans数据（用于原来的Dialog内容）
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

        {/* 战略路径对比 - 第三排 */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">战略路径选择</h3>
            <p className="text-muted-foreground text-sm mt-2">两种发展模式的对比</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* VS标记 */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-12 h-12 rounded-full bg-card border-4 border-gold flex items-center justify-center shadow-lg">
                <span className="text-gold font-bold text-lg">VS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 成本中心模式（灰色/弱化） */}
              <ScrollReveal delay={0}>
                <div className="h-full rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-900/10 border border-gray-500/30 p-8 hover:shadow-lg transition-all duration-500 opacity-70">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-500 mb-2">成本中心模式</h4>
                    <p className="text-xs text-gray-400">传统研发部门定位</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 text-lg leading-none">◦</span>
                      <span className="text-sm text-gray-500">专注于产品和技术研发</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 text-lg leading-none">◦</span>
                      <span className="text-sm text-gray-500">依赖外部业务部门推广销售</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 text-lg leading-none">◦</span>
                      <span className="text-sm text-gray-500">成本消耗型组织定位</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 text-lg leading-none">◦</span>
                      <span className="text-sm text-gray-500">被动响应支撑角色</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-500 text-lg leading-none">◦</span>
                      <span className="text-sm text-gray-500">缺乏市场直接反馈机制</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-500/20">
                    <p className="text-xs text-gray-400 text-center font-medium">不倾向的发展路径</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* 产研运一体模式（金色/强调） */}
              <ScrollReveal delay={100}>
                <div className="h-full rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/50 p-8 hover:shadow-2xl transition-all duration-500 relative group">
                  <div className="absolute -top-4 right-8 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold">
                    ⭐ 推荐转型方向
                  </div>
                  <div className="text-center mb-6 mt-2">
                    <h4 className="text-xl font-bold text-gold mb-2">产研运一体模式</h4>
                    <p className="text-xs text-gold/70">业务闭环转型方向</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">产品设计开发全链路掌控</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">技术架构搭建自主可控</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">市场运营推广主动出击</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">客户反馈直达研发团队</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">自产自销实现业务闭环</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">自主造血能力持续增强</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gold/30">
                    <p className="text-xs text-gold font-bold text-center">完整的业务闭环 | 自产自销能力</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
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
