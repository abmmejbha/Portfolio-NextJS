"use client";
import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
// react-icons থেকে হালকা ও আধুনিক আইকন ইমপোর্ট করলাম
import { BiSun, BiMoon, BiMenu, BiX } from "react-icons/bi";

const emptySubscribe = () => () => {};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary border-b border-border-color shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2">
        <Link className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" href="/">
          ABM Mejbha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors" href="/">
            Home
          </Link>
          <Link className="text-sm font-extrabold text-text-primary hover:text-text-secondary transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors" href="#services">
            Services
          </Link>
          <Link className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors" href="#portfolio">
            Projects
          </Link>
          <Link className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors" href="#contact">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {/* Theme Toggle Button (aria-label যুক্ত করা হয়েছে) */}
          <button
            type="button"
            aria-label="Toggle Theme"
            className="p-2 rounded-lg cursor-pointer text-xl min-w-[40px] min-h-[40px] flex items-center justify-center text-text-primary transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {!isMounted ? (
              <span className="opacity-0"><BiMoon /></span>
            ) : theme === "dark" ? (
              <BiSun className="text-yellow-500" />
            ) : (
              <BiMoon />
            )}
          </button>

          {/* Hamburger Menu Button (টগল করার সুবিধা এবং aria-label সহ) */}
          <button
            type="button"
            aria-label="Toggle Menu"
            className="text-text-primary block md:hidden cursor-pointer text-2xl p-2 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown menu */}
      {isOpen && (
        <div className="z-60 md:hidden flex flex-col gap-4 p-4 bg-bg-primary shadow-lg animate-fadeIn">
          <Link className="text-text-primary hover:text-text-secondary transition-colors" onClick={() => setIsOpen(false)} href="/">
            Home
          </Link>
          <Link className="text-text-primary hover:text-text-secondary transition-colors" onClick={() => setIsOpen(false)} href="#about">
            About
          </Link>
          <Link className="text-text-primary hover:text-text-secondary transition-colors" onClick={() => setIsOpen(false)} href="#services">
            Services
          </Link>
          <Link className="text-text-primary hover:text-text-secondary transition-colors" onClick={() => setIsOpen(false)} href="#portfolio">
            Projects
          </Link>
          <Link className="text-text-primary hover:text-text-secondary transition-colors" onClick={() => setIsOpen(false)} href="#contact">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}