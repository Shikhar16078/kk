import { type LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export type PersonalData = {
  name: string;
  title: string;
  bio: string;
  image: string;
  contact: {
    email: string;
    social: SocialLink[];
  };
};

export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  accomplishments: string[];
};

export type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  image: string;
};
