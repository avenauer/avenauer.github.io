import React, { FC, ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import IphoneMask from "../../../assets/svg/iphone_mask.svg";
import IpadMask from "../../../assets/svg/ipad_mask.svg";
import DiceMask from "../../../assets/svg/dice_mask.svg";

interface ImageConfig {
  range: [number, number, number, number];
  className?: string;
  children: ReactNode;
  mask?: "iphone" | "ipad" | "dice";
}

const ImageWrapper: FC<ImageConfig> = ({ mask, range, className, children }) => {
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
          WebkitMaskSize: "auto 100%",
          WebkitMaskImage: `url(${mask === "iphone" ? IphoneMask.src : mask === "ipad" ? IpadMask.src : mask === "dice" ? DiceMask.src : IphoneMask.src})`,
          y: parallax,
        }}
        className={`${className} ${
          mask === "iphone" ? "iphone_wrap" : mask === "ipad" ? "ipad_wrap" : mask === "dice" ? "dice_wrap" : "iphone_wrap"
        } absolute inline-block`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default ImageWrapper;
