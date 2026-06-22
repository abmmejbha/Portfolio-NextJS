"use client";
import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

// একটি খালি সাবস্ক্রিপশন ফাংশন
const emptySubscribe = () => () => {};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // সার্ভার রেন্ডারিংয়ের সময় এটি false দেবে, আর ক্লায়েন্টে মাউন্ট হওয়ার পর true দেবে
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true, // ক্লায়েন্ট সাইড ভ্যালু
    () => false // সার্ভার সাইড ভ্যালু
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary border-b border-border-color shadow-md">
      {/* main navigation bar container */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-1">
        <Link className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent" href="/">
          ABM Mejbha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors shadow-2xl"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-extrabold text-text-primary hover:text-text-secondary transition-colors"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-bold text-text-primary hover:text-text-secondary transition-colors"
            href="#contact"
          >
            Contact
          </Link>
        </div>

        {/* Theme Toggle Button */}
        <button
          type="button"
          className="p-2 rounded-lg cursor-pointer text-xl min-w-[40px] min-h-[40px] flex items-center justify-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {/* লিন্টার ফ্রেন্ডলি কন্ডিশনাল রেন্ডারিং */}
          {!isMounted ? (
            <span className="opacity-0">🌙</span>
          ) : theme === "dark" ? (
            "☀️"
          ) : (
            "🌙"
          )}
        </button>

        {/* Hamburger Menu Button */}
        <button
          type="button"
          className="text-text-primary dark:text-text-secondary block md:hidden cursor-pointer text-2xl p-2 active:bg-slate-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
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