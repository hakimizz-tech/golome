
import React from 'react'
import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent'
import FadeContent from '@/blocks/Animations/FadeContent/FadeContent'
import DesignImage from '@/assets/Design-image/design-image-1.jpg'
// import Paper from '@/assets/Design-image/paper.svg'
import Paper from './Paper'

function Design() {
  return (
    <section className='bg-white text-black min-h-screen overflow-hidden'>
      <div className='flex flex-col md:grid md:grid-cols-2 min-h-screen'>
        {/* Image container */}
        <div className='w-full h-64 md:h-full'>
          {/* Gray placeholder for DesignImage */}
          <img src={DesignImage} alt="our design for the bage" className='object-cover h-full w-full' />
        </div>
        
        {/* Text container - Made responsive */}
        <div className='w-full h-[50vh] md:h-full flex-1 relative'>
          <Paper classname='flex flex-col items-center justify-center h-full'>
            <div className='py-8 md:py-16 px-4 md:px-8 space-y-8 md:space-y-10'>
              <FadeContent
                blur={true} 
                duration={1000} 
                easing="ease-out" 
                initialOpacity={0}
                className='text-lg md:text-2xl font-medium text-center leading-relaxed design-font'
              >
                <p>Our bags are proudly locally designed and crafted
                   from high-quality, long-lasting leather, that stands 
                   the test of time. Each piece is a testament to the
                   skill and creativity of the best minds and
                   talented artisans who pour their passion
                   into every detail.</p>
              </FadeContent>
              
              <FadeContent
                blur={true} 
                duration={2500} 
                easing="ease-out" 
                initialOpacity={0}
                className='text-lg md:text-2xl font-medium text-center leading-relaxed design-font'
              >
                <p>With a commitment to durability and style, our bags 
                  bring together exceptional materials and local
                  craftsmanship to create pieces you'll carry with
                  pride for years to come.</p>
              </FadeContent>
            </div>
          </Paper>
        </div>
      </div>
    </section>
  )
}

export default Design;