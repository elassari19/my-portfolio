import React from 'react';
import { projects } from '../../lib/constants';
import ProjectCard from '../shared/ProjectCard';
import StickyScrollReveal from '../magicui/sticky-scroll-reveal';
import Link from 'next/link';
import { BookOpenIcon, GithubIcon, Minus, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import { cx } from 'class-variance-authority';
import TechnologyIcon from '../shared/technology-icon';

function ProjectsSection() {
  return (
    <div className="grid itcems-center text-center gap-8 max-w-full md:max-w-6xl mx-auto">
      <h3 className="font-semibold text-3xl md:text-4xl">
        Curated{' '}
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          work
        </span>
      </h3>
      <div className="hidden md:flex flex-col items-center justify-center flex-wrap gap-20">
        <StickyScrollReveal
          left={projects.map((project) => (
            <div className="col-span-full md:col-span-3 grid gap-6">
              <Link href={project.href}>
                <Image
                  className="w-full object-contain"
                  src={project.src}
                  alt="project"
                />
              </Link>
              <div className="px-2 flex gap-4 justify-between items-center">
                <Link
                  href={project.github}
                  target="_blank"
                  className="border rounded-lg p-2 px-4 flex gap-2 items-center"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>Code</span>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  className="border rounded-lg p-2 px-4 flex gap-2 items-center"
                >
                  <BookOpenIcon className="w-5 h-5" />
                  <span>Live</span>
                </Link>
              </div>
            </div>
          ))}
          right={projects.map((project) => (
            <div
              className={cx('col-span-full md:col-span-2 h-full grid gap-4')}
            >
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Minus className="text-border text-bold" />{' '}
                  <span>{project.name}</span>
                </h2>
                <h3 className="text-[#666666] text-start pl-3">
                  {project.description}
                </h3>
              </div>
              <div>
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex gap-2 items-start text-start">
                    <div className="w-5 h-5 mt-1">
                      <PlusIcon className="w-4 h-4 text-border" />
                    </div>
                    <h4 className="text-sm">{tech}</h4>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap self-end">
                {project.techStack.map(({ name, url }) => (
                  <div key={name}>
                    <TechnologyIcon name={name} url={url} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        />
      </div>
      <div className="md:hidden grid gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
