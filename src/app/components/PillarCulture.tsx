import React from "react";

export interface PillarProps{
  title: string | undefined,
  subtitle: string | undefined,
  description: string | undefined,
  image: string | undefined
}

const PillarCulture = (props: PillarProps) => {

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 text-center`}
          >
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl flex flex-col items-start">
                <span className="block xl:inline">{props.title}</span>
                <span className={`block text-primary xl:inline text-4xl`}>
                  {props.subtitle}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {props.description}
              </p>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={props.image}
              alt="happy team image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarCulture;