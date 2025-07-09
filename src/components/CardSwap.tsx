


// import React from 'react'
import  CardSwapComponent, {Card} from '@/blocks/Components/CardSwap/CardSwap'
import  TrueFocus from '@/blocks/TextAnimations/TrueFocus/TrueFocus'
import bag1 from '@/assets/Bags/bag 1.jpg'
import bag2 from '@/assets/Bags/bag 2.jpg'
import bag3 from '@/assets/Bags/5.png'
import bag4 from '@/assets/Bags/1.png'
import bag5 from '@/assets/Bags/3.png'
import bag6 from '@/assets/Bags/4.png'
// import { Link } from 'react-router-dom'
import { Link } from 'wouter'
import { Button } from '@/components/ui/button'



const bags = [
    {
        image: bag4,
        title: 'Bag 1',
        description: 'This is the first bag'
    },
    {
        image: bag5,
        title: 'Bag 2',
        description: 'This is the second bag'
    },
    {
        image: bag3,
        title: 'Bag 3',
        description: 'This is the third bag'
    }, 
    {
        image: bag6,
        title: 'Bag 4',
        description: 'This is the fourth bag'
    }
]

function CardSwap() {
  return (

<div style={{ height: '625px', position: 'relative' }} className='w-full overflow-clip grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-[#060010] ' >
  <div className='flex flex-col items-center justify-center w-full h-full space-y-20 mt-5'>
    <div className='flex flex-col items-center justify-center space-y-2.5 text-white'>
      <h1 className='text-3xl text-white font-bold mb-4 flex flex-col items-center justify-center text-center'>
        <span>Crafted with care, carried with pride</span>
        <span>timeless bags for every journey</span>
      </h1>
        <TrueFocus 
          sentence="Elegance and durability in every stitch."
          manualMode={false}
          blurAmount={3}
          borderColor="blue"
          animationDuration={1}
          pauseBetweenAnimations={0.4}
         />
    </div>
    <Button className="flex bg-[#ff6900] text-white  hover:bg-[#e55a00] transition-colors font-medium text-2xl px-6 py-3 rounded-lg h-12 smw-96 flex-col items-center justify-center space-x-2">
            <Link href='/bags'>Discover More Bags</Link>
    </Button>

  </div>
  <div className='w-full h-full items-center justify-center relative hidden md:flex'>
    <CardSwapComponent
    cardDistance={60}
    verticalDistance={90}
    delay={2500}
    pauseOnHover={false}
  >
    {bags.map((bag, index) => (
    <Card key={index} className='border-black'>
        <div className='flex flex-col items-center justify-center h-full w-full relative'>
            {/* title and description at the top right of the card container */}
            <div className='absolute top-0.5 left-0.5 text-white border border-white p-2 rounded-lg bg-black bg-opacity-50 w-full'>
                <h2 className='text-lg font-bold'>{bag.title}</h2>
                <p className='text-sm'>{bag.description}</p>
            </div>

            {/* image container to cover the rest of the container */}
            <div className='w-full h-full absoulte top-52 left-0 mt-7 flex items-center justify-center'>
                <img src={bag.image} alt="bags" className='object-contain absolute h-72' />
            </div>
        </div>
    </Card>
    ))}
  </CardSwapComponent>
  </div>
</div>
  )
}

export default CardSwap