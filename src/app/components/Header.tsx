"use client"

import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { IoMenu, IoClose  } from "react-icons/io5";
import Link from 'next/link';

import config from '../config/index.json';

const Menu = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  return (
    <>
      <svg
        className={`hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2`}
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <Popover>
        <div className="relative pt-10 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <div className='cursor-pointer'>
                    <span className="sr-only">{companyName}</span>
                    <img alt="logo" className="h-16 w-auto sm:h-24" src={logo} />
                  </div>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Open main menu</span>
                    <IoMenu className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:flex-row md:justify-between md:items-center lg:ml-10 md:pr-20 w-full">
              <div className='hidden md:flex md:flex-row md:justify-between md:items-center md:ml-10 pr-8 lg:pr-20 md:space-x-8'>
                {navigation.map((item) => (
                <Link
                  href={item.href}
                  className='text-lg text-primary transition ease-in-out duration-200 hover:underline hover:font-bold'
                  key={item.key}
                >
                  {item.name}
                </Link>
              ))}
              </div>
              <div className='md:flex md:flex-row space-x-4 lg:space-x-8 lg:pl-40 xl:pl-52'>
                <Link
                  href={'/dance'}
                  className='w-24 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-3 md:text-lg md:px-10'
                >
                  DANCE
                </Link>
                <Link
                  href={'/sports'}
                  className='w-24 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-3 md:text-lg md:px-10'
                >
                  SPORTS
                </Link>
                <Link
                  href={'/klp'}
                  className='w-24 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-3 md:text-lg md:px-10'
                >
                  KLP
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className={`rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden`}
            >
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className='cursor-pointer'>
                  <Link href="/">
                    <img className="h-8 w-auto" src={logo} alt="" />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button
                    className={`bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary`}
                  >
                    <span className="sr-only">Close main menu</span>
                    <IoClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className='text-primary transition ease-in-out duration-200 hover:underline hover:font-bold block px-3 py-2 rounded-md font-medium hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
                <div className='flex flex-row justify-between space-x-4'>
                  <Link
                    href={'/dance'}
                    className="block flex-1 flex flex-col items-center px-3 py-2 rounded-md text-base font-medium hover:text-primary bg-primary hover:bg-border transition ease-in-out duration-200"
                  >
                    DANCE
                  </Link>
                  <Link
                    href={'/sports'}
                    className="block flex-1 flex flex-col items-center px-3 py-2 rounded-md text-base font-medium hover:text-primary bg-primary hover:bg-border transition ease-in-out duration-200"
                  >
                    SPORTS
                  </Link>
                  <Link
                    href={'/klp'}
                    className="block flex-1 flex flex-col items-center px-3 py-2 rounded-md text-base font-medium hover:text-primary bg-primary hover:bg-border transition ease-in-out duration-200"
                  >
                    KLP
                  </Link>
                </div>
                
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Menu;
