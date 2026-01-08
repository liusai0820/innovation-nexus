import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, LabelList, LineChart, Line } from "recharts";
import ScrollReveal from "../ScrollReveal";
import { TrendingUp, Users, ArrowRight, Sparkles, ArrowUpRight, Target, Layers, X, FileText, Building2, Wallet } from "lucide-react";

// ========================================
// 真实数据 - 基于近4年收入构成情况.csv分析
// ========================================

// 年度经营数据（包含部门人数）
const yearlyTrendData = [
  { year: "2022", revenue: 572.2, cost: 455.8, headcount: 10, perCapita: 57.2, perCapitaCost: 45.6 },
  { year: "2023", revenue: 824.2, cost: 496.4, headcount: 11, perCapita: 74.9, perCapitaCost: 45.1 },
  { year: "2024", revenue: 1016.3, cost: 667.9, headcount: 11, perCapita: 92.4, perCapitaCost: 60.7 },
  { year: "2025", revenue: 1050.2, cost: 611.94, headcount: 10, perCapita: 105.0, perCapitaCost: 61.2 },
];

// 业务类型数据
const businessTypeData = [
  { year: "2022", 项目管理: 567.35, 课题咨询: 4.8, 情报平台: 0, total: 572.15 },
  { year: "2023", 项目管理: 626.26, 课题咨询: 54.6, 情报平台: 143.32, total: 824.18 },
  { year: "2024", 项目管理: 623.49, 课题咨询: 0, 情报平台: 392.76, total: 1016.25 },
  { year: "2025", 项目管理: 97.6, 课题咨询: 340.2, 情报平台: 612.4, total: 1050.2 },
];

// 客户来源数据
const customerSourceData = [
  { year: "2022", 市发改委: 203.77, 河套合作区: 363.58, 外地政府: 0, 区级政府: 0, 企业客户: 4.8, total: 572.15 },
  { year: "2023", 市发改委: 260.48, 河套合作区: 324.56, 外地政府: 49.6, 区级政府: 41.22, 企业客户: 148.32, total: 824.18 },
  { year: "2024", 市发改委: 119.5, 河套合作区: 421.54, 外地政府: 0, 区级政府: 82.45, 企业客户: 392.76, total: 1016.25 },
  { year: "2025", 市发改委: 48.72, 河套合作区: 364.2, 外地政府: 0, 区级政府: 91.66, 企业客户: 545.62, total: 1050.2 },
];

// 课题明细数据（来自CSV）
const projectDetails: Record<string, Array<{ name: string; customer: string; type: string; amount: number }>> = {
  "2022": [
    { name: "河套深港科技创新合作区科研项目2021-2022年度委托管理服务费", customer: "河套合作区", type: "项目管理", amount: 363.58 },
    { name: "重大装备和关键零部件研制扶持计划项目管理", customer: "市发改委", type: "项目管理", amount: 203.77 },
    { name: "中国银行深圳分行'20+8'产业集群咨询服务", customer: "企业客户", type: "课题咨询", amount: 4.8 },
  ],
  "2023": [
    { name: "河套深港科技创新合作区科研项目2022-2023年度委托管理", customer: "河套合作区", type: "项目管理", amount: 324.56 },
    { name: "重大装备和关键零部件研制扶持计划管理服务", customer: "市发改委", type: "项目管理", amount: 200.48 },
    { name: "预研项目管理服务（大设施分进）", customer: "市发改委", type: "项目管理", amount: 60.0 },
    { name: "香港大学经管学院（深圳）项目管理", customer: "区级政府", type: "项目管理", amount: 41.22 },
    { name: "集成电路产业信息服务", customer: "企业客户", type: "情报平台", amount: 76.32 },
    { name: "集成电路产业信息咨询", customer: "企业客户", type: "情报平台", amount: 67.0 },
    { name: "韶关市大数据全产业链招商引资课题", customer: "外地政府", type: "课题咨询", amount: 49.6 },
    { name: "半导体生产线项目行业资询", customer: "企业客户", type: "课题咨询", amount: 5.0 },
  ],
  "2024": [
    { name: "河套深港科技创新合作区科研项目2023-2024委托管理", customer: "河套合作区", type: "项目管理", amount: 421.54 },
    { name: "集成电路产业信息服务", customer: "企业客户", type: "情报平台", amount: 300.76 },
    { name: "集成电路技术报告", customer: "企业客户", type: "情报平台", amount: 92.0 },
    { name: "重大装备和关键零部件研制扶持计划项目管理", customer: "市发改委", type: "项目管理", amount: 89.5 },
    { name: "香港大学经管学院（深圳）项目管理", customer: "区级政府", type: "项目管理", amount: 45.8 },
    { name: "南方工业技术研究院体制机制创新研究课题委托", customer: "区级政府", type: "项目管理", amount: 30.0 },
    { name: "预研项目管理服务", customer: "市发改委", type: "项目管理", amount: 30.0 },
    { name: "清华大学经济管理深圳研究院项目绩效评价", customer: "区级政府", type: "项目管理", amount: 6.65 },
  ],
  "2025": [
    { name: "集成电路产业信息咨询服务", customer: "企业客户", type: "情报平台", amount: 545.62 },
    { name: "河套深港科技创新合作区深圳园区创新体系建设综合咨询项目", customer: "河套合作区", type: "课题咨询", amount: 340.2 },
    { name: "产业图谱招商系统服务项目", customer: "区级政府", type: "情报平台", amount: 66.78 },
    { name: "重大装备和关键零部件研制扶持计划项目管理服务", customer: "市发改委", type: "项目管理", amount: 44.7 },
    { name: "中科飞测有关项目核查评审服务工作", customer: "市发改委", type: "项目管理", amount: 4.02 },
    { name: "香港大学经管学院（深圳）项目管理", customer: "区级政府", type: "项目管理", amount: 4.58 },
    { name: "香港大学经济及工商管理学院（福田）项目管理服务", customer: "区级政府", type: "项目管理", amount: 10.8 },
    { name: "河套深港科技创新合作区深圳园区科创项目服务", customer: "河套合作区", type: "项目管理", amount: 24.0 },
    { name: "高等教育项目绩效评价", customer: "区级政府", type: "项目管理", amount: 6.65 },
    { name: "清华大学经管深圳研究院项目绩效评价", customer: "区级政府", type: "项目管理", amount: 2.85 },
  ],
};

// 团队核心能力雷达图
const capabilityData = [
  { subject: "AI技术落地", A: 95, fullMark: 100 },
  { subject: "行业洞察", A: 85, fullMark: 100 },
  { subject: "项目交付", A: 90, fullMark: 100 },
  { subject: "产品创新", A: 88, fullMark: 100 },
  { subject: "战略规划", A: 82, fullMark: 100 },
  { subject: "数据分析", A: 92, fullMark: 100 },
];

// 金色系配色方案
const BUSINESS_COLORS = {
  项目管理: "hsl(30, 65%, 35%)",
  课题咨询: "hsl(36, 80%, 50%)",
  情报平台: "hsl(45, 90%, 55%)",
};

const CUSTOMER_COLORS = {
  市发改委: "hsl(30, 65%, 35%)",
  河套合作区: "hsl(33, 70%, 40%)",
  外地政府: "hsl(36, 80%, 50%)",
  区级政府: "hsl(40, 85%, 55%)",
  企业客户: "hsl(45, 90%, 60%)",
};

// 转型亮点数据
const transformationHighlights = [
  { title: "项目管理占比", from: "99.2%", to: "9.3%", change: "-90%", trend: "down", desc: "从单一项目制转型", color: "text-accent" },
  { title: "情报平台占比", from: "0%", to: "58.3%", change: "+58%", trend: "up", desc: "产品化收入主导", color: "text-gold-dark" },
  { title: "企业客户占比", from: "0.8%", to: "52.0%", change: "+51%", trend: "up", desc: "市场化程度大幅提升", color: "text-primary" },
  { title: "市发改委依赖", from: "35.6%", to: "4.6%", change: "-31%", trend: "down", desc: "摆脱单一大客户", color: "text-accent" },
];

// 模态框类型
type ModalType = 'overview' | 'business' | 'customer' | null;

const ChartSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedYear, setSelectedYear] = useState<string>("2024");

  // 打开模态框
  const openModal = (type: ModalType, year: string) => {
    setModalType(type);
    setSelectedYear(year);
    setModalOpen(true);
  };

  // 关闭模态框
  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  // 获取年度经营数据
  const getYearOverviewData = (year: string) => {
    return yearlyTrendData.find(d => d.year === year);
  };

  // 按业务类型分组课题
  const getProjectsByBusinessType = (year: string) => {
    const projects = projectDetails[year] || [];
    const grouped: Record<string, typeof projects> = {};
    projects.forEach(p => {
      if (!grouped[p.type]) grouped[p.type] = [];
      grouped[p.type].push(p);
    });
    return grouped;
  };

  // 按客户来源分组课题
  const getProjectsByCustomer = (year: string) => {
    const projects = projectDetails[year] || [];
    const grouped: Record<string, typeof projects> = {};
    projects.forEach(p => {
      if (!grouped[p.customer]) grouped[p.customer] = [];
      grouped[p.customer].push(p);
    });
    return grouped;
  };

  // 渲染模态框内容
  const renderModalContent = () => {
    if (modalType === 'overview') {
      const data = getYearOverviewData(selectedYear);
      if (!data) return null;

      return (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{selectedYear}年经营数据</h3>
              <p className="text-sm text-muted-foreground">年度收支与人效分析</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gold/5 border border-gold/20">
              <div className="text-xs text-muted-foreground mb-1">总收入</div>
              <div className="text-2xl font-bold text-gold-dark">{data.revenue}万</div>
            </div>
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
              <div className="text-xs text-muted-foreground mb-1">总成本</div>
              <div className="text-2xl font-bold text-accent">{data.cost}万</div>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="text-xs text-muted-foreground mb-1">利润</div>
              <div className="text-2xl font-bold text-primary">{(data.revenue - data.cost).toFixed(2)}万</div>
            </div>
            <div className="p-4 rounded-xl bg-secondary border border-border/30">
              <div className="text-xs text-muted-foreground mb-1">部门人数</div>
              <div className="text-2xl font-bold">{data.headcount}人</div>
            </div>
            <div className="p-4 rounded-xl bg-secondary border border-border/30">
              <div className="text-xs text-muted-foreground mb-1">人均产出</div>
              <div className="text-2xl font-bold text-gold-dark">{data.perCapita}万</div>
            </div>
            <div className="p-4 rounded-xl bg-secondary border border-border/30">
              <div className="text-xs text-muted-foreground mb-1">人均成本</div>
              <div className="text-2xl font-bold">{data.perCapitaCost}万</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-gold/5 border border-border/30">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">收支比（收入/成本）</span>
              <span className="text-lg font-bold text-primary">{((data.revenue / data.cost) * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      );
    }

    if (modalType === 'business') {
      const grouped = getProjectsByBusinessType(selectedYear);
      const businessData = businessTypeData.find(d => d.year === selectedYear);

      return (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{selectedYear}年业务结构</h3>
              <p className="text-sm text-muted-foreground">按业务类型分类的课题收入明细</p>
            </div>
          </div>

          {/* 业务类型汇总 */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {['项目管理', '课题咨询', '情报平台'].map(type => {
              const value = businessData?.[type as keyof typeof businessData] as number || 0;
              const total = businessData?.total || 1;
              const pct = ((value / total) * 100).toFixed(1);
              return (
                <div key={type} className="p-3 rounded-xl border border-border/30" style={{ backgroundColor: `${BUSINESS_COLORS[type as keyof typeof BUSINESS_COLORS]}10` }}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded" style={{ backgroundColor: BUSINESS_COLORS[type as keyof typeof BUSINESS_COLORS] }} />
                    <span className="text-xs font-medium">{type}</span>
                  </div>
                  <div className="text-lg font-bold">{value.toFixed(1)}万</div>
                  <div className="text-xs text-muted-foreground">{pct}%</div>
                </div>
              );
            })}
          </div>

          {/* 课题明细 */}
          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {Object.entries(grouped).map(([type, projects]) => (
              <div key={type}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: BUSINESS_COLORS[type as keyof typeof BUSINESS_COLORS] }} />
                  <span className="text-sm font-bold">{type}</span>
                  <span className="text-xs text-muted-foreground">({projects.length}个课题)</span>
                </div>
                <div className="space-y-2 pl-5">
                  {projects.map((p, i) => (
                    <div key={i} className="flex justify-between items-start p-3 rounded-lg bg-secondary/50 border border-border/30">
                      <div className="flex-1 pr-4">
                        <div className="text-sm font-medium line-clamp-2">{p.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{p.customer}</div>
                      </div>
                      <div className="text-sm font-bold text-gold-dark whitespace-nowrap">{p.amount}万</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (modalType === 'customer') {
      const grouped = getProjectsByCustomer(selectedYear);
      const customerData = customerSourceData.find(d => d.year === selectedYear);

      return (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-gold-dark" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{selectedYear}年客户结构</h3>
              <p className="text-sm text-muted-foreground">按客户来源分类的课题收入明细</p>
            </div>
          </div>

          {/* 客户来源汇总 */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            {['市发改委', '河套合作区', '外地政府', '区级政府', '企业客户'].map(source => {
              const value = customerData?.[source as keyof typeof customerData] as number || 0;
              const total = customerData?.total || 1;
              const pct = ((value / total) * 100).toFixed(1);
              return (
                <div key={source} className="p-2 rounded-lg border border-border/30 text-center" style={{ backgroundColor: `${CUSTOMER_COLORS[source as keyof typeof CUSTOMER_COLORS]}10` }}>
                  <div className="w-3 h-3 rounded mx-auto mb-1" style={{ backgroundColor: CUSTOMER_COLORS[source as keyof typeof CUSTOMER_COLORS] }} />
                  <div className="text-[10px] font-medium truncate">{source}</div>
                  <div className="text-sm font-bold">{value > 0 ? `${value.toFixed(0)}万` : '-'}</div>
                  <div className="text-[10px] text-muted-foreground">{value > 0 ? `${pct}%` : ''}</div>
                </div>
              );
            })}
          </div>

          {/* 课题明细 */}
          <div className="space-y-4 max-h-[300px] overflow-y-auto">
            {Object.entries(grouped).map(([source, projects]) => (
              <div key={source}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: CUSTOMER_COLORS[source as keyof typeof CUSTOMER_COLORS] }} />
                  <span className="text-sm font-bold">{source}</span>
                  <span className="text-xs text-muted-foreground">({projects.length}个课题)</span>
                </div>
                <div className="space-y-2 pl-5">
                  {projects.map((p, i) => (
                    <div key={i} className="flex justify-between items-start p-3 rounded-lg bg-secondary/50 border border-border/30">
                      <div className="flex-1 pr-4">
                        <div className="text-sm font-medium line-clamp-2">{p.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{p.type}</div>
                      </div>
                      <div className="text-sm font-bold text-gold-dark whitespace-nowrap">{p.amount}万</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-primary/8 to-transparent rounded-full blur-[120px] -top-40 -right-40 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-gold/6 to-transparent rounded-full blur-[100px] bottom-20 -left-40 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-primary/30 to-transparent" />
      <div className="absolute top-24 left-10 w-20 h-px bg-gradient-to-r from-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题区 */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span className="text-sm font-medium text-gold-dark">四年蜕变</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              业务<span className="text-gradient-gold">转型历程</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              从"项目依赖型"到"产品驱动型"，从"大客户依赖"到"多元化客户"
            </p>
          </div>
        </ScrollReveal>

        {/* 转型亮点卡片 */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {transformationHighlights.map((item, i) => (
              <div key={i} className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-gold/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 right-0 w-20 h-20 ${item.trend === 'up' ? 'bg-gold/5' : 'bg-accent/5'} rounded-full blur-2xl`} />
                <div className="relative">
                  <div className="text-xs text-muted-foreground mb-2">{item.title}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-medium text-muted-foreground line-through decoration-muted-foreground/30">{item.from}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className={`text-2xl font-black ${item.color}`}>{item.to}</span>
                  </div>
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${item.trend === 'up' ? 'bg-gold/10 text-gold-dark' : 'bg-accent/10 text-accent'}`}>
                    <ArrowUpRight className={`w-3 h-3 ${item.trend === 'down' ? 'rotate-90' : ''}`} />
                    {item.change}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 第一行：经营趋势 + 能力雷达 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* 经营趋势折线图 - 可点击 */}
          <ScrollReveal delay={150} className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 glow-primary h-full">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">经营数据总览</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">点击柱状区域查看年度详情</p>
                </div>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gold"></div>收入</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary/50"></div>成本</div>
                  <div className="flex items-center gap-2"><div className="w-6 h-[2px] bg-accent" style={{ borderStyle: 'dashed' }}></div>人均</div>
                </div>
              </div>
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={yearlyTrendData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    onClick={(e) => {
                      if (e && e.activeLabel) {
                        openModal('overview', e.activeLabel);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} dy={10} />
                    <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--accent))" tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)'
                      }}
                      formatter={(value: number, name: string) => [`${value.toFixed(1)}${name === '人均产出' ? '万/人' : '万'}`, name]}
                    />
                    <Line yAxisId="left" type="monotone" dataKey="revenue" name="总收入" stroke="hsl(45, 90%, 55%)" strokeWidth={4} dot={{ r: 6, fill: "hsl(45, 90%, 55%)", strokeWidth: 3, stroke: "#fff" }} activeDot={{ r: 9 }} />
                    <Line yAxisId="left" type="monotone" dataKey="cost" name="总成本" stroke="hsl(var(--primary))" strokeOpacity={0.5} strokeWidth={3} dot={{ r: 4, fill: "hsl(var(--primary))", strokeOpacity: 0.5 }} />
                    <Line yAxisId="right" type="monotone" dataKey="perCapita" name="人均产出" stroke="hsl(var(--accent))" strokeWidth={3} strokeDasharray="8 4" dot={{ r: 4, fill: "hsl(var(--accent))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollReveal>

          {/* 核心能力雷达 */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 glow-gold h-full flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-gold-dark" />
                <h3 className="text-xl font-bold">核心能力模型</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">六维能力评估体系</p>
              <div className="flex-grow min-h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={capabilityData}>
                    <PolarGrid stroke="hsl(var(--border))" strokeDasharray="4 4" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                    <Radar name="能力值" dataKey="A" stroke="hsl(45, 90%, 55%)" strokeWidth={3} fill="hsl(45, 90%, 55%)" fillOpacity={0.35} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                <span className="text-gold font-bold">AI落地</span>与<span className="text-gold font-bold">数据分析</span>能力突出
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 第二行：业务结构 + 客户来源 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 业务结构转型图 - 可点击 */}
          <ScrollReveal delay={250}>
            <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 glow-primary h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold">业务结构转型</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">点击柱状图查看课题明细</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-bold border border-gold/20">99% → 9%</div>
              </div>

              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={businessTypeData}
                    margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                    onClick={(e) => {
                      if (e && e.activeLabel) {
                        openModal('business', e.activeLabel);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: '12px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)' }} formatter={(value: number) => [`${value.toFixed(1)}万`, '']} />
                    <Bar dataKey="项目管理" stackId="a" fill={BUSINESS_COLORS.项目管理} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="课题咨询" stackId="a" fill={BUSINESS_COLORS.课题咨询} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="情报平台" stackId="a" fill={BUSINESS_COLORS.情报平台} radius={[4, 4, 0, 0]}>
                      <LabelList dataKey="total" position="top" formatter={(value: number) => `${value.toFixed(0)}万`} style={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))', fontWeight: 600 }} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-center gap-5 mt-4 pt-4 border-t border-border/30">
                {Object.entries(BUSINESS_COLORS).map(([name, color]) => (
                  <div key={name} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: color }} />
                    <span className="text-muted-foreground font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 客户来源多元化图 - 可点击 */}
          <ScrollReveal delay={300}>
            <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 glow-gold h-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-gold-dark" />
                    <h3 className="text-xl font-bold">客户来源多元化</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">点击柱状图查看课题明细</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">0.8% → 52%</div>
              </div>

              <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={customerSourceData}
                    margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                    onClick={(e) => {
                      if (e && e.activeLabel) {
                        openModal('customer', e.activeLabel);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: '12px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)' }} formatter={(value: number) => [`${value.toFixed(1)}万`, '']} />
                    <Bar dataKey="市发改委" stackId="a" fill={CUSTOMER_COLORS.市发改委} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="河套合作区" stackId="a" fill={CUSTOMER_COLORS.河套合作区} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="外地政府" stackId="a" fill={CUSTOMER_COLORS.外地政府} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="区级政府" stackId="a" fill={CUSTOMER_COLORS.区级政府} radius={[0, 0, 0, 0]} />
                    <Bar dataKey="企业客户" stackId="a" fill={CUSTOMER_COLORS.企业客户} radius={[4, 4, 0, 0]}>
                      <LabelList dataKey="total" position="top" formatter={(value: number) => `${value.toFixed(0)}万`} style={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))', fontWeight: 600 }} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-border/30">
                {Object.entries(CUSTOMER_COLORS).map(([name, color]) => (
                  <div key={name} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: color }} />
                    <span className="text-muted-foreground font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 底部总结 */}
        <ScrollReveal delay={350}>
          <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-gold/8 to-accent/5 border border-gold/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gold-dark" />
                </div>
                <h3 className="text-xl font-bold">四年转型成果</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-card/80 border border-border/30">
                  <div className="text-3xl font-black text-primary mb-2">99% → 9%</div>
                  <div className="text-sm font-medium mb-1">项目管理占比骤降</div>
                  <div className="text-xs text-muted-foreground">从"卖人天"转向"卖产品"</div>
                </div>
                <div className="p-5 rounded-2xl bg-card/80 border border-border/30">
                  <div className="text-3xl font-black text-gold-dark mb-2">0% → 58%</div>
                  <div className="text-sm font-medium mb-1">情报平台成为主营</div>
                  <div className="text-xs text-muted-foreground">产品化收入占据主导</div>
                </div>
                <div className="p-5 rounded-2xl bg-card/80 border border-border/30">
                  <div className="text-3xl font-black text-accent mb-2">0.8% → 52%</div>
                  <div className="text-sm font-medium mb-1">企业客户成为主力</div>
                  <div className="text-xs text-muted-foreground">市场化程度大幅提升</div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/30 text-center">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">业务韧性显著增强：</span>
                  收入来源多元化，客户结构优化，从"大客户依赖"转向"多元化健康结构" 💪
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 模态框 */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 遮罩层 */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />

          {/* 模态框内容 */}
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card rounded-3xl border border-border shadow-2xl">
            {/* 关闭按钮 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 年份切换 */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border/50 p-4 flex justify-center gap-2 z-[5]">
              {['2022', '2023', '2024', '2025'].map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedYear === year
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary hover:bg-secondary/80'
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* 模态框主体内容 */}
            <div className="p-6">
              {renderModalContent()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ChartSection;
