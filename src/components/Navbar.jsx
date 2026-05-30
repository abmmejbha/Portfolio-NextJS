"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary border-b border-border-color shadow-md">
      {/* main navigation bar container */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <Link
          className="text-xl font-bold text-text-primary"
          href="/"
        >
          ABM Mejbha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
            href="#about"
          >
            About
          </Link>

          <Link
            className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
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
          className="text-text-primary dark:text-text-secondary block md:hidden cursor-pointer text-2xl p-2 active:bg-slate-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          // onTouchEnd={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown menu */}
      {isOpen && (
        <div className="z-60 md:hidden flex flex-col gap-4 p-4 bg-bg-primary shadow-lg">
          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
            onClick={() => setIsOpen(false)}
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-text-primary hover:text-text-secondary transition-colors"
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
