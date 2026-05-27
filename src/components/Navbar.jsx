"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200">
      {/* main navigation bar container */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 bg-white border-b border-slate-200 ">
        <Link className="text-xl font-bold text-blue-600" href="/">
          ABM Mejbha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            href="#about"
          >
            About
          </Link>

          <Link
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger menu */}
        <div
          type="button"
          className="block md:hidden cursor-pointer text-2xl text-slate-700 p-2 active:bg-slate-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          // onTouchEnd={(e) => { e.preventDefault(); setIsOpen(!isOpen); }}
        >
          ☰
        </div>
      </div>

      {/* Mobile Dropdown menu */}
      {isOpen && (
        <div className="z-60 md:hidden flex flex-col gap-4 p-4 bg-white shadow-lg">
          <Link onClick={() => setIsOpen(false)} href="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} href="#about">About</Link>
          <Link onClick={() => setIsOpen(false)} href="#services">Services</Link>
          <Link onClick={() => setIsOpen(false)} href="#portfolio">Portfolio</Link>
          <Link onClick={() => setIsOpen(false)} href="#contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
