import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { name: 'in/malinda-prabath', icon: <FaLinkedin />, url: '#', color: 'group-hover:text-[#6366f1]' },
    { name: '@Malinda_Insta', icon: <FaInstagram />, url: '#', color: 'group-hover:text-[#6366f1]' },
    { name: 'github.com/malinda', icon: <FaGithub />, url: '#', color: 'group-hover:text-[#6366f1]' },
    { name: 'fb.com/malinda', icon: <FaFacebook />, url: '#', color: 'group-hover:text-[#6366f1]' },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-32 px-[5%] bg-[#0c0c0e] overflow-hidden">
      <div className="max-w-6xl md:ml-[15%]">
        
        {/* Section Label */}
        <div className="mb-20">
            <span className="text-[#6366f1] text-[10px] font-black tracking-[0.3em] uppercase opacity-50">
                Contact />
            </span>
        </div>

        <div className="grid md:grid-cols-1 gap-16">
          
          {/* Social Links Grid */}
          <div>
            <h3 className="text-white text-xl font-bold mb-10 tracking-tight">Find me on:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="group flex items-center gap-4 text-white/40 hover:text-white transition-all duration-300"
                >
                  <span className={`text-xl transition-colors duration-300 ${link.color}`}>{link.icon}</span>
                  <span className="text-sm font-medium tracking-wide">{link.name}</span>
                </motion.a>
              ))}
              
              {/* Email separately */}
              <motion.a
                href="mailto:malindaprabath876@gmail.com"
                className="group flex items-center gap-4 text-white/40 hover:text-white transition-all duration-300"
              >
                <FaEnvelope className="text-xl group-hover:text-[#6366f1]" />
                <span className="text-sm font-medium tracking-wide">malindaprabath876@gmail.com</span>
              </motion.a>
            </div>
          </div>

          {/* Action Buttons: Get in Touch & CV */}
          <div className="flex flex-wrap gap-8 pt-10">
            {/* Get In Touch Button */}
            <motion.a
              href="mailto:malindaprabath876@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#6366f1] text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all"
            >
              Get In Touch
            </motion.a>

            {/* CV Download Button */}
            <motion.a
              href="/cv.pdf" // public folder එකේ තියෙන ඔයාගේ CV එකේ නම මෙතනට දෙන්න
              download
              whileHover={{ y: -3 }}
              className="px-10 py-4 border border-white/10 text-white/60 text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all"
            >
              <span className="flex items-center gap-2">
                <FaDownload /> Download CV
              </span>
            </motion.a>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[10px] uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Malinda Prabath. All Rights Reserved.</p>
            <p>Built with Passion & Code</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;