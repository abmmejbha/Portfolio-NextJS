import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-white border-b border-slate-200">
        <Link className="text-xl font-bold text-blue-600" href="/">
          ABM Mejbha
        </Link>

        <div className="flex gap-4">
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
      </div>
    </>
  );
}
