import type { StaticImageData } from 'next/image';

// Project showcase images
import ivf from '../../public/ivf.png';
import aldomakers from '../../public/aldomakers-ai.png';
import glostox from '../../public/g-2.png';
import hunter from '../../public/hunter.png';
import commerce from '../../public/commerce.png';
import vacancy from '../../public/vacancy.png';
import vocable from '../../public/vocable.png';
import atoms from '../../public/atoms.png';
import nanoplot from '../../public/nanoplot.png';
import school from '../../public/school.png';

// Aldomakers AI gallery
import aldomakers1 from '../../public/aldomakers-1.png';
import aldomakers2 from '../../public/aldomakers-2.png';
import aldomakers3 from '../../public/aldomakers-3.png';
import aldomakers4 from '../../public/aldomakers-4.png';
import aldomakers5 from '../../public/aldomakers-5.png';
import aldomakers6 from '../../public/aldomakers-6.png';

// Vocable AI gallery
import v1 from '../../public/v-1.png';
import v2 from '../../public/v-2.png';
import v3 from '../../public/v-3.png';
import v4 from '../../public/v-4.png';
import v5 from '../../public/v-5.png';
import v6 from '../../public/v-6.png';
import v7 from '../../public/v-7.png';

// Hunter Galloway gallery
import h1 from '../../public/h-1.png';
import h2 from '../../public/h-2.png';
import h3 from '../../public/h-3.png';
import h4 from '../../public/h-4.png';
import h5 from '../../public/h-5.png';
import h6 from '../../public/h-6.png';
import h7 from '../../public/h-7.png';

// E-commerce gallery
import e1 from '../../public/e-1.png';
import e2 from '../../public/e-2.png';
import e3 from '../../public/e-3.png';
import e4 from '../../public/e-4.png';
import e5 from '../../public/e-5.png';
import e6 from '../../public/e-6.png';
import e7 from '../../public/e-7.png';

// Ton Vacancy gallery
import t1 from '../../public/t-1.png';
import t2 from '../../public/t-2.png';
import t3 from '../../public/t-3.png';
import t4 from '../../public/t-4.png';
import t5 from '../../public/t-5.png';
import t6 from '../../public/t-6.png';
import t7 from '../../public/t-7.png';

// Nanoplot gallery
import n1 from '../../public/n-1.png';
import n2 from '../../public/n-2.png';
import n3 from '../../public/n-3.png';
import n4 from '../../public/n-4.png';
import n5 from '../../public/n-5.png';
import n6 from '../../public/n-6.png';
import n7 from '../../public/n-7.png';

// IVF Chat gallery
import i1 from '../../public/i-1.png';
import i2 from '../../public/i-2.png';
import i3 from '../../public/i-3.png';
import i4 from '../../public/i-4.png';
import i5 from '../../public/i-5.png';

// Atoms gallery
import a1 from '../../public/a-1.png';
import a2 from '../../public/a-2.png';
import a3 from '../../public/a-3.png';
import a4 from '../../public/a-4.png';
import a5 from '../../public/a-5.png';
import a6 from '../../public/a-6.png';

// School Management gallery
import s1 from '../../public/s-1.png';
import s2 from '../../public/s-2.png';
import s3 from '../../public/s-3.png';
import s4 from '../../public/s-4.png';
import s5 from '../../public/s-5.png';
import s6 from '../../public/s-6.png';
import s7 from '../../public/s-7.png';
import s8 from '../../public/s-8.png';

// Glostox AI gallery
import g1 from '../../public/g-1.png';
import g2 from '../../public/g-2.png';
import g3 from '../../public/g-3.png';
import g4 from '../../public/g-4.png';

export interface MenuItem {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  {
    icon: '🏠',
    title: 'Home',
    description: 'Professional portfolio showcasing full-stack development expertise',
    href: '/',
  },
  {
    icon: '📂',
    title: 'Work',
    description: 'Curated collection of professional projects and client work',
    href: '/work',
  },
  {
    icon: '📚',
    title: 'Projects',
    description: 'Technical deep-dives, case studies, and development insights',
    href: '/projects',
  },
  {
    icon: '👤',
    title: 'About',
    description: 'Professional background, skills, and career journey',
    href: '/about',
  },
  {
    icon: '🔗',
    title: 'Contact',
    description: 'Connect with me for collaboration and opportunities',
    href: '/contact',
  },
];

export interface Technology {
  name: string;
  url: string;
}

export const techStack: Technology[] = [
  // Frontend Technologies
  { name: 'HTML', url: 'html5' },
  { name: 'CSS', url: 'css3' },
  { name: 'JavaScript', url: 'javascript' },
  { name: 'TypeScript', url: 'typescript' },
  { name: 'React', url: 'react' },
  { name: 'Next.js', url: 'nextdotjs' },
  { name: 'Tailwind CSS', url: 'tailwindcss' },
  
  // State Management
  { name: 'Redux Toolkit', url: 'redux' },
  { name: 'Zustand', url: 'redux/pink' },
  { name: 'React Query', url: 'reactquery' },
  
  // UI Frameworks
  { name: 'Shadcn/ui', url: 'shadcnui' },
  { name: 'MUI', url: 'MUI' },
  
  // Backend Technologies
  { name: 'Node.js', url: 'nodedotjs' },
  { name: 'Express', url: 'express' },
  { name: 'GraphQL', url: 'graphql' },
  
  // Databases
  { name: 'MongoDB', url: 'mongodb' },
  { name: 'MySQL', url: 'mysql' },
  { name: 'PostgreSQL', url: 'postgresql' },
  
  // ORMs
  { name: 'Prisma', url: 'prisma' },
  { name: 'Drizzle', url: 'drizzle' },
  
  // Version Control & Deployment
  { name: 'Git', url: 'git' },
  { name: 'GitHub', url: 'github' },
  { name: 'Vercel', url: 'vercel' },
  { name: 'Netlify', url: 'netlify' },
];

export interface Project {
  href: string;
  src: StaticImageData;
  showcase: StaticImageData[];
  github: string;
  live: string;
  name: string;
  tags: string[];
  description: string;
  technologies: string[];
  techStack: Technology[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    href: '/projects/algomakers-ai',
    src: aldomakers,
    showcase: [aldomakers, aldomakers1, aldomakers2, aldomakers6, aldomakers3, aldomakers4, aldomakers5],
    github: 'https://github.com/elassari19',
    live: 'https://algomakers.ai/',
    name: 'Aldomakers AI',
    tags: [
      'Web Application',
      'MVP',
      'AI Strategy Marketplace',
      'Full Stack',
      'Client Project',
      'Production',
      '2025',
    ],
    description:
      'A sophisticated AI-powered strategy marketplace platform enabling businesses to access data-driven insights and operational strategies for enhanced decision-making.',
    technologies: [
      'Architected scalable application using Next.js, React, and TypeScript',
      'Implemented responsive UI with Tailwind CSS and Framer Motion animations',
      'Designed robust database architecture with PostgreSQL and Prisma ORM',
      'Integrated secure authentication system using Next-Auth',
      'Implemented payment processing with NowPayments API integration',
      'Optimized performance with Redis caching and Hezner Cloud deployment',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'Next-Auth', url: 'auth0' },
      { name: 'Prisma', url: 'prisma' },
      { name: 'PostgreSQL', url: 'postgresql' },
      { name: 'Redis', url: 'redis' },
      { name: 'Plotly.js', url: 'plotly' },
    ],
    challenges: [
      'Designed and implemented scalable PostgreSQL database architecture',
      'Integrated Next-Auth for secure multi-provider authentication',
      'Developed interactive data visualizations using Plotly.js',
      'Implemented NowPayments cryptocurrency payment gateway',
      'Configured Redis for high-performance caching layer',
      'Deployed and optimized application on Hezner Cloud infrastructure',
    ],
  },
  {
    href: '/projects/glostox',
    src: glostox,
    showcase: [g1, g2, g3, g4],
    github: 'https://github.com/elassari19/glostox-ai-mvp',
    live: 'https://glostox.com/',
    name: 'Glostox AI',
    tags: [
      'Web Application',
      'MVP',
      'AI Chatbot Platform',
      'Full Stack',
      'Client Project',
      'Production',
      '2025',
    ],
    description:
      'An intelligent AI chatbot platform designed to revolutionize customer engagement through advanced natural language processing and automated support solutions.',
    technologies: [
      'Engineered scalable architecture with Next.js, React, and TypeScript',
      'Created dynamic user interfaces with Tailwind CSS and Framer Motion',
      'Architected database solutions using Neon (PostgreSQL) with Node.js/Express APIs',
      'Implemented efficient state management with React Query',
      'Integrated secure authentication via Next-Auth',
      'Configured Stripe subscription-based payment system',
      'Developed AI chat functionality powered by ChatGPT API',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'React', url: 'react' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'Framer Motion', url: 'framer' },
      { name: 'Neon', url: 'neovim' },
      { name: 'React Query', url: 'reactquery' },
      { name: 'ChatGPT', url: 'openai' },
    ],
    challenges: [
      'Architected and implemented Neon serverless PostgreSQL database',
      'Integrated Next-Auth for comprehensive authentication system',
      'Optimized application state management with React Query',
      'Implemented Stripe subscription management and billing',
      'Developed AI-powered chat interface with ChatGPT integration',
      'Enhanced existing codebase with modern architecture patterns',
    ],
  },
  {
    href: '/projects/school',
    src: school,
    showcase: [s1, s2, s3, s4, s5, s6, s7, s8],
    github: 'https://github.com/elassari19/school-system-management',
    live: 'https://schoolsystemmanagement.vercel.app/',
    name: 'School System Management',
    tags: [
      'Web Application',
      'Responsive Design',
      'Full Stack',
      'Multilingual',
      'Side Project',
      'In Development',
    ],
    description:
      'A comprehensive educational management platform designed to streamline administrative operations, student enrollment, and academic tracking for modern educational institutions.',
    technologies: [
      'Architected full-stack solution with Next.js, React, and TypeScript',
      'Designed responsive interfaces using Tailwind CSS and Framer Motion',
      'Implemented professional UI components with Shadcn/ui',
      'Built robust backend with Node.js, Express, and MongoDB via Prisma ORM',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'React Hook Form', url: 'reacthookform' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'Redux Toolkit', url: 'redux' },
      { name: 'Framer Motion', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
      { name: 'ChatGPT', url: 'openai' },
      { name: 'Prisma', url: 'prisma' },
      { name: 'MongoDB', url: 'mongodb' },
      { name: 'Redis', url: 'redis' },
      { name: 'Passport.js', url: 'passport' },
      { name: 'Stripe', url: 'stripe' },
    ],
    challenges: [
      'Architected complete system from ground up with scalable design patterns',
      'Integrated Prisma ORM with Express.js for type-safe database operations',
      'Implemented TypeScript across full Express.js backend',
      'Developed comprehensive test suite using Jest',
      'Engineered i18n multilingual support system',
      'Implemented Passport.js for secure authentication strategies',
      'Integrated Stripe for comprehensive payment processing',
      'Configured Redis for optimized caching and session management',
      'Deployed and orchestrated full-stack application architecture',
    ],
  },
  {
    href: '/projects/vocable',
    src: vocable,
    showcase: [v1, v2, v3, v4, v5, v6, v7],
    github: 'https://github.com/Vocable-AI/vocable_frontend',
    live: 'https://vocable.ai/',
    name: 'Vocable AI',
    tags: [
      'Web Application',
      'Responsive Design',
      'AI Content Platform',
      'Full Stack',
      'Client Project',
      'In Development',
    ],
    description:
      'An advanced content operations platform that revolutionizes multi-channel content creation through AI-powered ideation, planning, and collaboration tools.',
    technologies: [
      'Engineered scalable React application with TypeScript',
      'Designed responsive interfaces using React Bootstrap and Framer Motion',
      'Implemented robust state management with Redux Toolkit',
      'Integrated comprehensive payment processing with Stripe',
    ],
    techStack: [
      { name: 'React', url: 'react' },
      { name: 'Bootstrap', url: 'reactbootstrap' },
      { name: 'SASS', url: 'sass' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'React-Redux', url: 'redux' },
      { name: 'Formik', url: 'formik' },
      { name: 'Next-Auth', url: 'auth0' },
      { name: 'Stripe', url: 'stripe' },
    ],
    challenges: [
      'Implemented comprehensive Stripe payment gateway integration',
      'Configured Next-Auth for enterprise-grade authentication',
      'Architected scalable Redux state management solution',
      'Enhanced and modernized existing application architecture',
    ],
  },
  {
    href: '/projects/commerce',
    src: commerce,
    showcase: [e1, e2, e3, e4, e5, e6, e7],
    github: 'https://github.com/elassari19/e-commerce',
    live: 'https://ivf-chat-amber.vercel.app/',
    name: 'E-commerce Platform',
    tags: [
      'Web Application',
      'Responsive Design',
      'Full Stack',
      'Side Project',
      'Production',
      '2023',
    ],
    description:
      'A full-featured e-commerce platform with comprehensive admin dashboard, enabling seamless online shopping experiences with secure payment processing and inventory management.',
    technologies: [
      'Architected scalable Next.js application with React and TypeScript',
      'Implemented professional UI components using Shadcn/ui',
      'Designed responsive interfaces with Tailwind CSS and Framer Motion',
      'Engineered robust state management with Redux Toolkit',
      'Integrated Cloudinary for advanced media asset management',
      'Built RESTful APIs with Node.js, Express, and MongoDB',
      'Implemented secure payment processing with Stripe',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Shadcn UI', url: 'shadcnui' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'Redux Toolkit', url: 'redux' },
      { name: 'tRPC', url: 'trpc' },
      { name: 'Framer Motion', url: 'framer' },
      { name: 'MongoDB', url: 'mongodb' },
      { name: 'Prisma', url: 'prisma' },
      { name: 'Cloudinary', url: 'cloudinary' },
      { name: 'Stripe', url: 'stripe' },
    ],
    challenges: [
      'Implemented tRPC for type-safe API communication',
      'Architected database layer with Prisma ORM',
      'Configured Next-Auth for comprehensive authentication',
      'Integrated Stripe for secure payment processing',
      'Engineered Redux Toolkit for complex state management',
      'Implemented Cloudinary for optimized media storage',
      'Designed component library with Shadcn/ui',
    ],
  },
  {
    href: '/projects/ivf',
    src: ivf,
    showcase: [i1, i2, i3, i4, i5],
    github: 'https://github.com/elassari19/ivf-chat/',
    live: 'https://ivf-chat-amber.vercel.app/',
    name: 'IVF Chat',
    tags: [
      'Web Application',
      'Responsive Design',
      'Full Stack',
      'AI Healthcare',
      'Client Project',
      'In Development',
      '2025',
    ],
    description:
      'A specialized healthcare platform providing real-time chat support and AI-powered emotional wellness resources for individuals navigating the IVF journey.',
    technologies: [
      'Engineered Next.js application with React and TypeScript',
      'Designed responsive interfaces with Tailwind CSS and Framer Motion',
      'Architected database solution with Supabase (PostgreSQL)',
      'Implemented efficient state management with React Query',
      'Integrated Stripe subscription-based payment system',
      'Developed AI chat functionality with ChatGPT integration',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'React Hook Form', url: 'reacthookform' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'Framer Motion', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
      { name: 'ChatGPT', url: 'openai' },
      { name: 'Drizzle', url: 'drizzle/red' },
      { name: 'Next-Auth', url: 'auth0' },
      { name: 'PostgreSQL', url: 'postgresql' },
      { name: 'Stripe', url: 'stripe' },
      { name: 'Node.js', url: 'nodedotjs' },
      { name: 'Express', url: 'express' },
    ],
    challenges: [
      'Implemented Drizzle ORM for type-safe database operations',
      'Configured Next-Auth for secure healthcare-compliant authentication',
      'Engineered Stripe subscription management system',
      'Architected React Query for optimized data fetching',
      'Developed AI-powered conversational interface with ChatGPT',
    ],
  },
  {
    href: '/projects/hunter',
    src: hunter,
    showcase: [h1, h2, h3, h4, h5, h6, h7],
    github: 'https://github.com/a-hariti/hunter-galloway',
    live: 'https://www.huntergalloway.com.au/',
    name: 'Hunter Galloway',
    tags: [
      'Web Application',
      'Responsive Design',
      'Frontend',
      'Client Project',
      'Production',
      '2024',
    ],
    description: 'A comprehensive mortgage and home buying platform providing expert guidance and personalized assistance throughout the home acquisition process.',
    technologies: [
      'Engineered Next.js application with React and TypeScript',
      'Created dynamic animations and interactions using GSAP',
      'Designed responsive interfaces with Tailwind CSS',
      'Integrated Airtable database with custom RESTful APIs',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'React Hook Form', url: 'reacthookform' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'GSAP', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
      { name: 'Airtable', url: 'airtable' },
      { name: 'Node.js', url: 'nodedotjs' },
      { name: 'Express', url: 'express' },
    ],
    challenges: [
      'Architected Airtable integration for dynamic content management',
      'Implemented advanced GSAP animations for enhanced user experience',
      'Configured Next-Auth for secure client authentication',
    ],
  },
  {
    href: '/projects/vacancy',
    src: vacancy,
    showcase: [t1, t2, t3, t4, t5, t6, t7],
    github: 'https://github.com/elassari19/Ton_vacancy',
    live: 'https://ton-vacancy.vercel.app/',
    name: 'Ton Vacancy',
    tags: [
      'Web Application',
      'Responsive Design',
      'Frontend',
      'Side Project',
      'Production',
      '2023',
    ],
    description:
      'A global talent acquisition platform connecting employers with top-tier professionals worldwide through advanced matching algorithms and comprehensive candidate profiles.',
    technologies: [
      'Engineered Next.js application with React and TypeScript',
      'Designed responsive interfaces with Bootstrap and Framer Motion',
      'Architected database solution with MongoDB and Mongoose',
      'Built RESTful APIs with Node.js and Express',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Bootstrap', url: 'bootstrap' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'Formik', url: 'formik' },
      { name: 'Vercel', url: 'vercel' },
      { name: 'Mongoose', url: 'mongoose' },
      { name: 'MongoDB', url: 'mongodb' },
      { name: 'Node.js', url: 'nodedotjs' },
      { name: 'Express', url: 'express' },
    ],
    challenges: [
      'Implemented Mongoose for robust database modeling',
      'Configured Next-Auth for comprehensive authentication system',
      'Designed responsive UI components with Bootstrap',
      'Integrated Multer for secure file upload handling',
      'Implemented Cloudinary for optimized media storage',
      'Engineered express-session and JWT for secure authentication',
      'Configured Nodemailer for automated email communications',
      'Deployed and optimized application on Vercel platform',
      'Architected complete application from concept to production',
    ],
  },
  {
    href: '/projects/atoms',
    src: atoms,
    showcase: [a1, a2, a3, a4, a5, a6],
    github: 'https://github.com/elassari19/mental-toughness-landing-page',
    live: 'https://atoms.jamesclear.com/',
    name: 'Atoms - Landing Page',
    tags: [
      'Web Application',
      'Responsive Design',
      'Frontend',
      'Side Project',
      'Production',
      '2024',
    ],
    description:
      'A sophisticated habit formation platform inspired by James Clear\'s Atomic Habits, combining behavioral science with intuitive design to help users build lasting positive changes through incremental improvements.',
    technologies: [
      'Engineered Next.js application with React and TypeScript',
      'Created advanced animations and micro-interactions using GSAP',
      'Designed responsive interfaces with Tailwind CSS',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'GSAP', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
    ],
    challenges: [
      'Architected comprehensive UI component system with Tailwind CSS',
      'Implemented complex GSAP animations for engaging user experience',
      'Deployed and optimized performance on Vercel platform',
    ],
  },
  {
    href: '/projects/nanoplot',
    src: nanoplot,
    showcase: [n1, n2, n3, n4, n5, n6, n7],
    github: 'https://github.com/ShanonJackson/nanoplot',
    live: 'https://nanoplot.com/',
    name: 'Nanoplot',
    tags: ['Web Application', 'Responsive Design', 'Frontend', 'Client Project', 'In Development'],
    description:
      'An advanced data visualization platform empowering developers, data scientists, and analysts to create compelling, interactive charts and graphs with minimal configuration.',
    technologies: [
      'Engineered React application with TypeScript for type safety',
      'Designed responsive interfaces with Tailwind CSS and Framer Motion',
      'Implemented zero-dependency architecture for optimal performance',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
    ],
    challenges: [
      'Architected comprehensive UI component library with Tailwind CSS',
      'Engineered zero-dependency solution for maximum performance',
      'Collaborated with cross-functional team on product design and development',
    ],
  },
];

// Type export for projects array
export type ProjectType = (typeof projects)[number];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Coral',
    location: 'Remote • Freelance',
    period: '2023/08 – Present',
    responsibilities: [
      'Architect end-to-end solutions from concept to deployment, delivering scalable applications with modern tech stacks',
      'Collaborate with cross-functional teams to enhance existing web applications with new features and functionality',
      'Maintain and optimize web applications, implementing best practices for performance and code quality',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'OMIC',
    location: 'Remote • Full-time',
    period: '2022/02 – 2023/08',
    responsibilities: [
      'Collaborated with engineering and design teams to develop innovative Healthcare Platform solutions',
      'Engineered AI-powered platform combining machine learning with human research for therapy generation and digital patient testing',
      'Developed comprehensive code management platform enabling clients to create, store, and share code repositories',
      'Implemented cutting-edge technologies including React.js with MUI v5, Tailwind CSS, and Redux Toolkit',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'IRON ION',
    location: 'On-site • Full-time',
    period: '2019/07 - 2022/01',
    responsibilities: [
      'Developed internal applications to streamline business operations and improve efficiency',
      'Built Learning Management Systems including inventory management and production monitoring dashboards',
      'Architected and maintained e-commerce platform for online sales with integrated payment processing',
    ],
  },
  {
    title: 'Junior Full-Stack Developer',
    company: 'CommonShare',
    location: 'On-site • Full-time',
    period: '2014/07 - 2019/01',
    responsibilities: [
      'Gained comprehensive understanding of organizational strategies and business operations',
      'Enhanced and refactored existing applications under senior developer mentorship',
      'Collaborated with senior developers to master best practices, coding standards, and problem-solving methodologies',
      'Implemented well-defined features and components within larger project architectures',
    ],
  },
];

export interface Education {
  program: string;
  institution: string;
  period: string;
  description: string;
}

export const educations: Education[] = [
  {
    program: 'Software Engineering',
    institution: 'ALX',
    period: '2022/09 - 2024/06',
    description:
      'Comprehensive software engineering program focused on full-stack development, system architecture, and modern programming paradigms. Emphasis on hands-on projects and real-world application of software development principles.',
  },
  {
    program: 'Web Design & Development',
    institution: 'Institute Meshket',
    period: '2021/09',
    description: 'Intensive online bootcamp covering modern web design principles, responsive design, and frontend development technologies.',
  },
  {
    program: 'Accounting',
    institution: 'Institute Ibn Marhal',
    period: '2014/06 - 2016/07',
    description: 'Diploma program in accounting and financial management, providing foundation in analytical thinking and systematic problem-solving.',
  },
  {
    program: 'High School Diploma',
    institution: 'Institute Anoual',
    period: '2011/06',
    description: 'Completed secondary education with focus on mathematics and sciences.',
  },
];

// ============================================================================
// EXPORT SUMMARY
// ============================================================================

/**
 * Complete portfolio configuration containing:
 * - Navigation menu items
 * - Technology stack expertise
 * - Professional project portfolio
 * - Work experience history
 * - Educational background
 *
 * All data structures maintain type safety with TypeScript interfaces
 * and are optimized for use in Next.js applications.
 */
