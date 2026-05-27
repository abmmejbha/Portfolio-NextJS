import React from "react";
import Image from "next/image";
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-linear-to-br from-slate-100 to-blue-200 min-h-screen">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center pb-20 pt-24 px-8 py-20 min-h-screen">
        {/* image div */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounde-2xl shadow-lg"> */}
            <Image
              className="shadow-[0_0_30px_rgba(37,99,235,1)] floating object-cover rounded-2xl hover:scale-105 transition-all duration-300 "
              src="/images/me.PNG"
              alt="ABM Mejbha"
              width={300}
              height={300}
            />
          {/* </div> */}
        </div>

        {/* text div */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Left */}
          <p className="text-lg text-blue-600 font-medium">Hello, It's me</p>
          <h1 className="text-4xl font-bold text-slate-900">ABM Mejbha</h1>
          <p className="text-2xl font-semibold text-slate-600">
            And I'm a Web Developer
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Frontend developer skilled in React, Next.js & Node.js. Currently
            studying CSE at BUBT, available for internship.
          </p>
          <div className="flex gap-4 text-slate-600">

            <a className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,2)] transition-all duration-300" href="https://github.com/abmmejbha" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,1)] transition-all duration-300" href="https://www.linkedin.com/in/abm-mejbha-092786202" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a className="w-10 h-10 flex justify-center items-center rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,2)] transition-all duration-300" href="https://www.instagram.com/suweet.ka" target="_blank" rel="noopener noreferrer" >
              <FaInstagram size={24} />
            </a>

          </div>
          <button className="hover:shadow-[0_0_20px_rgba(37,99,235,1)] bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 cursor-pointer w-fit shadow-md hover:scale-103 transition-all">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
