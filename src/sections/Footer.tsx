import React from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <footer className='bg-slate-900 px-10'>
      <div className='border-t border-slate-200/5 w-full flex-col justify-center align-middle text-center py-2'>
        <div className='text-center py-2 text-slate-400'>
          Connect with me:
          <a
            href='https://github.com/aayushgakhar'
            className='px-2 hover:text-gray-300'
          >
            <BsGithub className='inline' />
          </a>
          <a
            href='https://www.linkedin.com/in/aayush-gakhar/'
            className='px-2 hover:text-gray-300'
          >
            <BsLinkedin className='inline' />
          </a>
          <a
            href='http://t.me/aayushgakhar'
            className='px-2 hover:text-gray-300'
          >
            <BsTelegram className='inline' />
          </a>
        </div>
        <div className='pb-2'>
          <p className='text-gray-50 '>© Aayush Gakhar | 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
