import React from 'react';
import sidebarBg from './assets/bg2.jpg';
import { FaHome, FaServicestack, FaRegImages, FaPhoneAlt, FaInfo, FaFile } from 'react-icons/fa';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { Routes } from '../routesConfig/Routes';
import { LogoutComponent } from '../App';

interface IProps {
  collapsed: any,
  toggled: any,
  handleToggleSidebar: any,
  pathChange: (e: string) => void
}
export const Aside = ({ collapsed, toggled, handleToggleSidebar, pathChange }: IProps) => {
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

            <a onClick={() => { pathChange(Routes.admin) }}>
              Home
              </a>
            {/* <Link to={Routes.admin} /> */}
          </MenuItem>
          <MenuItem icon={<FaInfo />}>
            <a onClick={() => { pathChange(Routes.projects) }}>
              Projects
              </a>

            {/* <Link to={Routes.projects} /> */}
          </MenuItem>
          <MenuItem icon={<FaServicestack />}>
            {/* <Link to={Routes.services} /> */}
            <a onClick={() => { pathChange(Routes.services) }}>
              Services
              </a>
            {/* Services */}
          </MenuItem>
          <MenuItem icon={<FaRegImages />}>
            {/* Clients */}
            <a onClick={() => { pathChange(Routes.clients) }}>
              Clients
              </a>
            {/* <Link to={Routes.clients} /> */}
          </MenuItem>
          <MenuItem icon={<FaPhoneAlt />}>
            {/* Contact */}
            {/* <Link to={Routes.contacts} /> */}
            <a onClick={() => { pathChange(Routes.contacts) }}>
              Contact
              </a>
          </MenuItem>
          <MenuItem icon={<FaFile />}>
            {/* Careers
              <Link to={Routes.careers} /> */}
            <a onClick={() => { pathChange(Routes.careers) }}>
              Careers
              </a>
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