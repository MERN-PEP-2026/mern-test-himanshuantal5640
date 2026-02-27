import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardNavbar({ onAdd }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-6 border-b border-[#252838]">
      <h1 className="font-bold text-xl">Dashboard</h1>

      <div className="flex gap-6 items-center">
        <button
          onClick={onAdd}
          className="bg-[#c8f135] text-black px-4 py-2 rounded-lg font-semibold"
        >
          + Add Course
        </button>

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="text-red-400"
        >
          Logout
        </button>
      </div>
    </div>
  );
}