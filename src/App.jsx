import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef();
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [progress, setProgress] = useState(0);

  // 1. Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 2. Pre-loader
  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoaderFinished(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (!loaderFinished) return;

    // Vertical Line Animation
    gsap.from(".v-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power4.out",
    });

    // Content Reveal
    gsap.from(".reveal-text", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".reveal-text",
        start: "top 80%",
      },
    });
  }, [loaderFinished]);

  return (
    <div
      ref={container}
      className="bg-[#0c0c0e] text-[#a5a5a5] min-h-screen font-mono selection:bg-[#6366f1] selection:text-white"
    >
      {/* Loader */}
      {!loaderFinished && (
        <div className="fixed inset-0 z-[10000] bg-[#0c0c0e] flex items-center justify-center">
          <div className="text-2xl font-bold text-white tracking-[0.5em] uppercase">
            YASIO.PRO {progress}%
          </div>
        </div>
      )}

      {/* Vertical Line - Yasio Signature */}
      <div className="v-line fixed left-[10%] top-0 w-[1px] h-full bg-[#333333] z-50">
        <div className="absolute top-0 left-[-4px] w-2 h-2 bg-[#6366f1] rounded-full shadow-[0_0_10px_#6366f1]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[100] px-[12%]">
        <div className="text-white font-bold text-xl tracking-tighter cursor-pointer">
          <span className="text-[#6366f1]">&lt;</span> PRABATH{" "}
          <span className="text-[#6366f1]">/&gt;</span>
        </div>
        <div className="flex gap-6 text-[11px] uppercase tracking-widest font-bold">
          <a href="#work" className="hover:text-white transition">
            Work /&gt;
          </a>
          <a href="#lab" className="hover:text-white transition">
            Lab /&gt;
          </a>
          <a href="#about" className="hover:text-white transition">
            About /&gt;
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact /&gt;
          </a>
        </div>
      </nav>

      <main className="pl-[15%] pr-[10%]">
        {/* HERO SECTION */}
        <section className="h-screen flex flex-col justify-center">
          <p className="text-[#6366f1] mb-4 uppercase tracking-[0.3em] text-xs">
            Start /&gt;
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight max-w-4xl reveal-text">
            Hi, my name is <span className="text-[#6366f1]">M.Prabath</span>
            <br />i <span className="italic">design</span> and develop mo/ion
          </h1>
          <p className="mt-8 opacity-50 reveal-text">Let me show You...</p>
        </section>

        {/* WORK SECTION (Impact Mask Here) */}
        <section
          id="work"
          className="min-h-screen py-20 border-t border-[#1a1a1a]"
        >
          <p className="text-[#6366f1] mb-10 uppercase tracking-[0.3em] text-xs">
            Work /&gt;
          </p>
          <div className="relative w-full h-[60vh] overflow-hidden rounded-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-blue-and-purple-gradient-background-23424-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black mix-blend-multiply flex items-center justify-center">
              <h2 className="text-[15vw] font-black bg-white text-black w-full h-full flex items-center justify-center">
                IMPACT
              </h2>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION (Developer Style) */}
        <section id="about" className="py-20 border-t border-[#1a1a1a]">
          <p className="text-[#6366f1] mb-10 uppercase tracking-[0.3em] text-xs">
            About /&gt;
          </p>
          <div className="bg-[#16161a] p-10 rounded-lg font-mono text-sm border border-[#1a1a1a] shadow-2xl">
            <p className="text-[#6366f1]">
              class <span className="text-white">Prabath</span> {"{"}
            </p>
            <p className="pl-6 text-gray-500">// I can, because I did.</p>
            <p className="pl-6 text-white">
              <span className="text-[#6366f1]">constructor</span>() {"{"}
            </p>
            <p className="pl-12">
              this.<span className="text-[#6366f1]">name</span> ={" "}
              <span className="text-green-400">'M. Prabath'</span>
            </p>
            <p className="pl-12">
              this.<span className="text-[#6366f1]">email</span> ={" "}
              <span className="text-green-400">'hello@prabath.dev'</span>
            </p>
            <p className="pl-6 text-white">{"}"}</p>
            <p className="text-[#6366f1]">{"}"}</p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="h-[80vh] flex flex-col justify-center">
          <p className="text-[#6366f1] mb-10 uppercase tracking-[0.3em] text-xs">
            Contact /&gt;
          </p>
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-10">
            Find me on:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 underline">
            <a href="#" className="hover:text-[#6366f1]">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#6366f1]">
              GitHub
            </a>
            <a href="#" className="hover:text-[#6366f1]">
              Twitter
            </a>
            <a href="#" className="hover:text-[#6366f1]">
              Instagram
            </a>
          </div>
          <button className="mt-20 bg-[#6366f1] text-white px-10 py-4 rounded-full font-bold self-start hover:scale-105 transition shadow-[0_0_20px_#6366f1]">
            GET IN TOUCH
          </button>
        </section>
      </main>

      <footer className="p-10 text-[10px] opacity-30 text-center uppercase tracking-widest pl-[10%]">
        © Made with &lt;/&gt; by M.Prabath. Circa 2026.
      </footer>
    </div>
  );
}

export default App;
