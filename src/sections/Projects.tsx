import React from "react";

import Retailimg from "../assets/retail_store.png";
import Willhero from "../assets/will_hero.png";
import Simplerisc from "../assets/simple_risc.png";
import Card from "../components/Card";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    name: "Retail Store",
    img: Retailimg,
    desc: "A retail store management system built with MySQL, Python and Tkinter.",
    link: "https://github.com/aayushgakhar/retail_store",
  },
  {
    name: "Will Hero",
    img: Willhero,
    desc: "A simple RPG game built with Java, using javafx for the frontend. Used OOPS and event driven programming. Developed in a team of 2.",
    link: "https://github.com/aayushgakhar/will-hero",
  },
  {
    name: "Simple RISC",
    img: Simplerisc,
    desc: "A simple RISC machine simulator built with Java.",
    link: "https://github.com/aayushgakhar/Simple-risc-assembler-and-simulator",
  },
];

const Projects = () => {
  return (
    <section className='projects mx-auto'>
      {/* <div className=' '> */}
      <div className='pb-8'>
        <h2 className='hover-2 text-4xl font-bold inline'>
          Projects
        </h2>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        <Fade cascade damping={0.1}>
          {projects.map((project) => (
            <Card key={project.name} project={project} />
          ))}
        </Fade>
      </div>

      {/* </div> */}
    </section>
  );
};

export default Projects;
