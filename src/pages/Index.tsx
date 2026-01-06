import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import TeamSection from "@/components/TeamSection";
import PlatformGraphic from "@/components/PlatformGraphic";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WorkExperienceSection />
        <TeamSection />
        <PlatformGraphic />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
