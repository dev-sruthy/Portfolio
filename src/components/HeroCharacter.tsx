import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface HeroCharacterProps {
  scrollProgress?: number;
  isLoaded?: boolean;
  customImageSrc?: string;
}

export const HeroCharacter: React.FC<HeroCharacterProps> = ({ 
  isLoaded = true,
  customImageSrc 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [blink, setBlink] = useState(false);

  // Natural idle blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 180);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const headRotate = useTransform(smoothX, [-200, 200], [-4, 4]);
  const headTranslateX = useTransform(smoothX, [-200, 200], [-7, 7]);
  const eyeShiftX = useTransform(smoothX, [-200, 200], [-4, 4]);
  const eyeShiftY = useTransform(smoothY, [-200, 200], [-3, 3]);
  const hairBounce = useTransform(smoothY, [-200, 200], [-3, 3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x * 0.12);
      mouseY.set(y * 0.12);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      className="relative flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft warm ambient lighting glow behind character */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#E5989B]/25 blur-3xl -z-10 pointer-events-none transition-opacity duration-700" />
      
      {/* Main Character Rig with Smooth 'Coming Front' Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 45 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0 
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{
          rotate: headRotate,
          x: headTranslateX,
        }}
        className="relative z-20 w-64 h-72 sm:w-80 sm:h-96 md:w-[380px] md:h-[430px] flex items-center justify-center drop-shadow-2xl"
      >
        {customImageSrc ? (
          // Custom Uploaded / Configured Image
          <motion.img
            src={customImageSrc}
            alt="Sruthy Suresh - Hero Character"
            className="w-full h-full object-contain filter drop-shadow-2xl pointer-events-none select-none"
            animate={{
              y: isHovered ? -6 : [0, -5, 0],
            }}
            transition={{
              y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }
            }}
          />
        ) : (
          // Default 3D Character Illustration Vector Rig
          <motion.svg
            viewBox="0 0 500 560"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              y: isHovered ? -6 : [0, -5, 0],
            }}
            transition={{
              y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }
            }}
          >
            <defs>
              {/* Gradients */}
              <linearGradient id="charSkinGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#FDE3D0" />
                <stop offset="50%" stopColor="#F7CDAF" />
                <stop offset="100%" stopColor="#E6B491" />
              </linearGradient>

              <linearGradient id="charSkinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D99E78" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#BF7F57" stopOpacity="0.9" />
              </linearGradient>

              <linearGradient id="charHairGrad" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#4A2E1F" />
                <stop offset="40%" stopColor="#382115" />
                <stop offset="80%" stopColor="#24130B" />
                <stop offset="100%" stopColor="#1A0D07" />
              </linearGradient>

              <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7E523A" />
                <stop offset="50%" stopColor="#9B694D" />
                <stop offset="100%" stopColor="#5E3823" />
              </linearGradient>

              <linearGradient id="charSweaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF7EE" />
                <stop offset="40%" stopColor="#F4EFE0" />
                <stop offset="80%" stopColor="#E9E2CF" />
                <stop offset="100%" stopColor="#DCD4BD" />
              </linearGradient>

              <linearGradient id="sweaterShade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2D9C2" />
                <stop offset="100%" stopColor="#C8BC9E" />
              </linearGradient>

              <linearGradient id="goldHeadband" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ECC270" />
                <stop offset="50%" stopColor="#D4A340" />
                <stop offset="100%" stopColor="#A37420" />
              </linearGradient>

              <linearGradient id="eyeIrisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4A2411" />
                <stop offset="50%" stopColor="#6E3A1D" />
                <stop offset="85%" stopColor="#9E5B2E" />
                <stop offset="100%" stopColor="#C47E42" />
              </linearGradient>

              <linearGradient id="lipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E5807B" />
                <stop offset="100%" stopColor="#C85A56" />
              </linearGradient>

              <filter id="charDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#352617" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* 1. BACK HAIR MASS (Voluminous Bun Background) */}
            <g id="backBun">
              <ellipse cx="250" cy="115" rx="88" ry="85" fill="url(#charHairGrad)" />
              {/* Textured curl bumps on top bun */}
              <circle cx="210" cy="80" r="38" fill="url(#charHairGrad)" />
              <circle cx="255" cy="65" r="42" fill="url(#hairHighlight)" />
              <circle cx="295" cy="80" r="38" fill="url(#charHairGrad)" />
              <circle cx="185" cy="115" r="32" fill="url(#charHairGrad)" />
              <circle cx="315" cy="115" r="32" fill="url(#charHairGrad)" />
              
              {/* Bun Curls Depth Strokes */}
              <path d="M225 60 Q250 85 240 105" stroke="#7A4E35" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
              <path d="M260 55 Q285 80 275 105" stroke="#7A4E35" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
              <path d="M195 90 Q215 110 205 130" stroke="#7A4E35" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
              <path d="M295 90 Q315 110 305 130" stroke="#7A4E35" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
            </g>

            {/* 2. GOLDEN WOVEN HEADBAND / HAIR RING */}
            <g id="headband">
              <path 
                d="M192 145 C215 132, 285 132, 308 145 C304 154, 285 142, 192 153 Z" 
                fill="url(#goldHeadband)" 
              />
              {/* Braid texture on headband */}
              <path 
                d="M196 147 Q210 140 225 146 Q240 140 255 146 Q270 140 285 146 Q300 140 305 147" 
                stroke="#FFF1C2" 
                strokeWidth="2" 
                fill="none" 
                opacity="0.8" 
              />
            </g>

            {/* 3. COZY CREAM SWEATER & TORSO WITH CROSSED ARMS */}
            <g id="torsoAndSweater" filter="url(#charDropShadow)">
              {/* Main Body Base */}
              <path
                d="M175 350 C145 365, 115 420, 105 530 L395 530 C385 420, 355 365, 325 350 Z"
                fill="url(#charSweaterGrad)"
              />

              {/* Cozy High Ribbed Knit Collar */}
              <path
                d="M195 315 C210 338, 290 338, 305 315 C310 342, 295 368, 250 370 C205 368, 190 342, 195 315 Z"
                fill="url(#charSweaterGrad)"
              />
              {/* Collar Ribbing */}
              <path d="M210 335 L210 360" stroke="#C8BC9E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M225 340 L225 365" stroke="#C8BC9E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M240 342 L240 368" stroke="#C8BC9E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M255 342 L255 368" stroke="#C8BC9E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M270 340 L270 365" stroke="#C8BC9E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M285 335 L285 360" stroke="#C8BC9E" strokeWidth="2.5" strokeLinecap="round" />

              {/* Crossed Arms - Left Arm (Folded across) */}
              <path
                d="M110 440 C120 380, 160 365, 200 375 L340 440 C355 450, 360 480, 335 500 C300 525, 200 535, 160 515 C130 500, 110 470, 110 440 Z"
                fill="url(#charSweaterGrad)"
              />
              
              {/* Crossed Arms - Right Arm & Hand Resting */}
              <path
                d="M390 440 C380 380, 340 365, 300 375 L160 455 C140 470, 145 500, 175 515 C210 535, 310 525, 345 500 C370 480, 390 460, 390 440 Z"
                fill="url(#sweaterShade)"
              />

              {/* Right Cuff with Chunky Knit Ribbing */}
              <path
                d="M165 460 C175 455, 195 465, 200 480 C195 495, 175 505, 160 495 Z"
                fill="url(#charSweaterGrad)"
              />
              {/* Dainty fingers tucked under arm */}
              <path d="M152 435 C155 425, 170 422, 178 430 L188 450 C182 458, 165 458, 155 450 Z" fill="url(#charSkinGrad)" />
              <path d="M165 426 C170 422, 180 423, 186 432" stroke="#D99E78" strokeWidth="2" strokeLinecap="round" />
              <path d="M175 430 C180 427, 190 430, 194 438" stroke="#D99E78" strokeWidth="2" strokeLinecap="round" />

              {/* Sweater Knit Texture Lines / Folds */}
              <path d="M135 410 Q160 425 185 415" stroke="#C8BC9E" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M365 410 Q340 425 315 415" stroke="#C8BC9E" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M180 475 Q250 510 320 475" stroke="#B8AA88" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />
              <path d="M190 510 Q250 535 310 510" stroke="#B8AA88" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />
            </g>

            {/* 4. NECK & GOLDEN PENDANT NECKLACE */}
            <g id="neckAndJewelry">
              {/* Neck */}
              <path
                d="M226 270 L274 270 L282 325 C265 334, 235 334, 218 325 Z"
                fill="url(#charSkinGrad)"
              />
              {/* Neck Shadow under Chin */}
              <path
                d="M226 270 C240 288, 260 288, 274 270 C265 292, 235 292, 226 270 Z"
                fill="url(#charSkinShadow)"
                opacity="0.6"
              />
              {/* Clavicle / Collarbone subtle lines */}
              <path d="M232 312 Q250 318 268 312" stroke="#D99E78" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

              {/* Delicate Gold Necklace Chain */}
              <path
                d="M230 288 Q250 325 270 288"
                stroke="#D4A340"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />
              {/* Small Gold Circular Coin Pendant */}
              <circle cx="250" cy="318" r="5.5" fill="url(#goldHeadband)" filter="url(#charDropShadow)" />
              <circle cx="250" cy="318" r="2.5" fill="#FFF2C7" />
            </g>

            {/* 5. HEAD & FACE STRUCTURE */}
            <g id="headAndFace" filter="url(#charDropShadow)">
              {/* Face Shape (Heart / Oval smooth 3D shape) */}
              <path
                d="M190 200 C182 145, 205 125, 250 125 C295 125, 318 145, 310 200 C305 255, 280 285, 250 285 C220 285, 195 255, 190 200 Z"
                fill="url(#charSkinGrad)"
              />

              {/* Ears */}
              <ellipse cx="186" cy="205" rx="10" ry="16" fill="url(#charSkinGrad)" />
              <ellipse cx="314" cy="205" rx="10" ry="16" fill="url(#charSkinGrad)" />
              {/* Inner Ear Cartilage */}
              <path d="M188 198 C184 204, 186 212, 189 214" stroke="#D99E78" strokeWidth="2" fill="none" />
              <path d="M312 198 C316 204, 314 212, 311 214" stroke="#D99E78" strokeWidth="2" fill="none" />

              {/* Small Golden Hoop Earrings */}
              <circle cx="184" cy="216" r="6" stroke="#D4A340" strokeWidth="2.5" fill="none" />
              <circle cx="316" cy="216" r="6" stroke="#D4A340" strokeWidth="2.5" fill="none" />

              {/* Rosy Glowing Cheeks */}
              <ellipse cx="212" cy="225" rx="15" ry="9" fill="#F09B98" opacity="0.45" />
              <ellipse cx="288" cy="225" rx="15" ry="9" fill="#F09B98" opacity="0.45" />

              {/* Cute Soft Button Nose */}
              <path
                d="M247 210 Q250 224 253 210"
                stroke="#D99E78"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M243 226 C247 230, 253 230, 257 226"
                stroke="#BF7F57"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="250" cy="223" r="2" fill="#FFF2E8" opacity="0.8" />

              {/* Eyebrows (Arched, elegant dark brown) */}
              <path
                d="M205 178 C215 170, 230 173, 236 180"
                stroke="#382115"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M264 180 C270 173, 285 170, 295 178"
                stroke="#382115"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Big Expressive Brown Eyes with Dynamic Highlights */}
              {blink ? (
                // Blinking / Happy closed eyes
                <g>
                  <path d="M206 200 Q222 212 238 200" stroke="#24130B" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M262 200 Q278 212 294 200" stroke="#24130B" strokeWidth="4" strokeLinecap="round" fill="none" />
                </g>
              ) : (
                <g>
                  {/* Left Eye */}
                  <g id="leftEye">
                    <ellipse cx="222" cy="198" rx="17" ry="14" fill="#FFFFFF" />
                    <motion.g style={{ x: eyeShiftX, y: eyeShiftY }}>
                      <circle cx="223" cy="198" r="11" fill="url(#eyeIrisGrad)" />
                      <circle cx="223" cy="198" r="6" fill="#150B06" />
                      <circle cx="220" cy="194" r="3.8" fill="#FFFFFF" />
                      <circle cx="226" cy="202" r="1.8" fill="#FFFFFF" opacity="0.9" />
                    </motion.g>

                    <path
                      d="M204 196 C208 184, 234 184, 240 197"
                      stroke="#1E0E08"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path d="M239 195 L244 191" stroke="#1E0E08" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M237 192 L241 187" stroke="#1E0E08" strokeWidth="2" strokeLinecap="round" />
                  </g>

                  {/* Right Eye */}
                  <g id="rightEye">
                    <ellipse cx="278" cy="198" rx="17" ry="14" fill="#FFFFFF" />
                    <motion.g style={{ x: eyeShiftX, y: eyeShiftY }}>
                      <circle cx="277" cy="198" r="11" fill="url(#eyeIrisGrad)" />
                      <circle cx="277" cy="198" r="6" fill="#150B06" />
                      <circle cx="274" cy="194" r="3.8" fill="#FFFFFF" />
                      <circle cx="280" cy="202" r="1.8" fill="#FFFFFF" opacity="0.9" />
                    </motion.g>

                    <path
                      d="M260 197 C266 184, 292 184, 296 196"
                      stroke="#1E0E08"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path d="M295 195 L300 191" stroke="#1E0E08" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M297 192 L301 187" stroke="#1E0E08" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </g>
              )}

              {/* Sweet Confident Smile with Glossy Rosy Lips */}
              <g id="mouth">
                <path
                  d="M236 250 C242 247, 248 249, 250 248 C252 249, 258 247, 264 250 C260 254, 240 254, 236 250 Z"
                  fill="url(#lipGrad)"
                />
                <path
                  d="M237 251 C243 260, 257 260, 263 251 Z"
                  fill="#DE6E69"
                />
                <ellipse cx="250" cy="254" rx="4" ry="1.5" fill="#FFEBEB" opacity="0.8" />
                <path
                  d="M234 250 C242 258, 258 258, 266 250"
                  stroke="#A8433E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path d="M232 248 Q230 252 233 255" stroke="#BF7F57" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M268 248 Q270 252 267 255" stroke="#BF7F57" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
              </g>
            </g>

            {/* 6. FRONT VOLUMINOUS CURLS & LOOSE RINGLET TENDRILS */}
            <motion.g id="frontCurlsAndRinglets" style={{ y: hairBounce }}>
              <path
                d="M190 145 C195 125, 230 130, 245 145 C255 130, 290 128, 305 145 C315 155, 305 175, 290 165 C275 155, 260 170, 245 155 C230 170, 205 165, 190 145 Z"
                fill="url(#charHairGrad)"
              />
              <path d="M210 140 Q225 155 235 145" stroke="#7A4E35" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M265 142 Q278 155 290 142" stroke="#7A4E35" strokeWidth="4" strokeLinecap="round" fill="none" />
              
              <g id="leftRinglet">
                <path
                  d="M185 160 C170 175, 160 200, 172 215 C185 230, 165 255, 168 275 C172 295, 155 315, 162 335 C168 350, 185 345, 180 325 C175 305, 190 285, 182 265 C176 248, 195 225, 188 200 C182 180, 195 170, 185 160 Z"
                  fill="url(#charHairGrad)"
                  filter="url(#charDropShadow)"
                />
                <path d="M174 190 Q165 210 175 225 Q168 250 172 270 Q160 300 168 320" stroke="#7A4E35" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M160 185 C145 205, 148 235, 160 250 C170 265, 152 285, 158 305" stroke="#382115" strokeWidth="4" strokeLinecap="round" fill="none" />
              </g>

              <g id="rightRinglet">
                <path
                  d="M315 160 C330 175, 340 200, 328 215 C315 230, 335 255, 332 275 C328 295, 345 315, 338 335 C332 350, 315 345, 320 325 C325 305, 310 285, 318 265 C324 248, 305 225, 312 200 C318 180, 305 170, 315 160 Z"
                  fill="url(#charHairGrad)"
                  filter="url(#charDropShadow)"
                />
                <path d="M326 190 Q335 210 325 225 Q332 250 328 270 Q340 300 332 320" stroke="#7A4E35" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M340 185 C355 205, 352 235, 340 250 C330 265, 348 285, 342 305" stroke="#382115" strokeWidth="4" strokeLinecap="round" fill="none" />
              </g>

              <path d="M208 260 Q198 290 206 315 Q212 330 204 345" stroke="#4A2E1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M292 260 Q302 290 294 315 Q288 330 296 345" stroke="#4A2E1F" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </motion.g>
          </motion.svg>
        )}
      </motion.div>
    </div>
  );
};
