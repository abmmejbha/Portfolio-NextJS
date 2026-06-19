import React from "react";

export default function Services() {
  return (
    <div id="services" className="px-8 py-20 bg-bg-secondary">
      <h2 className="text-3xl font-bold text-text-primary mb-12 text-center">
        My Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-3 p-6 border border-border-color rounded-2xl glass shadow-premium hover:scale-105 transition-all duration-300">
          <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-accent/10 border border-accent/10 mb-2">
            🌐
          </div>{" "}
          <h3 className="text-xl font-semibold text-text-primary">
            {" "}
            Web Development
          </h3>
          <p className="text-text-primary text-sm leading-relaxed">
            Building responsive and user-friendly websites using modern
            technologies like React, Next.js, and Node.js.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-6 border border-border-color rounded-2xl glass shadow-premium hover:scale-105 transition-all duration-300">
          <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-accent/10 border border-accent/10 mb-2">
            🎨
          </div>
          <h3 className="text-xl font-semibold text-text-primary">
            {" "}
            UI/UX Responsive Design
          </h3>
          <p className="text-text-primary text-sm leading-relaxed">
            Designing visually appealing and intuitive user interfaces that
            enhance user experience and engagement.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-6 border border-border-color rounded-2xl glass shadow-premium hover:scale-105 transition-all duration-300">
          <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-accent/10 border border-accent/10 mb-2">
            ⚡
          </div>
          <h3 className="text-xl font-semibold text-text-primary">
            {" "}
            Performance Optimization
          </h3>
          <p className="text-text-primary text-sm leading-relaxed">
            Optimizing website performance to ensure fast loading times and
            smooth user interactions, improving overall user satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
