import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import NewsSection from "@/components/NewsSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import Newsletter from "@/components/Newsletter";
import SearchSection from "@/components/SearchSection";
import BagsSection from "@/components/BagsSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSlider />
      <SearchSection />
      <BagsSection />
      <NewsSection />
      <FeaturedCollection />
      <Newsletter />
    </motion.div>
  );
};

export default Home;
