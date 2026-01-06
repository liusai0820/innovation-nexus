import { ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* 背景特效 */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-particles" />
      
      {/* 流动光效 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      {/* 主内容 */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* 标签 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 backdrop-blur-sm border border-primary/30 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">创新发展部 · 2024年度总结</span>
        </div>

        {/* 主标题 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
          <span className="text-foreground">创新</span>
          <span className="text-gradient-primary">驱动</span>
          <br />
          <span className="text-foreground">智领</span>
          <span className="text-gradient-gold">未来</span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          聚焦智库咨询、平台交付、AI应用三大核心领域
          <br />
          以创新思维推动业务高质量发展
        </p>

        {/* 数据概览 */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary">15</div>
            <div className="text-sm text-muted-foreground mt-1">团队成员</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-gold">990.75</div>
            <div className="text-sm text-muted-foreground mt-1">年度收入(万元)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient-primary">378.81</div>
            <div className="text-sm text-muted-foreground mt-1">年度利润(万元)</div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
          <span className="text-sm">向下滚动探索更多</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
