import React from "react";

const Button = ({ text, link, className, color = "primary", download }) => {
  return (
    <a
      href={link}
      download={download}
      rel="noopener noreferrer"
      className={`hover:text-black font-bold relative inline-flex items-center justify-center px-6 py-3 overflow-hidden cursor-pointer  text-${color} border-2 border-${color} rounded-lg shadow-md group ${className}`}
    >
      <span
        className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-full translate-y-full bg-${color} group-hover:translate-x-0 group-hover:translate-y-0`}
      ></span>
      <span
        className={`absolute inset-0 w-full h-full border-2 border-${color} rounded-lg`}
      ></span>
      <span className="relative ">{text}</span>
    </a>
  );
};

export default Button;
