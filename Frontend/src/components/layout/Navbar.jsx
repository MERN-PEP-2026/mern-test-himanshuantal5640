import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#07080d]/80 backdrop-blur-lg border-b border-[#252838] px-10 py-4 flex justify-between items-center z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[#c8f135] rounded-lg flex items-center justify-center font-bold text-black">
          C
        </div>
        <span className="font-syne font-bold text-lg">CourseHub</span>
      </div>

      <div className="flex gap-6 text-sm text-gray-400">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <Link to="/auth" className="text-[#c8f135]">Login</Link>
      </div>
    </nav>
  );
}