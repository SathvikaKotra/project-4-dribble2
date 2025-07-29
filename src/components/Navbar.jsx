import React from "react";

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-cyan-400">HiLa VPN</h1>

        {/* Navigation links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#features" className="hover:text-cyan-400 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-cyan-400 transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </nav>

        {/* Download Button */}
        <a
          href="#"
          className="bg-none text-cyan-400 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-400 transition border hover:text-black  border-cyan-400"
        >
          Download App
        </a>
      </div>
    </header>
  );
};

export default Navbar;
