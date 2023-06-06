import React, { useState } from 'react';
import './Sidebar.css';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <SidebarButton onClick={handleSidebarToggle} />
      {isSidebarOpen && <div className="sidebar">
        <li>Next Level</li>
        <li>Next Level</li>
        <li>Next Level</li>
        <li>Next Level</li>
        <li>Next Level</li>
        
        </div>}
    </div>
  );
};

export default Sidebar;