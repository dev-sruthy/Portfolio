import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Figma, Lightbulb, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MockupOdyssey } from './MockupOdyssey';
import { MockupCoinGrow } from './MockupCoinGrow';
import { useMedia } from '../context/MediaContext';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { assets } = useMedia();
  if (!project) return null;

  const customCover = project.id === 'odyssey' ? assets.odysseyCoverImage : assets.coinGrowCoverImage;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D3319]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#F5F5F0] rounded-[32px] shadow-2xl border border-[#5A5A40]/15 overflow-hidden flex flex-col z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#F5F5F0]/95 backdrop-blur-md px-6 py-4 border-b border-[#5A5A40]/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#5F6B12] text-white flex items-center justify-center text-xs font-bold font-display">
                {project.number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#2D3319] font-display uppercase tracking-tight leading-none">
                  {project.title}
                </h3>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B12]">
                  {project.tagline}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5F6B12] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E580D] transition-colors shadow-xs"
              >
                <Figma className="w-3.5 h-3.5" />
                <span>Open in Figma</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-[#2D3319] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Top Interactive Showcase Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#5F6B12] text-xs font-bold uppercase tracking-wider border border-[#5A5A40]/10">
                  <Sparkles className="w-3.5 h-3.5 text-[#5F6B12]" />
                  <span>{project.category}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3319] leading-tight font-display uppercase tracking-tight">
                  {project.shortDescription}
                </h2>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white p-3.5 rounded-2xl border border-[#5A5A40]/10">
                    <span className="text-[11px] text-[#5F6B12] uppercase font-bold tracking-wider block">Role</span>
                    <span className="text-xs font-bold text-[#2D3319]">{project.role}</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl border border-[#5A5A40]/10">
                    <span className="text-[11px] text-[#5F6B12] uppercase font-bold tracking-wider block">Platform</span>
                    <span className="text-xs font-bold text-[#2D3319]">{project.year} • Mobile iOS / Android</span>
                  </div>
                </div>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-white text-[#2D3319] px-2.5 py-1 rounded-lg border border-[#5A5A40]/10"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mockup Interactive Frame */}
              <div className="lg:col-span-6 h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#5A5A40]/15 bg-white flex items-center justify-center">
                {customCover ? (
                  <img
                    src={customCover}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  project.id === 'odyssey' ? <MockupOdyssey /> : <MockupCoinGrow />
                )}
              </div>
            </div>

            {/* Problem & Solution Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 sm:p-6 rounded-[24px] border border-[#5A5A40]/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#5F6B12] font-bold text-xs uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-[#5F6B12]" />
                  <span>The Problem Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2D3319] opacity-80 leading-relaxed font-body">
                  {project.overview.problem}
                </p>
              </div>

              <div className="bg-[#5F6B12] text-[#F5F5F0] p-5 sm:p-6 rounded-[24px] border border-white/10 space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-[#F3F6D4] font-bold text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#F3F6D4]" />
                  <span>The Design Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F5F5F0]/90 leading-relaxed font-body">
                  {project.overview.solution}
                </p>
              </div>
            </div>

            {/* Design Process & Research Insights */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#2D3319] font-display uppercase tracking-tight flex items-center gap-2">
                <Users className="w-5 h-5 text-[#5F6B12]" />
                <span>User Research & Discovery Insights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.process.research.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-[#5A5A40]/10 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider mb-1.5">Insight 0{idx + 1}</span>
                    <p className="text-xs text-[#2D3319] opacity-80 leading-relaxed font-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design System & Visual Hierarchy */}
            <div className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-[#2D3319] font-display uppercase tracking-tight flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#5F6B12]" />
                  <span>Design System & Prototype Highlights</span>
                </h4>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B12] bg-[#F5F5F0] px-3 py-1 rounded-full border border-[#5A5A40]/10">
                  Figma Tokens
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                    <div className="w-5 h-5 rounded-full bg-[#5F6B12] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs font-medium text-[#2D3319] leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Call to Action inside Case Study */}
            <div className="bg-[#5F6B12] text-[#F5F5F0] p-6 sm:p-7 rounded-[28px] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-white/10">
              <div>
                <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white">Inspect Full Prototype in Figma</h4>
                <p className="text-xs text-[#F5F5F0]/80 mt-0.5">
                  Explore full component library, auto-layout variants, interactive microflows, and style guides.
                </p>
              </div>

              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-[#2D3319] hover:bg-[#F5F5F0] font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-sm"
              >
                <Figma className="w-4 h-4 text-[#5F6B12]" />
                <span>Launch Figma File</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
