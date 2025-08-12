import { HeroParallax } from "@/components/ui/hero-parallax";
import { DESIGN_IMAGES } from "@/lib/image-map";


export function HeroSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Elegance",
    link: "",
    thumbnail: DESIGN_IMAGES.image5
  },
  {
    title: "Unique",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway2 
  },
  {
    title: "Extravagance",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway3 
  },
  {
    title: "Glamour",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway4 
  },
  {
    title: "Vibrance",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway5 
  },
  {
    title: "Boldness in Blue",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway6 
  },
  {
    title: "Red-hot Passion",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway7 
  },
  {
    title: "Opulent",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway4 
  },
  {
    title: "Modern Chic",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway9 
  },
  {
    title: "SmartBridge",
    link: "",
    thumbnail: DESIGN_IMAGES.image5  
  },
  {
    title: "Exquisite Designs",
    link: "",
    thumbnail: DESIGN_IMAGES.image5  
  },
  {
    title: "Opulent",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway5 
  },
  {
    title: "Ravishing",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway8 
  },
  {
    title: "Dazzling",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway6 
  },
  {
    title: "Luminous",
    link: "",
    thumbnail: DESIGN_IMAGES.runaway9 
  },
];
