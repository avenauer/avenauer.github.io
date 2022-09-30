import React, { FC, ReactNode } from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Headline from "../../components/common/text/Headline";
import { motion } from "framer-motion";
import Paragraph from "../../components/common/text/Paragraph";
import ParallaxContainer from "../projects/ParallaxContainer";
import { animTransition, onLoadAnimation, onLoadInitial } from "../../../styles/easings";

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
  role: string;
  name: string;
  description: string;
  children: ReactNode;
}

export const ProjectItem: FC<ProjectInfo> = ({ index, role, name, description, children }) => {
  return (
    <section key={index}>
      <WideContainer>
        <motion.div style={{ minHeight: "900px" }} className={`relative flex justify-between`}>
          <motion.div
            initial={onLoadInitial}
            animate={onLoadAnimation}
            transition={animTransition}
            className="absolute top-1/3 w-full max-w-xs -translate-y-1/2 transform border-2 border-red-500 md:w-2/5 md:max-w-md"
          >
            <motion.div variants={item}>
              <Paragraph className="70" size="xs" text={role} />
            </motion.div>
            <motion.div variants={item}>
              <Headline className="py-2 80 md:py-4" size="lg" text={name} />
            </motion.div>
            <motion.div variants={item}>
              <Paragraph className="block max-w-sm" text={description} size="sm" />
            </motion.div>
            <motion.div title={`Tools I used to create ${name}`} className="mt-8 inline-block max-w-md">
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
