import React, { useState, useEffect } from 'react';

import Switch from 'react-switch';
import logo from '../FMT-Steel-logo.jpg';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { Contacts } from './pages/Contacts';  
import { Switch as RouterSwitch, Route } from 'react-router-dom';

import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { Routes } from '../routesConfig/Routes';
import { PrivateRoute } from '../context/PrivateRoute';
import { navigate } from '@reach/router';
import { Home } from './pages/Home';
import '../../app/style/inputStyle.scss'
import { LogoutComponent } from '../App';
import { Careers } from './pages/Careers';

interface IProps{
    collapsed:any,
    handleToggleSidebar:any,
    handleCollapsedChange:any,
    toggled:any
}
export const Main=({
        collapsed,
        handleToggleSidebar,
        handleCollapsedChange,
      }:IProps) => {

          useEffect(()=>{
          },[])
    
        return (
          <main id="#">
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)} >
              <FaBars />
            </div>
            <header>
              <Switch
                height={16}
                width={30}
                checkedIcon={false}
                uncheckedIcon={false}
                onChange={handleCollapsedChange}
                checked={collapsed}
                onColor="#219de9"
                offColor="#bbbbbb"
              />
            
                <img width={40} style={{margin:'20px'}} src={logo} alt="FMTSTEEL" />

            {/* <a
              className="sidebar-btn"
              rel="noopener noreferrer"
              onClick={()=>{navigate(Routes.login)}}
              style={{float:'right', margin:'20px', color:'black'}}
            >
              <FaSignOutAlt />
              <span> Logout</span>
            </a> */}
            {LogoutComponent()}
            </header>
            <Route exact path={Routes.admin}>
              <PrivateRoute path={Routes.admin} comp={Home} />
              </Route>
            <Route exact path={Routes.projects}>
              <PrivateRoute path={Routes.projects} comp={Projects}/>
            </Route>
            <Route exact path={Routes.services}>
            <PrivateRoute path={Routes.services} comp={Services}/>
            </Route>
            <Route exact path={Routes.clients}>
            <PrivateRoute path={Routes.clients} comp={Clients}/>
            </Route>
            <Route exact path={Routes.contacts}>
              <PrivateRoute path={Routes.contacts} comp={Contacts}/>
            </Route>
            <Route exact path={Routes.careers}>
              <PrivateRoute path={Routes.careers} comp={Careers}/>
            </Route>
            <footer>
              <div className="container text-center">
            <p>
              &copy; FMT STEEL
            </p>
          </div>
            </footer>
          </main>
        );
      }