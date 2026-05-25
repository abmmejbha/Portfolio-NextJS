import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-4 py-4 bg-blue-300 border-b border-slate-200">
        <Link href="/">ABM Mejbha</Link>

        <div>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#services">Services</Link>
        </div>
      </div>
    </>
  );
}
