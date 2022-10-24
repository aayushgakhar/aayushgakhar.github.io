import React, {useState} from "react";
import { HiExternalLink } from "react-icons/hi";
import { Transition } from "@headlessui/react";

const Card = ({ project }: any) => {
  var [hov, sethov] = useState(false)
  const mouseEnter = () => {
    sethov(true)
  }
  const mouseLeave = () => {
    sethov(false)
  }

  return (
    <div
      // ref={domRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={{ backgroundImage: `url(${project.img})` }}
      className={
        'transition shadow-lg container rounded-md mx-auto bg-no-repeat bg-center bg-cover hover:scale-[1.01] duration-500 h-[250px] '
      }
    >
      <Transition
        className='absolute top-0 left-0 w-full h-full'
        show={hov}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-101"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-101"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className='rounded-md h-full w-full opacity-0 hover:opacity-100 focus:opacity-100 transition-opacity duration-300 flex flex-col justify-center align-middle text-center bg-gradient-to-br from-sky-500/90 to-indigo-500/90'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            {project.name}
          </span>
          <span className='text-sm text-white px-10 c'>{project.desc}</span>
          <div className='pt-3 text-center'>
            <a href={project.link}>
              <button className='flex items-center text-center rounded-lg px-4 py-3 m-2 mx-auto bg-white text-gray-700 font-bold text-lg hover:bg-gray-200 '>
                github
                <span>
                  <HiExternalLink className='inline ml-1' />
                </span>
              </button>
            </a>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Card;
