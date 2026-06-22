"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const titles = [
  "Web Developer",
  "Frontend Developer",
  "React Enthusiast",
  "Next.js Lover",
  "Programmer",
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[titleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentTitle === currentFullText) {
      typingSpeed = 1500;
    } else if (isDeleting && currentTitle === "") {
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && currentTitle === currentFullText) {
        setIsDeleting(true);
      } else if (isDeleting && currentTitle === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        if (!isDeleting) {
          setCurrentTitle(currentFullText.substring(0, currentTitle.length + 1));
        } else {
          setCurrentTitle(currentFullText.substring(0, currentTitle.length - 1));
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentTitle, isDeleting, titleIndex]);

  const socialLinks = [
    { icon: <FaFacebookF size={24} />, url: "https://www.facebook.com/suweet.ka" },
    { icon: <FaGithub size={24} />, url: "https://www.github.com/abmmejbha" },
    { icon: <FaTwitter size={24} />, url: "https://www.twitter.com/abmmejbha" },
    { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/abm-mejbha-092786202" },
    { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/suweet.ka" },
  ];

  return (
    <div className="bg-bg-primary min-h-screen relative flex items-center justify-center">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row-reverse justify-between items-center py-24 px-8 md:px-20 max-w-7xl mx-auto gap-16 md:gap-24">
        
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-accent/40 animate-[spin_25s_linear_infinite]"></div>
          <Image
            className="glow floating object-cover object-top rounded-2xl hover:scale-105 transition-all duration-300 w-80 h-80 md:w-[400px] md:h-[400px] border-4 border-white/70 shadow-2xl"
            src="/images/me.PNG"
            alt="ABM Mejbha"
            width={400}
            height={400}
            priority
          />
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left items-center md:items-start">
          <p className="text-2xl text-text-primary font-semibold tracking-wide">
            Hello, It's me
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-premium tracking-tight">
            ABM MEJBHA
          </h1>
          <p className="text-text-primary text-2xl md:text-3xl font-semibold min-h-[48px]">
            And I'm a <span className="text-accent font-extrabold">{currentTitle}</span>
            <span className="animate-pulse ml-1 text-accent">|</span>
          </p>
          <p className="text-text-primary text-base md:text-lg leading-relaxed max-w-xl opacity-90">
            Frontend developer skilled in React, Next.js & Node.js. Currently
            studying CSE at BUBT, available for internship.
          </p>

          {/* social icons  */}
          <div className="flex gap-5 my-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                className="border-accent text-accent hover:bg-accent w-11 h-11 flex justify-center items-center rounded-full border-2 hover:text-white glow transition-all duration-300 transform hover:-translate-y-1"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download="ABM_Mejbha_CV.pdf"
            className="bg-accent hover:bg-accent/90 px-8 py-4 rounded-xl text-white font-extrabold cursor-pointer w-fit shadow-lg hover:scale-105 transition-all duration-300 text-base md:text-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;