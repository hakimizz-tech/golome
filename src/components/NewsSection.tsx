import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import NewsCard from "./NewsCard";
import { newsItems } from "@/lib/constants";
import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";

const NewsSection = () => {
  const getNewsItemClassName = (index: number) => {
    const patternIndex = index % 5;
    switch (patternIndex) {
      case 0:
        return "md:col-span-1";
      case 1:
        return "md:col-span-1";
      case 2:
        return "md:col-span-1 md:row-span-2";
      case 3:
        return "md:col-span-1";
      case 4:
        return "md:col-span-1";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl  text-black hf">Read our articles</h2>
        </div>
        <BentoGrid className="md:grid-cols-3">
          {newsItems.map((item, index) => (
            <BentoGridItem key={item.id} className={getNewsItemClassName(index)}>
              <NewsCard news={item} className="h-full" />
            </BentoGridItem>
          ))}
        </BentoGrid>
        <div className="text-center mt-12">
          <Button className="bg-white text-black border border-black hover:bg-[#000] hover:text-white pf rounded-full text-2xl cursor-pointer">
            READ MORE
            <MoveUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
