import React from 'react';

import Switch from 'react-switch';
import logo from '../FMT-Steel-logo.jpg';
var { FaBars, FaSignOutAlt } = require('react-icons/fa');
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