import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>Create Account</div>
        <div>Add Courses</div>
        <div>Manage Dashboard</div>
      </div>
    </section>
  );
}