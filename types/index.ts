


export interface NavLink {
  name: string;
  href: string;
};

export interface Skill {
  name: string;
  color: string;
  logo: string;
}

export interface Highlight {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}


export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface ContactInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
}