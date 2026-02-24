import React, { useState, useEffect } from "react";
import heroVideo from "../assets/videos/hero-video.mp4";

const Hero = () => {
  const phrases = [
    "digital solutions",
    "modern web apps",
    "motion design",
    "creative code",
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    const targetText = phrases[index];
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((char, i) => {
            if (frame > i + 5) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      frame += 0.5;
      if (frame > targetText.length + 10) clearInterval(interval);
    }, 30);
    const timeout = setTimeout(
      () => setIndex((prev) => (prev + 1) % phrases.length),
      3500,
    );
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [index]);

  return (
    <section
      id="hero"
      // Mobile වලදී පවා වම් පැත්තටම align වෙන්න flex-start දැම්මා
      className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden px-[4%] md:pl-[2%]"
    >
      {/* --- Background Video Section --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-transparent to-[#0c0c0e] opacity-80"></div>
      </div>

      {/* --- Content Section --- */}
      <div className="relative z-10 max-w-5xl text-left">
        <h1 className="text-white text-4xl md:text-[95px] font-black leading-[1.1] md:leading-[0.85] tracking-tighter">
          Hi, my name is <span className="text-[#6366f1]">Malinda</span>
          <br />
          <span className="flex flex-wrap items-baseline gap-x-2 md:gap-x-4">
            I <span className="italic text-[#6366f1] lowercase">design</span>{" "}
            and develop
          </span>
          <div className="flex items-center mt-4 md:mt-2">
            <span className="font-mono text-[0.55em] md:text-[0.65em] opacity-80 text-white lowercase italic min-h-[1.2em]">
              {displayText}
            </span>
            <span className="inline-block w-[4px] md:w-[6px] h-[30px] md:h-[70px] bg-[#6366f1] ml-4 animate-pulse"></span>
          </div>
        </h1>

        <div className="mt-12 md:mt-16 flex flex-col items-start gap-2">
          <p className="text-white/20 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] flex items-center gap-4">
            <span className="w-8 md:w-12 h-[1px] bg-white/10"></span>
            Let me show You...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
