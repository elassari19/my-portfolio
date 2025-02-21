import { cx } from 'class-variance-authority';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface IProps {
  src: StaticImageData;
  name: string;
  description: string;
  reverse?: boolean;
}

function ProjectCard({ src, name, description, reverse }: IProps) {
  return (
    <div
      className={cx(
        'flex items-center justify-between w-screen',
        reverse && 'flex-row-reverse'
      )}
    >
      <div className="md:flex-1"></div>
      <div className={cx('flex-1', reverse && 'flex justify-end')}>
        <div
          className={cx(
            'text-base flex flex-col items-center gap-6 p-2 rounded-lg mt-28 border bg-border/50 h-60 w-60',
            reverse ? 'mr-16' : 'ml-16'
          )}
        >
          <Image className="w-full object-contain" src={src} alt="project" />
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <h3>{description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
