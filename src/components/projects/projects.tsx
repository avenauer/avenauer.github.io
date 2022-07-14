import React from "react";
import ProjectItem from "../../containers/sections/projectItem";
import ConfiguratorImages from "../../containers/projects/ConfiguratorImages";
import Paragraph from "../common/Paragraph";

export const PortfolioProjects = [
  {
    id: 1,
    name: "Budopoint Marketplace",
    role: "UI Developer",
    desc: "Description",
    tags: ["react-ts", "tailwind"],
    images: <div />,
  },
  {
    id: 2,
    name: "Kranplatt",
    role: "Front-end Developer ∙ UI Designer ∙ 3D",
    desc: "Simple web application with mobile AR feature & 3D view for better product visualisation.",
    tags: ["react", "emotion.js", "framer-motion", "model-viewer"],
    images: <div>asdsad</div>,
  },
  {
    id: 3,
    name: "iLift VR configurator",
    role: "Front-end Developer ∙ UI ∙ 3D",
    desc: "Description",
    tags: ["react", "framer-motion", "react-three"],
    images: <ConfiguratorImages />,
  },
  {
    id: 4,
    name: "NFT Dice",
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
                <span className="rounded-xl border-2 border-green-400" key={index}>
                  <Paragraph size="xs" text={tag} key={index} />
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
