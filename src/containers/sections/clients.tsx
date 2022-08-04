import React from "react";
import WideContainer from "../../components/common/wrappers/wideContainer";
import Paragraph from "../../components/common/text/Paragraph";
import Picture from "../../components/common/wrappers/picture";
import KranplattLogo from "../../assets/svg/companies/kranplatt.svg";
import BoombitLogo from "../../assets/svg/companies/boombit.svg";
import IliftLogo from "../../assets/svg/companies/ilift.svg";
import QuantLogo from "../../assets/svg/companies/quant.svg";
import CayenneLogo from "../../assets/svg/companies/cayenne.svg";
import BaseContainer from "../../components/common/wrappers/baseContainer";

const Companies = [
  {
    id: 1,
    name: "Kranplatt",
    img: KranplattLogo.src,
  },
  {
    id: 2,
    name: "Boombit",
    img: BoombitLogo.src,
  },
  {
    id: 1,
    name: "iLift Elevators",
    img: IliftLogo.src,
  },
  {
    id: 1,
    name: "Quant Technology",
    img: QuantLogo.src,
  },
  {
    id: 1,
    name: "Cayenne Visual Communication",
    img: CayenneLogo.src,
  },
];

const Clients = () => {
  return (
    <section>
      <BaseContainer className="py-10 text-center">
        <Paragraph text="Here are companies that I had a pleasure to work with" size="lg" />
        <div className="flex flex-wrap py-8 px-8">
          {Companies.map((value, index) => {
            return (
              <div className="mx-auto h-12 p-2 md:h-20 md:p-4" key={index}>
                <Picture className="picture-fill" src={value.img} alt={value.name} />
              </div>
            );
          })}
        </div>
      </BaseContainer>
    </section>
  );
};

export default Clients;
