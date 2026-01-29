import { NavLink, Project, Highlight, Skill, Experience } from '@/types/index';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';

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
    title: 'BISTRO Restaurant Landing Page',
    description: 'A responsive landing page website built with React Js and Tailwind css and for animation AOS library and React icons.',
    image: '/images/Bistro-Project.png',
    tags: ["React", "Typescript", "AOS"],
    link: "#",
    github: "#",
  },
  {
    title: 'Allo Voyage Travel Agency',
    description: 'A responsive Travel Agency website built with NEXT.js 15 using TypeScript and Tailwind css and React icons and AOS animation.',
    image: '/images/allo-voyage-project.png',
    tags: ["NEXT", "Typescript", "AOS", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: 'Earbuds Store Landing Page',
    description: 'A responsive landing page website Light/Dark Mode built with Next Js and Tailwind css and for animation AOS library and React icons.',
    image: '/images/earbuds.png',
    tags: ["NEXT", "Typescript", "AOS", "Tailwind CSS"],
    link: "#",
    github: "#",
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
