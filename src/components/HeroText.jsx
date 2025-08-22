import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
      {/* Mobile View */}
      <div className="block md:hidden space-y-4 px-4">
        <motion.h1
          className="text-3xl sm:text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Rahul
        </motion.h1>
        
        <div className="space-y-3">
          <motion.p
            className="text-3xl sm:text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="min-h-[4rem] flex items-center justify-center"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-4xl sm:text-5xl md:text-6xl"
            />
          </motion.div>
          
          <motion.p
            className="text-3xl sm:text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Applications
          </motion.p>
        </div>
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:block text-left px-6 lg:px-8">
        <motion.h1
          className="text-4xl lg:text-5xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm Rahul
        </motion.h1>
        
        <div className="space-y-4 mt-6">
          <motion.p
            className="text-5xl lg:text-6xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="min-h-[6rem] flex items-center"
          >
            <FlipWords
              words={words}
              className="font-black text-white text-7xl lg:text-8xl"
            />
          </motion.div>
          
          <motion.p
            className="text-4xl lg:text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
