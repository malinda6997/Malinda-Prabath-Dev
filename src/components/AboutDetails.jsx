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
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "MongoDB",
    "Framer Motion",
  ];
  const skillString = `'${allSkills.join("', '")}'`;

  return (
    <section className="min-h-screen py-20 px-[5%] bg-transparent">
      <div className="max-w-5xl md:ml-[15%]">
        {/* 01: Class Definition */}
        <TypingLine
          lineNumber="01"
          text="class MalindaPrabath {"
          colorClass="text-purple-400"
          delay={0.2}
        />

        {/* 02-07: Constructor */}
        <div className="mt-2">
          <TypingLine
            lineNumber="02"
            text="  constructor() {"
            colorClass="text-purple-400"
            delay={0.5}
          />
          <div className="ml-4">
            <TypingLine
              lineNumber="03"
              text="    this.name = 'Malinda Prabath';"
              colorClass="text-white"
              delay={0.8}
            />
            <TypingLine
              lineNumber="04"
              text="    this.email = 'malindaprabath876@gmail.com';"
              colorClass="text-white"
              delay={1.1}
            />
            <TypingLine
              lineNumber="05"
              text="    this.status = 'Open to work';"
              colorClass="text-white"
              delay={1.4}
            />
          </div>
          <TypingLine
            lineNumber="06"
            text="  }"
            colorClass="text-purple-400"
            delay={1.7}
          />
        </div>

        {/* 07-13: Education Section */}
        <div className="mt-4">
          <TypingLine
            lineNumber="07"
            text="  education() {"
            colorClass="text-yellow-300"
            delay={2.0}
          />
          <div className="ml-4 border-l border-white/5 pl-2">
            <TypingLine
              lineNumber="08"
              text="    return ["
              colorClass="text-purple-400"
              delay={2.3}
            />
            <div className="ml-4">
              <TypingLine
                lineNumber="09"
                text="{ '2020-2023' : 'BSc in Computer Science - University of Colombo' },"
                colorClass="text-green-400"
                delay={2.6}
              />
              <TypingLine
                lineNumber="10"
                text="{ '2018-2020' : 'G.C.E Advanced Level (Physical Science)' }"
                colorClass="text-green-400"
                delay={2.9}
              />
            </div>
            <TypingLine
              lineNumber="11"
              text="    ];"
              colorClass="text-purple-400"
              delay={3.2}
            />
          </div>
          <TypingLine
            lineNumber="12"
            text="  }"
            colorClass="text-yellow-300"
            delay={3.5}
          />
        </div>

        {/* 13-18: Achievement Section */}
        <div className="mt-4">
          <TypingLine
            lineNumber="13"
            text="  achievements() {"
            colorClass="text-yellow-300"
            delay={3.8}
          />
          <div className="ml-4 border-l border-white/5 pl-2">
            <TypingLine
              lineNumber="14"
              text="    return ["
              colorClass="text-purple-400"
              delay={4.1}
            />
            <div className="ml-4">
              <TypingLine
                lineNumber="15"
                text="'Winner - Inter University Hackathon 2024',"
                colorClass="text-green-400"
                delay={4.4}
              />
              <TypingLine
                lineNumber="16"
                text="'Certified Full Stack Developer - Meta'"
                colorClass="text-green-400"
                delay={4.7}
              />
            </div>
            <TypingLine
              lineNumber="17"
              text="    ];"
              colorClass="text-purple-400"
              delay={5.0}
            />
          </div>
          <TypingLine
            lineNumber="18"
            text="  }"
            colorClass="text-yellow-300"
            delay={5.3}
          />
        </div>

        {/* 19-24: Languages Section */}
        <div className="mt-4">
          <TypingLine
            lineNumber="19"
            text="  languages() {"
            colorClass="text-yellow-300"
            delay={5.6}
          />
          <div className="ml-4 border-l border-white/5 pl-2">
            <TypingLine
              lineNumber="20"
              text="    return ["
              colorClass="text-purple-400"
              delay={5.9}
            />
            <div className="ml-4">
              <TypingLine
                lineNumber="21"
                text="'Sinhala (Native)', 'English (Professional)', 'Japanese (Basic)'"
                colorClass="text-green-400"
                delay={6.2}
              />
            </div>
            <TypingLine
              lineNumber="22"
              text="    ];"
              colorClass="text-purple-400"
              delay={6.5}
            />
          </div>
          <TypingLine
            lineNumber="23"
            text="  }"
            colorClass="text-yellow-300"
            delay={6.8}
          />
        </div>

        {/* 24-25: Skills & Closing */}
        <div className="mt-4">
          <TypingLine
            lineNumber="24"
            text="  skills() { return [ "
            colorClass="text-yellow-300"
            delay={7.1}
          />
          <TypingLine
            lineNumber=""
            text={`    ${skillString}`}
            colorClass="text-green-400"
            delay={7.4}
          />
          <TypingLine
            lineNumber="25"
            text="  ] }"
            colorClass="text-yellow-300"
            delay={7.7}
          />
        </div>

        <TypingLine
          lineNumber="26"
          text="}"
          colorClass="text-purple-400"
          delay={8.0}
        />
      </div>
    </section>
  );
};

export default AboutDetails;
