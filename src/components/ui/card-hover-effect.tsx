import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title?: string;
    description?: string;
    link?: string;
    image?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      className={cn(
        "grid grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {item.image && (
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover rounded-2xl z-0"
              />
            )}
            {item.title && <CardTitle>{item.title}</CardTitle>}
            {item.description && <CardDescription>{item.description}</CardDescription>}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  product,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  product?: Product;
  href?: string; // new: navigate to product page when card (not button) clicked
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCartStore();
  const [, navigate] = useLocation();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();      // stop card click
    e.preventDefault();       // prevent navigation
    if (product) addToCart({ ...product, quantity: 1 });
  };

  const handleCardClick = () => {
    if (href) navigate(href);
  };

  const showCta = product && isHovered;

  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Content wrapper with bottom padding reserved for the button */}
      <div className={cn("relative z-10 h-full w-full p-4", product && "pb-20")}>
        {children}
      </div>

      {product && (
        <AnimatePresence>
          {showCta && (
            <motion.div
              className="absolute inset-x-0 bottom-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.18 }}
            >
              <Button
                type="button"
                onClick={handleAddToCart}
                className="w-full rounded-none bg-[#ff6900] text-white hover:bg-[#e55a00] h-12"
              >
                Add to Cart
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default HoverEffect;