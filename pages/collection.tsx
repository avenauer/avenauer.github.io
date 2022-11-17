import React from "react";
import { motion } from "framer-motion";
import WideContainer from "../src/components/common/wrappers/wideContainer";
import Zoom from "next-image-zoom";
import Nft1 from "../src/assets/images/nft/nft_1.jpg";
import Nft2 from "../src/assets/images/nft/nft_2.jpg";
import Nft3 from "../src/assets/images/nft/die_1.jpg";
import Nft4 from "../src/assets/images/nft/die_2.jpg";
import Nft5 from "../src/assets/images/nft/die_3.jpg";

export const PortfolioImages = [
  {
    id: 1,
    src: Nft1.src,
  },
  {
    id: 2,
    src: Nft2.src,
  },
  {
    id: 3,
    src: Nft3.src,
  },
  {
    id: 4,
    src: Nft4.src,
  },
  {
    id: 5,
    src: Nft5.src,
  },
];

const Collection = () => {
  return (
    <WideContainer className="min-h-screen pt-40">
      <div>
        {PortfolioImages.map((value, index) => {
          return (
            <motion.div key={value.id} className="w-1/4 border-2 bg-white">
              <Zoom
                style={{ zIndex: "999" }}
                priority
                zoomPercentage={100}
                backgroundColor="black"
                layout={"responsive"}
                objectFit={"contain"}
                src={value.src}
                width={1}
                height={1}
              />
            </motion.div>
          );
        })}
      </div>
    </WideContainer>
  );
};

export default Collection;
