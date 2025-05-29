import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedCollection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=1400" 
              alt="Luxury fashion collection" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-dancing mb-6">Fall Collection 2025</h2>
            <p className="text-lg mb-8">
              Experience the embodiment of sophistication with our latest collection. 
              Each piece tells a story of craftsmanship and timeless design that transcends seasons.
            </p>
            <Link 
              to="/" 
              className="inline-block border border-white py-3 px-8 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition duration-300 self-start"
            >
              Discover More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
