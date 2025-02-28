import React from 'react';

const SearchPopup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800 dark:text-white transform transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Search</h2>
          <button
            onClick={closePopup}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 text-lg"
          >
            <span className="font-bold">X</span>
          </button>
        </div>
        <input
          type="text"
          placeholder="Search for something..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SearchPopup;
