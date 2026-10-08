/**
 * Reliable cinematic media assets and SVG illustrations
 * Designed to look like high-end 35mm film stills, grading frames, and portraits.
 */

import { VideoPrint } from '../types/portfolio';

// Helper to encode SVG into Data URL
function svgToUri(svgString: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString.trim())}`;
}

// 1. Hero Editor Portrait (Young creative with glasses, moody dark side lighting, red backlight rim)
export const HERO_PORTRAIT = svgToUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d14"/>
      <stop offset="50%" stop-color="#151b26"/>
      <stop offset="100%" stop-color="#050608"/>
    </linearGradient>
    <radialGradient id="rimRed" cx="30%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="faceLight" cx="65%" cy="32%" r="40%">
      <stop offset="0%" stop-color="#ffd5b8" stop-opacity="0.85"/>
      <stop offset="60%" stop-color="#735242" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#121820" stop-opacity="0"/>
    </radialGradient>
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" result="noise"/>
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.08 0"/>
      <feComposite operator="in" in2="SourceGraphic"/>
    </filter>
  </defs>
  
  <rect width="600" height="800" fill="url(#bgGrad)"/>
  <rect width="600" height="800" fill="url(#rimRed)"/>
  
  <!-- Subtle studio backdrop architecture -->
  <path d="M 50 0 L 220 800" stroke="#253245" stroke-width="1.5" opacity="0.3"/>
  <path d="M 120 0 L 290 800" stroke="#253245" stroke-width="1.2" opacity="0.2"/>
  
  <!-- Silhouette body & dark garment -->
  <path d="M 180 800 C 190 620, 240 520, 310 490 C 370 460, 430 480, 520 540 C 560 570, 590 660, 600 800 Z" fill="#0c1017"/>
  <path d="M 280 500 C 320 480, 360 480, 410 510 L 390 620 L 300 620 Z" fill="#161e2a"/>
  
  <!-- Neck and Head Profile -->
  <path d="M 320 490 C 325 430, 335 390, 345 360 C 370 370, 395 365, 415 340 L 415 470 Z" fill="#3a2e2a"/>
  
  <!-- Head shape facing slightly left profile -->
  <path d="M 295 240 C 290 200, 315 150, 370 140 C 435 130, 485 170, 495 240 C 500 295, 470 360, 410 370 C 350 380, 305 320, 295 240 Z" fill="#241d1a"/>
  
  <!-- Hair & Styling -->
  <path d="M 320 180 C 330 130, 390 110, 450 120 C 490 128, 510 160, 510 210 C 480 180, 430 170, 380 175 C 340 180, 330 200, 320 230 Z" fill="#090b0e"/>
  
  <!-- Facial lighting highlight -->
  <path d="M 325 240 C 335 220, 375 220, 395 235 C 405 270, 395 315, 370 330 C 340 330, 325 285, 325 240 Z" fill="url(#faceLight)"/>
  
  <!-- Glasses frame (sleek modern rectangle) -->
  <path d="M 320 240 L 360 235 L 365 255 L 325 260 Z" fill="none" stroke="#60a5fa" stroke-width="2.5" opacity="0.85"/>
  <line x1="360" y1="237" x2="385" y2="238" stroke="#60a5fa" stroke-width="2" opacity="0.8"/>
  <path d="M 385 236 L 420 234 L 422 254 L 387 256 Z" fill="none" stroke="#60a5fa" stroke-width="2.5" opacity="0.6"/>
  
  <!-- Rim highlight on shoulder & jaw -->
  <path d="M 300 250 C 302 290, 320 335, 350 355" fill="none" stroke="#93c5fd" stroke-width="2" opacity="0.6"/>
  <path d="M 210 700 C 230 600, 270 540, 310 500" fill="none" stroke="#ef4444" stroke-width="3" opacity="0.75"/>
  
  <!-- 35mm grain overlay -->
  <rect width="600" height="800" fill="#fff" filter="url(#noise)" opacity="0.15"/>
</svg>
`);

// 2. Contact Editor Portrait (Young creative in sweater outdoors, lush moody backdrop)
export const CONTACT_PORTRAIT = svgToUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" width="100%" height="100%">
  <defs>
    <linearGradient id="forestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#141f19"/>
      <stop offset="50%" stop-color="#1e2c24"/>
      <stop offset="100%" stop-color="#0c120e"/>
    </linearGradient>
    <radialGradient id="ambientLight" cx="50%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#94a3b8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#050806" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <rect width="600" height="800" fill="url(#forestGrad)"/>
  <rect width="600" height="800" fill="url(#ambientLight)"/>
  
  <!-- Soft bokeh circles in background -->
  <circle cx="150" cy="200" r="45" fill="#2d4234" opacity="0.35"/>
  <circle cx="480" cy="160" r="60" fill="#354d3d" opacity="0.25"/>
  <circle cx="100" cy="450" r="80" fill="#223528" opacity="0.4"/>
  <circle cx="520" cy="400" r="70" fill="#263b2d" opacity="0.3"/>
  
  <!-- Dark knit sweater body -->
  <path d="M 160 800 C 180 600, 230 500, 300 480 C 370 500, 420 600, 440 800 Z" fill="#2a2936"/>
  <!-- Knit collar detail -->
  <path d="M 270 480 C 290 515, 310 515, 330 480 L 320 470 L 280 470 Z" fill="#1e1d28"/>
  <path d="M 285 485 L 285 535" stroke="#3c3b4d" stroke-width="3"/>
  <circle cx="285" cy="500" r="3" fill="#64748b"/>
  <circle cx="285" cy="520" r="3" fill="#64748b"/>
  
  <!-- Neck and Head -->
  <path d="M 280 475 C 285 430, 290 395, 295 370 C 315 370, 325 430, 325 475 Z" fill="#755a49"/>
  <path d="M 265 260 C 265 190, 300 160, 340 160 C 385 160, 415 195, 415 270 C 415 335, 380 375, 340 375 C 295 375, 265 330, 265 260 Z" fill="#a4826b"/>
  
  <!-- Haircut -->
  <path d="M 270 230 C 275 160, 320 145, 360 145 C 405 145, 425 175, 420 230 C 395 190, 345 185, 290 205 Z" fill="#181519"/>
  
  <!-- Eyeglasses -->
  <rect x="285" y="240" width="35" height="20" rx="4" fill="none" stroke="#e2e8f0" stroke-width="2" opacity="0.9"/>
  <line x1="320" y1="248" x2="335" y2="248" stroke="#e2e8f0" stroke-width="2" opacity="0.9"/>
  <rect x="335" y="240" width="35" height="20" rx="4" fill="none" stroke="#e2e8f0" stroke-width="2" opacity="0.9"/>
  
  <!-- Cinematic Vignette -->
  <rect width="600" height="800" fill="none" stroke="#000" stroke-width="40" opacity="0.6"/>
</svg>
`);

// 3. Temple & Lake (Featured Video 1 - Bai Dinh / Ninh Binh style ancient pagoda with mountain reflection)
export const TEMPLE_LAKE_HERO = svgToUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#496576"/>
      <stop offset="45%" stop-color="#7a97a8"/>
      <stop offset="70%" stop-color="#a4bcc7"/>
      <stop offset="100%" stop-color="#516c7a"/>
    </linearGradient>
    <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2a3f4b"/>
      <stop offset="60%" stop-color="#182730"/>
      <stop offset="100%" stop-color="#0a1217"/>
    </linearGradient>
  </defs>
  
  <!-- Sky -->
  <rect width="1280" height="420" fill="url(#skyGrad)"/>
  
  <!-- Distant Karst Mountains (Misty Layers) -->
  <path d="M 0 320 Q 180 180, 380 280 T 780 240 Q 980 190, 1280 310 L 1280 420 L 0 420 Z" fill="#5a7686" opacity="0.5"/>
  <path d="M 0 350 Q 220 230, 480 320 T 960 270 Q 1150 240, 1280 340 L 1280 420 L 0 420 Z" fill="#3b5361" opacity="0.75"/>
  <path d="M 0 390 Q 300 300, 600 370 T 1280 360 L 1280 420 L 0 420 Z" fill="#243842"/>
  
  <!-- Ancient Grand Temple Pavilion on Shore -->
  <!-- Multi-tier curved eaves -->
  <path d="M 380 200 C 420 185, 580 185, 620 200 L 590 170 C 560 162, 440 162, 410 170 Z" fill="#1b252c"/>
  <path d="M 320 270 C 380 250, 620 250, 680 270 L 650 220 C 600 210, 400 210, 350 220 Z" fill="#151f26"/>
  <path d="M 260 360 C 340 330, 660 330, 740 360 L 710 290 C 640 280, 360 280, 290 290 Z" fill="#0f171c"/>
  
  <!-- Pillars and temple base platform -->
  <rect x="330" y="350" width="340" height="70" fill="#1a2228"/>
  <line x1="370" y1="350" x2="370" y2="420" stroke="#0f1519" stroke-width="6"/>
  <line x1="430" y1="350" x2="430" y2="420" stroke="#0f1519" stroke-width="6"/>
  <line x1="500" y1="350" x2="500" y2="420" stroke="#0f1519" stroke-width="6"/>
  <line x1="570" y1="350" x2="570" y2="420" stroke="#0f1519" stroke-width="6"/>
  <line x1="630" y1="350" x2="630" y2="420" stroke="#0f1519" stroke-width="6"/>
  
  <!-- Waterfront & Mirror Water -->
  <rect y="420" width="1280" height="300" fill="url(#waterGrad)"/>
  
  <!-- Soft temple reflection on water ripples -->
  <g opacity="0.35">
    <ellipse cx="500" cy="460" rx="160" ry="12" fill="#4a6575"/>
    <ellipse cx="500" cy="500" rx="130" ry="15" fill="#354955"/>
    <ellipse cx="500" cy="550" rx="100" ry="18" fill="#24343d"/>
    <ellipse cx="500" cy="610" rx="70" ry="15" fill="#18242b"/>
  </g>
  
  <!-- Lone silhouette figure standing by the shore -->
  <path d="M 495 560 C 495 530, 505 530, 505 560 L 507 680 L 493 680 Z" fill="#050709"/>
  <circle cx="500" cy="515" r="10" fill="#050709"/>
  
  <!-- Film letterbox bars simulation & metadata overlay cues -->
  <line x1="0" y1="0" x2="1280" y2="0" stroke="#000" stroke-width="2"/>
</svg>
`);

// 4. Mimi Lounge (Neon & amber nightclub cinematography)
export const MIMI_LOUNGE_STILL_1 = svgToUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <radialGradient id="neonRed" cx="50%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#ff1a40" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#b91c1c" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#120406" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amberGlow" cx="25%" cy="65%" r="45%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8"/>
      <stop offset="60%" stop-color="#78350f" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#050201" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="#0a0305"/>
  <rect width="800" height="500" fill="url(#neonRed)"/>
  <rect width="800" height="500" fill="url(#amberGlow)"/>
  
  <!-- Bar counter & illuminated shelves -->
  <rect x="0" y="320" width="800" height="180" fill="#14070a"/>
  <path d="M 50 320 L 750 320" stroke="#f59e0b" stroke-width="6" opacity="0.9"/>
  
  <!-- Glowing neon logo "MIMI LOUNGE" -->
  <text x="400" y="160" font-family="'Bebas Neue', sans-serif" font-size="72" fill="#fff" text-anchor="middle" letter-spacing="4" filter="drop-shadow(0 0 16px #ff0033)">MIMI</text>
  <text x="400" y="200" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" fill="#fecaca" text-anchor="middle" letter-spacing="6">L'OUNGE</text>
  
  <!-- Bar stools and cocktail glasses bokeh -->
  <circle cx="180" cy="280" r="14" fill="#fbbf24" opacity="0.6"/>
  <circle cx="240" cy="275" r="18" fill="#f87171" opacity="0.5"/>
  <circle cx="580" cy="285" r="12" fill="#f59e0b" opacity="0.7"/>
  <circle cx="650" cy="270" r="16" fill="#ef4444" opacity="0.6"/>
</svg>
`);

export const MIMI_LOUNGE_STILL_2 = svgToUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <radialGradient id="bartenderGlow" cx="68%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.85"/>
      <stop offset="45%" stop-color="#ef4444" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#090306" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="#0c0406"/>
  <rect width="800" height="500" fill="url(#bartenderGlow)"/>
  
  <!-- Neon signage in background -->
  <text x="320" y="140" font-family="'Bebas Neue', sans-serif" font-size="54" fill="#ff4d6d" text-anchor="middle" filter="drop-shadow(0 0 12px #ff0033)">MIMI</text>
  <text x="320" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#fda4af" text-anchor="middle" letter-spacing="5">L'OUNGE</text>
  
  <!-- Silhouette Bartender mixing cocktail in foreground -->
  <path d="M 480 500 C 500 360, 560 300, 660 280 C 730 300, 780 390, 800 500 Z" fill="#13070b"/>
  <circle cx="640" cy="220" r="45" fill="#571d18"/>
  <!-- Glasses rim lighting on bar -->
  <line x1="100" y1="360" x2="700" y2="360" stroke="#f59e0b" stroke-width="4" opacity="0.8"/>
  <polygon points="530,340 560,340 550,380 540,380" fill="#fbbf24" opacity="0.8"/>
</svg>
`);

// 5. Array of Video 1 square prints
export const VIDEO_1_PRINTS: VideoPrint[] = [
  {
    id: 'p1',
    title: 'Ponte de Pedra na Ravina',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#1a2a22"/>
        <path d="M 0 240 Q 200 120, 400 240 L 400 400 L 0 400 Z" fill="#2d4a3b"/>
        <!-- Stone bridge arch -->
        <path d="M 60 220 C 130 130, 270 130, 340 220 L 340 260 C 270 180, 130 180, 60 260 Z" fill="#475569"/>
        <!-- Mountain stream below -->
        <path d="M 160 400 C 180 300, 220 300, 240 400 Z" fill="#67e8f9" opacity="0.4"/>
      </svg>
    `),
    timecode: '00:00:14:02',
    aspect: '1:1',
    cameraInfo: 'Sony FX3 · 35mm GM f/1.8',
    colorGrade: 'S-Log3 to CineEI Kodak 2383'
  },
  {
    id: 'p2',
    title: 'Portal do Templo Pagode',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#202c2e"/>
        <!-- Pagoda roof -->
        <path d="M 80 180 C 140 140, 260 140, 320 180 L 300 200 C 250 170, 150 170, 100 200 Z" fill="#b45309"/>
        <!-- Archway doorway -->
        <rect x="140" y="210" width="120" height="190" rx="60" fill="#0f172a"/>
        <!-- Temple corridor depth -->
        <circle cx="200" cy="300" r="16" fill="#fef08a" opacity="0.4"/>
      </svg>
    `),
    timecode: '00:00:28:16',
    aspect: '1:1',
    cameraInfo: 'ARRI Alexa Mini · Cooke S4/i 25mm',
    colorGrade: 'Arri LogC3 Custom Rec.709'
  },
  {
    id: 'p3',
    title: 'Falésias da Costa Selvagem',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#162e3d"/>
        <!-- Jagged cliffs -->
        <path d="M 0 160 L 140 280 L 220 220 L 320 340 L 400 300 L 400 400 L 0 400 Z" fill="#334155"/>
        <!-- Ocean waves crashing with foam -->
        <path d="M 0 350 Q 150 320, 300 360 T 400 350 L 400 400 L 0 400 Z" fill="#0891b2" opacity="0.6"/>
        <line x1="80" y1="365" x2="160" y2="365" stroke="#fff" stroke-width="3" opacity="0.7"/>
      </svg>
    `),
    timecode: '00:00:45:09',
    aspect: '1:1',
    cameraInfo: 'RED Komodo 6K · Zeiss CP.3 18mm',
    colorGrade: 'REDWideGamutRGB Film Contrast'
  },
  {
    id: 'p4',
    title: 'Farol da Península',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#1e293b"/>
        <!-- Hillside -->
        <path d="M 120 400 C 200 300, 320 280, 400 260 L 400 400 Z" fill="#2d4234"/>
        <!-- Lighthouse tower -->
        <polygon points="280,320 310,320 305,160 285,160" fill="#f8fafc"/>
        <rect x="282" y="145" width="26" height="16" fill="#dc2626"/>
        <circle cx="295" cy="153" r="6" fill="#fef08a"/>
      </svg>
    `),
    timecode: '00:01:02:18',
    aspect: '1:1',
    cameraInfo: 'DJI Mavic 3 Pro Cine · Hasselblad',
    colorGrade: 'D-Log M Cine Tone'
  },
  {
    id: 'p5',
    title: 'Pavilhão no Lago ao Amanhecer',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#1d303f"/>
        <ellipse cx="200" cy="280" rx="140" ry="25" fill="#3b596f"/>
        <!-- Floating pavilion -->
        <rect x="140" y="210" width="120" height="50" fill="#78350f"/>
        <polygon points="120,210 280,210 240,170 160,170" fill="#b45309"/>
      </svg>
    `),
    timecode: '00:01:19:04',
    aspect: '1:1',
    cameraInfo: 'Blackmagic URSA Mini Pro 12K',
    colorGrade: 'BMD Film Gen 5 Bleach Bypass'
  },
  {
    id: 'p6',
    title: 'Vale Nebuloso e Rio Verde',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#1b2a24"/>
        <!-- Two canyon sides -->
        <path d="M 0 0 L 140 400 L 0 400 Z" fill="#273e33"/>
        <path d="M 400 0 L 260 400 L 400 400 Z" fill="#1f3229"/>
        <!-- Meandering turquoise river -->
        <path d="M 140 400 Q 200 240, 210 160 T 200 0 L 220 0 Q 230 160, 260 400 Z" fill="#2dd4bf" opacity="0.6"/>
      </svg>
    `),
    timecode: '00:01:34:11',
    aspect: '1:1',
    cameraInfo: 'Sony FX6 · 24-70mm GM II',
    colorGrade: 'Cinematic Emerald Shadow Matrix'
  },
  {
    id: 'p7',
    title: 'Palácio Histórico Imperial',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#312e38"/>
        <!-- French colonial red building facade -->
        <rect x="50" y="180" width="300" height="160" fill="#b91c1c"/>
        <rect x="50" y="160" width="300" height="25" fill="#fef08a"/>
        <!-- Windows row -->
        <rect x="80" y="210" width="40" height="60" rx="20" fill="#fef3c7"/>
        <rect x="140" y="210" width="40" height="60" rx="20" fill="#fef3c7"/>
        <rect x="220" y="210" width="40" height="60" rx="20" fill="#fef3c7"/>
        <rect x="280" y="210" width="40" height="60" rx="20" fill="#fef3c7"/>
      </svg>
    `),
    timecode: '00:01:52:22',
    aspect: '1:1',
    cameraInfo: 'Fujifilm GFX 100 II · 45mm',
    colorGrade: 'Nostalgic Film Print Simulation'
  },
  {
    id: 'p8',
    title: 'Farol & Penhasco Costeiro',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="100%">
        <rect width="400" height="400" fill="#132333"/>
        <path d="M 180 400 C 230 330, 310 320, 400 300 L 400 400 Z" fill="#64748b"/>
        <!-- Striped lighthouse -->
        <polygon points="320,340 350,340 345,210 325,210" fill="#f8fafc"/>
        <rect x="323" y="250" width="24" height="25" fill="#dc2626"/>
      </svg>
    `),
    timecode: '00:02:08:05',
    aspect: '1:1',
    cameraInfo: 'ARRI Alexa Mini LF · Supreme Prime',
    colorGrade: 'Teal & Orange Grade 3D LUT'
  }
];

// 6. Prints for Additional Works (Mimi Lounge nightlife)
export const ADDITIONAL_PRINTS: VideoPrint[] = [
  {
    id: 'ap1',
    title: 'Balcão Principal em Neon',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
        <rect width="500" height="350" fill="#110507"/>
        <circle cx="250" cy="120" r="120" fill="#e11d48" opacity="0.4"/>
        <rect x="0" y="220" width="500" height="130" fill="#1c0a0f"/>
        <line x1="0" y1="220" x2="500" y2="220" stroke="#f59e0b" stroke-width="4"/>
      </svg>
    `),
    aspect: '16:9'
  },
  {
    id: 'ap2',
    title: 'Retrato Neon Vermelho',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 500" width="100%" height="100%">
        <rect width="350" height="500" fill="#180408"/>
        <circle cx="175" cy="220" r="100" fill="#f43f5e" opacity="0.6"/>
        <path d="M 80 500 C 100 380, 150 320, 200 320 C 250 320, 270 380, 300 500 Z" fill="#2d0a13"/>
      </svg>
    `),
    aspect: '3:4'
  },
  {
    id: 'ap3',
    title: 'Preparação de Coquetel',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width="100%" height="100%">
        <rect width="350" height="350" fill="#0d0407"/>
        <circle cx="175" cy="175" r="90" fill="#f59e0b" opacity="0.5"/>
        <polygon points="140,120 210,120 185,200 165,200" fill="#fef08a" opacity="0.8"/>
        <line x1="175" y1="200" x2="175" y2="260" stroke="#fef08a" stroke-width="4"/>
      </svg>
    `),
    aspect: '1:1'
  },
  {
    id: 'ap4',
    title: 'DJ Performance na Cabine',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width="100%" height="100%">
        <rect width="350" height="350" fill="#160810"/>
        <ellipse cx="120" cy="240" rx="60" ry="25" fill="#f43f5e" opacity="0.4"/>
        <ellipse cx="230" cy="240" rx="60" ry="25" fill="#f59e0b" opacity="0.4"/>
        <path d="M 120 350 C 130 260, 160 210, 210 210 C 240 210, 260 260, 280 350 Z" fill="#250d1b"/>
      </svg>
    `),
    aspect: '1:1'
  },
  {
    id: 'ap5',
    title: 'Mesas Lounge & Iluminação Quente',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
        <rect width="500" height="350" fill="#120609"/>
        <ellipse cx="250" cy="260" rx="140" ry="60" fill="#78350f" opacity="0.5"/>
        <circle cx="250" cy="220" r="16" fill="#fef08a" opacity="0.9"/>
      </svg>
    `),
    aspect: '16:9'
  }
];

// 7. Prints for Main Project 2 (Imperial Heritage & Scenic Journey)
export const MAIN_PROJECT_2_PRINTS: VideoPrint[] = [
  {
    id: 'mp2_1',
    title: 'Montanhas Nebulosas ao Pôr do Sol',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <rect width="400" height="300" fill="#1e2c33"/>
        <path d="M 0 160 Q 150 90, 280 180 T 400 150 L 400 300 L 0 300 Z" fill="#2e434f"/>
        <path d="M 0 210 Q 180 140, 360 220 L 400 240 L 400 300 L 0 300 Z" fill="#162228"/>
      </svg>
    `),
    aspect: '4:3'
  },
  {
    id: 'mp2_2',
    title: 'Pátio Central do Palácio',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <rect width="400" height="300" fill="#382d27"/>
        <rect x="60" y="100" width="280" height="120" fill="#b91c1c"/>
        <rect x="0" y="220" width="400" height="80" fill="#26372d"/>
      </svg>
    `),
    aspect: '4:3'
  },
  {
    id: 'mp2_3',
    title: 'Corredor Real Lacado em Vermelho',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <rect width="400" height="300" fill="#1a0c0e"/>
        <!-- Vanishing perspective corridor -->
        <polygon points="0,0 200,120 200,180 0,300" fill="#991b1b"/>
        <polygon points="400,0 200,120 200,180 400,300" fill="#7f1d1d"/>
        <line x1="40" y1="20" x2="40" y2="280" stroke="#fef08a" stroke-width="4"/>
        <line x1="90" y1="45" x2="90" y2="255" stroke="#fef08a" stroke-width="4"/>
      </svg>
    `),
    aspect: '4:3'
  },
  {
    id: 'mp2_4',
    title: 'Lago de Lótus Silencioso',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <rect width="400" height="300" fill="#182c23"/>
        <ellipse cx="120" cy="220" rx="40" ry="15" fill="#f472b6" opacity="0.6"/>
        <ellipse cx="260" cy="240" rx="50" ry="18" fill="#ec4899" opacity="0.7"/>
        <ellipse cx="320" cy="190" rx="35" ry="12" fill="#f472b6" opacity="0.5"/>
      </svg>
    `),
    aspect: '4:3'
  },
  {
    id: 'mp2_5',
    title: 'Portão Antigo de Madeira',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <rect width="400" height="300" fill="#2a1f1d"/>
        <rect x="80" y="80" width="240" height="220" fill="#9a3412"/>
        <line x1="200" y1="80" x2="200" y2="300" stroke="#1c1917" stroke-width="6"/>
      </svg>
    `),
    aspect: '4:3'
  },
  {
    id: 'mp2_6',
    title: 'Caminhada Sob as Copas Verdes',
    imageUrl: svgToUri(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
        <rect width="400" height="300" fill="#1a2e22"/>
        <path d="M 120 300 L 190 140 L 210 140 L 280 300 Z" fill="#64748b" opacity="0.4"/>
        <circle cx="200" cy="210" r="14" fill="#0f172a"/>
        <path d="M 190 230 L 210 230 L 205 280 L 195 280 Z" fill="#e2e8f0"/>
      </svg>
    `),
    aspect: '4:3'
  }
];

// Sample public CDN cinematic video URLs that play reliably
export const SAMPLE_CINEMATIC_VIDEOS = {
  mainProject1: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  mimiLounge1: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  mimiLounge2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  mainProject2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
};
