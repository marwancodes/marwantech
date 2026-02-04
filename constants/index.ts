import { NavLink, Project, Highlight, Skill, Experience, Testimonial, ContactInfo, SocialLink, FooterLink } from '@/types/index';
import { Code2, Github, Lightbulb, Linkedin, Mail, MapPin, Phone, Rocket, Twitter, Users } from 'lucide-react';

export const NavLinks: NavLink[] = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Testimonials", href: "/#testimonials" },
];


export const skills: Skill[] = [
  { name: "React", color: "#61DAFB", logo: "/logos/ReactJs.png" },
  { name: "Next", color: "#ffff", logo: "/logos/next.png" },
  { name: "Neon", color: "#47e2b6", logo: "/logos/neon.png" },
  { name: "AWS", color: "#ffff", logo: "/logos/AWS.png" },
  { name: "Node", color: "#339933", logo: "/logos/node.png" },
  { name: "Laravel", color: "#FF2D20", logo: "/logos/laravel.png" },
  { name: "Firebase", color: "#FFCA28", logo: "/logos/firebase.png" },
  { name: "Redux", color: "#6D4FDB", logo: "/logos/redux.png" },
  { name: "Clerk", color: "#5B50EB", logo: "/logos/clerk.png" },
  { name: "GraphQL", color: "#E10098", logo: "/logos/graphql.png" },
  { name: "PostgreSQL", color: "#336791", logo: "/logos/postgresql.png" },
  { name: "MongoDB", color: "#47A248", logo: "/logos/mongodb.png" },
  { name: "JWT", color: "#DC382D", logo: "/logos/jwt.png" },
  { name: "Docker", color: "#2496ED", logo: "/logos/docker.png" },
  { name: "Tanstack Query", color: "#FF9900", logo: "/logos/tanstack-query.svg" },
  { name: "Tailwind CSS", color: "#38B2AC", logo: "/logos/Tailwind_CSS.png" },
  { name: "Prisma", color: "#34D1C1", logo: "/logos/prisma.png" },
  { name: "daisyUI", color: "#F6E05E", logo: "/logos/daisyui.png" },
  { name: "Vercel", color: "#ffff", logo: "/logos/vercel.png" },
  { name: "TypeScript", color: "#3178C6", logo: "/logos/typescript.png" },
  { name: "Jest", color: "#C21325", logo: "/logos/jest.png" },
  { name: "Convex", color: "#FF9900", logo: "/logos/convex.png" },
  { name: "Figma", color: "#FF9900", logo: "/logos/figma.png" },
  { name: "Zod", color: "#3178C6", logo: "/logos/zod-logo.png" },
];

export const highlights: Highlight[] = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];


export const projects: Project[] = [
  {
    title: 'HotBargain E-commerce Website',
    description: 'PERN Stack E-commerce web application built with PostgreSQL & drizzle ORM, Express.js, React.js, and Node.js with TypeScript. Used Clerk for authentication and Tailwind CSS for styling and DaisyUI for components.',
    image: '/images/HOTBARGAINSHOP.png',
    tags: ["React", "Express", "DaisyUI", "Clerk", "PostgreSQL", "Axios", "Tanstack Query", "Tailwind CSS"],
    link: "https://github.com/marwancodes/hotbargain/",
    github: "https://github.com/marwancodes/hotbargain/",
  },
  {
    title: 'BISTRO Restaurant Landing Page',
    description: 'A responsive landing page website built with React Js and Tailwind css and for animation AOS library and React icons.',
    image: '/images/Bistro-Project.png',
    tags: ["React", "Typescript", "AOS"],
    link: "https://bistro-nine.vercel.app/",
    github: "https://github.com/marwancodes/bistro",
  },
  {
    title: 'Allo Voyage Travel Agency',
    description: 'A responsive Travel Agency website built with NEXT.js 15 using TypeScript and Tailwind css and React icons and AOS animation.',
    image: '/images/allo-voyage-project.png',
    tags: ["NEXT", "Typescript", "AOS", "Tailwind CSS"],
    link: "https://allo-voyage.vercel.app",
    github: "https://github.com/marwancodes/allo-voyage",
  },
  {
    title: 'Earbuds Store Landing Page',
    description: 'A responsive landing page website Light/Dark Mode built with Next Js and Tailwind css and for animation AOS library and React icons.',
    image: '/images/earbuds.png',
    tags: ["NEXT", "Typescript", "AOS", "Tailwind CSS"],
    link: "https://earbuds-eight.vercel.app/",
    github: "https://github.com/marwancodes/earbuds-landing-page",
  },
  {
    title: 'Listify Listing Application',
    description: 'MERN Stack Listing web application built with MongoDB, Express.js, React.js, and Node.js with TypeScript. JWT Used for authentication and Tailwind CSS for styling .',
    image: '/images/listify.png',
    tags: ["React", "Express", "JWT", "MongoDB", "Axios", "Tailwind CSS"],
    link: "https://github.com/marwancodes/listify",
    github: "https://github.com/marwancodes/listify",
  },
  {
    title: 'Atlas Gym Management System',
    description: 'Laravel & blade template Gym management web application built with PHP Laravel framework and MariaDB database and Breeze for authentication scaffolding. Used for authentication and Tailwind CSS for styling .',
    image: '/images/ATLAS-GYM.png',
    tags: ["Laravel", "PHP", "Breeze", "MariaDB", "Tailwind CSS"],
    link: "https://github.com/marwancodes/atlasgym-management",
    github: "https://github.com/marwancodes/atlasgym-management",
  },
  {
    title: 'Tech Agency Landing Page',
    description: 'A responsive landing page website built with NEXT.js 15 using TypeScript and Tailwind css and React icons and AOS animation.',
    image: '/images/TECH-AGENCY.png',
    tags: ["NEXT", "Typescript", "AOS", "Tailwind CSS"],
    link: "https://tech-agency-eight.vercel.app/",
    github: "https://github.com/marwancodes/tech-agency-landing-page",
  },
  {
    title: 'Job Match Platform & Back Office',
    description: 'Laravel & alpineJS template Job Match platform web application for job seekers and employers built with PHP Laravel framework and MariaDB database. Integrated ChatGPT API for enhanced job matching capabilities. Used Tailwind CSS for styling and Breeze for authentication scaffolding.',
    image: '/images/JOBMATCH1.png',
    tags: ["Laravel", "alpinejs", "ChatGPT API", "MariaDB", "Tailwind CSS", "Breeze"],
    link: "https://job-match-eight.vercel.app/",
    github: "https://github.com/marwancodes/job-match-platform",
  },
  {
    title: 'Inventory Management System',
    description: 'A full-stack inventory management system built with NEXT.js 15 using TypeScript for both frontend and backend. Implemented Clerk for authentication, Prisma ORM for database interactions with Neon (PostgreSQL), and styled the application using Tailwind CSS.',
    image: '/images/inventory-management.png',
    tags: ["NEXT", "Typescript", "PostgreSQL", "Clerk", "Tailwind CSS", "Zod", "Prisma", "Neon"],
    link: "https://inventory-management-eight.vercel.app/",
    github: "https://github.com/marwancodes/inventory-management",
  },
];

export const experiences: Experience[] = [
  {
    period: "2023 — Present",
    role: "Full Stack Developer (MERN / Next.js)",
    company: "Personal Projects & Freelance",
    description:
      "Designed and built full-stack web applications using the MERN stack and Next.js. Developed secure authentication systems with JWT, RESTful APIs, and scalable frontend architectures. Focused on clean code, performance, and modern UI using Tailwind CSS. Deployed projects to Vercel and Render, managing production bugs and optimisations.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    current: true,
  },
  {
    period: "2022 — 2023",
    role: "Frontend Developer",
    company: "Independent Projects",
    description:
      "Built responsive and accessible user interfaces with React and TypeScript. Implemented state management using Context API, Redux, and Zustand. Consumed REST APIs with Axios and improved UX through reusable components and performance optimisation.",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Zustand",
      "Axios",
      "Tailwind CSS",
      "Bootstrap",
    ],
    current: false,
  },
  {
    period: "2021 — 2023",
    role: "Software Developer",
    company: "Academic & Training Projects",
    description:
      "Completed multiple academic and practical projects during specialised computer development studies (Bac +2 / Level 5 UK equivalent). Gained strong foundations in web development, databases, and software engineering best practices.",
    technologies: [
      "JavaScript",
      "PHP",
      "MySQL",
      "Laravel",
      "HTML",
      "CSS",
    ],
    current: false,
  },
  {
    period: "2020 — 2021",
    role: "Content Moderator",
    company: "Majorel (Facebook & Instagram)",
    description:
      "Worked as a content moderator for Meta platforms, ensuring policy compliance and user safety. Developed strong attention to detail, decision-making skills, and the ability to work under pressure in fast-paced environments.",
    technologies: ["Policy Review", "Content Analysis", "Quality Assurance"],
    current: false,
  },
];


export const testimonials: Testimonial[]= [
  {
    quote:
      "Marwan is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Marwan was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Marwan's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Marwan a brilliant developer technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "marouaneord@gmail.com",
    href: "mailto:marouanord@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7362 354325",
    href: "tel:+447362354325",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Birmingham, United Kingdom",
    href: "#",
  },
];


export const socialLinks: SocialLink[] = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const footerLinks: FooterLink[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];