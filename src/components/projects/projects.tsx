import React from "react";
import ProjectItem from "../../containers/sections/projectItem";
import {motion} from "framer-motion";
import {Bp, Kranplatt, NFTDice, VR} from "../common/images";
import Paragraph from "../common/text/Paragraph";
import Headline from "../common/text/Headline";
import WideContainer from "../common/wrappers/wideContainer";
import CustomLink from "../common/link/CustomLink";
import {email} from "../../../pages";

export const PortfolioProjects = [
  {
    id: 1,

    name: "Kranplatt",
    linkTo: "https://kranplatt.com",
    role: "Front-end ∙ UI Designer ∙ 3D",
    desc: "Simple web application with mobile AR feature & 3D view for better product visualization.",
    tags: ["react", "emotion.js", "framer-motion", "model-viewer", "cinema 4D", "octane render"],
    images: [
      { id: 4, src: Kranplatt.k1, scale: 1.05, class: "left-1/4", range: [-250, 150], mask: "iphone", revert: true },
      { id: 3, src: Kranplatt.k2, scale: 1, class: "left-2/3", range: [-200, 500], mask: "iphone", revert: false },
      { id: 5, src: Kranplatt.k4, scale: 1.05, class: "right-0", range: [-350, 100], mask: "iphone", revert: false },
      { id: 2, src: Kranplatt.k3, scale: 1.2, class: "top-0 left-0", range: [0, 400], mask: "iphone", revert: false },
    ],
  },
  {
    id: 2,
    name: "Budopoint store",
    linkTo: "https://budopoint.pl",
    role: "UI Developer",
    desc: "Clean & minimalistic builder's supply store.",
    tags: ["next.js", "react-ts", "tailwind"],
    images: [
      { id: 3, src: Bp.bp2, scale: 1.05, class: "right-3", range: [-250, 250], mask: "ipad", revert: false },
      { id: 4, src: Bp.bp1, scale: 1, class: "right-2/3", range: [-150, 100], mask: "iphone", revert: false },
    ],
  },
  {
    id: 3,
    name: "iLift Configurator",
    linkTo: "https://vr.ilift.com.pl",
    role: "Front-end ∙ UI Designer ∙ 3D",
    desc: "Elevator configurator with availability to see a full product in 360°.",
    tags: ["react", "framer-motion", "react-three", "cinema 4D", "octane render"],
    images: [
      { id: 4, src: VR.vr4, scale: 0.85, class: "-right-5", range: [-300, 1], mask: "ipad", revert: true },
      { id: 5, src: VR.vr1, scale: 1.05, class: "right-12", range: [-50, 400], mask: "iphone", revert: true },
      { id: 6, src: VR.vr2, scale: 0.9, class: "left-1/3", range: [-100, 100], mask: "iphone", revert: false },
      { id: 7, src: VR.vr3, scale: 1, class: "left-0", range: [-300, 400], mask: "iphone", revert: true },
    ],
  },
  {
    id: 4,
    name: "NFT Dice Club",
    linkTo: "https://diceclubnft.com",
    role: "UI Designer ∙ 3D",
    desc: "10,000 dice NFT collection created on solana blockchain, randomly generated from 726841 possibilities.",
    tags: ["cinema 4D", "octane render"],
    images: [
      { id: 5, src: NFTDice.nft2, scale: 1.15, class: "left-4", range: [-100, 50], mask: "dice", revert: false },
      { id: 6, src: NFTDice.nft1, scale: 0.9, class: "left-1/3", range: [-250, 100], mask: "dice", revert: false },
      { id: 8, src: NFTDice.nft4, scale: 1, class: "right-1/2", range: [-300, 300], mask: "iphone", revert: true },
      { id: 9, src: NFTDice.nft5, scale: 1.1, class: "right-6", range: [-300, 50], mask: "iphone", revert: true },
      { id: 7, src: NFTDice.nft3, scale: 1.1, class: "right-1/4", range: [-100, 100], mask: "dice", revert: true },
    ],
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
      <WideContainer id="recent_works" className="py-6 text-center">
        <Headline size="lg" text="My recent projects" />
        <div className="mt-4">
          <Paragraph size="md" text="Here are my last works I've worked on, want to see more? " className="mt-2" />
          <CustomLink ariaLabel="Send email" to={`mailto:${email}`} text="Contact me." />
        </div>
      </WideContainer>
      {PortfolioProjects.map((value) => {
        return (
          <ProjectItem key={value.id} link={value.linkTo} index={value.id} name={value.name} role={value.role} description={value.desc}>
            {value.tags.map((tag, index) => (
              <motion.div
                variants={tagItem}
                title={tag}
                className="mx-0.5 mb-0.5 inline-block select-none rounded-full border-2 border-blue-500 py-0.5 px-3 md:mb-2"
                key={index}
              >
                <Paragraph size="xs" text={tag} />
              </motion.div>
            ))}
          </ProjectItem>
        );
      })}
    </>
  );
};

export default Projects;
