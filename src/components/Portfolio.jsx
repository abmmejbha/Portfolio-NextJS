import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    <div id="portfolio" className="px-8 py-20 bg-bg-primary">
      <h2 className="text-4xl font-bold text-text-secondary mb-2 text-center">
        My Projects
      </h2>

      <div className="px-2 py-10 gap-8 min-h-screen justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* Currency Converter */}
        <div className="flex flex-col gap-2 glass shadow-premium p-6 rounded-2xl hover:scale-105 transition-all duration-300">
          <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass">
            💱
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Currency Converter
          </h3>
          <p className="flex-1 text-sm text-text-primary leading-relaxed">
            A React app that converts currencies in real-time using live
            exchange rate APIs. Features a quick swap button, custom
            useCurrencyInfo hook, and optimized performance with useState &
            useEffect.
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {["React", "API", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full font-bold border border-accent/30 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-bg-secondary transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent hover:text-accent transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Movie search App */}
        <div className="flex flex-col gap-2 glass shadow-premium p-6  shadow-lg rounded-2xl hover:scale-105 transition-all duration-300">
          <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass">
            🎬
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2 ">
            Movie Search App
          </h3>
          <p className="flex-1 text-sm text-text-primary leading-relaxed">
            A React app that searches movies in real-time using the OMDB API.
            Users can search by title and instantly see movie details like
            poster, year, and ratings.
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {["React", "API", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full font-bold border border-accent/30 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-bg-secondary transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent hover:text-accent  transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col gap-2 glass shadow-premium p-6 rounded-2xl hover:scale-105 transition-all duration-300">
          <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass">
            🏥
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Portfolio
          </h3>
          <p className="flex-1 text-sm text-text-primary leading-relaxed">
            My personal portfolio built with Next.js and Tailwind CSS. Features
            dark/light theme toggle, responsive design, and smooth animations.
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {["React", "API", "Tailwind CSS", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full font-bold border border-accent/30 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-bg-secondary transition-colors"
              href="https://abmmejbha.github.io/Portfolio-NextJS/"
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent hover:text-accent  transition-colors"
              href="https://github.com/abmmejbha/Portfolio-NextJS"
            >
              Github Link
            </a>
          </div>
        </div>

        {/* User Management System */}
        <div className="flex flex-col gap-2 glass shadow-premium p-6 rounded-2xl hover:scale-105 transition-all duration-300">
          <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass">
            👥
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            User Management System
          </h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {["React", "API", "JavaScript"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full font-bold border border-accent/30 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="flex-1 text-sm text-text-primary leading-relaxed">
            A full-stack web app for managing users — add, edit, delete, and
            search users. Built with React and Node.js and uses MongoDB Atlas
            for data persistence.
          </p>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-bg-secondary transition-colors"
              href="https://user-management-app-nu-six.vercel.app/"
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent hover:text-accent  transition-colors"
              href="https://github.com/abmmejbha/userManagementApp"
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Hospital Management System */}
        <div className="flex flex-col gap-2 glass shadow-premium p-6 rounded-2xl hover:scale-105 transition-all duration-300">
          <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass">
            🏥
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Hospital Management System (C)
          </h3>
          <p className="flex-1 text-sm text-text-primary leading-relaxed">
            A console-based hospital management system built in C. Manages
            patient records, doctor info, and appointments using file handling
            and structs.
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {["C"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full font-bold border border-accent/30 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-bg-secondary transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent hover:text-accent  transition-colors"
              href="https://github.com/abmmejbha/Practice-Codes-2024/blob/main/C_Practice/projects/Hospital_management_system.c"
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Snake Game */}
        <div className=" flex flex-col gap-2 glass shadow-premium p-6 rounded-2xl hover:scale-105 transition-all duration-300">
          <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass">
            🐍
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">
            Snake Game (C++)
          </h3>
          <p className="flex-1 text-sm text-text-primary leading-relaxed">
            A classic Snake game built in C++ using console graphics. Features
            score tracking, increasing speed, and game over detection.
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {["C++"].map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full font-bold border border-accent/30 uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-bg-secondary transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-border-color text-text-primary rounded-lg font-semibold hover:border-accent hover:text-accent  transition-colors"
              href="https://github.com/abmmejbha/Practice-Codes-2024/blob/main/CPP_Practice/project/snake.cpp"
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
