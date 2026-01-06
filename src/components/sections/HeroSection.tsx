import { ChevronDown, Sparkles, ImageIcon, Award, Zap, Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 背景特效 */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-particles" />
      
      {/* 装饰光效 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      {/* 主内容 */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
        {/* 标签 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground/80">创新发展部 · 2025年度总结</span>
        </div>

        {/* 主标题 - 使用更有设计感的排版 */}
        <h1 className="mb-8 leading-tight animate-slide-up">
          <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
            <span className="text-foreground" style={{ fontFamily: "'Noto Serif SC', serif" }}>创新</span>
            <span className="text-gradient-primary" style={{ fontFamily: "'Noto Serif SC', serif" }}>驱动</span>
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mt-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            <span className="text-foreground">智领</span>
            <span className="text-gradient-gold">未来</span>
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          聚焦智库咨询、平台交付、AI应用三大核心领域
          <br />
          以创新思维推动业务高质量发展
        </p>

        {/* 创新荣誉标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/15 border border-gold/40 shadow-sm">
            <Trophy className="w-5 h-5 text-gold-dark" />
            <span className="text-sm font-medium text-gold-dark">公司内部创新先锋队</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/40 shadow-sm">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">率先AI转型部门</span>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 border border-accent/40 shadow-sm">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent">大模型应用落地先行者</span>
          </div>
        </div>

        {/* 数据概览 */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 glow-primary">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary">15</div>
            <div className="text-sm text-muted-foreground mt-1">团队成员</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 glow-gold">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold">990.75</div>
            <div className="text-sm text-muted-foreground mt-1">年度收入(万元)</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 glow-primary">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary">378.81</div>
            <div className="text-sm text-muted-foreground mt-1">年度利润(万元)</div>
          </div>
        </div>

        {/* 主图占位区域 */}
        <div className="animate-fade-in max-w-4xl mx-auto mb-8" style={{ animationDelay: "0.8s" }}>
          <div className="image-placeholder h-72 md:h-96 rounded-3xl border-2 border-primary/20">
            <div className="text-center">
              <ImageIcon className="w-16 h-16 mx-auto mb-3 text-primary/40" />
              <p className="text-lg font-medium text-foreground/60">首页主视觉图</p>
              <p className="text-sm text-muted-foreground mt-1">建议：团队合影、AI产品界面截图、或科技感抽象图</p>
              <p className="text-xs text-muted-foreground/60 mt-2">推荐尺寸: 1400x700</p>
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-float pb-8">
          <span className="text-sm">向下滚动探索更多</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
