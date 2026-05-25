import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between items-center px-8 py-20 min-h-screen">
        <div className="flex flex-col gap-4 w-1/2">
        {/* Left */}
          <p>Hello, It is me</p>
          <h1 className="text-4xl font-bold text-white">ABM Mejbha</h1>
          <p>And I am a Web Devloper</p>
          <p>Description</p>
          <div>Social icons</div>
          <button>Download CV</button>
        </div>
        <div>
        {/* Right */}
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
