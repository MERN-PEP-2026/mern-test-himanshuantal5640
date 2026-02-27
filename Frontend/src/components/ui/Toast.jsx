import React from "react";


import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-lg text-sm font-semibold z-50
      ${type === "success" ? "bg-green-500" : "bg-red-500"}
    `}>
      {message}
    </div>
  );
}