'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

interface StickyScrollRevealProps {
  left: React.ReactNode[];
  right: React.ReactNode[];
}

export const StickyScrollReveal = ({
  left,
  right,
}: StickyScrollRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate the height of the container based on the left content
  useEffect(() => {
    if (leftSectionRef.current) {
      const leftHeight = leftSectionRef.current.scrollHeight;
      setContainerHeight(leftHeight);
    }
  }, [left, isMobile]);

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Update active index based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value < 0.05) {
        setActiveIndex(0);
      } else if (value < 0.2) {
        setActiveIndex(1);
      } else if (value < 0.37) {
        setActiveIndex(2);
      } else if (value < 0.5) {
        setActiveIndex(3);
      } else if (value < 0.62) {
        setActiveIndex(4);
      } else if (value < 0.74) {
        setActiveIndex(5);
      } else if (value < 0.87) {
        setActiveIndex(6);
      } else {
        setActiveIndex(7);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: isMobile ? 'auto' : containerHeight }}
    >
      <div className="flex flex-col md:flex-row w-full">
        {/* Left scrolling content */}
        <div
          ref={leftSectionRef}
          className={`w-full ${isMobile ? 'mb-8' : 'md:w-1/2'} relative z-10`}
        >
          {left.map((item, index) => (
            <motion.div
              key={index}
              className="min-h-[50vh] md:min-h-[70vh] flex items-center p-4 md:p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: isMobile ? 0 : 0.1,
                },
              }}
              viewport={{ once: false, amount: isMobile ? 0.3 : 1 }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Right sticky content */}
        <div
          className={`
            w-full md:w-1/2 
            ${isMobile ? 'relative mt-4' : 'sticky top-20 md:top-60'} 
            h-[40vh] md:h-[50vh] 
            flex items-center justify-center
          `}
        >
          {right.map((item, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center p-4 md:p-6"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : 100,
                y: isMobile ? 50 : 0,
              }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: isMobile ? 0 : activeIndex === index ? 0 : 100,
                y: isMobile ? (activeIndex === index ? 0 : 50) : 0,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyScrollReveal;
