"use client";
import { motion } from "framer-motion";
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
  SiMongodb
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E] bg-black rounded" />,
  },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white bg-white dark:bg-slate-900 rounded-full p-0.5" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#3ccd76]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#00d752]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
];

function Skills() {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm text-center mt-4 skills-subtitle"
        >
          Here are the technologies I work with:
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-6 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="text-text-primary font-bold skills-card-main shrink-0"
            >
              <span className="text-4xl flex items-center justify-center shrink-0">
                {skill.icon}
              </span>
              <span className="text-xl font-bold tracking-wide truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* সাইডের শ্যাডো - এখন গ্লোবাল সিএসএস থেকে জেনারেট হবে */}
        <div className="skills-fade-left"></div>
        <div className="skills-fade-right"></div>
      </div>
    </section>
  );
}

export default Skills;
