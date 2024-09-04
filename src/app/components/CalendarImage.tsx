import React from 'react';

import config from '../config/index.json';

const BoardImage = () => {
  const { calendar } = config;
  return (
    <div className="p-16 flex items-center justify-center">
      <img
        className=" object-fit"
        src={calendar.image}
        alt="happy team image"
      />
    </div>
  );
};

export default BoardImage;
