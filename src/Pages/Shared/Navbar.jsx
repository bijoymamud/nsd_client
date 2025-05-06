import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoggedinUserInfoQuery } from '../redux/features/baseApi/baseApi';
import { FaRegUser } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {data: loggedInUser} = useLoggedinUserInfoQuery();
  console.log(loggedInUser)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <section className='bg-[#17141D] sticky top-0 z-50 shadow-md shadow-gray-800/90'>
     <nav className=" text-white py-3 container mx-auto">
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

        {
        
        loggedInUser ?
       

<div className="dropdown dropdown-end bg-black">
<div tabIndex={0} role="button" >
<div>
          <img src="https://teamjapanese.com/wp-content/uploads/2022/03/boy-in-japanese.jpg" alt="user image" className='h-14 w-14 rounded-full object-cover' />
        </div> 
</div>
<ul tabIndex={0} className="dropdown-content menu bg-[#1f1b24] mt-2 rounded-xl z-[1] w-48 p-2 shadow-lg border border-white/10 text-white">
  <li>
    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
    <FaRegUser size={14} className='mb-1'/>
      Profile
    </button>
  </li>
  <li>
    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition">
    <BiCategory size={16} className='mb-1'/>
      Dashboard
    </button>
  </li>
  <li>
    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition text-red-400 hover:text-red-300">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
      </svg>
      Logout
    </button>
  </li>
</ul>

</div>
        :
         <div className="hidden md:block space-x-2">
         <Link to="/login">
         <button
       className="bg-gradient-to-r from-[#2C3069] to-[#BB12C0] py-2 px-10 rounded-[8px] text-white font-semibold"
       aria-expanded={isOpen}
     >
       Login
     </button>
         </Link>
   
         <Link to="/registration">
         <button
       className="bg-gradient-to-r from-[#2C3069] to-[#BB12C0] py-2 px-10 rounded-[8px] text-white font-semibold"
       aria-expanded={isOpen}
     >
       Sign Up
     </button>
         </Link>
           </div>
        
      }

  
     
      </div>
    </nav>
   </section>
  );
};

export default Navbar;