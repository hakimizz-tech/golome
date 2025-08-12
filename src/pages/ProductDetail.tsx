import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLocation } from 'wouter';
import ProductHeader from '@/components/ProductHeader';
import ProductBreadCrump from '@/components/ProductBreadCrump';
import { products } from '@/lib/constants';
import { useCartStore } from '@/store/cartStore';
import { Leaf, Recycle, Truck } from 'lucide-react';
import { OptimizedImage } from '@/components/optimized-image';

// for personalized details about the product
function ProductDetail() {
    const [location] = useLocation();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const addToCart = useCartStore((state) => state.addToCart);

    //get the product id from the url and then find the id that matches the product
    const productId = location.split('/')[2];
    const product = products.find(p => p.id === parseInt(productId));

    useEffect(() => {
        if (product) {
            setSelectedImage(product.images);
        }
    }, [product]);

    //when the components mount scroll to the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // onclick to change the quantity of product
    const handleQuantityChange = (amount: number) => {
        setQuantity(prev => Math.max(1, prev + amount));
    };

    // onclick to add the product to the cart
    const handleAddToCart = () => {
        if (product) {
            addToCart({ ...product, quantity, images: product.images });
        }
    };

    // if product not found display a message to the user
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="min-h-screen bg-white text-black">
            <ProductHeader/>

            <div className="container mx-auto px-4 py-8 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-4 lg:sticky lg:top-24 h-fit">
                        <ProductBreadCrump productName={product.name} />
                        <div className="flex flex-col-reverse lg:flex-row gap-4">
                            <div className="flex-1">
                                {selectedImage && (
                                    <OptimizedImage
                                        publicId={selectedImage}
                                        alt={product.name}
                                        className="w-full h-[50vh] lg:h-[66vh] object-contain rounded-lg bg-[#e5e5e5]/10"
                                        width={800}
                                        height={1000}
                                        objectFit="contain"
                                        highQuality={true}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                       <div className='flex flex-row justify-between'>
                         <h1 className="text-4xl font-bold hf">{product.name}</h1>
                        <p className="text-2xl text-gray-800 my-4 pf">ksh {product.price}</p>
                       </div>
                       <hr />
                        <p className="text-gray-600 pf leading-relaxed py-6">
                            {product.description}
                        </p>
                        <hr />

                        <div className="mt-8">
                            <p className="mb-2 pf">Color</p>
                            <div className="flex flex-row gap-2">
                                <Button className="bg-[#d4a373] p-6 text-black hover:bg-[#d4a373]/90">black</Button>
                                <Button className="bg-[#faedcd] p-6 text-black hover:bg-[#faedcd]/90">white</Button>
                                <Button className="bg-[#fdf0d5] p-6 text-black hover:bg-[#fdf0d5]/90">red</Button>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center">
                            <div className="flex justify-between items-center bg-[#dedbd2]/10 border rounded-md w-full p-2">
                                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)}>-</Button>
                                <span className="px-4">{quantity}</span>
                                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)}>+</Button>
                            </div>
                        </div>

                        <div className='w-full flex gap-4 items-center justify-center mt-8'>
                        <Button className='w-1/3 rounded-full bg-white border border-black hover:bg-black text-black hover:text-white p-6 pf text-lg'>Buy now</Button>
                        <Button className="w-2/3 bg-[#ff6900] text-white hover:bg-[#ff6900]/90 transition-colors font-medium text-lg rounded-full p-6 pf" onClick={handleAddToCart}>
                            Add To Cart
                        </Button>
                        </div>

                        <div className='flex flex-col space-y-2 list-none mt-5'>
                            <li className='flex flex-row space-x-2'>
                                <Truck className='stroke-black h-4 w-4'/>
                                <p className='pf text-sm text-center'>
                                    Fast & free delivery
                                </p>
                                </li>
                            <li className='flex flex-row space-x-2'>
                                <Leaf className='stroke-black h-4 w-4'/>
                                <p className='pf text-[15px]'>
                                    100% leather
                                </p>
                            </li>
                            <li className='flex flex-row space-x-2'>
                                <Recycle className='stroke-black h-4 w-4'/>
                                <p className='pf text-sm'>
                                    Recycled Material
                                </p>
                            </li>

                        </div>

                        <div className="mt-8">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Delivery and return</AccordionTrigger>
                                    <AccordionContent>
                                        Fast and free delivery. 100% leather.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>How this was Made</AccordionTrigger>
                                    <AccordionContent>
                                        Made with the finest materials and craftsmanship.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Customization</AccordionTrigger>
                                    <AccordionContent>
                                        Customization options are available upon request.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;