import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import defaultImg from "../assets/project images/p1.png";

const projects = [
  { id: "01", title: "National Geographic", image: defaultImg, link: "#" },
  { id: "02", title: "Hotel z Rowerem", image: defaultImg, link: "#" },
  { id: "03", title: "Decablog App", image: defaultImg, link: "#" },
  { id: "04", title: "Data Driven", image: defaultImg, link: "#" },
  { id: "05", title: "Royal Cars", image: defaultImg, link: "#" },
  { id: "06", title: "Creative Agency", image: defaultImg, link: "#" },
  { id: "07", title: "Fintech Hub", image: defaultImg, link: "#" },
  { id: "08", title: "E-Commerce", image: defaultImg, link: "#" },
  { id: "09", title: "Social Connect", image: defaultImg, link: "#" },
  { id: "10", title: "Portfolio V1", image: defaultImg, link: "#" },
  { id: "11", title: "Weather App", image: defaultImg, link: "#" },
  { id: "12", title: "Task Manager", image: defaultImg, link: "#" },
  { id: "13", title: "Fitness Tracker", image: defaultImg, link: "#" },
  { id: "14", title: "Travel Guide", image: defaultImg, link: "#" },
  { id: "15", title: "Learning Portal", image: defaultImg, link: "#" },
];

const ProjectCard = ({ project, index }) => {
  const tiltRef = useRef(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      scale: 1.05,
      perspective: 1000,
      gyroscope: true,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`w-full flex ${isLeft ? "justify-start" : "justify-end"} mb-40 md:mb-72 px-4 md:px-12`} // Padding පොඩ්ඩක් වැඩි කළා
    >
      <div
        ref={tiltRef}
        className="relative w-full md:w-[50%] group transform-gpu" // Width එක 55% ඉඳන් 50% ට අඩු කළා
        style={{ transformStyle: "preserve-3d" }}
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="relative overflow-hidden rounded-md bg-[#161618] border border-white/5 shadow-2xl"
            style={{ transform: "translateZ(20px)" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            />
          </div>

          <div
            className={`absolute top-1/2 -translate-y-1/2 z-20 w-full flex flex-col 
              ${isLeft ? "items-start -left-6 md:-left-12" : "items-end -right-6 md:-right-12"}`} // Alignment එක තව පොඩ්ඩක් ඇතුළට ගත්තා
            style={{ transform: "translateZ(100px)" }}
          >
            <span className="text-[#6366f1] text-[10px] font-black tracking-widest mb-3 opacity-60">
              {project.id} // PROJECT
            </span>

            <h3 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.8] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
              {project.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h3>

            <div className="w-20 md:w-40 h-[1.5px] bg-white/10 mt-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#6366f1] -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>

            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
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
      className="relative min-h-screen py-40 px-[2%] md:px-[5%] overflow-x-hidden"
    >
      {" "}
      {/* overflow-x-hidden එක අනිවාර්යයි */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.01] uppercase pointer-events-none select-none">
        Works
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
