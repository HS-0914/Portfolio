import "./App.css";
import { sectionIds } from "./data/section-data";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";
import { useSectionObserver } from "./useSectionObserver";

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
