import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "in/malinda-prabath",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/malinda-prabath-b401271a0/",
      color: "group-hover:text-[#6366f1]",
    },
    {
      name: "@malinda.prabath",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/malinda.prabath/",
      color: "group-hover:text-[#6366f1]",
    },
    {
      name: "github.com/malinda6997",
      icon: <FaGithub />,
      url: "https://github.com/malinda6997",
      color: "group-hover:text-[#6366f1]",
    },
    {
      name: "fb.com/malinda",
      icon: <FaFacebook />,
      url: "https://web.facebook.com/malinda.prabath.9465",
      color: "group-hover:text-[#6366f1]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 md:py-32 px-[6%] md:px-[5%] bg-transparent overflow-hidden"
    >
      {/* Mobile එකේදී margin-left එක අඩු කරලා desktop එකේදී md:ml-[15%] තැබුවා */}
      <div className="max-w-6xl md:ml-[15%] text-left">
        {/* Section Label */}
        <div className="mb-12 md:mb-20">
          <span className="text-[#6366f1] text-[10px] font-black tracking-[0.3em] uppercase opacity-50">
            Contact /&gt;
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {/* Social Links Section */}
          <div>
            <h3 className="text-white text-lg md:text-xl font-bold mb-8 md:mb-10 tracking-tight">
              Find me on:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="group flex items-center gap-4 text-white/40 hover:text-white transition-all duration-300"
                >
                  <span
                    className={`text-xl transition-colors duration-300 ${link.color}`}
                  >
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium tracking-wide truncate">
                    {link.name}
                  </span>
                </motion.a>
              ))}

              <motion.a
                href="mailto:malindaprabath876@gmail.com"
                className="group flex items-center gap-4 text-white/40 hover:text-white transition-all duration-300 sm:col-span-2 md:col-span-1"
              >
                <FaEnvelope className="text-xl group-hover:text-[#6366f1]" />
                <span className="text-sm font-medium tracking-wide truncate">
                  malindaprabath876@gmail.com
                </span>
              </motion.a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 pt-6 md:pt-10 items-start">
            <motion.a
              href="mailto:malindaprabath876@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto text-center px-10 py-4 bg-[#6366f1] text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all"
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ y: -3 }}
              className="w-full sm:w-auto text-center px-10 py-4 border border-white/10 text-white/60 text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <FaDownload /> Download CV
              </span>
            </motion.a>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="mt-32 md:mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Malinda Prabath. All Rights Reserved.
          </p>
          <p>Built with Passion & Code</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
