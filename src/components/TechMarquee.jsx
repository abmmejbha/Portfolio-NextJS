import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function TechMarquee() {
  const duplicated = [...skills, ...skills];

  return (
    <div className="py-16 bg-bg-secondary overflow-hidden relative">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-10">
        Tech Stack
      </h2>

      <div className="flex overflow-hidden relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {duplicated.map((skill, index) => (
            <div
              key={index}
             className="px-8 py-4 rounded-2xl glass shadow-premium text-text-primary font-bold text-lg border border-accent"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
