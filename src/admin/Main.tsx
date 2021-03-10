import React, { useState, useEffect } from 'react';

import Switch from 'react-switch';
import logo from '../FMT-Steel-logo.jpg';
import { Projects } from './pages/Projects';
import { Services } from './pages/Services';
import { Clients } from './pages/Clients';
import { Contacts } from './pages/Contacts';
import {ILandingPageData} from '../LandingPage';
import JsonData from '../data/data.json';

import { FaBars, FaSignOutAlt } from 'react-icons/fa';
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
          <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)} >
              <FaBars />
            </div>
            <header>
            {/* <div className="block ">
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
            </div> */}
                <img width={40} style={{margin:'20px'}} src={logo} alt="FMTSTEEL" />

        
              
            </header>
            
            <Projects Team={landingPageData.Team}/>
            <Services Services={landingPageData.Services}/>
            <Clients />
            <Contacts />
      
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