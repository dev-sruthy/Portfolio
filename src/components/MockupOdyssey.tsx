import React, { useState } from 'react';
import { MapPin, Compass, Star, Calendar, Heart, Bookmark, ArrowRight, ShieldCheck, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export const MockupOdyssey: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discover' | 'itinerary' | 'passes'>('discover');
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full h-full bg-[#EDE8DC] rounded-2xl p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative border border-[#D5CEBD]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#8B9E4B_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

      {/* Mini App Header */}
      <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#E2DC CE] shadow-xs">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#60712A] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[13px] font-bold text-[#283618] tracking-tight leading-none font-display">ODYSSEY</div>
            <div className="text-[10px] text-[#60712A] font-medium">Explore India • Curated</div>
          </div>
        </div>

        {/* Mini Tab switcher inside mockup */}
        <div className="flex items-center gap-1 bg-[#FAF8F2] p-1 rounded-lg border border-[#E2DC CE] text-[11px] font-medium">
          {(['discover', 'itinerary'] as const).map((tab) => (
            <button
              key={tab}
              onClick={(e) => { e.stopPropagation(); setActiveTab(tab); }}
              className={`px-2.5 py-0.5 rounded-md transition-all capitalize ${
                activeTab === tab 
                  ? 'bg-[#60712A] text-white font-semibold shadow-xs' 
                  : 'text-[#495622] hover:text-[#283618]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Content View */}
      {activeTab === 'discover' ? (
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 my-3 flex flex-col gap-2.5"
        >
          {/* Main Featured Destination Card */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF8F2] to-[#F2EDE2] border border-[#D0D9AD] p-3 shadow-xs">
            {/* Scenic Vector Illustration of Taj Mahal / Golden Sunset */}
            <div className="h-32 sm:h-36 rounded-lg bg-gradient-to-tr from-[#60712A] via-[#8B9E4B] to-[#E8B4B8] p-3 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/15" />
              
              {/* Decorative Vector Silhouette */}
              <div className="absolute -bottom-2 -right-4 w-32 h-32 opacity-25">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 15 C55 25, 75 35, 75 50 L75 85 L25 85 L25 50 C25 35, 45 25, 50 15 Z" />
                  <rect x="15" y="45" width="6" height="40" rx="3" />
                  <rect x="79" y="45" width="6" height="40" rx="3" />
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <span className="bg-white/90 backdrop-blur-sm text-[#283618] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Heritage Highlight
                </span>
                <button 
                  onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
                  className="w-7 h-7 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-[#E8B4B8] text-[#E8B4B8]' : 'text-white'}`} />
                </button>
              </div>

              <div className="relative z-10">
                <div className="text-base sm:text-lg font-extrabold tracking-tight leading-tight drop-shadow-sm font-display">
                  Golden Triangle & Jaipur Palaces
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#FAF8F2]/90 mt-0.5 font-medium">
                  <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" /> Rajasthan & Agra</span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5 text-amber-200"><Star className="w-3 h-3 fill-amber-300 text-amber-300" /> 4.9 (1.4k)</span>
                </div>
              </div>
            </div>

            {/* Quick Meta chips */}
            <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#E2DC CE]">
              <div className="flex gap-1.5">
                <span className="text-[10px] bg-[#E7EBD4] text-[#495622] font-semibold px-2 py-0.5 rounded-md">5 Days</span>
                <span className="text-[10px] bg-[#FAF8F2] text-[#60712A] font-semibold px-2 py-0.5 rounded-md border border-[#D0D9AD]">Audio Guide Included</span>
              </div>
              <span className="text-xs font-bold text-[#283618]">₹12,499 <span className="text-[10px] text-gray-500 font-normal">/ person</span></span>
            </div>
          </div>

          {/* Sub Row: Mini destination pills */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/90 p-2.5 rounded-xl border border-[#D0D9AD] shadow-2xs flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#E2EBC8] text-[#495622] flex items-center justify-center font-bold text-xs">
                🌴
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#283618] truncate">Kerala Backwaters</div>
                <div className="text-[10px] text-stone-500 truncate">Alleppey Houseboats</div>
              </div>
            </div>

            <div className="bg-white/90 p-2.5 rounded-xl border border-[#D0D9AD] shadow-2xs flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#F5E8E8] text-[#8D3535] flex items-center justify-center font-bold text-xs">
                🏔️
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#283618] truncate">Ladakh Pass</div>
                <div className="text-[10px] text-stone-500 truncate">Himalayan Valleys</div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Itinerary Timeline View */
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 my-3 flex flex-col gap-2 bg-white/95 p-3 rounded-xl border border-[#D0D9AD] shadow-xs"
        >
          <div className="flex items-center justify-between pb-2 border-b border-[#E2DC CE]">
            <span className="text-xs font-bold text-[#283618] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#60712A]" /> Day 1 — Historic Delhi Heritage Walk
            </span>
            <span className="text-[10px] text-[#60712A] font-semibold bg-[#E7EBD4] px-2 py-0.5 rounded-full">Active Plan</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex gap-2.5 items-start">
              <div className="w-5 h-5 rounded-full bg-[#60712A] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                1
              </div>
              <div>
                <div className="font-semibold text-[#283618]">Sunrise at Red Fort & Chandni Chowk</div>
                <div className="text-[10px] text-stone-500">07:30 AM • Spice market tour & Chai tasting</div>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <div className="w-5 h-5 rounded-full bg-[#8B9E4B] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                2
              </div>
              <div>
                <div className="font-semibold text-[#283618]">Humayun's Tomb Architecture Walk</div>
                <div className="text-[10px] text-stone-500">11:00 AM • Verified Mughal Artisan Guide</div>
              </div>
            </div>

            <div className="flex gap-2.5 items-start">
              <div className="w-5 h-5 rounded-full bg-[#D0D9AD] text-[#495622] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                3
              </div>
              <div>
                <div className="font-semibold text-[#283618]">Hauz Khas Village Sunset & Dinner</div>
                <div className="text-[10px] text-stone-500">05:30 PM • Lake view rooftop reservation</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Bottom Mockup Action Bar */}
      <div className="relative z-10 flex items-center justify-between bg-white/90 backdrop-blur-md px-3 py-2 rounded-xl border border-[#D0D9AD]">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#495622]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#60712A]" />
          <span>Figma Prototype Ready</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-[#60712A]">
          <span>View Flow</span>
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};
