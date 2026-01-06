import { Heart, Sparkles, ImageIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">致敬奋斗者</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            感谢<span className="text-gradient-primary">创新发展部</span>全体成员
          </h2>
          
          <div className="p-8 rounded-3xl bg-gradient-card border border-border/50 mb-8 shadow-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              15位伙伴，一年征程。
              <br />
              从智库咨询到AI创新，从平台交付到大模型落地，
              <br />
              我们用<span className="text-foreground font-medium">专业与热情</span>，书写着创新发展的新篇章。
            </p>
            
            {/* 团队照片占位区域 */}
            <div className="image-placeholder h-48 mb-6 rounded-xl">
              <div className="text-center">
                <ImageIcon className="w-12 h-12 mx-auto mb-2 text-primary/40" />
                <p className="text-lg font-medium text-foreground/60">团队合影</p>
                <p className="text-sm text-muted-foreground mt-1">建议尺寸: 800x400</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="px-6 py-4 rounded-2xl bg-secondary/80">
                <div className="text-3xl font-bold text-gradient-primary">15</div>
                <div className="text-sm text-muted-foreground">团队成员</div>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-secondary/80">
                <div className="text-3xl font-bold text-gradient-gold">365</div>
                <div className="text-sm text-muted-foreground">奋斗的日夜</div>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-secondary/80">
                <div className="text-3xl font-bold text-gradient-primary">∞</div>
                <div className="text-sm text-muted-foreground">无限的创造力</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <Sparkles className="w-5 h-5 text-gold-dark" />
            <span className="text-lg">创新驱动 · 智领未来</span>
            <Sparkles className="w-5 h-5 text-gold-dark" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TeamSection;
