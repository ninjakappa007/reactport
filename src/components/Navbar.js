import React, { useState } from 'react';

const Navbar = () => {

  return (
    <div className='max-w-[1200px] h-full mx-auto flex justify-between p-5 bg-white'>

      <div>
        <h1 className='text-2xl'>Ashutosh Nayak</h1>
      </div>

      <div className='lg:flex gap-6 text-xl hidden'>
        {/*<div>*/}
        {/*  <button><a href='#projects'>Projects</a></button>*/}
        {/*</div>*/}
        <div>
          <button><a href='#techstack'>About</a></button>
        </div>
        <div>
          <button><a href='#contact'>Contact Me</a></button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
