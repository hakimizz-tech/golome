import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { sliderImages } from "@/lib/constants";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const subtitleRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  
  // Set up automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Animate the text when slide changes
  useEffect(() => {
    const titleElement = textRefs.current[currentSlide];
    const subtitleElement = subtitleRefs.current[currentSlide];
    
    if (titleElement) {
      gsap.fromTo(
        titleElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }
    
    if (subtitleElement) {
      gsap.fromTo(
        subtitleElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 }
      );
    }
  }, [currentSlide]);
  
  return (
    <div className="relative h-[90vh] mt-20 overflow-hidden">
      <AnimatePresence>
        {sliderImages.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full",
              currentSlide === index ? "z-10" : "z-0"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 
                  ref={el => { textRefs.current[index] = el; }}
                  className="text-4xl md:text-6xl font-dancing mb-4 opacity-0"
                >
                  {slide.title}
                </h2>
                <p 
                  ref={el => {subtitleRefs.current[index] = el}}
                  className="text-xl md:text-2xl max-w-2xl mx-auto opacity-0"
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full focus:outline-none transition-all duration-300",
              currentSlide === index 
                ? "bg-black opacity-100" 
                : "bg-white opacity-50 hover:opacity-75"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
