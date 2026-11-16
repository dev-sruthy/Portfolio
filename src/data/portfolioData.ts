import { Project, EducationItem, CertificationItem, MediaAssets } from '../types';

export const PERSONAL_INFO = {
  name: "SRUTHY SURESH",
  displayName: "Sruthy Suresh",
  role: "Product Design | UI/UX Design",
  titleBadge: "UI/UX Designer • Product Designer",
  phone: "+91 9980510855",
  email: "sruthysuresh.mail@gmail.com",
  location: "Bengaluru, Karnataka, India",
  portfolioUrl: "https://portfolio-psi-orcin-5hqumbws31.vercel.app",
  linkedin: "https://www.linkedin.com/in/sruthy-suresh02/",
  linkedinDisplay: "linkedin.com/in/sruthy-suresh02",
  profile: "UI/UX and Product Designer with an MCA background, specializing in designing intuitive, scalable web and mobile experiences. Skilled in Figma, high-fidelity interactive prototyping, design systems, and user research. Experienced in contributing UI/UX design enhancements to live platforms and leveraging technical knowledge to bridge user-centered design with developer handoff for production-ready digital products.",
  tagline: "I specialize in turning complex problems into simple, intuitive, and visually engaging digital experiences that balance user needs with business goals.",
};

export const RESUME_DATA = {
  about: "UI/UX and Product Designer with an MCA background, specializing in designing intuitive, scalable web and mobile experiences. Skilled in Figma, high-fidelity interactive prototyping, design systems, and user research. Experienced in contributing UI/UX design enhancements to live platforms and leveraging technical knowledge to bridge user-centered design with developer handoff for production-ready digital products.",
  profile: "UI/UX and Product Designer with an MCA background, specializing in designing intuitive, scalable web and mobile experiences. Skilled in Figma, high-fidelity interactive prototyping, design systems, and user research. Experienced in contributing UI/UX design enhancements to live platforms and leveraging technical knowledge to bridge user-centered design with developer handoff for production-ready digital products.",
  skills: [
    {
      category: "UI & Interaction Design",
      items: "Wireframing, High-Fidelity Prototyping, Interactive States, Design Systems, Auto Layout, Responsive Web/Mobile"
    },
    {
      category: "UX Research & Strategy",
      items: "User Research, Usability Testing, Personas, Empathy Mapping, User Journey Mapping, Information Architecture"
    },
    {
      category: "Design Tools",
      items: "Figma, FigJam, Adobe Photoshop, Adobe Illustrator, Google Stitch, Google Antigravity, AI-Assisted Prototyping"
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "RV Institute of Technology and Management, Bengaluru",
      period: "2024 – 2026"
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "St. Joseph's University / College, Bengaluru",
      period: "2021 – 2024"
    }
  ] as EducationItem[],
  certifications: [
    {
      title: "Google UX Design Professional Certificate (Coursera 7-Course Specialization)",
      status: "Completed Oct 2026"
    }
  ] as CertificationItem[]
};

export const PROJECTS: Project[] = [
  {
    id: "receipts",
    number: "1",
    title: "Receipts",
    tagline: "Keep your word to yourself.",
    category: "Accountability",
    platform: "Web App",
    year: "2025",
    role: "UI/UX Designer",
    tools: ["Figma", "Habit Design", "UI Systems", "Dark/Light Mode", "Gamification"],
    tags: ["Habit Building", "Accountability", "Dark/Light Mode", "Gamification"],
    figmaUrl: "https://www.figma.com/design/WYKT1tB1G8vSn8Jbj6vk71/Receipts?node-id=0-1&t=izERvSQGNayDYgil-1",
    liveUrl: "https://receipts-goal-tracker.vercel.app",
    shortDescription: "A daily commitment tracker that turns your goals into a receipt, which you settle each day as a WIN or LOSS.",
    keyFeatures: [
      "Calendar view with Today / Settled / Open states",
      "Receipt-style daily task list with \"Settle Today\" action (WIN / LOSS stamp)",
      "Set Goals for 7 days, monthly or yearly, which auto-appear on daily receipts",
      "Brain Dump: a journaling notebook with Past Reflections",
      "Notifications and a dark/light theme toggle"
    ],
    accentColor: "#5A5A40",
    accentBg: "#F5F5F0",
    badgeColor: "#8B9E4B",
    deliverables: ["Receipt UI Metaphor", "Calendar State System", "Brain Dump Journal", "Dark/Light Theme", "Figma Prototype"],
    personas: [
      {
        name: "Aarav Nair",
        age: "Age 26",
        personaType: "The Overcommitted Builder",
        quote: "“I write endless to-do lists, but nothing feels final at the end of the night.”",
        background: "Aarav juggles work, side projects, and fitness goals. He opens three different notes apps daily but quietly drops unfinished tasks without reviewing why.",
        goals: [
          "Commit to realistic daily tasks",
          "Track 7-day and monthly goals",
          "Build an honest evening routine",
          "Reflect when days slip"
        ],
        frustrations: [
          "Tasks roll over endlessly",
          "Re-entering recurring goals daily",
          "No closure at night",
          "Cluttered productivity tools"
        ],
        motivations: [
          "Visible daily wins",
          "Self-trust & discipline",
          "Clean dark-mode focus"
        ],
        needs: [
          "Daily settlement ritual",
          "Auto-repeating goal lists",
          "Quick reflection space"
        ],
        avatarEmoji: "👨",
        avatarLabel: "Man user"
      },
      {
        name: "Meera Rao",
        age: "Age 22",
        personaType: "The Consistency Seeker",
        quote: "“I just want a simple, honest record of whether I kept my word today.”",
        background: "Meera is preparing for design interviews while building daily reading and journaling habits. Overly complex habit trackers overwhelm her and make missed days feel hidden.",
        goals: [
          "See consistency at a glance",
          "Journal thoughts alongside tasks",
          "Keep daily streaks honest",
          "Switch cleanly between themes"
        ],
        frustrations: [
          "Guilt from broken promises",
          "Journaling separated from habits",
          "Forgetting evening check-ins",
          "Busy, noisy calendars"
        ],
        motivations: [
          "Emotional clarity",
          "Visual WIN/LOSS feedback",
          "Reviewing past reflections"
        ],
        needs: [
          "Calendar Today/Settled/Open states",
          "Built-in Brain Dump notebook",
          "Gentle daily notifications"
        ],
        avatarEmoji: "👩",
        avatarLabel: "Woman user"
      }
    ],
    caseStudy: {
      problemStatement: "People set daily goals but quietly break them. There is no simple, honest way to see whether they kept their word.",
      goalStatement: "Make daily accountability feel tangible and rewarding by turning commitments into a receipt that is settled as a WIN or LOSS.",
      empathyMap: {
        says: [
          "“I'll do it tomorrow.”",
          "“I keep forgetting my goals.”"
        ],
        thinks: [
          "“Am I actually making progress?”",
          "“I'm falling behind.”"
        ],
        does: [
          "Writes tasks in scattered notes apps.",
          "Skips reviewing the day."
        ],
        feels: [
          "Guilty about broken commitments.",
          "Overwhelmed and unmotivated."
        ]
      },
      userMap: [
        {
          stage: "Set Goals",
          action: "Sets 7-day, monthly, or yearly goals.",
          emotionOrPain: "Hopeful — tired of re-entering daily habits."
        },
        {
          stage: "Add Commitments",
          action: "Adds daily tasks onto today's receipt.",
          emotionOrPain: "Focused — wants clarity over cluttered lists."
        },
        {
          stage: "Complete Tasks",
          action: "Checks off tasks throughout the day.",
          emotionOrPain: "Driven — wants to honor today's word."
        },
        {
          stage: "Settle Today",
          action: "Stamps the receipt as WIN or LOSS.",
          emotionOrPain: "Accountable — confronts unfinished items honestly."
        },
        {
          stage: "Reflect",
          action: "Writes thoughts in Brain Dump notebook.",
          emotionOrPain: "Clear-minded — learns from Past Reflections."
        }
      ],
      whyThisDesignWorks: [
        "The receipt metaphor makes commitments feel real and final.",
        "The WIN/LOSS stamp gives instant, emotional feedback.",
        "A simple calendar shows progress at a glance."
      ],
      whyThisDesignIsBetter: [
        "Typical to-do apps never ask you to \"close the day\".",
        "Goals auto-repeat on daily receipts, avoiding manual re-entry.",
        "Brain Dump links reflection to daily results in one place."
      ]
    }
  },
  {
    id: "odyssey",
    number: "2",
    title: "Odyssey",
    tagline: "A Journey Through the Soul of India",
    category: "Travel Discovery",
    platform: "Web App",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "User Research", "Interaction Design", "Prototyping", "Design Systems"],
    tags: ["Interactive India Map", "State & District Discovery", "Local Food & Culture", "Community Picks"],
    figmaUrl: "https://www.figma.com/design/tcC7mmdU8ROKpSxOR9mJY1/Discover-India?t=sqeH6cyjWWowAFbq-1",
    shortDescription: "An interactive travel discovery platform that helps users explore India state by state through local places, food, wildlife, nature and community recommendations.",
    keyFeatures: [
      "Interactive India map drilling down to states and districts",
      "Curated discovery across local food, wildlife, nature, and culture",
      "Climate and travel preference filters for better trip planning",
      "One-tap bookmarking to save spots into personal trip lists",
      "Community Picks for sharing and rating authentic hidden gems"
    ],
    accentColor: "#5A5A40",
    accentBg: "#F5F5F0",
    badgeColor: "#D4A373",
    deliverables: ["Interactive India Map", "State & District Discovery", "User Personas & Journey Map", "Community Recommendations", "Design System & Figma Prototype"],
    personas: [
      {
        name: "Anaya Menon",
        age: "Age 23",
        personaType: "Curious Explorer",
        quote: "“I don't just want to see the famous places. I want to experience the real India.”",
        background: "Anaya wants to discover authentic and less-commercialized places across India. She often discovers places through social media but struggles to organize and remember them.",
        goals: [
          "Discover hidden destinations",
          "Explore local food & culture",
          "Save places for future trips",
          "Recommendations from peers"
        ],
        frustrations: [],
        painPoint: "Travel discoveries are scattered across different platforms, making them difficult to organize and remember.",
        avatarEmoji: "👩",
        avatarLabel: "Woman explorer"
      },
      {
        name: "Rohan Mehta",
        age: "Age 32",
        personaType: "Local Explorer & Contributor",
        quote: "“I've discovered so many beautiful places that most people don't know about. I want other travellers to experience them too.”",
        background: "Rohan has travelled across India and enjoys sharing lesser-known destinations with fellow genuine travellers who appreciate local culture.",
        goals: [
          "Share hidden destinations",
          "Recommend authentic spots",
          "Rate places objectively",
          "Build personal collection"
        ],
        frustrations: [],
        painPoint: "There is no focused space for sharing lesser-known local discoveries with travellers who genuinely want them.",
        avatarEmoji: "👨",
        avatarLabel: "Man explorer"
      }
    ],
    caseStudy: {
      problemStatement: "Discovering authentic local places, food, wildlife, and nature in India is scattered across platforms. Travellers struggle to find and save hidden gems beyond commercial spots.",
      goalStatement: "Unify Indian travel discovery into one interactive map (India → State → District → Local Discovery) for exploring, saving, and sharing local experiences.",
      empathyMap: {
        says: [
          "“I want to experience the real, non-touristy India.”",
          "“I keep losing travel reels I saved earlier.”",
          "“Most guides repeat the same crowded tourist spots.”"
        ],
        thinks: [
          "“Where do locals actually eat and visit here?”",
          "“Searching across blogs and maps feels exhausting.”",
          "“Other travellers should know about this hidden spot.”"
        ],
        does: [
          "Screenshots Instagram posts and forgets them before trips.",
          "Switches endlessly between blogs, search engines, and maps.",
          "Asks friends for authentic food and nature tips."
        ],
        feels: [
          "Overwhelmed by scattered, commercial travel results.",
          "Curious to discover authentic regional food and culture.",
          "Frustrated when great local spots stay hidden."
        ]
      },
      userMap: [
        {
          stage: "Explore",
          action: "Opens interactive India map to browse states.",
          emotionOrPain: "Curious — unsure where to begin searching."
        },
        {
          stage: "Drill Down",
          action: "Selects state and district (e.g., Kerala).",
          emotionOrPain: "Engaged — needs structure without visual clutter."
        },
        {
          stage: "Discover",
          action: "Filters local food, wildlife, and nature spots.",
          emotionOrPain: "Excited — avoids generic commercial tourist traps."
        },
        {
          stage: "Save",
          action: "Bookmarks places into personal trip list.",
          emotionOrPain: "Relieved — stops losing scattered social links."
        },
        {
          stage: "Contribute",
          action: "Shares hidden gems via Community Picks.",
          emotionOrPain: "Proud — helps fellow travellers explore authentically."
        }
      ],
      whyThisDesignWorks: [
        "Map-first navigation sparks curiosity without needing a search query.",
        "Progressive drill-down (India → State → District) prevents overwhelm.",
        "One-tap saving and climate filters turn browsing into trip planning."
      ],
      whyThisDesignIsBetter: [
        "Unlike search engines, geography guides discovery before knowing destinations.",
        "Unlike social feeds, saved spots stay organized by state.",
        "Unlike commercial directories, Community Picks highlight authentic local gems."
      ]
    }
  },
  {
    id: "coingrow",
    number: "3",
    title: "CoinGrow",
    tagline: "Learn. Save. Grow.",
    category: "Gamification",
    platform: "Mobile App",
    year: "2024",
    role: "UI/UX Designer",
    tools: ["Figma", "Design Systems", "Gamification", "Financial UX", "User Research", "Micro-Interactions"],
    tags: ["Financial Education", "Gamification", "Peer Challenges", "Design System"],
    figmaUrl: "https://www.figma.com/design/EnAsa592J8beBXHUcmCYud/Finance-app?node-id=0-1&t=mYPNatzth7S8pzJu-1",
    liveUrl: "https://coingrow-financeapp.vercel.app",
    shortDescription: "A playful financial habit-building app designed to help teenagers learn how to budget, save and understand investing through simple visual experiences, personal goals, achievements and friendly challenges with friends.",
    keyFeatures: [
      "Visual allowance splitter for Save, Fun, Food, and Transport",
      "Living sprout progress tracker for personal savings goals",
      "Bite-sized financial lessons on budgeting and investing basics",
      "Achievement badges and weekly streaks for consistent saving",
      "Friendly peer challenges to save alongside friends"
    ],
    accentColor: "#5A5A40",
    accentBg: "#F5F5F0",
    badgeColor: "#E5989B",
    deliverables: ["Design System", "Core User Flows", "User Personas & Journey Map", "Achievement Badges", "Interactive Prototype"],
    personas: [
      {
        name: "Abhi",
        age: "Age 15",
        personaType: "The Curious Beginner",
        quote: "“I want to start investing, but I have no idea where to begin.”",
        background: "Abhi receives around ₹2,000 every month from his parents. He enjoys spending money on snacks, candies, games and activities with his friends. His father told him saving and investing are important, but adult financial apps feel complicated.",
        goals: [
          "Understand money flow",
          "Save pocket money",
          "Basics of investing",
          "Learn with friends"
        ],
        frustrations: [
          "Doesn't know where to start",
          "Confusing terminology",
          "Scary red/green charts",
          "Saving feels less exciting"
        ],
        motivations: [
          "Curiosity & independence",
          "Friendly competition",
          "Personal goals"
        ],
        needs: [
          "Visual feedback & budgeting",
          "Small achievable goals",
          "Friendly education"
        ],
        avatarEmoji: "👦",
        avatarLabel: "Teenager boy"
      },
      {
        name: "Mini",
        age: "Age 13",
        personaType: "The Goal-Oriented Saver",
        quote: "“I want my money to grow, and my friends want to do the same.”",
        background: "Mini receives small amounts of money from her parents for helping with household tasks. She wants to save the money instead of spending it immediately. Her friends are also interested, making shared challenges and streaks very motivating.",
        goals: [
          "Save for things she wants",
          "Understand earning & spending",
          "Build a saving habit",
          "Participate in friend challenges"
        ],
        frustrations: [
          "Doesn't know how to divide money",
          "Saving feels repetitive",
          "Apps feel too complicated",
          "Distant goals lose steam"
        ],
        motivations: [
          "Rewards & achievements",
          "Friends & shared goals",
          "Seeing tangible progress"
        ],
        needs: [
          "Visual saving goals & progress",
          "Streaks & friendly challenges",
          "Easy-to-understand education"
        ],
        avatarEmoji: "👧",
        avatarLabel: "Teenager girl"
      }
    ],
    caseStudy: {
      problemStatement: "Teenagers receive pocket money but lack simple tools to track small purchases and build saving habits. Traditional finance apps intimidate young users with dense dashboards, jargon, and market charts.",
      goalStatement: "Turn teen budgeting and financial literacy into a friendly habit-building companion with visual budgets, living sprout goals, and supportive peer challenges.",
      empathyMap: {
        says: [
          "“I want to save, but don't know how.”",
          "“Finance apps look too boring and complicated.”",
          "“My friends and I want to save together.”"
        ],
        thinks: [
          "“Where did all my pocket money go?”",
          "“Am I saving enough for my headphones?”",
          "“Investing sounds scary with those red charts.”"
        ],
        does: [
          "Spends pocket money impulsively on snacks and games.",
          "Abandons adult banking apps after opening once.",
          "Competes playfully with friends over small milestones."
        ],
        feels: [
          "Intimidated by adult financial terminology and charts.",
          "Motivated when goals feel visual and achievable.",
          "Excited by streaks, badges, and peer challenges."
        ]
      },
      userMap: [
        {
          stage: "Onboard",
          action: "Enters age and monthly pocket money.",
          emotionOrPain: "Curious — banking sign-ups feel too complex."
        },
        {
          stage: "Budget",
          action: "Splits allowance into Save, Fun, Food, Transport.",
          emotionOrPain: "Aware — surprised how fast small snacks add up."
        },
        {
          stage: "Set Goal",
          action: "Picks a tangible target like new headphones.",
          emotionOrPain: "Motivated — big goals feel distant without milestones."
        },
        {
          stage: "Learn & Save",
          action: "Logs spending and reads bite-sized money lessons.",
          emotionOrPain: "Confident — avoids confusing financial jargon."
        },
        {
          stage: "Challenge",
          action: "Joins weekly friend streaks and earns badges.",
          emotionOrPain: "Proud — saving alone gets boring fast."
        }
      ],
      whyThisDesignWorks: [
        "Living sprout visuals replace dense numbers with rewarding progress.",
        "Non-judgmental categories balance fun spending with steady saving.",
        "Bite-sized lessons and peer streaks build lasting money habits."
      ],
      whyThisDesignIsBetter: [
        "Unlike adult banking apps, plain language eliminates financial anxiety.",
        "Unlike trading apps, it teaches fundamentals without speculative risk.",
        "Unlike static trackers, peer challenges keep teens coming back."
      ]
    }
  },
];

import profileImg from '../assets/Profile.png';
import sruthyImg from '../assets/Sruthy.jpg';
import heroBgImg from '../assets/background.png';
import odysseyImg from '../assets/odyssey.png';
import coinGrowImg from '../assets/CoinGrow.png';
import receiptsImg from '../assets/Receipts.png';
import pigImg from '../assets/pig.png';

export { pigImg, sruthyImg };

/**
 * DEFAULT MEDIA ASSETS FROM GITHUB REPOSITORY
 * Loaded directly from the repository assets
 */
export const DEFAULT_MEDIA_ASSETS: MediaAssets = {
  heroCharacterImage: profileImg,
  aboutDesignerImage: sruthyImg,
  heroBackgroundImage: heroBgImg,
  odysseyCoverImage: odysseyImg,
  coinGrowCoverImage: coinGrowImg,
  receiptsCoverImage: receiptsImg,
  coinGrowPigImage: pigImg,
};
