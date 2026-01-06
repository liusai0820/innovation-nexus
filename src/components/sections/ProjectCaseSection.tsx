import { ExternalLink, ImageIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// 项目案例数据（可替换为真实数据）
const projects = [
  {
    id: 1,
    title: "金融业务大模型产品",
    category: "AI创新应用",
    description: "基于大语言模型技术，开发面向金融业务场景的智能分析产品，实现投资决策辅助、风险评估等核心功能。",
    highlights: ["产品1.0版本上线", "多家机构联创合作", "核心功能模块完成开发"],
    image: null, // 可替换为实际图片路径
    color: "border-primary",
  },
  {
    id: 2,
    title: "AI产业链图谱工具",
    category: "AI创新应用",
    description: "运用知识图谱与大模型技术，自动生成产业链可视化图谱，助力产业研究与招商分析。",
    highlights: ["智能图谱生成", "支持多种产业领域", "获得客户好评"],
    image: null,
    color: "border-gold",
  },
  {
    id: 3,
    title: "工业互联网平台运营",
    category: "平台运营",
    description: "承接工业互联网平台运营服务，完成探索期向规范化运营期过渡，建立KPI指标体系。",
    highlights: ["签订年度运营协议", "建立KPI指标体系", "业务协同落地"],
    image: null,
    color: "border-accent",
  },
  {
    id: 4,
    title: "AI智能PPT生成工具",
    category: "AI创新应用",
    description: "基于AI技术自动生成专业PPT，提升政务报告与汇报材料制作效率，已在内部试用推广。",
    highlights: ["一键生成PPT", "模板智能匹配", "内部试用推广中"],
    image: null,
    color: "border-primary",
  },
];

const ProjectCaseSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-particles opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              重点<span className="text-gradient-primary">项目案例</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              2024年度完成的核心项目成果展示
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className={`group h-full rounded-3xl bg-gradient-card border-2 ${project.color} hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                {/* 图片区域 */}
                <div className="relative">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="image-placeholder h-48 m-4 rounded-xl">
                      <div className="text-center">
                        <ImageIcon className="w-12 h-12 mx-auto mb-2 text-primary/50" />
                        <p className="text-sm">点击上传项目图片</p>
                        <p className="text-xs mt-1">建议尺寸: 800x400</p>
                      </div>
                    </div>
                  )}
                  {/* 分类标签 */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground">
                    {project.category}
                  </div>
                </div>
                
                {/* 内容区域 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* 亮点 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* 查看详情（可扩展） */}
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors">
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
          <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-dashed border-primary/30 text-center">
            <ImageIcon className="w-8 h-8 mx-auto mb-3 text-primary/50" />
            <p className="text-muted-foreground">
              可在此处添加更多项目案例，支持上传项目截图、成果展示等图片素材
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectCaseSection;
