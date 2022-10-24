import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
    <div className='sticky top-0 w-full h-[80px] flex justify-between items-center px-4 backdrop-blur bg-white/75 dark:bg-slate-900/75 z-50 border-b border-gray-700/30'>
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
      <ul
        className={
          !nav
            ? 'hidden opacity-0 scale-0'
            : 'sm:hidden sm:opacity-0 scale-100 absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-background opacity-100 transition duration-1000'
        }
      >
        {navigation.map((item) => (
          <li key={item.name} className='py-6 text-4xl'>
            <Link
              onClick={handleClick}
              to={item.name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={item.offset}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* social links */}
    </div>
  );
}

export default Navbar
