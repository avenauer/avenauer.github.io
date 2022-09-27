import React from "react";
import { motion } from "framer-motion";
import { PortfolioProjects } from "../../components/projects/projects";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";

const ParallaxContainer = ({ projectId }: { projectId: number }) => {
  return (
    <motion.div key={projectId} className="absolute top-1/2 right-0 w-full lg:w-3/5">
      {PortfolioProjects.map((value) =>
        value.images?.map((item, index) => {
          {
            return (
              <ImageWrapper
                key={index}
                src={item.src}
                scale={item.scale}
                range={item.range}
                className={item.class}
                mask={item.mask}
                revert={item.revert}
                name={value.name}
                projectId={item.id}
              />
            );
          }
        })
      )}
    </motion.div>
  );
};

export default ParallaxContainer;
