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


const Dance = () => {
  const [accNum, setAccNum] = useState(1);
  const { dance } = config;

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
        Dance
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
                              src="/assets/images/dancelogo.png"
                              alt="dance logo"
                            />
                            <span className="block xl:inline">Dance</span>
                          </div>
                          <span className={`block text-primary xl:inline text-4xl`}>
                          Welcome to the vibrant world of KUSA Dance! We are a passionate group of students united by our love for Korean culture and dance.
                          </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                         From electrifying K-pop choreography to traditional Korean performances, we offers a dynamic space where creativity and community thrive. Whether you are a seasoned dancer or just looking to try something new, we welcome all skill levels to join our family. Through performances at AASA and our cultural shows Chuseok and Seollal, we aim to share the beauty of Korean dance while building lifelong friendships. Come dance with KUSA and make lifelong memories with us on and off the dance floor!
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
                                        Dance is led by our Performance chair Milla Bogicevic. She is passionate about leading KUSA Dance Kajok so that anyone can have fun through energetic and powerful choreography!
                                        </p>
                                        <p>
                                        For any questions about Dance, please email <a className={'text-primary underline'} href='mailto: kusa.performance1@gmail.com'>kusa.performance1@gmail.com</a> or DM us at the KUSA Dance Instagram below.
                                        </p>    
                                        <a className='w-64 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={'https://www.instagram.com/ufkusadance/'}>Dance Instagram</a>              
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                              <div onClick={() => setAccNum(1)}>
                                <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                                          <div className="font-bold text-lg">
                                            Dance Schedule (Spring 2025)
                                          </div>
                                          <div>
                                            <MdOutlineArrowDropDown size={32}/>
                                          </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="flex flex-col gap-5 mb-6 text-black px-4">
                                        <p>
                                          Seollal Choreographer applications are out NOW! Apply with our form on LinkTree! Applications are due January 18th, so sign up ASAP if you want to choreograph for KUSA!
                                        </p>
                                        <p>
                                          Seollal performances will be on Saturday, March 1st, 2025!
                                        </p>             
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                              <div onClick={() => setAccNum(3)}>
                                <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                                          <div className="font-bold text-lg">
                                            Dance Resources
                                          </div>
                                          <div>
                                            <MdOutlineArrowDropDown size={32}/>
                                          </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="flex flex-col items-center gap-2 mb-6 text-black px-4">
                                        <p>
                                          Join the KUSA Dance Discord here!
                                        </p>
                                        <a className='w-48 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary' target='_blank' href={'https://discord.com/invite/AkqVhJkarz'}>Dance Discord</a>
                                        
                                        <p>
                                          See previous KUSA Dance performances on our YouTube!
                                        </p>
                                        <a className='w-48 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary' target='_blank' href={'https://www.youtube.com/@ufkusa6548/videos'}>YouTube</a>

                                        <p>
                                          Find KUSA Dance forms and socials on our LinkTree! **Note that if any forms are not on the Dance LinkTree, it may be on the general KUSA LinkTree.**
                                        </p>
                                        <div className='flex flex-row gap-4'>
                                        <a className='w-48 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary' target='_blank' href={'https://linktr.ee/ufkusadance'}>Dance LinkTree</a>
                                        <a className='w-48 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary' target='_blank' href={'https://linktr.ee/ufkusa'}>KUSA LinkTree</a>
                                        </div>
                                        <p>
                                          Follow the KUSA Dance Instagram!
                                        </p>
                                        <a className='w-48 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary' target='_blank' href={'https://www.instagram.com/ufkusadance/'}>Dance Instagram</a>
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                                

                            </Accordion>
                            
                        </section>
                      </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                      <img
                        className="h-56 pl-16 w-4/5 object-cover sm:h-80 md:h-96 lg:w-full lg:h-full"
                        src={accNum==1 ? "/assets/images/aasa.JPG" : accNum==2 ? "/assets/images/boardpics/milla.png" : "/assets/images/danceres.jpg"}
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
                        dance.map((card, i) => (
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

export default Dance;