import { AnimatePresence,  motion, type Variants } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";


interface CustomButtonProps{
    linkname?:string
    buttonName:string
    bgColor?:string
    textColor?:string
    hoverBgColor?:string
    hoverTextColor?:string
}


export const CustomButton = ({linkname, buttonName, bgColor, textColor, hoverTextColor, hoverBgColor}: CustomButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Button animation variants
  const buttonVariants: Variants = {
    default: {
      backgroundColor: bgColor ? bgColor: "transparent",
      color: textColor ? textColor: "#000000",
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: {
      backgroundColor: hoverBgColor ? hoverBgColor: "#000000",
      color: hoverTextColor ? hoverTextColor : "#FFFFFF",
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Icon animation variants
  const iconVariants = {
    default: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    enter: {
      y: 20,
      opacity: 0
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.button
      className="px-5 py-2 rounded-full border border-black flex items-center gap-2 overflow-hidden"
      variants={buttonVariants}
      initial="default"
      animate={isHovered ? "hover" : "default"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={linkname ? linkname : "#"}>{buttonName}</Link>
      <span className="relative w-4 h-4">
        <AnimatePresence mode="sync">
          {!isHovered ? (
            <motion.div
              key="default-icon"
              className="absolute"
              variants={iconVariants}
              initial="default"
              exit="exit"
            >
              <MoveUpRight size={16} />
            </motion.div>
          ) : (
            <motion.div
              key="hover-icon"
              className="absolute"
              variants={iconVariants}
              initial="enter"
              animate="hover"
            >
              <MoveUpRight size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
};
