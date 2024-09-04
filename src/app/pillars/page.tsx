'use client'

import React from 'react';

import Header from '../components/Header';
import Canvas from '../components/Canvas';
import LazyShow from '../components/LazyShow';
import About from '../components/About';
import PillarCarousel from '../components/PillarCarousel';


const Pillars = () => {
  return (
    <div className={`bg-background grid overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 bg-background lg:max-w-2xl lg:w-full`}
          >
            <Header />
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <PillarCarousel />
        </>
      </LazyShow>

      <Canvas title=''/>
      <About />    
    </div>
  );
};

export default Pillars;