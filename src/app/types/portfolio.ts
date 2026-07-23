import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  url: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  year: string;
  image: string;
  accent: string;
  liveUrl?: string;
  sourceUrl?: string;
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
};
