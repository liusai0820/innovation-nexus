import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import ScrollReveal from "../ScrollReveal";

// 年度收入增长趋势数据（可替换为真实数据）
const yearlyData = [
  { year: "2021", revenue: 520, cost: 380 },
  { year: "2022", revenue: 680, cost: 450 },
  { year: "2023", revenue: 820, cost: 530 },
  { year: "2024", revenue: 990.75, cost: 611.94 },
];

// 业务收入构成数据（可替换为真实数据）
const revenueComposition = [
  { name: "智库咨询", value: 420, color: "hsl(36, 80%, 50%)" },
  { name: "信息平台交付", value: 350, color: "hsl(30, 70%, 45%)" },
  { name: "AI创新应用", value: 220.75, color: "hsl(45, 90%, 55%)" },
];

const ChartSection = () => {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              数据<span className="text-gradient-gold">可视化分析</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              业务发展态势良好，收入结构持续优化
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 年度增长趋势柱状图 */}
          <ScrollReveal delay={100}>
            <div className="p-6 rounded-3xl bg-gradient-card border border-border/50 glow-primary">
              <h3 className="text-xl font-bold mb-6 text-center">年度收入增长趋势</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 20%, 85%)" />
                    <XAxis 
                      dataKey="year" 
                      stroke="hsl(30, 10%, 45%)"
                      tick={{ fill: 'hsl(30, 10%, 45%)' }}
                    />
                    <YAxis 
                      stroke="hsl(30, 10%, 45%)"
                      tick={{ fill: 'hsl(30, 10%, 45%)' }}
                      tickFormatter={(value) => `${value}万`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(40, 30%, 98%)',
                        border: '1px solid hsl(35, 20%, 85%)',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }}
                      formatter={(value: number) => [`${value}万`, '']}
                    />
                    <Legend />
                    <Bar 
                      dataKey="revenue" 
                      name="收入" 
                      fill="hsl(36, 80%, 50%)" 
                      radius={[8, 8, 0, 0]}
                    />
                    <Bar 
                      dataKey="cost" 
                      name="成本" 
                      fill="hsl(30, 70%, 45%)" 
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                年均增长率约 <span className="text-primary font-semibold">25%</span>，持续稳健发展
              </p>
            </div>
          </ScrollReveal>

          {/* 业务收入构成饼图 */}
          <ScrollReveal delay={200}>
            <div className="p-6 rounded-3xl bg-gradient-card border border-border/50 glow-gold">
              <h3 className="text-xl font-bold mb-6 text-center">业务收入构成</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueComposition}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={{ stroke: 'hsl(30, 10%, 45%)' }}
                    >
                      {revenueComposition.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(40, 30%, 98%)',
                        border: '1px solid hsl(35, 20%, 85%)',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }}
                      formatter={(value: number) => [`${value}万`, '收入']}
                    />
                    <Legend 
                      verticalAlign="bottom"
                      formatter={(value) => <span style={{ color: 'hsl(30, 15%, 15%)' }}>{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                三大业务板块协同发展，AI创新应用占比持续提升
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 数据说明 */}
        <ScrollReveal delay={400}>
          <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              💡 <span className="text-foreground">提示：</span>以上数据为示例数据，请根据实际情况替换
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ChartSection;
