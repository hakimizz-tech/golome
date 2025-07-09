
import React from 'react'
import HeaderPage from './HeaderPage'
import LadyWithBag from '@/assets/Design-image/image 5.jpg'
import LadyOnStage from '@/assets/Design-image/image 1.jpg'
import Bag from '@/assets/Bags/bag 1.jpg'
import { Link } from 'wouter'
import {CornerRightDown } from 'lucide-react'
import GridBackground from '@/components/GridBackground'
import {Card, HoverEffect} from '@/components/ui/card-hover-effect'

//import bag images
import bag1 from '@/assets/Bags/1.png'
import bag2 from '@/assets/Bags/2.png'
import bag3 from '@/assets/Bags/3.png'
import bag4 from '@/assets/Bags/4.png'
import bag5 from '@/assets/Bags/5.png'
import bag6 from '@/assets/Bags/6.jpg'
import designBag from '@/assets/Bags/bag 1.jpg'

const bags = [
    {
        image: bag1,
        // title: 'Bag 1',
        // description: 'This is the first bag',
        link: '#'
    },
    {
        image: bag2,
        // title: 'Bag 2',
        // description: 'This is the second bag',
        link: '#'
    },
    {
        image: bag3,
        // title: 'Bag 3',
        // description: 'This is the third bag',
        link: '#'
    }, 
    {
        image: bag4,
        // title: 'Bag 4',
        // description: 'This is the fourth bag',
        link: '#'
    },
    {
        image: bag5,
        // title: 'Bag 5',
        // description: 'This is the fifth bag',
        link: '#'
    },
    {
        image: bag6,
        // title: 'Bag 6',
        // description: 'This is the sixth bag',
        link: '#'
    }
]


function Bags() {
  return (
    <div className='min-h-screen bg-white flex flex-col text-black snap-y snap-mandatory overflow-y-scroll scroll-smooth'>
        <HeaderPage className='backdrop-blur-sm bg-white/30'/>
        
        {/* Hero Section Container */}
        <div className="w-full flex flex-col h-[90vh] lg:flex-row  mt-18 snap-start snap-always">
            {/* Image Container - Left Side */}
            <div className='w-full lg:w-1/2 h-[40vh] lg:h-full flex items-center justify-center rounded-lg  lg:rounded-l-lg lg:rounded-r-none bg-gray-50 px-4'>
                <img 
                    src={LadyWithBag} 
                    className='object-cover object-bottom w-full h-full max-w-md lg:max-w-none'
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

        {/* Filter Section */}
        <section className="w-full  h-screen  relative snap-start snap-always" id='bags'>
            {/* <GridBackground> */}
                <div className="w-full h-screen mt-24  ">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
                        Explore Our Collection
                    </h1>
                    {/* <HoverEffect 
                        items={bags}
                        // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
                    /> */}

                    <div className="grid grid-cols-2 lg:grid-cols-3 w-full h-full gap-4 px-4 lg:px-8">
                        {bags.map((bag, index) => (
                        <Card key={index} className='bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative cursor-pointer group'>
                            <div className='flex flex-col items-center justify-center h-full w-full relative'>
                                {/* image container to cover the rest of the container */}
                                <div className='w-full h-full absoulte top-52 left-0 mt-7 flex items-center justify-center'>
                                    <img src={bag.image} alt="bags" className='object-contain absolute h-54' />
                                </div>
                            </div>
                        </Card>

                    ))}
                    </div>
                </div>
               
            {/* </GridBackground> */}
        </section>
        
        {/* customizing bags  */}
        <section className='w-full h-screen snap-start snap-always flex items-center justify-center overflow-hidden mt-44 lg:mt-34'>
            <div className='flex flex-col lg:flex-row justify-between items-center w-full h-full max-w-7xl mx-auto px-4 lg:px-8 '>
                {/* Image container - Left Side */}
                <div className='w-full lg:w-1/2 h-[50vh] lg:h-[80vh] flex items-center justify-center '>
                    <div className='w-full h-full max-w-md lg:max-w-lg bg-gray-300 rounded-lg flex items-center justify-center lg:mt-20'>
                        <img src={designBag} alt="" className='rounded-2xl'/>
                    </div>
                </div>
                
                {/* Content container - Right Side */}
                <div className='w-full lg:w-1/2 h-[50vh] lg:h-[80vh] flex flex-col justify-center items-start px-6 lg:px-12 py-8 lg:py-0 bg-white font-serif'>
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

export default Bags