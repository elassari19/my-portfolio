import React from 'react';
import { Project, projects } from '../../../lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpenIcon, GithubIcon, ArrowLeft } from 'lucide-react';
import TechnologyIcon from '@/components/shared/technology-icon';
import { Button } from '../../../components/ui/button';
import ShowcaseCarousel from '../../../components/shared/ShowcaseCarousel';
import Motion from '../../../components/animations/Motion';

interface PageProps {
  params: Promise<{
    p: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const p = (await params).p;
  const project: Project = projects.filter(
    (pr) => pr.href.split('/')[2] === p
  )[0];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20">
      <Motion
        key={p}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-20 md:mt-28 container mx-auto px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Motion
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 group"
            >
              <ArrowLeft size={20} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
              <span className="font-medium text-gray-700 dark:text-gray-200">Back to Projects</span>
            </Link>
          </Motion>

          {/* Main Content Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-2 py-8 md:p-12">
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <h1 className="font-mono font-black text-4xl md:text-6xl mb-4 tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    {project.name}
                  </span>
                </h1>
                <p className="font-sans text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  {project.description}
                </p>
              </Motion>

              {/* Project Tags */}
              <Motion
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-8"
              >
                {project.tags.map((tag: string, index: number) => (
                  <Motion
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                      {tag}
                    </span>
                  </Motion>
                ))}
              </Motion>
            </div>

            {/* Content Section */}
            <div className="p-2 py-4 md:p-12 space-y-12">
              {/* Project Showcase */}
              <Motion
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100 dark:border-gray-700">
                  <ShowcaseCarousel images={[project.src, ...project.showcase!]} />
                </div>
              </Motion>

              {/* Action Links */}
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  href={project.github}
                  target="_blank"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700"
                >
                  <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-lg">View Code</span>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <BookOpenIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-lg">Live Demo</span>
                </Link>
              </Motion>

              {/* Key Features Section */}
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-2 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-800/30"
              >
                <h2 className="font-mono font-bold text-3xl mb-6 pl-4 text-gray-800 dark:text-white">
                  Key Features
                </h2>
                <div className="grid gap-4">
                  {project.technologies.map((tech, index) => (
                    <Motion
                      key={tech}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mt-2 flex-shrink-0 shadow-md"></div>
                      <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{tech}</span>
                    </Motion>
                  ))}
                </div>
              </Motion>

              {/* Tech Stack Section */}
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-2 md:p-8 rounded-2xl border border-purple-100 dark:border-purple-800/30"
              >
                <h2 className="font-mono font-bold text-3xl pl-4 mb-6 text-gray-800 dark:text-white">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map(({ name, url }, index) => (
                    <Motion
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <div className="dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-purple-300 dark:group-hover:border-purple-600">
                        <TechnologyIcon name={name} url={url} size={28} />
                      </div>
                    </Motion>
                  ))}
                </div>
              </Motion>

              {/* Challenges Section */}
              <Motion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 p-2 md:p-8 rounded-2xl border border-pink-100 dark:border-pink-800/30"
              >
                <h2 className="font-mono font-bold text-3xl mb-6 pl-4 text-gray-800 dark:text-white">
                  Challenges Overcame
                </h2>
                <div className="grid gap-4">
                  {project.challenges?.map((challenge, index) => (
                    <Motion
                      key={index}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 mt-2 flex-shrink-0 shadow-md"></div>
                      <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{challenge}</span>
                    </Motion>
                  ))}
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  );
}
