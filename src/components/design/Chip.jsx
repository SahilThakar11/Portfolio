import React from "react";

const Chip = ({ text }) => {
  return (
    <div className="flex items-center justify-center p-2 bg-gray-700/70 text-white rounded-lg select-none">
      <p className="text-sm font-semibold">{text}</p>
    </div>
  );
};

export default Chip;
