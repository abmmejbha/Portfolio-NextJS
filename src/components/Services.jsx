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

  const mouseX = useSpring(x, { stiffness: 250, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 250, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-20deg", "20deg"]);
  const translateZ = useTransform(mouseX, (value) => value === 0 ? "0px" : "35px");

  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

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
    /* লেয়ার ১ ও ২ (স্থির): ৩ডি পারসপেক্টিভ এবং মাউস ট্র্যাকার প্যারেন্ট কন্টেইনার */
    <div 
      style={{ perspective: "1200px" }} 
      className="w-full h-full relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* ১. পেছনের আলাদা অ্যানিমেটেড গ্লো লেয়ার (Cyan-Blue-Indigo) */}
      <div 
        className="absolute -inset-1.5 rounded-[24px] opacity-25 blur-xl pointer-events-none transition-opacity duration-500 group-hover:opacity-75"
        style={{
          background: "linear-gradient(135deg, #06b6d4, #3b82f6, #4f46e5, #06b6d4)",
          backgroundSize: "200% 200%",
          animation: "premium-flow 4s linear infinite"
        }}
      />

      {/* ২. পেছনের আলাদা ২ পিক্সেল থিক অ্যানিমেটেড রিং বর্ডার লেয়ার */}
      {/* ইনকনসিস্টেন্সি কাটানোর জন্য এটা ওড়াপারের ভেতরের পজিশনে ফিক্সড লক করা */}
      <div 
        className="absolute inset-0 rounded-[24px] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #06b6d4, #3b82f6, #4f46e5, #06b6d4)",
          backgroundSize: "200% 200%",
          animation: "premium-flow 4s linear infinite"
        }}
      />

      {/* ৩. সামনের মেইন কার্ড - যা ফ্রেমার মোশন দিয়ে ২০ ডিগ্রি টিল্ট হবে */}
      {/* বর্ডারটি চারদিকে নিখুঁত ২px রাখার জন্য top, left, right, bottom সব ২px এ লকড */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        style={{ 
          rotateX, 
          rotateY, 
          translateZ,
          transformStyle: "preserve-3d"
        }}
        className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] rounded-[22px] bg-white dark:bg-[#121214] p-6 flex flex-col justify-between cursor-pointer shadow-sm dark:shadow-none overflow-hidden"
      >
        {/* ৪. গ্লাসি শাইন ওভারলে */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-25 z-10"
          style={{
            background: `radial-gradient(400px circle at ${shineX.get()} ${shineY.get()}, rgba(59, 130, 246, 0.2), transparent 50%)`
          }}
        />

        {/* কন্টেন্ট লেয়ার */}
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full flex flex-col h-full justify-between z-20">
          <div>
            {/* আইকন কন্টেইনার */}
            <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center text-3xl mb-4 bg-sky-50 text-cyan-500 border border-sky-100/50 dark:bg-slate-700/50 dark:text-cyan-400 dark:border-white/5">
              <i className={service.icon}></i>
            </div>

            {/* সার্ভিস টাইটেল */}
            <h3 className="brand-font text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">
              {service.title}
            </h3>
            
            {/* সার্ভিস ডেসক্রিপশন */}
            <p className="text-sm leading-relaxed mb-6 font-bold text-center text-gray-600 dark:text-gray-300 opacity-90">
              {service.description}
            </p>
          </div>

          {/* হাইলাইটেড টেকনোলজি ট্যাগস */}
          <div className="flex flex-wrap justify-center gap-2 mt-auto">
            {service.tech.map((item) => (
              <span 
                key={item} 
                className="text-[10px] px-2.5 py-0.5 rounded-full font-bold border tracking-wider uppercase bg-sky-50/60 border-sky-100 text-sky-600 dark:bg-cyan-950/40 dark:border-cyan-800 dark:text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* সিএসএস গ্লোবাল কীফ্রেম */}
      <style jsx global>{`
        @keyframes premium-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="px-8 py-20 bg-gray-50 dark:bg-[#09090b] transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="brand-font text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent text-center">
          My Services
        </h2>
        <p className="mb-12 text-sm text-center text-gray-600 dark:text-gray-400">
          Explore the premium services and specialized stack I use to build seamless digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <div key={service.title} className="h-[390px] w-full">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}