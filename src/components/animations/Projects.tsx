'use client';

import { motion } from 'framer-motion';
import { Project } from '../../lib/constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, idx) => (
        <motion.div key={idx} variants={item}>
          {/* Project Card Content */}
        </motion.div>
      ))}
    </motion.div>
  );
};
