import React, { useState } from 'react';
import './TabSwitch.css'; // Import CSS styles

const TabSwitch = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].direction);

  const handleTabClick = (direction) => {
    setActiveTab(direction);
  };

  return (
    <main>
      <h1 className="text-center">Tab Switch</h1>
      <div className="wrapper">
        <div className={`taeb-switch ${activeTab}`}>
          {tabs.map((tab) => (
            <div
              key={tab.direction}
              className={`taeb ${activeTab === tab.direction ? 'active' : ''}`}
              taeb-direction={tab.direction}
              onClick={() => handleTabClick(tab.direction)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TabSwitch;
