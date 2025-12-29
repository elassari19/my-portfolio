'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  GraduationCap, 
  Languages, 
  Star, 
  Terminal, 
  Zap, 
  Activity, 
  Heart, 
  Globe, 
  Database,
  Rocket 
} from 'lucide-react';

// Animated skill bar component
function AnimatedSkillBar({ skill, level, icon }: { skill: string; level: number; icon?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-blue-500">{icon}</span>}
          <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm md:text-base">{skill}</span>
        </div>
        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm md:text-base">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
}

// Timeline item component
function TimelineItem({ 
  title, 
  company, 
  period, 
  responsibilities,
  icon,
  index 
}: { 
  title: string; 
  company: string; 
  period: string; 
  responsibilities: string[]; 
  icon?: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12 pb-8 md:pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:border-0"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
        viewport={{ once: true }}
        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
      />
      
      {/* Content */}
      <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl p-4 md:p-6 hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                {icon}
              </div>
            )}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{company}</p>
            </div>
          </div>
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {period}
          </span>
        </div>
        
        <ul className="space-y-2">
          {responsibilities.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 + 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm md:text-base"
            >
              <span className="text-blue-500 mt-1">•</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// Education item component  
function EducationItem({ 
  program, 
  institution, 
  period, 
  description,
  index
}: { 
  program: string; 
  institution: string; 
  period: string; 
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 rounded-xl p-4 md:p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
          <GraduationCap size={20} />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">{institution}</h4>
          <p className="text-sm text-blue-600 dark:text-blue-400">{program}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{period}</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">{description}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20 -z-10"></div>
      
      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse -z-9"></div>
      <div className="fixed bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-75 -z-9"></div>
      <div className="fixed top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-150 -z-9"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              HICHAM EL ASSARI
            </span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Zap className="text-yellow-500 w-5 h-5" />
            <span className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Full-Stack Engineer
            </span>
            <Zap className="text-yellow-500 w-5 h-5" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting high-performance web applications with cutting-edge technologies.
            Passionate about building scalable solutions that drive innovation and impact.
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { label: 'Years Experience', value: '10+', icon: Briefcase },
            { label: 'Projects', value: '50+', icon: Code },
            { label: 'Technologies', value: '20+', icon: Terminal },
            { label: 'Happy Clients', value: '30+', icon: Heart },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Profile & Skills */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Profile Card */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h2>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  As a Full-stack Engineer with 10+ years of experience, I specialize in 
                  building high-performance web applications using cutting-edge technologies.
                </p>
                <p>
                  Proven track record of delivering complex projects on time and within budget.
                  Excellent at collaborating with cross-functional teams to drive innovation 
                  and achieve business goals.
                </p>
                <p className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                  <Activity className="w-4 h-4" />
                  Always learning, always building.
                </p>
              </div>
            </motion.section>

            {/* Technical Skills */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
              </div>
              <div className="space-y-4">
                <AnimatedSkillBar 
                  skill="React.js / Next.js" 
                  level={95} 
                  icon={<Zap size={14} className="text-blue-500" />} 
                />
                <AnimatedSkillBar 
                  skill="TypeScript" 
                  level={90} 
                  icon={<Code size={14} className="text-blue-500" />} 
                />
                <AnimatedSkillBar 
                  skill="Node.js / Express / Prisma" 
                  level={88} 
                  icon={<Terminal size={14} className="text-blue-500" />} 
                />
                <AnimatedSkillBar 
                  skill="Tailwind CSS / Shadcn" 
                  level={96} 
                  icon={<Zap size={14} className="text-blue-500" />} 
                />
                <AnimatedSkillBar 
                  skill="Redux / RTK Query" 
                  level={85} 
                  icon={<Activity size={14} className="text-blue-500" />} 
                />
                <AnimatedSkillBar 
                  skill="MySQL / MongoDB / PostgreSQL" 
                  level={82} 
                  icon={<Database size={14} className="text-blue-500" />} 
                />
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Languages className="text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h2>
              </div>
              <div className="space-y-3">
                <AnimatedSkillBar skill="English" level={70} icon={<Globe size={14} />} />
                <AnimatedSkillBar skill="Arabic" level={95} icon={<Globe size={14} />} />
              </div>
            </motion.section>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
              </div>
              
              <div className="space-y-2">
                <TimelineItem
                  title="Full-stack Developer"
                  company="Coral"
                  period="2023/08 – Current"
                  responsibilities={[
                    "Architect end-to-end solutions from concept to deployment",
                    "Build user-friendly interfaces and robust data processing systems",
                    "Maintain and optimize existing web applications",
                    "Collaborate with cross-functional teams on new features"
                  ]}
                  icon={<Briefcase size={16} />}
                  index={0}
                />
                
                <TimelineItem
                  title="Full-stack Developer"
                  company="OMIC"
                  period="2022/02 – 2023/08"
                  responsibilities={[
                    "Developed Healthcare Platform with engineering and design teams",
                    "Built AI-powered platform combining ML and human research",
                    "Created code management platform for clients",
                    "Used React.js with MUI v5, Tailwind CSS, Redux Toolkit"
                  ]}
                  icon={<Code size={16} />}
                  index={1}
                />
                
                <TimelineItem
                  title="Full-stack Developer"
                  company="IRON ION"
                  period="2019/07 - 2022/01"
                  responsibilities={[
                    "Developed internal applications to streamline operations",
                    "Built LMS including inventory management systems",
                    "Created production monitoring dashboards",
                    "Maintained e-commerce platform for online sales"
                  ]}
                  icon={<Terminal size={16} />}
                  index={2}
                />
                
                <TimelineItem
                  title="Junior Full Stack Developer"
                  company="CommonShare"
                  period="2014/07 - 2019/01"
                  responsibilities={[
                    "Learned organizational strategies and business operations",
                    "Enhanced and refactored existing applications",
                    "Collaborated with senior developers on best practices",
                    "Implemented well-defined features within larger projects"
                  ]}
                  icon={<GraduationCap size={16} />}
                  index={3}
                />
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-purple-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <EducationItem
                  program="Software Engineering"
                  institution="ALX"
                  period="2022/09 - 2024/06"
                  description="Comprehensive software engineering program focused on full-stack development, system architecture, and modern programming paradigms with emphasis on hands-on projects."
                  index={0}
                />
                
                <EducationItem
                  program="Web Design & Development"
                  institution="Institute Meshket"
                  period="2021/09"
                  description="Intensive online bootcamp covering modern web design principles, responsive design, and frontend development technologies."
                  index={1}
                />
                
                <EducationItem
                  program="High School Diploma"
                  institution="Institute Anoual"
                  period="2011/06"
                  description="Completed secondary education with focus on mathematics and sciences."
                  index={2}
                />
              </div>
            </motion.section>

            {/* Fun Facts */}
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-200 dark:border-blue-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart className="text-pink-500" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fun Facts</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">☕</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Coffee Driven</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">🚀</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Early Adopter</div>
                </div>
                <div className="text-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">📚</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Continuous Learner</div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
              Let's collaborate on your next project. I bring experience, creativity, 
              and a commitment to excellence.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Get In Touch
              <Rocket className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
