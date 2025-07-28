import React from 'react';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaSquareXTwitter, FaSquareGithub } from 'react-icons/fa6';

const ContactMe = () => {
  return (
    <div className='lg:w-[1200px] w-[95%] mx-auto rounded-lg mt-10 p-4 sm:p-8 lg:p-20 bg-[#111827] flex flex-col lg:flex-row gap-6 lg:gap-10 justify-around items-center' id='contact'>
      {/* socials */}
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 text-center items-center'>
        <div className='text-xl sm:text-2xl lg:text-4xl text-slate-200 font-bold'>Socials</div>
        <div className='flex gap-4'>
          <a href='https://www.linkedin.com/in/ashutoshnayaak/' target='_blank' rel='noreferrer' className='text-3xl sm:text-4xl lg:text-5xl text-slate-500 hover:underline'>
            <IoLogoLinkedin />
          </a>
          <a href='https://x.com/ashutoshnayaak' target='_blank' rel='noreferrer' className='text-3xl sm:text-4xl lg:text-5xl text-slate-500 hover:underline'>
            <FaSquareXTwitter />
          </a>
          <a href='https://github.com/ninjakappa007' target='_blank' rel='noreferrer' className='text-3xl sm:text-4xl lg:text-5xl text-slate-500 hover:underline'>
            <FaSquareGithub />
          </a>
        </div>
      </div>

      {/* contact details */}
      <div className='text-base sm:text-xl lg:text-2xl text-slate-200 text-center lg:text-left mt-5 lg:mt-0'>
        <p>Email: <a href='mailto:ashutoshnayak410@gmail.com' className='text-slate-500 hover:underline'>ashutoshnayak410@gmail.com</a></p>
      </div>
    </div>
  );
};

export default ContactMe;
