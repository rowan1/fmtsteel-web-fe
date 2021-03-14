import React, { useState } from 'react';
import { Aside } from './Aside';
import { Main } from './Main';
import { BrowserRouter as Router } from 'react-router-dom';

export const Layout=()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked:any) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value:any) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Router>
      <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      </Router>
    </div>
  );
}