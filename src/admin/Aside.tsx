import React from 'react';
  import sidebarBg from './assets/bg2.jpg';
  import { FaHome, FaInfoCircle, FaSignOutAlt, FaServicestack, FaRegImages,FaPhoneAlt  } from'react-icons/fa';
  import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';

interface IProps{
    collapsed:any, 
    toggled:any, 
    handleToggleSidebar:any
}
export const Aside = ({ collapsed, toggled, handleToggleSidebar }:IProps) => {
    return (
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            DIRECT ADMIN
          </div>
        </SidebarHeader>
  
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaHome />}
            >
              Home
            </MenuItem>
            <MenuItem icon={<FaInfoCircle />}> Projects</MenuItem>
            <MenuItem icon={<FaRegImages />}> Clients</MenuItem>
            <MenuItem icon={<FaServicestack />}> Services</MenuItem>
            <MenuItem icon={<FaPhoneAlt />}> Contact</MenuItem>
          </Menu>
        </SidebarContent>
  
        <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <a
              href=""
              // target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaSignOutAlt />
              <span> Logout</span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    );
  };

  // https://reactrouter.com/web/example/nesting