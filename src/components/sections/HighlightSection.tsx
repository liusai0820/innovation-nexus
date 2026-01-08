import { TrendingUp, Users, Zap, Target } from "lucide-react";
import AnimatedNumber from "../AnimatedNumber";
import ScrollReveal from "../ScrollReveal";

const highlights = [
  {
    icon: TrendingUp,
    label: "年度收入",
    value: 1050.2,
    suffix: "万",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
  {
    icon: Target,
    label: "年度成本",
    value: 611.94,
    suffix: "万",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
  },
  {
    icon: Zap,
    label: "年度利润",
    value: 438.26,
    suffix: "万",
    color: "text-gold-dark",
    bgColor: "bg-gold/10",
    borderColor: "border-gold/30",
  },
  {
    icon: Users,
    label: "利润率",
    value: 41.7,
    suffix: "%",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
];

const HighlightSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              年度<span className="text-gradient-primary">业绩亮点</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              践行创新驱动发展战略，实现业绩稳健增长
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 100}>
              <div className={`group relative p-6 rounded-2xl bg-gradient-card border ${item.borderColor} hover:shadow-lg transition-all duration-300`}>
                {/* 图标 */}
                <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>

                {/* 数值 */}
                <div className={`text-4xl font-bold mb-2 ${item.color}`}>
                  <AnimatedNumber
                    value={item.value}
                    decimals={item.suffix === "%" ? 1 : 2}
                    suffix={item.suffix}
                    duration={2500}
                  />
                </div>

                {/* 标签 */}
                <div className="text-muted-foreground">{item.label}</div>

                {/* 装饰线 */}
                <div className={`absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 补充说明 */}
        <ScrollReveal delay={500}>
          <div className="mt-12 p-6 rounded-2xl bg-card border border-border/50 text-center shadow-sm">
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">收支健康度达标</span> ·
              部门收入/成本比值 = <span className="text-gradient-gold font-bold">171.6%</span>，
              超额完成盈亏平衡目标
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HighlightSection;
