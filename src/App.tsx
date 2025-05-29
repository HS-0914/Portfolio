import "./App.css";
import { sectionIds } from "./data/section-data";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import SkillSection from "./sections/SkillSection";
import { useSectionObserver } from "./hooks/useSectionObserver";

function App() {
  const activeSection = useSectionObserver(sectionIds);
  return (
    <div className="antialiased">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <ProjectSection />
        <SkillSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
