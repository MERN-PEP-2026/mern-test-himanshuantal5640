// // import React from "react";
// // import DashboardNavbar from "../components/dashboard/DashboardNavbar";
// // import StatsRow from "../components/dashboard/StatsRow";
// // import CourseCard from "../components/dashboard/CourseCard";
// // import { useEffect, useState } from "react";
// // import { getCourses } from "../services/courseService";

// // export default function DashboardPage() {
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     getCourses().then(res => setCourses(res.data));
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-bg">
// //       <DashboardNavbar />
// //       <StatsRow courses={courses} />
// //       <div className="p-10 grid md:grid-cols-3 gap-6">
// //         {courses.map(course => (
// //           <CourseCard key={course._id} course={course} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";

// import { useEffect, useState } from "react";
// import { getCourses } from "../services/courseService";
// import CourseCard from "../components/dashboard/CourseCard";
// import StatsRow from "../components/dashboard/StatsRow";

// export default function DashboardPage() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     getCourses().then((res) => setCourses(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#07080d]">
//       <StatsRow courses={courses} />
//       <div className="p-10 grid md:grid-cols-3 gap-6">
//         {courses.map((course) => (
//           <CourseCard key={course._id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useEffect, useState, useContext } from "react";
import { getCourses } from "../services/courseService";
import CourseCard from "../components/dashboard/CourseCard";
import StatsRow from "../components/dashboard/StatsRow";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import EmptyState from "../components/dashboard/EmptyState";
import { ToastContext } from "../context/ToastContext";

export default function DashboardPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const { showToast } = useContext(ToastContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCourses();
        setCourses(res.data);
      } catch (err) {
        showToast("Unauthorized. Please login again.", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-[#07080d] text-white">
      
      <DashboardNavbar />

      <StatsRow courses={courses} />

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-[#c8f135] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : courses.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="p-10 grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}