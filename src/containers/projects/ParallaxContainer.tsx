import React from "react";
import { motion } from "framer-motion";
import { PortfolioProjects } from "../../components/projects/projects";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";

const ParallaxContainer = ({ projectId }: { projectId: number }) => {
  return (
    <motion.div key={projectId} className="absolute border-2 top-1/3 -translate-y-1/2 right-0 w-full lg:w-3/5">
      {PortfolioProjects.map((value, index) => {
        {
          return (
            <div key={index}>
              {projectId === value.id ? (
                <>
                  {value.images.map((item) => {
                    {
                      return (
                        <ImageWrapper
                          key={item.id}
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
                  })}
                </>
              ) : null}
            </div>
          );
        }
      })}
    </motion.div>
  );
};

export default ParallaxContainer;
