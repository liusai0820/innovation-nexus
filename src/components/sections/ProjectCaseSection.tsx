import { ExternalLink, ImageIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// 项目案例数据
const projects = [
  {
    id: 1,
    title: "金融业务大模型产品",
    category: "AI创新应用",
    description: "基于大语言模型技术，开发面向金融业务场景的智能分析产品，实现投资决策辅助、风险评估等核心功能。",
    highlights: ["产品1.0版本上线", "多家机构联创合作", "核心功能模块完成开发"],
    image: "/shenzhen_presentation.png",
    color: "border-primary",
  },
  {
    id: 2,
    title: "AI产业链图谱工具",
    category: "AI创新应用",
    description: "运用知识图谱与大模型技术，自动生成产业链可视化图谱，助力产业研究与招商分析。",
    highlights: ["智能图谱生成", "支持多种产业领域", "获得客户好评"],
    image: "/ai_industry_map.png",
    color: "border-gold",
    link: "https://diki.gwy.life",
  },
  {
    id: 3,
    title: "工业互联网平台运营",
    category: "平台运营",
    description: "承接工业互联网平台运营服务，完成探索期向规范化运营期过渡，建立KPI指标体系。",
    highlights: ["签订年度运营协议", "建立KPI指标体系", "业务协同落地"],
    image: "/shenzhen_factory.png",
    color: "border-accent",
  },
  {
    id: 4,
    title: "AI智能PPT生成工具",
    category: "AI创新应用",
    description: "基于AI技术自动生成专业PPT，提升政务报告与汇报材料制作效率，已在内部试用推广。",
    highlights: ["一键生成PPT", "模板智能匹配", "内部试用推广中"],
    image: "/ai_ppt_tool.png",
    color: "border-primary",
    link: "https://ppt.gwy.life",
  },
];

const ProjectCaseSection = () => {
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
              2024年度完成的核心项目成果展示
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className={`group h-full rounded-[2rem] bg-gradient-card border-2 ${project.color} hover:shadow-2xl hover:bg-card/80 transition-all duration-500 overflow-hidden flex flex-col`}>
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
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
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

                  {/* 查看详情（可扩展） */}
                  {/* 查看详情（可扩展） */}
                  <button
                    onClick={() => project.link && window.open(project.link, '_blank')}
                    className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors mt-auto cursor-pointer"
                  >
                    <span>了解更多</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 添加更多提示 */}
        <ScrollReveal delay={500}>
          <div className="mt-16 p-8 rounded-[2rem] bg-secondary/30 border border-dashed border-primary/20 text-center hover:bg-secondary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ImageIcon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground font-medium">
              查看全部项目案例
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectCaseSection;
