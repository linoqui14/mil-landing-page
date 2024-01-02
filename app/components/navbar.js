"use client"
import Image from 'next/image'



const email = 'mertzlifemarketing@gmail.com';

const handleContactClick = () => {
  window.location.href = `mailto:${email}`;
};
export default function Navbar() {
  return (
    <nav className="bg-white">
    <div className="mx-8 max-w-8xl px-2 sm:px-6 lg:px-8 my-3">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Image
              alt='logo'
              src="images/logo.svg"
              height={500}
              width={200}
            />
          </div>
          
        </div>
        <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button onClick={handleContactClick} type="button" className="px-5 py-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" style={{backgroundColor:"#BB133E"}}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1">
        <a href="#" className="flex justify-center text-white px-5 py-2 text-base font-medium" aria-current="page" style={{backgroundColor:"#BB133E"}}>Contact Us</a>
      </div>
    </div>
  </nav>
  
  )
}
