// import React from "react";
// import DashboardNavbar from "../components/dashboard/DashboardNavbar";
// import StatsRow from "../components/dashboard/StatsRow";
// import CourseCard from "../components/dashboard/CourseCard";
// import { useEffect, useState } from "react";
// import { getCourses } from "../services/courseService";

// export default function DashboardPage() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     getCourses().then(res => setCourses(res.data));
//   }, []);

//   return (
//     <div className="min-h-screen bg-bg">
//       <DashboardNavbar />
//       <StatsRow courses={courses} />
//       <div className="p-10 grid md:grid-cols-3 gap-6">
//         {courses.map(course => (
//           <CourseCard key={course._id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";

import { useEffect, useState } from "react";
import { getCourses } from "../services/courseService";
import CourseCard from "../components/dashboard/CourseCard";
import StatsRow from "../components/dashboard/StatsRow";

export default function DashboardPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((res) => setCourses(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#07080d]">
      <StatsRow courses={courses} />
      <div className="p-10 grid md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}