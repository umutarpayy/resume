import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="relative">
        <Hero />
        <AboutSection />
        <ProjectsSection />
      </main>
    </div>
  );
};

export default Index;
