import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="bg-white/10 backdrop-blur-md text-white w-full max-w-6xl rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Contact Info / Illustration */}
        <div className="md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
          <p className="text-gray-200 mb-6">
            Have questions or just want to get in touch? We’d love to hear from you!
          </p>
          <div className="space-y-4 text-sm">
            <div>
              <span className="font-semibold">Email:</span> contact@yourdomain.com
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +91 12345 67890
            </div>
            <div>
              <span className="font-semibold">Address:</span> Your Street, Your City
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="md:w-1/2 p-10">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-300">Send a Message</h3>
          <form className="space-y-5">
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-800/70 rounded-xl outline-none border border-slate-600 focus:border-indigo-500 transition"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-slate-800/70 rounded-xl outline-none border border-slate-600 focus:border-indigo-500 transition"
              />
            </div>
            <div className="relative">
              <textarea
                rows="5"
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-slate-800/70 rounded-xl outline-none border border-slate-600 focus:border-indigo-500 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
