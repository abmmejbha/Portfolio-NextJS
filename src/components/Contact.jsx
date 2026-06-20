"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_r14y9km",
        "template_lhmjdpd",
        formData,
        "1KARfkM72yD_jfJU6",
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          from_name: "",
          from_email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
      });
  };

  const contacts = [
    {
      label: "Email",
      value: "abmmejbha@gmail.com",
      href: "mailto:abmmejbha@gmail.com",
      emoji: "📧",
    },
    {
      label: "Phone",
      value: "+880 1645773578",
      href: "tel:+8801645773578",
      emoji: "📞",
    },
    {
      label: "location",
      value: "Dhaka, Bangladesh",
      href: "https://www.google.com/maps/place/Dhaka,+Bangladesh/@23.810331,90.412521,12z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b0d2f3c7e7:0x9f9f9f9f9f9f9f9f!8m2!3d23.810331!4d90.412521!16zL20vMGNwZQ?entry=ttu",
      emoji: "📍",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/abm-mejbha/",
      href: "https://www.linkedin.com/in/abm-mejbha-092786202",
      emoji: "🔗",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen bg-bg-primary py-24 px-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left side */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">
              Contact Me!
            </h2>
            <p className="mb-10 text-lg text-text-secondary">
              Feel free to reach out — I'm always open to new opportunities.
            </p>
            <div className="flex flex-col gap-4">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? "_self" : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
                  className="flex items-center gap-4 p-5 rounded-2xl glass shadow-premium hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-xl bg-accent/15 border border-accent/30">
                    {item.emoji}
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-accent">
                      {item.label}
                    </p>
                    <p className="font-bold text-sm text-text-primary">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 p-8 md:p-10 rounded-[2.5rem] glass shadow-premium">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-border-color bg-bg-secondary outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl border border-border-color bg-bg-secondary outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-text-secondary">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+880 1XXXXXXXXX"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-border-color bg-bg-secondary outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1 text-text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl border border-border-color bg-bg-secondary outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all"
                  />
                </div>
              </div>

              {/* Message - full width, outside the 2-column grid */}
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1 text-text-secondary">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-2xl border border-border-color bg-bg-secondary outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all resize-none"
                />
              </div>

              {/* Submit button - full width, outside the grid */}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-bg-secondary rounded-2xl px-6 py-4 text-white font-bold transition-all hover:scale-[1.02] shadow-premium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
