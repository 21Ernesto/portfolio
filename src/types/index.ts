export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface HomeSection {
  profileImage: string;
  title: string;
  description: string;
  socialLinks: SocialLink[];
}