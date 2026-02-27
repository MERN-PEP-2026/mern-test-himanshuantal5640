import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-6 border-b border-[#252838]">
      <h1 className="font-bold text-xl">Dashboard</h1>
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
  );
}