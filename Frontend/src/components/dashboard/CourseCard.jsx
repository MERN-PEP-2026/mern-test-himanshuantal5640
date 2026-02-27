import React from "react";
import { deleteCourse } from "../../services/courseService";

export default function CourseCard({ course }) {
  const handleDelete = async () => {
    await deleteCourse(course._id);
    window.location.reload();
  };

  return (
    <div className="bg-[#10121a] border border-[#252838] p-6 rounded-xl">
      <h3 className="font-bold font-syne mb-2">{course.courseName}</h3>
      <p className="text-gray-400 text-sm mb-4">
        {course.courseDescription}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {course.instructor}
        </span>
        <button
          onClick={handleDelete}
          className="text-red-400 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}