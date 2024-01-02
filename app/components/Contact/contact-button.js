"use client"
import React from 'react';
import Image from 'next/image'

const ContactButton = ({showArrow=true}) => {
  const email = 'mertzlifemarketing@gmail.com';

  const handleContactClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      id='button4'
      type="button"
      className="flex flex-row justify-center items-center py-4 mt-14 w-6/12 mb-32 lg:w-2/12"
      style={{ color: "#002147" }}
      onClick={handleContactClick}
    >
      Contact Us
      {!showArrow ? <></> : <Image alt='arrow-right' width={50} height={50} src='images/icons/elements/arrow-right.svg' style={{ height: '30px', paddingTop: '3px', marginLeft: '15px' }} />}
    </button>
  );
};

export default ContactButton;