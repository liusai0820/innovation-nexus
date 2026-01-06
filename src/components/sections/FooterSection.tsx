const FooterSection = () => {
  return (
    <footer className="py-12 px-6 bg-secondary/30 border-t border-border/30">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-gradient-primary">创新发展部</span>
          </h3>
          <p className="text-muted-foreground text-sm">2024年度工作总结汇报</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-6">
          <span>智库咨询</span>
          <span>·</span>
          <span>信息平台</span>
          <span>·</span>
          <span>AI创新应用</span>
        </div>
        
        <p className="text-xs text-muted-foreground/60">
          本页面采用创新网页形式呈现，体现创新发展理念
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
