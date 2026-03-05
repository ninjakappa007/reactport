import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#techstack', label: 'About' },
    { href: '#contact', label: 'Contact Me' },
    { href: 'https://www.notion.so/Blogs-31a0dac86d1e80ec94bac018881fe465', label: 'Blog', external: true },
  ];

  return (
    <div className='max-w-[1200px] h-full mx-auto flex justify-between items-center p-5 bg-white relative'>
      <h1 className='text-2xl'>Ashutosh Nayak</h1>

      {/* Desktop */}
      <div className='lg:flex gap-6 text-xl hidden'>
        {links.map(link => (
          <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile toggle */}
      <button className='lg:hidden text-2xl' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className='absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col p-4 gap-4 text-lg lg:hidden z-50'>
          {links.map(link => (
            <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
