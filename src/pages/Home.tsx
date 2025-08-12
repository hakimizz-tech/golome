


import { AnimatedFooter } from "@/components/AnimatedFooter";
import HeaderPage from "./HeaderPage";
import { HeroSection } from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import BagCollection from "@/components/BagCollection";
import FashionEvent from "@/components/FashionEvent";
import Offers from "@/components/Offers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderPage/>
      <main>
        <div style={{ height: '100vh', overflow: 'hidden' }}>
          <HeroSection />
        </div>
        <FeaturedCollection/>
        <BagCollection/>
        <FashionEvent/>
        <NewsSection/>
      </main>
      <Offers/>
      <AnimatedFooter />
    </div>
  );
}
