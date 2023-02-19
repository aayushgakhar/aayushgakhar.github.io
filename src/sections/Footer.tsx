import React from "react";
import { BsEnvelope, BsGithub, BsLinkedin, BsMailbox, BsMailbox2, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <footer className='px-10'>
      <div className='border-t border-slate-900/30 dark:border-slate-200/20  w-full max-w-5xl mx-auto flex-col justify-center align-middle text-center py-2'>
        <div className='text-center py-2'>
          Connect with me:
          <a
            href='https://github.com/aayushgakhar'
            className='px-2'
          >
            <BsGithub className='inline' />
          </a>
          <a
            href='https://www.linkedin.com/in/aayush-gakhar/'
            className='px-2'
          >
            <BsLinkedin className='inline' />
          </a>
          <a
            href='http://t.me/aayushgakhar'
            className='px-2'
          >
            <BsTelegram className='inline' />
          </a>
          <a
            href='mailto:aayushgakhar13@gmail.com'
            className='px-2'
          >
            <BsEnvelope className='inline' />
          </a>
        </div>
        <div className='pb-2'>
          <p className=''>© Aayush Gakhar | 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
