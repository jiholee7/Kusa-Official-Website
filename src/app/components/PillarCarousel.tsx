import React from 'react';
import { useState } from 'react';

import config from '../config/index.json';
import LazyShow from './LazyShow';
import PillarCulture from './PillarCulture';
import PillarCommunity from './PillarCommunity';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import PillarPhil from './PillarPhil';

const PillarCarousel = () => {
  const { pillars,gbm } = config;
  const { items, title } = pillars;
  const [p1, p2, p3, p4] = items;
  const [pillar, setPillar] = useState(1);

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
    spaceBetween: 20,
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

  const nextPillar = () => {
    if (pillar == 4){
      setPillar(1)
    } else {
      setPillar(pillar+1)
    }
  }
  const prevPillar = () => {
    if (pillar == 1){
      setPillar(4)
    } else {
      setPillar(pillar-1)
    }
  }
  const nextNextPillar = () => {
    if (pillar + 2 > 4){
      setPillar((pillar + 2) % 4)
    } else {
      setPillar(pillar+2)
    }
  }

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`relative container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <div className='absolute top-20 text-6xl transition ease-in-out hover:scale-110 duration-200 hover:text-secondary left-0 lg:top-48 lg:left-10 cursor-pointer hidden md:block' onClick={prevPillar}>&#10096;</div>
        <div className='absolute text-6xl transition ease-in-out hover:scale-110 duration-200 hover:text-secondary right-0 top-20 lg:top-48 lg:right-10 cursor-pointer hidden md:block' onClick={nextPillar}>&#10097;</div>
        <h1
          className={`w-full my-2 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center text-black`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-center pt-12 my-12 sm:my-4 pb-24 xl:mx-32 lg:mx-24 md:mx-10`}
        >

          <div
            className={`flex flex-col w-5/6 md:z-10 lg:w-1/3 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4 cursor-pointer transition ease-in-out hover:scale-105 md:scale-110 md:hover:scale-115 duration-200 hover:text-secondary md:drop-shadow-lg md:hover:drop-shadow-xl`}
            onClick={prevPillar}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4 transition ease-in-out duration-200 hover:text-gray-800`}>
                {pillar==1 ? p1.title : pillar==2 ? p2.title : pillar==3 ? p3.title : p4.title}
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col md:z-20 w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 md:-mt-6 shadow-lg cursor-pointer md:mb-10 md:scale-115 transition ease-in-out hover:scale-105 md:hover:scale-120 duration-200 hover:text-secondary md:drop-shadow-xl md:hover:drop-shadow-2xl`}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full p-8 text-3xl font-bold text-center`}>
                {pillar==1 ? p2.title : pillar==2 ? p3.title : pillar==3 ? p4.title : p1.title}
              </div>
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
            </div>
          </div>

          <div
            className={`flex flex-col md:z-10 w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4 cursor-pointer transition ease-in-out hover:scale-105 md:scale-110 md:hover:scale-115 duration-200 hover:text-secondary md:drop-shadow-lg md:hover:drop-shadow-xl`}
            onClick={nextPillar}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4 transition ease-in-out duration-200 hover:text-gray-800`}>
                {pillar==1 ? p3.title : pillar==2 ? p4.title : pillar==3 ? p1.title : p2.title}
              </div>
            </div>
          </div>

          <div
            className={`md:absolute flex flex-col w-5/6 md:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 md:mt-20 shadow-lg cursor-pointer transition ease-in-out hover:scale-105 duration-200 hover:text-secondary md:scale-85 md:hover:scale-90 md:drop-shadow-md md:hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]`}
            onClick={nextNextPillar}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4 transition ease-in-out duration-200 hover:text-gray-800`}>
                {pillar==1 ? p4.title : pillar==2 ? p1.title : pillar==3 ? p2.title : p3.title}
              </div>
            </div>
          </div>

        </div>

        <div>
          <div className='w-full px-16'>{pillar==1 &&
            <LazyShow>
              <>
                <PillarCulture title={p2.title} subtitle={p2.subtitle} description={p2.description} image={p2.image}/>
                <h1
                  className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary pt-20`}
                >
                  GBMs
                </h1>
                <div className={`w-full mb-4 pb-8`}>
                  <div
                    className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
                  ></div>
                </div>
                <div className='w-64 mx-auto sm:w-full'>
                  <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                      gbm.map((card, i) => (
                        <SwiperSlide key={i}>
                          <div className="flex flex-col gap-6 text-center rounded-xl shadow-lg justify-center items-center p-12 my-4 mt-6 mx-auto w-4/5 sm:w-11/12 h-full hover:scale-105 hover:bg-primary/25 transition ease-in-out hover:scale-110 duration-200">
                            <img className='rounded-xl object-cover' src={card.image} alt="home" />
                            <span className="text-lg sm:text-xl text-primary font-bold">{card.name}</span>
                            <a className='med:w-18 lg:w-32 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={card.url}>Slides</a>  
                            
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
                
              </>
            </LazyShow>
          }
          </div>
          <div className='w-full px-16'>{pillar==4 &&
              <LazyShow>
                <>
                  <PillarCommunity title={p1.title} subtitle={p1.subtitle} description={p1.description} image={p1.image} />
                </>
              </LazyShow>
            }
          </div>
          <div className='w-full px-16'>{pillar==2 &&
              <LazyShow>
                <>
                  <PillarCulture title={p3.title} subtitle={p3.subtitle} description={p3.description} image={p3.image} />
                </>
              </LazyShow>
            }
          </div>
          <div className='w-full px-16'>{pillar==3 &&
              <LazyShow>
                <>
                  <PillarPhil title={p4.title} subtitle={p4.subtitle} description={p4.description} image={p4.image} />
                </>
              </LazyShow>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarCarousel;
