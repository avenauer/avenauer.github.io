import React, { FC, ReactNode } from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Headline from "../../components/common/text/Headline";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Paragraph from "../../components/common/text/Paragraph";

const container = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      ease: [0.02, 0.6, -0.01, 0.91],
    },
  },
};

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
  index: string;
  role: string;
  name: string;
  description: string;
  children: ReactNode;
  images: ReactNode;
}

export const ProjectItem: FC<ProjectInfo> = ({ images, index, role, name, description, children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  console.log(inView);
  return (
    <section ref={ref} className={`py-32`}>
      <WideContainer>
        <motion.div style={{ minHeight: "900px" }} className={`relative flex min-h-screen justify-between`}>
          <motion.div
            variants={container}
            initial="hidden"
            animate={`${inView ? "visible" : "hidden"}`}
            className="absolute top-1/2 w-full max-w-xs -translate-y-1/2 transform md:w-2/5 md:max-w-md"
          >
            <motion.div variants={item}>
              <Paragraph className="opacity-70" size="xs" text={role} />
            </motion.div>
            <motion.div variants={item}>
              <Headline className="py-2 opacity-80 md:py-4" size="lg" text={name} />
            </motion.div>
            <motion.div variants={item}>
              <Paragraph className="block max-w-sm" text={description} size="sm" />
            </motion.div>
            <motion.div title={`Tools I used to create ${name}`} className="mt-8 inline-block max-w-md">
              {children}
            </motion.div>
          </motion.div>
          <div className="absolute right-0 h-full w-full lg:w-3/5">{images}</div>
        </motion.div>
      </WideContainer>
    </section>
  );
};

export default ProjectItem;
