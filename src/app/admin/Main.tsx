import React, { useState, useEffect } from 'react';

import Switch from 'react-switch';
import logo from '../FMT-Steel-logo.jpg';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { Contacts } from './pages/Contacts';
import {ILandingPageData} from '../LandingPage';
import JsonData from '../data/data.json';
import { Switch as RouterSwitch, Route } from 'react-router-dom';

import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { Routes } from '../routesConfig/Routes';
import { PrivateRoute } from '../context/PrivateRoute';
import { navigate } from '@reach/router';
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

        const [landingPageData, setLandingPageData] = useState<ILandingPageData>({});
        const getlandingPageData =()=> {
          setLandingPageData({...JsonData})
          }
          useEffect(()=>{
          getlandingPageData();
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

            <a
              className="sidebar-btn"
              rel="noopener noreferrer"
              onClick={()=>{navigate(Routes.login)}}
              style={{float:'right', margin:'20px', color:'black'}}
            >
              <FaSignOutAlt />
              <span> Logout</span>
            </a>
            </header>
            <Route exact path={Routes.admin}>
              Admin Dash board
            </Route>
            <Route exact path={Routes.projects}>
              <Projects Projects={landingPageData.Projects}/>
            </Route>
            <Route exact path={Routes.services}>
            <Services Services={landingPageData.Services}/>
            </Route>
            <Route exact path={Routes.clients}>
            {/* <Clients /> */}
            <PrivateRoute path={Routes.clients} comp={Clients}/>
            </Route>
            <Route exact path={Routes.contacts}>
              <PrivateRoute path={Routes.contacts} comp={Contacts}/>
            {/* <Contacts Contact={landingPageData.Contact}/> */}
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