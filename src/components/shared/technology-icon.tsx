/* eslint-disable @next/next/no-img-element */
import { cx } from 'class-variance-authority';
import React from 'react';

interface IProps {
  name: string;
  url: string;
  size?: number;
}

function TechnologyIcon({ name, url, size = 18 }: IProps) {
  return (
    <div
      className={cx(
        'flex gap-2 items-center rounded-full border p-2 py-1',
        size > 20 && 'p-4 py-2'
      )}
    >
      <img
        src={`https://cdn.simpleicons.org/${url}`}
        alt={name}
        width={size}
        height={size}
      />
      <span
        className={cx(
          'text-xs font-semibold',
          size > 20 && 'text-base font-normal'
        )}
      >
        {name}
      </span>
    </div>
  );
}

export default TechnologyIcon;
