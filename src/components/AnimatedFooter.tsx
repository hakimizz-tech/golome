/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion"; // Removed MotionProps
import { Twitter, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import Newsletter from "@/pages/Newsletter"
import FAQ from "./FAQ";

// Removed unused MotionButton declaration

export function AnimatedFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Animation variants definitions remain unchanged
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    }
  };

  const socialButtonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.2
      }
    }
  };

  const hover = {
     scale: 1.1, 
     rotate: 5 
  };

  // Custom variant for list items
  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.6 + i * 0.1 
      }
    })
  };

  return (
    <footer ref={ref} className="bg-black text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-4 logo-font"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              GOLOME
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Your destination for timeless fashion
            </motion.p>
            <div>
              <motion.h4 
                className="font-semibold mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Connect with us
              </motion.h4>
              <motion.div 
                className="flex space-x-3"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {/* Twitter button - FIXED */}
                <motion.div variants={socialButtonVariants}>
                  <motion.div
                    whileHover={hover}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-white bg-opacity-10 rounded-full hover:bg-[#ff6900] transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Instagram button - FIXED */}
                <motion.div variants={socialButtonVariants}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-white bg-opacity-10 rounded-full hover:bg-[#ff6900] transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* MessageCircle button - FIXED */}
                <motion.div variants={socialButtonVariants}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-white bg-opacity-10 rounded-full hover:bg-[#ff6900] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold mb-4 hf"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Customer Service
            </motion.h4>
            <motion.ul 
              className="space-y-2 text-gray-300"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {["Email us", "Order"].map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  variants={listItemVariants}
                >
                  <a href="#" className="hover:text-[#ff6900] transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}

              {/* FAQs */}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: 0.9
                    }
                  }
                } as Variants}
              >
                <Drawer>
                  <DrawerTrigger asChild>
                    <Link href=""  className="hover:text-[#ff6900] transition-colors">
                      FAQs
                    </Link>
                  </DrawerTrigger>
                  <DrawerContent className=" w-full">
                    <div className="mx-auto w-full max-w-sm">
                      <FAQ />
                    </div>
                  </DrawerContent>
                </Drawer>
              </motion.li>

              
              {/* Newsletter */}
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: 0.9
                    }
                  }
                } as Variants}
              >
                <Drawer>
                  <DrawerTrigger asChild>
                    <Link href=""  className="hover:text-[#ff6900] transition-colors">
                      Newsletter
                    </Link>
                  </DrawerTrigger>
                  <DrawerContent className=" w-full">
                    <div className="mx-auto w-full max-w-sm">
                      <Newsletter />
                    </div>
                  </DrawerContent>
                </Drawer>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* About */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="font-semibold mb-4 hf"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              About GOLOME
            </motion.h4>
            <motion.ul 
              className="space-y-2 text-gray-300"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {["Values", "Team", "Culture", "About us"].map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  variants={listItemVariants}
                >
                  <a href="#" className="hover:text-[#ff6900] transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>          
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="flex items-center space-x-4 mb-4 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <a href="#" className="text-gray-300 hover:text-[#ff6900] transition-colors text-sm">
              Privacy policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-300 hover:text-[#ff6900] transition-colors text-sm">
              Cookie settings
            </a>
          </motion.div>
          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            ©2025 GOLOME ALL RIGHT RESERVED
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
}