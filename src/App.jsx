import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import VerticalLine from "./components/VerticalLine";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Work from "./components/Work";

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
    <div className="bg-[#0c0c0e] min-h-screen">
      {loading && <Loader onFinished={() => setLoading(false)} />}

      <VerticalLine />

      {/* Navigation - px-[4%] නිසා Logo එක වම් කෙළවරටම යනවා */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[100] px-[4%]">
        <div className="text-white font-black text-xl tracking-tighter cursor-pointer">
          &lt;MALINDA<span className="text-brand">/</span>&gt;
        </div>

        <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] pr-[4%]">
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

      {/* Main Content - Line එක ඇතුළට ගිය නිසා margin එක ml-[18%] කරා */}
      <main className="ml-[18%] pr-[4%]">
        <Hero />
        <Work />
      </main>
    </div>
  );
}

export default App;
