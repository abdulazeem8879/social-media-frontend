import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to <html> tag when isDarkMode is true
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          My Website
        </div>

        {/* Nav Links */}
        <div className="flex space-x-4">
          <a
            href="#home"
            className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </div>

        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
