import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import VerticalLine from "./components/VerticalLine";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Work from "./components/Work";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#0c0c0e] min-h-screen overflow-x-hidden">
      {loading && <Loader onFinished={() => setLoading(false)} />}

      <VerticalLine />

      {/* Header Navigation */}
      <nav className="fixed top-0 w-full p-10 flex justify-between items-center z-[100] px-[6%]">
        {/* Logo - Left Aligned */}
        <div className="text-white font-black text-xl tracking-tighter hover:scale-105 transition-transform cursor-pointer">
          &lt;MALINDA<span className="text-brand">/</span>&gt;
        </div>

        {/* Menu - Right Aligned */}
        <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-[0.4em]">
          <a href="#" className="text-white border-b border-brand pb-1">
            Start /&gt;
          </a>
          <a href="#work" className="text-white/30 hover:text-white transition">
            Work /&gt;
          </a>
          <a href="#" className="text-white/30 hover:text-white transition">
            Lab /&gt;
          </a>
          <a href="#" className="text-white/30 hover:text-white transition">
            About /&gt;
          </a>
          <a href="#" className="text-white/30 hover:text-white transition">
            Contact /&gt;
          </a>
        </div>
      </nav>

      {/* Main Content - Line එකට පස්සේ එන විදිහට Margin එක හැදුවා */}
      <main className="ml-[15%]">
        <Hero />
        <Work />
      </main>
    </div>
  );
}

export default App;
