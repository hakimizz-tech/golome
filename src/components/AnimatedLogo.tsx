import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const AnimatedLogo = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      const letters = logoRef.current.children;
      
      // Initial state
      gsap.set(letters, { opacity: 0, y: 50 });
      
      // Animation timeline
      const tl = gsap.timeline();
      
      // Animate letters one by one
      tl.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })
      .to(letters, {
        scale: 1.1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.inOut"
      })
      .to(letters, {
        scale: 1,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.inOut"
      });
    }
  }, []);

  return (
    <Link to="/" className="flex items-center">
      <div ref={logoRef} className="flex font-bold text-2xl tracking-wider text-black" style={{ fontFamily: 'Montez, cursive' }}>
        <span>G</span>
        <span>O</span>
        <span>L</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </div>
    </Link>
  );
};

export default AnimatedLogo;