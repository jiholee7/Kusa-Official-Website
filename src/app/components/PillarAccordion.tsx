import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

export interface AccProps{
  setAccNum: Function
}

const PillarAccordion = (props: AccProps) => {
  const { setAccNum } = props;
  return (
    <section>
      <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="mt-10 sm:mr-0 lg:mr-14">
          <div onClick={() => setAccNum(1)}>
            <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                      <div className="font-bold text-lg">
                        KUSA Big/Little
                      </div>
                      <div>
                        <MdOutlineArrowDropDown size={32}/>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="flex flex-col gap-2 mb-6 text-black px-4">
                    <p>
                    Big/Little Week is a two day program where our External Vice Presidents pair underclassmen (후배) with upperclassmen (선배). KUSA hosts games and activities for the Bigs and Littles to get to know one another better. 
                    </p>
                    <p>
                    Every semester KUSA releases a Big/Little Form where students can apply to be a Big, Little, or both! We try to pair our members based on their interests and what they are looking for in a Big or Little.
                    </p>
                    <p>
                      Apply to be a Big, Little, or both and be a part of our KUSA ​가족! 
                    </p>                   
                </AccordionItemPanel>
            </AccordionItem>
          </div>
          <div onClick={() => setAccNum(2)}>
            <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                      <div className="font-bold text-lg">
                        Atlanta Trip
                      </div>
                      <div>
                        <MdOutlineArrowDropDown size={32}/>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="flex flex-col gap-2 mb-6 text-black px-4">
                    <p>
                      Every Spring Semester KUSA goes on a trip to Atlanta, Georgia for a weekend. We explore the K-Town that Atlanta has to offer and visit various shops, museums, cafes, restaurants, and karaoke. Our members are not restricted to just Korean related activities/places. We encourage members to explore and visit places the city has to offer such as the Georgia Aquarium and Coke Factory.
                    </p>
                    <p>
                      Atlanta Trip information comes out in the fall. Information can be found on our instagram or linktree. In order to go, you MUST attend one information meeting led by our IVP.                
                    </p>
                    <p>
                      If you have any questions about the KUSA Atlanta Trip, please email our Internal Vice President at <a href= "mailto: kusa.ivp@gmail.com"> kusa.ivp@gmail.com </a>
                    </p>                   
                </AccordionItemPanel>
            </AccordionItem>
          </div>
          <div onClick={() => setAccNum(3)}>
            <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                      <div className="font-bold text-lg">
                        KUSA Social Events
                      </div>
                      <div>
                        <MdOutlineArrowDropDown size={32}/>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="flex flex-col items-center gap-5 mb-6 text-black px-4">
                    <p>
                      KUSA has many socials throughout the year including study socials, picnics, casual sports, and more!
                    </p>
                    <p>
                      We also have aftersocials after GBMs at local restaurants or cafes!
                    </p>
                    <p>
                      Keep up to date for any upcoming socials through our instagram! Come hang out with KUSA!
                    </p>
                    <a className='w-64 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={'https://www.instagram.com/ufkusa/'}>Instagram</a> 
                                       
                </AccordionItemPanel>
            </AccordionItem>
          </div>
            

        </Accordion>
        
    </section>
  );
};

export default PillarAccordion;