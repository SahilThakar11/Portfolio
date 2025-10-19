import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="hidden fixed bottom-0 left-6 md:flex flex-col items-center z-10">
      <a
        href="https://github.com/SahilThakar11"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 text-slate-500 hover:text-slate-50 transition duration-300"
        aria-label="GitHub Repository"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/sahil-thakar/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 text-slate-500 hover:text-slate-50 transition duration-300"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/sahil_3113/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 text-slate-500 hover:text-slate-50 transition duration-300"
        aria-label="Instagram Profile"
      >
        <FaInstagram size={24} />
      </a>
      <div className="w-px h-64 bg-slate-500 mt-4"></div>
    </div>
  );
};

export default SocialIcons;
