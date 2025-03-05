import React from 'react';
import { experiences } from '../../lib/constants';
import { Timeline } from '../magicui/timeline';

function ExperienceSection() {
  return (
    <div className="grid itcems-center text-center gap-12 max-w-full md:max-w-6xl mx-auto">
      <h3 className="font-semibold text-3xl md:text-4xl">
        WORK{' '}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          EXPERIENCE
        </span>
      </h3>

      <div className="space-y-4 shadow-xl">
        <Timeline
          data={experiences.map((exp, index) => ({
            title: exp.period,
            content: (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start justify-center gap-8 text-start shadow-xl p-8 rounded-xl"
              >
                <div key={index} className="relative w-full">
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-700">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {exp.location} |{' '}
                        <span className="font-semibold">{exp.company}</span>
                      </p>
                    </div>
                  </div>

                  <ul className="list-disc ml-5 mt-3 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-600">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}

export default ExperienceSection;
