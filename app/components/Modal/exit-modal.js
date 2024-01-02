"use client"
import React, { useState } from "react";
import Modal from "react-modal";
import Image from 'next/image'
import "../Modal/style.css"
import Link from "next/link";
// Modal.setAppElement("#__next"); // Set the root element for accessibility

export default function ExitModal({style={color:"#002147"},showArrow=true}) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const taxDome = "https://mertzinternationallimited.taxdome.com/app/settings/organizer_templates/90212/edit?return_url=https%3A%2F%2Fmertzinternationallimited.taxdome.com%2Fapp%2Fsettings%2Forganizer_templates"
  return (
    <>
        <button
        onClick={handleOpenModal}
        id='button2'
        type="button"
        className="flex flex-row justify-center items-center px-5 mt-24 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        style={style}
        >
        Skip on Tax Savings {!showArrow ? <></> : <Image alt='arrow-right' width={50} height={50} src='images/icons/elements/arrow-right.svg' style={{ height: '30px', paddingTop: '3px', marginLeft: '15px' }} />}
        </button>
      <Modal
        isOpen={showModal}
        // contentLabel="Minimal Modal Example"
        className="flex flex-col justify-center w-full h-full bg-neutral-500 bg-opacity-25 items-center"
        
        onRequestClose={handleCloseModal}
            >
        <button
            onClick={handleCloseModal}
            style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            }}
        >
            <Image alt='arrow-right' width={50} height={50} src='images/icons/elements/close.svg' style={{ height: '30px', paddingTop: '3px', marginLeft: '15px' }} />
        </button>
        <div className="flex flex-col justify-center bg-white p-8 lg:w-1/4 text-center">
            <div id="title" className="text-6xl mt-5">
                Give Up?
            </div>
            <div id="text" className="mt-5">
                Working with us means simplifying your expat tax obligations, maximizing tax savings, and living a better expat lifestyle. Are you sure you want to give up on these benefits?
            </div>
            <Link href={taxDome} id='button-go' type="button" className="px-10 py-4 lg:mt-24 mt-10 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                  No, I want to save on taxes.
            </Link>
            <Link href={"https://www.facebook.com/mertzinternational"} onClick={handleCloseModal} id='button-give-up' type="button" className="px-10 py-4 lg:mt-5 mt-3" >
                  Give up.
            </Link>
        </div>
        
      </Modal>
    </>
  );
}
