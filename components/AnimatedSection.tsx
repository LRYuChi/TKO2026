import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const directionOffsets = {
  up: { x: 0, y: 40 },
  left: { x: -60, y: 0 },
  right: { x: 60, y: 0 },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const offset = directionOffsets[direction];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
