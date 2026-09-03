import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HeroCharacter } from './HeroCharacter';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useMedia } from '../context/MediaContext';
import { FileText, ArrowDown, Mail, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenResume }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { assets } = useMedia();

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.85;
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* 1. HERO BACKGROUND TEXTURE & AMBIENCE (Using uploaded background.png) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Base Background Image from GitHub Repository */}
        {assets.heroBackgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.14] mix-blend-multiply transition-opacity duration-1000 scale-105"
            style={{ 
              backgroundImage: `url(${assets.heroBackgroundImage})`,
            }}
          />
        )}

        {/* Soft Organic Ambient Color Vignettes */}
        <div className="absolute -top-24 -left-20 w-[500px] h-[500px] rounded-full bg-[#E5989B]/20 blur-3xl" />
        <div className="absolute top-10 right-0 w-[520px] h-[520px] rounded-full bg-[#BFD1A9]/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-[580px] h-[380px] rounded-full bg-[#F5C2CD]/15 blur-3xl" />
        
        {/* Subtle Gradient Fade to seamless page color at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5EE]/80 via-transparent to-[#F5F5F0]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/85 backdrop-blur-xs text-[#2D3319] text-xs font-semibold tracking-wider uppercase shadow-xs border border-[#5A5A40]/10 mb-4 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#5F6B12] animate-pulse" />
          <span>Product Designer</span>
          <span className="opacity-30">•</span>
          <span>UI/UX Designer</span>
        </motion.div>

        {/* HERO VISUAL AREA WITH DISPLAY TYPOGRAPHY & PORTRAIT */}
        <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] flex flex-col items-center justify-center my-2">
          
          {/* BOLD "SRUTHY" BACKDROP DISPLAY TYPOGRAPHY */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <h1 
              className="text-[24vw] sm:text-[20vw] md:text-[180px] lg:text-[220px] font-black leading-none tracking-tighter text-[#7D8C12] uppercase select-none transition-all duration-700 font-display opacity-85"
              style={{
                textShadow: '0 4px 30px rgba(95, 107, 18, 0.18)',
              }}
            >
              SRUTHY
            </h1>
          </div>

          {/* PORTRAIT PROFILE WITH VISUALLY INTERESTING ENTRANCE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.84, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: isLoaded ? 1 : 0.84, 
              y: 0 
            }}
            transition={{ 
              duration: 1.3, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1
            }}
            className="relative z-10"
          >
            <HeroCharacter 
              scrollProgress={scrollProgress} 
              isLoaded={isLoaded}
              customImageSrc={assets.heroCharacterImage}
            />
          </motion.div>
        </div>

        {/* REFINED HEADLINE & VALUE PROPOSITION */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl pt-2 sm:pt-4 flex flex-col items-center space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D3319] font-display uppercase tracking-tight">
            Designing Intuitive, Human-Centered Digital Products
          </h2>

          <p className="text-sm sm:text-base text-[#2D3319]/80 font-body leading-relaxed max-w-xl">
            Passionate about translating user requirements into seamless wireframes, component-based design systems, and interaction-ready prototypes in Figma.
          </p>

          {/* Primary Call-to-Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => onNavigate('work')}
              className="px-7 py-3 rounded-full bg-[#5F6B12] text-white text-xs sm:text-sm font-bold tracking-wider hover:bg-[#4E580D] transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-white/90 hover:bg-white text-[#2D3319] text-xs sm:text-sm font-bold tracking-wider transition-all shadow-xs border border-[#5A5A40]/15 cursor-pointer hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#5F6B12]" />
              <span>Get In Touch</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-full bg-transparent hover:bg-black/5 text-[#2D3319]/80 hover:text-[#2D3319] text-xs sm:text-sm font-bold tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-[#5F6B12]" />
              <span>Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

