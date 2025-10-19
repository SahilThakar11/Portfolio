import React from "react";
import Button from "./design/Button";
import { FaCode, FaDownload } from "react-icons/fa";
import "../components/styles/Hero.css";
import { ArrowDownToLine } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1"
    >
      <div className="container mx-auto px-6 lg:w-1/2">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">
          Hi, I'm Sahil Thakar
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
          Aspiring Software Developer
        </h2>
        <p className="text-md w-[80%] md:text-lg text-gray-200 mb-8 md:w-[70%] lg:w-[60%] xl:w-[70%]">
          I am currently pursuing an advanced diploma in IT Innovation and
          Design at Conestoga College. I am seeking Co-op opportunities for
          Summer 2026. I have completed 12 month Co-op at{" "}
          <span className="text-primary cursor-pointer font-bold hover:underline transition-transform">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/equitabletogether/"
              aria-label="Equitable Insurance Company Website"
            >
              Equitable
            </a>
          </span>{" "}
          as{" "}
          <span className="text-secondary font-bold">Software Developer</span> .
        </p>
        <Button
          text="Get My Resume"
          className="w-[80%] md:w-[19rem]"
          link="/Resume.pdf"
          download="Resume_Sahil_Thakar.pdf"
          Icon={ArrowDownToLine}
        />
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center w-1/3 mx-auto">
        <div className="lg:flex flex-row justify-center">
          <FaCode size={100} className="bouncing fill-primary" />
          <h1 className="text-4xl font-bold text-secondary flex items-center lg:ml-5 bouncing ">
            Coding is Fun
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
