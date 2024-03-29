import React, {FC, useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {animTransition} from "../../../../styles/easings";
import Image from "next/dist/client/legacy/image";

interface ImageConfig {
  transition?: boolean;
  src?: string;
  scale?: number;
  range: number[];
  className?: string;
  mask?: string;
  revert?: boolean;
  name?: string;
  projectId?: number;
}

const ImageWrapper: FC<ImageConfig> = ({ transition, src, scale, range, className, mask, revert, name, projectId }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const parallax = useSpring(useTransform(scrollYProgress, revert ? [0, 1] : [1, 0], [range[0], range[1]]), { stiffness: 100, damping: 20, mass: 1 });
  const opacityOutput = [0, 1, 1, 0];
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.03, 0.97, 1], opacityOutput), { stiffness: 100, damping: 20, mass: 1 });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        transition={animTransition}
        style={{
          opacity: opacity,
          y: parallax,
          scale: scale,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "auto 100%",
          WebkitMaskImage: `url(${
            mask === "iphone"
              ? "/static/iphone_mask.svg"
              : mask === "ipad"
              ? "/static/ipad_mask.svg"
              : mask === "dice"
              ? "/static/dice_mask.svg"
              : "/static/iphone_mask.svg"
          })`,
        }}
        className={`${className} ${
          mask === "iphone" ? "iphone_wrap" : mask === "ipad" ? "ipad_wrap" : mask === "dice" ? "dice_wrap" : "iphone_wrap"
        } absolute inline-block`}
      >
        <motion.div ref={ref} className="absolute left-1/2 top-1/2 -z-50 h-1" />
        <Image
          src={`${src}`}
          width={30}
          height={`${mask === "iphone" ? 60 : mask === "ipad" ? 23 : mask === "dice" ? 30 : 30}`}
          layout="responsive"
          className="h-full w-full"
          title={`${name} project image`}
          alt={`${name} project image`}
        />
        {/*For easier control of moving elements in project.tsx*/}
        {/*<div className="absolute top-0 left-0 z-50 h-full w-full bg-blue-900 bg-opacity-50">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold">{projectId}</div>
        </div>*/}
      </motion.div>
    </>
  );
};

export default ImageWrapper;
