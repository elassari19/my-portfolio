import React from 'react';
import { educations, experiences } from '../../lib/constants';

function page() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 mt-20">
      {/* Work Experience Section */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-20">
        <div className="text-center mb-8 sm:mb-16">
          <h3 className="font-mono font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              WORK
            </span>{' '}
            <span className="text-gray-800 dark:text-white">EXPERIENCE</span>
          </h3>
          <p className="font-sans text-gray-500 text-sm sm:text-base md:text-lg">Professional journey and career milestones</p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Timeline line - hidden on mobile */}
              <div className="absolute left-4 sm:left-8 top-8 sm:top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent hidden sm:block"></div>
              
              <div className="relative flex items-start gap-3 sm:gap-6">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-mono font-black text-sm sm:text-lg md:text-xl shadow-lg sm:shadow-xl group-hover:scale-110 transition-all duration-300 ring-2 sm:ring-4 ring-white dark:ring-gray-800">
                    {index + 1}
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group-hover:border-purple-300 dark:group-hover:border-purple-600 group-hover:-translate-y-1">
                  <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
                    <div>
                      <h3 className="font-mono font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-white mb-2 sm:mb-3 tracking-wide">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-300 font-sans">
                        <span className="font-bold text-purple-600 dark:text-purple-400 text-base sm:text-lg">
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline text-gray-400">•</span>
                        <span className="text-sm sm:text-base">{exp.location}</span>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full border border-purple-200 dark:border-purple-800 w-fit">
                      <p className="font-mono font-semibold text-purple-700 dark:text-purple-300 text-xs sm:text-sm">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 md:gap-4 text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mt-2 sm:mt-2.5 flex-shrink-0 shadow-md"></div>
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h3 className="font-mono font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              EDUCATION
            </span>
          </h3>
          <p className="font-sans text-gray-500 text-sm sm:text-base md:text-lg">Academic background and continuous learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg sm:shadow-xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1"
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-tr-2xl sm:rounded-tr-3xl rounded-bl-2xl sm:rounded-bl-3xl"></div>
              
              <div className="relative">
                <div className="mb-4 sm:mb-6">
                  <h3 className="font-mono font-bold text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-white mb-2 sm:mb-3 tracking-wide">
                    {edu.program}
                  </h3>
                  <p className="font-sans font-bold text-base sm:text-lg text-purple-600 dark:text-purple-400">
                    {edu.institution}
                  </p>
                </div>

                <div className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-100 dark:bg-gray-700 rounded-full inline-block mb-4 sm:mb-6 border border-gray-200 dark:border-gray-600">
                  <p className="font-mono font-semibold text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {edu.period}
                  </p>
                </div>

                <p className="font-sans text-gray-600 dark:text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
