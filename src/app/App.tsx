import React from 'react';
import { Router, RouteComponentProps } from "@reach/router";
import { LandingPage } from './LandingPage';
import { Routes } from './routesConfig/Routes';
import { Dashboard } from './admin/Dashboard';
import { SignIn } from './admin/SignIn';
import { PrivateRoute } from './context/PrivateRoute';

// import { Dashboard } from './admin/Dashboard';
// import { Routes } from './routesConfig/Routes.js';
// import { LandingPage } from './LandingPage';
export const App=()=>{

    return (
      <Router primary={false}>
        <LandingPage path={Routes.home} />
        <SignIn path={Routes.login}/>
        <PrivateRoute path={Routes.admin} comp={Dashboard} />
      </Router>
    )
  }