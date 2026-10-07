import React from 'react';
import { Project } from '../types';
import { 
  Sparkles, CheckCircle2, Figma, 
  Lightbulb, Users, ArrowRight, Target, Compass, 
  MapPin, Heart, Bookmark, Search, 
  ThumbsUp, Star, ExternalLink,
  Map, Globe
} from 'lucide-react';
import { MockupOdyssey } from './MockupOdyssey';

interface OdysseyCaseStudyContentProps {
  project: Project;
  customCover?: string;
  visualMode: 'cover' | 'mockup';
  setVisualMode: (mode: 'cover' | 'mockup') => void;
}

export const OdysseyCaseStudyContent: React.FC<OdysseyCaseStudyContentProps> = ({
  project,
  customCover,
  visualMode,
  setVisualMode,
}) => {
  const experienceFlowSteps = [
    {
      step: "01",
      title: "Explore India",
      desc: "Interactive illustrated vector map opens as the primary hero entry point.",
      action: "Geography sparks natural curiosity before search.",
    },
    {
      step: "02",
      title: "Select State",
      desc: "User selects a state (e.g. Kerala) to open a regional overview dashboard.",
      action: "24 Places • 18 Foods • 12 Wildlife • 16 Nature",
    },
    {
      step: "03",
      title: "Explore District",
      desc: "Progressive drill-down from state into specific districts (e.g. Thrissur).",
      action: "Isolates authentic regional culture and towns.",
    },
    {
      step: "04",
      title: "Discover Local Experiences",
      desc: "Browse authentic local food, wildlife spots, nature trails, and folk heritage.",
      action: "Surfaces places beyond mass tourism circuits.",
    },
    {
      step: "05",
      title: "View Details",
      desc: "Open dedicated place detail sheet with photos, seasonality, and local tips.",
      action: "Clear context without commercial ads.",
    },
    {
      step: "06",
      title: "Save / Search",
      desc: "One-tap bookmark to personal travel collection, or refine with climate filters.",
      action: "Never lose interesting travel discoveries.",
    },
    {
      step: "07",
      title: "Contribute",
      desc: "Share hidden discoveries with fellow travellers through Community Picks.",
      action: "Turns travellers into active contributors.",
    },
  ];

  const coreFeatures = [
    {
      num: "01",
      title: "Interactive India Map",
      desc: "The heart of Odyssey. Users select states and explore districts progressively: India → State → District → Locality → Place. Transforms geography into an exploration tool.",
      badge: "Core Interaction",
      highlight: "India → State → District → Place",
    },
    {
      num: "02",
      title: "State & District Discovery",
      desc: "Selecting a state opens a local discovery space with clear categorisation across places, cuisines, and nature before drilling into districts.",
      badge: "Regional Drill-Down",
      highlight: "Kerala: 24 Places • 18 Foods • 12 Wildlife • 16 Nature",
    },
    {
      num: "03",
      title: "Local Discovery",
      desc: "Surfaces authentic regional gems across five pillars: Places, Food, Wildlife, Nature, and Culture, going far beyond commercial tourist packages.",
      badge: "Authentic Content",
      highlight: "Places • Food • Wildlife • Nature • Culture",
    },
    {
      num: "04",
      title: "Community Picks",
      desc: "Recommendations from travellers and local explorers featuring ratings, personal quotes, helpfulness upvotes, and instant save options.",
      badge: "Local Knowledge",
      highlight: "Riya S. • ★ 4.8 • “Hidden waterfall in Western Ghats”",
    },
    {
      num: "05",
      title: "Save Places",
      desc: "One-tap bookmarking turns random discoveries across social media and blogs into an organized, personal travel bucket list ready for trip planning.",
      badge: "Personal Collection",
      highlight: "♡ Save to My Collection • 14 Saved Places",
    },
    {
      num: "06",
      title: "Search & Filter",
      desc: "Search for specific destinations when intent is already known. Includes facets for Places, Food, Wildlife, Culture, and Climate (Rain, Snow, Hot).",
      badge: "Intent-Driven Query",
      highlight: "Filters: Category + Climate (Snow, Rain, Hot)",
    },
    {
      num: "07",
      title: "Add Recommendation",
      desc: "Allows travellers to submit places they know with photos, category tags, and reviews, converting Odyssey into a community-driven discovery ecosystem.",
      badge: "Contribution Loop",
      highlight: "+ Recommend a Place • Community Co-creation",
    },
  ];

  const designPrinciples = [
    {
      num: "01",
      title: "Discovery Before Search",
      desc: "Users should be able to explore without knowing exactly what they want upfront.",
    },
    {
      num: "02",
      title: "Map as the Starting Point",
      desc: "Geography creates curiosity and gives users a visual way to explore India state by state.",
    },
    {
      num: "03",
      title: "Local Over Generic",
      desc: "Prioritize authentic regional experiences, indigenous food, and community knowledge.",
    },
    {
      num: "04",
      title: "Save What Inspires You",
      desc: "Interesting discoveries should be friction-free to remember, organize, and revisit.",
    },
    {
      num: "05",
      title: "Users as Contributors",
      desc: "Travellers can add their own discoveries, preserving awareness of lesser-known spots.",
    },
  ];

  const designIterations = [
    {
      problem: "Users may not know where to begin exploring India.",
      insight: "Starting with a location can create curiosity.",
      designChange: "Made the interactive India map the primary exploration point.",
    },
    {
      problem: "Showing too much information at once can overwhelm users.",
      insight: "Users need progressive discovery.",
      designChange: "Structured progressive hierarchy: India → State → District → Place.",
    },
    {
      problem: "Interesting destinations can easily be forgotten.",
      insight: "Users need a way to organize discoveries.",
      designChange: "Added Save Place functionality and personal Saved Places collection.",
    },
    {
      problem: "Hidden local experiences are difficult to discover.",
      insight: "Travellers themselves can become a source of local knowledge.",
      designChange: "Added Community Picks and an intuitive Add Recommendation flow.",
    },
    {
      problem: "Users sometimes know exactly what they want.",
      insight: "Exploration and direct search should coexist seamlessly.",
      designChange: "Added Search and multi-category Filters including climate facets.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* ============================================================== */}
      {/* 01. OVERVIEW */}
      {/* ============================================================== */}
      <div id="ody-overview" className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#5F6B12] text-xs font-bold uppercase tracking-wider border border-[#5A5A40]/10 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#5F6B12]" />
              <span>UI/UX Design, Figma • Travel Discovery • Web App</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3319] leading-tight uppercase tracking-tight font-display">
                ODYSSEY
              </h1>
              <span className="text-base sm:text-xl font-bold text-[#5F6B12] uppercase tracking-wider block mt-1">
                A Journey Through the Soul of India
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#2D3319] opacity-85 leading-relaxed">
              An interactive travel discovery platform that helps users explore India state by state through local places, food, wildlife, nature and community recommendations.
            </p>

            {/* Core Idea Strip */}
            <div className="p-3.5 rounded-2xl bg-[#5F6B12] text-white flex items-center justify-between shadow-xs border border-white/10">
              <div className="text-xs sm:text-sm font-bold tracking-wide">
                Explore India. Discover the local. Share the journey.
              </div>
              <Compass className="w-4 h-4 text-[#F3F6D4] shrink-0" />
            </div>

            {/* Metadata Strip */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Role</span>
                <span className="text-xs font-bold text-[#2D3319]">UI/UX Designer</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Platform</span>
                <span className="text-xs font-bold text-[#2D3319]">Web App</span>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-[#5A5A40]/10 shadow-2xs">
                <span className="text-[10px] text-[#5F6B12] uppercase font-bold tracking-wider block">Differentiator</span>
                <span className="text-xs font-bold text-[#2D3319]">Interactive Map</span>
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

          {/* Visual Showcase Frame with Toggle */}
          <div className="lg:col-span-6 h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#5A5A40]/15 bg-gradient-to-br from-[#FAF8F2] to-[#EBF0DE] flex flex-col items-center justify-center relative p-4 shadow-inner">
            {customCover && (
              <div className="absolute top-3 right-3 z-20 flex bg-white/90 backdrop-blur-md rounded-full p-1 border border-[#5A5A40]/15 shadow-2xs text-[11px] font-bold">
                <button
                  onClick={() => setVisualMode('cover')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    visualMode === 'cover' ? 'bg-[#5F6B12] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Map Design
                </button>
                <button
                  onClick={() => setVisualMode('mockup')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    visualMode === 'mockup' ? 'bg-[#5F6B12] text-white shadow-2xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Interactive Prototype
                </button>
              </div>
            )}

            {visualMode === 'cover' && customCover ? (
              <div className="w-full h-full flex items-center justify-center p-2">
                <img
                  src={customCover}
                  alt={project.title}
                  className="w-full h-full object-contain filter drop-shadow-md transition-all rounded-xl"
                />
              </div>
            ) : (
              <div className="w-full h-full">
                <MockupOdyssey />
              </div>
            )}
          </div>
        </div>

        {/* Narrative Card & Ecosystem Formula */}
        <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
              Project Overview
            </span>
            <span className="text-[11px] font-bold bg-[#FAF8F2] text-[#5F6B12] px-2.5 py-0.5 rounded-full border border-[#5F6B12]/20">
              India • State • District • Local Discovery
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#2D3319] opacity-85 leading-relaxed">
            People often want to explore India beyond the usual tourist destinations, but discovering authentic places, local food, wildlife and lesser-known experiences requires searching across multiple platforms.
          </p>
          <p className="text-sm sm:text-base text-[#2D3319] opacity-85 leading-relaxed">
            Odyssey brings these discoveries together through an interactive map. Users can start with India, select a state, explore its districts and discover local places and experiences. They can then save places, search using filters and contribute their own recommendations.
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#5F6B12]/20 space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5F6B12] block">
              The Experience is Designed Around:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#2D3319]">
              <span className="bg-white px-3 py-1.5 rounded-xl border border-stone-200">INTERACTIVE MAP</span>
              <span className="text-[#5F6B12]">+</span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-stone-200">LOCAL DISCOVERY</span>
              <span className="text-[#5F6B12]">+</span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-stone-200">COMMUNITY</span>
              <span className="text-[#5F6B12]">+</span>
              <span className="bg-white px-3 py-1.5 rounded-xl border border-stone-200">PERSONAL SAVED PLACES</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 02. DESIGN CHALLENGE */}
      {/* ============================================================== */}
      <div id="ody-challenge" className="space-y-6">
        <div className="bg-[#5F6B12] text-white p-6 sm:p-8 rounded-[32px] shadow-md border border-white/10 space-y-3">
          <span className="text-xs font-bold text-[#F3F6D4] uppercase tracking-widest block">
            The Design Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            “How might we make it easier for travellers to discover authentic places across India without having to search through multiple platforms?”
          </h2>
          <p className="text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed pt-1">
            The design challenge was to make discovery feel like exploration rather than a traditional search experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-2">
            <span className="text-xs font-bold text-[#C05621] uppercase tracking-wider block flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#C05621]" />
              <span>Traditional Paradigm</span>
            </span>
            <p className="text-base font-bold text-[#2D3319]">
              “What place are you looking for?”
            </p>
            <p className="text-xs text-stone-600 leading-relaxed pt-1">
              Presupposes that the user already knows where they want to go. Forces search-first workflows that favor commercial tourist hubs over authentic cultural gems.
            </p>
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-2">
            <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#5F6B12]" />
              <span>The Odyssey Shift</span>
            </span>
            <p className="text-base font-bold text-[#5F6B12]">
              “What part of India would you like to explore?”
            </p>
            <p className="text-xs text-stone-600 leading-relaxed pt-1">
              Treats curiosity as the entry point. Uses geography to guide travellers progressively from country to state to district to local discovery.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 03. USER PERSONAS */}
      {/* ============================================================== */}
      <div id="ody-personas" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
              User Personas
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#2D3319] mt-0.5">
              Two Explorers, One Ecosystem
            </h3>
          </div>
          <span className="text-xs font-bold bg-[#FAF8F2] text-[#5F6B12] px-3 py-1 rounded-full border border-[#5F6B12]/20">
            Compact Bento Layout
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* PERSONA 01: ANAYA MENON */}
          <div className="bg-white p-6 sm:p-7 rounded-[32px] border border-[#5A5A40]/15 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-2xl font-bold text-[#2D3319]">Anaya Menon</h4>
                    <span className="text-xs font-bold bg-[#5F6B12] text-white px-2.5 py-0.5 rounded-full">Age 23</span>
                  </div>
                  <span className="text-xs text-[#5F6B12] font-bold uppercase tracking-wider block mt-0.5">
                    Curious Explorer
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE] flex items-center justify-center">
                  <span className="text-2xl leading-none select-none" role="img" aria-label="Woman explorer">👩</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F2] rounded-2xl border border-[#5F6B12]/20">
                <p className="text-xs font-bold italic text-[#2D3319]">
                  “I don't just want to see the famous places. I want to experience the real India.”
                </p>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Anaya wants to discover authentic and less-commercialized places across India. She often discovers places through social media but struggles to organize and remember them.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#556428] block mb-1">
                    🎯 Goals
                  </span>
                  <ul className="text-[11px] text-[#283618] space-y-1">
                    <li>• Discover hidden destinations</li>
                    <li>• Explore local food & culture</li>
                    <li>• Save places for future trips</li>
                    <li>• Recommendations from peers</li>
                  </ul>
                </div>

                <div className="p-3 rounded-2xl bg-[#FDF2F2] border border-[#F5C6C6]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B2C2C] block mb-1">
                    ⚠️ Pain Point
                  </span>
                  <p className="text-[11px] text-[#742A2A] leading-relaxed">
                    Travel discoveries are scattered across different platforms, making them difficult to organize and remember.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PERSONA 02: ROHAN MEHTA */}
          <div className="bg-white p-6 sm:p-7 rounded-[32px] border border-[#5A5A40]/15 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-2xl font-bold text-[#2D3319]">Rohan Mehta</h4>
                    <span className="text-xs font-bold bg-[#8B9E4B] text-white px-2.5 py-0.5 rounded-full">Age 32</span>
                  </div>
                  <span className="text-xs text-[#8B9E4B] font-bold uppercase tracking-wider block mt-0.5">
                    Local Explorer & Contributor
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFF8E7] border border-[#F5DFAD] flex items-center justify-center">
                  <span className="text-2xl leading-none select-none" role="img" aria-label="Man explorer">👨</span>
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F2] rounded-2xl border border-[#5F6B12]/20">
                <p className="text-xs font-bold italic text-[#2D3319]">
                  “I've discovered so many beautiful places that most people don't know about. I want other travellers to experience them too.”
                </p>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                Rohan has travelled across India and enjoys sharing lesser-known destinations with fellow genuine travellers who appreciate local culture.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-[#F5F8ED] border border-[#D5E0BE]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#556428] block mb-1">
                    🎯 Goals
                  </span>
                  <ul className="text-[11px] text-[#283618] space-y-1">
                    <li>• Share hidden destinations</li>
                    <li>• Recommend authentic spots</li>
                    <li>• Rate places objectively</li>
                    <li>• Build personal collection</li>
                  </ul>
                </div>

                <div className="p-3 rounded-2xl bg-[#FDF2F2] border border-[#F5C6C6]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B2C2C] block mb-1">
                    ⚠️ Pain Point
                  </span>
                  <p className="text-[11px] text-[#742A2A] leading-relaxed">
                    There is no focused space for sharing lesser-known local discoveries with travellers who genuinely want them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 04. EXPERIENCE FLOW */}
      {/* ============================================================== */}
      <div id="ody-flow" className="bg-white p-6 sm:p-8 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
            Experience Flow
          </span>
          <h4 className="text-xl font-bold text-[#2D3319] uppercase tracking-tight mt-0.5">
            The Core Discovery Journey
          </h4>
          <p className="text-xs text-stone-500 mt-1">
            One common user journey for both curious explorers and contributors.
          </p>
        </div>

        {/* Highlighted Core Interaction Banner */}
        <div className="p-4 rounded-2xl bg-[#5F6B12] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#F3F6D4] block">
              The Primary Interaction Paradigm
            </span>
            <div className="text-base sm:text-lg font-bold tracking-tight">
              INDIA → STATE → DISTRICT → LOCAL DISCOVERY
            </div>
          </div>
          <span className="text-xs bg-white text-[#5F6B12] font-bold px-3 py-1.5 rounded-full shrink-0">
            Progressive Discovery
          </span>
        </div>

        {/* 7 Visual Step Cards */}
        <div className="space-y-3 relative pl-4 sm:pl-6 border-l-2 border-[#5F6B12]/25 ml-2">
          {experienceFlowSteps.map((step) => (
            <div key={step.step} className="relative group">
              <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5F6B12] text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-2xs">
                {step.step}
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 hover:border-[#5F6B12]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#2D3319]">{step.title}</span>
                  <span className="text-[10px] font-bold text-[#5F6B12] uppercase tracking-wider">
                    Step {step.step} of 07
                  </span>
                </div>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {step.desc}
                </p>
                <div className="text-[11px] font-semibold text-[#5F6B12] mt-1 pt-1 border-t border-stone-200/60">
                  ↳ {step.action}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 05. CORE FEATURES */}
      {/* ============================================================== */}
      <div id="ody-features" className="space-y-4">
        <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
          Core Product Features
        </span>
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#2D3319]">
          The Map as the Heart of Odyssey
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coreFeatures.map((feat) => (
            <div key={feat.num} className="bg-white p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider">
                    Feature {feat.num}
                  </span>
                  <span className="text-[10px] font-bold bg-[#FAF8F2] text-[#5F6B12] px-2 py-0.5 rounded-md border border-[#5F6B12]/20">
                    {feat.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#2D3319]">
                  {feat.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FAF8F2] border border-[#5F6B12]/20 text-[11px] font-bold text-[#5F6B12]">
                {feat.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 06. DESIGN PRINCIPLES */}
      {/* ============================================================== */}
      <div id="ody-principles" className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-4">
        <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
          Design Principles
        </span>
        <h4 className="text-lg font-bold text-[#2D3319] uppercase tracking-tight">
          5 Core Principles Guiding Odyssey
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {designPrinciples.map((p) => (
            <div key={p.num} className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-1">
              <span className="text-xs font-bold text-[#5F6B12]">{p.num}. {p.title}</span>
              <p className="text-xs text-[#2D3319] opacity-80 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DESIGN ITERATIONS */}
      <div id="ody-iterations" className="space-y-4">
        <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
          Design Iterations
        </span>
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#2D3319]">
          Problem → Insight → Design Change
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {designIterations.map((it, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-5 rounded-2xl border border-[#5A5A40]/10 shadow-xs space-y-2 text-xs">
              <span className="font-bold text-[#5F6B12] uppercase tracking-wider text-[11px] block">
                Iteration 0{idx + 1}
              </span>
              <div className="space-y-1.5">
                <div>
                  <strong className="text-red-700">Problem:</strong>
                  <p className="text-stone-600 mt-0.5">{it.problem}</p>
                </div>
                <div>
                  <strong className="text-stone-700">Insight:</strong>
                  <p className="text-stone-600 mt-0.5">{it.insight}</p>
                </div>
                <div className="p-2 bg-[#FAF8F2] rounded-xl border border-[#5F6B12]/20">
                  <strong className="text-[#5F6B12]">Design Change:</strong>
                  <p className="text-[#2D3319] font-medium mt-0.5">{it.designChange}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 09. KEY UX INSIGHT & DIFFERENTIATOR */}
      {/* ============================================================== */}
      <div id="ody-insight" className="space-y-4">
        <div className="bg-[#FAF8F2] p-6 sm:p-8 rounded-[28px] border border-[#5F6B12]/20 shadow-xs space-y-3">
          <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-widest block">
            Key UX Insight
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#2D3319] leading-snug">
            “Travel discovery does not always begin with a destination. Sometimes it begins with curiosity. Odyssey therefore makes the map the starting point of the experience.”
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Instead of <strong className="text-[#2D3319]">SEARCH → RESULT</strong>, Odyssey encourages: <strong className="text-[#5F6B12]">EXPLORE → DISCOVER → SAVE → SHARE</strong>. The interactive map helps users move naturally from India to state, to district, and down to localized authentic experiences.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold text-[#5F6B12]">
            <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">INTERACTIVE MAP</span>
            <span>+</span>
            <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">LOCAL DISCOVERY</span>
            <span>+</span>
            <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">COMMUNITY</span>
            <span>+</span>
            <span className="bg-white px-3 py-1.5 rounded-xl border border-[#5F6B12]/20">SAVED PLACES</span>
          </div>
        </div>

        {/* The Differentiator Callout */}
        <div className="bg-[#5F6B12] text-white p-6 sm:p-7 rounded-[28px] space-y-2 shadow-md border border-white/10">
          <span className="text-xs font-bold text-[#F3F6D4] uppercase tracking-widest block">
            The Core Differentiator
          </span>
          <h4 className="text-lg sm:text-xl font-bold">
            Odyssey is not simply another travel directory.
          </h4>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            The interactive map is the core differentiator. It transforms travel discovery from “What should I search for?” into “Let me explore and see what I discover.”
          </p>
          <div className="pt-1 text-sm sm:text-base font-bold text-[#F3F6D4]">
            Explore India. Discover the local. Share the journey.
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 10. OUTCOME & ROLE */}
      {/* ============================================================== */}
      <div id="ody-outcome" className="space-y-6">
        <div className="bg-white p-6 sm:p-7 rounded-[28px] border border-[#5A5A40]/10 shadow-xs space-y-3">
          <span className="text-xs font-bold text-[#5F6B12] uppercase tracking-wider block">
            Role & Project Outcome
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-bold text-[#2D3319] mb-1">UI/UX Designer Responsibilities:</h5>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>• Problem definition & user research planning</li>
                <li>• Persona creation (Anaya Menon & Rohan Mehta)</li>
                <li>• Unified 7-step experience flow mapping</li>
                <li>• Interactive map exploration architecture</li>
                <li>• UI design, component systems & interactive Figma prototyping</li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold text-[#2D3319] mb-1">Project Focus & Competencies:</h5>
              <ul className="text-xs text-stone-600 space-y-1">
                <li>• Map-based UX & geographic discovery patterns</li>
                <li>• Travel discovery beyond commercial aggregators</li>
                <li>• Community UX & recommendation co-creation</li>
                <li>• Search & multi-facet filtering (Category + Climate)</li>
                <li>• Personalization & saved collection architecture</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Conclusion Sheet */}
        <div className="bg-[#2D3319] text-[#F5F5F0] p-6 sm:p-8 rounded-[32px] space-y-3 border border-white/10">
          <span className="text-xs font-bold text-[#DCE6BE] uppercase tracking-widest block">
            Final Case Study Conclusion
          </span>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Odyssey started with a simple question: <strong className="text-white">“How can travellers discover the authentic soul of India beyond commercial tourist circuits?”</strong>
          </p>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            The solution was to make India itself the starting point. Users can explore the map, move from state to district, discover local places and experiences, save what inspires them, and contribute discoveries of their own.
          </p>
          <div className="pt-2 text-base sm:text-lg font-bold text-[#F3F6D4] tracking-wide font-display">
            Explore India. Discover the local. Share the journey.
          </div>
        </div>
      </div>
    </div>
  );
};
