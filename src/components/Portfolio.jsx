"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    icon: "bx bx-dollar", // Currency Converter এর জন্য আরও সুন্দর ও নিখুঁত আইকন
    title: "Currency Converter",
    desc: "A React app that converts currencies in real-time using live exchange rate APIs.",
    tech: ["React", "API", "JavaScript"],
    live: "",
    github: "https://github.com/abmmejbha/Learning-React/tree/master/05-2-currecyConverter",
  },
  {
    icon: "bx bx-movie-play", // সাধারণ ফিল্মের বদলে মুভি প্লে আইকন (দেখতে দারুণ লাগে)
    title: "Movie Search App",
    desc: "A React app that searches movies in real-time using the OMDB API with poster and rating display.",
    tech: ["React", "API", "JavaScript"],
    live: "",
    github: "https://github.com/abmmejbha/Learning-React/tree/master/08-movieSearchApp",
  },
  {
    icon: "bx bx-layer", // পোর্টফোলিওর জন্য 'Briefcase' এর চেয়ে 'Layer' বা স্ট্যাক আইকন এখন বেশি ট্রেন্ডি
    title: "Portfolio",
    desc: "My personal portfolio built with Next.js and Tailwind CSS featuring dark mode and smooth animations.",
    tech: ["React", "Next.js", "Tailwind"],
    live: "https://abmmejbha.github.io/Portfolio-NextJS/",
    github: "https://github.com/abmmejbha/Portfolio-NextJS",
  },
  {
    icon: "bx bx-user-voice", // User Management এর জন্য একটু ইউনিক ও মডার্ন আইকন
    title: "User Management System",
    desc: "Full-stack web app for managing users with CRUD operations and MongoDB Atlas persistence.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://user-management-app-nu-six.vercel.app/",
    github: "https://github.com/abmmejbha/userManagementApp",
  },
  {
    icon: "bx bxs-first-aid", // Solid ফার্স্ট-এইড বক্স, যা দূর থেকেও পপ করবে
    title: "Hospital Management (C)",
    desc: "Console-based hospital management system in C managing patient and doctor records.",
    tech: ["C", "File Handling"],
    live: "",
    github: "https://github.com/abmmejbha/Practice-Codes-2024/blob/main/C_Practice/projects/Hospital_management_system.c",
  },
  {
    icon: "bx bx-game", // স্ন্যেক গেমের জন্য ক্লাসিক গেমপ্যাড আইকন
    title: "Snake Game (C++)",
    desc: "Classic Snake game built in C++ using console graphics with score tracking.",
    tech: ["C++", "OOP", "Console Graphics"],
    live: "",
    github: "https://github.com/abmmejbha/Practice-Codes-2024/blob/main/CPP_Practice/project/snake.cpp",
  },
];

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 250, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 250, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  return (
    <div
      className="relative h-[320px] w-full [perspective:1000px] group"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {/* Glow Background */}
      <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-cyan-500 via-blue-500 opacity-1 to-indigo-500 group-hover:opacity-75 transition-opacity duration-500" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full bg-bg-primary  border border-white/10 rounded-[22px] p-6 flex flex-col justify-between overflow-hidden shadow-2xl dark:shadow-cyan-500/20 transition-shadow duration-300 dark:shadow-lg backdrop-blur-lg dark:border-cyan-500/40 dark:border-3"
      >
        <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-white/5 border border-white/10 *:text-cyan-400">
          <i className={project.icon}></i>
        </div>
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-sm text-text-primary/80 leading-relaxed mb-4 flex-1 font-bold">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 font-bold mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1 rounded-full border border-accent/20 uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.live && (
            <a
              href={project.live}
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:opacity-90"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white/10 text-text-primary rounded-lg text-sm font-semibold hover:border-accent hover:text-accent"
          >
            Github
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-8 py-20 bg-bg-primary">
      <h2 className="text-4xl font-bold text-text-secondary mb-12 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}