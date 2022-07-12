import React from "react";
import Image from "next/image";
import LogoImage from "../../assets/svg/mb-logo.svg";

const Logo = () => {
  return (
    <div className="w-10 h-10 bg-red-500">
      <Image
        objectFit={"contain"}
        src={LogoImage}
        alt=""
      />
    </div>
  );
};

export default Logo;
