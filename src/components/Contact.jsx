"use client"
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

  return (
    <div id="contact" className="p-8 min-h-screen bg-bg-primary">
      <h1 className="pt-20 pb-12 font-bold text-3xl text-center text-text-primary ">
        Contact <span className="text-accent">Me!</span>
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 px-8 py-4">
        <input
          className="bg-bg-secondary text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Enter Name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          className="bg-bg-secondary text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Enter Email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
        />
        <input
          className="bg-bg-secondary text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Phone number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          className="bg-bg-secondary text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Email Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div className="px-8 py-4 flex flex-col items-center gap-6">
        <textarea
          className="w-full h-32 bg-bg-secondary rounded-2xl text-text-primary p-4 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          className="bg-accent hover:bg-bg-secondary rounded-lg px-20 py-2 text-white font-semibold"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
