import React from 'react';

export interface Project {
  name: string;
  description: string;
  tech: Array<{ name: string; icon: React.FC<{className?: string}> }>;
  github?: string;
  demo?: string;
  image: string;
  status: 'Completed' | 'In Progress';
}

export interface AboutTrait {
  icon: React.FC<{className?: string}>;
  title: string;
  description: string;
}

export interface Skill {
    name: string;
    icon: React.FC<{className?: string}>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface LeadershipItem {
  title: string;
  role: string;
  description: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    description: string;
}

export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  url: string;
  publishedAt: string;
  coverImage?: {
    url: string;
  };
}