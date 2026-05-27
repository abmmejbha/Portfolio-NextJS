import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center pb-20 pt-24 px-8 py-20 min-h-screen">
        {/* image div */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounde-2xl shadow-lg"> */}
            <Image
              className="object-cover rounded-lg shadow-lg"
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
          <div>Social icons</div>
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
            Download CV
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
