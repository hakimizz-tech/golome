import React, { useRef, useState, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';

function Overlay() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isComplete, setIsComplete] = useState(false);

  // Hide the entire overlay after all animations complete
  useEffect(() => {
    if (isInView) {
      // Calculate total animation time: delayChildren + staggerChildren * (number of items - 1) + animation duration
      const totalAnimationTime = 100 + (100 * 3) + 2800; // 5.4 seconds total
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, totalAnimationTime);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 1, x: 0 },
    visible: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 4,
        ease: "easeInOut"
      }
    }
  };

  // Don't render the overlay at all once animation is complete
  if (isComplete) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      className="bg-black text-white min-h-screen grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-0 absolute inset-0 overflow-hidden z-50"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      exit="exit"
      variants={containerVariants}
    >
      <motion.div 
        className="flex items-center justify-center p-4 border-r border-gray-800" 
        variants={childVariants}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Breaking News</h2>
          <p className="text-sm opacity-80">Latest updates from around the world</p>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex items-center justify-center p-4 border-r border-gray-800 lg:border-r" 
        variants={childVariants}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Market Watch</h2>
          <p className="text-sm opacity-80">Financial markets overview</p>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex items-center justify-center p-4 border-r border-gray-800" 
        variants={childVariants}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Tech Updates</h2>
          <p className="text-sm opacity-80">Innovation and technology news</p>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex items-center justify-center p-4" 
        variants={childVariants}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Sports</h2>
          <p className="text-sm opacity-80">Latest scores and highlights</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Overlay;