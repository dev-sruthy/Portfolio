import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { MockupOdyssey } from './MockupOdyssey';
import { MockupCoinGrow } from './MockupCoinGrow';
import { MockupReceipts } from './MockupReceipts';
import { useMedia } from '../context/MediaContext';
import { Figma, ExternalLink, Eye, ArrowRight, Globe, Check } from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const { assets } = useMedia();

  const renderProjectPreview = (project: Project) => {
    if (project.id === 'odyssey') {
      return assets.odysseyCoverImage ? (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            src={assets.odysseyCoverImage}
            alt="Odyssey Travel Web App"
            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <MockupOdyssey />
      );
    }

    if (project.id === 'coingrow') {
      return assets.coinGrowCoverImage ? (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            src={assets.coinGrowCoverImage}
            alt="CoinGrow Mascot & Interface"
            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <MockupCoinGrow />
      );
    }

    if (project.id === 'receipts') {
      return assets.receiptsCoverImage ? (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            src={assets.receiptsCoverImage}
            alt="Receipts Daily Commitment Tracker"
            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105 rounded-xl"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://raw.githubusercontent.com/dev-sruthy/portfolio-assects/main/Receipts.png';
            }}
          />
        </div>
      ) : (
        <MockupReceipts />
      );
    }

    return <MockupReceipts />;
  };

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-clip">
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
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-12"
          >
            <div className="group h-full bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-out border border-[#5A5A40]/15 relative overflow-hidden flex flex-col justify-between">
              {/* Subtle Ambient Background Accent */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF8F2] rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-[#5F6B12] bg-[#F5F5F0] px-3 py-1 rounded-full border border-[#5A5A40]/10">
                    {project.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider bg-[#F5F5F0] text-[#5F6B12] px-3 py-1 rounded-full font-bold border border-[#5A5A40]/10">
                    {project.category}
                  </span>
                  <span className="text-xs bg-[#FAF8F2] text-[#8B9E4B] px-2.5 py-0.5 rounded-full font-bold border border-[#CDD8B5]">
                    {project.platform}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#2D3319] group-hover:text-[#5F6B12] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <span className="text-sm sm:text-base font-bold text-[#5F6B12] uppercase tracking-wider block mt-0.5">
                    {project.tagline}
                  </span>
                </div>

                <p className="text-sm sm:text-base opacity-80 text-[#2D3319] leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Bento Quick Highlights Strip */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                    <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Role</span>
                    <span className="text-xs font-bold text-[#2D3319]">{project.role}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10">
                    <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Platform</span>
                    <span className="text-xs font-bold text-[#2D3319]">{project.platform}</span>
                  </div>
                </div>

                {/* Key Features (for Receipts card/overview) */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#5A5A40]/10 space-y-1.5">
                    <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">
                      Key Features
                    </span>
                    <ul className="space-y-1">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-xs text-[#2D3319]/85 flex items-start gap-2 leading-snug">
                          <Check className="w-3.5 h-3.5 text-[#5F6B12] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
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
                    onClick={() => onSelectProject(project)}
                    className="px-6 py-3 rounded-full bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm group-hover:scale-[1.02] cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#F5F5F0] hover:bg-stone-200 text-[#2D3319] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 border border-[#5A5A40]/15"
                  >
                    <Figma className="w-3.5 h-3.5 text-[#5F6B12]" />
                    <span>Figma File</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-[#F5F5F0] hover:bg-stone-200 text-[#2D3319] text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 border border-[#5A5A40]/15"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#5F6B12]" />
                      <span>Live Website</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Visual Showcase Column */}
              <div
                onClick={() => onSelectProject(project)}
                className={`lg:col-span-6 h-80 sm:h-96 w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer relative flex items-center justify-center p-4 shadow-inner group/preview ${
                  project.id === 'coingrow'
                    ? 'bg-gradient-to-br from-[#FAF8F2] to-[#EBF0DE] border border-[#CDD8B5]'
                    : 'bg-[#F5F5F0] border border-[#5A5A40]/10'
                }`}
              >
                {renderProjectPreview(project)}

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-[#2D3319]/10 opacity-0 group-hover/preview:opacity-100 transition-opacity rounded-2xl flex items-center justify-center pointer-events-none">
                  <span className="bg-white text-[#2D3319] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#5F6B12]" />
                    <span>Open Full Case Study</span>
                  </span>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
