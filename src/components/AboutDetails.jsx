import React from "react";
import { motion } from "framer-motion";

const TypingLine = ({
  text,
  delay = 0,
  colorClass = "text-green-400",
  lineNumber,
}) => {
  const letters = Array.from(text);
  return (
    <div className="flex gap-6 items-start group">
      {/* Line Number */}
      <span className="text-gray-700 text-[10px] w-4 text-right select-none font-mono pt-1">
        {lineNumber}
      </span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.015, delayChildren: delay }}
        className={`font-mono ${colorClass} leading-relaxed flex-1`}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, display: "none" },
              visible: { opacity: 1, display: "inline" },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

const AboutDetails = () => {
  const allSkills = [
    "HTML/CSS/JS",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Tailwind",
    "Bootstrap",
    "Framer Motion",
    "Lenis",
    "Vite",
    "Webpack",
    "Git/GitHub",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Postman",
    "Figma",
    "UI/UX Design",
    "Responsive Design",
    "Vercel",
    "Netlify",
    "JavaScript ES6+",
    "TypeScript",
    "Redux",
    "REST APIs",
    "JWT",
    "Python",
    "C#",
    "Photoshop",
  ];

  const skillString = `'${allSkills.join("', '")}'`;

  return (
    <section className="min-h-screen py-20 px-[5%] bg-[#0c0c0e]">
      <div className="max-w-5xl md:ml-[15%]">
        {/* 01: Class definition */}
        <TypingLine
          lineNumber="01"
          text="class MalindaPrabath {"
          colorClass="text-purple-400"
          delay={0.2}
        />

        {/* 02-03: Comments */}
        <div className="mt-1">
          <TypingLine
            lineNumber="02"
            text="  // I can, because I did."
            colorClass="text-gray-600 italic"
            delay={0.6}
          />
          <TypingLine
            lineNumber="03"
            text="  // Full-stack developer with a passion for clean code."
            colorClass="text-gray-600 italic"
            delay={1.0}
          />
        </div>

        {/* 04-08: Constructor */}
        <div className="mt-4">
          <TypingLine
            lineNumber="04"
            text="  constructor() {"
            colorClass="text-purple-400"
            delay={1.5}
          />
          <div className="ml-4 border-l border-white/5 pl-2">
            <TypingLine
              lineNumber="05"
              text="    this.name = 'Malinda Prabath';"
              colorClass="text-white"
              delay={2.0}
            />
            <TypingLine
              lineNumber="06"
              text="    this.email = 'malindaprabath876@gmail.com';"
              colorClass="text-white"
              delay={2.5}
            />
            <TypingLine
              lineNumber="07"
              text="    this.status = 'Open to work';"
              colorClass="text-white"
              delay={2.8}
            />
          </div>
          <TypingLine
            lineNumber="08"
            text="  }"
            colorClass="text-purple-400"
            delay={3.0}
          />
        </div>

        {/* 09-15: Work Experience Section (අලුතින් එකතු කළා) */}
        <div className="mt-4">
          <TypingLine
            lineNumber="09"
            text="  workExperience() {"
            colorClass="text-yellow-300"
            delay={3.2}
          />
          <div className="ml-4 border-l border-white/5 pl-2">
            <div className="flex gap-6 items-start">
              <span className="text-gray-700 text-[10px] w-4 text-right select-none pt-1">
                10
              </span>
              <span className="text-purple-400 font-mono"> return [</span>
            </div>
            <div className="ml-8">
              <TypingLine
                lineNumber="11"
                text="      { '2024-Present' : 'Junior Web Developer' },"
                delay={3.6}
                colorClass="text-green-400"
              />
              <TypingLine
                lineNumber="12"
                text="      { '2023-2024'    : 'Freelance Frontend Developer' },"
                delay={4.0}
                colorClass="text-green-400"
              />
              <TypingLine
                lineNumber="13"
                text="      { '2022-2023'    : 'UI/UX Design Intern' }"
                delay={4.4}
                colorClass="text-green-400"
              />
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-gray-700 text-[10px] w-4 text-right select-none pt-1">
                14
              </span>
              <span className="text-purple-400 font-mono ml-4"> ];</span>
            </div>
          </div>
          <TypingLine
            lineNumber="15"
            text="  }"
            colorClass="text-yellow-300"
            delay={4.8}
          />
        </div>

        {/* 16-20: Skills Section */}
        <div className="mt-4">
          <TypingLine
            lineNumber="16"
            text="  skills() {"
            colorClass="text-yellow-300"
            delay={5.2}
          />
          <div className="ml-4 border-l border-white/5 pl-2">
            <div className="flex gap-6 items-start">
              <span className="text-gray-700 text-[10px] w-4 text-right select-none pt-1">
                17
              </span>
              <span className="text-purple-400 font-mono"> return [</span>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-gray-700 text-[10px] w-4 text-right select-none pt-1">
                18
              </span>
              <div className="flex-1 font-mono text-green-400 leading-7 ml-8">
                <TypingLine
                  lineNumber=""
                  text={skillString}
                  delay={5.5}
                  colorClass="text-green-400"
                />
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-gray-700 text-[10px] w-4 text-right select-none pt-1">
                19
              </span>
              <span className="text-purple-400 font-mono ml-4"> ];</span>
            </div>
          </div>
          <TypingLine
            lineNumber="20"
            text="  }"
            colorClass="text-yellow-300"
            delay={6.5}
          />
        </div>

        {/* 21: Closing Class */}
        <TypingLine
          lineNumber="21"
          text="}"
          colorClass="text-purple-400"
          delay={7.0}
        />
      </div>
    </section>
  );
};

export default AboutDetails;
