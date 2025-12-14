'use client';
import React from 'react';
import { Timeline } from '../magicui/timeline';
import { educations } from '../../lib/constants';
import { motion } from 'framer-motion';

function EducationSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 opacity-60"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative grid items-center text-center gap-16 max-w-full md:max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-4xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text">
              Academic
            </span>{' '}
            <span className="text-slate-700">Background</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My educational journey that built the foundation for my technical expertise and problem-solving skills
          </p>
        </motion.div>

        <div className="space-y-8">
          <Timeline
            data={educations.map((edu, index) => ({
              title: edu.period,
              content: (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group relative">
                    {/* Card background with gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                    
                    <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-2xl shadow-slate-900/10 hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl p-8 md:p-10">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-tl-2xl"></div>
                      
                      {/* Institution badge */}
                      <div className="flex items-start justify-between mb-6 flex-col md:flex-row gap-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-3 shadow-lg">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {edu.institution}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                            {edu.program}
                          </h3>
                        </div>
                        
                        {/* Timeline period badge */}
                        <div className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-semibold text-sm whitespace-nowrap">
                          {edu.period}
                        </div>
                      </div>

                      {/* Description with enhanced styling */}
                      {edu.description && (
                        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 border border-purple-100/50 rounded-xl group-hover:border-purple-200/70 transition-all duration-300">
                          <p className="text-slate-700 leading-relaxed text-lg group-hover:text-slate-900 transition-colors duration-300">
                            {edu.description}
                          </p>
                        </div>
                      )}

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

export default EducationSection;
