import React from "react";
import { motion } from "framer-motion";

const AboutText = () => {
  const text =
    "Bringing digital visions to reality with clean, elegant code and a creative magic. I specialize in building performant, responsive web applications and engaging user experiences that leave a lasting impression. Let's create something remarkable together.";

  // වචන ටික වෙන් කරගන්නවා
  const words = text.split(" ");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-[60vh] flex items-center px-[5%] py-32">
      <div className="max-w-5xl ml-[15%]">
        <motion.div
          style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-white text-2xl md:text-5xl font-medium leading-[1.2] tracking-tighter"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className="mr-[12px] mb-[8px]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="group flex items-center gap-4 text-brand font-black uppercase tracking-[0.4em] text-xs"
          >
            <span className="w-12 h-[1px] bg-brand/30 group-hover:w-20 transition-all duration-500"></span>
            Let's talk...
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutText;
