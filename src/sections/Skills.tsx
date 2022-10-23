import React from "react";
import { Fade } from "react-awesome-reveal";
import SkillIcon from "../components/SkillIcon";

const icons = [
  {
    name: "python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
  },
  {
    name: "java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  {
    name: "c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    name: "c++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "sql",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "html",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "css",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "react",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    name: "arduino",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg",
  },
];

const Skills = () => {
  return (
    <section className='mx-auto'>
      <div className=''>
        <h2 className='hover-2 text-4xl font-bold inline'>
          Skills
        </h2>
        <p className='py-4 text-gray-400'>
          These are the technologies I have worked with.
        </p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
        <Fade cascade damping={0.01}>
          {icons.map((icon) => (
            <SkillIcon key={icon.name} icon={icon} />
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
