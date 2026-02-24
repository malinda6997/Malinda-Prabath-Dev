import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // මේක අනිවාර්යයි
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// ScrollTrigger එක register කිරීම
gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef();

  // 1. Smooth Scroll (Lenis) Setup
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 2. Animations
  useGSAP(
    () => {
      // Hero Entrance
      gsap.from(".reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      // About Section - Text Reveal on Scroll
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        opacity: 0.1,
        y: 20,
        stagger: 0.1,
      });

      // Custom Cursor
      const moveCursor = (e) => {
        gsap.to("#cursor", {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    },
    { scope: container },
  );

  const projects = [
    {
      title: "Project One",
      category: "Web Design",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Project Two",
      category: "Development",
      img: "https://images.unsplash.com/photo-1635339001026-6194469446f2?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div
      ref={container}
      className="bg-[#0a0a0a] text-[#ededed] min-h-screen selection:bg-white selection:text-black"
    >
      {/* Custom Cursor */}
      <div
        id="cursor"
        className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:block -translate-x-1/2 -translate-y-1/2"
      ></div>

      {/* Navbar */}
      <nav className="p-8 flex justify-between items-center fixed top-0 w-full z-50 mix-blend-difference">
        <div className="text-lg font-bold tracking-tighter">M.PRABATH</div>
        <div className="flex gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
          <a href="#work" className="hover:opacity-100 transition">
            Work
          </a>
          <a href="#about" className="hover:opacity-100 transition">
            About
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-10 md:px-20">
        <div className="overflow-hidden">
          <h1 className="reveal text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase">
            Creative
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="reveal text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase text-gray-500">
            Developer
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 md:px-20 py-40 bg-zinc-950/50">
        <div className="max-w-4xl">
          <h2 className="text-zinc-500 uppercase text-xs mb-10 tracking-[0.3em]">
            01 / Introduction
          </h2>
          <p className="about-text text-3xl md:text-5xl font-medium leading-tight">
            I am a digital craftsman focusing on{" "}
            <span className="text-white">minimalist design</span> and{" "}
            <span className="text-white">high-performance</span> code.
            Transforming complex ideas into simple, beautiful experiences.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-10 md:px-20 py-20">
        <h2 className="text-4xl font-bold uppercase mb-16 tracking-tighter">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src={item.img}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  alt={item.title}
                />
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
                <p className="text-zinc-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="h-[40vh] flex items-center justify-center border-t border-white/5">
        <p className="opacity-30 uppercase tracking-widest text-xs">
          Scroll to Top
        </p>
      </footer>
    </div>
  );
}

export default App;
