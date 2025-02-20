'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Meteors } from '../magicui/meteors';
import SectionA from './hero-sections/section-a';

function HeroSection() {
  const { scrollYProgress } = useScroll();

  const items = [
    {
      text: <SectionA />,
      initialZ: 0,
    },
    { text: <h2>I'm Hicham, a Full Stack Developer</h2>, initialZ: 2500 },
    {
      text: <h3>With a Passion for Crafting Digital Experiences</h3>,
      initialZ: 5000,
    },
    { text: <h3> and a Love for Clean and Efficient Code</h3>, initialZ: 7500 },
    {
      text: <h3 className="">I have Experience to use AI fro development</h3>,
      initialZ: 10000,
    },
  ];

  return (
    <div className="relative w-full min-h-[500vh] perspective-1000">
      <div className="sticky top-0 h-screen overflow-hidden">
        {items.map((item, index) => {
          const zPosition = useTransform(
            scrollYProgress,
            [index * 0.15, (index + 1) * 0.15],
            [item.initialZ, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [index * 0.15, (index + 1) * 0.15],
            [1, 2]
          );

          const opacity = useTransform(
            scrollYProgress,
            [index * 0.15, index * 0.15 + 0.07, (index + 1) * 0.15],
            [0.05, 1, 0]
          );

          const blur = useTransform(
            scrollYProgress,
            [0, 0.15, 0.3, 0.45, 0.6],
            [
              index === 0 ? 0 : index * 3,
              index === 1 ? 0 : index * 3,
              index === 2 ? 0 : index * 3,
              index === 3 ? 0 : index * 3,
              index === 4 ? 0 : index * 3,
            ]
          );

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center h-[80vh] absolute w-full"
              style={{
                translateZ: zPosition,
                scale,
                opacity,
                filter: `blur(${blur}px)`,
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-4xl md:text-2xl font-bold text-center p-8 bg-opacity-50 rounded-lg"
              >
                {item.text}
              </motion.h1>
            </motion.div>
          );
        })}
        <Meteors number={20} />
      </div>
    </div>
  );
}

export default HeroSection;
