"use client";
import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [showFull, setShowFull] = useState(false);

  const shortText =
    "I'm a web developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React and Next.js. I am always looking for new challenges and opportunities to learn and grow as a developer. I've a strong background in web development and a passion for creating beautiful like this portfolio website and also User Management System, Currency Converter, Movie Search App.";
  const extraText =
    "I have also experience with C and C++, I've built Hospital Management System with C and basic Snake game in C++. I am currently studying Computer Science and Engineering at Bangladesh University of Business and Technology (BUBT). I'm available for internship opportunities and open to new projects. Please feel free to contact me if you have any questions or would like to work together. ";

  return (
    <div id="about" className="px-8 py-20 bg-bg-secondary">
      
      <div>
        
      </div>
      <h1 className="text-center text-3xl font-bold text-text-primary mb-4">
        About me
      </h1>

      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="p-2 w-full md:w-1/2 flex justify-center">
          <Image
            className="object-cover rounded-lg shadow-lg"
            src="/images/About.jpeg"
            alt="About ABM Mejbha"
            width={300}
            height={300}
          />
        </div>

        <div className="mt-2 flex w-full md:w-1/2 gap-4 flex-col">
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
          <button
            onClick={() => setShowFull(!showFull)}
            className="bg-accent hover:bg-bg-secondary text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            {showFull ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
