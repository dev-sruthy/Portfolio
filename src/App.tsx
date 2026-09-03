import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { MediaProvider } from './context/MediaContext';
import { Project } from './types';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Intersection Observer / Scroll tracker to track active section for nav highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'work', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 280;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2D3319] selection:bg-[#5F6B12] selection:text-white font-body relative antialiased">
      {/* Sleek Floating Oval Navigation Bar */}
      <FloatingNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section with background.png and animated Profile.png */}
        <HeroSection
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. Work Section (Odyssey & CoinGrow) */}
        <WorkSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. About Section with Profile.png, Design Philosophy, and Skills */}
        <AboutSection
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateToWork={() => handleNavigate('work')}
        />

        {/* 4. Contact Section with Direct Links, Email, LinkedIn & Resume */}
        <ContactSection
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* 5. Minimal Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <MediaProvider>
      <PortfolioApp />
    </MediaProvider>
  );
}

