import React, { useRef } from 'react';
import { X, Image as ImageIcon, Upload, Trash2, RotateCcw, Check, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useMedia } from '../context/MediaContext';

export const ImageCustomizerModal: React.FC = () => {
  const { assets, updateAsset, resetAssets, isCustomizerOpen, setIsCustomizerOpen } = useMedia();

  const heroInputRef = useRef<HTMLInputElement>(null);
  const odysseyInputRef = useRef<HTMLInputElement>(null);
  const coinGrowInputRef = useRef<HTMLInputElement>(null);

  if (!isCustomizerOpen) return null;

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: 'heroCharacterImage' | 'odysseyCoverImage' | 'coinGrowCoverImage'
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Please select an image under 10MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updateAsset(key, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const imageSlots = [
    {
      id: 'heroCharacterImage' as const,
      label: 'Hero Character Image',
      description: 'Replaces the 3D illustrated character in the hero section (PNG with transparent background recommended).',
      value: assets.heroCharacterImage,
      inputRef: heroInputRef,
      fallbackText: 'Default 3D Character Active',
    },
    {
      id: 'odysseyCoverImage' as const,
      label: 'Odyssey Project Image',
      description: 'Replaces the interactive preview mockup for the Odyssey Travel Discovery case study.',
      value: assets.odysseyCoverImage,
      inputRef: odysseyInputRef,
      fallbackText: 'Default Interactive Mockup Active',
    },
    {
      id: 'coinGrowCoverImage' as const,
      label: 'CoinGrow Project Image',
      description: 'Replaces the interactive preview mockup for the CoinGrow Budgeting case study.',
      value: assets.coinGrowCoverImage,
      inputRef: coinGrowInputRef,
      fallbackText: 'Default Interactive Mockup Active',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCustomizerOpen(false)}
          className="fixed inset-0 bg-[#2D3319]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border border-[#5A5A40]/15 overflow-hidden flex flex-col z-10 my-auto"
        >
          {/* Header */}
          <div className="bg-[#F5F5F0] px-6 py-4 border-b border-[#5A5A40]/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#5F6B12] text-white flex items-center justify-center">
                <ImageIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2D3319] uppercase tracking-wider font-display">
                  Image Customizer
                </h3>
                <p className="text-[11px] text-[#2D3319] opacity-70">
                  Upload images or paste URLs to replace the hero & project visuals
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCustomizerOpen(false)}
              className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-[#2D3319] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6">
            {imageSlots.map((slot) => (
              <div
                key={slot.id}
                className="bg-[#FCFBF8] border border-[#5A5A40]/15 rounded-2xl p-4 sm:p-5 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-[#2D3319] font-display">
                      {slot.label}
                    </h4>
                    <p className="text-xs text-[#2D3319] opacity-70 font-body mt-0.5">
                      {slot.description}
                    </p>
                  </div>

                  {slot.value && (
                    <button
                      onClick={() => updateAsset(slot.id, '')}
                      className="px-2.5 py-1 rounded-full bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold inline-flex items-center gap-1 border border-red-200 transition-colors cursor-pointer"
                      title="Reset this image to default"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>

                {/* Preview & Action Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                  {/* Image Preview Box */}
                  <div className="w-full sm:w-32 h-28 rounded-xl bg-[#F0EDE4] border border-[#5A5A40]/15 flex items-center justify-center overflow-hidden shrink-0 relative group">
                    {slot.value ? (
                      <img
                        src={slot.value}
                        alt={slot.label}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <div className="text-center p-2">
                        <ImageIcon className="w-6 h-6 mx-auto text-[#5A5A40] opacity-40 mb-1" />
                        <span className="text-[10px] text-[#2D3319] opacity-50 block leading-tight">
                          {slot.fallbackText}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Upload Controls & URL Input */}
                  <div className="w-full space-y-2.5">
                    {/* File Upload Button */}
                    <div>
                      <input
                        type="file"
                        ref={slot.inputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, slot.id)}
                      />
                      <button
                        onClick={() => slot.inputRef.current?.click()}
                        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs hover:scale-[1.02] active:scale-95"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload Image File</span>
                      </button>
                    </div>

                    {/* Or URL input */}
                    <div className="relative">
                      <input
                        type="url"
                        placeholder="Or paste image URL (https://...)"
                        value={slot.value}
                        onChange={(e) => updateAsset(slot.id, e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#5A5A40]/20 text-[#2D3319] placeholder:text-stone-400 focus:outline-none focus:border-[#5F6B12]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Note about code configuration */}
            <div className="bg-[#F5F5F0] p-4 rounded-2xl border border-[#5A5A40]/10 flex items-start gap-2.5 text-xs text-[#2D3319] opacity-80">
              <Sparkles className="w-4 h-4 text-[#5F6B12] shrink-0 mt-0.5" />
              <p className="font-body leading-relaxed">
                <strong>Tip:</strong> Images can also be configured permanently in code inside <code className="bg-white px-1.5 py-0.5 rounded text-[11px] font-mono border border-stone-200">src/data/portfolioData.ts</code> in the <code className="bg-white px-1.5 py-0.5 rounded text-[11px] font-mono border border-stone-200">DEFAULT_MEDIA_ASSETS</code> object.
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-[#F5F5F0] px-6 py-4 border-t border-[#5A5A40]/10 flex items-center justify-between">
            <button
              onClick={resetAssets}
              className="px-4 py-2 rounded-full bg-white hover:bg-stone-100 text-[#2D3319] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-[#5A5A40]/20 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All to Defaults</span>
            </button>

            <button
              onClick={() => setIsCustomizerOpen(false)}
              className="px-6 py-2 rounded-full bg-[#5F6B12] hover:bg-[#4E580D] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Done</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
