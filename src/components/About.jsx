import React, { useState } from "react";
import photo from "../assets/photo.png";

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <section
      id="about"
      className="flex flex-col justify-center min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1 mb-[10rem]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold text-secondary mb-8">
          <span className="text-primary">01.</span> About Me
        </h2>
        <div className="flex flex-col justify-center md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/2">
            <p className="text-md text-gray-400 leading-relaxed">
              Hello! My Name is Sahil Thakar. My journey into technology began
              with a passion for problem-solving and a fascination with how
              things work behind the scenes. Over the years, I've gained
              valuable experience through various projects, and I{"’"}m excited
              about the path I{"’"}m on.
            </p>
            <br />
            <p className="text-md text-gray-400">
              I’m always excited to learn and explore new technologies and look
              forward to what the future holds in the field of technology.
            </p>
            <p className="text-md text-gray-300 leading-relaxed mt-4">
              Here is a quick overview of technologies I've been working with
              recently:
            </p>
            <ul className="list-disc list-inside mt-4 grid font-bold grid-cols-2 gap-2 text-primary">
              <li>JavaScript</li>
              <li>C#</li>
              <li>React</li>
              <li>Angular</li>
              <li>.NET Core</li>
              <li>Node.js</li>
            </ul>
            <a
              href="#skills"
              className="flex justify-center font-semibold underline underline-offset-4 text-secondary mt-4 mb-10"
            >
              View All Skills
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div
              className={`absolute h-48 w-48 -top-5 -left-7 md:left-3  lg:left-1 xl:left-16 2xl:left-[130px] border-2 rounded-md border-secondary lg:h-80 lg:w-80 z-10 transition-transform duration-300  ${
                hover
                  ? "translate-x-14 translate-y-12 lg:translate-x-16 lg:translate-y-12 custom-set"
                  : ""
              }`}
            ></div>

            <img
              src={photo}
              alt="Your Name"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="h-48 w-48 lg:h-80 lg:w-80 object-cover rounded-lg shadow-lg z-20 filter grayscale hover:filter-none transition duration-300"
            />

            <div
              className={`absolute h-48 w-48 -bottom-5 -right-7 md:right-3  lg:-bottom-7 lg:right-0 xl:right-16 2xl:right-[130px] border-2 rounded-md border-primary lg:h-80 lg:w-80 z-10 transition-transform duration-300 ${
                hover
                  ? "-translate-x-14 -translate-y-12 lg:-translate-x-16 lg:-translate-y-12"
                  : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
