import React from "react";
import KranplattLogo from "../../assets/svg/companies/kranplatt.svg";
import BoombitLogo from "../../assets/svg/companies/boombit.svg";
import IliftLogo from "../../assets/svg/companies/ilift.svg";
import QuantLogo from "../../assets/svg/companies/quant.svg";
import CayenneLogo from "../../assets/svg/companies/cayenne.svg";
import BaseContainer from "../../components/common/wrappers/baseContainer";
import Headline from "../../components/common/text/Headline";
import Image from "next/dist/client/legacy/image";

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
      <BaseContainer className="pt-8 pb-20 text-center">
        <Headline className="mx-auto w-full max-w-2xl" size="lg" text="Companies that I had a pleasure to work with" />
        <div className="py-8">
          {Companies.map((value, index) => {
            return (
              <div className="relative my-3 inline-block h-14 w-1/3 md:h-14 md:w-1/5" key={index}>
                <Image layout="fill" className="absolute h-full w-full" src={value.img} alt={value.name} />
              </div>
            );
          })}
        </div>
      </BaseContainer>
    </section>
  );
};

export default Clients;
