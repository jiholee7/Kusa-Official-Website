'use client'


import React from 'react';

import Header from './components/Header';
import MainHero from './components/MainHero';
import MainHeroImage from './components/MainHeroImage';
import Canvas from './components/Canvas';
import About from './components/About';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas title=''/>
      <About />
    </div>
  );
};

export default App;
