'use client';
import React from 'react';
import { projects } from '../../lib/constants';
import ProjectCard from '../../components/shared/ProjectCard';
import { motion } from 'framer-motion';
import Link from 'next/link';

function page() {
  return (
    <div className="relative min-h-screen py-8 mt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 opacity-60"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="relative grid items-center text-center gap-16 max-w-full md:max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h1 className="font-bold text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 text-transparent bg-clip-text">
              Portfolio
            </span>{' '}
            <span className="text-slate-700">Showcase</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my professional projects, showcasing innovative solutions and technical expertise across full-stack development
          </p>
          
          {/* Decorative divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects grid with enhanced layout */}
        <div className="grid grid-cols-1 gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Card container with enhanced styling */}
              <div className="block h-full">
                <div className="relative h-full">
                  {/* Background glow effect - non-interactive */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Main card content */}
                  <div className="relative bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-2xl shadow-slate-900/10 hover:shadow-blue-500/20 group-hover:scale-[1.02] transition-all duration-500 rounded-3xl overflow-hidden h-full">
                    {/* Decorative top accent - non-interactive */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pointer-events-none"></div>
                    
                    {/* Project card content */}
                    <div className="p-2 md:p-8">
                      <ProjectCard {...project} />
                    </div>
                    
                    {/* Hover overlay effect - non-interactive */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: projects.length * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-slate-600 text-lg">
            Interested in collaborating?{' '}
            <a
              href="/contact"
              className="text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300"
            >
              Let&apos;s build something amazing together
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default page;
