import React, { FC, ReactNode } from "react";
import WideContainer from "../wrappers/wideContainer";
import Headline from "../../components/common/Headline";
import Image from "next/image";
import ImageTest from "../../assets/temp/test.jpg";
import Imagetest2 from "../../assets/temp/test_2.jpg";
import Mask from "../../assets/svg/iphone_mask.svg";
import Mask2 from "../../assets/svg/ipad_mask.svg";

interface ProjectInfo {
  index: string;
  role: string;
  name: string;
  description: string;
  tags: ReactNode;
  images: ReactNode;
}

export const ProjectItem: FC<ProjectInfo> = ({ images, index, role, name, description, tags }) => {
  return (
    <div className="flex justify-between">
      <div className="">
        <span>{role}</span>
        <Headline size="xl" text={name} />
        <span>{description}</span>
        <div>{tags}</div>
      </div>
      <div>{images}</div>
    </div>
  );
};

export default ProjectItem;
