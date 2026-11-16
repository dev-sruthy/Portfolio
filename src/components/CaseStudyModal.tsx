import React, { useState, useEffect, useRef } from 'react';
import { Project, Persona } from '../types';
import {
  X, ExternalLink, Sparkles, CheckCircle2, Figma,
  Lightbulb, Target, ChevronRight, Globe, ArrowRight,
  MessageSquare, Brain, Footprints, Heart, Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MockupOdyssey } from './MockupOdyssey';
import { MockupCoinGrow } from './MockupCoinGrow';
import { MockupReceipts } from './MockupReceipts';
import { useMedia } from '../context/MediaContext';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const SIDEBAR_LINKS = [
  { id: 'cs-problem', label: '1. Problem Statement' },
  { id: 'cs-goal', label: '2. Goal Statement' },
  { id: 'cs-empathy', label: '3. Empathy Map' },
  { id: 'cs-usermap', label: '4. User Map' },
  { id: 'cs-personas', label: '5. User Personas' },
  { id: 'cs-why-works', label: '6. Why This Design Works' },
  { id: 'cs-why-better', label: '7. Why This Design Is Better' },
];

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { assets } = useMedia();
  const [activeSection, setActiveSection] = useState<string>('cs-problem');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    if (project) {
      setActiveSection('cs-problem');
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;
      const containerRect = container.getBoundingClientRect();

      if (container.scrollHeight - container.scrollTop - container.clientHeight < 50) {
        setActiveSection(SIDEBAR_LINKS[SIDEBAR_LINKS.length - 1].id);
        return;
      }

      let currentSection = SIDEBAR_LINKS[0].id;
      for (const link of SIDEBAR_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const elRect = el.getBoundingClientRect();
          if (elRect.top <= containerRect.top + 160) {
            currentSection = link.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [project]);

  if (!project) return null;

  const customCover =
    project.id === 'coingrow'
      ? assets.coinGrowCoverImage
      : project.id === 'odyssey'
      ? assets.odysseyCoverImage
      : project.id === 'receipts'
      ? assets.receiptsCoverImage || ''
      : '';

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const container = scrollContainerRef.current;
    const targetElement = document.getElementById(id);
    if (container && targetElement) {
      isProgrammaticScroll.current = true;
      const containerRect = container.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();
      const scrollOffset = targetRect.top - containerRect.top + container.scrollTop - 20;
      container.scrollTo({ top: Math.max(scrollOffset, 0), behavior: 'smooth' });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 700);
    }
  };

  const renderPreview = () => {
    if (customCover) {
      return (
        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            src={customCover}
            alt={project.title}
            className="w-full h-full object-contain filter drop-shadow-md transition-all rounded-xl"
          />
        </div>
      );
    }
    if (project.id === 'coingrow') {
      return (
        <div className="w-full h-full">
          <MockupCoinGrow />
        </div>
      );
    }
    if (project.id === 'receipts') {
      return (
        <div className="w-full h-full">
          <MockupReceipts />
        </div>
      );
    }
    return (
      <div className="w-full h-full">
        <MockupOdyssey />
      </div>
    );
  };

  const renderPersonaCard = (persona: Persona, idx: number) => {
    const isFirst = idx === 0;
    const hasFourQuadrants =
      persona.frustrations.length > 0 &&
      persona.motivations &&
      persona.motivations.length > 0 &&
      persona.needs &&
      persona.needs.length > 0;

    return (
      <div
        key={persona.name}
        className="bg-white p-6 sm:p-7 rounded-[32px] border border-[#5A5A40]/15 shadow-sm space-y-4 flex flex-col justify-between"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-2xl font-bold text-[#2D3319]">{persona.name}</h4>
                <span
                  className={`text-xs font-bold text-white px-2.5 py-0.5 rounded-full ${
                    isFirst ? 'bg-[#5F6B12]' : 'bg-[#8B9E4B]'
                  }`}
                >
                  {persona.age}
                </span>
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-wider block mt-0.5 ${
                  isFirst ? 'text-[#5F6B12]' : 'text-[#8B9E4B]'
                }`}
              >
                {persona.personaType}
              </span>
            </div>
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                isFirst
                  ? 'bg-[#F5F8ED] border-[#D5E0BE]'
                  : 'bg-[#FFF8E7] border-[#F5DFAD]'
              }`}
            >
              <span
                className="text-2xl leading-none select-none"
                role="img"
                aria-label={persona.avatarLabel || persona.name}
              >
                {persona.avatarEmoji || (isFirst ? '👩' : '👨')}
              </span>
            </div>
          </div>

          <div className="p-3 bg-[#FAF8F2] rounded-2xl border border-[#5F6B12]/20">
            <p className="text-xs font-bold italic text-[#2D3319]">{persona.quote}</p>
          </div>

          <p className="text-xs text-stone-600 leading-relaxed">{persona.background}</p>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#556428] block mb-1">
                🎯 Goals
              </span>
              <ul className="text-[11px] text-[#283618] space-y-1">
                {persona.goals.map((g, i) => (
                  <li key={i}>• {g}</li>
                ))}
              </ul>
            </div>

            {persona.painPoint ? (
              <div className="p-3 rounded-2xl bg-[#FDF2F2] border border-[#F5C6C6]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B2C2C] block mb-1">
                  ⚠️ Pain Point
                </span>
                <p className="text-[11px] text-[#742A2A] leading-relaxed">
                  {persona.painPoint}
                </p>
              </div>
            ) : (
              <div className="p-3 rounded-2xl bg-[#FDF2F2] border border-[#F5C6C6]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B2C2C] block mb-1">
                  ⚠️ Frustrations
                </span>
                <ul className="text-[11px] text-[#742A2A] space-y-1">
                  {persona.frustrations.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {hasFourQuadrants && (
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-2xl bg-[#FFF8E7] border border-[#F5DFAD]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B7791F] block mb-1">
                  🔥 Motivations
                </span>
                <ul className="text-[11px] text-[#7B4C08] space-y-1">
                  {persona.motivations!.map((m, i) => (
                    <li key={i}>• {m}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-2xl bg-[#F0F5FF] border border-[#C3DAFE]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2B6CB0] block mb-1">
                  💡 Needs
                </span>
                <ul className="text-[11px] text-[#2A4365] space-y-1">
                  {persona.needs!.map((n, i) => (
                    <li key={i}>• {n}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D3319]/75 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-6xl max-h-[92vh] bg-[#F5F5F0] rounded-[28px] sm:rounded-[40px] shadow-2xl border border-[#5A5A40]/20 overflow-hidden flex flex-col z-10 my-auto"
        >
          {/* Top Modal Header */}
          <div className="bg-[#F5F5F0]/95 backdrop-blur-md px-5 sm:px-8 py-3.5 sm:py-4 border-b border-[#5A5A40]/10 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-8 h-8 rounded-full bg-[#5F6B12] text-white flex items-center justify-center text-xs font-bold shadow-2xs shrink-0">
                {project.number}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D3319] uppercase tracking-tight leading-none truncate">
                  {project.title}
                </h3>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5F6B12] block truncate mt-0.5">
                  {project.tagline}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#5F6B12] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E580D] transition-colors shadow-2xs"
              >
                <Figma className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Figma File</span>
                <span className="sm:hidden">Figma</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-white text-[#2D3319] text-xs font-bold uppercase tracking-wider hover:bg-stone-100 transition-colors border border-[#5A5A40]/20 shadow-2xs"
                >
                  <Globe className="w-3.5 h-3.5 text-[#5F6B12]" />
                  <span className="hidden sm:inline">Live Website</span>
                  <span className="sm:hidden">Live</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-[#2D3319] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Quick Jump Scrollbar */}
          <div className="md:hidden bg-white/95 border-b border-[#5A5A40]/10 px-4 py-2.5 overflow-x-auto flex items-center gap-1.5 text-xs font-bold scrollbar-none shrink-0">
            {SIDEBAR_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-[#5F6B12] text-white shadow-2xs'
                    : 'text-[#2D3319]/70 hover:text-[#2D3319] hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Main Modal Body with Left Contents Menu */}
          <div className="flex-1 flex overflow-hidden relative">
            {/* Desktop / Tablet Sidebar Navigation */}
            <aside className="hidden md:flex flex-col w-56 lg:w-64 bg-white/80 border-r border-[#5A5A40]/10 p-5 overflow-y-auto shrink-0 select-none justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B12] block mb-3 px-2">
                  Case Study Contents
                </span>
                <nav className="space-y-1">
                  {SIDEBAR_LINKS.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        activeSection === link.id
                          ? 'bg-[#5F6B12] text-white shadow-xs font-extrabold'
                          : 'text-[#2D3319]/70 hover:text-[#2D3319] hover:bg-stone-100'
                      }`}
                    >
                      <span className="truncate">{link.label}</span>
                      {activeSection === link.id && (
                        <ChevronRight className="w-3.5 h-3.5 text-white/90 shrink-0" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Sidebar Bottom Links */}
              <div className="pt-4 border-t border-stone-200/60 mt-4 space-y-2">
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#F5F5F0] hover:bg-stone-200 text-[#2D3319] text-xs font-bold transition-colors inline-flex items-center justify-between border border-[#5A5A40]/15"
                >
                  <span className="flex items-center gap-1.5">
                    <Figma className="w-3.5 h-3.5 text-[#5F6B12]" />
                    <span>Figma File</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#F5F5F0] hover:bg-stone-200 text-[#2D3319] text-xs font-bold transition-colors inline-flex items-center justify-between border border-[#5A5A40]/15"
                  >
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#5F6B12]" />
                      <span>Live Website</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                )}
              </div>
            </aside>

            {/* Scrollable Case Study Content */}
            <div
              ref={scrollContainerRef}
              className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-8 scroll-smooth"
            >
              {/* HERO AT THE TOP OF EACH CASE STUDY */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#5F6B12] text-xs font-bold uppercase tracking-wider border border-[#5A5A40]/10 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#5F6B12]" />
                    <span>{project.category} • {project.platform}</span>
                  </div>

                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3319] leading-tight uppercase tracking-tight">
                      {project.title}
                    </h1>
                    <span className="text-base sm:text-lg font-bold text-[#5F6B12] uppercase tracking-wider block mt-0.5">
                      {project.tagline}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#2D3319] opacity-85 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Role & Platform Strip */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                      <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Role</span>
                      <span className="text-xs font-bold text-[#2D3319]">{project.role}</span>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                      <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Platform</span>
                      <span className="text-xs font-bold text-[#2D3319]">{project.platform}</span>
                    </div>
                  </div>

                  {/* Key Features (for Receipts overview) */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="bg-white p-4 rounded-2xl border border-[#5A5A40]/10 shadow-2xs space-y-1.5">
                      <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">
                        Key Features
                      </span>
                      <ul className="space-y-1">
                        {project.keyFeatures.map((feature, i) => (
                          <li key={i} className="text-xs text-[#2D3319]/85 flex items-start gap-2">
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
                        className="text-xs font-medium bg-white text-[#5F6B12] px-2.5 py-1 rounded-lg border border-[#5A5A40]/10"
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prototype / Image Preview */}
                <div className="lg:col-span-6 h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#5A5A40]/15 bg-gradient-to-br from-[#FAF8F2] to-[#EBF0DE] flex flex-col items-center justify-center relative p-4 shadow-inner">
                  {renderPreview()}
                </div>
              </div>

              {/* 1. PROBLEM STATEMENT & 2. GOAL STATEMENT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  id="cs-problem"
                  className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/15 shadow-xs space-y-2.5"
                >
                  <span className="text-xs font-bold text-[#C05621] uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-[#C05621]" />
                    <span>1. Problem Statement</span>
                  </span>
                  <p className="text-sm text-[#2D3319]/90 leading-relaxed">
                    {project.caseStudy.problemStatement}
                  </p>
                </div>

                <div
                  id="cs-goal"
                  className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/15 shadow-xs space-y-2.5"
                >
                  <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-[#5F6B12]" />
                    <span>2. Goal Statement</span>
                  </span>
                  <p className="text-sm text-[#2D3319]/90 leading-relaxed">
                    {project.caseStudy.goalStatement}
                  </p>
                </div>
              </div>

              {/* 3. EMPATHY MAP (4-Quadrant Grid) */}
              <div
                id="cs-empathy"
                className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/15 shadow-xs space-y-4"
              >
                <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                  3. Empathy Map
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#556428] flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Says</span>
                    </span>
                    <ul className="space-y-1 text-xs text-[#283618]">
                      {project.caseStudy.empathyMap.says.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF8E7] border border-[#F5DFAD] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B7791F] flex items-center gap-1.5">
                      <Brain className="w-3.5 h-3.5" />
                      <span>Thinks</span>
                    </span>
                    <ul className="space-y-1 text-xs text-[#7B4C08]">
                      {project.caseStudy.empathyMap.thinks.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F0F5FF] border border-[#C3DAFE] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2B6CB0] flex items-center gap-1.5">
                      <Footprints className="w-3.5 h-3.5" />
                      <span>Does</span>
                    </span>
                    <ul className="space-y-1 text-xs text-[#2A4365]">
                      {project.caseStudy.empathyMap.does.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FDF2F2] border border-[#F5C6C6] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#9B2C2C] flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5" />
                      <span>Feels</span>
                    </span>
                    <ul className="space-y-1 text-xs text-[#742A2A]">
                      {project.caseStudy.empathyMap.feels.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. USER MAP (Horizontal 5-Stage Journey) */}
              <div
                id="cs-usermap"
                className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/15 shadow-xs space-y-4"
              >
                <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                  4. User Map
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {project.caseStudy.userMap.map((step, idx) => (
                    <div
                      key={step.stage}
                      className="p-3.5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 flex flex-col justify-between space-y-2.5 relative"
                    >
                      <div className="flex items-center justify-between gap-1 pb-2 border-b border-[#5A5A40]/10">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="w-5 h-5 rounded-full bg-[#5F6B12] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-xs font-bold text-[#2D3319] truncate">
                            {step.stage}
                          </span>
                        </div>
                        {idx < project.caseStudy.userMap.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-[#5F6B12] hidden lg:block shrink-0" />
                        )}
                      </div>

                      <div className="space-y-2 text-[11px]">
                        <div>
                          <span className="font-bold uppercase tracking-wider text-[#5F6B12] text-[9px] block">
                            Action
                          </span>
                          <p className="text-[#2D3319] leading-snug mt-0.5">{step.action}</p>
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-[#5A5A40]/10">
                          <span className="font-bold uppercase tracking-wider text-[#C05621] text-[9px] block">
                            Emotion / Pain
                          </span>
                          <p className="text-stone-600 leading-snug mt-0.5">
                            {step.emotionOrPain}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. USER PERSONAS (Kept as is) */}
              <div id="cs-personas" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                      5. User Personas
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                  {project.personas.map((persona, idx) => renderPersonaCard(persona, idx))}
                </div>
              </div>

              {/* 6. WHY THIS DESIGN WORKS & 7. WHY THIS DESIGN IS BETTER */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  id="cs-why-works"
                  className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/15 shadow-xs space-y-3"
                >
                  <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5F6B12]" />
                    <span>6. Why This Design Works</span>
                  </span>
                  <ul className="space-y-2">
                    {project.caseStudy.whyThisDesignWorks.map((item, i) => (
                      <li
                        key={i}
                        className="p-3 rounded-xl bg-[#FAF8F2] border border-[#5F6B12]/15 text-xs sm:text-sm text-[#2D3319] flex items-start gap-2 leading-snug"
                      >
                        <Check className="w-4 h-4 text-[#5F6B12] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  id="cs-why-better"
                  className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/15 shadow-xs space-y-3"
                >
                  <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#5F6B12]" />
                    <span>7. Why This Design Is Better</span>
                  </span>
                  <ul className="space-y-2">
                    {project.caseStudy.whyThisDesignIsBetter.map((item, i) => (
                      <li
                        key={i}
                        className="p-3 rounded-xl bg-[#F5F5F0] border border-[#5A5A40]/10 text-xs sm:text-sm text-[#2D3319] flex items-start gap-2 leading-snug"
                      >
                        <ArrowRight className="w-4 h-4 text-[#5F6B12] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA Banner */}
              <div className="bg-[#5F6B12] text-[#F5F5F0] p-6 sm:p-7 rounded-[28px] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-white/10">
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-white">
                    Explore {project.title}
                  </h4>
                  <p className="text-xs text-[#F5F5F0]/85 mt-0.5">
                    Inspect the Figma component system and interactive flows{project.liveUrl ? ', or try the live website.' : '.'}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-white text-[#2D3319] hover:bg-[#F5F5F0] font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-sm cursor-pointer"
                  >
                    <Figma className="w-4 h-4 text-[#5F6B12]" />
                    <span>Figma File</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#2D3319] text-white hover:bg-[#1E2311] font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-sm cursor-pointer"
                    >
                      <Globe className="w-4 h-4 text-[#DCE6BE]" />
                      <span>Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
