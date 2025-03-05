'use client';
import React from 'react';
import { techStack } from '../../lib/constants';
import TechnologyIcon from '../shared/technology-icon';
import { motion } from 'framer-motion';

function TechStack() {
  const getRandomDirection = () => {
    const directions = [
      { x: -50, y: 0 },    // left
      { x: 50, y: 0 },     // right
      { x: 0, y: -50 },    // top
      { x: 0, y: 50 }      // bottom
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  return (
    <div className="grid itcems-center text-center gap-8 max-w-full md:max-w-5xl mx-auto">
      <div className="grid gap-2">
        <h3 className="text-2xl text-[#666666]">I constantly try to improve</h3>
        <h4 className="font-semibold text-3xl md:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Tech Stack
        </h4>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {techStack.map(({ name, url }, index) => {
          const direction = getRandomDirection();
          return (
            <motion.div
              key={name}
              initial={{ 
                opacity: 0,
                x: direction.x,
                y: direction.y
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <TechnologyIcon name={name} url={url} size={22} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
