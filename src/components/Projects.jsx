import React, { useState } from "react";
import { projects } from "../constants/index";
import Chip from "./design/Chip";
import GitHubButton from "./design/GithubButton";
import DemoButton from "./design/DemoButton";
import { FaLaptop, FaTabletAlt } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const ProjectCard = ({ project, reverse }) => {
  const [selectedDevice, setSelectedDevice] = useState("Desktop");

  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } mb-12 lg:mb-16`}
    >
      <div className="lg:w-1/2 flex-shrink-0 px-4 md:px-0">
        {project.isResponsive ? (
          <div>
            <div
              className={`flex gap-2 justify-center items-center overflow-x-auto`}
            >
              {project.mobileImgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={project.title}
                  className={`w-24 sm:w-28 md:w-44 object-contain rounded-md shadow-lg flex-shrink-0 ${
                    selectedDevice === "Mobile" ? "" : "hidden"
                  }`}
                />
              ))}
              <img
                src={project.tabletImg}
                alt={project.title}
                className={`w-full object-contain rounded-md shadow-lg max-h-96 ${
                  selectedDevice === "Tablet" ? "flex" : "hidden"
                }`}
              />{" "}
              <img
                src={project.desktopImg}
                alt={project.title}
                className={`w-full object-contain rounded-md shadow-lg ${
                  selectedDevice === "Desktop" ? "flex" : "hidden"
                }`}
              />
            </div>
          </div>
        ) : (
          <div>
            {project.isOnlyMobile ? (
              <div
                className={`flex gap-2 justify-start items-center overflow-x-auto pb-2`}
              >
                {project?.mobileImgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={project.title}
                    className={`w-28 sm:w-32 md:w-32 object-contain rounded-md shadow-lg flex-shrink-0`}
                  />
                ))}
              </div>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-contain rounded-md shadow-lg"
              />
            )}
          </div>
        )}
        <div
          className={`${
            project.isResponsive ? "flex" : "hidden"
          }  justify-center mt-3`}
        >
          <FaLaptop
            className={`w-6 h-6 inline-block cursor-pointer ${
              selectedDevice === "Desktop" ? "fill-primary" : ""
            }`}
            onClick={() => {
              setSelectedDevice("Desktop");
            }}
          />
          <FaTabletAlt
            className={`w-6 h-6 inline-block cursor-pointer ml-5 ${
              selectedDevice === "Tablet" ? "fill-primary" : ""
            }`}
            onClick={() => {
              setSelectedDevice("Tablet");
            }}
          />
          <FaMobileScreen
            className={`w-6 h-6 inline-block cursor-pointer ml-5 ${
              selectedDevice === "Mobile" ? "fill-primary" : ""
            }`}
            onClick={() => {
              setSelectedDevice("Mobile");
            }}
          />
        </div>
      </div>
      <div
        className={`lg:w-1/2 flex flex-col justify-center text-left p-6 lg:px-12 ${
          reverse ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"
        }`}
      >
        <p className="text-white text-sm font-semibold ">
          <span className={`${project.categoryColor} p-1 rounded-lg px-3`}>
            {project.category}
          </span>
        </p>
        <h3 className="text-2xl text-primary font-bold mt-2">
          {project.title}
        </h3>
        <div className="bg-primary/10 p-4 rounded-md shadow-lg mt-4">
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
        <ul className={`flex flex-wrap text-sm text-gray-400 mt-4 gap-2`}>
          {project.techStack.map((tech, index) => (
            <li key={index} className="">
              <Chip text={tech} />
            </li>
          ))}
        </ul>
        {project.comingsoon === false ? (
          <div className="flex flex-col md:flex-row mt-4">
            {project.githubAvailable && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubButton />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 md:ml-4"
              >
                <DemoButton text={project.buttonName} />
              </a>
            )}
            {project.isCaseStudy && (
              <Link
                to={project.caseStudyLink}
                className="mt-4 md:mt-0 md:ml-4 text-secondary underline font-bold cursor-pointer flex flex-row gap-0.5 items-center hover:text-secondary/80 transition"
              >
                View Case Study <ArrowRight width={18} height={18} />
              </Link>
            )}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row mt-4">
            {!project.githubAvailable && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubButton />
              </a>
            )}
            <button
              disabled
              className="mt-4 md:mt-0 md:ml-4 bg-primary/80 rounded-md w-[13rem] h-8"
            >
              Demo Coming Soon
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="flex flex-col justify-center min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1">
      <div id="projects" className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold text-secondary mb-8">
          <span className="text-primary">04.</span> Some Things I{"'"}ve Built
        </h2>
        <div className="flex flex-row w-full border-t-2 overflow-x-auto justify-start md:justify-center h-auto border-gray-700 text-gray-400 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 whitespace-nowrap flex-shrink-0 ${
                selectedCategory === category
                  ? "text-secondary font-semibold border-t-4  border-primary bg-primary/10 h-min"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {projects.map((project, index) => {
          if (
            selectedCategory === "All" ||
            selectedCategory === project.category
          ) {
            return (
              <ProjectCard
                key={index}
                project={project}
                reverse={index % 2 === 0}
              />
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
