import React, { useEffect } from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  var [fn, setfn] = React.useState('Aayush');
  var [ln, setln] = React.useState('Gakhar');
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var f = () => {
    let fn_ = "Aayush";
    let ln_ = "Gakhar";
    let iterations = 0;
    const interval = setInterval(() => {
      setfn(
        fn
          .split('')
          .map((letter, index) => {
            if (index<iterations) {
              return fn_[index];
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
      );
      setln(
        ln
          .split('')
          .map((letter, index) => {
            if (index < iterations-6) {
              return ln_[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('')
      );
      iterations+=1/2;
      if (iterations > 12) {
        clearInterval(interval);
      }
    }, 30);
  };
  // useEffect(() => {
  //   f();
  // }, []);
  return (
    // <div  className='w-full h-auto min-h-screen bg-background'>

    <section className='about mx-auto sm sm:pb-20'>
      <div className='animation-wrapper'>
        <div className='animation relative font-[dazzle-unicase] text-4xl w-min sm:text-7xl font-bold'>
          <p className='text-transparent text-lg sm:text-2xl'>Hi, my name is</p>
          <p className='name-random'>
            {fn} <br /> {ln}
          </p>
        </div>
      </div>
      <h2 className='text-4xl sm:text-7xl font-bold '>
        I'm a Software Developer
      </h2>
      <p className='py-4 max-w-[700px]'>
        I'm a software developer with 2 years of coding experience. I am skilled
        in python, java, c and web development including HTML, CSS, JS, React,
        Bootstrap and Tailwind.
      </p>
      <div>
        <div className='sm:inline-block p-0 mr-5'>
          <Link
            to='projects'
            smooth={true}
            duration={500}
            className='w-fit group border-current border-2 px-6 py-3 flex items-center hover:bg-slate-900  dark:hover:bg-slate-500 hover:border-transparent hover:text-white'
          >
            View Work
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='octicon arrow-symbol-mktg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                fill='currentColor'
                d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
              ></path>
              <path
                className='dash'
                stroke='currentColor'
                d='M1.75 8H11'
                strokeWidth='1.5'
                strokeLinecap='round'
              ></path>
            </svg>
          </Link>
        </div>
        <div className='inline-block'>
          <a
            href='https://drive.google.com/drive/folders/13HcrwHrLQaYD21GnqePtUKqAcj-pgwQK?usp=sharing'
            className='w-fit group border-current border-2 px-6 py-3 my-2 flex items-center hover:bg-slate-900  dark:hover:bg-slate-500 hover:border-transparent hover:text-white'
          >
            Resume
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='octicon arrow-symbol-mktg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                fill='currentColor'
                d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
              ></path>
              <path
                className='dash'
                stroke='currentColor'
                d='M1.75 8H11'
                strokeWidth='1.5'
                strokeLinecap='round'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
