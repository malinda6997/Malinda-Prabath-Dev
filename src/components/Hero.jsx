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
    /* මෙතන id="hero" අනිවාර්යයෙන්ම තියෙන්න ඕනේ VerticalLine එකට අඳුනගන්න */
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pl-[2%]"
    >
      <div className="max-w-5xl">
        <h1 className="text-white text-5xl md:text-[95px] font-black leading-[0.85] tracking-tighter">
          Hi, my name is <span className="text-[#6366f1]">Malinda</span>
          <br />
          <span className="flex flex-wrap items-baseline gap-x-4">
            I{" "}
            <span className="font-serif-italic italic text-[#6366f1] lowercase">
              design
            </span>{" "}
            and develop
          </span>
          <div className="flex items-center mt-2">
            <span className="font-mono-custom text-[0.65em] opacity-80 text-white lowercase">
              {displayText}
            </span>
            {/* Typing Cursor */}
            <span className="inline-block w-[6px] h-[45px] md:h-[70px] bg-[#6366f1] ml-4 animate-pulse"></span>
          </div>
        </h1>

        <div className="mt-16 flex flex-col gap-2">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.6em] flex items-center gap-4">
            <span className="w-12 h-[1px] bg-white/10"></span>
            Let me show You...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
