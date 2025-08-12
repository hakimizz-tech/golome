import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';
import { DESIGN_IMAGES } from '@/lib/image-map';
import { OptimizedImage } from '@/components/optimized-image';

function FeaturedCollection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-white py-10 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
        {/* First Column */}
        <div className="flex flex-col justify-center mb-[10rem] md:p-8">
          <h1 className="hf text-4xl md:text-5xl font-bold">
            Featured Collection
          </h1>
          <p className="pf mt-4 lg:text-lg">
            Discover our latest addition to our best selling loungwear collecton.
          </p>
          <button className="mt-6 w-fit rounded-full bg-white border border-black px-8 py-3 text-black hover:bg-black hover:text-white transition-colors duration-300">
            <Link href='/products'>
              Shop Now
            </Link>
          </button>
        </div>

        {/* Second Column */}
        <div className="bg-[#edece5] rounded-lg h-[25rem] md:h-[30rem] lg:h-[35rem] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            publicId={DESIGN_IMAGES.runaway2}
            alt="Featured Bag 1"
            className="h-full w-full object-top object-cover"
            width={800}
            height={1000}
            highQuality={true}
          />
        </div>

        {/* Third Column */}
        <div className="bg-[#edece5] rounded-lg h-[25rem] md:h-[35rem] lg:h-[48rem] flex items-center justify-center overflow-hidden">
          <OptimizedImage
            publicId={DESIGN_IMAGES.runaway6}
            alt="Featured Bag 2"
            className="h-full w-full object-top object-cover"
            width={900}
            height={1200}
            highQuality={true}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedCollection;
