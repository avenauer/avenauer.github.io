import React, { FC, ReactNode } from "react";
import WideContainer from "../wrappers/wideContainer";
import Headline from "../../components/common/Headline";

interface ProjectInfo {
  index: string;
  role: string;
  name: string;
  description: string;
  tags: ReactNode;
}

export const ProjectItem: FC<ProjectInfo> = ({ index, role, name, description, tags }) => {
  return (
    <section className="min-h-screen" id={`${index}`}>
      <WideContainer>
        <span>{role}</span>
        <Headline size="xl" text={name} />
        <span>{description}</span>
        <div>{tags}</div>
      </WideContainer>
    </section>
  );
};

export default ProjectItem;
