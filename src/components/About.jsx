"use client";
import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [showFull, setShowFull] = useState(false);

  const shortText =
    "I'm a web developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React and Next.js. I am always looking for new challenges and opportunities to learn and grow as a developer. I've a strong background in web development and a passion for creating beautiful like this portfolio website and also User Management System, Currency Converter, Movie Search App.";
  const extraText =
    "I have also experience with C and C++, I've built Hospital Management System with C and basic Snake game in C++. I am currently studying Computer Science and Engineering at Bangladesh University of Business and Technology (BUBT). I'm available for internship opportunities and open to new projects. Please feel free to contact me if you have any questions or would like to work together. ";

  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind",
    "C++",
  ];

  return (
    <div id="about" className="px-8 py-20 bg-bg-secondary">
      <h1 className="text-center text-3xl font-bold text-text-primary mb-4">
        About me
      </h1>

      <div className="flex flex-col md:flex-row-reverse gap-8 items-center ">
        <div className=" mt-2 flex w-full md:w-1/2 gap-4 flex-col glass shadow-premium rounded-3xl p-8 border-2 border-accent/40 backdrop-blur-md">
          <span className="inline-block px-4 py-1 rounded-full glass text-accent text-sm font-bold uppercase tracking-wider w-fit">
            About Me
          </span>

          <h2 className="text-3xl md:text-4xl font-black leading-tight text-text-primary">
            Turning vision Into{" "}
            <span className="gradient-text">Real Projects</span>
          </h2>

          <h2 className="text-xl font-semibold text-text-secondary">
            Web Developer
          </h2>

          <p className="text-sm text-text-primary leading-relaxed">
            {shortText}
          </p>

          {
            <div
              className={`overflow-hidden transition-all duration-300 ${showFull ? "max-h-96" : "max-h-0"}`}
            >
              <p className="text-sm text-text-primary leading-relaxed">
                {extraText}
              </p>
            </div>
          }
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-md text-sm font-medium text-text-primary glass ring-accent inline-block mr-2 mb-2 border-sky-500 shadow-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl glass border border-accent/30 hover:border-accent/60 transition-all hover:shadow-lg backdrop-blur-sm bg-gradient-to-br from-accent/10 to-transparent">
              <h4 className="text-accent text-3xl font-bold">3rd</h4>
              <p className="text-sm text-text-secondary font-semibold">Year Student</p>
            </div>
            <div className="p-5 rounded-2xl glass border border-accent/30 hover:border-accent/60 transition-all hover:shadow-lg backdrop-blur-sm bg-gradient-to-br from-accent/10 to-transparent">
              <h4 className="text-accent text-3xl font-bold">5+</h4>
              <p className="text-sm text-text-secondary font-semibold">Projects Completed</p>
            </div>
          </div>

          <button
            onClick={() => setShowFull(!showFull)}
            className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer font-bold"
          >
            {showFull ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group w-72 h-72">
            <div className="relative group w-72 h-72">
              <Image
                className="object-cover rounded-3xl border-2 border-accent glow transition-all duration-300 w-72 h-72"
                src="/images/About.jpeg"
                alt="About ABM Mejbha"
                width={300}
                height={300}
              />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 border-2 border-accent rounded-3xl opacity-30 -z-0 transition-all duration-500 group-hover:-bottom-2 group-hover:-right-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
