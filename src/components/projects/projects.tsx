import React from "react";
import ProjectItem from "../../containers/sections/projectItem";
import Paragraph from "../common/Paragraph";
import WideContainer from "../../containers/wrappers/wideContainer";
import Budopoint from "../../containers/projects/budopoint";

export const PortfolioProjects = [
  {
    id: 1,
    name: "Budopoint Marketplace",
    role: "Front-end — UI",
    desc: "Description",
    tags: ["tag", "tag2", "tag3"],
    images: <Budopoint />,
  },
  {
    id: 2,
    name: "Kranplatt ",
    role: "Front-end — UI",
    desc: "Description",
    tags: ["tag", "tag2", "tag353"],
    images: <div>asdsad</div>,
  },
  {
    id: 3,
    name: "iLift VR configurator",
    role: "Front-end — UI",
    desc: "Description",
    tags: ["tag", "tag2", "tag3"],
    images: <div></div>,
  },
  {
    id: 4,
    name: "NFT Dice",
    role: "Graphic Designer",
    desc: "Description",
    tags: ["tag", "tag2", "tag3"],
    images: <div></div>,
  },
];

const Projects = () => {
  return (
    <section className="">
      <WideContainer className="border-2">
        {PortfolioProjects.map((value) => {
          return (
            <div key={value.id} className="">
              <ProjectItem
                key={value.id}
                index={`section_${value.id}`}
                name={value.name}
                role={value.role}
                description={value.desc}
                tags={<Paragraph className="text-red-500" text={value.tags} size="xs" />}
                images={value.images}
              />
              {/*<div
              style={{ WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat", display: "inline-block", WebkitMaskImage: `url("${Mask.src}")` }}
              className="relative h-96 w-full max-w-md"
            >
              <Image alt="Mountains" src={ImageTest} layout="fill" objectFit="contain" />
            </div>
            <div
              style={{ WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat", display: "inline-block", WebkitMaskImage: `url("${Mask2.src}")` }}
              className="relative h-96 w-full"
            >
              <Image alt="Mountains" src={Imagetest2} layout="fill" objectFit="contain" />
            </div>*/}
            </div>
          );
        })}
      </WideContainer>
    </section>
  );
};

export default Projects;
