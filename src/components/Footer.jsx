"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-slate-600 text-slate-100 backdrop-blur-xl">
      {/* Top Divider line */}
      <div className="mx-auto mb-6 h-px w-full max-w-6xl px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Brand - এই গ্রেডিয়েন্টটা যাতে পারফেক্টলি আসে */}
        <div>
          <span className="font-bold text-xl block bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 bg-clip-text text-transparent">
            ABM Mejbha
          </span>
          <p className="text-xs mt-1 text-slate-400">
            &copy; {year} All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="capitalize transition-colors duration-200 hover:text-amber-200 text-slate-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons (সহজে এক লাইনে রাখার জন্য) */}
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/abmmejbha"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:text-amber-200 hover:scale-110 text-slate-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/abm-mejbha-092786202"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:text-amber-200 hover:scale-110 text-slate-300"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://instagram.com/suweet.ka"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:text-amber-200 hover:scale-110 text-slate-300"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}