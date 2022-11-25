import React, { Fragment } from "react";
import Nft1 from "../../src/assets/images/nft/nft_1.jpg";
import Nft2 from "../../src/assets/images/nft/nft_2.jpg";
import Nft3 from "../../src/assets/images/nft/die_1.jpg";
import Nft4 from "../../src/assets/images/nft/die_2.jpg";
import Nft5 from "../../src/assets/images/nft/die_3.jpg";
import WideContainer from "../../src/components/common/wrappers/wideContainer";
import ZoomImage from "../../src/components/common/wrappers/zoomImage";

export const PortfolioImages = [
  {
    id: 1,
    src: Nft1,
  },
  {
    id: 2,
    src: Nft2,
  },
  {
    id: 3,
    src: Nft3,
  },
  {
    id: 4,
    src: Nft4,
  },
  {
    id: 5,
    src: Nft5,
  },
  {
    id: 6,
    src: Nft5,
  },
  {
    id: 7,
    src: Nft5,
  },
  {
    id: 8,
    src: Nft5,
  },
];

const Collection = () => {
  return (
    <WideContainer className="flex flex-wrap justify-start border-2 border-red-500 pt-40">
      {PortfolioImages.map((value, index) => {
        return (
          <Fragment key={value.id}>
            <ZoomImage image={value.src} />
          </Fragment>
        );
      })}
    </WideContainer>
  );
};

export default Collection;
