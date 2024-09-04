'use client'

import React from 'react';

import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import CalendarImage from '../components/CalendarImage';
import About from '../components/About';


const Calendar = () => {
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
      <h1
        className={`w-full my-2 text-6xl font-bold leading-tight text-center text-black pt-8`}
      >
        Calendar
      </h1>
      <div className={`w-full mb-4 pb-8`}>
        <div
          className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
        ></div>
      </div>
      <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl flex flex-col items-center">
        <span className={`block text-black xl:inline text-3xl`}>
          Please check out our <a className='text-primary' href='https://www.instagram.com/ufkusa/' target='_black'>Instagram</a> for event specifics and more!
        </span>
      </h1>
      <LazyShow>
        <>
          <div>
            <CalendarImage />
          </div>
        </>
      </LazyShow>
      <Canvas title=''/>
      <About />
    </div>
  );
};

export default Calendar;