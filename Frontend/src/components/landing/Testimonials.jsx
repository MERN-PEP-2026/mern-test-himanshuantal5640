import React from "react";
export default function Testimonials() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-12">
        What Students Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#10121a] p-6 rounded-xl">
          "Amazing platform!"
        </div>
        <div className="bg-[#10121a] p-6 rounded-xl">
          "Very smooth experience."
        </div>
        <div className="bg-[#10121a] p-6 rounded-xl">
          "Highly recommended!"
        </div>
      </div>
    </section>
  );
}