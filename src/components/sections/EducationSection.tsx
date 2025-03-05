import React from 'react';
import { Timeline } from '../magicui/timeline';
import { educations } from '../../lib/constants';

function EducationSection() {
  return (
    <div className="grid items-center text-center gap-12 max-w-full md:max-w-6xl mx-auto">
      <h3 className="font-semibold text-3xl md:text-4xl">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          EDUCATION
        </span>
      </h3>

      <div className="shadow-xl">
        <Timeline
          data={educations.map((edu, index) => ({
            title: edu.period,
            content: (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start justify-center gap-6 text-start p-8 py-6 rounded-xl shadow-xl"
              >
                <div className="relative w-full">
                  <div className="flex flex-col mb-2">
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {edu.program}
                    </h3>
                    <div className="flex items-center gap-8">
                      <p className="text-lg text-gray-600">
                        <span className="font-semibold">{edu.institution}</span>
                      </p>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="mt-3 text-gray-600">{edu.description}</p>
                  )}
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}

export default EducationSection;
