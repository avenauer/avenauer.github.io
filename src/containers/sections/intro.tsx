import React from "react";
import WideContainer from "../wrappers/wideContainer";
import Headline from "../../components/common/Headline";
import Paragraph from "../../components/common/Paragraph";
import CustomLink from "../../components/common/CustomLink";
import fontStyle from "../../../styles/typography.module.scss";

const Intro = () => {
  return (
    <section>
      <WideContainer className="h-screen">
        <article className="absolute top-1/3 left-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 text-center">
          <Headline size="lg" text="Glad to see you here!" className="opacity-80" />
          <Headline size="lg" text="I’m UI Developer &" className="!inline-block opacity-80" />
          <span className={`${fontStyle.headline_lg} !inline bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent`}> Designer</span>
          <Paragraph
            size="xs"
            text="But I prefer to call myself an explorer. I love to design and always seek new areas to express myself."
            className="mx-auto mt-4 block max-w-md opacity-70"
          />
          <div className="mt-5 flex justify-center">
            <CustomLink to="#section_1" text="View recent projects" />
            <Paragraph size="xs" text="or" className=" mx-6 opacity-60" />
            <CustomLink to="/" text="Feel free to say hello" />
          </div>
        </article>
      </WideContainer>
    </section>
  );
};

export default Intro;
