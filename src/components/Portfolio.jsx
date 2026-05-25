import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    <div className="px-8 py-20 gap-8 min-h-screen justify-between grid grid-cols-3 ">
      {/* Currency Converter */}
      <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
        <Image src="" alt="" />
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Currency Converter</h3>
        <p className="text-sm text-slate-500 leading-relaxed">Description</p>
        <div className="flex flex-col">
          <a href="">Live Demo</a>
          <a href="">Github Link</a>
        </div>
      </div>

      {/* Movie search App */}
      <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
        <Image src="" alt="" />
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Movie Search App</h3>
        <p className="text-sm text-slate-500 leading-relaxed">Description</p>
        <div className="flex flex-col"> 
          <a href="">Live Demo</a>
          <a href="">Github Link</a>
        </div>
      </div>

      {/* Portfolio */}
      <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
        <Image src="" alt="" />
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Portfolio</h3>
        <p className="text-sm text-slate-500 leading-relaxed">Description</p>
        <div className="flex flex-col">
          <a href="">Live Demo</a>
          <a href="">Github Link</a>
        </div>
      </div>

      {/* User Management System */}
      <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
        <Image src="" alt="" />
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">User Management System</h3>
        <p className="text-sm text-slate-500 leading-relaxed">Description</p>
        <div className="flex flex-col">
          <a href="">Live Demo</a>
          <a href="">Github Link</a>
        </div>
      </div>

      {/* Hospital Management System */}
      <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
        <Image src="" alt="" />
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Hospital Management System (C)</h3>
        <p className="text-sm text-slate-500 leading-relaxed">Description</p>
        <div className="flex flex-col">
          <a href="">Live Demo</a>
          <a href="">Github Link</a>
        </div>
      </div>

      {/* Snake Game */}
      <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
        <Image src="" alt="" />
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Snake Game (C++)</h3>
        <p className="text-sm text-slate-500 leading-relaxed">Description</p>
        <div className="flex flex-col">
          <a href="">Live Demo</a>
          <a href="">Github Link</a>
        </div>
      </div>
    </div>
  );
}
