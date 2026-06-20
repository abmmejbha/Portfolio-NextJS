"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const services = [
  {
    icon: "bx bx-code-alt",
    title: "Web Development",
    description:
      "Building responsive, high-performance, and SEO-friendly websites using modern frameworks. Focused on clean architecture and scalable codebases.",
    tech: ["React", "Next.js", "Node.js", "Express.js", "Tailwind"],
  },
  {
    icon: "bx bxs-paint",
    title: "UI/UX Responsive Design",
    description:
      "Designing visually stunning, intuitive, and user-centric interfaces. Crafting responsive layouts that ensure seamless experiences across all device sizes.",
    tech: ["Figma", "Prototyping", "Responsive CSS"],
  },
  {
    icon: "bx bx-bar-chart-alt",
    title: "Performance Optimization",
    description:
      "Analyzing and fixing bottlenecks to ensure lightning-fast loading times. Improving Core Web Vitals, SEO scores, and overall user retention.",
    tech: ["Lazy Loading", "Caching", "SEO"],
  },
];

const ServiceCard = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.03 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        // 'overflow-hidden' দেওয়া হয়েছে যেন ঝিলিকটি কার্ডের বাইরে না যায়
        className="service-tilt-card overflow-hidden group"
      >
        {/* ✨ সাদা আলোর ঝিলিক (Shine Effect) এর জন্য নিচের ডিভটি যোগ করা হয়েছে */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-50 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70 group-hover:animate-shine" />

        {/* আইকন কন্টেইনার */}
        <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center text-3xl mb-4 bg-sky-50 text-accent dark:bg-slate-700/80">
          <i className={service.icon}></i>
        </div>

        {/* সার্ভিস টাইটেল */}
        <h3 className="brand-font text-xl font-bold mb-3 text-center text-text-primary">
          {service.title}
        </h3>
        
        {/* সার্ভিস ডেসক্রিপশন */}
        <p className="text-sm leading-relaxed mb-6 text-center flex-1 text-text-primary opacity-80">
          {service.description}
        </p>

        {/* হাইলাইটেড টেকনোলজি ট্যাগস */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {service.tech.map((item) => (
            <span 
              key={item} 
              className="text-[10px] px-2.5 py-0.5 rounded-full font-bold border tracking-wider uppercase bg-sky-50 border-sky-100 text-sky-700 dark:bg-cyan-950/40 dark:border-cyan-800 dark:text-cyan-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="px-8 py-20 bg-bg-secondary">
      <div className="container mx-auto">
        <h2 className="brand-font text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
          My Services
        </h2>
        <p className="mb-12 text-sm text-center opacity-80 text-text-primary">
          Explore the premium services and specialized stack I use to build seamless digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};