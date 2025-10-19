import React, { useState } from "react";
import { workExperience, education } from "../constants/index";

const History = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [selectedEducation, setSelectedEducation] = useState(0);

  return (
    <section
      id="work"
      className="flex flex-col justify-center min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1 mb-[10rem]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold text-secondary mb-8">
          <span className="text-primary">02.</span> Work Experience
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex md:flex-col md:w-1/3 border-l-2 h-min border-gray-700 text-gray-200 mb-8 md:mb-0">
            {workExperience.map((job, index) => (
              <button
                key={index}
                className={`text-left pl-4 py-2 text-lg md:text-base font-medium transition duration-700 cursor-pointer hover:text-secondary ${
                  selectedCompany === index
                    ? "text-secondary bg-cyan-800/20 border-l-4 border-primary w-full h-min"
                    : ""
                }`}
                onClick={() => setSelectedCompany(index)}
              >
                {job.company}
              </button>
            ))}
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-xl font-semibold text-primary">
              {workExperience[selectedCompany].role}{" "}
              <span className="text-secondary">
                @ {workExperience[selectedCompany].company}
              </span>
            </h3>
            <p className="text-sm text-gray-200 mt-1 mb-4">
              {workExperience[selectedCompany].duration}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
              {workExperience[selectedCompany].responsibilities.map(
                (item, index) => (
                  <li key={index} className="leading-relaxed">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <br />
        <br />
        <h2 className="text-3xl font-semibold text-secondary mb-8">
          <span className="text-primary"></span> Education
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex md:flex-col md:w-1/3 border-l-2 h-min border-gray-700 text-gray-200 mb-8 md:mb-0">
            {education.map((place, index) => (
              <button
                key={index}
                className={`text-left pl-4 py-2 text-lg md:text-base font-medium transition duration-700 cursor-pointer hover:bg-cyan-800/20 hover:text-secondary ${
                  selectedEducation === index
                    ? "text-secondary bg-cyan-800/20 border-l-4 border-primary w-full h-min"
                    : ""
                }`}
                onClick={() => setSelectedEducation(index)}
              >
                {place.company}
              </button>
            ))}
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-xl font-semibold text-primary">
              {education[selectedEducation].role}{" "}
              <span className="text-secondary">
                @ {education[selectedEducation].company}
              </span>
            </h3>
            <p className="text-sm text-gray-200 mt-1 mb-4">
              {education[selectedEducation].duration}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
              {education[selectedEducation].responsibilities.map(
                (item, index) => (
                  <li key={index} className="leading-relaxed">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
