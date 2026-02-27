import React from "react";
import { useState } from "react";
import { createCourse } from "../../services/courseService";

export default function CourseFormModal({ onClose, onCreated }) {
  const [form, setForm] = useState({
    courseName: "",
    courseDescription: "",
    instructor: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await createCourse(form);
      onCreated();     // refresh list
      onClose();       // close modal
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-[#10121a] p-8 rounded-xl w-96 border border-[#252838]">
        <h2 className="mb-6 font-bold text-lg">Create Course</h2>

        <div className="space-y-4">
          <input
            placeholder="Course Name"
            className="w-full p-3 bg-[#181b26] border border-[#252838] rounded-lg"
            onChange={(e) =>
              setForm({ ...form, courseName: e.target.value })
            }
          />

          <input
            placeholder="Description"
            className="w-full p-3 bg-[#181b26] border border-[#252838] rounded-lg"
            onChange={(e) =>
              setForm({ ...form, courseDescription: e.target.value })
            }
          />

          <input
            placeholder="Instructor"
            className="w-full p-3 bg-[#181b26] border border-[#252838] rounded-lg"
            onChange={(e) =>
              setForm({ ...form, instructor: e.target.value })
            }
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[#c8f135] text-black py-3 rounded-lg font-bold"
          >
            {loading ? "Creating..." : "Create"}
          </button>

          <button
            onClick={onClose}
            className="w-full text-gray-400 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}