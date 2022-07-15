import React, { useRef } from "react";
import Mask from "../../assets/svg/iphone_mask.svg";
import Image from "next/image";
import ImageTest from "../../../public/assets/temp/test.jpg";
import Mask2 from "../../assets/svg/ipad_mask.svg";
import Imagetest2 from "../../../public/assets/temp/test_2.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ConfiguratorImages = () => {
  const { scrollY } = useScroll();
  const springConfig = {
    damping: 10,
    mass: 0.75,
    stiffness: 50,
  };
  const y1 = useSpring(useTransform(scrollY, [0, 11000], [-200, 1500]), springConfig);
  const y2 = useSpring(useTransform(scrollY, [0, 11000], [900, -1400]), springConfig);

  return (
    <>
      <motion.div
        style={{
          y: y1,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          display: "inline-block",
          WebkitMaskImage: `url("${Mask2.src}")`,
        }}
        className="absolute left-0 right-0 mx-auto h-96 w-full max-w-lg"
      >
        <Image alt="Mountains" src={Imagetest2} layout="fill" objectFit="contain" />
      </motion.div>
      <motion.div
        style={{ y: y2, WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat", display: "inline-block", WebkitMaskImage: `url("${Mask.src}")` }}
        className="absolute left-0 right-0 mx-auto h-96 w-full max-w-lg"
      >
        <Image alt="Mountains" src={ImageTest} layout="fill" objectFit="contain" />
      </motion.div>
    </>
  );
};

export default ConfiguratorImages;
