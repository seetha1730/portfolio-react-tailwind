import React, { useState,useEffect } from "react";

import LanguageSwitch from "./LanguageSwitch";
import { navLinks } from "../assets/lib/data";
import ThemeSwitcher from "./ThemeSwticher";
import { useLanguage } from "../context/lang-context"
import { Link } from "react-scroll";
import { Collapse } from 'flowbite';
const CustomNavLink = ({ link, children, linkEn, activeSection }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLinkActive = isHovered || linkEn === activeSection;
    const linkClasses = isLinkActive
      ? "transition-all duration-200 relative"
      : " transition-all duration-700 dark:text-white";
     
    return (
      <li>
        <Link activeClass="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" smooth spy
          to={link}
          aria-current="page"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={linkClasses}
        >
          {children}
        </Link>
      </li>
    );
  };

const Header = () => {
    const { language } = useLanguage();
         const activeSection = "home"; 
         const [hamburgerMenuStatus, setHMState] = useState(false)
         const $hamburgerEl = document.getElementById('hamburger');
         const $navbarEl = document.getElementById('navbar-default');
    
         
         useEffect(() => {
         }, []);
         const options = {
          onCollapse: () => {
            console.log('element has been collapsed');
          },
          onExpand: () => {
            console.log('element has been expanded');
          },
          onToggle: () => {
            console.log('element has been toggled');
          },
        };
         const hamInstanceOptions = {
          id: 'navbar-default',
          override: true
        };
         const hamburgerCollapse = new Collapse($navbarEl, $hamburgerEl, options, hamInstanceOptions)
         
      
        const handleHMclick = () => {
          if (hamburgerMenuStatus) {
            hamburgerCollapse.collapse()
          } else {
            hamburgerCollapse.expand()
          }
          setHMState(!hamburgerMenuStatus)
        }

    return (
<>
      <nav className=" border-gray-200 dark:bg-gray-900 fixed w-full bg-neutral-100 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
          <a href="https://seetha.dev/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SL</span>
          </a>
          <LanguageSwitch />
            <ThemeSwitcher />
          <button id='hamburger'    onClick={() => handleHMclick()}  data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
       
          <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul className="font-medium flex  flex-col flex-start p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => (
            <CustomNavLink className="dark:text-white"
              key={link[language]}
              link={`${link.hash}`}
              linkEn={link.en}
              activeSection={activeSection}
            >
             {link[language]}
            </CustomNavLink>
          ))} 
            </ul>
            <div className="flex justify-items-end">
      
            </div>
          </div>
        </div>
      </nav>
      
      {/* <header className="px-5 py-5 dark:bg-gray-700 z-50 dark:text-white text-white  fixed w-full bg-neutral-100 ">
      <div className=" flex items-center justify-center ">
      <div className=" container mx-auto grid grid-cols-12  gap-3">

 
        <div className="col-span-1">
        <a href="/" className="logo text-2xl font-bold dark:text-white bg-gradient-to-r font-medium text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-500">
          SL
        </a>
        

        </div>
        {/* Desktop Nav */}
        {/* <nav className="hidden md:block flex col-span-8 justify-items-start">
        <ul className="flex justify-start items-center ">
         {navLinks.map((link) => (
            <CustomNavLink className="dark:text-white"
              key={link[language]}
              link={`${link.hash}`}
              linkEn={link.en}
              activeSection={activeSection}
            >
             {link[language]}
            </CustomNavLink>
          ))}
         
        </ul>
      </nav>

      <div className="col-span-11 flex justify-end items-center">
           
            
            <button
              onClick={handleToggle}
              className="md:hidden text-white ml-2 bg-gradient-to-r p-2.5 rounded-lg from-teal-500 to-cyan-500  focus:outline-none text-gray-900"
            >
              {toggle ? <MdOutlineClose /> : <GiHamburgerMenu/>}
            </button>
          </div>

       {/* Mobile Nav */}
       {/* <nav
            className={`${
              !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0 bottom-0"
            }`}
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <CustomNavLink
                  key={link[language]}
                  link={`${link.hash}`}
                  linkEn={link.en}
                  activeSection={activeSection}
                >
                  {link[language]}
                </CustomNavLink>
              ))}
            </ul>
          </nav>
        
        </div>
        </div>
      </header> */} 
      </>
    );
  };
  export { CustomNavLink };
  export default Header;
  

