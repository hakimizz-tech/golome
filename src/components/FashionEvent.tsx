import { useParallax } from 'react-scroll-parallax'
import { OptimizedImage } from '@/components/optimized-image'
import { DESIGN_IMAGES } from '@/lib/image-map'
import { CustomButton } from './CustomButton'
import { createDivRef } from '@/lib/ref';


function FashionEvent() {

  
  const leftImageParallax = useParallax({
    translateY: ["-350px", "0px"], // Start 500px above, move to normal position
    rotate: [10, -15],             // Rotate from -10deg to -5deg counterclockwise
    scale: [0.9, 1.1],             // Start smaller, grow slightly larger
    opacity: [0.7, 1],             // Fade in from 70% to 100% opacity
    easing: 'easeOutQuad',        // Smooth deceleration curve
    shouldAlwaysCompleteAnimation: true // Complete animation even if scrolled quickly
  });

  const rightImageParallax = useParallax({
    translateY: ["150px", "-100px"], // Start 150px below, move 100px upward
    rotate: [15, 0],                 // Rotate from 15deg tilted to straight
    scale: [0.85, 1.05],             // Start smaller, grow slightly
    opacity: [0.6, 1],               // Fade in from 60% to 100% opacity
    easing: 'easeOutQuad',           // Smooth exit curve for natural movement
    shouldAlwaysCompleteAnimation: true // Ensures animation completes fully
  });
  
  return (
    <div 
      className='min-h-fit lg:min-h-[120vh] w-full pt-12 lg:pt-24 pb-8 lg:pb-12 bg-white overflow-hidden'
    >
      <div className='grid grid-cols-12 gap-6 max-w-7xl mx-auto relative'>
        {/* Left image - hidden on small/medium screens */}
        <div className='hidden lg:flex col-span-3 justify-start items-center'>
          <div 
            ref={createDivRef(leftImageParallax.ref)}
            className='h-[350px] w-[300px] overflow-hidden shadow-md relative z-10'
            style={{ willChange: 'transform' }}
          >
            <OptimizedImage 
              publicId={DESIGN_IMAGES.runaway3}
              alt="Fashion model on runway" 
              className='w-full h-full object-cover object-top'
              width={600}
              height={800}
              highQuality={true}
            />
          </div>
        </div>

        {/* Text container - full width on small/medium screens */}
        <div className='col-span-12 lg:col-span-6 flex flex-col items-center justify-center text-center px-4 lg:px-6 py-6 lg:py-8'>
          <div> 
            <h1 className='hf text-2xl md:text-3xl font-bold mb-4 lg:mb-6 leading-tight'>
             Editorial Nights. Runway Futures.
            </h1>
            
            <p className='pf text-base md:text-lg text-black mb-6 lg:mb-8 leading-relaxed'>
               A curated arena for statement craft, sculpted textures, fluid movement, and radical elegance. From raw denim artistry to architectural couture—witness style ideas becoming culture
            </p>
            
            <div className='mt-2 lg:mt-4 flex justify-center w-full'>
              <CustomButton buttonName='Learn More' linkname='/about'/>
            </div>
          </div>
        </div>

        {/* Right image - hidden on small/medium screens */}
        <div className='hidden lg:flex col-span-3 justify-end items-end'>
          <div 
            className='h-[350px] w-[300px] relative'
            style={{ marginTop: '150px' }}
          >
            <div 
              ref={createDivRef(rightImageParallax.ref)}
              className='h-full w-full overflow-hidden shadow-md'
              style={{ willChange: 'transform' }}
            >
              <OptimizedImage 
                publicId={DESIGN_IMAGES.runaway7}
                alt="Fashion model on runway" 
                className='w-full h-full object-cover object-top'
                width={600}
                height={800}
                highQuality={true}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom space - only on large screens */}
      <div className="hidden lg:block h-16"></div>
    </div>
  )
}

export default FashionEvent