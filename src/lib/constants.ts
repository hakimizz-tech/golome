import type { NewsItem, SliderImage } from "@/types";
// import image1 from '../assets/HeroImages/1.jpg'
// import image2 from '../assets/HeroImages/2.jpg'
// import image3 from '../assets/HeroImages/3.jpg'
// import image4 from '../assets/HeroImages/4.jpg'
// import image5 from '../assets/HeroImages/6.jpg'
// import image7 from '../assets/HeroImages/7.jpg'
// import image8 from '../assets/HeroImages/8.jpg'

export const sliderImages: SliderImage[] = [
  {
    id: 1,
    imageUrl: "https://i.ibb.co/7JPBCjwd/PXL-20250321-100150236-PORTRAIT.jpg",
    title: "The Art of Elegance",
    subtitle: "Redefining luxury through timeless aesthetic"
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/60krtxJw/PXL-20250321-144556857-PORTRAIT.jpg",
    title: "Bold Statements",
    subtitle: "Fashion that speaks volumes without saying a word"
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/Kp1xM8X2/PXL-20250321-133258510-PORTRAIT.jpg",
    title: "Runway Revolution",
    subtitle: "Where innovation meets tradition"
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/dwSvLYyP/PXL-20250321-145251359-PORTRAIT-1.jpg",
    title: "Timeless Style",
    subtitle: "Classics reinvented for the modern wardrobe"
  },
  {
    id: 5,
    imageUrl: "https://i.ibb.co/TxtjYGv2/PXL-20250321-140700136-PORTRAIT.jpg",
    title: "Contemporary Fashion",
    subtitle: "Bold designs for the modern trendsetter"
  },
  // {
  //   id: 6,
  //   imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
  //   title: "Effortless Chic",
  //   subtitle: "Discover the confidence that comes from impeccable style"
  // }
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
    imageUrl: "https://i.ibb.co/xt70cRX2/1.png",
    name: "Elegance Classic",
    description: "Crafted from the finest Italian leather, this timeless piece embodies sophistication and luxury. Perfect for the modern professional who values quality and style.",
    price: "$899",
    material: "Premium Italian Leather"
  },
  {
    id: 2,
    imageUrl: "https://i.ibb.co/21zv2Cw0/2.png",
    name: "Heritage Collection",
    description: "A masterpiece of traditional craftsmanship meets contemporary design. Hand-stitched details and superior leather quality make this an investment piece.",
    price: "$1,299",
    material: "Hand-Stitched Calfskin"
  },
  {
    id: 3,
    imageUrl: "https://i.ibb.co/WvQ4vXWv/3.png",
    name: "Metropolitan Style",
    description: "Urban elegance redefined with sleek lines and functional design. The perfect companion for city life, combining durability with refined aesthetics.",
    price: "$749",
    material: "Soft Nappa Leather"
  },
  {
    id: 4,
    imageUrl: "https://i.ibb.co/cRMM2VW/4.png",
    name: "Luxury Essence",
    description: "Where luxury meets functionality. This exquisite piece showcases the finest leather work with attention to every detail, creating an heirloom quality bag.",
    price: "$1,599",
    material: "Exotic Crocodile Leather"
  },
  {
    id: 5,
    imageUrl: "https://i.ibb.co/p6Xp40Nb/5.png",
    name: "Contemporary Grace",
    description: "Modern elegance with a timeless appeal. Features premium leather construction and innovative design elements for the discerning fashion enthusiast.",
    price: "$999",
    material: "Buttery Soft Lambskin"
  }
]