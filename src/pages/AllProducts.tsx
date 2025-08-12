import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card-hover-effect';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { products } from '@/lib/constants';
import ProductHeader from '@/components/ProductHeader'
import ProductBreadCrump from '@/components/ProductBreadCrump';
import TextType from '@/blocks/TextAnimations/TextType/TextType';
import Silk from '@/blocks/Backgrounds/Silk/Silk';
import { OptimizedImage } from '@/components/optimized-image';

function AllProducts() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredProducts = selectedCategory === 'all' ? products : products.filter(
      p => p.category.toLowerCase() === selectedCategory);

    const animatedTexts = [
        "we've pioneered the creation of beautiful bags and clothing.",
        "Discover unique pieces, handcrafted with passion.",
        "Find your perfect style, made to last."
    ];

    return (
        <div className="min-h-screen bg-white text-white">
            {/* Made for you Section */}
            <div className="relative w-full h-72">
                <div className="absolute inset-0 z-0">
                    <Silk color="#ff6900" speed={3} scale={0.8} noiseIntensity={0.9} rotation={2.82} />
                </div>
                <div className="absolute top-0 left-0 w-full z-20">
                    <ProductHeader 
                        backgroundColor='bg-transparent'
                        textcolor='text-white'
                    />
                </div>

                <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full">
                    <h2 className="text-2xl font-semibold text-white hf bg-white/30 backdrop-blur-none p-4 px-6 rounded-full">Made for you</h2>
                    <div>
                        <TextType 
                        text={animatedTexts} 
                        typingSpeed={50} 
                        pauseDuration={2000} 
                        startOnVisible 
                        className='text-center px-4 sm:px-6 lg:px-8 text-sm sm:text-base max-w-2xl'
                        textColors={['#ffff']}
                    />
                    </div>
                </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
                {/* Main Content */}
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  
                    {/* Sidebar -- Column 1 */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24">
                            <ProductBreadCrump/>
                            <h1 className="text-4xl font-bold hf">All Products</h1>
                            <p className="mt-2 text-gray-600 pf">
                                Shop now, not later. Browse the best of our selection including women and men outfit.
                            </p>
                            <RadioGroup 
                                value={selectedCategory}
                                className="mt-8 flex flex-row flex-wrap gap-4 lg:flex-col lg:space-y-0 lg:divide-y lg:divide-black/10"
                                onValueChange={(value) => setSelectedCategory(value)}
                            >
                                <div className="flex items-center  space-x-2 lg:py-4 lg:first:pt-0">
                                    <RadioGroupItem value="all" id="all" />
                                    <Label htmlFor="all" className={cn("text-lg font-medium pf", selectedCategory === 'all' ? 'text-[#ff6900]' : 'text-black')}>All products</Label>
                                </div>
                                <div className="flex items-center  space-x-2 lg:py-4">
                                    <RadioGroupItem value="bags" id="bags" />
                                    <Label htmlFor="bags" className={cn("text-lg font-medium pf", selectedCategory === 'bags' ? 'text-[#ff6900]' : 'text-black')}>Bags</Label>
                                </div>
                                <div className="flex items-center  space-x-2 lg:py-4">
                                    <RadioGroupItem value="women" id="women" disabled />
                                    <Label htmlFor="women" className="text-lg font-medium pf text-gray-400">Women</Label>
                                </div>
                                <div className="flex items-center  space-x-2 lg:py-4">
                                    <RadioGroupItem value="men" id="men" disabled />
                                    <Label htmlFor="men" className="text-lg font-medium pf text-gray-400">Men</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </aside>

                    {/* Product Grid -- Column 2 */}
                    <main className="lg:col-span-3">
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div key={product.id}>
                                    <Card
                                      product={product}
                                      href={`/product/${product.id}`}
                                      className="bg-gray-50 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group h-80"
                                    >
                                      <div className="flex items-center justify-center h-full w-full">
                                        <OptimizedImage
                                          publicId={product.images}
                                          alt={product.name}
                                          className="object-contain h-52"
                                          width={400}
                                          height={400}
                                          objectFit="contain"
                                        />
                                      </div>
                                    </Card>
                                    <div className="mt-2 text-left">
                                      <p className="text-black font-semibold">{product.name}</p>
                                      <p className="text-gray-600">Ksh. {product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;