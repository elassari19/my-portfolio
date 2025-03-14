import React from 'react';
import { projects } from '../../../lib/constants';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpenIcon, GithubIcon } from 'lucide-react';
import TechnologyIcon from '@/components/shared/technology-icon';
import { Button } from '../../../components/ui/button';
import ShowcaseCarousel from '../../../components/shared/ShowcaseCarousel';

interface PageProps {
  params: Promise<{ p: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((p) => ({
    p,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const p = (await params).p;
  const project = projects.filter((pr) => pr.href.split('/')[2] === p)[0];

  if (!project) {
    notFound();
  }

  return (
    <div className="mt-40 container mx-auto px-4 md:px-6">
      <div className="max-w-4xl mx-auto grid gap-8">
        {/* Project Header */}
        <div className="grid gap-4 text-center">
          <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {project.name}
          </h1>
          <p className="font-semibold text-lg text-gray-600 dark:text-gray-400 px-0 md:px-6">
            {project.description}
          </p>
        </div>

        {/* Project Tags */}
        <div className="flex flex-wrap justify-center items-center gap-1 md:gap-4">
          {project.tags.map((tag: string) => (
            <Button key={tag} variant="outline">
              {tag}
            </Button>
          ))}
        </div>

        {/* Project Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden mt-8 shadow-2xl transform transition duration-300 hover:scale-125 z-50">
          <ShowcaseCarousel images={[project.src, ...project.showcase!]} />
        </div>

        {/* Links */}
        <div className="flex justify-between px-2 md:px-6">
          <Link
            href={project.github}
            target="_blank"
            className="border rounded-lg p-2 px-4 flex gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            <span>View Code</span>
          </Link>
          <Link
            href={project.live}
            target="_blank"
            className="border rounded-lg p-2 px-4 flex gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <BookOpenIcon className="w-5 h-5" />
            <span>Live Demo</span>
          </Link>
        </div>

        {/* Technologies */}
        <div className="grid gap-4">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <div className="grid gap-2">
            {project.technologies.map((tech: string) => (
              <div key={tech} className="flex items-start gap-2">
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid gap-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-4">
            {project.techStack.map(
              ({ name, url }: { name: string; url: string }) => (
                <div key={name}>
                  <TechnologyIcon name={name} url={url} size={24} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
