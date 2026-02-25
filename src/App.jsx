import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import VerticalLine from "./components/VerticalLine";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Work from "./components/Work";
import AboutText from "./components/AboutText";
import AboutDetails from "./components/AboutDetails";
import Contact from "./components/Contact";
import Crosshair from "./components/Crosshair"; // නම හරියටම Crosshair කියලා ගත්තා
import bgVideo from "./assets/videos/hero-video.mp4";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleActiveSection = () => {
      const sections = ["hero", "work", "about", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <div className="bg-[#0c0c0e] min-h-screen text-white selection:bg-[#6366f1]/30 overflow-x-hidden relative">
      {/* 1. Crosshair - මේක තමයි අර Target එක පෙන්වන්නේ */}
      {!loading && (
        <Crosshair
          color="#6366f1" // අයියගේ Indigo theme එකට ගැළපෙන්න දුන්නා
          targeted={true}
        />
      )}

      {/* Global Background Video Container */}
      {!loading && (
        <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#0c0c0e]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0c0c0e]/50" />
        </div>
      )}

      {/* Loader */}
      {loading && <Loader onFinished={() => setLoading(false)} />}

      {/* Main UI Content */}
      <div
        className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 relative z-10`}
      >
        <VerticalLine />

        {/* Navbar */}
        <nav className="absolute top-0 w-full p-6 md:p-8 flex justify-between items-center z-[100] px-[6%] md:px-[4%]">
          <div className="text-white font-black text-lg md:text-xl tracking-tighter cursor-pointer">
            &lt;MALINDA<span className="text-[#6366f1]">/</span>&gt;
          </div>

          <div className="hidden md:flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] pr-[4%]">
            {[
              { name: "Start", id: "hero" },
              { name: "Work", id: "work" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white border-b border-[#6366f1] pb-1"
                    : "text-white/30 hover:text-white"
                }`}
              >
                {item.name} /&gt;
              </a>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="ml-[12%] md:ml-[18%] pr-[5%] md:pr-[4%] text-left relative z-10 bg-transparent">
          <section id="hero" className="w-full">
            <Hero />
          </section>

          <section id="work" className="w-full">
            <Work />
          </section>

          <section id="about" className="w-full">
            <AboutText />
            <AboutDetails />
          </section>

          <section id="contact" className="w-full">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
