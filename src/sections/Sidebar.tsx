import * as React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const social = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aayush-gakhar/",
    icon: FaLinkedin,
    color: "#2060fc",
  },
  {
    name: "Github",
    href: "https://github.com/aayushgakhar",
    icon: FaGithub,
    color: "#333333",
  },
  {
    name: "Email",
    href: "mailto:aayushgakhar13@gmail.com",
    icon: HiOutlineMail,
    color: "#6fc2b0",
  },
  {
    name: "Resume",
    href: "https://drive.google.com/drive/folders/13HcrwHrLQaYD21GnqePtUKqAcj-pgwQK?usp=sharing",
    icon: BsFillPersonLinesFill,
    color: "#565f69",
  },
];

const Sidebar = () => {
  //event listener for window size

  return (
    <div className='flex flex-col fixed top-1/2 -translate-y-1/2 left-0 z-50'>
      <ul className=''>
        {social.map((item) => (
          <li
            key={item.name}
            className={
              'text-slate-100 hover:text-slate-300 transition-all flex pr-7 md:pr-4 w-[120px] h-[60px] rounded-sm justify-between items-center ml-[-100px] md:ml-[-65px] hover:ml-0 hover:pr-4 duration-300'
            }
            style={{ backgroundColor: item.color }}
          >
            <a
              className='flex justify-between items-center w-full px-1   dark:text-gray-300 '
              href={item.href}
            >
              {item.name}
              <item.icon size={30}></item.icon>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
