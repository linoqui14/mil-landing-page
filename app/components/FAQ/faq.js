"use client"
import React from 'react';
import Image from 'next/image'
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './faq.css'; // Import your custom CSS file

export default function FAQs() {
  return (
    <Accordion style={{ height: '100%', width: '100%', borderColor:'transparent'}} allowMultipleExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className='flex flex-row justify-between items-center text-lg lg:text-2xl w-full py-10 px-10' style={{color:'#002147'}}>
            How does MIL's 2-in-1 Tax Preparation Service work?
            <Image width={50} height={50}
                  alt='arrow-down'
                  src='images/icons/elements/arrow-down.svg' 
                />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className='font-light lg:font-light lg:text-lg sm:text-sm text-left lg:ml-5'>
            Our service simplifies tax preparation by offering a single point of contact for handling tax requirements in both the US and your country of residence. We streamline the process, providing a comprehensive checklist and guiding you through the entire procedure effortlessly.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className='flex flex-row justify-between items-center text-lg lg:text-2xl w-full py-10 px-10' style={{color:'#002147'}}>
          What countries do you cover for tax preparation?
            <Image width={50} height={50}
                  alt='arrow-down'
                  src='images/icons/elements/arrow-down.svg' 
                />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className='font-light lg:font-normal lg:text-lg sm:text-sm text-left lg:ml-5'>
          We cater to US expats residing in various countries worldwide. Please reach out to us to confirm if we cover your country of residence.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className='flex flex-row justify-between items-center text-lg lg:text-2xl w-full py-10 px-10' style={{color:'#002147'}}>
            How can I be sure that MIL's service aligns with my specific tax needs?
            <Image width={50} height={50}
                  alt='arrow-down'
                  src='images/icons/elements/arrow-down.svg' 
                />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className='font-light lg:font-normal lg:text-lg sm:text-sm text-left lg:ml-5'>
            Our experienced team led by an expat founder ensures a personalized approach. We assess your unique situation through an initial intake form to determine if our service suits your requirements.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className='flex flex-row justify-between items-center text-lg lg:text-2xl w-full py-10 px-10' style={{color:'#002147'}}>
            What sets MIL's service apart from traditional tax preparers?
            <Image width={50} height={50}
                  alt='arrow-down'
                  src='images/icons/elements/arrow-down.svg' 
                />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className='font-light lg:font-normal lg:text-lg sm:text-sm text-left lg:ml-5'>
            Our service simplifies tax preparation by offering a single point of contact for handling tax requirements in both the US and your country of residence. We streamline the process, providing a comprehensive checklist and guiding you through the entire procedure effortlessly.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className='flex flex-row justify-between items-center text-lg lg:text-2xl w-full py-10 px-10' style={{color:'#002147'}}>
            How do I get started with MIL's tax preparation service?
            <Image width={50} height={50}
                  alt='arrow-down'
                  src='images/icons/elements/arrow-down.svg' 
                />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className='font-light lg:font-normal lg:text-lg sm:text-sm text-left lg:ml-5'>
            Unlike dealing with two professionals in two countries, we offer streamlined communication, a consolidated checklist, and a single payment structure, saving you time, effort, and potential confusion.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className='flex flex-row justify-between items-center text-lg lg:text-2xl w-full py-10 px-10' style={{color:'#002147'}}>
            How do I get started with MIL's tax preparation service?
            <Image width={50} height={50}
                  alt='arrow-down'
                  src='images/icons/elements/arrow-down.svg' 
                />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className='font-light lg:font-normal lg:text-lg sm:text-sm text-left lg:ml-5'>
            To begin, click on the link below to fill out our intake form. We'll review your information and get in touch to discuss your specific needs and eligibility for our streamlined tax services. Answer the intake form [embed link here].
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
