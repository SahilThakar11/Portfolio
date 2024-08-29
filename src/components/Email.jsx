import React from "react";

const Email = () => {
  return (
    <div className="hidden fixed top-0 right-6 md:flex flex-col items-center z-10">
      <div className="w-px h-64 bg-slate-500 mb-4"></div>
      <a
        href="mailto:thakars311@gmail.com"
        className="text-slate-500 font-semibold hover:text-slate-300 transition duration-300 "
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        thakars311@gmail.com
      </a>
    </div>
  );
};

export default Email;
