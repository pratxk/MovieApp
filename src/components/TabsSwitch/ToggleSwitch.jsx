import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <div className="flex items-center bg-transparent border-1px rounded-full w-64 shadow-inner">
      <button
        className={`relative w-1/2 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
          isDay ? 'text-gray-800' : 'text-gray-500'
        }`}
        onClick={() => setIsDay(true)}
      >
        {isDay && (
          <span className="absolute inset-0 rounded-full bg-white shadow-md transform scale-105"></span>
        )}
        <span className="relative z-10 flex items-center justify-center">
        
          Day
        </span>
      </button>
      <button
        className={`relative w-1/2 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
          !isDay ? 'text-gray-800' : 'text-gray-500'
        }`}
        onClick={() => setIsDay(false)}
      >
        {!isDay && (
          <span className="absolute inset-0 rounded-full bg-white shadow-md transform scale-105"></span>
        )}
        <span className="relative z-10 flex items-center justify-center">
          Week
        </span>
      </button>
    </div>
  );
};

export default ToggleSwitch;