'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

function ShowcaseCarousel({ images }: { images: StaticImageData[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      visibleImages.push({ image: images[index], position: i });
    }
    return visibleImages;
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <div className="absolute inset-0 flex">
        <AnimatePresence initial={false}>
          {getVisibleImages().map(({ image, position }) => (
            <motion.div
              key={
                position === 0 ? currentIndex : `${currentIndex}-${position}`
              }
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full px-2">
                <Image
                  src={image}
                  alt={`Showcase ${currentIndex + 1}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'w-2 h-2 rounded-lg transition-all duration-300',
              currentIndex === index
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/75'
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default ShowcaseCarousel;
