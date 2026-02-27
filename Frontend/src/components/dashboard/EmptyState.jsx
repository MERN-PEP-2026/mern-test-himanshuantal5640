import React from "react";
export default function EmptyState({ onAdd }) {
  return (
    <div className="text-center py-20 text-gray-400">
      <h3 className="text-xl mb-3">No Courses Found</h3>
      <p className="mb-6">Create your first course to get started.</p>

      <button
        onClick={onAdd}
        className="bg-[#c8f135] text-black px-6 py-3 rounded-lg font-semibold"
      >
        Create Course
      </button>
    </div>
  );
}