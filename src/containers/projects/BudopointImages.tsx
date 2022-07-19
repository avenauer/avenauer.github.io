import React from "react";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";
import { Bp } from "../../components/common/images";
import Picture from "../../components/common/wrappers/picture";

const BudopointImages = () => {
  return (
    <>
      <ImageWrapper className="" mask="iphone" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={Bp.bp1} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="" mask="ipad" range={[0, 5400, -200, 1500]}>
        <Picture className="" src={Bp.bp2} alt="Budopoint category" />
      </ImageWrapper>
    </>
  );
};

export default BudopointImages;
