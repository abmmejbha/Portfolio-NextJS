"use client";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E] bg-black rounded" />,
  },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  {
    name: "Next.js",
    icon: (
      <SiNextdotjs className="text-black dark:text-white bg-white dark:bg-slate-900 rounded-full p-0.5" />
    ),
  },
  { name: "Node.js", icon: <FaNodeJs className="text-[#3ccd76]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#00d752]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
];

function Skills() {
  // duplicating the skills array multiple times to create a longer
  // marquee effect without needing to loop infinitely in React
  // (which can cause performance issues)
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-20 overflow-hidden relative">
      {/* global CSS for the marquee animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          animation: marquee 45s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
          Tech Stack
        </h2>
        <p className="text-sm text-text-secondary text-center mt-4 skills-subtitle">
          Here are the technologies I work with:
        </p>
      </div>

      <div className="relative flex overflow-hidden w-full">
        {/* global CSS for the marquee animation */}
        <div className="flex whitespace-nowrap gap-6 py-4 animate-marquee-infinite will-change-transform">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="text-text-primary font-bold skills-card-main shrink-0 flex items-center gap-3"
            >
              <span className="text-4xl flex items-center justify-center shrink-0">
                {skill.icon}
              </span>
              <span className="text-xl font-bold tracking-wide truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* side fades */}
        <div className="skills-fade-left"></div>
        <div className="skills-fade-right"></div>
      </div>
    </section>
  );
}

export default Skills;
