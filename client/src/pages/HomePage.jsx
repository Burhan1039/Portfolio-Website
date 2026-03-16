import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PageLoader from '../components/PageLoader';
import { useTheme } from '../hooks/useTheme';

function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = 'Burhan Naeem | No-Code / Low-Code Developer and Vibe Coder';

    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <PageLoader isVisible={isLoading} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
