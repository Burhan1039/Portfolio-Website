import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustedSection from '../components/TrustedSection';
import SkillMotionSection from '../components/SkillMotionSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ReviewsSection from '../components/ReviewsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PageLoader from '../components/PageLoader';

function HomePage() {
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
      <Navbar />
      <main>
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
        <AboutSection />
        <SkillMotionSection />
        <ProjectsSection />
        <ReviewsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
