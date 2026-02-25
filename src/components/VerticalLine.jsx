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
    <div className="fixed left-[8%] md:left-[16%] top-0 w-[1px] h-full bg-white/5 z-50 transition-all duration-500">
      {/* Progress Line */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-[#6366f1] origin-top shadow-[0_0_15px_#6366f1]"
        style={{ scaleY, height: "100%" }}
      />

      <div
        className={`absolute top-[18%] flex flex-col w-[200px] pointer-events-none
        left-0 items-start pl-4 
        md:left-auto md:right-0 md:items-end md:pr-6 md:pl-0`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            // initial සහ exit වල x අගය 20 කළා (Slide වෙන දුර වැඩි කළා)
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            // Duration 0.2s සහ ease එක snap වෙන විදිහට හැදුවා
            transition={{
              duration: 0.2,
              ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for a "snappy" feel
            }}
            className="text-[#6366f1] text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase whitespace-nowrap bg-transparent/40 py-1 px-2 rounded-sm"
          >
            {currentSection} /&gt;
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute top-[10px] md:top-[12px] w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#6366f1] shadow-[0_0_15px_#6366f1] z-10
          left-[-3px] md:left-auto md:right-[-4px]"
        ></div>
      </div>
    </div>
  );
};

export default VerticalLine;
