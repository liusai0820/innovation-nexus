import { CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const achievements = [
  {
    category: "大模型应用开发",
    items: [
      "完成金融业务场景大模型产品定义与需求调研",
      "完成产品1.0版本核心功能开发与部署",
      "与多家投资机构开展联创合作，持续迭代优化",
      "AI产业链图谱工具上线并获得客户好评",
      "🏆 AI产业链图谱荣获深圳市AI大赛最佳应用奖",
      "AI智能PPT生成工具实现内部试用推广",
    ],
    progress: 100,
    color: "bg-primary",
    borderColor: "border-primary/30",
  },
  {
    category: "工业互联网平台运营",
    items: [
      "🏆 争取3000万元运营资源，重大经营创效显著优化现金流",
      "🏆 入选工信部首批'重点培育中试平台'初步名单",
      "签订年度委托运营服务协议，建立权责利管理闭环",
      "主导编制平台整体战略规划与新业务模式创新方案",
      "推进组织架构优化与内部竞聘，激活人才效能",
      "推动工业互联网子基金方案编制，构建产业+资本双轮驱动",
    ],
    progress: 100,
    color: "bg-accent",
    borderColor: "border-accent/30",
  },
  {
    category: "经营业绩达成",
    items: [
      "年度收入1030.2万元，超额完成收入目标",
      "成本控制在631.25万元，成本管理良好",
      "实现利润398.95万元，利润率达38.7%",
      "收支比值163.2%，远超盈亏平衡线",
    ],
    progress: 100,
    color: "bg-gold",
    borderColor: "border-gold/30",
  },
];

const AchievementSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              年度<span className="text-gradient-gold">工作成果</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              对标绩效目标，全面推进各项重点工作任务
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.category} delay={index * 150}>
              <div className={`p-8 rounded-3xl bg-gradient-card border ${achievement.borderColor} hover:shadow-lg transition-all duration-300`}>
                {/* 头部 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${achievement.color}`} />
                    <h3 className="text-xl font-bold">{achievement.category}</h3>
                  </div>

                  {/* 进度条 */}
                  <div className="flex items-center gap-4">
                    <div className="w-40 h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full ${achievement.color} transition-all duration-1000`}
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      完成度 {achievement.progress}%
                    </span>
                  </div>
                </div>

                {/* 成果列表 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievement.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 绩效等级 */}
        <ScrollReveal delay={500}>
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 text-center shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl font-bold">预估绩效等级</span>
              <ArrowRight className="w-6 h-6 text-gold-dark" />
              <span className="text-4xl font-black text-gradient-gold">S级（卓越）</span>
            </div>
            <p className="text-muted-foreground text-sm">
              超额完成各项核心指标，创新应用成果突出，获得外部权威认可
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AchievementSection;
