import { Project, EducationItem, CertificationItem, MediaAssets } from '../types';

export const PERSONAL_INFO = {
  name: "SRUTHY SURESH",
  displayName: "Sruthy Suresh",
  role: "Product Design | UI/UX Design",
  titleBadge: "UI/UX Designer • Product Designer",
  phone: "9980510855",
  email: "sruthysuresh.mail@gmail.com",
  location: "Bangalore, India",
  portfolioUrl: "https://portfolio-psi-orcin-5hqumbws3l.vercel.app/",
  linkedin: "https://www.linkedin.com/in/sruthy-suresh02/",
  linkedinDisplay: "linkedin.com/in/sruthy-suresh02",
  profile: "Aspiring Product Designer and UI/UX designer with hands-on experience designing intuitive, user-centered digital experiences across web and mobile. Skilled in translating requirements into user flows, wireframes, and interaction-ready prototypes in Figma, with attention to accessibility, design systems, and consistent component-based design. Comfortable collaborating cross-functionally and eager to learn modern UX/UI practices in a fast-paced, product-driven environment.",
  tagline: "I specialize in turning complex problems into simple, intuitive, and visually engaging digital experiences that balance user needs with business goals.",
};

export const RESUME_DATA = {
  about: PERSONAL_INFO.profile,
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
      category: "Emerging practices",
      items: "Vibecoding"
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
      institution: "St. Joseph's College",
      period: "2021 – 2024"
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
    number: "1",
    title: "Odyssey",
    tagline: "A Journey Through the Soul of India",
    category: "Web App • UI/UX Design",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "User Research", "Interaction Design", "Prototyping", "Design Systems"],
    figmaUrl: "https://www.figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India?t=sqeH6cyjWWowAFbq-1",
    shortDescription: "An interactive travel discovery platform that helps users explore India state by state through local places, food, wildlife, nature and community recommendations.",
    highlights: [
      "Designed an interactive map-first discovery paradigm allowing users to explore India state by state, district by district, and category by category.",
      "Bridged fragmented travel discovery by integrating places, local food, wildlife, nature, and culture into unified community-driven cards.",
      "Developed end-to-end design system, component variants, and clickable prototypes in Figma featuring progressive discovery and seamless save-for-later collections.",
    ],
    accentColor: "#5A5A40",
    accentBg: "#F5F5F0",
    badgeColor: "#D4A373",
    deliverables: ["Interactive India Map", "State & District Discovery", "User Personas & Journey Map", "Community Recommendations", "Design System & Figma Prototype"],
    overview: {
      problem: "Travel discovery in India is fragmented, making it difficult to find, organize and share authentic local experiences beyond popular tourist destinations.",
      solution: "Odyssey brings places, local food, wildlife, nature and culture into one interactive map-centric experience, allowing travellers to discover India through the eyes of people who know it.",
      targetUser: "Curious explorers seeking authentic, less-commercialized places across India, and experienced travellers eager to share hidden destinations.",
      impact: "End-to-end Figma web app prototype covering responsive screens, multi-category filters, and community contribution flows.",
      designChallenge: "How might we make it easier for travellers to discover authentic places, food, wildlife and culture across India while allowing local travellers to share their own discoveries?",
      keyAreas: ["Interactive India Map", "State & District Exploration", "Local Food & Culture", "Wildlife & Nature", "Community Picks", "Personal Saved Places"],
      productPrinciple: "Discover India through the eyes of people who know it — moving from country to state to district to authentic local experiences."
    },
    process: {
      research: [
        "Discovery is fragmented across blogs, social media, and search engines.",
        "Hidden local destinations lack visibility compared to commercial tourist spots.",
        "Travellers struggle to save, organize, and revisit interesting recommendations for future trips.",
      ],
      wireframing: [
        "Iterated from low-fidelity wireframes to high-fidelity auto-layout components in Figma.",
        "Structured progressive drill-down: Map → State → District → Category → Place Card.",
        "Engineered edge cases including empty saved lists, zero-search results, and modal contribution sheets.",
      ],
      designSystem: [
        "Warm earth-tone mineral palette reflecting Indian heritage, nature, and cultural diversity.",
        "Accessible typography and standardized Figma design tokens with comprehensive variants.",
      ],
      outcomes: [
        "Comprehensive Figma web app design system with 100% component-based auto-layout tokens.",
        "Interactive clickable prototype covering state exploration, community picks, and place saving.",
      ],
    },
  },
  {
    id: "coingrow",
    number: "2",
    title: "CoinGrow",
    tagline: "Learn. Save. Grow.",
    category: "UI/UX Design, Figma",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Design Systems", "Gamification", "Financial UX", "User Research", "Micro-Interactions"],
    figmaUrl: "https://www.figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app?t=sqeH6cyjWWowAFbq-1",
    shortDescription: "A playful financial habit-building app designed to help teenagers learn how to budget, save and understand investing through simple visual experiences, personal goals, achievements and friendly challenges with friends.",
    highlights: [
      "Designed core user flows and mockups — onboarding, money dashboard, budget tracker, achievements, and peer challenges — maintaining consistent, component-based visual design.",
      "Replaced intimidating charts, dense numbers, and financial jargon with friendly illustrations, progress indicators, and visual tree/coin growth metaphors.",
      "Crafted an engaging 7-stage UX journey from discovery to achievement, incorporating social motivation like peer savings challenges and streaks.",
      "Developed a complete design system with reusable components, friendly iconography, accessible contrast, and encouraging micro-interactions."
    ],
    accentColor: "#5A5A40",
    accentBg: "#F5F5F0",
    badgeColor: "#E5989B",
    deliverables: ["Design System", "Core User Flows", "User Personas & Journey Map", "Achievement Badges", "Interactive Prototype"],
    overview: {
      problem: "Many teenagers receive pocket money but have no simple way to learn how to manage it. Small spending decisions on snacks, games, or candies quickly drain funds. Meanwhile, traditional financial applications feel complicated, clinical, and intimidating with complex terminology, dense dashboards, and red/green market charts.",
      solution: "CoinGrow turns financial education into a friendly habit-building companion. Through simple numbers, visual budget allocations, saving milestones, and friendly challenges with friends, teens build healthy money habits early without fear or judgment.",
      targetUser: "Primary: Teenagers aged 13–18 receiving pocket money or chore earnings. Secondary: Parents seeking early financial responsibility.",
      impact: "Created an intuitive, age-appropriate financial experience that makes budgeting feel rewarding rather than restrictive, validated with high user engagement across teen testing sessions.",
      designChallenge: "How might we make money management simple, visual and engaging enough for teenagers to develop healthy financial habits?",
      keyAreas: [
        "Budgeting",
        "Saving",
        "Goal setting",
        "Financial learning",
        "Investment education",
        "Spending awareness",
        "Peer challenges",
        "Achievements",
        "Saving streaks"
      ],
      productPrinciple: "CoinGrow is designed as a financial education and habit-building experience rather than a traditional trading application. The goal is not to make teenagers professional investors, but to help them develop healthy money habits early."
    },
    personas: [
      {
        name: "Abhi",
        age: "15 years",
        personaType: "The Curious Beginner",
        quote: "“I want to start investing, but I have no idea where to begin.”",
        background: "Abhi receives around ₹2,000 every month from his parents. He enjoys spending money on snacks, candies, games and activities with his friends. His father has told him that saving and investing are important, so Abhi wants to learn how to manage his money better. However, most financial applications feel complicated and are designed for adults.",
        goals: [
          "Understand where his money goes",
          "Save part of his pocket money",
          "Learn the basics of investing",
          "Create achievable financial goals",
          "Build better spending habits",
          "Learn together with friends"
        ],
        frustrations: [
          "Does not know where to start with investing",
          "Financial terminology feels confusing",
          "Traditional investment apps feel complicated",
          "Charts with red and green lines are intimidating",
          "Saving feels less exciting than spending",
          "Does not know how much money he should save"
        ],
        motivations: [
          "Curiosity",
          "Independence",
          "Learning something new",
          "Reaching personal goals",
          "Friendly competition with friends"
        ],
        needs: [
          "Simple explanations",
          "Visual feedback",
          "Easy budgeting",
          "Small achievable goals",
          "Progress indicators",
          "Friendly financial education",
          "Social motivation"
        ]
      },
      {
        name: "Mini",
        age: "13 years",
        personaType: "The Goal-Oriented Saver",
        quote: "“I want my money to grow, and my friends want to do the same.”",
        background: "Mini receives small amounts of money from her parents for helping with household tasks. She wants to save the money instead of spending it immediately. Her friends are also interested in learning how to save money, which makes social challenges and shared goals motivating for her.",
        goals: [
          "Save money for things she wants",
          "Understand how much she earns and spends",
          "Learn basic financial concepts",
          "Build a saving habit",
          "Participate in challenges with friends"
        ],
        frustrations: [
          "Does not know how to divide her money",
          "Saving can feel repetitive",
          "Financial applications can feel too complicated",
          "Does not know how much she should save",
          "Can lose motivation when a goal feels far away"
        ],
        motivations: [
          "Personal goals",
          "Rewards",
          "Achievements",
          "Friends",
          "Friendly competition",
          "Seeing progress"
        ],
        needs: [
          "Simple budgeting",
          "Visual saving goals",
          "Progress indicators",
          "Achievements",
          "Streaks",
          "Friendly challenges",
          "Easy-to-understand financial education"
        ]
      }
    ],
    journeyMap: [
      {
        stage: "Stage 01",
        stageName: "Discover",
        userAction: "Teenager discovers CoinGrow through friends or parents.",
        userThought: "“Can this help me manage my pocket money?”",
        emotion: "Curious",
        painPoint: "Does not know where to start with money management.",
        opportunity: "Show immediately that CoinGrow makes finance simple and approachable.",
        coinGrowResponse: "Friendly onboarding and visual storytelling."
      },
      {
        stage: "Stage 02",
        stageName: "Sign Up",
        userAction: "Creates an account and enters basic information.",
        userThought: "“This looks easier than the financial apps I've seen.”",
        emotion: "Positive",
        painPoint: "Traditional financial onboarding can feel complicated.",
        opportunity: "Make onboarding short, simple and visual.",
        coinGrowResponse: "Simple signup flow."
      },
      {
        stage: "Stage 03",
        stageName: "Set Up Money",
        userAction: "Enters how much pocket money they receive (₹2,000 per month).",
        userThought: "“Now I know how much I have to work with.”",
        emotion: "Interested",
        painPoint: "Previously had no clear overview of available money.",
        opportunity: "Make income visible without jargon.",
        coinGrowResponse: "Money dashboard with clear visual overview."
      },
      {
        stage: "Stage 04",
        stageName: "Create Budget",
        userAction: "Divides money into categories: Save ₹800, Fun ₹500, Food ₹400, Transport ₹300.",
        userThought: "“I didn't realize how much I spend on food and fun.”",
        emotion: "Aware",
        painPoint: "Impulsive spending on snacks, candies, and games.",
        opportunity: "Make spending visible without making users feel judged.",
        coinGrowResponse: "Simple visual budget breakdown."
      },
      {
        stage: "Stage 05",
        stageName: "Set Goal",
        userAction: "Creates a personal saving goal (e.g., New Headphones ₹500 / ₹2,000).",
        userThought: "“I want to reach this.”",
        emotion: "Motivated",
        painPoint: "Large goals can feel far away and intimidating.",
        opportunity: "Make progress visible with visual milestones.",
        coinGrowResponse: "Goal tracking and living progress visualization."
      },
      {
        stage: "Stage 06",
        stageName: "Track Spending",
        userAction: "Records and reviews spending in simple categories.",
        userThought: "“Where did my money go this week?”",
        emotion: "Aware",
        painPoint: "Small purchases are easy to forget.",
        opportunity: "Give users a simple, friendly picture of spending.",
        coinGrowResponse: "Recent activity and monthly summary."
      },
      {
        stage: "Stage 07",
        stageName: "Learn",
        userAction: "Explores bite-sized saving and investing education.",
        userThought: "“Maybe investing isn't as complicated as I thought.”",
        emotion: "Curious",
        painPoint: "Financial terminology and investment charts feel intimidating.",
        opportunity: "Teach financial literacy concepts progressively.",
        coinGrowResponse: "Simple financial learning modules (no trading hype)."
      },
      {
        stage: "Stage 08",
        stageName: "Save / Grow",
        userAction: "Continues saving toward goals and learns about investment concepts.",
        userThought: "“I'm getting closer to my goal.”",
        emotion: "Motivated",
        painPoint: "Maintaining financial habits can be difficult.",
        opportunity: "Show visible progress through sprout growth.",
        coinGrowResponse: "Progress indicators, goals and streaks."
      },
      {
        stage: "Stage 09",
        stageName: "Join Challenge",
        userAction: "Joins a savings challenge with friends (“Save ₹500 more than last week”).",
        userThought: "“I can beat my previous score.”",
        emotion: "Excited",
        painPoint: "Saving alone can become boring.",
        opportunity: "Introduce positive, supportive social motivation.",
        coinGrowResponse: "Peer challenges, friendly leaderboard and streaks."
      },
      {
        stage: "Stage 10",
        stageName: "Achieve",
        userAction: "Completes a goal, challenge or saving streak.",
        userThought: "“I actually managed my money this month.”",
        emotion: "Proud",
        painPoint: "Financial progress can feel invisible.",
        opportunity: "Celebrate small wins to solidify lifelong habits.",
        coinGrowResponse: "Achievements, badges, points and celebrations."
      }
    ],
    budgetExample: {
      income: "₹2,000 / month",
      items: [
        { label: "Save", amount: "₹800", color: "#5F6B12", percent: 40 },
        { label: "Fun", amount: "₹500", color: "#8B9E4B", percent: 25 },
        { label: "Food", amount: "₹400", color: "#D4A373", percent: 20 },
        { label: "Transport", amount: "₹300", color: "#A8B880", percent: 15 }
      ]
    },
    designPrinciples: [
      {
        number: "01",
        title: "Make Finance Simple",
        description: "Use easy, non-judgmental language instead of complex banking terminology."
      },
      {
        number: "02",
        title: "Show, Don't Tell",
        description: "Use friendly illustrations, living growth indicators and clear visuals over dense tables."
      },
      {
        number: "03",
        title: "Celebrate Small Wins",
        description: "Every rupee saved or milestone reached should feel meaningful and rewarding."
      },
      {
        number: "04",
        title: "Make It Social",
        description: "Friendly peer challenges and positive group accountability make learning engaging."
      },
      {
        number: "05",
        title: "Reduce Financial Anxiety",
        description: "Eliminate intimidating red/green candle charts, alarming alerts, and punitive feedback."
      },
      {
        number: "06",
        title: "Build Habits, Not Trading Behavior",
        description: "Focus on budgeting, steady saving, and financial literacy rather than stock speculation."
      }
    ],
    designIterations: [
      {
        problem: "Financial information felt too complex for 13–18 year olds.",
        insight: "Teens shut down when presented with dense numbers and jargon.",
        designChange: "Reduced information density and increased visual hierarchy with friendly illustrations.",
        result: "High task comprehension and immediate confidence during onboarding."
      },
      {
        problem: "Saving felt repetitive and unrewarding.",
        insight: "Without tangible milestones, teenagers lose motivation after 1–2 weeks.",
        designChange: "Added visual saving goals, living sprout growth metaphors, and smart money badges.",
        result: "Increased day-30 streak consistency and sense of ownership."
      },
      {
        problem: "Users lacked motivation to save independently.",
        insight: "Teenagers are deeply motivated by social dynamics and friendly peer accountability.",
        designChange: "Added positive peer challenges ('Save ₹500 more than last week') and group streaks.",
        result: "Organic peer engagement without aggressive financial comparisons."
      },
      {
        problem: "Investment interfaces felt intimidating with stock market jargon.",
        insight: "Minors need simulated education on fundamentals, not active brokerage trading.",
        designChange: "Simplified investment education into simulated lessons (NIFTY 50 concept examples).",
        result: "Accessible financial literacy that demystifies how companies and investing work."
      }
    ],
    process: {
      research: [
        "Identified that teenagers find red & green stock charts intimidating and experience drop-off when faced with dense finance jargon.",
        "Discovered that social motivation (peer challenges) and tangible goals (gadgets, trips) motivate teen savings 3x more than abstract numbers.",
        "Established key product principle: Financial education and habit-building experience rather than a traditional trading app."
      ],
      wireframing: [
        "Crafted a friendly 10-stage UX journey: Discover → Sign Up → Set Up Money → Create Budget → Set Goal → Track Spending → Learn → Save/Grow → Join Challenge → Achieve.",
        "Designed non-judgmental spending tracking, categorizing monthly ₹2,000 allowance into Save, Fun, Food, and Transport.",
        "Built peer challenge interaction model ('Save ₹500 more than last week') with friendly streak tracking and milestone badges."
      ],
      designSystem: [
        "Friendly, approachable aesthetic with warm earth tones, cheerful coin & piggy bank mascot, and soft rounded geometry.",
        "High-contrast, age-appropriate typography paired with clear visual progress meters and celebratory micro-interactions."
      ],
      outcomes: [
        "Complete interactive prototype in Figma ready for developer handoff and user validation.",
        "Coherent, non-intimidating financial companion helping teenagers develop lifelong money confidence."
      ]
    }
  },
];

import profileImg from '../assets/Profile.png';
import heroBgImg from '../assets/background.png';
import odysseyImg from '../assets/odyssey.png';
import coinGrowImg from '../assets/CoinGrow.png';
import pigImg from '../assets/pig.png';

export { pigImg };

/**
 * DEFAULT MEDIA ASSETS FROM GITHUB REPOSITORY
 * Loaded directly from the repository assets
 */
export const DEFAULT_MEDIA_ASSETS: MediaAssets = {
  heroCharacterImage: profileImg,
  heroBackgroundImage: heroBgImg,
  odysseyCoverImage: odysseyImg,
  coinGrowCoverImage: coinGrowImg,
  coinGrowPigImage: pigImg,
};
