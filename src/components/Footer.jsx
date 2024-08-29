import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 bg-background">
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-slate-500 mb-4"></div>

        <div className="flex justify-between w-[50%] mx-auto mb-5 md:hidden">
          <a
            href="https://github.com/SahilThakar11"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="text-2xl mx-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-thakar/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-2xl mx-2" />
          </a>
          <a
            href="https://www.instagram.com/sahil_3113/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl mx-2" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developed by Sahil Thakar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
