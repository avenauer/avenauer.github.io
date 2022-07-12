import React from "react";
import ProjectItem from "../../containers/sections/projectItem";
import Paragraph from "../common/Paragraph";

export const PortfolioProjects = [
  {
    id: 1,
    name: "Budopoint Marketplace",
    role: "Front-end — UI",
    desc: "Description",
    tags: ["tag", "tag2", "tag3"],
  },
  {
    id: 2,
    name: "Kranplatt ",
    role: "Front-end — UI",
    desc: "Description",
    tags: ["tag", "tag2", "tag353"],
  },
  {
    id: 3,
    name: "iLift VR configurator",
    role: "Front-end — UI",
    desc: "Description",
    tags: ["tag", "tag2", "tag3"],
  },
  {
    id: 4,
    name: "NFT Dice",
    role: "Graphic Designer",
    desc: "Description",
    tags: ["tag", "tag2", "tag3"],
  },
];

const Projects = () => {
  return (
    <div>
      {PortfolioProjects.map((value) => {
        return (
          <ProjectItem
            key={value.id}
            index={`section_${value.id}`}
            name={value.name}
            role={value.role}
            description={value.desc}
            tags={<Paragraph className='text-red-500' text={value.tags} size="xs" />}
          />
        );
      })}
    </div>
  );
};

export default Projects;
