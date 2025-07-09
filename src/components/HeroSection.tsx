// "use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

import runaway1 from "@/assets/Design-image/image 5.jpg"
import runaway2 from "@/assets/Design-image/runaway2.jpg"
import runaway3 from "@/assets/Design-image/runaway3.jpg"
import runaway4 from "@/assets/Design-image/runaway4.jpg"
import runaway5 from "@/assets/Design-image/runaway5.jpg"
import runaway6 from "@/assets/Design-image/runaway6.jpg"
import runaway7 from "@/assets/Design-image/runaway7.jpg"
import runaway8 from "@/assets/Design-image/runaway8.jpg"
import runaway9 from "@/assets/Design-image/runaway9.jpg"

export function HeroSection() {
  return <HeroParallax products={products} />;
}
const products = [
  {
    title: "Elegance",
    link: "",
    thumbnail: runaway1
  },
  {
    title: "Unique",
    link: "",
    thumbnail:
      runaway2,
  },
  {
    title: "Extravagance",
    link: "",
    thumbnail:
      runaway3,
  },

  {
    title: "Glamour",
    link: "",
    thumbnail:
      runaway4,
  },
  {
    title: "Vibrance",
    link: "",
    thumbnail:
      runaway5,
  },
  {
    title: "Boldness in Blue",
    link: "",
    thumbnail:
     runaway6,
  },

  {
    title: "Red-hot Passion",
    link: "",
    thumbnail:
      runaway7,
  },
  {
    title: "Opulent",
    link: "",
    thumbnail:
      runaway4,
  },
  {
    title: "Modern Chic",
    link: "",
    thumbnail:
      runaway9,
  },
  {
    title: "SmartBridge",
    link: "",
    thumbnail:
     runaway1,
  },
  {
    title: "Exquisite Designs",
    link: "",
    thumbnail:
      runaway1,
  },

  {
    title: "Opulent",
    link: "",
    thumbnail:
      runaway5,
  },
  {
    title: "Ravishing",
    link: "",
    thumbnail:
      runaway8,
  },
  {
    title: "Dazzling",
    link: "",
    thumbnail:
      runaway6,
  },
  {
    title: "Luminous",
    link: "",
    thumbnail:
     runaway9,
  },
];
