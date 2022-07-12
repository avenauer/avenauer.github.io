import React from "react";
import Image from "next/dist/client/future/image";
import LogoImage from "../../assets/mb-logo.svg";

const Logo = () => {
  return (
    <div className="w-44 fill-zinc-900 dark:fill-zinc-200">
      <Image src={LogoImage} height={1} width={1} alt="" />
    </div>
  );
};

export default Logo;
