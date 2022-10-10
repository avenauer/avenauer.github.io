import React, { FC, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import IphoneMask from "../../../assets/svg/iphone_mask.svg";
import IpadMask from "../../../assets/svg/ipad_mask.svg";
import DiceMask from "../../../assets/svg/dice_mask.svg";
import Picture from "./picture";
import { animTransition } from "../../../../styles/easings";

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
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.05, 0.95, 1], opacityOutput), { stiffness: 100, damping: 20, mass: 1 });

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
          WebkitMaskImage: `url(${mask === "iphone" ? IphoneMask.src : mask === "ipad" ? IpadMask.src : mask === "dice" ? DiceMask.src : IphoneMask.src})`,
        }}
        className={`${className} ${
          mask === "iphone" ? "iphone_wrap" : mask === "ipad" ? "ipad_wrap" : mask === "dice" ? "dice_wrap" : "iphone_wrap"
        } absolute inline-block`}
      >
        <motion.div ref={ref} className="absolute left-1/2 top-1/2 z-50 h-full h-1 w-1 bg-red-500" />
        <Picture src={src} alt={`${projectId} ${name} project image`} />
      </motion.div>
    </>
  );
};

export default ImageWrapper;
