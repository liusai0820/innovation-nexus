import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, PolarAngleAxis, Radar, LineChart, Line } from "recharts";
import ScrollReveal from "../ScrollReveal";

// 年度经营趋势数据（真实数据）
// 2022: 收入572.2, 成本455.8, 人均57.2
// 2023: 收入824.2, 成本496.4, 人均74.9
// 2024: 收入1016.3, 成本667.9, 人均92.4
// 2025: 收入990.75, 成本611.94, 人均99.1
const yearlyTrendData = [
  { year: "2022", revenue: 572.2, cost: 455.8, perCapita: 57.2 },
  { year: "2023", revenue: 824.2, cost: 496.4, perCapita: 74.9 },
  { year: "2024", revenue: 1016.3, cost: 667.9, perCapita: 92.4 },
  { year: "2025", revenue: 990.75, cost: 611.94, perCapita: 99.1 },
];

// 团队核心能力雷达图
const capabilityData = [
  { subject: "AI技术落地", A: 95, fullMark: 100 },
  { subject: "行业洞察", A: 85, fullMark: 100 },
  { subject: "项目交付", A: 90, fullMark: 100 },
  { subject: "产品创新", A: 88, fullMark: 100 },
  { subject: "战略规划", A: 82, fullMark: 100 },
  { subject: "数据分析", A: 92, fullMark: 100 },
];

// 业务收入构成数据
const revenueComposition = [
  { name: "智库咨询", value: 420, color: "hsl(36, 85%, 55%)" },
  { name: "平台交付", value: 350, color: "hsl(30, 80%, 45%)" },
  { name: "AI应用", value: 220.75, color: "hsl(45, 90%, 65%)" },
];

const ChartSection = () => {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -top-20 -right-20 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px] bottom-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              年度<span className="text-gradient-gold">经营透视</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              近四年业务稳步增长，人效显著提升
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 四年经营趋势 (Line/Area Chart) */}
          <ScrollReveal delay={100} className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 glow-primary h-full">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-xl font-bold">2022-2025 经营数据趋势</h3>
                  <p className="text-sm text-muted-foreground mt-1">营收、成本与人效对比分析</p>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gold"></div>收入</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-primary/50"></div>成本</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-2 bg-accent h-[2px]"></div>人均产出</div>
                </div>
              </div>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearlyTrendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} dy={10} padding={{ left: 20, right: 20 }} />
                    <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--accent))" tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)'
                      }}
                    />
                    <Line yAxisId="left" type="monotone" dataKey="revenue" name="总收入" stroke="hsl(45, 90%, 55%)" strokeWidth={4} dot={{ r: 6, fill: "hsl(45, 90%, 55%)", strokeWidth: 2, stroke: "#fff" }} activeDot={{ r: 8 }} />
                    <Line yAxisId="left" type="monotone" dataKey="cost" name="总成本" stroke="hsl(var(--primary))" strokeOpacity={0.5} strokeWidth={3} dot={{ r: 4, fill: "hsl(var(--primary))", strokeOpacity: 0.5 }} />
                    <Line yAxisId="right" type="monotone" dataKey="perCapita" name="人均产出" stroke="hsl(var(--accent))" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, fill: "hsl(var(--accent))" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                收入从572万增至<span className="text-gold font-bold">991万</span>，人均产出翻倍至<span className="text-accent font-bold">99万</span>
              </p>
            </div>
          </ScrollReveal>

          {/* 核心能力雷达 (Radar Chart) */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 glow-gold h-full flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-center">团队核心能力模型</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">六维能力评估体系</p>
              <div className="flex-grow min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={capabilityData}>
                    <PolarGrid stroke="hsl(var(--border))" strokeDasharray="4 4" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                    <Radar
                      name="能力值"
                      dataKey="A"
                      stroke="hsl(45, 90%, 55%)"
                      strokeWidth={3}
                      fill="hsl(45, 90%, 55%)"
                      fillOpacity={0.4}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--popover))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                <span className="text-gold font-bold">AI技术落地</span> 与 <span className="text-gold font-bold">数据分析</span> 能力突出
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* 业务构成 (Donut Chart) */}
          <ScrollReveal delay={300}>
            <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 glow-primary h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6 text-center">2025业务收入构成</h3>
              <div className="h-[250px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueComposition}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {revenueComposition.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ borderRadius: '8px' }}
                      formatter={(value: number) => [`${value}万`, '收入']}
                    />
                  </PieChart>
                </ResponsiveContainer>
                {/* 中心文字 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-bold text-foreground">990.8</span>
                  <span className="text-xs text-muted-foreground">年度总收(万)</span>
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-6">
                {revenueComposition.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 关键指标卡片 */}
          <ScrollReveal delay={400} className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
              {[
                { label: "人均产值 (万)", value: "99.1", change: "+13%", desc: "同比去年增长", icon: "💪" },
                { label: "项目交付率", value: "100%", change: "+5%", desc: "按时交付达成", icon: "🚀" },
                { label: "客户满意度", value: "98.5", change: "+2.1", desc: "评分持续提升", icon: "💖" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-secondary/30 border border-border/50 flex flex-col justify-between items-center text-center hover:bg-secondary/50 transition-colors cursor-pointer group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl pointer-events-none grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <p className="text-muted-foreground text-sm mb-2">{item.label}</p>
                  <h4 className="text-5xl font-bold text-foreground mb-4 group-hover:scale-110 transition-transform duration-300 tracking-tight">{item.value}</h4>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                    {item.change} {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
