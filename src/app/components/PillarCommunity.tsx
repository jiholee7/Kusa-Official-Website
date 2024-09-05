import React from "react";
import { useState } from "react";
import config from '../config/index.json';
import PillarAccordion from "./PillarAccordion";

export interface PillarProps{
  title: string | undefined,
  subtitle: string | undefined,
  description: string | undefined,
  image: string | undefined 
}

const PillarCommunity = (props: PillarProps) => {
  const [accNum, setAccNum] = useState(1);
  const { pillars } = config;
  console.log(accNum);

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 bg-background pb-8 lg:max-w-2xl lg:w-full text-center`}
          >
            <div className="sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 md:text-6xl flex flex-col items-center lg:items-start">
                <span className="block xl:inline">{props.title}</span>
                <span className={`block text-primary xl:inline text-4xl`}>
                  {props.subtitle}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.description}
              </p>
            </div>
            <div>
              <PillarAccordion setAccNum={setAccNum}/>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={accNum==1 ? pillars.images.big : accNum==2 ? pillars.images.atlanta : pillars.images.kkoom}
              alt="team image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarCommunity;