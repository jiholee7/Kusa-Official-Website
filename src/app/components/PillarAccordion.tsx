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
                        Pillar 1 accordion desc 1
                      </div>
                      <div>
                        <MdOutlineArrowDropDown size={32}/>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="flex flex-col gap-2 mb-6 text-black px-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui ac sapien. Suspendisse nec ultricies est. Curabitur nec velit ac nisi facilisis volutpat.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis!
                    </p>                   
                </AccordionItemPanel>
            </AccordionItem>
          </div>
          <div onClick={() => setAccNum(2)}>
            <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                      <div className="font-bold text-lg">
                        Pillar 1 accordion desc 2
                      </div>
                      <div>
                        <MdOutlineArrowDropDown size={32}/>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="flex flex-col gap-2 mb-6 text-black px-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui ac sapien. Suspendisse nec ultricies est. Curabitur nec velit ac nisi facilisis volutpat. 
                     </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui ac sapien. 
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui ac sapien. Suspendisse!
                    </p>                   
                </AccordionItemPanel>
            </AccordionItem>
          </div>
          <div onClick={() => setAccNum(3)}>
            <AccordionItem className="bg-white overflow-hidden mb-6 shadow-lg">
                <AccordionItemHeading>
                    <AccordionItemButton className="bg-white p-4 w-full justify-between cursor-pointer flex hover:bg-gray-200/25">
                      <div className="font-bold text-lg">
                        Pillar 1 accordion desc 3
                      </div>
                      <div>
                        <MdOutlineArrowDropDown size={32}/>
                      </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="flex flex-col items-center gap-5 mb-6 text-black px-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui ac sapien.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui ac sapien. Suspendisse nec ultricies est.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, lectus at placerat scelerisque, urna nulla tincidunt orci, vel bibendum est dui ac sapien. Suspendisse nec ultricies est. Curabitur nec velit!
                    </p>
                    <a className='w-full sm:w-64 flex items-center justify-center px-3 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10' target='_blank' href={'https://www.instagram.com/ufkusa/'}>Placehold button</a> 
                                       
                </AccordionItemPanel>
            </AccordionItem>
          </div>
            

        </Accordion>
        
    </section>
  );
};

export default PillarAccordion;