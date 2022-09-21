import React from "react";
import ProjectItem from "../../containers/sections/projectItem";
import BudopointImages from "../../containers/projects/BudopointImages";
import KranplattImages from "../../containers/projects/KranplattImages";
import ConfiguratorImages from "../../containers/projects/ConfiguratorImages";
import NftImages from "../../containers/projects/NftImages";
import { motion } from "framer-motion";

export const PortfolioProjects = [
  {
    id: 1,
    name: "Kranplatt",
    role: "Front-end ∙ UI Designer ∙ 3D",
    desc: "Simple web application with mobile AR feature & 3D view for better product visualization.",
    tags: ["react", "emotion.js", "framer-motion", "model-viewer", "cinema 4D", "octane render"],
    images: <KranplattImages />,
  },
  {
    id: 2,
    name: "Budopoint store",
    role: "UI Developer",
    desc: "Clean & minimalistic builder's supply store",
    tags: ["next.js", "react-ts", "tailwind"],
    images: <BudopointImages />,
  },
  {
    id: 3,
    name: "iLift Configurator",
    role: "Front-end ∙ UI Designer ∙ 3D",
    desc: "Elevator configurator with availability to see a full product in 360°.",
    tags: ["react", "framer-motion", "react-three", "cinema 4D", "octane render"],
    images: <ConfiguratorImages />,
  },
  {
    id: 4,
    name: "NFT Dice Club",
    role: "UI Designer ∙ 3D",
    desc: "10,000 dice NFT collection created on solana blockchain, randomly generated from 726841 possibilities.",
    tags: ["cinema 4D", "octane render"],
    images: <NftImages />,
  },
];

const tagItem = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Projects = () => {
  return (
    <>
      {PortfolioProjects.map((value) => {
        return (
          <ProjectItem key={value.id} index={`section_${value.id}`} name={value.name} role={value.role} description={value.desc} images={value.images}>
            {value.tags.map((tag, index) => (
              <motion.div
                variants={tagItem}
                title={tag}
                className=" mx-0.5 mb-1 inline-block select-none rounded-xl bg-blue-500 py-0.5 px-3 text-t-xs text-white md:mb-3 md:text-tag"
                key={index}
              >
                {tag}
              </motion.div>
            ))}
          </ProjectItem>
        );
      })}
    </>
  );
};

export default Projects;
