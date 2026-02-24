import React, { useState, useEffect } from "react";

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
    <section className="min-h-screen flex flex-col justify-center pl-[5%]">
      <div className="max-w-4xl">
        {" "}
        {/* width එක පොඩ්ඩක් අඩු කරා */}
        <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
          Hi, my name is <span className="text-brand">Malinda</span>
          <br />I{" "}
          <span className="font-serif-italic italic text-brand lowercase">
            design
          </span>{" "}
          and develop <br />
          <span className="font-mono-custom text-[0.75em] opacity-80">
            {displayText}
          </span>
          <span className="inline-block w-2 h-8 md:h-12 bg-brand ml-4 align-middle animate-pulse"></span>
        </h1>
        <p className="mt-10 text-white/20 text-[10px] font-bold uppercase tracking-[0.6em] flex items-center gap-4">
          <span className="w-10 h-[1px] bg-white/10"></span>
          Let me show You...
        </p>
      </div>
    </section>
  );
};

export default Hero;
