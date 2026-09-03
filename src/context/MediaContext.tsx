import React, { createContext, useContext, useState, useEffect } from 'react';
import { MediaAssets } from '../types';
import { DEFAULT_MEDIA_ASSETS } from '../data/portfolioData';

interface MediaContextType {
  assets: MediaAssets;
  updateAsset: (key: keyof MediaAssets, value: string) => void;
  resetAssets: () => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'sruthy_portfolio_github_assets_v4';

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export const MediaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [assets, setAssets] = useState<MediaAssets>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          heroCharacterImage: parsed.heroCharacterImage || DEFAULT_MEDIA_ASSETS.heroCharacterImage,
          heroBackgroundImage: parsed.heroBackgroundImage || DEFAULT_MEDIA_ASSETS.heroBackgroundImage,
          odysseyCoverImage: parsed.odysseyCoverImage || DEFAULT_MEDIA_ASSETS.odysseyCoverImage,
          coinGrowCoverImage: parsed.coinGrowCoverImage || DEFAULT_MEDIA_ASSETS.coinGrowCoverImage,
        };
      }
    } catch {
      // fallback
    }
    return DEFAULT_MEDIA_ASSETS;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
    } catch {
      // ignore
    }
  }, [assets]);

  const updateAsset = (key: keyof MediaAssets, value: string) => {
    setAssets((prev) => ({ ...prev, [key]: value }));
  };

  const resetAssets = () => {
    setAssets(DEFAULT_MEDIA_ASSETS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <MediaContext.Provider
      value={{
        assets,
        updateAsset,
        resetAssets,
        isCustomizerOpen,
        setIsCustomizerOpen,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
};
