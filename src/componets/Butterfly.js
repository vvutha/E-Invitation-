import React from 'react';
import { motion } from 'framer-motion';

const Butterfly = ({ startX, startY, delay, imgSrc, size = 30 }) => {
  return (
    <motion.img
      src={imgSrc}
      alt="Butterfly"
      style={{
        position: 'absolute',
        left: `${startX}px`,
        top: `${startY}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 10, // Ensures the butterfly appears on top
        filter: 'blur(1px)', // Adds a blur effect to make it look farther away
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 20, // Makes it more transparent to look farther away
        scale: 0.5,  // Makes it smaller to simulate distance
        x: [0, Math.random() * 150 - 75, Math.random() * 150 - 75], // Fluttering movement on X axis
        y: [0, -100, -50], // Fluttering motion on Y axis
        rotate: [0, 45, -45, 0], // Slight rotations for fluttering effect
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default Butterfly;





