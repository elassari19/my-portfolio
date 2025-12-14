'use client';
import React from 'react';
import { experiences } from '../../lib/constants';
import { Timeline } from '../magicui/timeline';
import { motion } from 'framer-motion';

function ExperienceSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 opacity-60"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative grid items-center text-center gap-16 max-w-full md:max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 text-transparent bg-clip-text">
              Professional
            </span>{' '}
            <span className="text-slate-700">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A timeline of my career progression, showcasing key roles and accomplishments that shaped my expertise in full-stack development
          </p>
        </motion.div>

        <div className="space-y-8">
          <Timeline
            data={experiences.map((exp, index) => ({
              title: exp.period,
              content: (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group relative">
                    {/* Card background with gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-2xl shadow-slate-900/10 hover:shadow-blue-500/20 transition-all duration-500 rounded-2xl p-8 md:p-10">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-tl-2xl"></div>
                      
                      {/* Company badge */}
                      <div className="flex items-start justify-between mb-6 flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-3 shadow-lg">
                            {exp.company}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-slate-600 font-medium flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {exp.location}
                          </p>
                        </div>
                        
                        {/* Timeline period badge */}
                        <div className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-semibold text-sm whitespace-nowrap">
                          {exp.period}
                        </div>
                      </div>

                      {/* Responsibilities with enhanced styling */}
                      <ul className="space-y-4 mt-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 group/item hover:translate-x-2 transition-all duration-300"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <p className="text-slate-700 leading-relaxed text-lg group-hover/item:text-slate-900 transition-colors duration-300">
                              {resp}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
