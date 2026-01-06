import { Calendar, Flag, Rocket, Award, TrendingUp, ImageIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

// 时间轴数据
const timelineEvents = [
  {
    quarter: "Q1",
    period: "1月 - 3月",
    title: "战略规划与团队整合",
    description: "完成《创新发展部2025年度战略规划》，确立了AI+咨询、数字平台、前沿探索三驾马车并行的发展战略。整合内外部资源，充分调研市场需求，从零开始启动项目研发。",
    achievements: ["年度战略规划发布", "核心团队组建完成", "首个AI咨询项目启动"],
    icon: Flag,
    color: "bg-primary",
    image: null,
  },
  {
    quarter: "Q2",
    period: "4月 - 6月",
    title: "产品研发与技术攻关",
    description: "金融大模型产品完成核心算法备案，进入封闭测试阶段。自主研发的'产业链智能图谱'工具V1.0内部上线，大幅提升产业分析效率，获得集团领导高度评价。",
    achievements: ["大模型算法备案", "产业链图谱V1.0", "技术攻关突破"],
    icon: Rocket,
    color: "bg-gold",
    image: null,
  },
  {
    quarter: "Q3",
    period: "7月 - 9月",
    title: "🏆 荣获AI大赛最佳应用奖",
    description: "凭借'基于大模型的产业链图谱生成'项目，在2025深圳市人工智能应用创新大赛中脱颖而出，荣获'最佳应用奖'。",
    achievements: ["市级AI大赛获奖", "季度交付新高", "行业影响力提升"],
    icon: Award,
    color: "bg-accent",
    image: null,
  },
  {
    quarter: "Q4",
    period: "10月 - 12月",
    title: "成果收获与目标达成",
    description: "全年营收目标提前一个月达成，总营收突破990万元。河套深港科创咨询项目顺利通过中期验收，实现AI全流程赋能的标杆案例落地。PPT生成应用内部公测",
    achievements: ["营收目标提前达成", "河套项目验收", "AI产品内部发布"],
    icon: TrendingUp,
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
              关键<span className="text-gradient-gold">里程碑</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              一步一个脚印，回顾我们共同走过的2025
            </p>
          </div>
        </ScrollReveal>

        {/* 时间轴 */}
        <div className="relative">
          {/* 中间连接线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-accent hidden md:block opacity-50" />

          {timelineEvents.map((event, index) => (
            <ScrollReveal key={event.quarter} delay={index * 150}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                {/* 内容卡片 */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`p-8 rounded-[2rem] bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? 'md:ml-auto' : ''
                    } max-w-lg group`}>

                    {/* 头部：季度与时间 */}
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className={`px-3 py-1 rounded-lg ${event.color} text-white text-xs font-bold shadow-md`}>
                        {event.quarter}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">{event.period}</span>
                    </div>

                    {/* 标题 */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>

                    {/* 描述 */}
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    {/* 成果标签 */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {event.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/50 text-foreground border border-border/50"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 中间节点 */}
                <div className="hidden md:flex items-start justify-center pt-2">
                  <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center shadow-lg relative z-10 ring-4 ring-card`}>
                    <event.icon className="w-5 h-5 text-white" />
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
          <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-b from-secondary/30 to-card border border-primary/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-accent" />
            <p className="text-2xl font-bold mb-3">
              <span className="text-gradient-gold">2025</span> 年度征程圆满收官
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              这一年，我们从战略规划起步，在技术攻关中突破，用创新产品赢得荣誉，最终超额完成既定目标。每一次微小的进步，都汇聚成推动公司向前发展的磅礴力量。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TimelineSection;
