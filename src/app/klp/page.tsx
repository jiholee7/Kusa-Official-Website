'use client'

import React from 'react';
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import config from '../config/index.json';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import About from '../components/About';



const Klp = () => {
  const [accNum, setAccNum] = useState(1);
  const { klp } = config;

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

  return (
    <div className={`bg-background grid overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-20 bg-background lg:max-w-2xl lg:w-full`}
          >
            <Header />
          </div>
        </div>
      </div>
      <h1
        className={`w-full my-2 text-4xl med:text-5xl lg:text-6xl font-bold leading-tight text-center text-black pt-8`}
      >
        Korean Language Program
      </h1>
      <div className={`w-full mb-4 pb-8`}>
        <div
          className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
        ></div>
      </div>
      <LazyShow>
        <>
        <section className={`bg-background py-8`} id="pricing">
          <div className={`relative container mx-auto px-2 pt-4 pb-12 text-primary`}>
            {/*This is the top portion of the page aka the accordian up*/}
            <div className='w-full px-16'>
              <div className={`bg-background grid gap-y-16 overflow-hidden`}>
                <div className={`relative bg-background`}>
                  <div className="max-w-7xl mx-auto">
                    <div
                      className={`relative z-10 bg-background pb-8 lg:max-w-2xl lg:w-full text-center`}
                    >
                      <div className="sm:text-center lg:text-left">
                        <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 md:text-6xl flex flex-col items-center lg:items-start">
                          <div className='flex flex-row gap-2'>
                            <img
                              className="h-16 w-16 self-center"
                              src="/assets/images/klplogo.png"
                              alt="dance logo"
                            />
                            <span className="block xl:inline">KLP</span>
                          </div>
                          <span className={`block text-primary xl:inline text-4xl`}>
                          Our Korean Language Program (KLP) offers an engaging and immersive experience for anyone interested in learning Hangul, the Korean language. 
                          </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Each semester, we host interactive workshops that provide opportunities to explore essential Korean words, phrases, and foundational grammar. These sessions are designed to make language learning enjoyable and accessible for all skill levels. With the global influence of Korean culture, from K-pop to K-dramas and beyond, understanding Hangul is an invaluable skill that connects learners to a rich cultural heritage and a rapidly growing global community.
                        </p>
                      </div>
                      <div>
                        <section>
                          <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="mt-10 sm:mr-0 lg:mr-14">
                              <div onClick={() => setAccNum(2)}>
                                <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                                          <div className="font-bold text-lg">
                                            Meet Our Team
                                          </div>
                                          <div>
                                            <MdOutlineArrowDropDown size={32}/>
                                          </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="flex flex-col items-center gap-5 mb-6 text-black px-4">
                                        <p>
                                        KLP is led by our two KLP chairs, Lauren Yun and Yejin Lee. Our KLP chairs are native level proficiency in both Korean and English. They are passionate about teaching Korean in a fun and interactive way so that anyone can learn Korean!
                                        </p>
                                        <p>
                                        For any questions about KLP, please email <a className={'text-primary underline'} href='mailto: kusa.language@gmail.com'>kusa.language@gmail.com</a> or DM us at the KUSA KLP Instagram below.
                                        </p>    
                                        <a className='w-64 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={'https://www.instagram.com/ufkusaklp/'}>KLP Instagram</a>              
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                              <div onClick={() => setAccNum(1)}>
                                <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                                          <div className="font-bold text-lg">
                                            Workshop Schedule (Spring 2025)
                                          </div>
                                          <div>
                                            <MdOutlineArrowDropDown size={32}/>
                                          </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="flex flex-col gap-5 mb-6 text-black px-4">
                                        <p>
                                          Spring KLP Workshop #1 will be on Tuesday, January 28, 2025. Details about exact time and location will be out soon!
                                        </p>
                                        <p>
                                          Spring KLP Workshop #2 will be scheduled in the future!             
                                        </p>             
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                              <div onClick={() => setAccNum(3)}>
                                <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                                          <div className="font-bold text-lg">
                                            KLP Resources
                                          </div>
                                          <div>
                                            <MdOutlineArrowDropDown size={32}/>
                                          </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="flex flex-col items-center gap-5 mb-6 text-black px-4">
                                        <p>
                                          **Resource links are currently unavailable, but will be in the near future.**
                                        </p>   
                                        <p>
                                          Download any of our previous workshop presentations here:
                                        </p>
                                        <ol>
                                          <li><a className={'text-primary underline cursor-pointer'}>Fall 2024 Workshop #1</a></li>
                                          <li><a className={'text-primary underline cursor-pointer'}>Fall 2024 Workshop #2</a></li>
                                        </ol>
                                        
                                        <p>
                                          Download workbooks we&#39;ve used here:
                                        </p>
                                        <ol>
                                          <li><a className={'text-primary underline cursor-pointer'}>Workbook #1</a></li>
                                        </ol>
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                                

                            </Accordion>
                            
                        </section>
                      </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                      <img
                        className="h-56 pl-16 w-4/5 object-cover object-top sm:h-96 md:h-96 lg:w-full lg:h-full"
                        src={accNum==1 ? "/assets/images/klpppl.JPG" : accNum==2 ? "/assets/images/klpchairs.jpeg" : "/assets/images/klpfront.JPG"}
                        alt="team image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*This is the bottom portion of the page aka picture section down*/}
            <div className='w-full px-16'>
              <LazyShow>
                <>
                  <h1
                    className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary pt-20`}
                  >
                    Pictures
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
                        klp.map((card, i) => (
                          <SwiperSlide key={i}>
                            <div className="flex flex-col gap-6 text-center rounded-xl shadow-lg justify-center items-center p-12 my-4 mt-6 mx-auto w-4/5 sm:w-11/12 h-full hover:scale-105 hover:bg-primary/25 transition ease-in-out hover:scale-110 duration-200">
                              <img className='rounded-xl object-cover' src={card.image} alt="home" />
                              <span className="text-lg sm:text-xl text-primary font-bold">{card.name}</span>
                              <a className='med:w-18 lg:w-32 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={card.url}>See Pictures</a>  
                              
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
        </section>
        </>
      </LazyShow>
      <Canvas title=''/>
      <About />
    </div>
  );
};

export default Klp;