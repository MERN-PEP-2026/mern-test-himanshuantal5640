import React from 'react';
export default function Button({
  children,
  onClick,
  loading = false,
  variant = "primary",
  full = false,
  type = "button"
}) {
  const base =
    "px-4 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";

  const styles = {
    primary: "bg-[#c8f135] text-black hover:bg-[#d9ff47]",
    ghost: "border border-[#252838] bg-[#10121a] hover:bg-[#181b26]",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${base} ${styles[variant]} ${full ? "w-full" : ""}`}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      )}
      {children}
    </button>
  );
}