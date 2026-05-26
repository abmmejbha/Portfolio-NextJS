import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-400">
        <h1 className="font-bold text-3xl text-center text-white ">Contact <span className="text-blue-900">Me!</span></h1>
      <div className="grid grid-cols-2 m-4">
        <input type="text" placeholder="Enter Name" />
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Phone number" />
        <input type="text" placeholder="Email Subject" />
        <input className="space-y-2 px-80 py-40 bg-slate-500 rounded-2xl text-white text-center" type="text" placeholder="Your Message" />

      </div>
        <button className=" bg-blue-600 hover:bg-blue-800 rounded-lg px-20 py-2 text-white font-semibold">
          Send Message
        </button>
    </div>
  );
};

export default Contact;
