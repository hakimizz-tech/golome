import type { NewsItem, SliderImage } from "@/types";
// import image1 from '../assets/HeroImages/1.jpg'
import image2 from '../assets/HeroImages/2.jpg'
// import image3 from '../assets/HeroImages/3.jpg'
import image4 from '../assets/HeroImages/4.jpg'
import image5 from '../assets/HeroImages/5.jpg'
import image6 from '../assets/HeroImages/6.jpg'
import image7 from '../assets/HeroImages/7.jpg'
import image8 from '../assets/HeroImages/8.jpg'

import bag1 from '../assets/bags/1.png';
import bag2 from '../assets/bags/2.png';
import bag3 from '../assets/bags/3.png';
import bag4 from '../assets/bags/4.png';
import bag5 from '../assets/bags/5.png';


export const sliderImages: SliderImage[] = [
  {
    id: 1,
    imageUrl: image7,
    title: "The Art of Elegance",
    subtitle: "Redefining luxury through timeless aesthetic"
  },
  {
    id: 2,
    imageUrl: image2,
    title: "Bold Statements",
    subtitle: "Fashion that speaks volumes without saying a word"
  },
  {
    id: 3,
    imageUrl: image8,
    title: "Runway Revolution",
    subtitle: "Where innovation meets tradition"
  },
  {
    id: 4,
    imageUrl: image4,
    title: "Timeless Style",
    subtitle: "Classics reinvented for the modern wardrobe"
  },
  {
    id: 5,
    imageUrl: image5,
    title: "Contemporary Fashion",
    subtitle: "Bold designs for the modern trendsetter"
  },
  {
    id: 6,
    imageUrl: image6,
    title: "Effortless Chic",
    subtitle: "Discover the confidence that comes from impeccable style"
  }
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    event: "Met Gala 2025",
    title: "The Standout Looks That Defined Fashion's Biggest Night",
    description: "From avant-garde interpretations to classic elegance, the stars brought their sartorial best to the red carpet."
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    event: "Cannes Film Festival 2025",
    title: "Riviera Chic: The Most Elegant Ensembles at Cannes",
    description: "Stars blended classic Hollywood glamour with contemporary trends at this year's prestigious film festival."
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
    event: "American Music Awards",
    title: "Music's Fashion Forward: Statement Pieces That Stole the Show",
    description: "Musicians pushed the boundaries of fashion with bold choices that reflected their artistic personas."
  }
];


export const bagsData = [
  {
    id: 1,
    imageUrl: bag1,
    name: "Elegance Classic",
    description: "Crafted from the finest Italian leather, this timeless piece embodies sophistication and luxury. Perfect for the modern professional who values quality and style.",
    price: "$899",
    material: "Premium Italian Leather"
  },
  {
    id: 2,
    imageUrl: bag2,
    name: "Heritage Collection",
    description: "A masterpiece of traditional craftsmanship meets contemporary design. Hand-stitched details and superior leather quality make this an investment piece.",
    price: "$1,299",
    material: "Hand-Stitched Calfskin"
  },
  {
    id: 3,
    imageUrl: bag3,
    name: "Metropolitan Style",
    description: "Urban elegance redefined with sleek lines and functional design. The perfect companion for city life, combining durability with refined aesthetics.",
    price: "$749",
    material: "Soft Nappa Leather"
  },
  {
    id: 4,
    imageUrl: bag4,
    name: "Luxury Essence",
    description: "Where luxury meets functionality. This exquisite piece showcases the finest leather work with attention to every detail, creating an heirloom quality bag.",
    price: "$1,599",
    material: "Exotic Crocodile Leather"
  },
  {
    id: 5,
    imageUrl: bag5,
    name: "Contemporary Grace",
    description: "Modern elegance with a timeless appeal. Features premium leather construction and innovative design elements for the discerning fashion enthusiast.",
    price: "$999",
    material: "Buttery Soft Lambskin"
  }
];