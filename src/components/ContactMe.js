import React from 'react';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaSquareXTwitter, FaSquareGithub } from 'react-icons/fa6';

const ContactMe = () => {
  return (
    <div className='lg:w-[1200px] w-[90%] mx-auto rounded-lg mt-10 p-8 lg:p-20 bg-[#111827] flex flex-col lg:flex-row gap-10 justify-around items-center' id='contact'>
      {/* socials */}
      <div className='flex  gap-5 text-center'>
        <div className='text-2xl lg:text-4xl text-slate-200 font-bold'>Socials</div>
        <div>
          <a href='https://www.linkedin.com/in/ashu00/' target='_blank' rel='noreferrer' className='text-4xl lg:text-5xl text-slate-500 hover:underline'>
            <IoLogoLinkedin />
          </a>
        </div>
        <div>
          <a href='https://twitter.com/ashutoshnayak00' target='_blank' rel='noreferrer' className='text-4xl lg:text-5xl text-slate-500 hover:underline'>
            <FaSquareXTwitter />
          </a>
        </div>
        <div>
          <a href='https://github.com/ninjakappa007' target='_blank' rel='noreferrer' className='text-4xl lg:text-5xl text-slate-500 hover:underline'>
            <FaSquareGithub />
          </a>
        </div>
      </div>

      {/* contact details */}
      <div className='text-xl lg:text-2xl text-slate-200 text-center lg:text-left mt-5 lg:mt-0'>
        <p>Email: <a href='mailto:ashutoshnayak410@gmail.com' className='text-slate-500 hover:underline'>ashutoshnayak410@gmail.com</a></p>
      </div>
    </div>
  );
};

export default ContactMe;
