import React from "react";
import ProjectItem from "../../containers/sections/projectItem";
import ConfiguratorImages from "../../containers/projects/ConfiguratorImages";
import Paragraph from "../common/Paragraph";

export const PortfolioProjects = [
  {
    id: 1,
    name: "Budopoint Marketplace",
    role: "UI Developer",
    desc: "",
    tags: ["next,js", "react-ts", "tailwind"],
    images: <ConfiguratorImages />,
  },
  {
    id: 2,
    name: "Kranplatt",
    role: "Front-end Developer ∙ UI Designer ∙ 3D",
    desc: "Simple web application with mobile AR feature & 3D view for better product visualization.",
    tags: ["react", "emotion.js", "framer-motion", "model-viewer"],
    images: <div>asdsad</div>,
  },
  {
    id: 3,
    name: "iLift Configurator",
    role: "Front-end Developer ∙ UI ∙ 3D",
    desc: "Elevator configurator with availability to see a full product 360°.",
    tags: ["react", "framer-motion", "react-three"],
    images: <ConfiguratorImages />,
  },
  {
    id: 4,
    name: "NFT Dice Club",
    role: "3D",
    desc: "Description",
    tags: ["tag", "tag2", "tag3"],
    images: <div></div>,
  },
];

const Projects = () => {
  return (
    <>
      {PortfolioProjects.map((value) => {
        return (
          <div key={value.id} className="">
            <ProjectItem key={value.id} index={`section_${value.id}`} name={value.name} role={value.role} description={value.desc} images={value.images}>
              {value.tags.map((tag, index) => (
                <span className="mx-0.5 select-none rounded-xl bg-blue-500 py-1 px-3 text-tag text-white" key={index}>
                  {tag}
                </span>
              ))}
            </ProjectItem>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
