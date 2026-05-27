import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    <div id="portfolio" className="px-8 py-20 ">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
        My Projects
      </h2>

      <div className="px-8 py-20 gap-8 min-h-screen justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* Currency Converter */}
        <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
          <Image src="" alt="" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Currency Converter
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">Description</p>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Movie search App */}
        <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
          <Image src="" alt="" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Movie Search App
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">Description</p>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
          <Image src="" alt="" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Portfolio
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">Description</p>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>

        {/* User Management System */}
        <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
          <Image src="" alt="" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            User Management System
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">Description</p>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Hospital Management System */}
        <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
          <Image src="" alt="" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Hospital Management System (C)
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">Description</p>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>

        {/* Snake Game */}
        <div className="flex flex-col gap-2 bg-slate-300 p-6  shadow-lg rounded-2xl hover:bg-white transition-all ">
          <Image src="" alt="" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Snake Game (C++)
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed">Description</p>
          <div className="flex gap-3">
            <a
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              href=""
            >
              Live Demo
            </a>
            <a
              className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              href=""
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
