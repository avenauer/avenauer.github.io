import React, { FC, ReactNode } from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Headline from "../../components/common/text/Headline";
import { motion } from "framer-motion";
import Paragraph from "../../components/common/text/Paragraph";
import ParallaxContainer from "../projects/ParallaxContainer";
import { animTransition } from "../../../styles/easings";
import CustomLink from "../../components/common/link/CustomLink";

const item = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.02, 0.6, -0.01, 0.91],
    },
  },
};

interface ProjectInfo {
  index: number;
  link: string;
  role: string;
  name: string;
  description: string;
  children: ReactNode;
}

export const ProjectItem: FC<ProjectInfo> = ({ index, link, role, name, description, children }) => {
  return (
    <section id={`project_${index}`}>
      <WideContainer className="my-12 py-6">
        <motion.div style={{ minHeight: "900px" }} className={`border-2 border-yellow-500 relative flex flex-col lg:flex-col justify-evenly lg:justify-between`}>
          <motion.div transition={animTransition} className="lg:absolute top-1/2 w-full max-w-xs lg:-translate-y-1/2 transform md:w-2/5 md:max-w-md border-2 border-red-500">
            <motion.div variants={item}>
              <Paragraph className="70" size="sm" text={role} />
            </motion.div>
            <motion.div variants={item}>
              <Headline className="80 py-2 md:py-4" size="lg" text={name} />
            </motion.div>
            <motion.div variants={item}>
              <Paragraph className="mb-8 block max-w-sm" text={description} size="md" />
              <CustomLink ariaLabel="Open project" className="inline-block" target={true} to={link} text={`Explore ${name} →`} />
            </motion.div>
            <motion.div title={`Tools I used to create ${name}`} className="max-w-md pt-4">
              {children}
            </motion.div>
          </motion.div>
          <ParallaxContainer projectId={index} />
        </motion.div>
      </WideContainer>
    </section>
  );
};

export default ProjectItem;
