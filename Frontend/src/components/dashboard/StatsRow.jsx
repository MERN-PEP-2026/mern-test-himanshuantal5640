import React from "react";
export default function StatsRow({ courses }) {
  return (
    <div className="grid md:grid-cols-3 border-b border-[#252838]">
      <div className="p-6 bg-[#10121a]">
        <h2 className="text-3xl font-bold text-[#c8f135]">
          {courses.length}
        </h2>
        <p className="text-gray-400 text-sm">Total Courses</p>
      </div>
    </div>
  );
}