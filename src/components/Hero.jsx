import React, { useState, useEffect } from "react";
// Video එක import කරගන්න (Path එක ඔයාගේ folder එකේ හැටියට බලන්න)
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
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pl-[2%]"
    >
      {/* --- Background Video Section --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30" // opacity එක 30% වගේ තියන්න එතකොට අකුරු ලස්සනට පේනවා
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Video එක උඩින් යන කළු පාට gradient එකක් (අකුරු තවත් පැහැදිලි වෙන්න) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-transparent to-[#0c0c0e] opacity-80"></div>
      </div>

      {/* --- Content Section (Content එක video එකට උඩින් තියෙන්න z-10 දානවා) --- */}
      <div className="relative z-10 max-w-5xl">
        <h1 className="text-white text-5xl md:text-[95px] font-black leading-[0.85] tracking-tighter">
          Hi, my name is <span className="text-brand">Malinda</span>
          <br />
          <span className="flex flex-wrap items-baseline gap-x-4">
            I{" "}
            <span className="font-serif-italic italic text-brand lowercase">
              design
            </span>{" "}
            and develop
          </span>
          <div className="flex items-center mt-2">
            <span className="font-mono-custom text-[0.65em] opacity-80 text-white lowercase italic">
              {displayText}
            </span>
            <span className="inline-block w-[6px] h-[45px] md:h-[70px] bg-brand ml-4 animate-pulse"></span>
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
