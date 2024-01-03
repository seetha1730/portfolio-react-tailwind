import React, { useState,useEffect } from "react";
import LanguageSwitch from "./LanguageSwitch";
import { navLinks } from "../assets/lib/data";
import ThemeSwitcher from "./ThemeSwticher";
import { useLanguage } from "../context/lang-context"
import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import { Collapse } from 'flowbite';
const CustomNavLink = ({ link, children, linkEn, activeSection }) => {
    const [isHovered, setIsHovered] = useState(false);
 
    const isLinkActive = isHovered || linkEn === activeSection;
    const linkClasses = isLinkActive
      ? " relative  "
      : "  dark:text-white flex py-1";
     
    return (
      <>
      <li>

        <Link activeClass="block cursor-pointer py-2 px-3 text-white bg-[#06A8BF] w-full rounded lg:dark:bg-transparent lg:bg-transparent lg:text-[#06A8BF] lg:p-0 dark:text-white dark:bg-gray-600" smooth spy
          to={link}
          aria-current="page"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={linkClasses}
        >
          {children}
        </Link>
      </li>
      </>
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
      <nav className=" px-5 border-gray-200 dark:bg-gray-900 fixed w-full bg-neutral-100 z-50">
      <div className=" container mx-auto">
        <div className=" flex flex-wrap items-center  lg:justify-between mx-auto p-1 grid grid-cols-12 ">
        
          <a href="https://seetha.dev/" className="flex items-center col-span-8 lg:col-span-1  space-x-3 rtl:space-x-reverse">
              <span className="text-2xl font-bold dark:text-white bg-gradient-to-r font-medium text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-500">SL</span>
          </a>
          <div className="flex col-span-2 justify-end block  lg:hidden ">
          <LanguageSwitch />
            <ThemeSwitcher />
            </div>
            <div className="flex col-span-2 lg:col-span-2 justify-end block lg:hidden">
          <button id='hamburger'    onClick={() => handleHMclick()}  data-collapse-toggle="navbar-default" type="button" className="inline-flex col-span-4 items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
       
          <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          </div>
          <div className="hidden w-full col-span-12 lg:col-span-9 lg:block  " id="navbar-default">
            <ul className="font-medium flex items-center flex-col justify-start p-4 lg:p-0 mt-4 border border-gray-500 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
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
          <li > <a className="flex dark:text-white" href="/SeethaLakhsmi-FE-2024.pdf" >{language === "en" ? "Resume " : "CV " }<FiDownload className="ml-3 mt-1"/> </a></li>

            </ul>
        
          </div>
          <div className="flex justify-end col-span-2 hidden lg:flex ">
          <LanguageSwitch />
            <ThemeSwitcher />
            </div>
        </div>
        </div>
      </nav>
      
    
      </>
    );
  };
  export { CustomNavLink };
  export default Header;
  

