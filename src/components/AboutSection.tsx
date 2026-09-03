import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, RESUME_DATA } from '../data/portfolioData';
import { useMedia } from '../context/MediaContext';
import { 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Figma, 
  Sparkles, 
  GraduationCap, 
  Palette, 
  Layers, 
  Workflow, 
  MapPin, 
  Compass 
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
  onNavigateToWork: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, onNavigateToWork }) => {
  const { assets } = useMedia();
  const [activeTab, setActiveTab] = useState<'philosophy' | 'skills' | 'education'>('philosophy');

  const coreDesignSkills = (
    RESUME_DATA.skills.find((s) => s.category.toLowerCase().includes('design'))?.items ||
    'Wireframing, User Flows, Prototyping, Visual Design, Interaction Design, Design Systems, Accessibility'
  )
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#5F6B12] font-display">
          About the Designer
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2D3319] font-display uppercase tracking-tight">
          Crafting Experiences With Purpose
        </h2>
        <p className="text-sm sm:text-base text-[#2D3319]/75 font-body leading-relaxed">
          Combining analytical problem solving, component-based design systems, and empathetic user research.
        </p>
      </div>

      {/* Main About Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* LEFT COLUMN: Designer Portrait Card with Profile.png */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-white/95 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border border-[#5A5A40]/10 shadow-md flex flex-col justify-between"
        >
          {/* Portrait Container */}
          <div className="relative w-full aspect-[4/4.5] rounded-2xl bg-gradient-to-b from-[#F5F5F0] to-[#EBECE0] overflow-hidden flex items-center justify-center p-4 border border-[#5A5A40]/10 shadow-inner group">
            {assets.heroCharacterImage ? (
              <img
                src={assets.heroCharacterImage}
                alt="Sruthy Suresh - Product Designer"
                className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-[#5F6B12]/20 flex items-center justify-center">
                <Palette className="w-12 h-12 text-[#5F6B12]" />
              </div>
            )}

            {/* Live Location & Availability Badge */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#5A5A40]/10 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#2D3319]">
                <MapPin className="w-3.5 h-3.5 text-[#5F6B12]" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#5F6B12]">
                <span className="w-2 h-2 rounded-full bg-[#5F6B12] animate-ping" />
                <span>Open for Roles</span>
              </div>
            </div>
          </div>

          {/* Quick Bio Summary Under Photo */}
          <div className="pt-6 space-y-2">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-[#2D3319]">
              Sruthy Suresh
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5F6B12]">
              Product Designer • UI/UX Designer
            </p>
            <p className="text-xs text-[#2D3319]/75 leading-relaxed pt-1 font-body">
              Focusing on clean UI architectures, mobile ergonomics, and end-to-end Figma workflows from wireframe discovery to hi-fi clickable prototypes.
            </p>
          </div>

          {/* Quick CTA */}
          <div className="pt-5 border-t border-[#5A5A40]/10 mt-5 flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex-1 px-4 py-2.5 rounded-full bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume</span>
            </button>
            <button
              onClick={onNavigateToWork}
              className="px-4 py-2.5 rounded-full bg-[#F5F5F0] hover:bg-[#EBEBE0] text-[#2D3319] text-xs font-bold uppercase tracking-wider transition-all border border-[#5A5A40]/15 inline-flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Interactive Tabs for Philosophy, Skills & Education */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-white/95 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-[#5A5A40]/10 shadow-md flex flex-col justify-between"
        >
          <div>
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 mb-8 max-w-md">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'philosophy' 
                    ? 'bg-white text-[#5F6B12] shadow-xs' 
                    : 'text-[#2D3319]/70 hover:text-[#2D3319]'
                }`}
              >
                Philosophy
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'skills' 
                    ? 'bg-white text-[#5F6B12] shadow-xs' 
                    : 'text-[#2D3319]/70 hover:text-[#2D3319]'
                }`}
              >
                Skills & Tools
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'education' 
                    ? 'bg-white text-[#5F6B12] shadow-xs' 
                    : 'text-[#2D3319]/70 hover:text-[#2D3319]'
                }`}
              >
                Education
              </button>
            </div>

            {/* TAB CONTENT: 1. PHILOSOPHY */}
            {activeTab === 'philosophy' && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#2D3319]">
                    Human-Centered Empathy & Systems Thinking
                  </h3>
                  <p className="text-sm text-[#2D3319]/80 font-body leading-relaxed">
                    Great product design lives at the intersection of real human friction and scalable interface architecture. I believe every layout should feel natural, effortless, and accessible without visual clutter.
                  </p>
                </div>

                {/* 3 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-1.5">
                    <Workflow className="w-5 h-5 text-[#5F6B12]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3319]">User Flows First</h4>
                    <p className="text-[11px] text-[#2D3319]/70 leading-relaxed">
                      Mapping user journeys and edge cases before opening high-fidelity mocks.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-1.5">
                    <Layers className="w-5 h-5 text-[#5F6B12]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3319]">Figma Tokens</h4>
                    <p className="text-[11px] text-[#2D3319]/70 leading-relaxed">
                      Building scalable component libraries with auto-layout and variable modes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-1.5">
                    <Sparkles className="w-5 h-5 text-[#5F6B12]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3319]">Micro-Delight</h4>
                    <p className="text-[11px] text-[#2D3319]/70 leading-relaxed">
                      Elevating core product experiences with intuitive gestures and micro-interactions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: 2. SKILLS & TOOLS */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#2D3319]">
                    Design Capabilities & Toolkit
                  </h3>
                  <p className="text-sm text-[#2D3319]/80 font-body leading-relaxed">
                    Practiced across every stage of the design double diamond framework.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* Design Skills */}
                  <div className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B12]">Core UX/UI Skills</span>
                    <div className="flex flex-wrap gap-1.5">
                      {coreDesignSkills.slice(0, 8).map((skill) => (
                        <span key={skill} className="text-xs px-2.5 py-1 rounded-full bg-white text-[#2D3319] border border-[#5A5A40]/10 font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Software & Tools */}
                  <div className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5F6B12]">Design Software</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Figma', 'FigJam', 'Adobe Photoshop', 'Adobe Illustrator', 'Prototyping', 'Design Tokens'].map((tool) => (
                        <span key={tool} className="text-xs px-2.5 py-1 rounded-full bg-white text-[#5F6B12] font-semibold border border-[#5A5A40]/10">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: 3. EDUCATION & CERTIFICATIONS */}
            {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-[#2D3319]">
                    Education & Certifications
                  </h3>
                  <p className="text-sm text-[#2D3319]/80 font-body leading-relaxed">
                    Strong academic grounding in computer science and professional UX design certifications.
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F5F5F0] border border-[#5A5A40]/10 flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#5F6B12] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3319]">{edu.degree}</h4>
                        <p className="text-xs text-[#2D3319]/75">{edu.institution}</p>
                        <p className="text-[11px] text-[#5F6B12] font-medium">{edu.period}</p>
                      </div>
                    </div>
                  ))}

                  {/* Certification */}
                  <div className="p-4 rounded-2xl bg-[#5F6B12]/10 border border-[#5F6B12]/20 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#5F6B12] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3319]">Google UX Design Professional Certificate</h4>
                      <p className="text-xs text-[#2D3319]/75">Coursera / Google</p>
                      <p className="text-[11px] text-[#5F6B12] font-semibold">Foundations of UX, Research, Prototyping</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section Footnote / Case Study CTA */}
          <div className="pt-8 border-t border-[#5A5A40]/10 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#2D3319]/75">
              Want to see this design process in action?
            </div>
            <button
              onClick={onNavigateToWork}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5F6B12] hover:text-[#2D3319] transition-colors cursor-pointer"
            >
              <span>Explore 2 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
