import React from "react";
import WideContainer from "../wrappers/wideContainer";
import Headline from "../../components/common/Headline";
import Paragraph from "../../components/common/Paragraph";

const Intro = () => {
  return (
    <section>
      <WideContainer className="h-screen">
        <article className="text-center absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Headline size="lg" text="Glad to see you here!" />
          <Headline size="lg" text="I’m UI Developer & Designer" />
          <Paragraph
            size="xs"
            text="But I prefer to call myself an explorer. I love design and always seek new areas to express myself."
            className="mt-4 block max-w-md mx-auto"
          />
        </article>
      </WideContainer>
    </section>
  );
};

export default Intro;
