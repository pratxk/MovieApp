import React, { useContext, useState, useCallback } from 'react';
import { trendingContext } from '../../Context/TrendingContext';

const ToggleSwitch = ({ val1, val2 }) => {
  const { state, setState } = useContext(trendingContext);

  const handleToggle = useCallback(() => {
    setState(!state);
  }, [state, setState]);

  return (
    <div
      className="flex items-center bg-transparent border-border-white rounded-full w-64 shadow-inner"
      role="switch"
      aria-checked={state}
    >
      <button
        className={`relative w-1/2 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
          state ? 'text-gray-800' : 'text-gray-500'
        }`}
        onClick={handleToggle}
        aria-label={val1}
      >
        {state && (
          <span className="absolute inset-0 rounded-full bg-white shadow-md transform scale-105"></span>
        )}
        <span className="relative z-10 flex items-center justify-center">
          {val1}
        </span>
      </button>
      <button
        className={`relative w-1/2 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
          !state ? 'text-gray-800' : 'text-gray-500'
        }`}
        onClick={handleToggle}
        aria-label={val2}
      >
        {!state && (
          <span className="absolute inset-0 rounded-full bg-white shadow-md transform scale-105"></span>
        )}
        <span className="relative z-10 flex items-center justify-center">
          {val2}
        </span>
      </button>
    </div>
  );
};

export default ToggleSwitch;