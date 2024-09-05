import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { board } = config;

  return (
    <section className={`bg-background py-1`} id="product">
      <div className={`container max-w-5xl mx-auto med:my-1 lg:my-10`}>
        <h1
          className={`w-full my-2 text-3xl med:text-4xl lg:text-5xl font-bold leading-tight text-center text-primary`}
        >
          {board.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
      </div>
    </section>
  );
};

export default Product;
