import React, { useState } from "react";


import LanguageSwitch from "./LanguageSwitch";
import { navLinks } from "../assets/lib/data";
import ThemeSwitcher from "./ThemeSwticher";
import { useLanguage } from "../context/lang-context"
import { Link } from "react-scroll";
const CustomNavLink = ({ link, children, linkEn, activeSection }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLinkActive = isHovered || linkEn === activeSection;
    
    const linkClasses = isLinkActive
      ? "transition-all duration-200 relative"
      : " transition-all duration-700";
  
    return (
      <li>
        <Link activeClass="active" smooth spy
          to={link}
          aria-current={link}
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
    // const [toggle, setToggle] = useState(false);

    const { language } = useLanguage();

         const activeSection = "home";

    
    return (
      <header className="px-5 py-5 dark:bg-gray-700 z-50 dark:text-white text-black bg-white text-white fixed w-full bg-neutral-100 ">
      <div className=" flex items-center justify-center ">
      <div className=" container mx-auto grid grid-cols-12  gap-3">

 
        <div className="col-span-1">
        <a href="/" className="logo text-2xl font-bold  bg-gradient-to-r font-medium text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-500">
          SL
        </a>

        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:block flex col-span-8 justify-items-start">
        <ul className="flex justify-start items-center">
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

      <div className="col-span-3 flex justify-end">
       <LanguageSwitch />
          <ThemeSwitcher/>
      </div>
        {/* Mobile Nav */}
        {/* <nav
          className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
        >
          <ul className="flex flex-col">
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#blog">Blog</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#resume">Resume</a>
            </li>
          </ul>
        </nav> */}
        
        </div>
        </div>
      </header>
    );
  };
  export { CustomNavLink };
  export default Header;
  

