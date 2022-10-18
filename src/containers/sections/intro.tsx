import React from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Headline from "../../components/common/text/Headline";
import Paragraph from "../../components/common/text/Paragraph";
import CustomLink from "../../components/common/link/CustomLink";
import fontStyle from "../../../styles/typography.module.scss";
import { motion } from "framer-motion";
import { animTransition } from "../../../styles/easings";
import Picture from "../../components/common/wrappers/picture";
import { useTheme } from "next-themes";
import DarkFace from "../../assets/images/myphotodark.jpg";
import LightFace from "../../assets/images/myphoto.jpg";

const faceClass = "circle_mask pointer-events-none block select-none";

const Intro = () => {
  //to avoid hydration
  const { theme } = useTheme();
  return (
    <section>
      <WideContainer className="introduction md:my-12 flex flex-col items-center justify-center">
        <motion.div className="mb-6 w-56" animate={{ opacity: 1, scale: 1, y: 0 }} initial={{ opacity: 0, scale: 0.1, y: 128 }} transition={animTransition}>
          {theme === "dark" ? (
            <Picture className={faceClass} src={DarkFace.src} alt={"My face image"} />
          ) : (
            <Picture className={faceClass} src={LightFace.src} alt={"My face image"} />
          )}
        </motion.div>
        <motion.article
          animate={{ opacity: 1, scale: 1, y: 0 }}
          initial={{ opacity: 0, scale: 0.5, y: 32 }}
          transition={animTransition}
          className="w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-2 text-center lg:max-w-2xl"
        >
          <Headline size="lg" text="Glad to see you here!" className="!inline-block" />
          <Headline size="lg" text="I’m UI Developer &" className="!inline-block" />
          <span className={`${fontStyle.headline_lg} !inline bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent`}> Designer</span>
          <Paragraph
            size="md"
            text="But I prefer to call myself an explorer. I love to design and always seek new areas to express myself."
            className="mx-auto mt-4 block max-w-sm sm:max-w-md md:max-w-md"
          />
          <div className="mt-4 flex justify-center">
            <CustomLink to="#section_1" text="View recent projects" />
            <Paragraph size="sm" text="or" className="mx-2 sm:mx-4 md:mx-6" />
            <CustomLink to="/" text="Feel free to say hello" />
          </div>
        </motion.article>
      </WideContainer>
    </section>
  );
};

export default Intro;
