import BagsProductCard from "./BagsProductCard";
import { motion } from "framer-motion";
import { bagsData } from "@/lib/constants";


const BagsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Rotating stars background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-8 h-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="black" opacity="0.1"/>
         </svg>
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-16 w-6 h-6"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="black" opacity="0.08"/>
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-20 w-10 h-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="black" opacity="0.06"/>
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-8 w-7 h-7"
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="black" opacity="0.09"/>
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-medium mb-4 text-gray-900">
            Luxury <span className="text-[#FF6F00]">Bag</span> Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our exclusive collection of handcrafted leather bags, where traditional craftsmanship meets contemporary design. Each piece tells a story of elegance, quality, and timeless sophistication.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {bagsData.map((bag, index) => (
            <motion.div
              key={bag.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <BagsProductCard bag={bag} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BagsSection;