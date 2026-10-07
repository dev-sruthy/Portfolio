export interface Persona {
  name: string;
  age: string;
  personaType: string;
  quote: string;
  background: string;
  goals: string[];
  frustrations: string[];
  motivations: string[];
  needs: string[];
}

export interface JourneyStage {
  stage: string;
  stageName: string;
  userAction: string;
  userThought: string;
  emotion: string;
  painPoint: string;
  opportunity: string;
  coinGrowResponse: string;
}

export interface DesignIteration {
  problem: string;
  insight: string;
  designChange: string;
  result: string;
}

export interface DesignPrinciple {
  number: string;
  title: string;
  description: string;
}

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
    designChallenge?: string;
    keyAreas?: string[];
    productPrinciple?: string;
  };
  personas?: Persona[];
  journeyMap?: JourneyStage[];
  budgetExample?: {
    income: string;
    items: { label: string; amount: string; color: string; percent: number }[];
  };
  designIterations?: DesignIteration[];
  designPrinciples?: DesignPrinciple[];
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
  coinGrowPigImage?: string;
}
