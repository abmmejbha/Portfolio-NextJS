import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-between items-center px-8 py-20 min-h-screen">
      <div className="flex w-1/2 gap-4 flex-col">
        <h1 className="text-3xl font-bold text-slate-900">About me</h1>
        <h2 className="text-xl font-semibold text-blue-600">Frontend Developer</h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          I'm a frontend developer with a passion for creating beautiful and
          functional websites. I have experience with HTML, CSS, JavaScript,
          React and Next.js. I am always looking for new challenges and
          opportunities to learn and grow as a developer. I've a strong
          background in web development and a passion for creating beautiful
          like this portfolio website and also User Management System, Currency
          Converter, Movie Search App.</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            I have also experience with C and C++,
            I've built Hospital Management System with C and basic Snake game in
            C++. I am currently studying Computer Science and Engineering at
            Bangladesh University of Business and Technology (BUBT). I'm available
            for internship opportunities and open to new projects. Please feel
            free to contact me if you have any questions or would like to work
          together.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
          Read more
        </button>
      </div>

      <div className="w-1/2 flex justify-center">
        <Image
            className="object-cover rounded-lg shadow-lg"
          src="/images/About.jpeg"
          alt="About ABM Mejbha"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
