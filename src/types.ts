export interface Persona {
  name: string;
  age: string;
  personaType: string;
  quote: string;
  background: string;
  goals: string[];
  frustrations: string[];
  motivations?: string[];
  needs?: string[];
  painPoint?: string;
  avatarEmoji?: string;
  avatarLabel?: string;
}

export interface EmpathyMapData {
  says: string[];
  thinks: string[];
  does: string[];
  feels: string[];
}

export interface UserMapStage {
  stage: string;
  action: string;
  emotionOrPain: string;
}

export interface CaseStudyContent {
  problemStatement: string;
  goalStatement: string;
  empathyMap: EmpathyMapData;
  userMap: UserMapStage[];
  whyThisDesignWorks: string[];
  whyThisDesignIsBetter: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  platform: string;
  year: string;
  role: string;
  tools: string[];
  tags: string[];
  figmaUrl: string;
  liveUrl?: string;
  shortDescription: string;
  keyFeatures: string[];
  accentColor: string;
  accentBg: string;
  badgeColor: string;
  deliverables: string[];
  personas: Persona[];
  caseStudy: CaseStudyContent;
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
  receiptsCoverImage?: string;
  coinGrowPigImage?: string;
  aboutDesignerImage?: string;
}
