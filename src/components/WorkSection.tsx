import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS, pigImg } from '../data/portfolioData';
import { Project } from '../types';
import { MockupOdyssey } from './MockupOdyssey';
import { MockupCoinGrow } from './MockupCoinGrow';
import { useMedia } from '../context/MediaContext';
import { Figma, ExternalLink, Eye, ArrowRight, Sparkles, Sprout, Compass, ShieldCheck, Layers, Award } from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const { assets } = useMedia();
  const projectOdyssey = PROJECTS[0]; // Odyssey
  const projectCoinGrow = PROJECTS[1]; // CoinGrow

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-bold opacity-60 text-[#2D3319]">
          Selected Case Studies
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] uppercase tracking-tight">
          Product Design Work
        </h2>

        <p className="text-sm sm:text-base text-[#2D3319] opacity-75 max-w-xl leading-relaxed">
          Curated end-to-end digital experiences designed with intentional visual hierarchy, user research, component architecture, and high-fidelity Figma prototypes.
        </p>
      </div>

      {/* MODERN BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* ============================================================== */}
        {/* BENTO CARD 1: ODYSSEY (Project 1 - Web App) */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group md:col-span-12 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 shadow-md hover:shadow-xl transition-all duration-300 border border-[#5A5A40]/15 relative overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF8F2] rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-[#5F6B12] bg-[#F5F5F0] px-3 py-1 rounded-full border border-[#5A5A40]/10">
                  1
                </span>
                <span className="text-xs uppercase tracking-wider bg-[#F5F5F0] text-[#5F6B12] px-3 py-1 rounded-full font-bold border border-[#5A5A40]/10">
                  Travel Discovery
                </span>
                <span className="text-xs bg-[#FAF8F2] text-[#8B9E4B] px-2.5 py-0.5 rounded-full font-bold border border-[#CDD8B5]">
                  Web App
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#2D3319] group-hover:text-[#5F6B12] transition-colors leading-tight">
                  {projectOdyssey.title}
                </h3>
                <span className="text-sm sm:text-base font-bold text-[#5F6B12] uppercase tracking-wider block mt-0.5">
                  {projectOdyssey.tagline}
                </span>
              </div>

              <p className="text-sm sm:text-base opacity-80 text-[#2D3319] leading-relaxed">
                {projectOdyssey.shortDescription}
              </p>

              {/* Bento Quick Highlights Strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                  <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Role</span>
                  <span className="text-xs font-bold text-[#2D3319]">{projectOdyssey.role}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                  <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Differentiator</span>
                  <span className="text-xs font-bold text-[#2D3319]">Interactive Map</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                  <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Platform</span>
                  <span className="text-xs font-bold text-[#2D3319]">Web App</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Interactive India Map", "State & District Discovery", "Local Food & Culture", "Community Picks"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-stone-50 text-[#5F6B12] border border-[#5A5A40]/10"
                  >
                    • {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectProject(projectOdyssey)}
                  className="px-6 py-3 rounded-full bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm group-hover:scale-[1.02] cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={projectOdyssey.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-[#F5F5F0] hover:bg-stone-200 text-[#2D3319] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 border border-[#5A5A40]/15"
                >
                  <Figma className="w-3.5 h-3.5 text-[#5F6B12]" />
                  <span>Figma File</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Showcase Column */}
            <div 
              onClick={() => onSelectProject(projectOdyssey)}
              className="lg:col-span-6 h-80 sm:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer relative bg-[#F5F5F0] flex items-center justify-center p-4 border border-[#5A5A40]/10 shadow-inner group/preview"
            >
              {assets.odysseyCoverImage ? (
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img
                    src={assets.odysseyCoverImage}
                    alt="Odyssey Travel Web App"
                    className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <MockupOdyssey />
              )}

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-[#2D3319]/10 opacity-0 group-hover/preview:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="bg-white text-[#2D3319] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#5F6B12]" />
                  <span>Open Full Case Study</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* BENTO CARD 2: COINGROW (Project 2 - Mobile App) */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group md:col-span-12 bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 shadow-md hover:shadow-xl transition-all duration-300 border border-[#5A5A40]/15 relative overflow-hidden flex flex-col justify-between"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-[#5F6B12] bg-[#F5F5F0] px-3 py-1 rounded-full border border-[#5A5A40]/10">
                  2
                </span>
                <span className="text-xs uppercase tracking-wider bg-[#F5F5F0] text-[#5F6B12] px-3 py-1 rounded-full font-bold border border-[#5A5A40]/10">
                  Gamification
                </span>
                <span className="text-xs bg-[#FAF8F2] text-[#8B9E4B] px-2.5 py-0.5 rounded-full font-bold border border-[#CDD8B5]">
                  Mobile UX
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#2D3319] group-hover:text-[#5F6B12] transition-colors leading-tight">
                  {projectCoinGrow.title}
                </h3>
                <span className="text-sm sm:text-base font-bold text-[#5F6B12] uppercase tracking-wider block mt-0.5">
                  {projectCoinGrow.tagline}
                </span>
              </div>

              <p className="text-sm sm:text-base opacity-80 text-[#2D3319] leading-relaxed">
                A playful financial habit-building app designed to help teenagers learn how to budget, save and understand investing through simple visual experiences, personal goals, achievements and friendly challenges with friends.
              </p>

              {/* Bento Quick Highlights Strip */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                  <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Role</span>
                  <span className="text-xs font-bold text-[#2D3319]">{projectCoinGrow.role}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                  <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Platform</span>
                  <span className="text-xs font-bold text-[#2D3319]">Mobile App</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Financial Education", "Gamification", "Peer Challenges", "Design System"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-stone-50 text-[#5F6B12] border border-[#5A5A40]/10"
                  >
                    • {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onSelectProject(projectCoinGrow)}
                  className="px-6 py-3 rounded-full bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm group-hover:scale-[1.02] cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={projectCoinGrow.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-[#F5F5F0] hover:bg-stone-200 text-[#2D3319] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 border border-[#5A5A40]/15"
                >
                  <Figma className="w-3.5 h-3.5 text-[#5F6B12]" />
                  <span>Figma File</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Showcase Column */}
            <div 
              onClick={() => onSelectProject(projectCoinGrow)}
              className="lg:col-span-6 h-80 sm:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer relative bg-gradient-to-br from-[#FAF8F2] to-[#EBF0DE] flex items-center justify-center p-4 border border-[#CDD8B5] shadow-inner group/preview"
            >
              {assets.coinGrowCoverImage ? (
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img
                    src={assets.coinGrowCoverImage}
                    alt="CoinGrow Mascot & Interface"
                    className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <MockupCoinGrow />
              )}

              {/* Hover Overlay Hint */}
              <div className="absolute inset-0 bg-[#2D3319]/10 opacity-0 group-hover/preview:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                <span className="bg-white text-[#2D3319] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#5F6B12]" />
                  <span>Open Full Case Study</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
