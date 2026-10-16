import React, { useState } from 'react';
import { TrendingUp, Sparkles, Sprout, ArrowUpRight, Award, Users, ShieldCheck } from 'lucide-react';

export const MockupCoinGrow: React.FC = () => {
  const [activeStreak] = useState(14);
  const [activeTab, setActiveTab] = useState<'budget' | 'challenge'>('budget');

  return (
    <div className="w-full h-full bg-[#EBF0DE] rounded-2xl p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative border border-[#CDD8B5]">
      {/* Subtle Dot Matrix Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#60712A_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      {/* Mini App Header */}
      <div className="relative z-10 flex items-center justify-between bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D5E0BE] shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#556428] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            <Sprout className="w-4 h-4 text-[#DCE6BE]" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-[#283618] tracking-tight leading-none font-display">COINGROW</div>
            <div className="text-[10px] text-[#556428] font-medium">Learn. Save. Grow.</div>
          </div>
        </div>

        {/* Gamified Streak Pill */}
        <div className="flex items-center gap-1.5 bg-[#F0F5E3] px-2.5 py-1 rounded-full border border-[#CDD8B5] text-[11px] font-bold text-[#495622]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>🔥 {activeStreak}d Streak</span>
        </div>
      </div>

      {/* Main Pocket Money & Sprout Growth Card */}
      <div className="relative z-10 my-2.5 flex flex-col gap-2">
        <div className="rounded-xl bg-gradient-to-br from-[#FAF8F2] via-[#F4F8EC] to-[#E7EBD4] p-3 border border-[#CDD8B5] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-stone-600 font-semibold flex items-center gap-1">
              Monthly Pocket Money
            </span>
            <span className="text-[10px] bg-[#DDE7BE] text-[#495622] font-bold px-2 py-0.5 rounded-md flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> Habit Active
            </span>
          </div>

          <div className="flex items-baseline justify-between mt-1">
            <div className="text-2xl font-extrabold text-[#283618] tracking-tight font-display">
              ₹2,000<span className="text-xs text-stone-500 font-normal"> / month</span>
            </div>
            {/* Gamified Sprout Level */}
            <div className="text-right">
              <span className="text-[10px] font-bold text-[#60712A] uppercase tracking-wider block">Level 2 Sprout 🌱</span>
              <span className="text-[11px] text-stone-600 font-medium">₹800 Saved (40%)</span>
            </div>
          </div>

          {/* Gamified Progress Bar */}
          <div className="w-full bg-[#D8E2BD] h-2 rounded-full mt-2 overflow-hidden flex">
            <div className="bg-[#556428] h-full" style={{ width: '40%' }} title="Save 40%" />
            <div className="bg-[#8B9E4B] h-full" style={{ width: '25%' }} title="Fun 25%" />
            <div className="bg-[#D4A373] h-full" style={{ width: '20%' }} title="Food 20%" />
            <div className="bg-[#A8B880] h-full" style={{ width: '15%' }} title="Transport 15%" />
          </div>
        </div>

        {/* Interactive View Selector */}
        <div className="flex gap-1.5 p-0.5 bg-white/70 rounded-lg border border-[#D5E0BE]">
          <button
            onClick={() => setActiveTab('budget')}
            className={`flex-1 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
              activeTab === 'budget' ? 'bg-[#556428] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Budget Plan (₹2,000)
          </button>
          <button
            onClick={() => setActiveTab('challenge')}
            className={`flex-1 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
              activeTab === 'challenge' ? 'bg-[#556428] text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Friend Challenge 🏆
          </button>
        </div>

        {activeTab === 'budget' ? (
          /* Budget Category Grid */
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-white/95 p-2 rounded-xl border border-[#D5E0BE] shadow-2xs">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] font-bold text-[#283618]">🌱 Save</span>
                <span className="text-[10px] font-bold text-[#556428]">₹800 (40%)</span>
              </div>
              <div className="text-[10px] text-stone-500">Goal: New Bicycle fund</div>
            </div>

            <div className="bg-white/95 p-2 rounded-xl border border-[#D5E0BE] shadow-2xs">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] font-bold text-[#283618]">🎮 Fun & Games</span>
                <span className="text-[10px] font-bold text-[#8B9E4B]">₹500 (25%)</span>
              </div>
              <div className="text-[10px] text-stone-500">Activities with friends</div>
            </div>

            <div className="bg-white/95 p-2 rounded-xl border border-[#D5E0BE] shadow-2xs">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] font-bold text-[#283618]">🍫 Snacks & Food</span>
                <span className="text-[10px] font-bold text-[#D4A373]">₹400 (20%)</span>
              </div>
              <div className="text-[10px] text-stone-500">₹350 remaining safe</div>
            </div>

            <div className="bg-white/95 p-2 rounded-xl border border-[#D5E0BE] shadow-2xs">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[11px] font-bold text-[#283618]">🚌 Transport</span>
                <span className="text-[10px] font-bold text-[#718243]">₹300 (15%)</span>
              </div>
              <div className="text-[10px] text-stone-500">Bus pass & travel</div>
            </div>
          </div>
        ) : (
          /* Peer Challenge Showcase */
          <div className="bg-white/95 p-2.5 rounded-xl border border-[#D5E0BE] shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#283618] flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#556428]" /> Weekly Peer Challenge
              </span>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">3 days left</span>
            </div>
            <div className="text-[11px] font-bold text-[#556428] bg-[#F5F8ED] p-1.5 rounded-lg border border-[#D5E0BE]">
              “Save ₹500 more than last week”
            </div>
            <div className="flex justify-between items-center text-[10px] text-stone-600 pt-0.5">
              <span className="font-semibold">Abhi: ₹380 / ₹500 (76%)</span>
              <span className="font-semibold">Mini: ₹410 / ₹500 (82%)</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Mockup Action Bar */}
      <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-[#CDD8B5]">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#495622]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#60712A]" />
          <span>Non-judgmental habit design</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-[#556428]">
          <span>Interactive Figma</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
