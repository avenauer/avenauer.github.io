import React from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Logo from "../../components/common/logo";
import CustomA from "../../components/common/link/CustomA";

const Footer = () => {
  return (
    <footer>
      <WideContainer className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
          <div className="mx-4 ">
            <CustomA aria="send email" text="Avenauer@gmail.com" to="mailto:Avenauer@gmail.com" />
          </div>
        </div>
        <div className="py-4">
          <CustomA aria="github page" className="mx-2 inline-block" to="https://google.com" text="Github" />
          <CustomA aria="linkedin page" className="mx-2 inline-block" to="https://google.com" text="Linkedin" />
          <CustomA aria="instagram page" className="mx-2 inline-block" to="https://google.com" text="Instagram" />
        </div>
      </WideContainer>
    </footer>
  );
};

export default Footer;
