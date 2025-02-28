import React, { useState, useEffect } from 'react';

const LightSwitch = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  // Toggle light/dark mode
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };

  // Apply light/dark mode based on state
  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, [isLightMode]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <button
        onClick={toggleMode}
        className="px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none"
      >
        {isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};

export default LightSwitch;
