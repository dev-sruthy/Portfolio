export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  figmaUrl: string;
  shortDescription: string;
  highlights: string[];
  accentColor: string;
  accentBg: string;
  badgeColor: string;
  deliverables: string[];
  overview: {
    problem: string;
    solution: string;
    targetUser: string;
    impact: string;
  };
  process: {
    research: string[];
    wireframing: string[];
    designSystem: string[];
    outcomes: string[];
  };
}

export interface SkillGroup {
  category: string;
  skillsText: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period?: string;
}

export interface CertificationItem {
  title: string;
  status: string;
}

export interface MediaAssets {
  heroCharacterImage: string;
  heroBackgroundImage: string;
  odysseyCoverImage: string;
  coinGrowCoverImage: string;
}
