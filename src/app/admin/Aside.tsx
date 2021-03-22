import React, { useState } from 'react';
import sidebarBg from './assets/bg2.jpg';
import { FaHome, FaSignOutAlt, FaServicestack, FaRegImages,FaPhoneAlt, FaInfo  } from'react-icons/fa';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { Routes } from '../routesConfig/Routes';
import { navigate } from '@reach/router';
import { LogoutComponent } from '../App';

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
          
            <MenuItem icon={<FaHome />}> 
              Home
              <Link to={Routes.admin} />
            </MenuItem>
            <MenuItem icon={<FaInfo />}> 
              Projects 
              <Link to={Routes.projects} />
            </MenuItem>
            <MenuItem icon={<FaServicestack />}> 
            <Link to={Routes.services} />
              Services
            </MenuItem>
            <MenuItem icon={<FaRegImages />}> 
              Clients
              <Link to={Routes.clients} />
            </MenuItem>
            <MenuItem icon={<FaPhoneAlt />}> 
              Contact
              <Link to={Routes.contacts} />
            </MenuItem>
          </Menu>
          
        </SidebarContent>
          <SidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            {/* <a
              className="sidebar-btn"
              rel="noopener noreferrer"
              onClick={()=>{navigate(Routes.login)}}
            >
              <FaSignOutAlt />
              <span> Logout</span>
            </a> */}
            {LogoutComponent()}
          </div>
        </SidebarFooter>
      </ProSidebar>
    );
  };

  // https://reactrouter.com/web/example/nesting