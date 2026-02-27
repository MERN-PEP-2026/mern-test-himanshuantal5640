
import React from "react";
import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";
import CourseCard from "../components/dashboard/CourseCard";
import StatsRow from "../components/dashboard/StatsRow";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import EmptyState from "../components/dashboard/EmptyState";
import CourseFormModal from "../components/dashboard/CourseFormModal";

export default function DashboardPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-[#07080d] text-white">

      <DashboardNavbar onAdd={() => setShowModal(true)} />

      <StatsRow courses={courses} />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-[#c8f135] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : courses.length === 0 ? (
        <EmptyState onAdd={() => setShowModal(true)} />
      ) : (
        <div className="p-10 grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}

      {showModal && (
        <CourseFormModal
          onClose={() => setShowModal(false)}
          onCreated={fetchCourses}
        />
      )}
    </div>
  );
}