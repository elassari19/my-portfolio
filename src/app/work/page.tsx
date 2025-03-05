import React from 'react';
import { educations, experiences } from '../../lib/constants';

function page() {
  return (
    <div className="container mx-auto grid gap-12">
      <div className="grid itcems-center text-center gap-12 max-w-full md:max-w-6xl mx-auto mt-40">
        <h3 className="font-semibold text-3xl md:text-4xl">
          WORK{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            EXPERIENCE
          </span>
        </h3>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start justify-center gap-8 text-start shadow-xl p-8 rounded-xl"
            >
              <div
                key={index}
                className="border-l-4 border-purple-500 pl-6 relative w-full"
              >
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[10px] top-1"></div>

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
                  <p className="text-gray-500 md:text-right font-semibold">
                    {exp.period}
                  </p>
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
          ))}
        </div>
      </div>

      <div className="grid itcems-center text-center gap-12 max-w-full md:max-w-6xl mx-auto mt-40">
        <h3 className="font-semibold text-3xl md:text-4xl">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            EDUCATION
          </span>
        </h3>

        <div className="space-y-4">
          {educations.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start justify-center gap-8 text-start shadow-xl p-8 rounded-xl"
            >
              <div
                key={index}
                className="border-l-4 border-purple-500 pl-6 relative w-full"
              >
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[10px] top-1"></div>

                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {exp.program}
                    </h3>
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">{exp.institution}</span>
                    </p>
                  </div>
                  <p className="text-gray-500 md:text-right font-semibold">
                    {exp.period}
                  </p>
                </div>

                <div className="ml-3 mt-3 space-y-2">
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
