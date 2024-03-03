import React from 'react';
import { ProjectsData } from '../ProjectsData';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import ProjectCard2 from './ProjectCard2';
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
    <>
    {/* project 1 */}
      <div className='lg:w-[1200px] w-[90%] mx-auto rounded-lg mt-10 p-5 sm:p-10 bg-[#f1f5f9]' id='projects'>
        <div className='text-center text-2xl font-semibold text-[#0284c7] mb-5'>
        Projects
        </div>
        <div>
          <ProjectCard card={ProjectsData[0]}></ProjectCard>
        </div>
      </div>
    {/* project 2 */}
    <div className='lg:w-[1200px] w-[90%] mx-auto rounded-lg mt-10 p-5 sm:p-10 bg-[#f1f5f9]'>
        <ProjectCard2 card={ProjectsData[2]}></ProjectCard2>
    </div>
    {/* project 3 */}
    <div className='lg:w-[1200px] w-[90%] mx-auto rounded-lg mt-10 p-5 sm:p-10 bg-[#f1f5f9]'>
        <ProjectCard2 card={ProjectsData[1]}></ProjectCard2>
    </div>
    </>
  );
};

export default Projects;
