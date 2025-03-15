'use client';
import React from 'react';
import { projects } from '../../../lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpenIcon, GithubIcon } from 'lucide-react';
import TechnologyIcon from '@/components/shared/technology-icon';
import { Button } from '../../../components/ui/button';
import ShowcaseCarousel from '../../../components/shared/ShowcaseCarousel';
import { motion, AnimatePresence } from 'framer-motion';

interface PageProps {
  params: { p: string };
}

export default function ProjectPage({ params }: PageProps) {
  const p = params.p;
  const project = projects.filter((pr) => pr.href.split('/')[2] === p)[0];

  if (!project) {
    notFound();
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={p}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-40 container mx-auto px-4 md:px-6"
      >
        <div className="max-w-4xl mx-auto grid gap-8">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid gap-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {project.name}
            </h1>
            <p className="font-semibold text-lg text-gray-600 dark:text-gray-400 px-0 md:px-6">
              {project.description}
            </p>
          </motion.div>

          {/* Project Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-1 md:gap-4"
          >
            {project.tags.map((tag: string, index: number) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
              >
                <Button variant="outline">{tag}</Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative aspect-video rounded-lg overflow-hidden mt-8 shadow-2xl transform transition duration-300 hover:scale-125 z-50"
          >
            <ShowcaseCarousel images={[project.src, ...project.showcase!]} />
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-between px-2 md:px-6"
          >
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
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="grid gap-4"
          >
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <div className="grid gap-2">
              {project.technologies.map((tech: string) => (
                <div key={tech} className="flex items-start gap-2">
                  <span className="text-gray-600 dark:text-gray-400">•</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="grid gap-4"
          >
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
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
