'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      {
        gradient: 'I develop fullstack',
        normal: 'solutions that delight and inspire users.',
      },
      {
        gradient: 'I create elegant',
        normal: 'code that solves complex problems.',
      },
      {
        gradient: 'Turning ideas',
        normal: 'into functional digital experiences.',
      },
      {
        gradient: 'Building robust',
        normal: 'systems with modern technologies.',
      },
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative flex w-full h-32 justify-center overflow-hidden md:pb-4 md:pt-1">
      &nbsp;
      {titles.map((title, index) => (
        <motion.div
          key={index}
          className="absolute font-semibold"
          initial={{ opacity: 0, y: '-100' }}
          transition={{ type: 'spring', stiffness: 100 }}
          animate={
            titleNumber === index
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: titleNumber > index ? -150 : 150,
                  opacity: 0,
                }
          }
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#c183f8] to-[#ea570f] bg-clip-text text-transparent">
              {title.gradient}
            </span>{' '}
            {title.normal}
          </h1>
        </motion.div>
      ))}
    </div>
  );
}

export default AnimatedHero;
