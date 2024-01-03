import React from "react";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";



const Footer = () => {
    return <div className="py-5  dark:bg-gray-700 z-50 dark:text-white bg-gray-800 text-white  flex justify-center text-center bg-primary text-gray-900 "> 
      <div className="mt-1 flex justify-between w-3/12 lg:w-2/12 ">

     <a href="https://github.com/seetha1730">
        <FiGithub className="dark:text-white text-gray-200" />
      </a>
      <a href="https://seetha.dev">
        <FiLink className="dark:text-white text-gray-200" />
      </a>
      <a href="https://www.linkedin.com/in/seetha-lakshmi-19a00b53/">
        <FiLinkedin className="dark:text-white text-gray-200"/>
      </a>
      <a href="mailto:seetharaj1990@gmail.com">
        <FiMail className="dark:text-white text-gray-200"/>
      </a>
      </div>

<div> <p className="ml-5 "> &copy; 2023 seetha all right reserved</p></div>
      </div>;
  };
  export default Footer;
