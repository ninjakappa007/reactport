import React from 'react';

const TechStack = () => {
  return (
    <div className='lg:w-[1200px] w-[90%] mx-auto rounded-lg mt-10 p-5 sm:p-10 bg-[#030712]' id='techstack'>
      <p className='text-center text-[#ea580c] text-2xl sm:text-3xl font-semibold mb-5'>About</p>
      <div className='flex flex-col lg:flex-row justify-around items-center'>
        {/* logos */}
        <div className='flex flex-col lg:w-[40%] w-full mb-5 lg:mb-0'>
          <div className='flex gap-3 lg:w-[60px] w-[40px] h-[40px]'>
            <img src='/assets/HTML.png' alt='HTML Logo' />
            <img src='/assets/CSS.png' alt='CSS Logo' />
            <img src='/assets/Tailwind.png' alt='Tailwind CSS Logo' />
            <img src='/assets/React.png' alt='React Logo' />
            <img src='/assets/Redux.svg' alt='Redux Logo' />
          </div>

          <div className='flex gap-3 lg:w-[80px] w-[40px] h-[80px] scale-125 ml-5'>
            <img src='/assets/Javascript.svg' alt='JavaScript Logo' />
            <img src='/assets/Git.svg' alt='Git Logo' />
            <img src='/assets/MongoDB.svg' alt='MongoDB Logo' />
            <img src='/assets/NodeJs.svg' alt='Node.js Logo' className='lg:w-[60px] w-[40px] h-[80px]'/>
          </div>
          <p className='text-slate-200 text-base lg:text-xl font-light mt-5'>
            <span className='text-2xl lg:text-3xl font-bold'>Hello!</span>
            <br />
            I love learning new things and staying up-to-date with the latest web technologies. Excited to bring creativity and fresh ideas to the world of web development!
          </p>
        </div>

        {/* about details */}
        <div className='text-slate-200 lg:w-[50%] w-full font-light text-base lg:text-xl mt-5 lg:mt-0'>
          <p className='mb-5'>
            I'm diving into the MERN stack, which involves React.js, Express.js, Node.js, and MongoDB. I'm proficient at creating user-friendly interfaces using React and Tailwind CSS.
          </p>
          <p>
            Currently working as a Testing Associate at Amazon specializing in Automation. Proficient in Python, Selenium, and PyTest for efficient automation. Expertise in Networking and logs analysis, Skilled in SQL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
