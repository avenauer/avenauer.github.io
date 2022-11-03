import React from "react";
import Logo from "../../components/common/logo";
import ToggleTheme from "./toggleTheme";
import WideContainer from "../../components/common/wrappers/wideContainer";

const Header = () => {
  return (
    <header className="absolute w-full z-50">
      <WideContainer className="flex w-full items-center justify-between py-2 md:py-6 lg:py-8">
        <Logo />
        <ToggleTheme />
      </WideContainer>
    </header>
  );
};

export default Header;
