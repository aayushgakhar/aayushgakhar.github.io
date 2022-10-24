import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Transition } from '@headlessui/react';

import Logo from '../assets/AG-logos_transparent.png'

// eslint-disable-next-line
import { Link } from 'react-scroll';

const navigation = [
  { name: 'About', href: '#about', current: true, offset: -80 },
  { name: 'Skills', href: '#skills', current: false, offset: -80 },
  { name: 'Projects', href: '#projects', current: false, offset: -80 },
  { name: 'Contact', href: '#contact', current: true, offset: -80 }
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className='sticky top-0 w-full h-[80px] flex justify-between items-center px-4 backdrop-blur bg-white/75 dark:bg-slate-900/75 z-50 border-b border-slate-700/30 dark:border-slate-400/30'>
      <div>
        <img src={Logo} alt='AG' className='w-[50px]' />
      </div>
      {/* menu */}
      <ul className='hidden sm:flex'>
        {navigation.map((item) => (
          <li key={item.name} className='px-4'>
            <Link
              activeClass='active'
              to={item.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={300}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='sm:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes className='text-lg ' />}
      </div>

      {/* mobile menu */}
      <Transition
        className='sm:hidden fixed top-0 left-0 w-full h-full'
        show={nav}
        enter='transition ease-out duration-300'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-200'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div
          className={
            'flex flex-col justify-center items-center w-full h-screen backdrop-blur bg-white/90  dark:bg-slate-900/90'
          }
        >
          {navigation.map((item) => (
            <div key={item.name} className='py-6 text-4xl'>
              <Link
                onClick={handleClick}
                to={item.name.toLowerCase()}
                smooth={true}
                duration={500}
                offset={item.offset}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
}

export default Navbar
