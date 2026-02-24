import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

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

  // 2. Animations (Hero Reveal & Custom Cursor)
  useGSAP(
    () => {
      // Hero Text Reveal
      gsap.from(".reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Custom Cursor Logic
      const moveCursor = (e) => {
        gsap.to("#cursor", {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
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
    // Fragment එකක් පාවිච්චි කළා cursor එක සහ main div එක දෙකම එකට තියන්න
    <>
      <div
        id="cursor"
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:block"
      ></div>

      <div ref={container} className="bg-[#0a0a0a] text-[#ededed] min-h-screen">
        {/* Navbar */}
        <nav className="p-8 flex justify-between items-center fixed top-0 w-full z-50 mix-blend-difference">
          <div className="text-lg font-bold tracking-tighter">M.PRABATH</div>
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <a href="#work" className="hover:opacity-100 transition">
              Work
            </a>
            <a href="#" className="hover:opacity-100 transition">
              About
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Contact
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

        {/* Work Section */}
        <section
          id="work"
          className="px-10 md:px-20 py-20 border-t border-white/10"
        >
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
      </div>
    </>
  );
}

export default App;
