import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { MockupOdyssey } from './MockupOdyssey';
import { MockupCoinGrow } from './MockupCoinGrow';
import { useMedia } from '../context/MediaContext';
import { Figma, ExternalLink, Eye, ArrowRight, Image as ImageIcon } from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const { assets, setIsCustomizerOpen } = useMedia();
  const project1 = PROJECTS[0]; // Odyssey
  const project2 = PROJECTS[1]; // CoinGrow

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12 sm:mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-bold opacity-60 text-[#2D3319]">
          Selected Case Studies
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D3319] font-display uppercase tracking-tight">
          Featured Product Design Work
        </h2>

        <p className="text-sm sm:text-base text-[#2D3319] opacity-70 font-body max-w-xl leading-relaxed">
          Deep-dive into comprehensive end-to-end product design projects crafted in Figma with user research, component architecture, and high-fidelity prototypes.
        </p>
      </div>

      {/* TWO MAIN PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* PROJECT 1: ODYSSEY (Enters from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="group bg-white/95 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-[#5A5A40]/10"
        >
          {/* Card Top Metadata */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold opacity-40 text-[#2D3319] font-display">
                01
              </span>
              <span className="text-xs uppercase tracking-widest bg-[#F5F5F0] text-[#5F6B12] px-3.5 py-1.5 rounded-full font-bold shadow-2xs">
                Figma • Travel Discovery
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#2D3319] font-display group-hover:text-[#5F6B12] transition-colors">
              {project1.title} — India Travel Discovery
            </h3>

            <p className="text-sm opacity-70 mt-1 mb-4 text-[#2D3319] font-body leading-relaxed line-clamp-2">
              {project1.shortDescription}
            </p>

            {/* Role & Tools/Skills Breakdown */}
            <div className="space-y-2 mb-3 pt-1 border-t border-[#5A5A40]/10">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold uppercase tracking-wider text-[#2D3319]/60">Role:</span>
                <span className="font-medium text-[#2D3319] bg-[#F5F5F0] px-2.5 py-0.5 rounded-md">
                  {project1.role}
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                <span className="font-bold uppercase tracking-wider text-[#2D3319]/60 text-xs mr-1">Skills:</span>
                {project1.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white text-[#5F6B12] border border-[#5A5A40]/15"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Large Visual Area / Mockup Preview */}
          <div 
            onClick={() => onSelectProject(project1)}
            className="my-3 w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer relative group-hover:scale-[1.01] transition-transform duration-500 bg-[#F5F5F0] flex items-center justify-center p-3 shadow-inner"
          >
            {assets.odysseyCoverImage ? (
              <img
                src={assets.odysseyCoverImage}
                alt="Odyssey Travel App Interface"
                className="w-full h-full object-contain filter drop-shadow-md rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <MockupOdyssey />
            )}

            {/* Hover Overlay Hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#2D3319]/15 transition-colors pointer-events-none rounded-2xl flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#2D3319] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#5F6B12]" />
                <span>Inspect Case Study</span>
              </span>
            </div>
          </div>

          {/* Card Bottom Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#5A5A40]/10">
            <button
              onClick={() => onSelectProject(project1)}
              className="flex items-center text-xs font-bold uppercase tracking-widest text-[#5F6B12] group-hover:text-[#2D3319] transition-colors cursor-pointer py-1"
            >
              <span>View Case Study</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <a
                href={project1.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 shadow-xs"
                title="Open Odyssey on Figma"
              >
                <Figma className="w-3.5 h-3.5" />
                <span>Figma File</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* PROJECT 2: COINGROW (Enters from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="group bg-white/95 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-[#5A5A40]/10"
        >
          {/* Card Top Metadata */}
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold opacity-40 text-[#2D3319] font-display">
                02
              </span>
              <span className="text-xs uppercase tracking-widest bg-[#F5F5F0] text-[#5F6B12] px-3.5 py-1.5 rounded-full font-bold shadow-2xs">
                Figma • Fintech & Budgeting
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#2D3319] font-display group-hover:text-[#5F6B12] transition-colors">
              {project2.title} — Budgeting App
            </h3>

            <p className="text-sm opacity-70 mt-1 mb-4 text-[#2D3319] font-body leading-relaxed line-clamp-2">
              {project2.shortDescription}
            </p>

            {/* Role & Tools/Skills Breakdown */}
            <div className="space-y-2 mb-3 pt-1 border-t border-[#5A5A40]/10">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold uppercase tracking-wider text-[#2D3319]/60">Role:</span>
                <span className="font-medium text-[#2D3319] bg-[#F5F5F0] px-2.5 py-0.5 rounded-md">
                  {project2.role}
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                <span className="font-bold uppercase tracking-wider text-[#2D3319]/60 text-xs mr-1">Skills:</span>
                {project2.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white text-[#5F6B12] border border-[#5A5A40]/15"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Large Visual Area / Mockup Preview */}
          <div 
            onClick={() => onSelectProject(project2)}
            className="my-3 w-full h-80 sm:h-96 rounded-2xl overflow-hidden cursor-pointer relative group-hover:scale-[1.01] transition-transform duration-500 bg-[#E5989B]/10 flex items-center justify-center p-6 shadow-inner"
          >
            {assets.coinGrowCoverImage ? (
              <img
                src={assets.coinGrowCoverImage}
                alt="CoinGrow Mascot & Design"
                className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <MockupCoinGrow />
            )}

            {/* Hover Overlay Hint */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-[#2D3319]/15 transition-colors pointer-events-none rounded-2xl flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#2D3319] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#5F6B12]" />
                <span>Inspect Case Study</span>
              </span>
            </div>
          </div>

          {/* Card Bottom Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#5A5A40]/10">
            <button
              onClick={() => onSelectProject(project2)}
              className="flex items-center text-xs font-bold uppercase tracking-widest text-[#5F6B12] group-hover:text-[#2D3319] transition-colors cursor-pointer py-1"
            >
              <span>View Case Study</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <a
                href={project2.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 shadow-xs"
                title="Open CoinGrow on Figma"
              >
                <Figma className="w-3.5 h-3.5" />
                <span>Figma File</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
