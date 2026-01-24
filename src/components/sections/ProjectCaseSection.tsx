import { useState } from "react";
import {
  ExternalLink,
  ImageIcon,
  X,
  Zap,
  Users,
  Clock,
  Target,
  TrendingUp,
  CheckCircle2,
  Layers,
  Cpu,
  FileText,
  Presentation,
  Search,
  Network,
  Building2,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  BarChart3,
  Globe
} from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// 项目详情数据类型
interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  color: string;
  link?: string;
  // 扩展信息
  problem?: string;
  solution?: string;
  techStack?: string[];
  features?: Array<{ icon: string; title: string; desc: string }>;
  metrics?: Array<{ value: string; label: string; change?: string }>;
  timeline?: Array<{ phase: string; time: string; status: 'done' | 'in-progress' | 'planned' }>;
  customers?: string[];
  futureVision?: string[];
  internalValue?: string[];
  externalValue?: string[];
}

// 项目案例数据
const projects: ProjectDetail[] = [
  {
    id: 5,
    title: "福田招商系统交付",
    category: "平台运营",
    subtitle: "招商系统SaaS系统交付",
    description:
      "面向全区招商责任部门，建设可动态更新、逻辑清晰、要素关联的招商图谱能力，打通“空间资源—产业链—企业线索—触达转化”的工作闭环，用于指导全区“8+3”重点产业招商。",
    highlights: ["动态更新图谱", "空间×产业联动", "SaaS账号交付", "平台首单落地"],
    image: "/investment_platform.png",
    color: "border-accent",
    problem:
      "需要一套可动态更新、逻辑清晰、要素关联的招商图谱体系，既能呈现空间与产业的匹配关系，又能沉淀线索、方法与下一步建议，用于统筹指导全区招商责任部门开展招商工作。",
    solution:
      "提供20个招商系统SaaS账号，服务全区“8+3”重点产业招商；围绕福田实际工作流，定义并优化产业链招商、榜单招商、一键触达、安商稳商等能力，并通过宣讲培训推动方法论落地。",
    features: [
      { icon: "Network", title: "产业链招商", desc: "以链为纲梳理上中下游企业与关键环节，形成可追踪的招商清单与线索池" },
      { icon: "BarChart3", title: "榜单招商", desc: "按细分赛道/指标生成企业榜单，辅助锁定龙头与高成长目标" },
      { icon: "Layers", title: "供应链招商", desc: "围绕核心企业上下游补链强链，提升产业集聚与协同效应" },
      { icon: "Building2", title: "区域招商", desc: "结合空间载体与片区定位，呈现“空间—产业—企业”匹配关系，指导落地" },
      { icon: "TrendingUp", title: "资本招商", desc: "联动投融资与产业基金视角，辅助筛选优质标的与合作机构" },
      { icon: "Zap", title: "一键触达", desc: "标准化触达话术与渠道联动，提升线索跟进效率与触达成功率" },
      { icon: "CheckCircle2", title: "安商稳商", desc: "沉淀服务事项与企业诉求，形成“引进—服务—稳定—扩张”的全周期支撑" },
      { icon: "Target", title: "企业评估", desc: "多维指标评估企业质量与匹配度，为招商优先级与资源配置提供依据" },
    ],
    metrics: [
      { value: "20个", label: "SaaS账号", change: "覆盖全区“8+3”重点产业招商" },
      { value: "1700+", label: "招商成效分析", change: "输出下一步工作建议" },
      { value: "95万", label: "中心首单合同", change: "情报平台系统首个销售订单" },
      { value: "N场", label: "招商宣讲&培训", change: "区领导、青年领导干部、投促局" },
    ],
    timeline: [
      { phase: "书记汇报（高调亮相）", time: "2023 Q4", status: "done" },
      { phase: "需求对接（功能定义）", time: "2024 Q3", status: "done" },
      { phase: "需求更新（系统试用）", time: "2025 Q3", status: "done" },
      { phase: "平台首单（商务落地）", time: "2025 Q4", status: "done" },
    ],
    internalValue: [
      "沉淀“图谱+线索+触达+服务”的招商方法论与标准化流程",
      "形成可复用的招商系统交付范式（账号体系、培训体系、功能迭代机制）",
      "以首单验证情报平台系统的商业化路径与定价能力",
    ],
    externalValue: [
      "为全区招商责任部门提供统一的动态招商图谱与工作抓手",
      "用空间×产业关系指导平台招商落地与资源精准配置",
      "支持产业链招商、榜单招商等多路径协同，提升招商效率与质量",
    ],
  },
  {
    id: 6,
    title: "产业特色情报数据服务",
    category: "产业特色数据",
    subtitle: "集成电路产业信息服务",
    description:
      "围绕集成电路产业，提供国际前沿工艺技术路线、供应链成本、行业竞争格局与技术趋势的系统分析服务，通过情报平台子平台账号，为头部企业与机构供给高质量数据与深度报告。",
    highlights: ["集成电路专业数据", "工艺路线深度分析", "供应链成本评估", "头部客户验证"],
    image: "/ai_think_tank.png",
    color: "border-primary",
    problem:
      "集成电路产业技术迭代快、链条长，企业在前沿工艺路线判断、供应链成本评估、行业竞争格局与技术趋势分析上，缺乏系统化、高时效、可验证的数据与情报支撑。",
    solution:
      "基于情报平台，搭建“集成电路产业信息服务子平台”，为客户开通账号服务，提供覆盖工艺研发、行业分析、终端拆解、产线跟踪等维度的结构化数据与分析报告，支持企业战略决策与研发布局。",
    features: [
      { icon: "Cpu", title: "前沿工艺研发", desc: "跟踪国际前沿工艺技术路线与关键节点厂商，为研发决策提供参考" },
      { icon: "BarChart3", title: "行业与竞争分析", desc: "从市场规模、竞争格局、技术路径等多维度输出行业分析报告" },
      { icon: "FileText", title: "终端拆解数据", desc: "通过终端产品拆解，解析关键芯片与材料选型，反推供应链构成" },
      { icon: "Network", title: "产线与供应链跟踪", desc: "持续跟踪重点产线与供应链变化，评估成本结构与风险点" },
    ],
    metrics: [
      { value: "550万", label: "当年销售订单", change: "市场反响良好，客户口碑佳" },
      { value: "行业龙头", label: "主要客户", change: "服务新凯来、荣耀、微电子所、鹏芯微、鹏新旭等" },
      { value: "高质量", label: "数据沉淀", change: "前沿技术趋势与分析报告本地落库" },
    ],
    timeline: [
      { phase: "企业走访（意向收集）", time: "2024 Q2", status: "done" },
      { phase: "需求确认（合同签署）", time: "2024 Q4", status: "done" },
      { phase: "市场拓展（寻找增量）", time: "2025 Q2", status: "done" },
      { phase: "合约到期（服务终止）", time: "2025 Q4", status: "done" },
    ],
    internalValue: [
      "在集成电路垂直领域沉淀系统化情报与数据资产，为后续模型与工具研发提供高质量语料",
      "形成“工艺—供应链—终端—产线”一体化分析框架，可复制到其他产业赛道",
    ],
    externalValue: [
      "为集成电路龙头企业与研究机构提供高价值情报服务，辅助技术与市场决策",
      "将情报平台能力产品化为行业子平台，可面向更多区域与客户推广",
    ],
  },
  {
    id: 3,
    title: "工业互联网平台运营",
    category: "平台运营",
    subtitle: "工业互联网平台规范化运营",
    description: "承接工业互联网平台运营服务，完成探索期向规范化运营期过渡，建立完整KPI指标体系，助力平台可持续发展。",
    highlights: ["签订年度运营协议", "建立KPI指标体系", "业务协同落地"],
    image: "/shenzhen_factory.png",
    color: "border-accent",
    problem: "工业互联网平台处于探索期，缺乏规范化运营机制，难以量化运营效果和持续优化。",
    solution: "建立科学的KPI指标体系，从用户活跃度、业务转化率等维度量化运营效果。",
    features: [
      { icon: "Target", title: "KPI指标体系", desc: "建立多维度运营效果量化指标" },
      { icon: "TrendingUp", title: "运营数据分析", desc: "平台使用数据分析与优化建议" },
      { icon: "Users", title: "用户运营服务", desc: "企业用户对接与服务支持" },
      { icon: "Layers", title: "业务协同", desc: "平台生态各方协同落地" },
    ],
    metrics: [
      { value: "年度", label: "运营协议", change: "长期合作" },
      { value: "3+", label: "KPI维度", change: "科学量化" },
      { value: "持续", label: "优化迭代", change: "敏捷响应" },
    ],
    timeline: [
      { phase: "运营接洽", time: "2025 Q1", status: "done" },
      { phase: "协议签订", time: "2025 Q2", status: "done" },
      { phase: "规范化运营", time: "2025 Q3", status: "done" },
      { phase: "持续优化", time: "2025 Q4", status: "done" },
      { phase: "年度续约", time: "2026", status: "in-progress" },
    ],
    internalValue: [
      "拓展平台运营服务能力边界",
      "积累工业互联网领域实战经验",
      "建立可复用的运营方法论",
    ],
    externalValue: [
      "为客户提供专业化平台运营服务",
      "可作为标杆案例推广至其他平台",
    ],
  },
  {
    id: 0,
    title: "河套创新体系咨询",
    subtitle: "AI全过程赋能大型咨询课题标杆",
    category: "标杆课题",
    description: "创新中心首个AI全过程赋能大型咨询课题，为河套深港科技创新合作区这一国家战略平台提供创新体系建设综合咨询，实现小团队高效率大产出。",
    highlights: ["国家战略平台", "AI全过程赋能", "市长批示肯定"],
    image: "/hetao.png",
    color: "border-gold",
    problem: "大型综合咨询课题传统模式需要庞大团队、周期长，难以在有限资源下高效完成跨国比较研究与系统分析。",
    solution: "利用大模型、Agent、自动化工作流等技术，从资料收集、数据分析、报告撰写、演示文稿制作全过程AI赋能，探索智库咨询业务转型新范式。",
    techStack: ["大语言模型", "AI Agent", "自动化工作流", "知识图谱", "数据可视化"],
    features: [
      { icon: "Globe", title: "国际体系研究", desc: "系统整理美国、欧盟、日本、香港等科研管理体系，进行深度对比分析" },
      { icon: "Search", title: "政策全景扫描", desc: "全市及国内主要区域科研政策全面搜索整理，为政策制定提供借鉴" },
      { icon: "BarChart3", title: "存量企业诊断", desc: "对合作区存量企业进行系统结构性分析，摸清底数、把脉问诊" },
      { icon: "FileText", title: "智能报告生成", desc: "AI辅助报告撰写与演示文稿制作，大幅提升产出效率" },
      { icon: "Target", title: "国家战略对接", desc: "为河套合作区打造接轨国际的科研体制机制奠定基础" },
      { icon: "Users", title: "小团队大产出", desc: "以精干团队完成传统需要大团队才能完成的综合性课题" },
    ],
    metrics: [
      { value: "380万", label: "课题价值", change: "大型项目" },
      { value: "1年", label: "项目周期", change: "全程AI赋能" },
      { value: "4+", label: "国际对标", change: "美欧日港" },
      { value: "市长", label: "批示肯定", change: "高层认可" },
    ],
    timeline: [
      { phase: "项目启动", time: "2025 Q1", status: "done" },
      { phase: "国际调研", time: "2025 Q2", status: "done" },
      { phase: "政策梳理", time: "2025 Q3", status: "done" },
      { phase: "中期验收", time: "2025 Q4", status: "done" },
      { phase: "结题验收", time: "2026 Q1", status: "in-progress" },
    ],
    customers: ["河套深港科技创新合作区", "深圳市发改委"],
    internalValue: [
      "探索AI赋能大型咨询课题的标准化流程与方法论",
      "验证小团队承接大型项目的可行性，积累实战经验",
      "建立国际科研体系研究知识库，可复用于其他课题",
      "作为AI全过程赋能咨询的典型案例，获得高层认可",
    ],
    externalValue: [
      "为河套合作区创新体系建设提供决策参考",
      "研究成果获市长批示肯定，具有政策影响力",
      "可作为智库咨询转型示范案例对外推广",
      "方法论可输出为「AI+咨询」解决方案",
    ],
    futureVision: [
      "将AI赋能方法论复制到更多大型咨询项目",
      "建设国际科研管理体系知识库平台",
      "开发咨询全流程AI辅助工具链",
      "形成可输出的「AI+智库」服务产品",
    ],
  },
  {
    id: 1,
    title: "SlideCraft AI",
    subtitle: "AI智能PPT生成平台",
    category: "AI创新应用",
    description: "基于大语言模型的全栈Web应用，能够从各种文档（PDF、Word、Markdown）智能生成专业级演示文稿，大幅提升PPT制作效率。",
    highlights: ["一键文档解析", "AI智能编排", "多格式导出"],
    image: "/slidecraft_flow.png",
    color: "border-primary",
    link: "https://ppt.gwy.life",
    problem: "传统PPT制作耗时费力，一份20页的汇报材料往往需要数小时手工排版，且质量参差不齐。",
    solution: "上传文档→AI理解→自动生成专业PPT，将制作时间从数小时压缩至数分钟。",
    techStack: ["React 18", "FastAPI", "DeepSeek V3", "Gemini 2.0 Flash", "Puppeteer", "ECharts"],
    features: [
      { icon: "FileText", title: "智能文档解析", desc: "支持PDF、Word、Markdown等格式自动提取文本" },
      { icon: "Layers", title: "AI场景适配", desc: "咨询汇报、政务公文、学术答辩等6种专业场景预设" },
      { icon: "Presentation", title: "专业排版引擎", desc: "基于1280×720标准画布，自动布局与样式设计" },
      { icon: "BarChart3", title: "ECharts图表", desc: "自动将数据转换为可视化图表（柱状图、折线图、饼图）" },
      { icon: "Sparkles", title: "AI背景生成", desc: "ComfyUI集成，为封面/封底生成主题匹配的专业视觉" },
      { icon: "Globe", title: "云端部署", desc: "支持Cloudflare R2存储，生成结果可分享下载" },
    ],
    metrics: [
      { value: "5分钟", label: "平均生成时间", change: "vs 3小时手工" },
      { value: "20+", label: "支持页数", change: "单次生成" },
      { value: "6", label: "场景预设", change: "专业适配" },
      { value: "3", label: "导出格式", change: "HTML/PDF/PPTX" },
    ],
    timeline: [
      { phase: "原型开发", time: "2025 Q2", status: "done" },
      { phase: "V2引擎上线", time: "2025 Q3", status: "done" },
      { phase: "内部试用", time: "2025 Q4", status: "done" },
      { phase: "公开测试", time: "2026 Q1", status: "in-progress" },
      { phase: "商业化推广", time: "2026 Q2", status: "planned" },
    ],
    customers: ["部门内部试用", "河套课题项目汇报", "政务公文场景"],
    internalValue: [
      "大幅提升咨询报告制作效率，节省80%排版时间",
      "统一汇报材料风格，提升专业形象",
      "可快速响应紧急汇报需求",
      "作为AI落地标杆案例，展示技术实力",
    ],
    externalValue: [
      "可作为独立SaaS产品对外输出，收取订阅费",
      "可与咨询服务打包，提供「报告+PPT」一站式交付",
      "可为政府客户定制专属版本",
      "技术方案可复用于其他AI应用场景",
    ],
    futureVision: [
      "接入更多LLM模型，提升生成质量",
      "支持用户自定义模板",
      "添加自动修改和优化反馈机制",
      "开发PPT续写和局部编辑功能",
    ],
  },
  {
    id: 2,
    title: "智绘链图",
    subtitle: "AI产业链图谱分析平台",
    category: "AI创新应用",
    description: "基于大语言模型与知识图谱技术的产业链智能分析平台，自动生成可视化产业图谱。凭借该项目，在2025深圳市人工智能应用创新大赛中脱颖而出，荣获'最佳应用奖'。",
    highlights: ["🏆 市级大赛获奖", "智能图谱生成", "招商引资导向"],
    image: "/ai_industry_map.png",
    color: "border-gold",
    link: "https://diki.gwy.life",
    problem: "传统产业链分析依赖人工整理，周期长、更新慢，且难以快速响应客户对细分领域的分析需求。",
    solution: "输入产业名称→AI分析+实时搜索→自动生成产业链图谱，从数周压缩至1分钟。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Gemini", "Tavily Search"],
    features: [
      { icon: "Network", title: "智能图谱生成", desc: "输入产业名称，自动生成上中下游完整产业链" },
      { icon: "Search", title: "实时企业搜索", desc: "Tavily集成，获取最新企业信息和市场动态" },
      { icon: "Target", title: "招商标签系统", desc: "自动识别[龙头]、[独角兽]、[深圳]等关键标签" },
      { icon: "Building2", title: "区域协同优先", desc: "优先推荐大湾区企业，助力区域招商" },
      { icon: "Layers", title: "三层结构设计", desc: "核心技术层→应用转化层→生态服务层" },
      { icon: "Users", title: "企业详情分析", desc: "双击企业查看AI生成的业务分析报告" },
    ],
    metrics: [
      { value: "🏆", label: "最佳应用奖", change: "深圳市AI大赛" },
      { value: "30秒", label: "图谱生成", change: "vs 数周人工" },
      { value: "50+", label: "企业信息", change: "单张图谱" },
      { value: "4K", label: "导出分辨率", change: "超高清图片" },
    ],
    timeline: [
      { phase: "需求调研", time: "2025 Q1", status: "done" },
      { phase: "原型开发", time: "2025 Q2", status: "done" },
      { phase: "招商版上线", time: "2025 Q3", status: "done" },
      { phase: "客户试用", time: "2025 Q4", status: "done" },
      { phase: "产品化推广", time: "2026 Q1", status: "in-progress" },
    ],
    customers: ["河套合作区招商引资项目", "产业规划研究", "投资尽调分析"],
    internalValue: [
      "大幅提升产业研究效率，1分钟完成传统数周工作",
      "标准化产业分析输出，提升团队协作效率",
      "支持任意细分领域，快速响应客户需求",
      "作为技术能力展示的标杆产品",
    ],
    externalValue: [
      "为河套合作区提供招商决策支持工具",
      "可作为独立SaaS产品对外销售",
      "可与产业研究报告打包，提升服务附加值",
      "可为园区、政府客户定制专属版本",
    ],
    futureVision: [
      "接入企查查等专业数据源，提升准确度",
      "支持Excel/PDF导出功能",
      "添加企业对比分析和招商线索追踪",
      "开发移动端App版本",
    ],
  },
  {
    id: 4,
    title: "金融diki研发",
    category: "AI创新应用",
    subtitle: "面向硬科技投资的智能投研助手",
    description:
      "在“构造、投小、投硬科技”与国家千亿级创业基金入场的大背景下，围绕中小硬科技企业信息匮乏、尽调困难的问题，打造新一代投资研究工具——金融diki。",
    highlights: ["投资界的 Cursor", "信息搜集到报告的一站式闭环", "专注硬科技投研场景"],
    image: "/shenzhen_presentation.png",
    color: "border-primary",
    problem:
      "在国家倡导“构造、投小、投硬科技”和千亿级创业基金入场的趋势下，大量中小硬科技企业进入视野，但信息高度分散且不透明，传统尽调严重依赖人工，成本高、周期长、质量难以保证，系统性投研能力不足的问题将逐步暴露。",
    solution:
      "打造“投资界的 Cursor”：以全域感知项目前世今生为基础，以投资导师（Mentor）引导深入投研为核心，将“信息搜集→关键假设→假设验证→报告输出”全过程收敛为一个可追踪、可复盘的工作流。",
    features: [
      {
        icon: "Search",
        title: "感知引擎",
        desc: "基于尽调框架对项目进行全维度信息感知与整理，构建项目标的知识底座",
      },
      {
        icon: "Target",
        title: "推理引擎",
        desc: "由负面假设出发，驱动高强度逻辑攻防与反向论证，帮助暴露项目关键风险点",
      },
      {
        icon: "Zap",
        title: "行动引擎",
        desc: "将线上思辨过程与风险点结构化为线下行动指南，形成可执行的访谈提纲、调研路径与行动清单",
      },
      {
        icon: "Layers",
        title: "数据底座",
        desc: "沉淀企业画像、竞对分析、技术分析等研究分析框架，高效收敛数据范围，为多项目、多周期投研提供可复用资产",
      },
    ],
    metrics: [
      { value: "心流引导", label: "心灵减负", change: "将尽调重构为侦探破案，将高认知负荷工作转化为高沉浸度、高激励的探索过程" },
      { value: "白盒化", label: "信任基础", change: "所有尽调过程完全可视化。用户可追溯任意论断的来源" },
      { value: "人机协同", label: "交互理念", change: "保留结论与数据的选择权，给予专业人士充足的尊严与掌控感" },
    ],
    timeline: [
      { phase: "概念提出（内部研讨）", time: "2025 Q3", status: "done" },
      { phase: "用户调研（产品定义）", time: "2025 Q4", status: "done" },
      { phase: "1.0版本问世", time: "2025 Q4", status: "done" },
      { phase: "产品优化（用户汇报）", time: "2026 Q1", status: "in-progress" },
    ],
    internalValue: [
      "沉淀面向硬科技投资的标准化投研流程与方法论，将经验型投研升级为流程型投研",
      "搭建适用于多项目、多轮次的投研知识图谱与数据底座，提升团队整体研究能力与效率",
    ],
    externalValue: [
      "为投资机构提供“信息搜集→报告输出”的一体化智能投研工具，降低硬科技投研门槛",
      "未来可与情报平台、产业图谱等能力打通，形成面向投资端的完整产品线",
    ],
  },
];

// 图标映射
const iconMap: Record<string, any> = {
  FileText, Layers, Presentation, BarChart3, Sparkles, Globe,
  Network, Search, Target, Building2, Users, TrendingUp,
  Zap, Clock, CheckCircle2, Cpu
};

const ProjectCaseSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const openModal = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  // 渲染状态标签
  const renderStatus = (status: 'done' | 'in-progress' | 'planned') => {
    const styles = {
      'done': 'bg-green-500/10 text-green-600 border-green-500/20',
      'in-progress': 'bg-gold/10 text-gold-dark border-gold/20',
      'planned': 'bg-secondary text-muted-foreground border-border/30',
    };
    const labels = {
      'done': '已完成',
      'in-progress': '进行中',
      'planned': '计划中',
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-particles opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              重点<span className="text-gradient-primary">项目案例</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              2025年度完成的核心项目成果展示，点击卡片查看详情
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div
                onClick={() => openModal(project)}
                className={`group h-full rounded-[2rem] bg-gradient-card border-2 ${project.color} hover:shadow-2xl hover:bg-card/80 transition-all duration-500 overflow-hidden flex flex-col cursor-pointer`}
              >
                {/* 图片区域 */}
                <div className="relative h-56 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-primary/30" />
                    </div>
                  )}
                  {/* 分类标签 */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-black/70 backdrop-blur-sm text-white shadow-sm border border-white/10">
                    {project.category}
                  </div>
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                </div>

                {/* 内容区域 */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-primary/70 mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* 亮点 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* 查看详情 */}
                  <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors mt-auto">
                    <span>查看详情</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 项目详情模态框 */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 遮罩层 */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          {/* 模态框内容 */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl border border-border shadow-2xl">
            {/* 关闭按钮 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 头部Banner - 纯色渐变背景 */}
            <div className="relative h-40 overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary via-primary/80 to-gold/60">
              {/* 装饰图案 */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute top-8 right-8 w-24 h-24 border border-white rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-white rounded-full" />
              </div>
              <div className="absolute bottom-6 left-8 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium mb-2">
                  {selectedProject.category}
                </div>
                <h2 className="text-3xl font-black text-white">{selectedProject.title}</h2>
                <p className="text-white/80">{selectedProject.subtitle}</p>
              </div>
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary text-sm font-medium hover:bg-white/90 transition-colors z-10"
                >
                  <Globe className="w-4 h-4" />
                  访问产品
                </a>
              )}
            </div>

            {/* 主体内容 */}
            <div className="p-8">
              {/* 问题与解决方案 */}
              {selectedProject.problem && selectedProject.solution && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Target className="w-4 h-4" />
                      <span className="text-sm font-bold">痛点问题</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm font-bold">解决方案</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedProject.solution}</p>
                  </div>
                </div>
              )}

              {/* 关键指标 */}
              {selectedProject.metrics && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    {selectedProject.id === 4 ? "设计理念" : "核心指标"}
                  </h3>
                  <div
                    className={`grid gap-4 ${
                      selectedProject.metrics && selectedProject.metrics.length === 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-2 md:grid-cols-4"
                    }`}
                  >
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border/30 text-center">
                        <div className="text-2xl font-black text-primary">{metric.value}</div>
                        <div className="text-sm font-medium">{metric.label}</div>
                        {metric.change && (
                          <div className="text-xs text-muted-foreground mt-1">{metric.change}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 功能特点 */}
              {selectedProject.features && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gold-dark" />
                    {selectedProject.id === 4 ? "系统架构" : "核心功能"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProject.features.map((feature, i) => {
                      const IconComponent = iconMap[feature.icon] || Zap;
                      return (
                        <div key={i} className="p-4 rounded-xl bg-gradient-card border border-border/30 hover:border-primary/30 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <IconComponent className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-sm">{feature.title}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{feature.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 技术栈 */}
              {selectedProject.techStack && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-accent" />
                    技术栈
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 项目时间线 - 水平时间轴设计 */}
              {selectedProject.timeline && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    项目进度
                  </h3>
                  <div className="relative">
                    {/* 时间轴连接线 */}
                    <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-primary via-gold to-accent opacity-30" />

                    {/* 时间节点 */}
                    <div className="flex justify-between relative">
                      {selectedProject.timeline.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center" style={{ width: `${100 / selectedProject.timeline.length}%` }}>
                          {/* 节点圆点 */}
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 shadow-md ${item.status === 'done'
                            ? 'bg-green-500'
                            : item.status === 'in-progress'
                              ? 'bg-primary animate-pulse'
                              : 'bg-secondary border-2 border-border'
                            }`}>
                            {item.status === 'done' ? (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            ) : item.status === 'in-progress' ? (
                              <Clock className="w-4 h-4 text-white" />
                            ) : (
                              <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                            )}
                          </div>
                          {/* 阶段名称 */}
                          <span className={`text-xs font-medium mt-2 ${item.status === 'in-progress' ? 'text-primary' : ''
                            }`}>
                            {item.phase}
                          </span>
                          {/* 时间 */}
                          <span className="text-[10px] text-muted-foreground mt-0.5">
                            {item.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 价值体现 - 分内外两栏 */}
              {(selectedProject.internalValue || selectedProject.externalValue) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* 对内价值 */}
                  {selectedProject.internalValue && (
                    <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                      <h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        对内价值（效率提升）
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.internalValue.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 对外价值 */}
                  {selectedProject.externalValue && (
                    <div className="p-5 rounded-2xl bg-gold/5 border border-gold/20">
                      <h4 className="text-sm font-bold text-gold-dark mb-3 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        对外价值（产品输出）
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.externalValue.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* 未来规划 */}
              {selectedProject.futureVision && (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/5 via-gold/5 to-accent/5 border border-border/30">
                  <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-dark" />
                    未来规划
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.futureVision.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-3 h-3 text-gold-dark" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCaseSection;
