import React from "react";

export default function Services() {
  return (
    <div id="services" className="px-8 py-20 ">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
        My Services
      </h2>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-3 p-6 border border-slate-300 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white">
          <span className="text-4xl mb-2 text-center">🌐</span>
          <h3 className="text-xl font-semibold text-slate-900"> Web Development</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Building responsive and user-friendly websites using modern
            technologies like React, Next.js, and Node.js.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-6 border border-slate-300 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white">
          <span className="text-4xl mb-2 text-center">🎨</span>
          <h3 className="text-xl font-semibold text-slate-900"> UI/UX Responsive Design</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Designing visually appealing and intuitive user interfaces that
            enhance user experience and engagement.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-6 border border-slate-300 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-white">
          <span className="text-4xl mb-2 text-center">⚡</span>
          <h3 className="text-xl font-semibold text-slate-900"> Performance Optimization</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Optimizing website performance to ensure fast loading times and
            smooth user interactions, improving overall user satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
