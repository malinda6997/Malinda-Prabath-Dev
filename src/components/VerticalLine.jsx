import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const VerticalLine = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [currentSection, setCurrentSection] = useState("START");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work", "about", "contact"];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();

          // Section එක screen එක මැදට ආවම logic එක
          if (rect.top <= 350 && rect.bottom >= 350) {
            if (id === "about") {
              setCurrentSection("ABOUT ME");
            } else if (id === "hero") {
              setCurrentSection("START");
            } else {
              setCurrentSection(id.toUpperCase());
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Mobile එකේදී left-[8%] සහ Desktop එකේදී left-[16%] වෙන්න හැදුවා
    <div className="fixed left-[8%] md:left-[16%] top-0 w-[1px] h-full bg-white/5 z-50 transition-all duration-500">
      {/* Blue Progress Line */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-[#6366f1] origin-top shadow-[0_0_15px_#6366f1]"
        style={{ scaleY, height: "100%" }}
      />

      {/* Label Section */}
      <div className="absolute top-[18%] right-0 flex flex-col items-end pr-3 md:pr-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            // Mobile වලදී text size එක චුට්ටක් අඩු කළා (text-[8px])
            className="text-[#6366f1] text-[8px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase whitespace-nowrap"
          >
            {currentSection} /&gt;
          </motion.div>
        </AnimatePresence>

        {/* Line එක උඩ තියෙන Dot එක - Mobile වලට size හරි ගැස්සුවා */}
        <div className="absolute right-[-3px] md:right-[-4px] top-[4px] w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#6366f1] shadow-[0_0_15px_#6366f1] z-10"></div>
      </div>
    </div>
  );
};

export default VerticalLine;
