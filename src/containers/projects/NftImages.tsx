import React from "react";
import ImageWrapper from "../../components/common/wrappers/imageWrapper";
import Picture from "../../components/common/wrappers/picture";
import { NFTDice } from "../../components/common/images";
import { motion } from "framer-motion";

const NftImages = () => {
  return (
    <motion.div>
      <ImageWrapper className="left-1/2" mask="dice" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={NFTDice.nft1} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="bottom-1/2" mask="dice" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={NFTDice.nft2} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="" mask="dice" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={NFTDice.nft3} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="left-1/3" mask="iphone" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={NFTDice.nft4} alt="Budopoint category" />
      </ImageWrapper>
      <ImageWrapper className="left-1/2" mask="iphone" range={[0, 11000, -200, 1500]}>
        <Picture className="" src={NFTDice.nft5} alt="Budopoint category" />
      </ImageWrapper>
    </motion.div>
  );
};

export default NftImages;
