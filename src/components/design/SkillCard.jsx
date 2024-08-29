import React from "react";

const SkillCard = ({ title, icon, color }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex justify-center items-center border-2 border-${color} w-24 h-24 rounded-xl`}
      >
        <span>{icon}</span>
      </div>
      <div className={`text-${color} font-bold`}>{title}</div>
    </div>
  );
};

export default SkillCard;
