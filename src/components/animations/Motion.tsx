'use client';

import React from 'react';
import {
  AnimatePresence,
  AnimationControls,
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from 'framer-motion';
import { cx } from 'class-variance-authority';

interface Props extends React.ComponentProps<'div'> {
  initial: TargetAndTransition | VariantLabels;
  animate: VariantLabels | TargetAndTransition | AnimationControls;
  exit: TargetAndTransition | VariantLabels;
  transition: Transition;
}

function Motion({
  children,
  initial,
  animate,
  exit,
  transition,
  className,
}: Props) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        className={cx('', className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Motion;
