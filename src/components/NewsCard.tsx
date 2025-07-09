import { motion } from "framer-motion";
import type { NewsItem } from "@/types";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <motion.div 
      className="news-card group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="news-card-image w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="pt-4 pb-2">
        <span className="text-xs uppercase tracking-wider font-medium">{news.event}</span>
        <h3 className="text-xl font-medium mt-2">{news.title}</h3>
        <p className="mt-2 text-gray-600">{news.description}</p>
      </div>
    </motion.div>
  );
};

export default NewsCard;
