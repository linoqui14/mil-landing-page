import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNameNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

export default function Navbar() {
  // return (
  //   <nav classNameName="bg-grey">
  //   <div classNameName="mx-8 max-w-8xl px-2 sm:px-6 1 py-8">
  //     <div classNameName="relative flex h-16 items-center justify-between">

  //       <div classNameName="flex flex-shrink-0 items-center">
  //         <img classNameName="h-12 w-auto" src="images/logo.svg" alt="Your Company"/>
  //       </div>

  //       <div classNameName="flex flex-shrink-0 items-center">
  //         <button>
  //           Nice
  //         </button>
  //       </div>
        
  //     </div>
  //   </div>

  //   {/* <div className="sm:hidden" id="mobile-menu">
  //     <div className="space-y-1 px-2 pb-3 pt-2">
  //       <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
  //       <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
  //       <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
  //       <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
  //     </div>
  //   </div> */}
  //   </nav>
  // ) 
  return (
    <nav className="bg-white">
    <div className="mx-8 max-w-8xl px-2 sm:px-6 lg:px-8 my-3">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Image
              src="images/logo.svg"
              height={500}
              width={200}
            />
          </div>
          
        </div>
        <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" className="px-5 py-3 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" style={{backgroundColor:"#BB133E"}}>
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
