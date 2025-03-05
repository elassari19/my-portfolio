import { cx } from 'class-variance-authority';
import { BookOpenIcon, GithubIcon, Minus, PlusIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import TechnologyIcon from './technology-icon';

interface IProps {
  href: string;
  src: StaticImageData;
  name: string;
  description: string;
  technologies: string[];
  techStack: { name: string; url: string }[];
  github: string;
  live: string;
}

function ProjectCard({
  href,
  src,
  name,
  description,
  technologies,
  techStack,
  github,
  live,
}: IProps) {
  return (
    <div className={cx('p-2 md:p-6 rounded-xl shadow-2xl')}>
      <div className="grid grid-cols-1 md:grid-cols-5 items-start justify-center gap-8 text-start h-full w-full  overflow-hidden rounded-2xl">
        <div className="col-span-full md:col-span-3 grid gap-6">
          <Link href={href}>
            <Image className="w-full object-contain" src={src} alt="project" />
          </Link>
          <div className="px-2 flex gap-4 justify-between items-center">
            <Link
              href={github}
              target="_blank"
              className="border rounded-lg p-2 px-4 flex gap-2 items-center"
            >
              <GithubIcon className="w-5 h-5" />
              <span>Code</span>
            </Link>
            <Link
              href={live}
              target="_blank"
              className="border rounded-lg p-2 px-4 flex gap-2 items-center"
            >
              <BookOpenIcon className="w-5 h-5" />
              <span>Live</span>
            </Link>
          </div>
        </div>
        <div className={cx('col-span-full md:col-span-2 h-full grid gap-4')}>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Minus className="text-border text-bold" /> <span>{name}</span>
            </h2>
            <h3 className="text-[#666666]">{description}</h3>
          </div>
          <div>
            {technologies.map((tech) => (
              <div key={tech} className="flex gap-2 items-start text-start">
                <div className="w-5 h-5 mt-1">
                  <PlusIcon className="w-4 h-4 text-border" />
                </div>
                <h4 className="text-sm">{tech}</h4>
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap self-end">
            {techStack.map(({ name, url }) => (
              <div key={name}>
                <TechnologyIcon name={name} url={url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
