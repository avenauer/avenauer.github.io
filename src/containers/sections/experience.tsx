import React from "react";
import Paragraph from "../../components/common/text/Paragraph";
import BaseContainer from "../../components/common/wrappers/baseContainer";

const Experience = () => {
  return (
    <section>
      <BaseContainer className="flex justify-between">
        <div className="w-1/2 text-center">
          <Paragraph size="lg" text="Front-end Developer" />
        </div>
        <div className="w-1/2 text-center">
          <Paragraph size="lg" text="Designer" />
        </div>
      </BaseContainer>
    </section>
  );
};

export default Experience;
