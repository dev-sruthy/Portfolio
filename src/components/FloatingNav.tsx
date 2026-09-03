import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ArrowUp } from 'lucide-react';

interface FloatingNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ activeSection, onNavigate, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none px-4 sm:px-8">
      {/* 1. TOP MINIMAL NAVIGATION BAR (Before Scroll) */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            key="top-nav"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto max-w-6xl mx-auto w-full pt-5 pb-3 flex items-center justify-between"
          >
            {/* Logo / Name */}
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-2.5 group cursor-pointer text-left"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#5F6B12] ring-4 ring-[#5F6B12]/20 animate-pulse" />
              <div>
                <span className="font-extrabold tracking-tight text-sm uppercase text-[#2D3319] group-hover:text-[#5F6B12] transition-colors font-display">
                  Sruthy Suresh
                </span>
                <span className="hidden sm:inline-block text-[11px] font-medium text-[#2D3319]/60 ml-2">
                  • UI/UX & Product Design
                </span>
              </div>
            </button>

            {/* Nav Links & Actions */}
            <div className="flex items-center gap-6 sm:gap-8">
              <nav className="flex items-center gap-5 sm:gap-7">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors cursor-pointer relative py-1 ${
                        isActive ? 'text-[#5F6B12]' : 'text-[#2D3319]/75 hover:text-[#2D3319]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="topActiveIndicator"
                          className="h-0.5 bg-[#5F6B12] absolute bottom-0 left-0 right-0 rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="px-4 py-1.5 rounded-full bg-[#5F6B12] text-white hover:bg-[#4E580D] text-xs font-bold uppercase tracking-wider transition-all shadow-xs inline-flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. COMPACT FLOATING OVAL PILL NAVIGATION BAR (On Scroll) */}
      <AnimatePresence>
        {isScrolled && (
          <div className="flex justify-center pt-4">
            <motion.nav
              key="floating-pill-nav"
              initial={{ y: -30, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 24, stiffness: 280 }}
              className="pointer-events-auto flex items-center gap-3 sm:gap-6 px-5 sm:px-7 py-2.5 rounded-full bg-[#5F6B12]/95 backdrop-blur-md text-white shadow-2xl border border-white/20"
            >
              {/* Navigation Links */}
              <div className="flex items-center gap-3 sm:gap-5">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={`relative text-xs sm:text-sm uppercase tracking-wider font-bold transition-all cursor-pointer select-none py-1 px-1.5 ${
                        isActive ? 'text-white' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activePillNavDot"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          className="w-1.5 h-1.5 bg-[#F3F6D4] rounded-full absolute -bottom-0.5 left-1/2 -translate-x-1/2 shadow-xs"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Soft Divider */}
              <div className="h-4 w-px bg-white/25" />

              {/* Action Buttons: Resume & Scroll Top */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenResume}
                  className="text-xs sm:text-sm uppercase tracking-wider font-bold text-white/90 hover:text-white transition-opacity flex items-center gap-1.5 cursor-pointer py-1"
                  title="View Official Resume"
                >
                  <FileText className="w-3.5 h-3.5 text-[#F3F6D4]" />
                  <span className="hidden sm:inline">Resume</span>
                </button>

                <button
                  onClick={scrollToTop}
                  className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer text-white"
                  title="Scroll to Top"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

