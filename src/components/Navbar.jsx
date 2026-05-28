"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#c8e0f0] dark:bg-[#364958]  border-b border-[#38a3a5] dark:border-[#3b6064] shadow-md">
      {/* main navigation bar container */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <Link
          className="text-xl font-bold text-[#22577a] dark:text-[#87bba2]"
          href="/"
        >
          ABM Mejbha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            className="text-sm font-medium text-[#22577a] dark:text-[#05bd95] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-[#22577a] dark:text-[#05bd95] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            href="#about"
          >
            About
          </Link>

          <Link
            className="text-sm font-medium text-[#22577a] dark:text-[#05bd95] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-[#22577a] dark:text-[#05bd95] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium text-[#22577a] dark:text-[#05bd95] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger menu */}
        <button
          type="button"
          className="p-2 rounded-lg cursor-pointer text-xl"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <button
          type="button"
          className="text-[#22577a] dark:text-[#c9e4ca] block md:hidden cursor-pointer text-2xl p-2 active:bg-slate-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          // onTouchEnd={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown menu */}
      {isOpen && (
        <div className="z-60 md:hidden flex flex-col gap-4 p-4 bg-[#c8e0f0] dark:bg-[#364958] shadow-lg">
          <Link
            className="text-[#22577a] dark:text-[#c9e5ca] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            onClick={() => setIsOpen(false)}
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[#22577a] dark:text-[#c9e5ca] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            onClick={() => setIsOpen(false)}
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-[#22577a] dark:text-[#c9e5ca] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            onClick={() => setIsOpen(false)}
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-[#22577a] dark:text-[#c9e5ca] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            onClick={() => setIsOpen(false)}
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-[#22577a] dark:text-[#c9e5ca] hover:text-[#38a3a5] dark:hover:text-[#55828b] transition-colors"
            onClick={() => setIsOpen(false)}
            href="#contact"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
