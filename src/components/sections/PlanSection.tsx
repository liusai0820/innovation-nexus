import { Rocket, Target, TrendingUp, Users, Lightbulb, Building } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const plans = [
  {
    icon: Rocket,
    title: "产品商业化落地",
    description: "推动金融大模型产品向核心客户推介，实现商业化落地，形成稳定收入来源",
    priority: "核心目标",
    color: "text-primary",
    priorityBg: "bg-primary/15 text-primary",
  },
  {
    icon: Building,
    title: "内部推广应用",
    description: "在公司内部大力推广AI创新工具，提升整体工作效率，树立创新标杆",
    priority: "重点任务",
    color: "text-accent",
    priorityBg: "bg-accent/15 text-accent",
  },
  {
    icon: TrendingUp,
    title: "外部市场拓展",
    description: "面向政府和企业客户推广AI应用服务，扩大市场影响力，创造新增收入",
    priority: "增长引擎",
    color: "text-gold-dark",
    priorityBg: "bg-gold/15 text-gold-dark",
  },
  {
    icon: Target,
    title: "工互平台深化运营",
    description: "持续优化工业互联网平台运营，推进子基金落地，实现业务协同效益最大化",
    priority: "持续推进",
    color: "text-primary",
    priorityBg: "bg-primary/15 text-primary",
  },
  {
    icon: Users,
    title: "团队能力建设",
    description: "强化AI技术能力培训，打造复合型创新人才队伍，提升团队整体竞争力",
    priority: "基础保障",
    color: "text-accent",
    priorityBg: "bg-accent/15 text-accent",
  },
  {
    icon: Lightbulb,
    title: "创新业务探索",
    description: "持续关注前沿技术趋势，探索更多AI应用场景，为未来发展储备新动能",
    priority: "战略储备",
    color: "text-gold-dark",
    priorityBg: "bg-gold/15 text-gold-dark",
  },
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <span className="text-gold-dark text-sm font-medium">2026年度展望</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              创新应用<span className="text-gradient-gold">落地推广</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              大力推进创新应用的落地，在公司内部和外部推广使用并产生收入，
              <br />
              以创新成果驱动业务高质量发展
            </p>
          </div>
        </ScrollReveal>

        {/* 计划卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.title} delay={index * 100}>
              <div className="group h-full p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* 优先级标签 */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${plan.priorityBg}`}>
                  {plan.priority}
                </div>
                
                {/* 图标与标题 */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <plan.icon className={`w-6 h-6 ${plan.color}`} />
                  </div>
                  <h3 className="text-lg font-bold">{plan.title}</h3>
                </div>
                
                {/* 描述 */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 核心目标 */}
        <ScrollReveal delay={700}>
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-gold/10 to-accent/10 border border-primary/20 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">2026年度核心目标</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-gradient-primary mb-2">产品落地</div>
                  <p className="text-muted-foreground text-sm">金融大模型商业化</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gradient-gold mb-2">内外推广</div>
                  <p className="text-muted-foreground text-sm">AI应用全面铺开</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gradient-primary mb-2">收入增长</div>
                  <p className="text-muted-foreground text-sm">创新业务创收</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PlanSection;
