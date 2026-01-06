import { Brain, Globe, LineChart, Cpu, FileText, Network, ImageIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const businesses = [
  {
    icon: FileText,
    title: "智库咨询",
    subtitle: "AI赋能的新型智库",
    description: "以《河套深港科技创新合作区创新体系建设综合咨询研究课题》为典型代表，利用AI大模型全过程赋能，实现小团队高效率大产出。作为首个大型咨询项目AI全过程赋能的典型案例，已在内部做专题分享，代表智库咨询服务的进化升级。",
    highlights: ["AI全流程赋能", "小团队大产出", "内部专题分享"],
    color: "from-primary to-primary/60",
    iconBg: "bg-primary/15",
    borderColor: "border-primary/30",
    image: null,
  },
  {
    icon: Globe,
    title: "信息平台交付",
    subtitle: "招商系统与数据平台",
    description: "构建现代化招商引资系统，整合产业数据资源，打造一站式数字化招商服务平台。",
    highlights: ["招商管理系统", "产业数据平台", "智能匹配引擎"],
    color: "from-accent to-accent/60",
    iconBg: "bg-accent/15",
    borderColor: "border-accent/30",
    image: null,
  },
  {
    icon: Brain,
    title: "AI创新应用",
    subtitle: "大模型场景化落地",
    description: "深耕AI技术应用场景，开发产业链图谱、智能PPT、思维导图等创新工具，赋能政务工作效率提升。",
    highlights: ["AI画产业链图谱", "AI智能PPT生成", "AI思维导图绘制"],
    color: "from-gold to-gold-light",
    iconBg: "bg-gold/15",
    borderColor: "border-gold/30",
    image: null,
  },
];

const techStack = [
  { icon: Cpu, label: "大模型技术" },
  { icon: Network, label: "知识图谱" },
  { icon: LineChart, label: "数据可视化" },
];

const BusinessSection = () => {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-particles opacity-60" />
      
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
              <div className={`group h-full p-8 rounded-3xl bg-gradient-card border ${business.borderColor} hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
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

                {/* 图片占位区域 */}
                {business.image ? (
                  <img 
                    src={business.image} 
                    alt={business.title}
                    className="w-full h-32 object-cover rounded-xl mb-6"
                  />
                ) : (
                  <div className="image-placeholder h-32 mb-6 text-xs rounded-xl">
                    <div className="text-center">
                      <ImageIcon className="w-6 h-6 mx-auto mb-1 text-primary/40" />
                      <p>添加业务图片</p>
                    </div>
                  </div>
                )}
                
                {/* 亮点标签 */}
                <div className="flex flex-wrap gap-2">
                  {business.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border/50"
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
          <div className="flex flex-wrap justify-center items-center gap-8 p-6 rounded-2xl bg-background/80 border border-border/30 shadow-sm">
            <span className="text-muted-foreground text-sm">技术支撑</span>
            <div className="h-6 w-px bg-border hidden sm:block" />
            {techStack.map((tech) => (
              <div key={tech.label} className="flex items-center gap-2 text-foreground">
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
