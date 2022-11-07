import React from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Logo from "../../components/common/logo";
import Paragraph from "../../components/common/text/Paragraph";
import CustomLink from "../../components/common/link/CustomLink";
import { currentYear } from "../../../pages/_app";
import { email } from "../../../pages";

const linkedin = "https://www.linkedin.com/in/marcin-bieszka/";
const github = "https://github.com/avenauer";
const ig = "https://www.instagram.com/_avenauer/";

const Footer = () => {
  return (
    <footer>
      <WideContainer>
        <div className="flex flex-col items-center pt-6 lg:flex-row lg:items-end lg:justify-between lg:pb-6">
          <div className="max-w-xs text-center sm:max-w-sm md:max-w-md lg:max-w-md lg:text-left">
            <div className="mx-auto inline-block lg:mx-0">
              <Logo />
            </div>
            <Paragraph
              className="mb-0 mt-2 block lg:mt-4 lg:mb-4"
              size="md"
              text="Feel free to reach me via email, I’m always open to discuss a project or partnership opportunity."
            />
            <CustomLink className="inline-block p-2 pb-0 pr-0 lg:pl-0" ariaLabel="Send email" to={`mailto:${email}`} text="Let's talk!" />
          </div>
          <div className="mt-6 text-right lg:mt-0">
            <CustomLink className="mx-2 inline-block" ariaLabel="github page" target={true} to={github} text="Github" />
            <CustomLink className="mx-2 inline-block" ariaLabel="linkedin page" target={true} to={linkedin} text="Linkedin" />
            <CustomLink className="mx-2 inline-block" ariaLabel="instagram page" target={true} to={ig} text="Instagram" />
          </div>
        </div>
      </WideContainer>
      <div className="flex flex-col pb-4 pt-2 text-center lg:py-4">
        <Paragraph size="sm" text={`Marcin Bieszka, © 2017 — ${currentYear}`} />
        <Paragraph size="sm" text="Made with ♡ & nextjs" />
      </div>
    </footer>
  );
};

export default Footer;
