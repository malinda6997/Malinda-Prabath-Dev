import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import VerticalLine from "./components/VerticalLine";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Work from "./components/Work";
import AboutText from "./components/AboutText";
import AboutDetails from "./components/AboutDetails";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 }); // smooth scroll එකට
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0c0c0e] min-h-screen text-white">
      {loading && <Loader onFinished={() => setLoading(false)} />}

      <VerticalLine />

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[100] px-[4%]">
        <div className="text-white font-black text-xl tracking-tighter cursor-pointer">
          &lt;MALINDA<span className="text-[#6366f1]">/</span>&gt;
        </div>

        <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] pr-[4%]">
          <a
            href="#hero"
            className="text-white hover:text-[#6366f1] transition"
          >
            Start /&gt;
          </a>
          <a href="#work" className="text-white/30 hover:text-white transition">
            Work /&gt;
          </a>
          <a href="#lab" className="text-white/30 hover:text-white transition">
            Lab /&gt;
          </a>
          <a
            href="#about"
            className="text-white/30 hover:text-white transition"
          >
            About /&gt;
          </a>
          <a
            href="#contact"
            className="text-white/30 hover:text-white transition"
          >
            Contact /&gt;
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-[18%] pr-[4%]">
        {/* 1. Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* 2. Work Section */}
        <div id="work">
          <Work />
        </div>

        {/* 3. About Sections (මේ දෙකම එකම ID එකක් යටතට ගත්තා) */}
        <div id="about">
          <AboutText />
          <AboutDetails />
        </div>

        {/* 4. Contact Section */}
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
