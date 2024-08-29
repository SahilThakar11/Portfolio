import React, { useState } from "react";

const HamburgerMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div
      className={`w-8 h-4 flex flex-col justify-between items-center cursor-pointer transform transition-transform duration-300 ${
        isOpen ? "rotate-240" : "rotate-180"
      }`}
      onClick={toggleMenu}
    >
      <span
        className={`block w-full h-0.5 bg-primary transform transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-1.5" : "rotate-0"
        }`}
      />
      <span
        className={`block w-full h-0.5 bg-primary transform transition-opacity duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block w-full h-0.5 bg-primary transform transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
        }`}
      />
    </div>
  );
};

export default HamburgerMenu;
