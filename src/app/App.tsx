import React from 'react';
import { Router, RouteComponentProps } from "@reach/router";
import { LandingPage } from './LandingPage';
import { Routes } from './routesConfig/Routes';
import { Dashboard } from './admin/Dashboard';
import { SignIn } from './admin/SignIn';
import { PrivateRoute } from './context/PrivateRoute';
import { Projects } from './admin/pages/Projects';
import { Clients } from './admin/pages/Clients';
import { Services } from './admin/pages/Services';
import { Contacts } from './admin/pages/Contacts';
import { Careers } from './components/Careers';

// import { Dashboard } from './admin/Dashboard';
// import { Routes } from './routesConfig/Routes.js';
// import { LandingPage } from './LandingPage';
interface IScrollToTopProps extends RouteComponentProps {
  children?: React.ReactNode;
}
export const ScrollToTop: React.FC<IScrollToTopProps> = (props) => {

  React.useEffect(() => {
    globalThis.window.scrollTo(0, 0);
    // toast.configure();
   
  }, [props.location?.pathname]);

  return <>{props.children} </>;
};

export const App=()=>{

    return (
      <Router primary={false}>
        <ScrollToTop path="/">
        <LandingPage path={Routes.home} />
        <SignIn path={Routes.login}/>
        <PrivateRoute path={Routes.admin} comp={Dashboard} />
        </ScrollToTop>
      </Router>
    )
  }