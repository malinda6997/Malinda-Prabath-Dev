import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import defaultImg from "../assets/project images/p1.png";

const projects = [
  {
    id: "01",
    title: "National Geographic",
    image: defaultImg,
    link: "#",
    color: "#fbbf24",
  },
  {
    id: "02",
    title: "Hotel z Rowerem",
    image: defaultImg,
    link: "#",
    color: "#10b981",
  },
  {
    id: "03",
    title: "Decablog App",
    image: defaultImg,
    link: "#",
    color: "#3b82f6",
  },
  {
    id: "04",
    title: "Data Driven",
    image: defaultImg,
    link: "#",
    color: "#f472b6",
  },
  {
    id: "05",
    title: "Royal Cars",
    image: defaultImg,
    link: "#",
    color: "#6366f1",
  },
  {
    id: "06",
    title: "Creative Agency",
    image: defaultImg,
    link: "#",
    color: "#f59e0b",
  },
  {
    id: "07",
    title: "Fintech Hub",
    image: defaultImg,
    link: "#",
    color: "#06b6d4",
  },
  {
    id: "08",
    title: "E-Commerce",
    image: defaultImg,
    link: "#",
    color: "#8b5cf6",
  },
  {
    id: "09",
    title: "Social Connect",
    image: defaultImg,
    link: "#",
    color: "#ec4899",
  },
  {
    id: "10",
    title: "Portfolio V1",
    image: defaultImg,
    link: "#",
    color: "#2dd4bf",
  },
];

const ProjectCard = ({ project, index }) => {
  const tiltRef = useRef(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      // Mobile වලදී පෑඩින් චුට්ටක් වැඩි කරා
      className={`w-full flex ${isLeft ? "justify-start" : "justify-end"} mb-40 md:mb-72 px-2 md:px-0`}
    >
      <div
        ref={tiltRef}
        className="relative w-[90%] md:w-[55%] group"
        style={{ transformStyle: "preserve-3d" }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative"
        >
          <div className="relative overflow-hidden rounded-sm bg-[#161618] border border-white/5 shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Text Alignment Fix: Mobile වලදී ඇතුළට (left-4), Web වලදී එළියට (md:left-[-20%]) */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 z-30 flex flex-col pointer-events-none w-full md:w-auto
              ${
                isLeft
                  ? "left-4 md:left-[-20%] items-start text-left"
                  : "right-4 md:right-[-20%] items-end text-right"
              }`}
            style={{ transform: "translateZ(80px)" }}
          >
            <span
              className="text-[10px] md:text-xs font-black tracking-[0.3em] mb-2 md:mb-4 opacity-70"
              style={{ color: project.color }}
            >
              {project.id} // PROJECT
            </span>

            {/* Mobile වලදී අකුරු සයිස් එක පොඩ්ඩක් අඩු කරා කැපෙන්නේ නැති වෙන්න */}
            <h3 className="text-white text-2xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
              {project.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h3>

            <div
              className="h-[2px] md:h-[3px] mt-4 md:mt-8 w-12 md:w-32 transition-all duration-700"
              style={{ backgroundColor: project.color }}
            />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section
      id="work"
      className="relative py-40 px-[4%] md:px-[10%] bg-transparent overflow-x-hidden"
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.015] uppercase pointer-events-none select-none z-0">
        BLESSED
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Work;
