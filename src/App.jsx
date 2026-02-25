import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import VerticalLine from "./components/VerticalLine";
import Hero from "./components/Hero";
import NameLoader from "./components/NameLoader"; // අලුත් NameLoader එක import කළා
import Work from "./components/Work";
import AboutText from "./components/AboutText";
import AboutDetails from "./components/AboutDetails";
import Contact from "./components/Contact";
import bgVideo from "./assets/videos/hero-video.mp4";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Lenis smooth scroll - පේජ් එක smooth විදිහට පහළට යන්න උදව් වෙනවා
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // දැනට ඉන්න section එක track කරන්න (Navbar එක සඳහා)
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
    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0c0c0e] min-h-screen text-white selection:bg-[#6366f1]/30 overflow-x-hidden relative">
      {/* 1. Loader: පලවෙනියටම නම Draw වෙන ඇනිමේෂන් එක පේනවා */}
      {loading && <NameLoader onFinished={() => setLoading(false)} />}

      {/* 2. Global Background Video: මේක පේන්නේ ලෝඩ් වුණාට පස්සේ */}
      {!loading && (
        <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#0c0c0e]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0c0c0e]/50" />
        </div>
      )}

      {/* 3. Main UI Content: ලෝඩ් වෙලා ඉවර වුණාම ලස්සනට මතු වෙනවා */}
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

        {/* Main Content Areas */}
        <main className="ml-[12%] md:ml-[18%] pr-[5%] md:pr-[4%] text-left relative z-10 bg-transparent">
          <section id="hero" className="w-full min-h-screen flex items-center">
            <Hero />
          </section>

          <section id="work" className="w-full pt-32">
            <Work />
          </section>

          <section id="about" className="w-full pt-32">
            <AboutText />
            <AboutDetails />
          </section>

          <section id="contact" className="w-full pt-32 pb-20">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
