import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-bg-primary">
      <h1 className="pt-20 pb-12 font-bold text-3xl text-center text-text-primary ">
        Contact <span className="text-blue-900">Me!</span>
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 px-8 py-4">
        <input
          className="bg-white text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="bg-white text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="bg-white text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Phone number"
        />
        <input
          className="bg-white text-text-primary w-full px-4 py-4 border border-border-color rounded-2xl outline-none focus:border-accent transition-colors"
          type="text"
          placeholder="Email Subject"
        />
      </div>
      <div className="px-8 py-4 flex flex-col items-center gap-6">
        <textarea
          className="w-full h-32 bg-white rounded-2xl text-text-primary p-4 focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Your Message"
        />
        <button className=" bg-accent hover:bg-bg-secondary rounded-lg px-20 py-2 text-white font-semibold">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
