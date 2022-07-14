import React, { FC, ReactNode } from "react";
import WideContainer from "../wrappers/wideContainer";
import Headline from "../../components/common/Headline";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Paragraph from "../../components/common/Paragraph";

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
  });
  console.log(inView);
  return (
    <section ref={ref}>
      <WideContainer>
        <motion.div style={{ minHeight: "900px" }} className={`${inView ? "" : ""} relative flex min-h-screen justify-between py-12`}>
          <div className="absolute top-1/2 w-2/5 -translate-y-1/2 transform">
            <Paragraph className="opacity-70" size="xs" text={role} />
            <Headline className="py-4 opacity-80" size="lg" text={name} />
            <Paragraph className="block max-w-sm" text={description} size="sm" />
            <div title={`Tools I used to create ${name}`} className="inline-block mt-8 max-w-md">
              {children}
            </div>
          </div>
          <div className="absolute right-0 h-full w-3/5">{images}</div>
        </motion.div>
      </WideContainer>
    </section>
  );
};

export default ProjectItem;
