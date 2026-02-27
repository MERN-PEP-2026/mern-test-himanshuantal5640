import React from "react";
export default function Features() {
  return (
    <section id="features" className="py-24 px-10">
      <h2 className="text-4xl font-bold font-syne mb-12 text-center">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#10121a] p-6 rounded-xl border border-[#252838]">
          <h3 className="text-[#c8f135] font-bold mb-3">OTP Verification</h3>
          <p className="text-gray-400 text-sm">
            Secure email-based OTP verification for authentication.
          </p>
        </div>

        <div className="bg-[#10121a] p-6 rounded-xl border border-[#252838]">
          <h3 className="text-blue-400 font-bold mb-3">Google OAuth</h3>
          <p className="text-gray-400 text-sm">
            One-click login using Google account.
          </p>
        </div>

        <div className="bg-[#10121a] p-6 rounded-xl border border-[#252838]">
          <h3 className="text-teal-400 font-bold mb-3">Course Management</h3>
          <p className="text-gray-400 text-sm">
            Create, edit and delete courses easily.
          </p>
        </div>
      </div>
    </section>
  );
}