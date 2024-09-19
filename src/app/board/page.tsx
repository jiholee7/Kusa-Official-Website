"use client"

import React from 'react';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import BoardImage from '../components/BoardImage';
import Product from '../components/Product';
import config from '../config/index.json';
import About from '../components/About';

const Board = () => {
  const { board } = config;

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 bg-background lg:max-w-2xl lg:w-full`}
          >
            <Header />
          </div>
        </div>
      </div>
      <div>
        <BoardImage />
      </div>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>

      <Canvas title='E-Board' />

      <div className='px-10 lg:px-24'>
        <div 
          className='grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:gap-8 lg:grid-cols-5'
        >
          {board.eboard.map((item) => (
            <div key={item.key} className='relative h-80 m-8 sm:m-0 bg-red-200/50 text-xl font-bold leading-tight text-center text-secondary content-between rounded-2xl transition ease-in-out hover:scale-110 duration-250'>
              <div className='pb-6 h-8'>{item.name}</div>
              <img src={item.img} className='rounded-2xl h-72 w-full object-cover hover:bg-red-300'/>
              <div className='absolute inset-0 rounded-2xl bg-transparent text-transparent hover:text-white
              hover:bg-red-300/75 duration-250 '>
                <div className='mt-12 mx-5 text-lg'>{item.role}</div>
                <div className='mt-4 mx-5 text-sm'>{item.pronouns}</div>
                <div className='mt-4 mx-5 text-sm'>{item.major}</div>
                <div className='mt-4 mx-5 text-sm'>{item.year}</div>
                <div className='mt-4 mx-5 text-sm'>{item.socials}</div>
                <div className='mt-4 mx-5 text-sm'>{item.statement}</div>
              </div>
            </div>  
          ))}
        </div>
      </div>

      <Canvas title='Chair Board'/>

      <div className='px-10 lg:px-24'>
        <div 
          className='grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:gap-8 lg:grid-cols-5'
        >
          {board.chairs.map((item) => (
            <div key={item.key} className='relative h-80 m-8 sm:m-0 bg-red-200/50 text-xl font-bold leading-tight text-center text-secondary content-between rounded-2xl transition ease-in-out hover:scale-110 duration-250'>
              <div className='pb-6 h-8'>{item.name}</div>
              <img src={item.img} className='rounded-2xl h-72 w-full object-cover hover:bg-red-300'/>
              <div className='absolute inset-0 rounded-2xl bg-transparent text-transparent hover:text-white
              hover:bg-red-300/75 duration-250 '>
                <div className='mt-12 mx-5 text-lg'>{item.role}</div>
                <div className='mt-4 mx-5 text-sm'>{item.pronouns}</div>
                <div className='mt-4 mx-5 text-sm'>{item.major}</div>
                <div className='mt-4 mx-5 text-sm'>{item.year}</div>
                <div className='mt-4 mx-5 text-sm'>{item.socials}</div>
                <div className='mt-4 mx-5 text-sm'>{item.statement}</div>
              </div>
            </div>        
          ))}
        </div>
      </div>

      <Canvas title='' />
      <About />    
    </div>
  );
};

export default Board;