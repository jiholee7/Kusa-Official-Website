import React from 'react';

import config from '../config/index.json';

const BoardImage = () => {
  const { board } = config;
  return (
    <div className="lg:h-80">
      <img
        className="w-full h-72 object-cover lg:w-full md:h-80 lg:h-96"
        src={board.img}
        alt="happy team image"
      />
    </div>
  );
};

export default BoardImage;
