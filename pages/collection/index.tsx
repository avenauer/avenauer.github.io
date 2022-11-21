import React from "react";
import { motion } from "framer-motion";
import Nft1 from "../../src/assets/images/nft/nft_1.jpg";
import Nft2 from "../../src/assets/images/nft/nft_2.jpg";
import Nft3 from "../../src/assets/images/nft/die_1.jpg";
import Nft4 from "../../src/assets/images/nft/die_2.jpg";
import Nft5 from "../../src/assets/images/nft/die_3.jpg";
import WideContainer from "../../src/components/common/wrappers/wideContainer";
import Picture from "../../src/components/common/wrappers/picture";
import Image from "next/dist/client/future/image";
import PublicImage from "../../public/logo_sm.jpg";

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
      <div className="">
        {PortfolioImages.map((value, index) => {
          return (
            <motion.div key={value.id} className="inline-block w-1/4 bg-white">
              <Picture src={value.src} alt={""} />
            </motion.div>
          );
        })}

        <Image width={100} height={100} src={PublicImage} alt={"Test next/image"} />
        <Image width={100} height={100} src={Nft1} alt={"Test next/image"} />
      </div>
    </WideContainer>
  );
};

export default Collection;
