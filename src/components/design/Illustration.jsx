import React from "react";

const Illustration = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-[300px] h-[300px]">
      <div className="w-[200px] h-[150px] bg-gray-200 rounded-lg flex items-center justify-center relative">
        <div className="text-3xl font-bold text-indigo-600">CODE</div>
      </div>
      <div className="flex absolute -top-12 -left-10">
        <div className="bg-gray-100 px-3 py-1 rounded shadow-md font-bold text-gray-600 rotate-[-10deg]">
          HTML
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded shadow-md font-bold text-gray-600 rotate-[10deg] ml-2">
          C++
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded shadow-md font-bold text-gray-600 rotate-[-15deg] ml-2">
          JAVA
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded shadow-md font-bold text-gray-600 rotate-[5deg] ml-2">
          &lt;/&gt;
        </div>
      </div>
    </div>
  );
};

export default Illustration;
