import { Header } from "./Pages/NavBar";
import { HeroSection } from "./Pages/Hero";
import { AboutPage } from "./Pages/About";
import { SkillPage } from "./Pages/Skill";
import { ProjectPage } from "./Pages/Projects";
import { ExperiencePage } from "./Pages/Exprience";
import { ContactPage } from "./Pages/Contact";
import { Footer } from "./Pages/Footer";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      
      {/* Navigation Bar sits fixedly at the top */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutPage />
        <SkillPage />
        <ProjectPage />
        <ExperiencePage />
        <ContactPage />
      </main>

      <Footer />
    </div>
  );
}

export default App;