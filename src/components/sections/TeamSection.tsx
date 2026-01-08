import { Heart, Sparkles, ImageIcon, Building2, Users } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">致敬与感谢</span>
          </div>

          {/* 感谢中心和领导 */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              感谢<span className="text-gradient-gold">中心</span>与<span className="text-gradient-primary">领导</span>
            </h2>

            <div className="p-10 rounded-[2rem] bg-gradient-to-r from-gold/5 via-primary/5 to-gold/5 border border-gold/30 mb-8 shadow-lg backdrop-blur-sm">
              <div className="flex justify-center gap-8 mb-8">
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 shadow-inner">
                  <Building2 className="w-10 h-10 text-gold-dark" />
                </div>
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-inner">
                  <Users className="w-10 h-10 text-primary" />
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-loose max-w-3xl mx-auto font-light">
                感谢中心的<span className="text-foreground font-semibold px-1">战略引领</span>和<span className="text-foreground font-semibold px-1">资源支持</span>，
                <br className="hidden md:block" />
                感谢各位领导的<span className="text-foreground font-semibold px-1">悉心指导</span>与<span className="text-foreground font-semibold px-1">关心帮助</span>。
                <br />
                正是因为有了坚强的后盾，创新发展部才能勇往直前。
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* 感谢团队 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            感谢<span className="text-gradient-primary">创新发展部</span>全体成员
          </h2>

          <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-border/50 to-card shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-gold/10 rounded-[2rem] pointer-events-none" />

            <div className="bg-card rounded-[1.9rem] p-8 md:p-12 overflow-hidden relative">

              {/* 团队照片区域 */}
              <div className="relative mb-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/shenzhen_team_11_people.png"
                  alt="Innovation Team"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-left">
                  <p className="text-white text-2xl font-bold">Innovation Team</p>
                  <p className="text-white/80 text-sm">Shenzhen, 2025</p>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
                <span className="text-primary font-bold text-2xl">10</span> 位伙伴，<span className="text-gold font-bold text-2xl">365</span> 个奋斗日夜。
                <br />
                从智库咨询到AI创新，从平台交付到大模型落地，
                <br />
                我们用<span className="text-foreground font-semibold border-b-2 border-primary/30 pb-1">专业与热情</span>，书写着创新发展的新篇章。
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-center">
                {[
                  { num: "10", label: "团队成员", color: "text-primary" },
                  { num: "100%", label: "全情投入", color: "text-gold" },
                  { num: "∞", label: "无限可能", color: "text-accent" },
                ].map((stat, idx) => (
                  <div key={idx} className="px-8 py-5 rounded-2xl bg-secondary/50 border border-white/5 backdrop-blur-sm min-w-[140px]">
                    <div className={`text-4xl font-black ${stat.color} mb-1`}>{stat.num}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-16 flex items-center justify-center gap-3 text-foreground/60 animate-pulse">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-lg font-light tracking-[0.2em] uppercase">Built for Innovation</span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TeamSection;
