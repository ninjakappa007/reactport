import React from 'react';
import { ProjectsData } from '../ProjectsData';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';

const Projects = () => {
  const [card, setCard] = useState(0);

  function changeHandler(event) {
    let name = event.target.name;
    const totalProjects = ProjectsData.length;

    if (name === 'next') {
      setCard((card + 1) % totalProjects);
    } else {
      setCard((card - 1 + totalProjects) % totalProjects);
    }
  }

  return (
    <div className='lg:w-[1200px] w-[90%] mx-auto rounded-lg mt-10 p-5 sm:p-10 bg-[#f1f5f9]'>
      <div className='text-center text-2xl font-semibold text-[#0284c7] mb-5'>
        Projects
      </div>
      <div>
        <ProjectCard card={ProjectsData[card]}></ProjectCard>
      </div>
      <div className='flex flex-col sm:flex-row justify-around items-center mt-5 text-xl font-extrabold'>
        <button
          onClick={(event) => changeHandler(event)}
          name='previous'
          className='mb-2 sm:mb-0'
        >
          <GrCaretPrevious className='hover:scale-125 duration-300' />
        </button>
        <p className='text-lg font-extralight sm:mx-5 my-2 sm:my-0'>Navigate</p>
        <button
          onClick={(event) => changeHandler(event)}
          name='next'
          className='mb-2 sm:mb-0'
        >
          <GrCaretNext className='hover:scale-125 duration-300' />
        </button>
      </div>
    </div>
  );
};

export default Projects;
