import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='max-w-[1200px] h-full mx-auto flex justify-between p-5 bg-white'>

      <div>
        <h1 className='text-2xl'>Ashutosh Nayak</h1>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className='lg:hidden'>
        <button onClick={toggleMenu}>
          <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button>

        {menuOpen && (
          <div className='flex flex-col gap-3 text-xl'>
            <button onClick={toggleMenu}><a href='#projects'>Projects</a></button>
            <button onClick={toggleMenu}><a href='#techstack'>About</a></button>
            <button onClick={toggleMenu}><a href='#contact'>Contact Me</a></button>
          </div>
        )}
      </div>

      {/* Regular menu for larger screens */}
      <div className='lg:flex gap-6 text-xl hidden'>
        <div>
          <button><a href='#projects'>Projects</a></button>
        </div>
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
