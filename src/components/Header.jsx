import React, { useState } from "react";
import logo from "../assets/Portfolio.png";
import HamburgerMenu from "./design/HamburgerMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <header className="fixed w-full top-0 bg-opacity-90 backdrop-filter backdrop-blur-lg bg-[#0a192f] py-4 shadow-md md:shadow-2xl z-[100]">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-[#64FFDA] font-mono text-xl">
            <a href="/#hero">
              <img src={logo} alt="Logo" className="w-10" />
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-[#ccd6f6] hover:text-secondary font-mono text-sm"
            >
              <span className="text-primary">01.</span> About
            </a>
            <a
              href="#work"
              className="text-[#ccd6f6] hover:text-secondary font-mono text-sm"
            >
              <span className="text-primary">02.</span> Work
            </a>
            <a
              href="#skills"
              className="text-[#ccd6f6] hover:text-secondary font-mono text-sm"
            >
              <span className="text-primary">03.</span> Skills
            </a>
            <a
              href="#projects"
              className="text-[#ccd6f6] hover:text-secondary font-mono text-sm"
            >
              <span className="text-primary">04.</span> Projects
            </a>
            <a
              href="#certificates"
              className="text-[#ccd6f6] hover:text-secondary font-mono text-sm"
            >
              <span className="text-primary">05.</span> Certificates
            </a>
            <a
              href="#contact"
              className="text-[#ccd6f6] hover:text-secondary font-mono text-sm"
            >
              <span className="text-primary">06.</span> Contact
            </a>
          </nav>

          <div
            className="md:hidden flex items-center relative "
            onClick={toggleMenu}
          >
            <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <aside
        className={`md:hidden fixed top-0 right-0 z-50 w-3/4 h-full bg-[#0a192f] transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center space-y-8 h-full">
          <a
            href="#about"
            className="flex flex-col text-center text-[#ccd6f6] hover:text-secondary font-mono text-lg"
            onClick={toggleMenu}
          >
            <span className="text-primary ">01.</span> About
          </a>
          <a
            href="#work"
            className="text-[#ccd6f6] flex flex-col text-center hover:text-secondary font-mono text-lg"
            onClick={toggleMenu}
          >
            <span className="text-primary">02.</span> Work
          </a>
          <a
            href="#skills"
            className="text-[#ccd6f6] flex flex-col text-center hover:text-secondary font-mono text-lg"
            onClick={toggleMenu}
          >
            <span className="text-primary">03.</span> Skills
          </a>
          <a
            href="#projects"
            className="text-[#ccd6f6] flex flex-col text-center hover:text-secondary font-mono text-lg"
            onClick={toggleMenu}
          >
            <span className="text-primary">04.</span> Projects
          </a>
          <a
            href="#certificates"
            className="text-[#ccd6f6] flex flex-col text-center hover:text-secondary font-mono text-lg"
            onClick={toggleMenu}
          >
            <span className="text-primary">05.</span> Certificates
          </a>
          <a
            href="#contact"
            className="text-[#ccd6f6] flex flex-col text-center hover:text-secondary font-mono text-lg"
            onClick={toggleMenu}
          >
            <span className="text-primary">06.</span> Contact
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Header;
