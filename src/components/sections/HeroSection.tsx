import { ChevronDown, Sparkles, Award, Zap, Trophy, TrendingUp, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 真实背景图 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg_new.png"
          alt="Shenzhen Concept Skyline"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* 背景特效 */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-particles opacity-40 pointer-events-none" />

      {/* 装饰光效 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/15 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "1s" }} />

      {/* 主内容 */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-20">
        {/* 标签 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 mb-8 animate-fade-in shadow-[0_0_15px_rgba(var(--primary),0.3)]">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground/90 tracking-wide">创新发展部 · 2025年度总结</span>
        </div>

        {/* 主标题 */}
        <h1 className="mb-10 leading-none animate-slide-up">
          <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter drop-shadow-2xl">
            <span className="text-foreground" >创新</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light" >驱动</span>
          </span>
          <span className="block text-4xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] mt-2 md:mt-4 opacity-90">
            <span className="text-foreground">智领</span>
            <span className="text-gradient-gold font-normal">未来</span>
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-xl md:text-2xl text-foreground font-medium mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed drop-shadow-sm" style={{ animationDelay: "0.3s" }}>
          赋能智库·平台运营·产品构建
          <br className="hidden md:block" />
          <span className="text-sm md:text-lg mt-2 block text-foreground/80 font-normal">始于User，进阶于Wrapper，致力于Creator</span>
        </p>

        {/* 创新荣誉标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {[
            { Icon: Trophy, text: "智库业务转型赋能者", color: "text-gold", border: "border-gold/30", bg: "bg-gold/5" },
            { Icon: Award, text: "平台创新运营探索者", color: "text-primary", border: "border-primary/30", bg: "bg-primary/5" },
            { Icon: Zap, text: "模型原生产品创造者", color: "text-accent", border: "border-accent/30", bg: "bg-accent/5" },
          ].map((item, idx) => (
            <div key={idx} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${item.bg} backdrop-blur-md border ${item.border} shadow-lg hover:scale-105 transition-transform duration-300 cursor-default`}>
              <item.Icon className={`w-5 h-5 ${item.color}`} />
              <span className={`text-sm font-semibold ${item.color}`}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* 核心数据高亮 (浮动卡片) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="bg-card/90 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-center gap-4 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
            <div className="p-3 bg-primary/20 rounded-xl"><Users className="w-8 h-8 text-primary" /></div>
            <div className="text-left">
              <div className="text-3xl font-bold text-foreground">12<span className="text-sm text-muted-foreground ml-1">人</span></div>
              <div className="text-xs text-uppercase text-muted-foreground tracking-wider">精英团队</div>
            </div>
          </div>
          <div className="bg-card/90 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-center gap-4 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
            <div className="p-3 bg-gold/20 rounded-xl"><TrendingUp className="w-8 h-8 text-gold" /></div>
            <div className="text-left">
              <div className="text-3xl font-bold text-foreground">1030.2<span className="text-sm text-muted-foreground ml-1">万</span></div>
              <div className="text-xs text-uppercase text-muted-foreground tracking-wider">年度营收</div>
            </div>
          </div>
          <div className="bg-card/90 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-center gap-4 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
            <div className="p-3 bg-accent/20 rounded-xl"><Award className="w-8 h-8 text-accent" /></div>
            <div className="text-left">
              <div className="text-3xl font-bold text-foreground">100<span className="text-sm text-muted-foreground ml-1">%</span></div>
              <div className="text-xs text-uppercase text-muted-foreground tracking-wider">交付达成率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
