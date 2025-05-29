import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bag {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  price: string;
  material: string;
}

interface BagsProductCardProps {
  bag: Bag;
}

const BagsProductCard: React.FC<BagsProductCardProps> = ({ bag }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF6F00] transition-all duration-300">
        <div className="relative overflow-hidden">
          <motion.img
            src={bag.imageUrl}
            alt={bag.name}
            className="w-full h-80 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Show title on hover at top left corner */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute top-4 left-4 bg-white px-3 py-2 rounded-md shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-black font-semibold text-sm">{bag.name}</h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default BagsProductCard;