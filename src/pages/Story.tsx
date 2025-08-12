import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OptimizedImage } from '@/components/optimized-image';
import { DESIGN_IMAGES } from '@/lib/image-map';
import ProductHeader from "@/components/ProductHeader";
import Offers from '@/components/Offers';
import { AnimatedFooter } from '@/components/AnimatedFooter';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        "title" : "Timeless Elegance",
        "descr" : "Designed with sophistication that never goes out of style, blending classic aesthetics with modern appeal.",
        "publicId": DESIGN_IMAGES.runaway9
    },
    {
        "title" : "Quality Craftsmanship",
        "descr" : "Meticulously crafted with attention to detail, ensuring durability, precision, and excellence in every piece.",
        "publicId" : DESIGN_IMAGES.designImage1
    },
    {
        "title" : "Effortless Versatility",
        "descr" : "Seamlessly adapts to any occasion, offering a perfect balance of function and style.", 
        "publicId" : DESIGN_IMAGES.streetWear
    },
]

function Story() {
  // Section references for ScrollTrigger
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const textPanels = useRef<HTMLDivElement[]>([]);
  const imageContainers = useRef<HTMLDivElement[]>([]);
  
  // Clear the refs array to avoid issues with React strict mode
  textPanels.current = [];
  imageContainers.current = [];
  
  // Add text panel to ref collection
  const addTextPanelRef = (el: HTMLDivElement | null) => {
    if (el && !textPanels.current.includes(el)) {
      textPanels.current.push(el);
    }
  };
  
  // Add image container to ref collection
  const addImageContainerRef = (el: HTMLDivElement | null) => {
    if (el && !imageContainers.current.includes(el)) {
      imageContainers.current.push(el);
    }
  };

  // Set up ScrollTrigger animation
  useEffect(() => {
    if (!sectionRef.current || !textContainerRef.current || textPanels.current.length === 0 || imageContainers.current.length === 0) return;

    // Track current active panel index
    let activeIndex = 0;

    // Initial setup - hide all except first panel
    gsap.set(textPanels.current[0], { opacity: 1, y: 0 });
    gsap.set(textPanels.current.slice(1), { opacity: 0, y: 50 }); // Start below
    
    // Pin the text container
    const pinTextTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: textContainerRef.current,
      pinSpacing: false,
      anticipatePin: 1
    });
    
    // Create triggers for each image
    const triggers: ScrollTrigger[] = [];
    
    imageContainers.current.forEach((imageContainer, index) => {
      const trigger = ScrollTrigger.create({
        trigger: imageContainer,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          // Going down - content slides up and new content appears from below
          if (activeIndex !== index) {
            // Current content exits upward
            gsap.to(textPanels.current[activeIndex], {
              opacity: 0,
              y: -60, // Exit to top
              duration: 0.5,
              ease: "power2.inOut"
            });
            
            // New content enters from below the line
            gsap.fromTo(textPanels.current[index], 
              { opacity: 0, y: 60 }, // Start from below
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                delay: 0.1,
                ease: "power2.out" 
              }
            );
            
            activeIndex = index;
          }
        },
        onEnterBack: () => {
          // Going up - content slides down and new content appears from above
          if (activeIndex !== index) {
            // Current content exits downward
            gsap.to(textPanels.current[activeIndex], {
              opacity: 0,
              y: 60, // Exit to bottom
              duration: 0.5,
              ease: "power2.inOut"
            });
            
            // New content enters from above the line
            gsap.fromTo(textPanels.current[index], 
              { opacity: 0, y: -60 }, // Start from above
              { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                delay: 0.1,
                ease: "power2.out" 
              }
            );
            
            activeIndex = index;
          }
        }
      });
      
      triggers.push(trigger);
    });
    
    return () => {
      // Kill all triggers on cleanup
      [pinTextTrigger, ...triggers].forEach(t => t.kill());
    };
  }, []);

  return (
    <div className='min-h-screen w-full mt-4'>
        <ProductHeader/>
        {/* section 1 */}
        <section className='min-h-screen flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-12'>
            {/* image container with responsive styling */}
            <div className='w-full lg:w-1/2 h-[90vh] overflow-hidden shadow-xl order-2 lg:order-1'>
                <OptimizedImage 
                  publicId={DESIGN_IMAGES.groupPhoto}
                  alt="GOLOME team" 
                  className='w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700'
                  width={1200}
                  height={900}
                  highQuality={true}
                />
            </div>
            
            {/* story content with improved typography and spacing */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-6 py-8 h-screen order-1 lg:order-2 px-4'>
                <div>
                  <h3 className='text-[#ff6900] hf tracking-widest font-medium mb-3'>Origins</h3>
                  <hr className='w-full border-black/5 '/>
                </div>
                
                <h1 className='hf text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'>
                  From Kenya, <br /> To The World
                </h1>
                
                <p className='text-black pf text-lg leading-relaxed max-w-xl'>
                 <span>Our journey began with a passion for creating clothing that's both unique and meaningful. Founded by a group of designers, we set out to break away from mass-produced fashion and focus on exclusivity.</span> <br /> <br />
                 <span>Each collection is crafted with care, using sustainable materials and ethical practices. We believe in quality over quantity, producing limited-edition pieces that stand the test of time. </span> <br /> <br />
                 <span>Our mission is to offer bold, timeless designs that empower individuals to express their authentic selves.</span>
                </p>
            </div>
        </section>

        {/* section 2 - with fixed text and scrolling images */}
        <section ref={sectionRef} className="bg-black text-white relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
                {/* Left side - Fixed Text content */}
                <div 
                    ref={textContainerRef}
                    className="w-full lg:w-1/2 h-screen flex flex-col justify-start bg-black"
                >
                    <div className="relative h-full px-6">
                        {/* Fixed header that doesn't change */}
                        <div className="pt-20 lg:pt-32">
                            <h3 className="text-[#ff6900] hf tracking-widest font-medium mb-6 px-8">Our Values</h3>
                            <hr className="border-white border-opacity-60 mb-8 mx-8" />
                        </div>
                        
                        {/* Animated content panels - Fixed positioning */}
                        <div className="relative">
                            {values.map((value, index) => (
                                <div 
                                    key={`text-${index}`} 
                                    ref={addTextPanelRef}
                                    className="absolute top-0 left-0 w-full px-8"
                                >
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 hf">{value.title}</h2>
                                    <p className="text-gray-300 pf text-lg leading-relaxed max-w-xl">{value.descr}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Right side - Scrolling Images */}
                <div className="w-full lg:w-1/2 bg-black">
                    {values.map((value, index) => (
                        <div 
                            key={`image-${index}`}
                            ref={addImageContainerRef}
                            className="h-screen flex items-center justify-center p-12"
                        >
                            <div className="w-full h-full overflow-hidden">
                                <OptimizedImage 
                                    publicId={value.publicId} 
                                    alt={value.title} 
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                                    width={1200}
                                    height={1600}
                                    highQuality={true}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <Offers/>
        <AnimatedFooter/>
    </div>
  );
}

export default Story;