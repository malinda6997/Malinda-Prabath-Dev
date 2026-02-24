import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

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
      // ඔයාගේ සයිට් එකේ තියෙන sections වල IDs මෙතන දාන්න
      const sections = ["hero", "work", "about", "contact"];

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section එක screen එකේ මැදට වගේ ආවම නම මාරු කරනවා
          if (rect.top <= 300 && rect.bottom >= 300) {
            setCurrentSection(id.toUpperCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-[16%] top-0 w-[1px] h-full bg-white/5 z-50 hidden md:block">
      <div className="absolute inset-0 bg-white/5"></div>

      {/* Scrolling Blue Line */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-[#6366f1] origin-top shadow-[0_0_15px_#6366f1]"
        style={{ scaleY, height: "100%" }}
      />

      {/* Dynamic Label - මේක තමයි section එක අනුව මාරු වෙන්නේ */}
      <div className="absolute top-[18%] left-0 flex flex-col items-start pl-6">
        <motion.div
          key={currentSection} // නම මාරු වෙද්දී animation එකක් එන්න
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#6366f1] text-[9px] font-black tracking-[0.4em] uppercase mb-4 whitespace-nowrap"
        >
          {currentSection} /&gt;
        </motion.div>

        <div className="absolute left-0 -translate-x-1/2 w-[8px] h-[8px] rounded-full bg-[#6366f1] shadow-[0_0_15px_#6366f1] z-10"></div>
      </div>
    </div>
  );
};

export default VerticalLine;
