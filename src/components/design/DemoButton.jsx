import React from "react";

const DemoButton = ({ text }) => {
  return (
    <button className="relative flex items-center bg-white text-black font-inherit px-5 text-[17px] font-medium rounded-[0.5em] border-none tracking-wide shadow-[inset_0_0_1.6em_-0.6em_#714da6] overflow-hidden h-[2.2em] w-[10.5em] pr-[3.3em] cursor-pointer group">
      {text}
      <div className="absolute flex items-center justify-center bg-black ml-[1em] h-[1.7em] w-[1.7em] rounded-[0.5em] shadow-[0.1em_0.1em_0.6em_0.2em_white] right-[0.3em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)]">
        <svg
          height="18"
          width="18"
          viewBox="0 0 22 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1.1em] text-white transition-transform duration-300 group-hover:translate-x-[0.1em]"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default DemoButton;
