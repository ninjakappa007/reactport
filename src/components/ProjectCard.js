import React from 'react';

const ProjectCard = ({ card }) => {
  return (
    <div className='flex flex-col lg:flex-row justify-around mt-10'>
      {/* text part */}
      <div className='lg:w-1/2 flex justify-center flex-col gap-3'>
        <p className='text-4xl lg:text-6xl text-slate-900 font-black'>{card.name}</p>
        <p className='text-lg lg:text-xl'>{card.bio}</p>
        <div className='flex gap-4 mt-4'>
          <a href={card.github} target='_blank' rel='noopener noreferrer' className='bg-white text-lg lg:text-xl rounded-lg hover:scale-105 duration-300 pl-4 pr-4 pt-2 pb-2'>
            Github
          </a>
          <a href={card.live} target='_blank' rel='noopener noreferrer' className='bg-white text-lg lg:text-xl rounded-lg hover:scale-105 duration-300 pl-4 pr-4 pt-2 pb-2'>
            Live Demo
          </a>
        </div>
      </div>

      {/* image part */}
      <div className='lg:max-w-[500px] max-h-[400px] overflow-hidden mt-3'>
        <img src={process.env.PUBLIC_URL + card.image} alt="Project" className='w-full h-full object-cover rounded-lg' />
      </div>
    </div>
  );
};

export default ProjectCard;
