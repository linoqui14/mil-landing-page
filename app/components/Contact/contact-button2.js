"use client"
import React from 'react';
import Image from 'next/image'

const ContactButton2 = () => {
  const email = 'mertzlifemarketing@gmail.com';

  const handleContactClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      id='button3'
      type="button"
      className="flex flex-row justify-center items-center px-5 py-4 mt-24"
      style={{ color: "#FFFFFF" }}
      onClick={handleContactClick}
    >
      Contact Us
      <Image
        alt='arrow-right'
        width={50}
        height={50}
        src='images/icons/elements/arrow-right-white.svg'
        style={{ height: '30px', marginLeft: '15px', color: 'white' }}
      />
    </button>
  );
};

export default ContactButton2;
