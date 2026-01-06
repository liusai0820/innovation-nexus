import { Brain, Globe, LineChart, Cpu, FileText, Network } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const businesses = [
  {
    icon: FileText,
    title: "智库咨询",
    subtitle: "产业研究与政策咨询",
    description: "为政府提供高质量的产业研究报告、政策建议与发展规划，助力区域经济高质量发展。",
    highlights: ["产业规划研究", "政策效果评估", "投资决策支持"],
    color: "from-primary to-primary/60",
    iconBg: "bg-primary/20",
  },
  {
    icon: Globe,
    title: "信息平台交付",
    subtitle: "招商系统与数据平台",
    description: "构建现代化招商引资系统，整合产业数据资源，打造一站式数字化招商服务平台。",
    highlights: ["招商管理系统", "产业数据平台", "智能匹配引擎"],
    color: "from-accent to-accent/60",
    iconBg: "bg-accent/20",
  },
  {
    icon: Brain,
    title: "AI创新应用",
    subtitle: "大模型场景化落地",
    description: "深耕AI技术应用场景，开发产业链图谱、智能PPT、思维导图等创新工具，赋能政务工作效率提升。",
    highlights: ["AI画产业链图谱", "AI智能PPT生成", "AI思维导图绘制"],
    color: "from-gold to-gold-light",
    iconBg: "bg-gold/20",
  },
];

const techStack = [
  { icon: Cpu, label: "大模型技术" },
  { icon: Network, label: "知识图谱" },
  { icon: LineChart, label: "数据可视化" },
];

const BusinessSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-particles opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              三大<span className="text-gradient-primary">核心业务</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              传统智库与创新技术深度融合，构建差异化竞争优势
            </p>
          </div>
        </ScrollReveal>

        {/* 业务卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {businesses.map((business, index) => (
            <ScrollReveal key={business.title} delay={index * 150}>
              <div className="group h-full p-8 rounded-3xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                {/* 顶部装饰 */}
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${business.color} mb-6 group-hover:w-24 transition-all duration-300`} />
                
                {/* 图标 */}
                <div className={`w-16 h-16 rounded-2xl ${business.iconBg} flex items-center justify-center mb-6`}>
                  <business.icon className="w-8 h-8 text-foreground" />
                </div>
                
                {/* 内容 */}
                <h3 className="text-2xl font-bold mb-2">{business.title}</h3>
                <p className="text-primary text-sm mb-4">{business.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {business.description}
                </p>
                
                {/* 亮点标签 */}
                <div className="flex flex-wrap gap-2">
                  {business.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border/50"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 技术支撑 */}
        <ScrollReveal delay={400}>
          <div className="flex flex-wrap justify-center items-center gap-8 p-6 rounded-2xl bg-card/50 border border-border/30">
            <span className="text-muted-foreground text-sm">技术支撑</span>
            <div className="h-6 w-px bg-border hidden sm:block" />
            {techStack.map((tech) => (
              <div key={tech.label} className="flex items-center gap-2 text-muted-foreground">
                <tech.icon className="w-5 h-5 text-primary" />
                <span className="text-sm">{tech.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BusinessSection;
