/* eslint-disable @typescript-eslint/no-unused-vars */

import {CornerRightDown } from 'lucide-react'
import {Card} from '@/components/ui/card-hover-effect'
import { products } from '@/lib/constants';
import { useEffect } from 'react'
import { Link } from 'wouter'
import ProductHeader from '@/components/ProductHeader';
import ProductBreadCrump from '@/components/ProductBreadCrump';
import { OptimizedImage } from '@/components/optimized-image';
import { DESIGN_IMAGES, BAGS } from '@/lib/image-map';

function Bags() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
  return (
    <div className='min-h-screen bg-white flex flex-col text-black snap-y snap-mandatory overflow-y-scroll scroll-smooth'>
        <ProductHeader/>
        
        {/* Hero Section Container */}
        <div className="w-full flex flex-col h-[90vh] lg:flex-row mt-10 snap-start snap-always">
            {/* Image Container - Left Side */}
            <div className='w-full lg:w-1/2 h-[40vh] lg:h-full flex items-center justify-center rounded-lg lg:rounded-l-lg lg:rounded-r-none bg-gray-50 px-4'>
                <OptimizedImage 
                    publicId={DESIGN_IMAGES.image5}
                    alt="Lady with designer bag" 
                    className='object-cover object-bottom w-full h-full max-w-md lg:max-w-none'
                    width={800}
                    height={1000}
                    highQuality={true}
                />
            </div>
            
            {/* Content Container - Right Side */}
            <div className="w-full lg:w-1/2 h-[40vh] lg:h-full flex flex-col justify-center items-start px-6 lg:px-12 py-8 lg:py-0 bg-white font-serif">
                <div className="max-w-md">
                     <p className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
                        A handbag isn't just an accessory. It's the perfect finishing touch that elevates your style and carries a piece of your personality wherever you go.
                    </p>
                    <a href="#bags" className={"flex items-center gap-2"}>
                        <span className=" font-medium hover:text-[#e55a00] text-[#ff6900] hover:underline cursor-pointer flex flex-row items-center gap-2">
                            Get yours now <span><CornerRightDown className='stroke-[#ff6900]'/></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <section className="w-full relative snap-start snap-always" id='bags'>
            <div className="w-full min-h-screen pt-24 pb-16">
                <ProductBreadCrump/>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-left px-8 hf">
                    New Arrivals
                </h1>

                <div className='flex flex-row justify-between px-8 items-start'>
                    <p className="text-left pf max-w-xl">
                        Shop the Latest Style: Stay ahead of the curve with our newest Arrival
                    </p>
                    <p className='text-right px-4 lg:px-8 mb-4 text-[#ff6900] hover:text-[#e55a00] hover:underline cursor-pointer pf'>
                        <Link href='/products'>All Products</Link>
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4 px-4 lg:px-8 mt-6">
                    {products.map((product) => (
                        <div key={product.id}>
                            <Link href={`/product/${product.id}`} state={{ product }}>
                                <Card
                                  product={product}
                                  className='bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group h-80'
                                >
                                  <div className='flex flex-col items-center justify-center h-full w-full relative'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                      <OptimizedImage 
                                        publicId={product.images} 
                                        alt={product.name} 
                                        className='object-contain h-54'
                                        width={400}
                                        height={400}
                                      />
                                    </div>
                                  </div>
                                </Card>
                            </Link>
                            <div className="mt-2 text-left relative z-10">
                              <p className="text-black font-semibold">{product.name}</p>
                              <p className="text-gray-600">ksh. {product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* customizing bags  */}
        <section className='w-full min-h-screen snap-start snap-always flex items-center justify-center overflow-hidden bg-white relative z-20'>
            <div className='flex flex-col lg:flex-row justify-between items-center w-full min-h-[70vh] max-w-7xl mx-auto px-4 lg:px-8 py-16 gap-12'>
                {/* Image container - Left Side */}
                <div className='w-full lg:w-1/2 flex items-center justify-center'>
                    <div className='w-full max-w-md lg:max-w-lg bg-gray-300 rounded-lg flex items-center justify-center'>
                        <OptimizedImage 
                            publicId={BAGS.bagDetail1}
                            alt="Customizable designer bag" 
                            className='rounded-2xl'
                            width={600}
                            height={600}
                            highQuality={true}
                        />
                    </div>
                </div>
                
                {/* Content container - Right Side */}
                <div className='w-full lg:w-1/2 flex flex-col justify-center items-start px-2 lg:px-6 font-serif'>
                    <div className="max-w-md">
                        <p className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed font-serif">
                            We offer fully customizable bags designed to match your unique preferences and style. 
                            Whether you'd like to choose your favorite colors, add personalized text, or create a 
                            design that's truly your own, we make it easy for you to carry a bag that's as individual as you are.
                        </p>
                        <button className="bg-[#ff6900] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e55a00] transition-colors duration-300">
                            Customize Your Bag
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Bags;