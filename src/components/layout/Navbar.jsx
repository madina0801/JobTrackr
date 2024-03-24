import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import lightModeLogo from "../../assets/logo-light-mode.svg";
import darkModeLogo from "../../assets/logo-dark-mode.svg";

function Navbar() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 const [darkMode, setDarkMode] = useState(false);

 const darkModeHandler = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle("dark");
 };

 const content = (
  <>
   <div className="block md:hidden absolute top-16 w-full h-full left-0 right-0 bg-light/70 dark:bg-darkblue/70 text-darkblue dark:text-light transition z-50 backdrop-blur-lg">
    <ul className="text-center text-2xl font-medium p-20">
     <NavLink to="/" onClick={toggleMobileMenu}>
      <li className="mb-8 hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       Home
      </li>
     </NavLink>
     <NavLink to="/about" onClick={toggleMobileMenu}>
      <li className="mb-8 hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       About
      </li>
     </NavLink>
     <NavLink
      to="https://github.com/madina0801/JobTrackr"
      target="_blank"
      onClick={toggleMobileMenu}
     >
      <li className="hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       GitHub
      </li>
     </NavLink>
    </ul>
   </div>
  </>
 );

 return (
  <nav className="w-screen bg-lightgray dark:bg-mediumblue">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
     <img
      src={darkMode ? darkModeLogo : lightModeLogo}
      className="h-8"
      alt="JobTrackr Logo"
     />
     <span className="hidden md:block self-center text-2xl text-darkblue font-semibold whitespace-nowrap dark:text-light">
      JobTrackr
     </span>
    </div>
    <div className="flex items-center justify-center md:justify-start">
     <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 text-darkblue justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-lightblue dark:text-lightblue"
      aria-controls="navbar-default"
      aria-expanded="false"
      onClick={toggleMobileMenu}
     >
      {isMobileMenuOpen ? (
       <IoClose className="w-7 h-7" />
      ) : (
       <IoMenu className="w-7 h-7" />
      )}
     </button>
    </div>

    <div className="flex items-center">
     <div className="hidden md:block mr-4">
      <ul className="font-medium text-darkblue flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:text-light">
       <NavLink to="/">
        <li className="hover:text-lightblue">Home</li>
       </NavLink>
       <NavLink to="/about">
        <li className="hover:text-lightblue">About</li>
       </NavLink>
       <NavLink to="https://github.com/madina0801/JobTrackr" target="blank">
        <li className="hover:text-lightblue">GitHub</li>
       </NavLink>
      </ul>
     </div>
     <div>
      <button
       className="h-6 w-10 flex bg-darkgray text-darkblue rounded-lg justify-center items-center"
       onClick={darkModeHandler}
      >
       {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
     </div>
    </div>
   </div>

   <div>{isMobileMenuOpen && content}</div>
  </nav>
 );
}

export default Navbar;
