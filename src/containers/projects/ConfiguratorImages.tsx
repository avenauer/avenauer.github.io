import React from "react";
import { VR } from "../../components/common/images";

const ConfiguratorImages = () => {
  return (
    <picture className="inline-block h-full">
      <source srcSet={VR.vr1} type="image/jpeg" />
      <img className="mx-auto h-full" src={VR.vr1} alt="Landscape picture" />
    </picture>
  );
};

export default ConfiguratorImages;
