import React from "react";
import Logo from "../../components/common/logo";
import ToggleTheme from "./toggleTheme";
import WideContainer from "../../components/common/wrappers/wideContainer";

const Header = () => {
  return (
    <header>
      <WideContainer className="flex items-center justify-between py-12">
        <Logo />
        <ToggleTheme />
      </WideContainer>
    </header>
  );
};

export default Header;
