import React from "react";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";
import { VR } from "../../components/common/images";

const BudopointImages = () => {
  return (
    <ImageWrapper range={[0, 11000, -200, 1500]}>
      <picture className="inline-block h-full">
        <source srcSet={VR.vr1} type="image/jpeg" />
        <img className="mx-auto h-full" src={VR.vr1} alt="Landscape picture" />
      </picture>
    </ImageWrapper>
  );
};

export default BudopointImages;
