import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <section className='bg-[#17141D]'>
     <nav className=" text-white p-4 container mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
         <img src="https://i.ibb.co.com/84ss8tXS/Frame-1597882443.png" alt="" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0 z-10`}
        >
          <a href="#" className="block md:inline-block py-2 hover:text-purple-400 ">
            Terms and conditions
          </a>
          <a href="#" className="block md:inline-block py-2 hover:text-purple-400">
            Privacy
          </a>
          <a href="#" className="block md:inline-block py-2 hover:text-purple-400">
            Packages
          </a>
          <a href="#" className="block md:inline-block py-2 hover:text-purple-400">
            Access portal
          </a>
          <a href="#" className="block md:inline-block py-2 hover:text-purple-400">
            FAQ
          </a>
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
        <button
    className="bg-gradient-to-r from-[#2C3069] to-[#BB12C0] py-2 px-10 rounded-[8px] text-white font-semibold"
    aria-expanded={isOpen}
  >
    Login
  </button>
        </div>

  
     
      </div>
    </nav>
   </section>
  );
};

export default Navbar;