import React from "react";
import Logo from "./logo";
import ToggleTheme from "./toggleTheme";
import WideContainer from "../wrappers/wideContainer";
import Paragraph from "../../components/common/Paragraph";

const Header = () => {
  return (
    <header>
      <WideContainer className="flex justify-between items-center py-4">
        <Logo />
        <Paragraph />
        <ToggleTheme />
      </WideContainer>
    </header>
  );
};

export default Header;
