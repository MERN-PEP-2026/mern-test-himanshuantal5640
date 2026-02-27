import React from "react";

import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Ready to start learning?
      </h2>
      <Link
        to="/auth"
        className="bg-[#c8f135] text-black px-8 py-4 rounded-xl font-bold"
      >
        Join Now
      </Link>
    </section>
  );
}