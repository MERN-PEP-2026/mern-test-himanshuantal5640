import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-extrabold font-syne mb-6">
        Learn Without <span className="text-[#c8f135]">Limits</span>
      </h1>
      <p className="text-gray-400 max-w-xl mb-8">
        Manage courses, authenticate users securely with OTP & Google login,
        and build your modern student platform.
      </p>
      <Link
        to="/auth"
        className="bg-[#c8f135] text-black px-8 py-4 rounded-xl font-bold"
      >
        Get Started
      </Link>
    </section>
  );
}