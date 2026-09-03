import { Project, EducationItem, CertificationItem, MediaAssets } from '../types';

export const PERSONAL_INFO = {
  name: "SRUTHY SURESH",
  displayName: "Sruthy Suresh",
  role: "Product Designer | UI/UX Design",
  titleBadge: "UI and UX Designer • Product Designer",
  phone: "9980510855",
  email: "sruthysuresh.mail@gmail.com",
  location: "Bangalore, India",
  linkedin: "https://www.linkedin.com/in/sruthy-suresh02/",
  profile: "Product Designer with hands-on experience designing intuitive, user-centered digital experiences across web and mobile. Skilled in translating requirements into user flows, wireframes, and interaction-ready prototypes in Figma, with attention to accessibility, design systems, and consistent component-based design. Comfortable collaborating cross-functionally and passionate about modern UX/UI practices in fast-paced, product-driven environments.",
  tagline: "I specialize in turning complex problems into simple, intuitive, and visually engaging digital experiences that balance user needs with business goals.",
};

export const RESUME_DATA = {
  profile: PERSONAL_INFO.profile,
  skills: [
    {
      category: "Design skills",
      items: "Wireframing, user flows, prototyping, visual design, interaction design, design systems, component-based design, typography, layout, accessibility"
    },
    {
      category: "Design tools",
      items: "Figma, FigJam, Adobe Photoshop, Adobe Illustrator"
    },
    {
      category: "Collaboration",
      items: "Cross-functional teamwork with product and engineering, design handoff and documentation, strong communication"
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "RVITM, Bangalore",
      period: "2024 – 2026"
    },
    {
      degree: "Bachelor of Science (BSc)",
      institution: "St. Joseph's College"
    }
  ] as EducationItem[],
  certifications: [
    {
      title: "Google UX Design Professional Certificate",
      status: "in progress"
    }
  ] as CertificationItem[]
};

export const PROJECTS: Project[] = [
  {
    id: "odyssey",
    number: "01",
    title: "Odyssey",
    tagline: "India Travel Discovery App",
    category: "UI/UX Design, Figma",
    year: "2024",
    role: "Product Design & UX Research",
    tools: ["Figma", "FigJam", "User Flows", "Prototyping", "Design Systems"],
    figmaUrl: "https://www.figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India?t=sqeH6cyjWWowAFbq-1",
    shortDescription: "Interactive travel discovery mobile experience translating complex multi-region cultural heritage and itineraries into intuitive exploration.",
    highlights: [
      "Designed end-to-end user flows and wireframes — onboarding, sign-in, explore, and community pages — progressing from low-fidelity wireframes to interaction-ready, high-fidelity prototypes in Figma.",
      "Applied accessibility and user-first thinking by designing for error, empty, and success states across key flows.",
      "Created an interactive state-by-state map of India as primary navigation, translating a complex information architecture into a simple, intuitive interface for browsing places, food, wildlife, and nature spots by region.",
    ],
    accentColor: "#5A5A40",
    accentBg: "#F5F5F0",
    badgeColor: "#D4A373",
    deliverables: ["User Flows & Wireframes", "Interactive Prototype", "State Map Navigation", "Error & Empty States"],
    overview: {
      problem: "Travelers in India struggle with scattered information across fragmented platforms, lacking a unified way to discover authentic regional gems, cuisine, and nature spots by state.",
      solution: "Odyssey unifies discovery, smart planning, and cultural exploration with an interactive state map, clean itinerary flows, and comprehensive edge-case handling.",
      targetUser: "Independent backpackers, cultural travelers, and explorers seeking authentic regional Indian experiences.",
      impact: "Designed complete high-fidelity prototype across 40+ screens with 94% task completion on first-time exploration testing.",
    },
    process: {
      research: [
        "Mapped user journeys across onboarding, state exploration, and community tips.",
        "Tested 3 map navigation interaction models for regional browsing.",
        "Standardized WCAG accessible color contrast and typography for readability on mobile devices.",
      ],
      wireframing: [
        "Transitioned from low-fi wireframes to interactive high-fidelity frames in Figma.",
        "Built responsive auto-layout components for destination cards, tags, and bottom sheets.",
        "Designed comprehensive error, empty, and loading states across all primary user paths.",
      ],
      designSystem: [
        "Warm mineral & heritage-inspired palette with clear visual hierarchy.",
        "Component-based tokens in Figma with reusable variants for buttons, chips, and modals.",
      ],
      outcomes: [
        "100% component-based design system ready for developer handoff.",
        "Interactive clickable prototype on Figma with full state-by-state discovery flows.",
      ],
    },
  },
  {
    id: "coingrow",
    number: "02",
    title: "CoinGrow",
    tagline: "Budgeting App for Young Adults",
    category: "UI/UX Design, Figma",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Design Systems", "Gamification", "Financial UX", "Micro-Interactions"],
    figmaUrl: "https://www.figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app?t=sqeH6cyjWWowAFbq-1",
    shortDescription: "Playful, approachable personal finance and budgeting mobile app designed for first-time earners and students.",
    highlights: [
      "Designed core user flows and mockups — onboarding, dashboard, budget tracker, achievements, and peer challenges — maintaining consistent, component-based visual design across screens.",
      "Explored two full visual directions and used a playful illustrated design system to make personal finance approachable for first-time earners, balancing user needs with product goals.",
    ],
    accentColor: "#5A5A40",
    accentBg: "#F5F5F0",
    badgeColor: "#E5989B",
    deliverables: ["Design System", "Core User Flows", "Achievement Badges", "Interactive Prototype"],
    overview: {
      problem: "Traditional personal finance tools feel clinical and punitive for young adults, causing high drop-off and financial anxiety.",
      solution: "CoinGrow turns budgeting into positive daily engagement using playful visual rewards, clear spend categorizations, and social peer challenges.",
      targetUser: "Gen-Z students and early-career professionals learning to manage their first paychecks.",
      impact: "Reduced transaction logging time to under 4 seconds while maintaining high engagement through visual growth milestones.",
    },
    process: {
      research: [
        "Analyzed user drop-off in finance apps; identified lack of encouraging micro-feedback.",
        "Explored 2 visual directions: Minimalist Clean vs Playful Illustrated; users strongly favored the warm gamified approach.",
      ],
      wireframing: [
        "Mapped seamless flows for expense entry, daily streak checking, and group challenges.",
        "Refined quick-add modal with big touch targets and haptic feedback triggers.",
      ],
      designSystem: [
        "Playful, reassuring color scheme featuring fresh olive greens, mint accents, and soft cream surfaces.",
        "Standardized Figma component variants with interactive hover/active states.",
      ],
      outcomes: [
        "Interactive prototype with full micro-interactions and animated milestone celebrations.",
      ],
    },
  },
];

import profileImg from '../assets/Profile.png';
import heroBgImg from '../assets/background.png';
import odysseyImg from '../assets/odyssey.png';
import coinGrowImg from '../assets/CoinGrow.png';

/**
 * DEFAULT MEDIA ASSETS FROM GITHUB REPOSITORY
 * Loaded directly from the repository assets
 */
export const DEFAULT_MEDIA_ASSETS: MediaAssets = {
  heroCharacterImage: profileImg,
  heroBackgroundImage: heroBgImg,
  odysseyCoverImage: odysseyImg,
  coinGrowCoverImage: coinGrowImg,
};
