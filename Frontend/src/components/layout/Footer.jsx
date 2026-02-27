import React from "react";
export default function Footer() {
  return (
    <footer className="border-t border-[#252838] mt-20 py-10 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} CourseHub. All rights reserved.
    </footer>
  );
}