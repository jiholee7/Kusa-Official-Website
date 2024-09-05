'use client'

import React from 'react';
import Canvas from '../components/Canvas';
import config from '../config/index.json';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import LazyShow from '../components/LazyShow';
import Header from '../components/Header';
import About from '../components/About';


const Photos = () => {
  const { photos } = config;

  const SliderButtons = () => {
    const swiper = useSwiper();
    return (
      <div className="flex items-center justify-center h-16 gap-10 text-5xl w-32">
        <div className='cursor-pointer transition ease-in-out hover:scale-110 duration-200 hover:text-secondary' onClick={() => swiper.slidePrev()}>
          &#10096;
        </div>
        <div className='cursor-pointer transition ease-in-out hover:scale-110 duration-200 hover:text-secondary' onClick={() => swiper.slideNext()}>
          &#10097;
        </div>
      </div>
    )
  }

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4
      }
    }
  }

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
        className={`w-full my-2 text-5xl lg:text-6xl font-bold leading-tight text-center text-black pt-8`}
      >
        Photos
      </h1>
      <div className={`w-full mb-4 pb-8`}>
        <div
          className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
        ></div>
      </div>

      <div className='my-8'>
        <Canvas title='Spring 2024' />
      </div>
      <div className={`relative container mx-auto pt-4 pb-12 text-primary`}>
        <div className='w-full px-20'>
          <LazyShow>
            <>
              <div className='w-80 sm:w-full mx-auto'>
                <Swiper {...sliderSettings}>
                  <SliderButtons/>
                  {
                    photos['Spring 2024'].map((card, i) => (
                      <SwiperSlide key={i}>
                        <div className="flex flex-col gap-6 text-center rounded-xl shadow-lg justify-center items-center p-12 my-4 mt-6 mx-auto h-full w-4/5 hover:scale-105 hover:bg-primary/25 transition ease-in-out hover:scale-110 duration-200">
                          <img className='rounded-xl object-cover' src={card.image} alt="home" />
                          <span className="text-xl text-primary font-bold">{card.name}</span>
                          <a className='med:w-18 lg:w-32 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={card.url}>Pictures</a>  
                          
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              
            </>
          </LazyShow>
        </div>
      </div>

      <div className='my-8'>
        <Canvas title='Fall 2023' />
      </div>
      <div className={`relative container mx-auto pt-4 pb-12 text-primary`}>
        <div className='w-full px-20'>
          <LazyShow>
            <>
              <div className='w-80 sm:w-full mx-auto'>
                <Swiper {...sliderSettings}>
                  <SliderButtons/>
                  {
                    photos['Fall 2023'].map((card, i) => (
                      <SwiperSlide key={i}>
                        <div className="flex flex-col gap-6 text-center rounded-xl shadow-lg justify-center items-center p-12 my-4 mt-6 mx-auto h-full w-4/5 hover:scale-105 hover:bg-primary/25 transition ease-in-out hover:scale-110 duration-200">
                          <img className='rounded-xl object-cover' src={card.image} alt="home" />
                          <span className="text-xl text-primary font-bold">{card.name}</span>
                          <a className='med:w-18 lg:w-32 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={card.url}>Pictures</a>  
                          
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              
            </>
          </LazyShow>
        </div>
      </div>

      <div className='my-8'>
        <Canvas title='Fall 2022 - Spring 2023' />
      </div>
      <div className={`relative container mx-auto pt-4 pb-12 text-primary`}>
        <div className='w-full px-20'>
          <LazyShow>
            <>
              <div className='w-80 sm:w-full mx-auto'>
                <Swiper {...sliderSettings}>
                  <SliderButtons/>
                  {
                    photos['2022-2023'].map((card, i) => (
                      <SwiperSlide key={i}>
                        <div className="flex flex-col gap-6 text-center rounded-xl shadow-lg justify-center items-center p-12 my-4 mt-6 mx-auto h-full w-4/5 hover:scale-105 hover:bg-primary/25 transition ease-in-out hover:scale-110 duration-200">
                          <img className='rounded-xl object-cover' src={card.image} alt="home" />
                          <span className="text-xl text-primary font-bold">{card.name}</span>
                          <a className='med:w-18 lg:w-32 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={card.url}>Pictures</a>  
                          
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              
            </>
          </LazyShow>
        </div>
      </div>

      

      <Canvas title=''/>
      <About /> 
    </div>  
  );
};

export default Photos;
