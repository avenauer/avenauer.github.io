import React from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Headline from "../../components/common/text/Headline";
import Paragraph from "../../components/common/text/Paragraph";
import CustomLink from "../../components/common/link/CustomLink";
import fontStyle from "../../../styles/typography.module.scss";
import { motion } from "framer-motion";
import { animTransition } from "../../../styles/easings";

const Intro = () => {
  return (
    <section>
      <WideContainer className="introduction flex items-center justify-center border-2">
        <motion.article
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={animTransition}
          className="w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-2 text-center sm:px-4"
        >
          <Headline size="lg" text="Glad to see you here!" className="opacity-80" />
          <Headline size="lg" text="I’m UI Developer &" className="!inline-block opacity-80" />
          <span className={`${fontStyle.headline_lg} !inline bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent`}> Designer</span>
          <Paragraph
            size="xs"
            text="But I prefer to call myself an explorer. I love to design and always seek new areas to express myself."
            className="mx-auto mt-4 block max-w-xs opacity-70 md:max-w-md"
          />
          <div className="mt-5 flex justify-center">
            <CustomLink to="#section_1" text="View recent projects" />
            <Paragraph size="xs" text="or" className=" mx-6 opacity-60" />
            <CustomLink to="/" text="Feel free to say hello" />
          </div>
        </motion.article>
      </WideContainer>
    </section>
  );
};

export default Intro;
