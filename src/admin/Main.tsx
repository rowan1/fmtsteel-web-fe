import React from 'react';

import Switch from 'react-switch';

import reactLogo from './assets/logo.svg';
var { FaBars } = require('react-icons/fa');
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
              <h1>
                <img width={80} src={reactLogo} alt="react logo" /> title
              </h1>
              <p>description</p>
              
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