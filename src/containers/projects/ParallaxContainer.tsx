import { Fragment } from "react";
import { motion } from "framer-motion";
import { PortfolioProjects } from "../../components/projects/projects";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";

const ParallaxContainer = ({ projectId }: { projectId: number }) => {
  return (
    <motion.div key={projectId} className="right-0 flex h-96 w-full items-center lg:absolute lg:h-full lg:w-3/5">
      {PortfolioProjects.map((value, index) => {
        {
          return (
            <Fragment key={index}>
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
            </Fragment>
          );
        }
      })}
    </motion.div>
  );
};

export default ParallaxContainer;
