import React, { useState } from 'react';
import { Aside } from './Aside';
import { Main } from './Main';

export const Layout=()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [rtl, setRtl] = useState(false);

  const handleCollapsedChange = (checked:any) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked:any) => {
    setRtl(checked);
    // setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked:any) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value:any) => {
    setToggled(value);
  };

  return (
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
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
        handleRtlChange={handleRtlChange}
        handleImageChange={handleImageChange}
      />
    </div>
  );
}