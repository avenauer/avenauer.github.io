import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { VR } from "../../components/common/images";

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
      <img src={VR.vr1} alt="" />
      {/*  <motion.div
        style={{
          y: y1,
          WebkitMaskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          display: "inline-block",
          WebkitMaskImage: `url("${Mask2.src}")`,
        }}
        className="absolute left-0 right-0 mx-auto h-96 w-full max-w-lg"
      >
        <Image prefix="" alt="Mountains" src={`${process.env.BASE_PATH}/assets/temp/test_2.jpg`} layout="fill" objectFit="contain" />
          <img src={ImageTest} alt=""/>
      </motion.div>
      <motion.div
        style={{ y: y2, WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat", display: "inline-block", WebkitMaskImage: `url("${Mask.src}")` }}
        className="absolute left-0 right-0 mx-auto h-96 w-full max-w-lg"
      >
        <Image alt="Mountains" src={ImageTest} layout="fill" objectFit="contain" />
      </motion.div>*/}
    </>
  );
};

export default ConfiguratorImages;
