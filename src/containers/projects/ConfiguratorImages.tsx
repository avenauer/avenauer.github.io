import React from "react";
import { VR } from "../../components/common/images";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";
import Picture from "../../components/common/wrappers/picture";

const ConfiguratorImages = () => {
  return (
    <>
      <ImageWrapper className="right-1/3" mask="iphone" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={VR.vr1} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="right-1/2" mask="iphone" range={[0, 5400, -200, 1500]}>
        <Picture className="" src={VR.vr2} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="right-12" mask="iphone" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={VR.vr3} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="right-0" mask="ipad" range={[0, 5400, -200, 1500]}>
        <Picture className="" src={VR.vr4} alt="Budopoint category" />
      </ImageWrapper>
    </>
  );
};

export default ConfiguratorImages;
