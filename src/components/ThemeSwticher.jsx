import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };



  return (
    <>
 {/* <!-- Dark mode switcher --> */}
          <button  onClick={toggleDarkMode}
      id="theme-toggle"
      type="button"
      className="text-gray-900  bg-gradient-to-r from-teal-500 to-cyan-500 dark:text-white-400 hover:bg-gray-800 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      <svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
            className="fill-black"
            d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
          />
          <path
            className="fill-black"
            d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
          />        </svg>
        
      <svg className="dark:hidden " width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
            className="fill-white"
            d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
          />
          <path
            className="fill-white"
            d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
          />        </svg>
    
      
      
    </button>
    {/* <!-- Dark mode switcher end --> */}

    {/* <button title="Toggle Theme" 
    onClick={toggleDarkMode}
    className={`  w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        dark:focus:ring-blue-600 
        focus:border-transparent ${
      darkMode ? 'bg-yellow-400' : 'bg-gray-800'
    } ${
      darkMode ? 'text-gray-900' : 'text-white'
    } transition-colors duration-200`}
  >
   {/* // {darkMode ? 'Light Mode' : 'Dark Mode'} */}
    {/* <div id="toggle"
        className="
            rounded-full 
            w-4 
            h-4 
            bg-blue-600 
            dark:bg-blue-500 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        ">
      </div>
  </button> */} 

  
</>
  );
};

export default ThemeSwitcher;