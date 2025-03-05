import React from 'react';
import { projects } from '../../lib/constants';
import ProjectCard from '../../components/shared/ProjectCard';

function page() {
  return (
    <div className="grid itcems-center text-center gap-8 max-w-full md:max-w-6xl mx-auto mt-40">
      <h3 className="font-semibold text-3xl md:text-5xl">
        Curated{' '}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          work
        </span>
      </h3>
      <div className="flex flex-col items-center justify-center flex-wrap gap-20">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}

export default page;
