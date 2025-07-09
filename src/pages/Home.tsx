


import { AnimatedFooter } from "@/components/AnimatedFooter";
// import HeroSection from "@/components/HeroSection";
import CardSwap from '@/components/CardSwap';
import Design from "@/components/Design";
// import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";
// import { BentoGridNews } from "@/components/BentoGridNews";
import HeaderPage from "./HeaderPage";
import { HeroSection } from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderPage/>

      {/* Main Content */}
      <main>
        {/* <SplashCursor/> */}
        <HeroSection />
        <CardSwap/>
        <Design/>
        <NewsSection/>
      </main>

      <AnimatedFooter />
    </div>
  );
}
