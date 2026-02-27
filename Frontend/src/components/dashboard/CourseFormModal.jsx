import React from "react";
import { useState } from "react";
import { createCourse } from "../../services/courseService";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function CourseFormModal({ onClose }) {
  const [form, setForm] = useState({
    courseName: "",
    courseDescription: "",
    instructor: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await createCourse(form);
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-[#10121a] p-8 rounded-xl w-96">
        <h2 className="mb-6 font-bold">Create Course</h2>

        <div className="space-y-4">
          <Input
            placeholder="Course Name"
            onChange={(e) =>
              setForm({ ...form, courseName: e.target.value })
            }
          />
          <Input
            placeholder="Description"
            onChange={(e) =>
              setForm({ ...form, courseDescription: e.target.value })
            }
          />
          <Input
            placeholder="Instructor"
            onChange={(e) =>
              setForm({ ...form, instructor: e.target.value })
            }
          />

          <Button loading={loading} full onClick={handleSubmit}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}