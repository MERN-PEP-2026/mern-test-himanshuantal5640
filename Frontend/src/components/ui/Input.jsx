import React from "react";
export default function Input({
  type = "text",
  placeholder,
  value,
  onChange
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-[#10121a] border border-[#252838] rounded-lg focus:border-[#c8f135] outline-none"
    />
  );
}