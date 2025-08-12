import { motion } from "framer-motion";
import type { NewsItem } from "@/types";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  news: NewsItem;
  className?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, className }) => {
  return (
    <motion.div 
      className={cn("news-card group overflow-hidden flex flex-col h-full", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="overflow-hidden rounded-t-xl h-64 lg:h-144 p-4">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="news-card-image w-full h-full rounded-md object-cover  transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="pt-4 pb-2 flex-1 flex flex-col">
        <span className="text-xs uppercase tracking-wider font-medium">{news.event}</span>
        <h3 className="text-xl font-medium mt-2">{news.title}</h3>
        <p className="mt-2 text-gray-600 text-sm flex-1">{news.description}</p>
      </div>
    </motion.div>
  );
};

export default NewsCard;
