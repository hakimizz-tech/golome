import type { NewsItem, Product } from "@/types";
import { BAGS } from '@/lib/image-map';

export const newsItems: NewsItem[] = [
  {
    id: 1,
    imageUrl: "https://images.pexels.com/photos/15587720/pexels-photo-15587720.jpeg",
    event: "Met Gala 2025",
    title: "The Standout Looks That Defined Fashion's Biggest Night",
    description: "From avant-garde interpretations to classic elegance, the stars brought their sartorial best to the red carpet.",
    className: "md:col-span-1"
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/3644043/pexels-photo-3644043.jpeg",
    event: "Sundance Film Festival 2025",
    title: "Riviera Chic: The Most Elegant Ensembles at Cannes",
    description: "Stars blended classic Hollywood glamour with contemporary trends at this year's prestigious film festival.",
    className: "md:col-span-1"
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/17975090/pexels-photo-17975090.jpeg",
    event: "American Music Awards",
    title: "Music's Fashion Forward: Statement Pieces That Stole the Show",
    description: "Musicians pushed the boundaries of fashion with bold choices that reflected their artistic personas.",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    id: 4,
    imageUrl: "https://images.pexels.com/photos/32777150/pexels-photo-32777150.jpeg",
    event: "Paris Fashion Week 2024",
    title: "A Week of Redefined Silhouettes and Bold Statements",
    description: "The runways of Paris were dominated by a mix of architectural precision and fluid, romantic designs.",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    id: 5,
    imageUrl: "https://images.pexels.com/photos/31356349/pexels-photo-31356349.jpeg",
    event: "London Fashion Week 2024",
    title: "Emerging Designers and Sustainable Fashion Take Center Stage",
    description: "London's fashion scene buzzed with innovative designs from up-and-coming talent and a strong focus on sustainability.",
    className: "md:col-span-1"
  },
  // {
  //   id: 6,
  //   imageUrl: "https://images.pexels.com/photos/16035780/pexels-photo-16035780.jpeg",
  //   event: "Milan Fashion Week 2024",
  //   title: "Italian Craftsmanship and Modern Luxury",
  //   description: "Milan showcased the best of Italian fashion, with a blend of timeless craftsmanship and contemporary luxury.",
  //   className: "md:col-span-1"
  // }
];

export const products: Product[] = [
    { id: 1,
      name: 'Tote Bag', 
      price: 5000, 
      description: 'A classic tote bag for everyday use.', 
      images: BAGS.bag1, 
      category: 'Bags' 
    },

    { id: 2, 
      name: 'Shoulder Bag', 
      price: 4500, 
      description: 'A stylish shoulder bag for any occasion.', 
      images: BAGS.bag2,
      category: 'Bags' 
    },

    { id: 3, 
      name: 'Crossbody Bag', 
      price: 4000, 
      description: 'A versatile crossbody bag for hands-free convenience.', 
      images: BAGS.bag3, 
      category: 'Bags' 
    },

    { id: 4, 
      name: 'Backpack', 
      price: 6000, 
      description: 'A durable backpack for work or travel.', 
      images: BAGS.bag4, 
      category: 'Bags' 
    },

    { id: 5, 
      name: 'Clutch', 
      price: 3500, 
      description: 'An elegant clutch for evening events.', 
      images: BAGS.bag5, 
      category: 'Bags' 
    },

    { id: 6, 
      name: 'Hobo Bag', 
      price: 5500, 
      description: 'A spacious hobo bag with a relaxed silhouette.', 
      images: BAGS.bag6, 
      category: 'Bags' 
    },
];