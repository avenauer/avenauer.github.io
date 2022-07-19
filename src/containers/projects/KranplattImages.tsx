import React from "react";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";
import Picture from "../../components/common/wrappers/picture";
import { Kranplatt } from "../../components/common/images";

const KranplattImages = () => {
  return (
    <>
      <ImageWrapper className="h-3/5" mask="iphone" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={Kranplatt.k1} alt="Budopoint category image" />
      </ImageWrapper>
      <ImageWrapper className="left-1/2 -top-1/2 h-3/5" mask="iphone" range={[0, 5400, -200, 1500]}>
        <Picture className="" src={Kranplatt.k2} alt="Budopoint category image" />
      </ImageWrapper>
      <ImageWrapper className="right-1/2 h-3/5" mask="iphone" range={[0, 5400, -200, 1500]}>
        <Picture className="" src={Kranplatt.k3} alt="Budopoint category image" />
      </ImageWrapper>
      <ImageWrapper className="right-0 h-3/5" mask="iphone" range={[0, 5400, -200, 1500]}>
        <Picture className="" src={Kranplatt.k4} alt="Budopoint category image" />
      </ImageWrapper>
    </>
  );
};

export default KranplattImages;
