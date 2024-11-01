import React from "react";
import SkillCard from "./design/SkillCard";
import { sortedSkills } from "../constants/index";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1 mb-[10rem]"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-secondary mb-8">
          <span className="text-primary">03.</span> Technologies I've Worked
          With
        </h2>
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-row gap-3 items-center">
            <div className=" bg-primary w-4 h-4 rounded-full"></div>
            <span className="text-primary">Proficient</span>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <div className="flex justify-center bg-secondary w-4 h-4 rounded-full"></div>
            <span className="text-secondary">Intermediate</span>
          </div>
        </div>
        <div className="flex flex-wrap xl:w-[60%] xl:mx-auto gap-3 justify-center items-center mt-5">
          {sortedSkills.map((item, index) =>
            item.skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                section={skill.section}
                color={skill.color}
                icon={skill.icon}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
