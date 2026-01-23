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
  Globe,
  DollarSign,
  Compass,
  Shield,
  Activity
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
  background?: string;  // 项目背景（替代problem）
  solution?: string;
  techStack?: string[];
  features?: Array<{ icon: string; title: string; desc: string }>;
  metrics?: Array<{ value: string; label: string; change?: string; icon?: string; color?: string }>;
  timeline?: Array<{ phase: string; time: string; status: 'done' | 'in-progress' | 'planned' }>;
  customers?: string[];
  futureVision?: string[];
  internalValue?: string[];
  externalValue?: string[];
}

// 项目案例数据
const projects: ProjectDetail[] = [
  {
    id: 3,
    title: "工业互联网平台运营统筹",
    category: "运营统筹",
    subtitle: "推动平台从建设期向规范化运营期转型",
    description: "作为中心与工赋中心的接口部门，充分履行委托方的统筹与赋能职责。通过战略引导、机制保障、资金拨付、模式创新、组织激活及资本驱动等多维扶持，成功推动平台跨入具备自我造血功能的规范化运营期，实现业务正向飞轮。",
    highlights: ["回退资金3000万", "运营战略重构", "组织团队激活"],
    image: "/shenzhen_factory.png",
    color: "border-accent",
    problem: "平台处于从建设向运营转型的关键阶段，亟需建立规范化运营机制、实现业务正向飞轮与自我造血功能。",
    solution: "充分履行接口部门统筹职责，探索在战略引导、组织激活、资金保障、模式创新及生态重塑上持续发力和深度赋能。",
    // 六大工作维度（对应绩效指标）
    features: [
      {
        icon: "FileText",
        title: "机制保障与规范化转型",
        desc: "统筹推进平台由探索期向规范化运营期过渡，拟定并签订年度委托运营服务协议，明确权责利边界与收入分配机制"
      },
      {
        icon: "Target",
        title: "战略引导与KPI制定",
        desc: "结合中心战略指引、平台战略定位、资产状况及运营要求，研究制定工赋中心年度KPI指标，确保战略目标可落地"
      },
      {
        icon: "Layers",
        title: "运营体系建设支持",
        desc: "协助推进产品及服务矩阵开发、运营体系建设与完善，探索新质生产力服务平台等业务模式创新"
      },
      {
        icon: "Users",
        title: "组织优化与人才激活",
        desc: "常态化跟进运营状况，研究推进组织架构、岗位序列、薪酬考核等制度修订，实施内部竞聘与重点事项报备"
      },
      {
        icon: "Network",
        title: "资源协调与业务协同",
        desc: "协调创新中心内部相关业务所支持工赋中心运营，实现业务协同、资源共享、收益分成"
      },
      {
        icon: "TrendingUp",
        title: "资本驱动与基金落地",
        desc: "推进工业互联网子基金落地，编制基金方案，对接LP与GP方，整合项目资源，构建产业+资本双轮驱动"
      },
    ],
    // 核心成果指标
    metrics: [
      { value: "3000万", label: "回退资金", change: "重大经营创效", icon: "DollarSign", color: "text-yellow-600" },
      { value: "战略重构", label: "运营方向明晰", change: "定位清晰可执行", icon: "Compass", color: "text-blue-600" },
      { value: "组织激活", label: "架构与团队重组", change: "战略执行保障", icon: "Users", color: "text-purple-600" },
      { value: "合规机制", label: "协议与制度完善", change: "双方权责明晰", icon: "Shield", color: "text-green-600" },
    ],
    // 关键完成情况（替代timeline）
    timeline: [
      { phase: "Q1", time: "规范运营：签订年度委托运营协议", status: "done" },
      { phase: "Q2", time: "战略引导：主导编制工赋战略规划，探索业务创新", status: "done" },
      { phase: "Q3", time: "组织重构：完成内部竞聘与人才配置优化", status: "done" },
      { phase: "Q4", time: "资金保障：回退经费及资金拨付", status: "done" },
    ],
    // 对内价值
    internalValue: [
      "成功推动平台从建设期向规范化运营期平稳过渡，建立'以考核促运营、以协议护合规'的管理闭环",
      "通过战略规划与业务创新指导，为平台实现业务正向飞轮和自我造血功能奠定基础",
      "优化组织架构与人才配置，打造高水平运营引擎，激活团队效能",
      "建立跨部门协同机制，整合中心内部资源形成合力",
    ],
    // 对外价值与核心亮点
    externalValue: [
      "🏆 重大经营创效：项目初验谈判中回退资金3000万元，显著优化经营性现金流，极大缓解运营压力",
      "🏆 国家级资质突破：统筹助力平台入选工信部首批'重点培育中试平台'初步名单，获得国家级认可",
      "业务模式创新：探索《粤港澳大湾区新质生产力服务平台运营实施方案》，实现新业务从0到1突破",
      "资本路径拓宽：推进工业互联网子基金方案编制，构建产业+资本双轮驱动模式",
    ],
    // 持续优化方向
    futureVision: [
      "持续优化运营机制，提升平台自我造血能力与市场竞争力",
      "加速工业互联网子基金落地，强化资本驱动效应",
      "深化业务模式创新，拓展服务范围与品牌影响力",
      "巩固国家级资质优势，承接重大专项与实现品牌价值变现",
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
    title: "金融业务大模型产品",
    category: "AI创新应用",
    subtitle: "面向金融场景的智能分析产品",
    description: "基于大语言模型技术，开发面向金融业务场景的智能分析产品，实现投资决策辅助、风险评估等核心功能。",
    highlights: ["产品1.0版本上线", "多家机构联创合作", "核心功能模块完成开发"],
    image: "/shenzhen_presentation.png",
    color: "border-primary",
    problem: "金融业务分析依赖专业人才，分析效率低、成本高，难以规模化服务中小客户。",
    solution: "将金融分析专家经验与大模型结合，提供智能化分析工具，降低分析门槛。",
    features: [
      { icon: "BarChart3", title: "智能分析引擎", desc: "基于LLM的投资决策辅助分析" },
      { icon: "Target", title: "风险评估模型", desc: "多维度风险识别与预警" },
      { icon: "Layers", title: "多场景适配", desc: "支持多种金融业务场景" },
      { icon: "Users", title: "联创合作模式", desc: "与金融机构联合开发定制功能" },
    ],
    metrics: [
      { value: "1.0", label: "产品版本", change: "已上线" },
      { value: "多家", label: "合作机构", change: "联创模式" },
      { value: "3+", label: "核心功能", change: "完成开发" },
    ],
    timeline: [
      { phase: "需求调研", time: "2025 Q1", status: "done" },
      { phase: "原型开发", time: "2025 Q2", status: "done" },
      { phase: "1.0版本", time: "2025 Q3", status: "done" },
      { phase: "客户试用", time: "2025 Q4", status: "done" },
      { phase: "迭代优化", time: "2026", status: "in-progress" },
    ],
    internalValue: [
      "探索AI+金融融合应用模式",
      "积累金融领域AI落地经验",
      "建立与金融机构合作关系",
    ],
    externalValue: [
      "为金融机构提供智能分析工具",
      "可作为SaaS产品对外服务",
      "可输出技术解决方案",
    ],
  },
  {
    id: 6,
    title: "AI报告矩阵研发与应用",
    category: "AI创新应用",
    subtitle: "打造高韧性底层架构，实现复杂研究报告矩阵式突破",
    description: "以Deep Research架构为底座，主动化解搜索底座停服危机，成功研发竞对分析等高难度报告模块，实现从单一画像到多维研究矩阵的跨越式发展。",
    highlights: ["重构DR架构", "攻坚搜索平替", "拓宽报告矩阵"],
    image: "/ai_report.png",
    color: "border-primary",
    link: "", // 待补充产品链接
    background: "原企业画像维度单一，且因Bing API停服导致质量失稳。面对运维力量难以覆盖的紧急政务支撑需求，团队主动作为，启动了底层架构重构与高难度报告类型的专项攻坚。",
    solution: "夯实Deep Research技术底座，通过问题分解与多源搜索平替提升检索深度；以此为基础，重点攻克竞对分析、技术路线等复杂报告模型，实现产品矩阵从0到1的丰富与工程化落地。",
    metrics: [
      { value: "2个", label: "新增报告模块", change: "竞对及技术路线模块落地" },
      { value: "100%", label: "平台运维支撑", change: "完成搜索平替与个性化需求" },
      { value: "10+次", label: "专项政务支撑", change: "含独角兽、出海专项等，产出400+篇报告" },
      { value: "4项", label: "底层技术优化", change: "深研架构、语义排序等研发" }
    ],
    features: [
      { icon: "Search", title: "深研架构底座", desc: "基于Deep Research研究成果，重构搜索优化逻辑，夯实研究底座。" },
      { icon: "Layers", title: "矩阵化报告", desc: "突破竞对分析、行业标杆等高难度模版，支持多场景研究产出。" },
      { icon: "Shield", title: "底座平替保障", desc: "化解Bing API停服风险，实现国产化平替，保障底座极高韧性。" },
      { icon: "Zap", title: "高效政务响应", desc: "快速承接独角兽、创投企业等紧急专项，具备极强韧性支撑能力。" },
      { icon: "Activity", title: "DIKI运营运维", desc: "主动解决日常复杂问题，通过技术手段满足业务侧个性化需求。" },
      { icon: "TrendingUp", title: "业务订单撬动", desc: "高质量报告成果得到市场验证，直接助力多笔业务合同的达成。" }
    ],
    timeline: [
      { phase: "Q1", time: "底层技术优化预研", status: "done" },
      { phase: "Q2", time: "竞对分析模块研发落地", status: "done" },
      { phase: "Q3", time: "支撑10+次专项任务", status: "done" },
      { phase: "Q4", time: "底层搜索平替，架构预研", status: "done" }
    ],
    internalValue: [
      "实现了从'单一工具'到'通用研究引擎'的技术跨越，沉淀了复杂报告自动生成的标准路径",
      "在底座危机中主动补位，通过架构优化解决了长期存在的质量稳定性与维度单一难题",
      "验证了'技术研发驱动业务增长'的逻辑，为后续开发更复杂的行业报告奠定了技术基础"
    ],
    externalValue: [
      "高质量交付多项高层级专项任务，通过技术专业度直接撬动了业务订单合同的签订",
      "竞对分析等新增报告类型填补了市场空白，显著增强了产品在泛研究场景的竞争力",
      "为政务及企业用户提供了更具深度的决策支持，极大降低了深度调研的人工成本"
    ],
    futureVision: [
      "持续丰富报告矩阵类型，将Deep Research能力泛化至更多专业分析场景",
      "优化底层智能体协同效率，打造具备'专家级'逻辑思维的深度研究平台",
      "探索更多商业化落地路径，通过技术底座的高灵活性快速响应市场个性化需求"
    ]
  },
];

// 图标映射
const iconMap: Record<string, any> = {
  FileText, Layers, Presentation, BarChart3, Sparkles, Globe,
  Network, Search, Target, Building2, Users, TrendingUp,
  Zap, Clock, CheckCircle2, Cpu, Activity
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
              {/* 问题与解决方案 / 项目背景 */}
              {(selectedProject.problem || selectedProject.background) && selectedProject.solution && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-accent/5 border border-accent/20">
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Target className="w-4 h-4" />
                      <span className="text-sm font-bold">
                        {selectedProject.background ? "项目背景" :
                         selectedProject.category === "运营统筹" ? "转型挑战" : "痛点问题"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                      {selectedProject.background || selectedProject.problem}
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/20">
                    <div className="flex items-center gap-2 text-green-600 mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm font-bold">
                        {selectedProject.category === "运营统筹" ? "统筹方案" : "解决方案"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground text-justify leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>
              )}

              {/* 关键指标 */}
              {selectedProject.metrics && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    {selectedProject.category === "运营统筹" ? "成效亮点" : "核心指标"}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.metrics.map((metric, i) => {
                      // 图标映射
                      const MetricIcon = metric.icon === "DollarSign" ? DollarSign
                        : metric.icon === "Compass" ? Compass
                        : metric.icon === "Users" ? Users
                        : metric.icon === "Shield" ? Shield
                        : null;

                      return (
                        <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border/30 text-center hover:shadow-lg transition-shadow">
                          {/* 图标 */}
                          {MetricIcon && (
                            <div className="flex justify-center mb-3">
                              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                                metric.icon === "DollarSign" ? "from-yellow-400/20 to-yellow-600/20" :
                                metric.icon === "Compass" ? "from-blue-400/20 to-blue-600/20" :
                                metric.icon === "Users" ? "from-purple-400/20 to-purple-600/20" :
                                "from-green-400/20 to-green-600/20"
                              } flex items-center justify-center`}>
                                <MetricIcon className={`w-6 h-6 ${metric.color || "text-primary"}`} />
                              </div>
                            </div>
                          )}
                          <div className="text-2xl font-black text-primary">{metric.value}</div>
                          <div className="text-sm font-medium">{metric.label}</div>
                          {metric.change && (
                            <div className="text-xs text-muted-foreground mt-1">{metric.change}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 功能特点/支持维度 */}
              {selectedProject.features && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gold-dark" />
                    {selectedProject.category === "运营统筹" ? "支持维度（对应绩效指标）" : "核心功能"}
                  </h3>
                  <div className={`grid grid-cols-1 ${selectedProject.category === "运营统筹" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-4`}>
                    {selectedProject.features.map((feature, i) => {
                      const IconComponent = iconMap[feature.icon] || Zap;
                      return (
                        <div key={i} className="p-4 rounded-xl bg-gradient-card border border-border/30 hover:border-primary/30 transition-colors relative">
                          {/* 运营统筹项目：右上角添加完成标记 */}
                          {selectedProject.category === "运营统筹" && (
                            <div className="absolute top-3 right-3">
                              <CheckCircle2 className="w-4 h-4 text-green-600" />
                            </div>
                          )}
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

              {/* 项目时间线 */}
              {selectedProject.timeline && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    {selectedProject.category === "运营统筹" ? "年度工作里程碑" : "项目进度"}
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
                          {/* 时间/详细说明 */}
                          <span className="text-[10px] text-muted-foreground mt-0.5 px-2 leading-relaxed">
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
                        {selectedProject.category === "运营统筹" ? "对内统筹成效" : "对内价值（效率提升）"}
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
                        <Sparkles className="w-4 h-4" />
                        {selectedProject.category === "运营统筹" ? "对外核心亮点" : "对外价值（产品输出）"}
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
                    {selectedProject.category === "运营统筹" ? "持续优化方向" : "未来规划"}
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
