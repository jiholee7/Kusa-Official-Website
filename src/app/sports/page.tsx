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


const Sports = () => {
  const [accNum, setAccNum] = useState(1);
  const { sports } = config;

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
        Sports
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
                              src="/assets/images/sportslogo.png"
                              alt="dance logo"
                            />
                            <span className="block xl:inline">Sports</span>
                          </div>
                          <span className={`block text-primary xl:inline text-4xl sm:pr-0 lg:pr-6`}>
                          KUSA Sports offers ways for members to get involved in casual sports, intramural teams, and workshops.
                          </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        We regularly host casual volleyball that provides participants an opportunity to have fun playing while getting to know fellow KUSA members. For those looking to improve their skills to the next level, we also have a volleyball workshop each semester where participants can hone their techniques. For those with a competitive edge, we host a yearly Running Man event to put your athletic abilites to the test, and we also offer KUSA intramural teams that face against other UF student teams. Outside of sports on the court, we also host E-Sports tournaments where teams can compete to win big bragging rights and even bigger prizes.
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
                                        Sports is led by our two Athletic chairs, Jase Kemp and William Hahn. Our Athletic chairs have prior experience in sports such as volleyball and soccer. They are passionate about leading a fun sports program that anyone can join and get some sweat in!
                                        </p>
                                        <p>
                                        For any questions about Sports, please email <a className={'text-primary underline'} href='mailto: kusa.sports@gmail.com'>kusa.sports@gmail.com</a> or DM us at the KUSA Sports Instagram below.
                                        </p>    
                                        <a className='w-64 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={'https://www.instagram.com/ufkusasports/'}>Sports Instagram</a>              
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                              <div onClick={() => setAccNum(4)}>
                                <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                                          <div className="font-bold text-lg">
                                            Running Man and Intramurals
                                          </div>
                                          <div>
                                            <MdOutlineArrowDropDown size={32}/>
                                          </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="flex flex-col gap-5 mb-6 text-black px-4">
                                        <p>
                                          Based on the popular Korean Variety show of the same name, Running Man is an event KUSA holds every year where players can compete in teams to test their athletic and problem solving abilities. Get ready to laugh, race, and compete with your squad for bragging rights and awesome prizes! Make sure to bring your A-game as we turn the campus into a playground of fun and challenges.
                                        </p>           
                                        <p>
                                          KUSA also offers a variety of intramural teams that anyone can join each semester during the intramural season. Make sure to follow our instagram (linked in &#34;Meet Our Team&#34;) to keep up to date on what intramural sports teams KUSA offers.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                              <div onClick={() => setAccNum(3)}>
                                <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                                          <div className="font-bold text-lg">
                                          Sports Schedule (Spring 2025) and Discord
                                          </div>
                                          <div>
                                            <MdOutlineArrowDropDown size={32}/>
                                          </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className="flex flex-col items-center gap-5 mb-6 text-black px-4">
                                        <p>
                                        Spring KUSA Running Man will be on Friday, March 14, 2025. Details about exact time and location will be out in the future!
                                        </p>
                                        <p>
                                        Follow our instagram (linked in &#34;Meet Our Team&#34;) to be regularly updated about upcoming casual volleyball days, potential volleyball workshops, and other events!
                                        </p>
                                        <p>
                                        Join our Discord to be part of the KUSA Sports family!
                                        </p>
                                        <a className='w-64 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={'https://discord.com/invite/jz7HhjyY'}>Sports Discord</a> 
                                    </AccordionItemPanel>
                                </AccordionItem>
                              </div>
                                

                            </Accordion>
                            
                        </section>
                      </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                      <img
                        className="h-56 pl-16 w-4/5 object-cover object-top sm:h-80 md:h-96 lg:w-full lg:h-full"
                        src={accNum==1 ? "/assets/images/sportsaction.JPG" : accNum==2 ? "/assets/images/sportschairs.JPG" : accNum==3 ? "/assets/images/sportsfront.jpg" : "/assets/images/vbaction2.jpg"}
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
                    Event Recaps
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
                        sports.map((card, i) => (
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

export default Sports;