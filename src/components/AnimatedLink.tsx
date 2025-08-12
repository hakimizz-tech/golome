import { useRef, useEffect } from 'react';
import { Link } from 'wouter';
import gsap from 'gsap';

interface AnimatedLinkProps {
  href: string;
  text: string;
}

export function AnimatedLink({ href, text }: AnimatedLinkProps) {
  const linkRef = useRef<HTMLDivElement>(null);
  const textTopRef = useRef<HTMLSpanElement>(null);
  const textBottomRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!linkRef.current || !textTopRef.current || !textBottomRef.current) return;
    
    // Setup initial state
    gsap.set(textTopRef.current, { y: 0, opacity: 1 });
    gsap.set(textBottomRef.current, { y: 20, opacity: 0 });
    
    // Create timeline but don't play it yet
    const tl = gsap.timeline({ paused: true });
    
    tl.to(textTopRef.current, { 
      y: -20, 
      opacity: 0, 
      duration: 0.3, 
      ease: "power2.in" 
    }, 0);
    
    tl.to(textBottomRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.3, 
      ease: "power2.out" 
    }, 0.1); // Slight delay for better effect
    
    // Add event listeners
    const link = linkRef.current;
    
    const onMouseEnter = () => tl.play();
    const onMouseLeave = () => tl.reverse();
    
    link.addEventListener('mouseenter', onMouseEnter);
    link.addEventListener('mouseleave', onMouseLeave);
    
    // Cleanup
    return () => {
      link.removeEventListener('mouseenter', onMouseEnter);
      link.removeEventListener('mouseleave', onMouseLeave);
      tl.kill();
    };
  }, []);
  
  return (
    <div 
      ref={linkRef}
      className="relative inline-block cursor-pointer h-6 overflow-hidden"
      style={{ minWidth: '60px' }} // Ensure stable width
    >
      <Link 
        href={href}
        className="text-lg font-medium text-black hf hover:text-[#ff6900] transition-colors block"
      >
        <span className="relative block">
          <span ref={textTopRef} className="block absolute top-0 left-0">
            {text}
          </span>
          <span ref={textBottomRef} className="block absolute top-0 left-0">
            {text}
          </span>
          <span className="opacity-0">{text}</span> {/* Invisible placeholder for layout */}
        </span>
      </Link>
    </div>
  );
}