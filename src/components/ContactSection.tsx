import React, { useState } from 'react';
import { Mail, Linkedin, FileText, Copy, Check, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Container with sleek rounded styling */}
      <div className="bg-[#5F6B12] text-[#F5F5F0] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-xl border border-white/10 relative overflow-hidden">
        {/* Decorative Background Accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D4A340]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold uppercase tracking-widest text-[#F3F6D4]">
            <span className="w-2 h-2 rounded-full bg-[#F3F6D4] animate-ping" />
            <span>Let's collaborate & build</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-none uppercase text-white">
            Let's create something meaningful.
          </h2>

          <p className="text-base sm:text-lg text-[#F5F5F0]/90 font-body max-w-2xl leading-relaxed">
            I am actively seeking <strong className="text-white">Product Designer</strong> and <strong className="text-white">UI/UX roles</strong>. Based in Bangalore, India — open to on-site and remote opportunities worldwide!
          </p>

          {/* Direct Connect Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {/* Mailto Button */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-3 rounded-full bg-white text-[#2D3319] hover:bg-[#F5F5F0] font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
            >
              <Mail className="w-4 h-4 text-[#5F6B12]" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

            {/* Copy Email Action */}
            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors border border-white/15 cursor-pointer"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#F3F6D4]" />
                  <span className="text-[#F3F6D4]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* LinkedIn Button */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-colors border border-white/15"
            >
              <Linkedin className="w-4 h-4 text-[#F3F6D4]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-full bg-[#E5B84B] hover:bg-[#D4A340] text-[#2D3319] font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-md cursor-pointer border border-white/20 hover:scale-105"
            >
              <FileText className="w-4 h-4 text-[#2D3319]" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Quick Contact Info Badges */}
          <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-[#F5F5F0]/85 border-t border-white/15">
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F3F6D4]" />
              <span className="font-semibold">{PERSONAL_INFO.phone}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F3F6D4]" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
