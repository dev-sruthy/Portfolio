import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { 
  X, ExternalLink, Sparkles, CheckCircle2, Layers, Figma, 
  Lightbulb, Users, ArrowRight, Target, Flame, Compass, 
  Smile, ShieldCheck, TrendingUp, Award, Heart, HelpCircle,
  BookOpen, GitFork, Check, Eye, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MockupOdyssey } from './MockupOdyssey';
import { MockupCoinGrow } from './MockupCoinGrow';
import { OdysseyCaseStudyContent } from './OdysseyCaseStudyContent';
import { useMedia } from '../context/MediaContext';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { assets } = useMedia();
  const [visualMode, setVisualMode] = useState<'cover' | 'mockup'>('cover');
  const [activeSection, setActiveSection] = useState<string>('cg-overview');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const isCoinGrow = project?.id === 'coingrow';

  const coinGrowSidebarLinks = [
    { id: 'cg-overview', label: 'Overview' },
    { id: 'cg-challenge', label: 'Design Challenge' },
    { id: 'cg-personas', label: 'User Personas' },
    { id: 'cg-flow', label: 'Experience Flow' },
    { id: 'cg-features', label: 'Core Features' },
    { id: 'cg-principles', label: 'Design Principles' },
    { id: 'cg-iterations', label: 'Design Iterations' },
    { id: 'cg-insight', label: 'Key UX Insight' },
    { id: 'cg-outcome', label: 'Outcome & Role' },
  ];

  const odysseySidebarLinks = [
    { id: 'ody-overview', label: 'Overview' },
    { id: 'ody-challenge', label: 'Design Challenge' },
    { id: 'ody-personas', label: 'User Personas' },
    { id: 'ody-flow', label: 'Experience Flow' },
    { id: 'ody-features', label: 'Core Features' },
    { id: 'ody-principles', label: 'Design Principles' },
    { id: 'ody-iterations', label: 'Design Iterations' },
    { id: 'ody-insight', label: 'Key UX Insight' },
    { id: 'ody-outcome', label: 'Outcome & Role' },
  ];

  const sidebarLinks = isCoinGrow ? coinGrowSidebarLinks : odysseySidebarLinks;

  useEffect(() => {
    if (project) {
      setActiveSection(project.id === 'coingrow' ? 'cg-overview' : 'ody-overview');
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;
      const containerRect = container.getBoundingClientRect();

      // Check if scrolled near the bottom: activate last item
      if (container.scrollHeight - container.scrollTop - container.clientHeight < 50) {
        setActiveSection(sidebarLinks[sidebarLinks.length - 1].id);
        return;
      }

      // Find the currently viewed section
      let currentSection = sidebarLinks[0].id;
      for (const link of sidebarLinks) {
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
  }, [project, sidebarLinks]);

  if (!project) return null;

  const customCover = isCoinGrow ? assets.coinGrowCoverImage : assets.odysseyCoverImage;

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

  const userFlowSteps = [
    { title: "Create Account", desc: "Quick registration with minimal friction designed specifically for teens." },
    { title: "Enter Age", desc: "Sets age-appropriate guardrails and interactive educational mode." },
    { title: "Enter Monthly Pocket Money", desc: "Inputs monthly allowance (e.g. ₹2,000) as the foundation." },
    { title: "Set Monthly Budget", desc: "Visually allocates allowance into Save, Fun, Food, and Transport." },
    { title: "Choose Saving Goal", desc: "Picks a tangible target like headphones or bicycle." },
    { title: "Track Spending", desc: "Simple, non-judgmental expense logging without anxiety or guilt." },
    { title: "Learn About Money", desc: "Bite-sized financial literacy lessons and saving habits." },
    { title: "Learn Investing", desc: "Simulated concepts, diversification and company basics." },
    { title: "Save", desc: "Watches living sprout tree progress toward milestone." },
    { title: "Join Friend Challenge", desc: "Positive social motivation with peers (e.g. 'Save ₹500 more')." },
    { title: "Earn Achievements", desc: "Smart money badges, streaks, and milestone celebrations." },
    { title: "Reach Goal", desc: "Celebrates completing savings goal with confidence." },
  ];

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
          <div className="bg-[#F5F5F0]/95 backdrop-blur-md px-5 sm:px-8 py-3.5 sm:py-4 border-b border-[#5A5A40]/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#5F6B12] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                {project.number}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2D3319] uppercase tracking-tight leading-none">
                  {project.title}
                </h3>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#5F6B12]">
                  {project.tagline}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5F6B12] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E580D] transition-colors shadow-2xs"
              >
                <Figma className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open in Figma</span>
                <span className="sm:hidden">Figma</span>
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

          {/* Mobile Quick Jump Scrollbar (Shown only on small screens) */}
          {sidebarLinks.length > 0 && (
            <div className="md:hidden bg-white/95 border-b border-[#5A5A40]/10 px-4 py-2.5 overflow-x-auto flex items-center gap-1.5 text-xs font-bold scrollbar-none shrink-0">
              {sidebarLinks.map((link) => (
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
          )}

          {/* Main Modal Body with Sidebar Layout */}
          <div className="flex-1 flex overflow-hidden relative">
            
            {/* Desktop / Tablet Sidebar Navigation */}
            {sidebarLinks.length > 0 && (
              <aside className="hidden md:flex flex-col w-56 lg:w-64 bg-white/80 border-r border-[#5A5A40]/10 p-5 overflow-y-auto shrink-0 select-none justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B12] block mb-3 px-2">
                    Case Study Contents
                  </span>
                  <nav className="space-y-1">
                    {sidebarLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                          activeSection === link.id
                            ? 'bg-[#5F6B12] text-white shadow-xs font-extrabold'
                            : 'text-[#2D3319]/70 hover:text-[#2D3319] hover:bg-stone-100'
                        }`}
                      >
                        <span>{link.label}</span>
                        {activeSection === link.id && (
                          <ChevronRight className="w-3.5 h-3.5 text-white/90" />
                        )}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Sidebar Bottom CTA */}
                <div className="pt-4 border-t border-stone-200/60 mt-4">
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#F5F5F0] hover:bg-stone-200 text-[#2D3319] text-xs font-bold transition-colors inline-flex items-center justify-between border border-[#5A5A40]/15"
                  >
                    <span className="flex items-center gap-1.5">
                      <Figma className="w-3.5 h-3.5 text-[#5F6B12]" />
                      <span>Figma Prototype</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-stone-500" />
                  </a>
                </div>
              </aside>
            )}

            {/* Scrollable Long-form Content Area */}
            <div 
              ref={scrollContainerRef}
              className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-10 scroll-smooth"
            >
              {isCoinGrow ? (
                <>
                  {/* OVERVIEW SECTION */}
                  <div id="cg-overview" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      <div className="lg:col-span-6 space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#5F6B12] text-xs font-bold uppercase tracking-wider border border-[#5A5A40]/10 shadow-2xs">
                          <Sparkles className="w-3.5 h-3.5 text-[#5F6B12]" />
                          <span>{project.category}</span>
                        </div>

                        <div>
                          <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3319] leading-tight uppercase tracking-tight">
                            {project.title}
                          </h1>
                          <span className="text-base sm:text-lg font-bold text-[#5F6B12] uppercase tracking-wider block mt-0.5">
                            {project.tagline}
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-[#2D3319] opacity-80 leading-relaxed">
                          A playful financial habit-building app that helps teenagers understand money, build saving habits and learn financial concepts through simple visual experiences.
                        </p>

                        {/* Metadata Strip */}
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                            <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Role</span>
                            <span className="text-xs font-bold text-[#2D3319]">{project.role}</span>
                          </div>
                          <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                            <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Platform</span>
                            <span className="text-xs font-bold text-[#2D3319]">Mobile App</span>
                          </div>
                          <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                            <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Focus</span>
                            <span className="text-xs font-bold text-[#2D3319]">Financial Habits</span>
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

                      {/* Visual Showcase Frame */}
                      <div className="lg:col-span-6 h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#5A5A40]/15 bg-gradient-to-br from-[#FAF8F2] to-[#EBF0DE] flex flex-col items-center justify-center relative p-4 shadow-inner">
                        {customCover && (
                          <div className="absolute top-3 right-3 z-20 flex bg-white/90 backdrop-blur-md rounded-full p-1 border border-[#5A5A40]/15 shadow-2xs text-[11px] font-bold">
                            <button
                              onClick={() => setVisualMode('cover')}
                              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                                visualMode === 'cover' ? 'bg-[#5F6B12] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                              }`}
                            >
                              Mockup Design
                            </button>
                            <button
                              onClick={() => setVisualMode('mockup')}
                              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                                visualMode === 'mockup' ? 'bg-[#5F6B12] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                              }`}
                            >
                              Interactive UI
                            </button>
                          </div>
                        )}

                        {visualMode === 'cover' && customCover ? (
                          <div className="w-full h-full flex items-center justify-center p-2">
                            <img
                              src={customCover}
                              alt={project.title}
                              className="w-full h-full object-contain filter drop-shadow-md transition-all"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full">
                            <MockupCoinGrow />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Overview Narrative (CoinGrow) */}
                    <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-4">
                      <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                        Project Overview
                      </span>
                      <p className="text-sm sm:text-base text-[#2D3319] opacity-85 leading-relaxed">
                        CoinGrow is a financial habit-building concept designed for teenagers who receive pocket money from their parents or earn small amounts through household tasks.
                      </p>
                      <p className="text-sm sm:text-base text-[#2D3319] opacity-85 leading-relaxed">
                        The app helps teenagers understand where their money goes, create budgets, set saving goals and learn the basics of investing in a simple and approachable way. Instead of presenting finance through complicated charts, financial terminology and intimidating interfaces, CoinGrow uses friendly illustrations, simple numbers, progress indicators, achievements and social challenges to make financial learning easier to understand.
                      </p>
                      <div className="p-3.5 rounded-xl bg-[#FAF8F2] border border-[#5F6B12]/20 text-xs sm:text-sm font-semibold text-[#5F6B12] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#5F6B12] shrink-0" />
                        <span>The goal is not to make teenagers professional investors. The goal is to help them develop healthy money habits early.</span>
                      </div>
                    </div>
                  </div>

                  {/* DESIGN CHALLENGE & GOALS */}
                  <div id="cg-challenge" className="space-y-6">
                {/* Prominent Design Challenge Banner */}
                <div className="bg-[#5F6B12] text-white p-6 sm:p-8 rounded-[32px] shadow-md border border-white/10 space-y-3">
                  <span className="text-xs font-bold text-[#F3F6D4] uppercase tracking-widest block">
                    The Design Challenge
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                    “How might we make money management simple, visual and engaging enough for teenagers to develop healthy financial habits?”
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed pt-1">
                    Positioning CoinGrow as a financial education and habit-building experience rather than a traditional trading application.
                  </p>
                </div>

                {/* Problem vs Goal Bento */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-[#C05621] uppercase tracking-wider block flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-[#C05621]" />
                      <span>Problem Statement</span>
                    </span>
                    <p className="text-xs sm:text-sm text-[#2D3319] opacity-85 leading-relaxed">
                      Many teenagers receive pocket money but do not have a simple way to learn how to manage it. They may spend most of their money on snacks, entertainment, shopping or activities without understanding how small spending decisions affect their ability to save.
                    </p>
                    <p className="text-xs text-stone-600 font-medium pt-1">
                      Traditional finance apps intimidate younger users because they often use:
                    </p>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-700">
                      <div className="p-2 bg-stone-50 rounded-lg">✕ Complex terminology</div>
                      <div className="p-2 bg-stone-50 rounded-lg">✕ Dense dashboards</div>
                      <div className="p-2 bg-stone-50 rounded-lg">✕ Red & green charts</div>
                      <div className="p-2 bg-stone-50 rounded-lg">✕ Adult-focused interfaces</div>
                    </div>
                    <p className="text-xs text-stone-500 italic pt-1">
                      The problem is not simply a lack of knowledge, but a lack of accessible, age-appropriate, engaging experiences.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#5F6B12]" />
                        <span>Design Goal</span>
                      </span>
                      <p className="text-xs sm:text-sm text-[#2D3319] opacity-85 leading-relaxed mt-2">
                        Create a friendly financial companion that helps teenagers:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#2D3319] pt-2">
                        <li className="flex items-center gap-2">• Understand income & track spending</li>
                        <li className="flex items-center gap-2">• Create a simple budget & set saving goals</li>
                        <li className="flex items-center gap-2">• Learn the basics of investing without intimidation</li>
                        <li className="flex items-center gap-2">• Build consistent habits with achievements & friends</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-[#FAF8F2] rounded-xl border border-[#5F6B12]/20 text-xs text-[#5F6B12] font-bold">
                      Target Users: Primary: Teenagers 13–18 • Secondary: Parents
                    </div>
                  </div>
                </div>
              </div>

              {/* USER PERSONAS */}
              {project.personas && project.personas.length >= 2 && (
                <div id="cg-personas" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                        User Personas
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#2D3319]">
                        Two Distinct Perspectives, One Shared Need
                      </h3>
                    </div>
                    <span className="text-xs font-bold bg-[#FAF8F2] text-[#5F6B12] px-3 py-1 rounded-full border border-[#5F6B12]/20">
                      Bento Box Layout
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* PERSONA 01: ABHI */}
                    <div className="bg-white p-6 sm:p-7 rounded-[32px] border border-[#5A5A40]/15 shadow-sm space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-2xl font-bold text-[#2D3319]">Abhi</h4>
                              <span className="text-xs font-bold bg-[#5F6B12] text-white px-2.5 py-0.5 rounded-full">Age 15</span>
                            </div>
                            <span className="text-xs text-[#5F6B12] font-bold uppercase tracking-wider block mt-0.5">
                              The Curious Beginner
                            </span>
                          </div>
                          <div className="w-12 h-12 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE] flex items-center justify-center text-xl">
                            👦
                          </div>
                        </div>

                        <div className="p-3 bg-[#FAF8F2] rounded-2xl border border-[#5F6B12]/20">
                          <p className="text-xs font-bold italic text-[#2D3319]">
                            “I want to start investing, but I have no idea where to begin.”
                          </p>
                        </div>

                        <p className="text-xs text-stone-600 leading-relaxed">
                          Abhi receives around ₹2,000 every month from his parents. He enjoys spending money on snacks, candies, games and activities with his friends. His father told him saving and investing are important, but adult financial apps feel complicated.
                        </p>

                        <div className="grid grid-cols-2 gap-2.5 pt-1">
                          <div className="p-3 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#556428] block mb-1">
                              🎯 Goals
                            </span>
                            <ul className="text-[11px] text-[#283618] space-y-1">
                              <li>• Understand money flow</li>
                              <li>• Save pocket money</li>
                              <li>• Basics of investing</li>
                              <li>• Learn with friends</li>
                            </ul>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#FDF2F2] border border-[#F5C6C6]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B2C2C] block mb-1">
                              ⚠️ Frustrations
                            </span>
                            <ul className="text-[11px] text-[#742A2A] space-y-1">
                              <li>• Doesn't know where to start</li>
                              <li>• Confusing terminology</li>
                              <li>• Scary red/green charts</li>
                              <li>• Saving feels less exciting</li>
                            </ul>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="p-3 rounded-2xl bg-[#FFF8E7] border border-[#F5DFAD]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B7791F] block mb-1">
                              🔥 Motivations
                            </span>
                            <ul className="text-[11px] text-[#7B4C08] space-y-1">
                              <li>• Curiosity & independence</li>
                              <li>• Friendly competition</li>
                              <li>• Personal goals</li>
                            </ul>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#F0F5FF] border border-[#C3DAFE]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2B6CB0] block mb-1">
                              💡 Needs
                            </span>
                            <ul className="text-[11px] text-[#2A4365] space-y-1">
                              <li>• Visual feedback & budgeting</li>
                              <li>• Small achievable goals</li>
                              <li>• Friendly education</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PERSONA 02: MINI */}
                    <div className="bg-white p-6 sm:p-7 rounded-[32px] border border-[#5A5A40]/15 shadow-sm space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-2xl font-bold text-[#2D3319]">Mini</h4>
                              <span className="text-xs font-bold bg-[#8B9E4B] text-white px-2.5 py-0.5 rounded-full">Age 13</span>
                            </div>
                            <span className="text-xs text-[#8B9E4B] font-bold uppercase tracking-wider block mt-0.5">
                              The Goal-Oriented Saver
                            </span>
                          </div>
                          <div className="w-12 h-12 rounded-2xl bg-[#FFF8E7] border border-[#F5DFAD] flex items-center justify-center text-xl">
                            👧
                          </div>
                        </div>

                        <div className="p-3 bg-[#FAF8F2] rounded-2xl border border-[#5F6B12]/20">
                          <p className="text-xs font-bold italic text-[#2D3319]">
                            “I want my money to grow, and my friends want to do the same.”
                          </p>
                        </div>

                        <p className="text-xs text-stone-600 leading-relaxed">
                          Mini receives small amounts of money from her parents for helping with household tasks. She wants to save the money instead of spending it immediately. Her friends are also interested, making shared challenges and streaks very motivating.
                        </p>

                        <div className="grid grid-cols-2 gap-2.5 pt-1">
                          <div className="p-3 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#556428] block mb-1">
                              🎯 Goals
                            </span>
                            <ul className="text-[11px] text-[#283618] space-y-1">
                              <li>• Save for things she wants</li>
                              <li>• Understand earning & spending</li>
                              <li>• Build a saving habit</li>
                              <li>• Participate in friend challenges</li>
                            </ul>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#FDF2F2] border border-[#F5C6C6]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B2C2C] block mb-1">
                              ⚠️ Frustrations
                            </span>
                            <ul className="text-[11px] text-[#742A2A] space-y-1">
                              <li>• Doesn't know how to divide money</li>
                              <li>• Saving feels repetitive</li>
                              <li>• Apps feel too complicated</li>
                              <li>• Distant goals lose steam</li>
                            </ul>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="p-3 rounded-2xl bg-[#FFF8E7] border border-[#F5DFAD]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B7791F] block mb-1">
                              🔥 Motivations
                            </span>
                            <ul className="text-[11px] text-[#7B4C08] space-y-1">
                              <li>• Rewards & achievements</li>
                              <li>• Friends & shared goals</li>
                              <li>• Seeing tangible progress</li>
                            </ul>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#F0F5FF] border border-[#C3DAFE]">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2B6CB0] block mb-1">
                              💡 Needs
                            </span>
                            <ul className="text-[11px] text-[#2A4365] space-y-1">
                              <li>• Visual saving goals & progress</li>
                              <li>• Streaks & friendly challenges</li>
                              <li>• Easy-to-understand education</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* USER FLOW */}
              <div id="cg-flow" className="bg-white p-6 sm:p-8 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-5">
                <div>
                  <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                    User Flow
                  </span>
                  <h4 className="text-xl font-bold text-[#2D3319] uppercase tracking-tight mt-0.5">
                    Experience Flow
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Sequential steps guiding the user from onboarding through habit building and milestone achievement.
                  </p>
                </div>

                <div className="space-y-3 relative pl-4 sm:pl-6 border-l-2 border-[#5F6B12]/25 ml-2">
                  {userFlowSteps.map((step, idx) => (
                    <div key={step.title} className="relative group">
                      <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5F6B12] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-2xs">
                        {idx + 1}
                      </div>

                      <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 hover:border-[#5F6B12]/40 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-[#2D3319]">{step.title}</span>
                          <span className="text-[10px] font-bold text-[#5F6B12] uppercase tracking-wider">Step {idx + 1} of 12</span>
                        </div>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CORE FEATURES SHOWCASE */}
              <div id="cg-features" className="space-y-4">
                <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                  Core Product Features
                </span>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#2D3319]">
                  Designed Specifically Around Teenager Behavior
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Feature 01: Money Dashboard */}
                  <div className="bg-white p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                      Money Dashboard
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Uses large, approachable numbers and simple visualizations without complicated financial charts.
                    </p>
                    <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#5F6B12]/20 space-y-1 text-xs">
                      <div className="flex justify-between font-bold"><span>Income:</span><span className="text-[#5F6B12]">₹2,000</span></div>
                      <div className="flex justify-between"><span>Expense:</span><span className="text-[#C05621]">₹700</span></div>
                      <div className="flex justify-between"><span>Saved:</span><span className="text-[#556428]">₹800</span></div>
                      <div className="flex justify-between"><span>Learning / Investment:</span><span>₹500</span></div>
                    </div>
                  </div>

                  {/* Feature 02: Smart Budget */}
                  <div className="bg-white p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                      Smart Budget
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Allows users to divide pocket money into clear categories without restrictive guilt.
                    </p>
                    <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#5F6B12]/20 space-y-1 text-xs">
                      <div className="flex justify-between"><span>🌱 Save:</span><span className="font-bold">₹800 (40%)</span></div>
                      <div className="flex justify-between"><span>🎮 Fun:</span><span className="font-bold">₹500 (25%)</span></div>
                      <div className="flex justify-between"><span>🍫 Food:</span><span className="font-bold">₹400 (20%)</span></div>
                      <div className="flex justify-between"><span>🚌 Transport:</span><span className="font-bold">₹300 (15%)</span></div>
                    </div>
                  </div>

                  {/* Feature 03: Saving Goals */}
                  <div className="bg-white p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                      Saving Goals
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Visual goal progress with living tree sprout indicators rather than abstract balances.
                    </p>
                    <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#5F6B12]/20 space-y-1.5 text-xs">
                      <div className="flex justify-between font-bold">
                        <span>🎧 New Headphones</span>
                        <span className="text-[#5F6B12]">25%</span>
                      </div>
                      <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#5F6B12] h-full w-[25%]" />
                      </div>
                      <span className="text-[11px] text-stone-600 block">₹500 / ₹2,000 • ₹1,500 more to go</span>
                    </div>
                  </div>

                  {/* Feature 04: Investment EDUCATION */}
                  <div className="bg-white p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                      Investment Education
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Financial literacy & simulated learning. Not minor trading. Demystifies NIFTY 50 companies and diversification.
                    </p>
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-[11px] text-stone-700 space-y-1">
                      <div>1. What is saving? → 2. What is investing?</div>
                      <div>3. What is a company & stock?</div>
                      <div>4. Diversification & Risk simulation</div>
                    </div>
                  </div>

                  {/* Feature 05: Peer Challenges */}
                  <div className="bg-white p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                      Peer Challenges
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      “Save ₹500 more than last week”. Friendly leaderboard:
                    </p>
                    <div className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[#5F6B12]/20 text-[11px] space-y-0.5">
                      <div className="flex justify-between"><span>1. Riya</span><span className="font-bold">₹610</span></div>
                      <div className="flex justify-between"><span>2. Arjun</span><span className="font-bold">₹540</span></div>
                      <div className="flex justify-between font-bold text-[#5F6B12]"><span>3. You</span><span>₹320 / ₹500</span></div>
                      <div className="flex justify-between text-stone-500"><span>4. Meena</span><span>₹180</span></div>
                    </div>
                  </div>

                  {/* Feature 06: Achievements */}
                  <div className="bg-white p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                      Achievements
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Milestones that celebrate small wins:
                    </p>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-stone-700">
                      <div className="p-1.5 bg-stone-50 rounded">🥇 First Saver</div>
                      <div className="p-1.5 bg-stone-50 rounded">🎯 Budget Buddy</div>
                      <div className="p-1.5 bg-stone-50 rounded">🔥 4-Wk Streak</div>
                      <div className="p-1.5 bg-stone-50 rounded">🏆 Goal Getter</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DESIGN PRINCIPLES */}
              <div id="cg-principles" className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-4">
                <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                  Design Principles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {project.designPrinciples?.map((principle) => (
                    <div key={principle.title} className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-1">
                      <span className="text-xs font-bold text-[#5F6B12]">{principle.title}</span>
                      <p className="text-xs text-[#2D3319] opacity-80 leading-relaxed">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESIGN ITERATIONS */}
              <div id="cg-iterations" className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-4">
                <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                  Design Iterations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.designIterations?.map((it, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-2">
                      <div className="text-xs text-[#9B2C2C] font-bold">Problem: {it.problem}</div>
                      <div className="text-xs text-stone-700"><strong>Insight:</strong> {it.insight}</div>
                      <div className="text-xs text-[#5F6B12] font-bold"><strong>Design Change:</strong> {it.designChange}</div>
                      <div className="text-xs text-stone-600"><strong>Result:</strong> {it.result}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY UX INSIGHT */}
              <div id="cg-insight" className="bg-[#FAF8F2] p-6 sm:p-8 rounded-[32px] border border-[#5F6B12]/20 space-y-4">
                <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                  Key UX Insight
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3319]">
                  “Teenagers do not necessarily need more financial information. They need financial information presented in a way they can understand and act on.”
                </h3>
                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold text-[#5F6B12]">
                  <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">SIMPLE INFORMATION</span>
                  <span>+</span>
                  <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">VISUAL PROGRESS</span>
                  <span>+</span>
                  <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">SMALL GOALS</span>
                  <span>+</span>
                  <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">SOCIAL MOTIVATION</span>
                  <span>+</span>
                  <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">POSITIVE REINFORCEMENT</span>
                </div>
              </div>

              {/* OUTCOME & ROLE */}
              <div id="cg-outcome" className="space-y-6">
                <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-3">
                  <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
                    Role & Project Outcome
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-bold text-[#2D3319] mb-1">UI/UX Designer Responsibilities:</h5>
                      <ul className="text-xs text-stone-600 space-y-1">
                        <li>• Problem definition & user research planning</li>
                        <li>• Persona creation & experience flow mapping</li>
                        <li>• Non-judgmental budgeting interaction model</li>
                        <li>• UI design, component systems & interactive prototyping in Figma</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-[#2D3319] mb-1">Project Impact & Competencies:</h5>
                      <ul className="text-xs text-stone-600 space-y-1">
                        <li>• Financial UX & gamification without speculation</li>
                        <li>• Behavioral habit formation & positive reinforcement</li>
                        <li>• Age-appropriate visual communication & WCAG accessibility</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final Case Study Conclusion */}
                <div className="bg-[#2D3319] text-[#F5F5F0] p-6 sm:p-8 rounded-[32px] space-y-3 border border-white/10">
                  <span className="text-xs font-bold text-[#DCE6BE] uppercase tracking-widest block">
                    Final Case Study Conclusion
                  </span>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    CoinGrow started with a simple question: <strong className="text-white">“How can teenagers learn to manage money before financial mistakes become expensive?”</strong>
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    The solution was not to create a smaller version of a traditional banking application. Instead, CoinGrow was designed around the way teenagers learn and stay motivated: through simple explanations, visual progress, small goals, achievements, and friends.
                  </p>
                  <div className="pt-2 text-base sm:text-lg font-bold text-[#F3F6D4] tracking-wide">
                    Learn your money. Save with purpose. Grow together.
                  </div>
                </div>
              </div>
            </>
          ) : (
            <OdysseyCaseStudyContent
              project={project}
              customCover={customCover}
              visualMode={visualMode}
              setVisualMode={setVisualMode}
            />
          )}

          {/* Bottom Figma CTA */}
              <div className="bg-[#5F6B12] text-[#F5F5F0] p-6 sm:p-7 rounded-[28px] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-white/10">
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-tight text-white">Inspect Full Prototype in Figma</h4>
                  <p className="text-xs text-[#F5F5F0]/80 mt-0.5">
                    Explore full component library, auto-layout variants, interactive microflows, and style guides.
                  </p>
                </div>

                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-white text-[#2D3319] hover:bg-[#F5F5F0] font-bold text-xs uppercase tracking-wider rounded-full inline-flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-sm cursor-pointer"
                >
                  <Figma className="w-4 h-4 text-[#5F6B12]" />
                  <span>Launch Figma File</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
