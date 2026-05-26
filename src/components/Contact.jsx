import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-300">
      <h1 className="pt-20 pb-12 font-bold text-3xl text-center text-slate-900 ">
        Contact <span className="text-blue-900">Me!</span>
      </h1>
      <div className="grid gap-4 grid-cols-2 px-8 py-4">
        <input
          className="bg-white text-slate-900 w-full px-4 py-4 border border-slate-300 rounded-2xl outline-none focus:border-blue-500 transition-colors"
          type="text"
          placeholder="Enter Name"
        />
        <input
          className="bg-white text-slate-900 w-full px-4 py-4 border border-slate-300 rounded-2xl outline-none focus:border-blue-500 transition-colors"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="bg-white text-slate-900 w-full px-4 py-4 border border-slate-300 rounded-2xl outline-none focus:border-blue-500 transition-colors"
          type="text"
          placeholder="Phone number"
        />
        <input
          className="bg-white text-slate-900 w-full px-4 py-4 border border-slate-300 rounded-2xl outline-none focus:border-blue-500 transition-colors"
          type="text"
          placeholder="Email Subject"
        />
      </div>
      <div className="px-8 py-4 flex flex-col items-center gap-6">
        <textarea
          className="w-full h-32 bg-white rounded-2xl text-slate-900 p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Your Message"
        />
        <button className=" bg-blue-600 hover:bg-blue-800 rounded-lg px-20 py-2 text-white font-semibold">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
