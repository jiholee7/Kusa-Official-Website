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
      <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="mt-10 mr-14">
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
                      Every Spring Semester KUSA goes on a trip to Atlanta, Georgia for a weekend. Members explore the K-Town that Atlanta has to offer. We visit various shops, museums, cafes, restaurants, and karaoke. Members are not restricted to just Korean related activities/places. Last year, our members visited the Aquarium and Coke Factory.
                     </p>
                    <p>
                      The 2024 Atlanta Trip form is posted on our LinkTree. Our IVP is hosting Zoom Interest Meetings. Those who are going MUST attend at least one meeting.
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
                        Philanthrophy (KKOOM)
                      </div>
                      <div>
                        <MdOutlineArrowDropDown size={32}/>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="flex flex-col items-center gap-5 mb-6 text-black px-4">
                    <p>
                      Korean Kids and Orphanage Outreach Mission (KKOOM) provides access to education for Korean youth, such as funding for preschool and college scholarships.
                    </p>
                    <p>
                    KKOOM also sponsors and hosts holiday celebrations, summer activities, and other events throughout the year which helps the children and young adults have fun and learn life skills.
                    </p>
                    <p>
                    Additionally, KKOOM gives gifts of clothing, household items, and other tangible support to meet the basic needs at Korean children&#39;s homes. To learn more about KKOOM and help their mission, please visit their website!
                    </p>
                    <a className='w-64 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={'https://kkoom.org/'}>KKOOM Website</a> 
                                       
                </AccordionItemPanel>
            </AccordionItem>
          </div>
            

        </Accordion>
        
    </section>
  );
};

export default PillarAccordion;