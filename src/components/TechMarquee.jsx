import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Original Logo
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E] bg-black" />,
  },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#] bg-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#3ccd76]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#00d752]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#1f6d18] bg-white" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
];

export default function TechMarquee() {
  const duplicated = [...skills, ...skills];

  return (
    <section>
      <div className="py-16 bg-bg-secondary overflow-hidden relative">
        <h2 className="text-3xl font-bold text-text-primary text-center mb-10">
          Tech Stack
        </h2>

        <div className="flex overflow-hidden relative">
          <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
            {duplicated.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl glass shadow-premium text-text-primary font-bold text-lg border border-accent"
              >
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r  to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l  to-transparent"></div>

      </div>
    </section>
  );
}
