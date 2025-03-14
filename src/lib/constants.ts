import ivf from '../../public/ivf.png';
import hunter from '../../public/hunter.png';
import commerce from '../../public/commerce.png';
import vacancy from '../../public/vacancy.png';
import vocable from '../../public/vocable.png';
import atoms from '../../public/atoms.png';
import nanoplot from '../../public/nanoplot.png';
import school from '../../public/school.png';
import v1 from '../../public/v-1.png';
import v2 from '../../public/v-2.png';
import v3 from '../../public/v-3.png';
import v4 from '../../public/v-4.png';
import v5 from '../../public/v-5.png';
import v6 from '../../public/v-6.png';
import v7 from '../../public/v-7.png';
import h1 from '../../public/h-1.png';
import h2 from '../../public/h-2.png';
import h3 from '../../public/h-3.png';
import h4 from '../../public/h-4.png';
import h5 from '../../public/h-5.png';
import h6 from '../../public/h-6.png';
import h7 from '../../public/h-7.png';
import e1 from '../../public/e-1.png';
import e2 from '../../public/e-2.png';
import e3 from '../../public/e-3.png';
import e4 from '../../public/e-4.png';
import e5 from '../../public/e-5.png';
import e6 from '../../public/e-6.png';
import e7 from '../../public/e-7.png';
import t1 from '../../public/t-1.png';
import t2 from '../../public/t-2.png';
import t3 from '../../public/t-3.png';
import t4 from '../../public/t-4.png';
import t5 from '../../public/t-5.png';
import t6 from '../../public/t-6.png';
import t7 from '../../public/t-7.png';
import n1 from '../../public/n-1.png';
import n2 from '../../public/n-2.png';
import n3 from '../../public/n-3.png';
import n4 from '../../public/n-4.png';
import n5 from '../../public/n-5.png';
import n6 from '../../public/n-6.png';
import n7 from '../../public/n-7.png';
import i1 from '../../public/v-1.png';
import i2 from '../../public/v-2.png';
import i3 from '../../public/v-3.png';
import i4 from '../../public/v-4.png';
import i5 from '../../public/v-5.png';
import a1 from '../../public/a-1.png';
import a2 from '../../public/a-2.png';
import a3 from '../../public/a-3.png';
import a4 from '../../public/a-4.png';
import a5 from '../../public/a-5.png';
import a6 from '../../public/a-6.png';
import s1 from '../../public/s-1.png';
import s2 from '../../public/s-2.png';
import s3 from '../../public/s-3.png';
import s4 from '../../public/s-4.png';
import s5 from '../../public/s-5.png';
import s6 from '../../public/s-6.png';
import s7 from '../../public/s-7.png';
import s8 from '../../public/s-8.png';

export const menuItems = [
  {
    icon: '🏠',
    title: 'Home',
    description: 'Welcome to my forever work-in-progress!',
    href: '/',
  },
  {
    icon: '📂',
    title: 'Work',
    description: 'Showcase of my work',
    href: '/work',
  },
  {
    icon: '📚',
    title: 'Projects',
    description: 'Thoughts, mental models, and tutorials',
    href: '/projects',
  },
  {
    icon: '👤',
    title: 'About',
    description: 'Learn more about me!',
    href: '/about',
  },
  {
    icon: '🔗',
    title: 'Contact',
    description: 'All my links are here',
    href: '/contact',
  },
];

export const techStack = [
  { name: 'HTML', url: 'html5' },
  { name: 'CSS', url: 'css3' },
  { name: 'JavaScript', url: 'javascript' },
  { name: 'TypeScript', url: 'typescript' },
  { name: 'React', url: 'react' },
  { name: 'Next.js', url: 'nextdotjs' },
  {
    name: 'Tailwind CSS',
    url: 'tailwindcss',
  },
  { name: 'Redux Toolkit', url: 'redux' },
  { name: 'Zustand', url: 'redux/pink' },
  { name: 'GraphQL', url: 'graphql' },
  {
    name: 'React Query',
    url: 'reactquery',
  },
  { name: 'Shadcn', url: 'shadcnui' },
  { name: 'MUI', url: 'MUI' },
  { name: 'Node.js', url: 'nodedotjs' },
  { name: 'Express', url: 'express' },
  { name: 'MongoDB', url: 'mongodb' },
  { name: 'MySQL', url: 'mysql' },
  { name: 'PostgreSQL', url: 'postgresql' },
  { name: 'Prisma', url: 'prisma' },
  { name: 'Drizzle', url: 'drizzle' },
  { name: 'Git', url: 'git' },
  { name: 'GitHub', url: 'github' },
  { name: 'Vercel', url: 'vercel' },
  { name: 'Netlify', url: 'netlify' },
];

export const projects = [
  {
    href: '/projects/school',
    src: school,
    showcase: [s1, s2, s3, s4, s5, s6, s7, s8],
    github: 'https://github.com/elassari19/school-system-management',
    live: 'https://ssm.vercel.app/',
    name: 'School System Management - Ongoing',
    tags: [
      'Web App',
      'Responsive',
      'Full Stack',
      'Multilingual',
      'Side Project',
      'Ongoing',
    ],
    description:
      'School system management app for managing students, teachers, and courses.',
    technologies: [
      'Built with Next.js, React, and TypeScript for scalability.',
      'Styled using Tailwind CSS with animations by Framer Motion.',
      'Shadcn UI for UI components.',
      'Integrated Atlass (MongoDB) and RESTful APIs with Node.js, Express and Prisma ORM.',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'React Hoot Form', url: 'reacthookform' },
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
  },
  {
    href: '/projects/vocable',
    src: vocable,
    showcase: [v1, v2, v3, v4, v5, v6, v7],
    github: 'https://github.com/Vocable-AI/vocable_frontend',
    live: 'https://vocable.ai/',
    name: 'Vocable AI',
    tags: [
      'Web App',
      'Responsive',
      'AI',
      'Full Stack',
      'Client Project',
      'Ongoing',
    ],
    description:
      "Vocable's platform streamlines your entire content operations, making it easy to ideate, plan, draft, collaborate and optimise multi-channel content in one centralized workflow.",
    technologies: [
      'Built with React, and TypeScript for scalability.',
      'Styled using React Bootstrap with animations by Framer Motion.',
      'Used Redux Toolkit for state management.',
      'Stripe for payment processing.',
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
  },
  {
    href: '/projects/commerce',
    src: commerce,
    showcase: [e1, e2, e3, e4, e5, e6, e7],
    github: 'https://github.com/elassari19/e-commerce',
    live: 'https://ivf-chat-amber.vercel.app/',
    name: 'E-commerce App',
    tags: [
      'Web App',
      'Responsive',
      'Full Stack',
      'Side Project',
      'Production',
      '2023',
    ],
    description:
      'E-Commerce app with admin dashboard, allows users to browse and purchase products online, with secure payment processing and easy-to-use shopping cart.',
    technologies: [
      'Built with Next.js, React, and TypeScript for scalability.',
      'Shadcn UI for UI components.',
      'Styled using Tailwind CSS with animations by Framer Motion.',
      'Used Redux Toolkit for state management.',
      'Save files to Cloudinary using Next-Cloudinary.',
      'Integrated Atlass (MongoDB) and RESTful APIs with Node.js and Express.',
      'Stripe for payment processing.',
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
  },
  {
    href: '/projects/ivf',
    src: ivf,
    showcase: [i1, i2, i3, i4, i5],
    github: 'https://github.com/elassari19/ivf-chat/',
    live: 'https://ivf-chat-amber.vercel.app/',
    name: 'IVF - Chat',
    tags: [
      'Web App',
      'Responsive',
      'Full Stack',
      'AI',
      'Client Project',
      'Ongoing',
      '2025',
    ],
    description:
      'Real-time chat application for IVF managing mental health and emotional wellbeing during the IVF journey',
    technologies: [
      'Built with Next.js, React, and TypeScript for scalability.',
      'Styled using Tailwind CSS with animations by Framer Motion.',
      'Integrated Supabase (PostgreSQL) and RESTful APIs with Node.js and Express.',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'React Hoot Form', url: 'reacthookform' },
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
  },
  {
    href: '/projects/hunter',
    src: hunter,
    showcase: [h1, h2, h3, h4, h5, h6, h7],
    github: 'https://github.com/a-hariti/hunter-galloway',
    live: 'https://www.huntergalloway.com.au/',
    name: 'Hunter Galloway',
    tags: [
      'Web App',
      'Responsive',
      'Frontend',
      'Client Project',
      'Production',
      '2024',
    ],
    description: 'Get a home with full guidance and expert assistance',
    technologies: [
      'Built with Next.js, React, and TypeScript for scalability.',
      'Styled using Tailwind CSS with animations by GSAP.',
      'Integrated Airtable and RESTful APIs with Node.js and Express.',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'React Hoot Form', url: 'reacthookform' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'GSAP', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
      { name: 'Airtable', url: 'airtable' },
      { name: 'Node.js', url: 'nodedotjs' },
      { name: 'Express', url: 'express' },
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
      'Web App',
      'Responsive',
      'Frontend',
      'Side Project',
      'Production',
      '2023',
    ],
    description:
      'TON work allows you to find the most effective and top employees from all over the world.',
    technologies: [
      'Built with Next.js, React, and TypeScript for scalability.',
      'Styled using Tailwind CSS with animations by Framer Motion.',
      'Integrated MongoDB and RESTful APIs with Node.js and Express.',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Bootstrap', url: 'bootstrap' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'Formik', url: 'formik' },
      { name: 'Framer Motion', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
      { name: 'Next-Auth', url: 'auth0' },
      { name: 'Mongoose', url: 'mongoose' },
      { name: 'MongoDB', url: 'mongodb' },
      { name: 'Node.js', url: 'nodedotjs' },
      { name: 'Express', url: 'express' },
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
      'Web App',
      'Responsive',
      'Frontend',
      'Side Project',
      'Production',
      '2024',
    ],
    description:
      'Atoms is the definitive habits forming app inspired by the groundbreaking principles of Atomic Habits, the best-selling book by James Clear. Atoms is not only a habit tracker, but also your personal guide filled with bite-sized lessons and insightful strategies to help you make positive changes one small step at a time.',
    technologies: [
      'Built with Next.js, React, and TypeScript for scalability.',
      'Styled using Tailwind CSS with animations by GSAP.',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'GSAP', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
    ],
  },
  {
    href: '/projects/nanoplot',
    src: nanoplot,
    showcase: [n1, n2, n3, n4, n5, n6, n7],
    github: 'https://github.com/ShanonJackson/nanoplot',
    live: 'https://nanoplot.com/',
    name: 'Nanoplot',
    tags: ['Web App', 'Responsive', 'Frontend', 'Client Project', 'Ongoing'],
    description:
      'Create stunning data visualizations with ease. Perfect for developers, data scientists, and analysts.',
    technologies: [
      'Built with React, and TypeScript for scalability.',
      'Styled using Tailwind CSS with animations by Framer Motion.',
    ],
    techStack: [
      { name: 'Next.js', url: 'nextdotjs' },
      { name: 'Tailwind CSS', url: 'tailwindcss' },
      { name: 'TypeScript', url: 'typescript' },
      { name: 'Framer Motion', url: 'framer' },
      { name: 'Vercel', url: 'vercel' },
    ],
  },
];

export const experiences = [
  {
    title: 'Full-stack',
    company: 'Coral',
    location: 'Remote Freelance',
    period: '2023/08 – Current',
    responsibilities: [
      'Take an idea from concept to completion, building the user-friendly interface and the data processing.',
      'Work independently or collaboratively to build new features and functionalities for existing web applications.',
      'Contribute to the maintenance and bug fixing of existing web applications, ensuring smooth operation.',
    ],
  },
  {
    title: 'Full-stack',
    company: 'OMIC',
    location: 'Remote Full-time',
    period: '2022/02 – 2023/08',
    responsibilities: [
      'Collaborate with engineering and design teams to develop a Healthcare Platform.',
      'Developed a platform combining AI and human research to generate efficient therapies and test therapies on digital patients.',
      'Developed a platform that allows clients to create, store, manage, and share their code.',
      'Using cutting-edge technologies like React.js with MUI v5, Tailwind CSS, and Redux Toolkit.',
    ],
  },
  {
    title: 'Full-stack',
    company: 'IRON ION',
    location: 'Full-time',
    period: '2019/07 - 2022/01',
    responsibilities: [
      'Developing internal applications to streamline operations',
      'Develop LMS such as inventory management systems, production monitoring dashboards',
      'Build and maintain an e-commerce platform for online sales.',
    ],
  },
  {
    title: 'Junior Full Stack',
    company: 'CommonShare',
    location: 'Full-time',
    period: '2014/07 - 2019/01',
    responsibilities: [
      "Learn the organization's overall strategies, business operates",
      'Evaluated and improved existing apps under mentor supervision',
      'Working closely with senior developers to learn best practices, coding styles, and problem-solving approaches.',
      'Taking on smaller, well-defined tasks or features within a larger project.',
    ],
  },
];

export const educations = [
  {
    program: 'Software Engineer',
    institution: 'ALX',
    period: '2022/09 - 2024/06',
    description:
      'ALX is a tech training program focused on equipping individuals with the skills they need for success in the tech industry. ALX offers job-ready training in the tech fields.',
  },
  {
    program: 'Web Design',
    institution: 'Institute Meshket',
    period: '2021/09',
    description: 'Meshet Web Design is an online boot camp',
  },
  {
    program: 'Accounting',
    institution: 'Institute Ibn Marhal',
    period: '2014/06 - 2016/07',
    description: 'Meshet Web Design is an online boot camp',
  },
  {
    program: 'High School',
    institution: 'Institute Anoual',
    period: '2011/06',
    description: '',
  },
];
