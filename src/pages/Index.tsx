import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import HighlightSection from "@/components/sections/HighlightSection";
import ChartSection from "@/components/sections/ChartSection";
import BusinessSection from "@/components/sections/BusinessSection";
import ProjectCaseSection from "@/components/sections/ProjectCaseSection";

import AchievementSection from "@/components/sections/AchievementSection";
import PlanSection from "@/components/sections/PlanSection";
import TeamSection from "@/components/sections/TeamSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div id="hero">
        <HeroSection />
      </div>

      <div id="highlights">
        <HighlightSection />
      </div>

      <div id="charts">
        <ChartSection />
      </div>

      <div id="business">
        <BusinessSection />
      </div>

      <div id="projects">
        <ProjectCaseSection />
      </div>


      <div id="achievements">
        <AchievementSection />
      </div>

      <div id="plans">
        <PlanSection />
      </div>

      <TeamSection />

      <FooterSection />
    </main>
  );
};

export default Index;
