import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NameLoader = ({ onFinished }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // ඇනිමේෂන් එක ඉවර වුණාම ලෝඩර් එක හෙමින් අයින් කරන්න
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: onFinished,
          });
        },
      });

      // 1. අකුරු සුදු පාටින් (White) Draw වෙන එක
      tl.fromTo(
        ".name-path",
        { strokeDasharray: 1000, strokeDashoffset: 1000, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 3,
          stagger: 0.2,
          ease: "power2.inOut",
        },
      )
        // 2. අකුරු ඇතුළටත් සුදු පාට (White) පිරෙනවා
        .to(
          ".name-path",
          {
            fill: "#ffffff",
            duration: 1,
            stagger: 0.1,
          },
          "-=1",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onFinished]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-[#030303] flex items-center justify-center overflow-hidden"
    >
      <svg
        viewBox="0 0 800 200"
        className="w-[85%] md:w-[750px] h-auto relative z-10"
      >
        {/* Stroke color එක සුදු (#ffffff) වලට වෙනස් කළා */}
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* M */}
          <path
            className="name-path"
            d="M80 150 C 80 150 70 40 100 40 C 130 40 150 150 150 150 C 150 150 170 40 200 40 C 230 40 220 150 220 150"
          />
          {/* A */}
          <path
            className="name-path"
            d="M250 150 L300 40 L350 150 M270 110 Q 300 100 330 110"
          />
          {/* L */}
          <path className="name-path" d="M380 30 V 150 H 430" />
          {/* I */}
          <path className="name-path" d="M460 150 V 40 M450 40 H 470" />
          {/* N */}
          <path className="name-path" d="M500 150 V 40 L 570 150 V 40" />
          {/* D */}
          <path
            className="name-path"
            d="M600 150 V 40 Q 690 40 690 95 Q 690 150 600 150"
          />
          {/* A */}
          <path
            className="name-path"
            d="M720 150 L760 40 L800 150 M735 110 H 785"
          />
        </g>
      </svg>
    </div>
  );
};

export default NameLoader;
