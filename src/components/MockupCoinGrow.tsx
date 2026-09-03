import React, { useState } from 'react';
import { TrendingUp, Plus, PieChart, Sparkles, Sprout, ArrowUpRight, Zap, Target, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export const MockupCoinGrow: React.FC = () => {
  const [activeStreak, setActiveStreak] = useState(14);
  const [selectedJar, setSelectedJar] = useState<'daily' | 'savings'>('daily');

  return (
    <div className="w-full h-full bg-[#EBF0DE] rounded-2xl p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative border border-[#CDD8B5]">
      {/* Subtle Dot Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#60712A_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      {/* Mini App Header */}
      <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D5E0BE] shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#556428] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            <Sprout className="w-4 h-4 text-[#DCE6BE]" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-[#283618] tracking-tight leading-none font-display">COINGROW</div>
            <div className="text-[10px] text-[#556428] font-medium">Smart Gen-Z Budgeting</div>
          </div>
        </div>

        {/* Gamified Streak Pill */}
        <div className="flex items-center gap-1.5 bg-[#F0F5E3] px-2.5 py-1 rounded-full border border-[#CDD8B5] text-[11px] font-bold text-[#495622]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>🔥 {activeStreak}d Streak</span>
        </div>
      </div>

      {/* Main Balance & Gamified Growth Tree Card */}
      <div className="relative z-10 my-3 flex flex-col gap-2.5">
        <div className="rounded-xl bg-gradient-to-br from-[#FAF8F2] via-[#F4F8EC] to-[#E7EBD4] p-3.5 border border-[#CDD8B5] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-stone-500 font-medium">Total Monthly Savings</span>
            <span className="text-[10px] bg-[#DDE7BE] text-[#495622] font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +18.4%
            </span>
          </div>

          <div className="flex items-baseline justify-between mt-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#283618] tracking-tight font-display">
              $2,450<span className="text-base text-stone-500 font-normal">.80</span>
            </div>
            {/* Gamified Sprout Level */}
            <div className="text-right">
              <span className="text-[10px] font-bold text-[#60712A] uppercase tracking-wider block">Level 4 Sprout</span>
              <span className="text-[11px] text-stone-600 font-medium">85% to Oak Tree 🌳</span>
            </div>
          </div>

          {/* Gamified Progress Bar */}
          <div className="w-full bg-[#D8E2BD] h-2 rounded-full mt-2.5 overflow-hidden">
            <div className="bg-[#60712A] h-full rounded-full w-[85%]" />
          </div>
        </div>

        {/* Category Budget Cards */}
        <div className="grid grid-cols-2 gap-2">
          {/* Jar 1 */}
          <div className="bg-white/95 p-2.5 rounded-xl border border-[#D5E0BE] shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#283618] flex items-center gap-1">
                ☕ Coffee & Food
              </span>
              <span className="text-[10px] font-semibold text-emerald-700">$180/$250</span>
            </div>
            <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#8B9E4B] h-full rounded-full w-[72%]" />
            </div>
            <div className="text-[10px] text-stone-500 mt-1 flex justify-between">
              <span>Safe Zone</span>
              <span className="text-stone-700 font-medium">$70 left</span>
            </div>
          </div>

          {/* Jar 2 */}
          <div className="bg-white/95 p-2.5 rounded-xl border border-[#D5E0BE] shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#283618] flex items-center gap-1">
                ✈️ Travel Fund
              </span>
              <span className="text-[10px] font-semibold text-[#60712A]">$820/$1k</span>
            </div>
            <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#60712A] h-full rounded-full w-[82%]" />
            </div>
            <div className="text-[10px] text-stone-500 mt-1 flex justify-between">
              <span>Goal: Goa Trip</span>
              <span className="text-[#60712A] font-bold">82%</span>
            </div>
          </div>
        </div>

        {/* Quick Micro-Transaction Activity Item */}
        <div className="bg-white/90 px-3 py-2 rounded-xl border border-[#D5E0BE] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#F5E8E8] text-[#8D3535] flex items-center justify-center font-bold text-[10px]">
              🍔
            </div>
            <div>
              <div className="font-semibold text-[#283618]">Split Lunch w/ Maya</div>
              <div className="text-[10px] text-stone-500">Auto-split recorded • Venmo settled</div>
            </div>
          </div>
          <span className="font-bold text-stone-700">-$14.50</span>
        </div>
      </div>

      {/* Bottom Mockup Action Bar */}
      <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-[#CDD8B5]">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#495622]">
          <Sparkles className="w-3.5 h-3.5 text-[#60712A]" />
          <span>Figma Auto Layout & Variables</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-[#556428]">
          <span>Interactive Prototype</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
