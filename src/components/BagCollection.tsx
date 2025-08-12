import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { useParallax } from 'react-scroll-parallax';
import { OptimizedImage } from '@/components/optimized-image';
import { DESIGN_IMAGES, BAGS } from '@/lib/image-map';
import { CustomButton } from './CustomButton';
import { createDivRef } from '@/lib/ref';

function BagCollection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Text animation parallax effects
  const headingParallax = useParallax({
    onProgressChange: (progress) => {
      if (headingParallax.ref.current) {
        headingParallax.ref.current.style.setProperty('--heading-progress', progress.toString());
      }
    }
  });
  
  const subHeadingParallax = useParallax({
    onProgressChange: (progress) => {
      if (subHeadingParallax.ref.current) {
        subHeadingParallax.ref.current.style.setProperty('--subheading-progress', progress.toString());
      }
    }
  });
  
  const clutchTextParallax = useParallax({
    onProgressChange: (progress) => {
      if (clutchTextParallax.ref.current) {
        clutchTextParallax.ref.current.style.setProperty('--clutch-progress', progress.toString());
      }
    }
  });
  
  // Parallax effects for images with boundary control
  const showcaseParallax = useParallax({
    translateY: [-10, 10], // Reduced values to prevent overflow
    scale: [0.98, 1.02], // Smaller scale to avoid overflow
    easing: 'easeOutQuad',
    rootMargin: { top: 0, right: 0, bottom: 0, left: 0 }, // Enforce boundaries
    onProgressChange: (progress) => {
      if (showcaseParallax.ref.current) {
        showcaseParallax.ref.current.style.setProperty('--progress', progress.toString());
      }
    }
  });

  const firstBagParallax = useParallax({
    translateY: [-5, 5], // Reduced movement
    scale: [0.99, 1.03],
    rootMargin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  const secondBagParallax = useParallax({
    translateY: [5, -5], // Reduced movement
    scale: [0.99, 1.03],
    rootMargin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  // Mobile parallax effects
  const mobileShowcaseParallax = useParallax({
    translateY: [-5, 5], // Smaller values for mobile
    scale: [0.97, 1.01]
  });

  const mobileBag1Parallax = useParallax({
    translateY: [3, -3],
    scale: [0.98, 1.02]
  });
  
  const mobileBag2Parallax = useParallax({
    translateY: [-3, 3],
    scale: [0.98, 1.02]
  });
  
  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  return (
    <section ref={ref} className="min-h-screen bg-white text-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className='flex flex-col lg:flex-row justify-between px-4 items-start relative z-10'>
            {/* main heading - first on mobile */}
            <motion.div 
              variants={itemVariants} 
              className="lg:mb-10 order-1 lg:order-2 z-20"
              ref={createDivRef(headingParallax.ref)}
              style={{
                transform: `translateX(calc(20px * (1 - var(--heading-progress, 0))))` as const,
                opacity: `calc(0.5 + (var(--heading-progress, 0) * 0.5))` as const
              }}
            >
              <h1 className="hf text-xl sm:text-2xl lg:text-4xl mb-4 text-left">
                Elegant Bag{" "}
                <br className="hidden lg:block"/>
                Collection
              </h1>
            </motion.div>
            
            {/* sub-heading - second on mobile */}
            <motion.div 
              variants={itemVariants} 
              className="mb-8 order-2 md:order-1 z-20"
              ref={createDivRef(subHeadingParallax.ref)}
              style={{
                // Text animation using CSS variable
                transform: 'translateY(calc(15px * (1 - var(--subheading-progress, 0))))',
                opacity: 'calc(0.5 + (var(--subheading-progress, 0) * 0.5))'
              }}
            >
              <h2 className="hf text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6 text-left">{new Date().getFullYear()}</h2>
              <p className="pf text-base sm:text-lg leading-relaxed max-w-lg text-left">
                Discover timeless elegance with our curated collection of meticulously crafted bags. 
              </p>
            </motion.div>
        </div>

      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Desktop layout (md and up) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-8">
          {/* First Column - Showcase */}
          <div className="flex flex-col relative">
            <div 
              ref={createDivRef(showcaseParallax.ref)} 
              className="mt-8 lg:mt-12 overflow-hidden h-[28rem] sm:h-[32rem] lg:h-[45rem] relative group" 
            >
              {/* image 1 - UPDATED */}
              <OptimizedImage
                publicId={DESIGN_IMAGES.image4}
                alt="Woman with elegant GOLOME bag" 
                className="w-full h-full object-cover object-top lg:object-center transition-transform duration-500 group-hover:scale-105"
                width={1000}
                height={1500}
                highQuality={true}
                style={{
                  filter: `saturate(calc(100% + (15% * var(--progress, 0.5))))` as const
                }}
              />
              {/* Shop Now button - positioned at bottom */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                <div className="mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <CustomButton linkname='/bags' buttonName='Shop now'/>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column*/}
          <div className="flex flex-col">            
            <div className='flex flex-row h-1/2 justify-between mt-8 lg:mt-12 relative'>
                {/* image - 1 description and price */}
                <div 
                  className='flex flex-col items-start z-10'
                  ref={createDivRef(clutchTextParallax.ref)}
                  style={{
                    transform: `translateX(calc(25px * (1 - var(--clutch-progress, 0))))` as const,
                    opacity: `calc(0.7 + (var(--clutch-progress, 0) * 0.3))` as const
                  }}
                >
                    <h1 className='hf text-2xl'>Clutch</h1>
                    <p className='pf'>An elegant clutch  <br /> for evening events.</p>
                    <br />
                    <span 
                      style={{
                        color: `rgba(0, 0, 0, calc(0.7 + (var(--clutch-progress, 0) * 0.3)))`,
                        transform: 'translateY(calc(10px * (1 - var(--clutch-progress, 0))))'
                      }}
                    >
                      ksh. 3500
                    </span>
                </div>

                {/* image - 2 - UPDATED */}
                <div 
                  ref={createDivRef(firstBagParallax.ref)} 
                  className='h-[25rem] w-1/2 overflow-hidden relative group'
                >
                  <OptimizedImage
                    publicId={BAGS.bagDetail1}
                    alt="Elegant clutch bag"
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    width={800}
                    height={1000}
                    highQuality={true}
                  />
                  {/* Shop Now button - positioned at bottom */}
                  <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                    <div className="mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <CustomButton linkname='/bags' buttonName='Shop now'/>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex flex-row h-1/2 justify-between relative'>
                {/* image - 3 - UPDATED */}
                <div 
                  ref={createDivRef(secondBagParallax.ref)} 
                  className='h-[25rem] w-1/2 overflow-hidden relative group'
                >
                  <OptimizedImage
                    publicId={BAGS.bagDetail2}
                    alt="Luxe carryall bag"
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    width={800}
                    height={1000}
                    highQuality={true}
                  />
                  {/* Shop Now button - positioned at bottom */}
                  <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                    <div className="mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <CustomButton linkname='/bags' buttonName='Shop now'/>
                    </div>
                  </div>
                </div>
                
                {/* descriptions */}
                <div className='flex flex-col justify-between gap-4 w-1/2'>
                    {/* image -2 description and price */}
                    <h1 className='text-right text-2xl hf mt-6'
                      style={{
                        transform: 'translateX(calc(-15px * (1 - var(--progress, 0.5))))',
                        transition: 'transform 0.1s ease-out'
                      }}
                    >
                      Luxe Carryall
                      <br />
                      <span className='pf text-lg'>ksh. 5500 </span>
                    </h1>

                    {/* image -3 description and price */}
                    <h1 className='text-left mx-6 text-2xl hf'
                      style={{
                        transform: 'translateY(calc(10px * (1 - var(--progress, 0.5))))',
                        transition: 'transform 0.1s ease-out'
                      }}
                    >
                      Chic Satchel <br />
                      <span className='pf text-lg'>ksh. 5000 </span>
                    </h1>
                </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden space-y-8 mt-6">
          {/* First product row */}
          <div className="flex flex-row gap-4 items-center">
            <div ref={createDivRef(mobileShowcaseParallax.ref)} className="w-1/2 h-auto aspect-[3/4] overflow-hidden relative group">
              {/* UPDATED */}
              <OptimizedImage
                publicId={DESIGN_IMAGES.image4}
                alt="Woman with elegant GOLOME bag" 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                width={400}
                height={600}
                highQuality={true}
              />
              {/* Shop Now button - positioned at bottom */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <CustomButton linkname='/bags' buttonName='Shop now'/>
                </div>
              </div>
            </div>
            
            {/* image - 1 description and price */}
            <div 
              className="w-1/2 flex flex-col items-start justify-center"
              style={{
                transform: 'translateX(calc(10px * (1 - var(--progress, 0.5))))',
                opacity: 'calc(0.8 + (var(--progress, 0.5) * 0.2))'
              }}
            >
              <h3 className="hf text-xl mb-1 font-bold">Clutch</h3>
              <p className="pf text-sm sm:text-base mb-2">An elegant clutch for evening events.</p>
              <span className="text-sm sm:text-base font-medium">ksh. 3500</span>
            </div>
          </div>

          {/* Second product row - Description left, Image right */}
          <div className="flex flex-row gap-4 items-center">
            {/* image -2 description and price */}
            <div 
              className="w-1/2 flex flex-col items-start justify-center"
              style={{
                transform: 'translateX(calc(-10px * (1 - var(--progress, 0.5))))',
                opacity: 'calc(0.8 + (var(--progress, 0.5) * 0.2))'
              }}
            >
              <h3 className="hf text-xl sm:text-2xl mb-1">Luxe Carryall</h3>
              <p className="pf text-sm sm:text-base mb-2">Spacious and sophisticated everyday bag.</p>
              <span className="text-sm sm:text-base font-medium">ksh. 5500</span>
            </div>
            
            {/* image - 2 - UPDATED */}
            <div ref={createDivRef(mobileBag1Parallax.ref)} className="w-1/2 h-auto aspect-[3/4] overflow-hidden relative group">
              <OptimizedImage
                publicId={BAGS.bagDetail1}
                alt="Elegant clutch bag"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={400}
                height={600}
                highQuality={true}
              />
              {/* Shop Now button - positioned at bottom */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <CustomButton linkname='/bags' buttonName='Shop now'/>
                </div>
              </div>
            </div>
          </div>

          {/* Third product row - Image left, Description right */}
          <div className="flex flex-row gap-4 items-center">
            {/* image - 3 - UPDATED */}
            <div ref={createDivRef(mobileBag2Parallax.ref)} className="w-1/2 h-auto aspect-[3/4] overflow-hidden relative group">
              <OptimizedImage
                publicId={BAGS.bagDetail2}
                alt="Luxe carryall bag"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={400}
                height={600}
                highQuality={true}
              />
              {/* Shop Now button - positioned at bottom */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <CustomButton linkname='/bags' buttonName='Shop now'/>
                </div>
              </div>
            </div>
            
            {/* image -3 description and price */}
            <div 
              className="w-1/2 flex flex-col items-start justify-center"
              style={{
                transform: 'translateX(calc(10px * (1 - var(--progress, 0.5))))',
                opacity: 'calc(0.8 + (var(--progress, 0.5) * 0.2))'
              }}
            >
              <h3 className="hf text-xl sm:text-2xl mb-1">Chic Satchel</h3>
              <p className="pf text-sm sm:text-base mb-2">Elegant design with practical storage.</p>
              <span className="text-sm sm:text-base font-medium">ksh. 5000</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default BagCollection;