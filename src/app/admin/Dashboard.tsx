import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import 'react-pro-sidebar/dist/css/styles.css';
import './styles/App.scss';
import { Aside } from './Aside';
import { Main } from './Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainCDN } from './MainCDN';
import { Routes } from '../routesConfig/Routes';

interface IProps extends RouteComponentProps{

}
export const Dashboard: React.FunctionComponent<IProps> =(props:IProps)=>{
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  // const [path, setPath] = useState<string>("/admin");
  const [path, pathChanged] = useState<string>(Routes.admin);
  const handleCollapsedChange = (checked:any) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value:any) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`} style={{maxWidth:'100%'}}>
      <Router>
      {/* <MainCDN pathChanged={pathChanged}/> */}
      {/* <Aside
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        pathChange={(e:string)=>{setPath(e)}}
      /> */}
      <Main
        toggled={toggled}
        collapsed={collapsed}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        path={path}
      />
      
      </Router>
    </div>
  );
}