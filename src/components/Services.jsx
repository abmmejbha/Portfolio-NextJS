"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      emoji: "🌐",
      title: "Web Development",
      description:
        "Building responsive and user-friendly websites using modern technologies like React, Next.js, and Node.js.",
    },
    {
      emoji: "🎨",
      title: "UI/UX Responsive Design",
      description:
        "Designing visually appealing and intuitive user interfaces that enhance user experience and engagement.",
    },
    {
      emoji: "⚡",
      title: "Performance Optimization",
      description:
        "Optimizing website performance to ensure fast loading times and smooth user interactions, improving overall user satisfaction.",
    },
  ];



  return (
    <div id="services" className="px-8 py-20 bg-bg-secondary">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-text-primary mb-12 text-center"
      >
        My Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 p-6 border border-border-color rounded-2xl glass shadow-premium hover:scale-105 transition-all duration-300"
          >
            <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-accent/15 border border-accent/30 mb-2">
              {service.emoji}
            </div>
            <h3 className="text-xl font-semibold text-text-primary">
              {service.title}
            </h3>
            <p className="text-text-primary text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
