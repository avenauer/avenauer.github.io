import React, { FC, ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Mask2 from "../../../assets/svg/iphone_mask.svg";

interface ImageConfig {
  range: [number, number, number, number];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  text?: any;
  className?: string;
  children: ReactNode;
}

const ImageWrapper: FC<ImageConfig> = ({ range, size, text, className, children }) => {
  const springConfig = {
    damping: 10,
    mass: 0.75,
    stiffness: 50,
  };
  const { scrollY } = useScroll();
  const parallax = useSpring(useTransform(scrollY, [range[0], range[1]], [range[2], range[3]]), springConfig);
  return (
    <>
      <motion.div
        style={{
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          display: "inline-block",
          WebkitMaskImage: `url(${Mask2.src})`,
          y: parallax,
        }}
        className={`h-3/5 ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ImageWrapper;
