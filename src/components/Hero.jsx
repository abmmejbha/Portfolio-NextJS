import React from "react";
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="flex justify-between items-center px-8 py-20 min-h-screen">
        <div className="flex flex-col gap-4 w-1/2">
          {/* Left */}
          <p className="text-lg text-blue-600 font-medium">Hello, It is me</p>
          <h1 className="text-4xl font-bold text-slate-900">ABM Mejbha</h1>
          <p className="text-2xl font-semibold text-slate-600">
            And I am a Web Developer
          </p>
          <p className="text-sm text-slate-500 leading-relaxed">Description</p>
          <div>Social icons</div>
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
            Download CV
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          {/* Right */}
          <Image
            className="object-cover w-72 "
            src="/images/me.PNG"
            alt="ABM Mejbha"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
