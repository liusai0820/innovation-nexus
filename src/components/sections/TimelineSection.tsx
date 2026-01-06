import { Calendar, Flag, Rocket, Award, TrendingUp, ImageIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// 时间轴数据（可替换为真实数据）
const timelineEvents = [
  {
    quarter: "Q1",
    period: "1月 - 3月",
    title: "战略规划与团队整合",
    description: "完成年度战略规划制定，整合团队资源，明确三大业务发展方向。",
    achievements: ["年度目标制定", "团队架构优化", "业务方向确定"],
    icon: Flag,
    color: "bg-primary",
    image: null, // 可替换为实际图片路径
  },
  {
    quarter: "Q2",
    period: "4月 - 6月",
    title: "产品研发与技术攻关",
    description: "金融大模型产品进入核心开发阶段，AI工具完成技术原型验证。",
    achievements: ["大模型产品立项", "AI工具原型开发", "技术方案论证"],
    icon: Rocket,
    color: "bg-gold",
    image: null,
  },
  {
    quarter: "Q3",
    period: "7月 - 9月",
    title: "产品落地与市场拓展",
    description: "产品1.0版本发布上线，工互平台完成规范化运营转型，开展外部合作。",
    achievements: ["产品1.0上线", "平台运营转型", "联创合作启动"],
    icon: TrendingUp,
    color: "bg-accent",
    image: null,
  },
  {
    quarter: "Q4",
    period: "10月 - 12月",
    title: "成果收获与目标达成",
    description: "全年收入目标超额完成，AI应用获得客户好评，团队能力显著提升。",
    achievements: ["收入目标达成", "客户好评反馈", "年度总结汇报"],
    icon: Award,
    color: "bg-primary",
    image: null,
  },
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">2025年度历程</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              季度<span className="text-gradient-gold">里程碑</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              回顾2025年各季度重要节点和关键事件
            </p>
          </div>
        </ScrollReveal>

        {/* 时间轴 */}
        <div className="relative">
          {/* 中间连接线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-accent hidden md:block" />
          
          {timelineEvents.map((event, index) => (
            <ScrollReveal key={event.quarter} delay={index * 150}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* 内容卡片 */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`p-6 rounded-3xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  } max-w-md`}>
                    {/* 季度标签 */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${event.color} text-primary-foreground text-sm font-bold mb-4`}>
                      {event.quarter}
                    </div>
                    
                    {/* 时间段 */}
                    <p className="text-sm text-muted-foreground mb-2">{event.period}</p>
                    
                    {/* 标题 */}
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    
                    {/* 描述 */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* 图片占位区域 */}
                    {event.image ? (
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-32 object-cover rounded-xl mb-4"
                      />
                    ) : (
                      <div className="image-placeholder h-32 mb-4 text-xs">
                        <div className="text-center">
                          <ImageIcon className="w-6 h-6 mx-auto mb-1 text-primary/50" />
                          <p>添加季度图片</p>
                        </div>
                      </div>
                    )}
                    
                    {/* 成果标签 */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {event.achievements.map((achievement, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 text-xs rounded-lg bg-secondary text-secondary-foreground"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 中间节点 */}
                <div className="hidden md:flex items-start justify-center">
                  <div className={`w-14 h-14 rounded-full ${event.color} flex items-center justify-center shadow-lg relative z-10`}>
                    <event.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                {/* 占位 */}
                <div className="flex-1 hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 底部总结 */}
        <ScrollReveal delay={700}>
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-gold/10 to-accent/10 border border-primary/20 text-center">
            <p className="text-lg font-medium mb-2">
              <span className="text-gradient-gold">2025</span> 年度征程圆满收官
            </p>
            <p className="text-muted-foreground">
              从战略规划到成果落地，一步一个脚印，扎实推进创新发展
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TimelineSection;
