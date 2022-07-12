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
        <article className="w-full max-w-xl text-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Headline
            size="lg"
            text="Glad to see you here!"
            className="opacity-80"
          />
          <Headline
            size="lg"
            text="I’m UI Developer &"
            className="!inline-block opacity-80"
          />
          <span
            className={`${fontStyle.headline_lg} !inline text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500`}
          >
            {" "}
            Designer
          </span>
          <Paragraph
            size="xs"
            text="But I prefer to call myself an explorer. I love design and always seek new areas to express myself."
            className="mt-4 block max-w-md mx-auto opacity-70"
          />
          <div className="mt-5 flex justify-center">
            <CustomLink to="/" text="View recent projects" />
            <Paragraph size="xs" text="or" className=" mx-6 opacity-60" />
            <CustomLink to="/" text="Feel free to say hello" />
          </div>
        </article>
      </WideContainer>
    </section>
  );
};

export default Intro;
