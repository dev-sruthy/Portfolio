import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, FileText, ArrowUp, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#5A5A40]/10 bg-[#F5F5F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#2D3319] font-display tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5A5A40]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#5A5A40]">
              Product Designer
            </span>
          </div>
          <p className="text-xs text-[#2D3319] opacity-60 font-body">
            Crafted with intention, empathy, and Figma design tokens.
          </p>
        </div>

        {/* Links & Resume */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-bold uppercase tracking-wider text-[#5A5A40]">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#2D3319] flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#2D3319] flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenResume}
            className="hover:text-[#2D3319] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            onClick={scrollToTop}
            className="w-7 h-7 rounded-full bg-white hover:bg-[#5A5A40] text-[#5A5A40] hover:text-white border border-[#5A5A40]/15 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
