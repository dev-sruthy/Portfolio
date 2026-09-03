import React from 'react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, RESUME_DATA, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static print:bg-white">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D3319]/60 backdrop-blur-sm transition-opacity print:hidden"
        />

        {/* Resume Document Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-[24px] sm:rounded-[32px] shadow-2xl border border-[#5A5A40]/15 overflow-hidden flex flex-col z-10 my-auto print:max-h-none print:shadow-none print:border-none print:rounded-none print:w-full"
        >
          {/* Top Bar Actions */}
          <div className="sticky top-0 z-20 bg-[#F5F5F0] px-6 py-3.5 border-b border-[#5A5A40]/10 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5F6B12] animate-pulse" />
              <span className="text-xs font-bold text-[#2D3319] uppercase tracking-wider font-display">
                Official Resume • Sruthy Suresh
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-1.5 rounded-full bg-[#5F6B12] text-white hover:bg-[#4E580D] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-[#2D3319] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close resume"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body Styled Exactly Like The Provided PDF */}
          <div className="p-8 sm:p-12 md:p-14 overflow-y-auto space-y-7 text-[#1A1F10] bg-white print:p-8 font-sans-clean leading-relaxed">
            
            {/* 1. HEADER (Centered, Bold, Clean) */}
            <div className="text-center space-y-1 pb-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-[#1A1F10] uppercase font-display">
                SRUTHY SURESH
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#384218] tracking-wide">
                Product Designer | UI/UX Design
              </p>
              <p className="text-xs text-[#2D3319] opacity-80 pt-0.5">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-[#2D3319]">
                  {PERSONAL_INFO.email}
                </a>
                {' '}|{' '}
                <span>{PERSONAL_INFO.phone}</span>
                {' '}|{' '}
                <span>{PERSONAL_INFO.location}</span>
              </p>
            </div>

            {/* 2. PROFILE SECTION */}
            <div className="space-y-2">
              <div className="border-b border-[#2D3319]/40 pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  PROFILE
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[#2D3319] opacity-90 leading-relaxed text-justify">
                {RESUME_DATA.profile}
              </p>
            </div>

            {/* 3. PROJECTS SECTION */}
            <div className="space-y-4">
              <div className="border-b border-[#2D3319]/40 pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  PROJECTS
                </h2>
              </div>

              {/* Project 1: Odyssey */}
              <div className="space-y-1.5 text-xs sm:text-[13px]">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="font-bold text-[#1A1F10]">
                    Odyssey — India Travel Discovery App{' '}
                    <span className="font-normal italic text-[#4A5520]">| UI/UX Design, Figma</span>
                  </p>
                  <a
                    href={PROJECTS[0].figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-[#5F6B12] hover:underline inline-flex items-center gap-1 print:hidden"
                  >
                    <span>Figma Link</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <ul className="list-disc pl-5 space-y-1 text-[#2D3319] opacity-90 leading-relaxed">
                  <li>
                    Designed end-to-end user flows and wireframes — onboarding, sign-in, explore, and community pages — progressing from low-fidelity wireframes to interaction-ready, high-fidelity prototypes in Figma.
                  </li>
                  <li>
                    Applied accessibility and user-first thinking by designing for error, empty, and success states across key flows.
                  </li>
                  <li>
                    Created an interactive state-by-state map of India as primary navigation, translating a complex information architecture into a simple, intuitive interface for browsing places, food, wildlife, and nature spots by region.
                  </li>
                </ul>
              </div>

              {/* Project 2: CoinGrow */}
              <div className="space-y-1.5 text-xs sm:text-[13px] pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="font-bold text-[#1A1F10]">
                    CoinGrow — Budgeting App for Young Adults{' '}
                    <span className="font-normal italic text-[#4A5520]">| UI/UX Design, Figma</span>
                  </p>
                  <a
                    href={PROJECTS[1].figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-[#5F6B12] hover:underline inline-flex items-center gap-1 print:hidden"
                  >
                    <span>Figma Link</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <ul className="list-disc pl-5 space-y-1 text-[#2D3319] opacity-90 leading-relaxed">
                  <li>
                    Designed core user flows and mockups — onboarding, dashboard, budget tracker, achievements, and peer challenges — maintaining consistent, component-based visual design across screens.
                  </li>
                  <li>
                    Explored two full visual directions and used a playful illustrated design system to make personal finance approachable for first-time earners, balancing user needs with product goals.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. SKILLS SECTION */}
            <div className="space-y-2.5">
              <div className="border-b border-[#2D3319]/40 pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  SKILLS
                </h2>
              </div>

              <div className="space-y-1.5 text-xs sm:text-[13px] text-[#2D3319] opacity-90 leading-relaxed">
                <div>
                  <span className="font-bold text-[#1A1F10]">Design skills:</span>
                  <p className="mt-0.5">
                    Wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, accessibility
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#1A1F10]">Design tools:</span>
                  <p className="mt-0.5">
                    Figma, FigJam, Adobe Photoshop, Adobe Illustrator
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#1A1F10]">Collaboration:</span>
                  <p className="mt-0.5">
                    Cross-functional teamwork with product and engineering, design handoff and documentation, strong communication
                  </p>
                </div>
              </div>
            </div>

            {/* 5. EDUCATION SECTION */}
            <div className="space-y-2">
              <div className="border-b border-[#2D3319]/40 pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  EDUCATION
                </h2>
              </div>

              <div className="space-y-1 text-xs sm:text-[13px] text-[#2D3319] opacity-90">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <p className="font-bold text-[#1A1F10]">
                    Master of Computer Applications (MCA) — RVITM, Bangalore
                  </p>
                  <span className="text-[12px] opacity-75 font-semibold">2024 – 2026</span>
                </div>
                <div>
                  <p className="font-bold text-[#1A1F10]">
                    Bachelor of Science (BSc) — St. Joseph's College
                  </p>
                </div>
              </div>
            </div>

            {/* 6. CERTIFICATIONS SECTION */}
            <div className="space-y-2">
              <div className="border-b border-[#2D3319]/40 pb-0.5">
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A1F10] font-display">
                  CERTIFICATIONS
                </h2>
              </div>

              <ul className="list-disc pl-5 text-xs sm:text-[13px] text-[#2D3319] opacity-90">
                <li>
                  <span className="font-medium">Google UX Design Professional Certificate</span> — <span className="italic">in progress</span>
                </li>
              </ul>
            </div>

            {/* Footer metadata print note */}
            <div className="text-center text-[10px] text-[#2D3319] opacity-40 pt-4 border-t border-[#5A5A40]/10 uppercase tracking-widest print:pt-6">
              Sruthy Suresh • Portfolio & Interactive Case Studies
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
