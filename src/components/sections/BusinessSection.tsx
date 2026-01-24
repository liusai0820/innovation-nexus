import { Brain, Globe, LineChart, Cpu, FileText, Network, ImageIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const businesses = [
  {
    icon: FileText,
    title: "智库咨询转型",
    subtitle: "AI赋能的新型智库",
    description: "以河套创新体系咨询课题为代表，利用AI大模型全过程赋能，实现小团队高效率大产出，代表智库咨询服务的进化升级。",
    highlights: ["AI全流程赋能", "小团队大产出", "内部专题分享"],
    color: "from-primary to-primary/60",
    iconBg: "bg-primary/15",
    borderColor: "border-primary/30",
    image: "/image_1_consulting.png",
  },
  {
    icon: Globe,
    title: "平台运营落地",
    subtitle: "招商系统与数据平台",
    description: "构建现代化招商引资系统，整合产业数据资源，打造一站式数字化招商服务平台。通过数据驱动，精准匹配企业需求与园区资源，提升招商引资效率。",
    highlights: ["招商管理系统", "产业数据平台", "智能匹配引擎"],
    color: "from-accent to-accent/60",
    iconBg: "bg-accent/15",
    borderColor: "border-accent/30",
    image: "/image_2_platform.png",
  },
  {
    icon: Brain,
    title: "创新应用开发",
    subtitle: "大模型解决方案落地",
    description: "深耕AI技术应用场景，开发产业链图谱、智能PPT、思维导图等创新工具，赋能政务工作效率提升。将前沿技术转化为实际生产力。",
    highlights: ["AI画产业链图谱", "AI智能PPT生成", "AI思维导图绘制"],
    color: "from-gold to-gold-light",
    iconBg: "bg-gold/15",
    borderColor: "border-gold/30",
    image: "/image_3_innovation.png",
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
      <div className="absolute inset-0 bg-particles opacity-30" />
      <div className="absolute w-full h-[500px] bg-gradient-to-b from-background to-card opacity-50 top-0 left-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              三大<span className="text-gradient-primary">核心业务</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              传统智库与创新技术深度融合，构建差异化竞争优势
            </p>
          </div>
        </ScrollReveal>

        {/* 业务卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {businesses.map((business, index) => (
            <ScrollReveal key={business.title} delay={index * 150}>
              <div className={`group h-full p-6 rounded-[2rem] bg-gradient-to-b from-card/80 to-card border border-border/50 hover:border-${business.borderColor} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col`}>

                {/* 图片区域 */}
                <div className="relative mb-6 overflow-hidden rounded-2xl h-48 w-full shadow-lg">
                  {business.image ? (
                    <img
                      src={business.image}
                      alt={business.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                      <ImageIcon className="w-10 h-10 text-muted-foreground/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                  {/* 图标悬浮在图片上 */}
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl ${business.iconBg} backdrop-blur-md flex items-center justify-center border border-white/10`}>
                    <business.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                {/* 内容 */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-1">{business.title}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{business.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-4">
                    {business.description}
                  </p>
                </div>

                {/* 亮点标签 */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/30">
                  {business.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-secondary-foreground"
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
          <div className="flex flex-wrap justify-center items-center gap-8 p-6 rounded-2xl bg-secondary/30 border border-border/30 backdrop-blur-sm mx-auto max-w-3xl">
            <span className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">Powered By</span>
            <div className="h-4 w-px bg-border hidden sm:block" />
            {techStack.map((tech) => (
              <div key={tech.label} className="flex items-center gap-2 text-foreground group">
                <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{tech.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BusinessSection;
